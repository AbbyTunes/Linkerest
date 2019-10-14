import React from 'react';

class CreatePinForm extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			link: "",
			photo: null,
			photoUrl: null,
			boardId: null,
			// newly added
			pinId: null,
			title: "",
			description: ""
		}
		this.handleInput = this.handleInput.bind(this);
		this.handleFile = this.handleFile.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		this.props.fetchBoards();
	}

	handleInput(field) {
		return (e) => this.setState({ [field]: e.target.value })
	}

	handleFile(e) {

		const fileReader = new FileReader();
		// this.setState({ photo: e.currentTarget.files[0] });
		const file = e.currentTarget.files[0];
		fileReader.onloadend = () => {
			this.setState({ photoUrl: fileReader.result, photo: file });
		}

		if (file) {
			fileReader.readAsDataURL(file);
		} else {
			this.setState({ photoUrl: "", photo: null });
		}
	}

	handleSubmit(e) {
		e.preventDefault();

		const formData = new FormData();
		formData.append('pin[link]', this.state.link);

		if (this.state.photo) {
			formData.append('pin[photo]', this.state.photo);
		}

		$.ajax({
			url: '/api/pins',
			method: 'POST',
			data: formData,
			contentType: false,
			processData: false
		})
		.then(
			(response) => (
				$.ajax({
					url: `/api/boards/${this.state.boardId}/pins/${response.id}/items`,
					method: 'POST',
					data: { item: { title: this.state.title, description: this.state.description }}
				})
			)
		).then(
			(response) => console.log(response),
			(response) => console.log(response.responseJSON)
		)
		// this.props.createPin(this.state);
	}

	constructBoardSelection() {
		const { boards } = this.props;
		// debugger

		const currentBoards = [];
		
		boards.forEach(board => currentBoards.push(board));

		if (currentBoards.length > 0 && currentBoards[0] && !this.state.boardId) {
			this.setState({ boardId: currentBoards[0].id })
		}

		if (boards.length === 0) {
			return <div> currentUser has no Boards </div> 
			// return <CreateBoardForm createBoard={CreateBoard} />
		}

		let boardOptions;

		boardOptions = currentBoards.map(board => {
			return <option key={board.id} value={board.id}>{board.title}</option>
		})

		return (
			<div className="board-selector">
				<h3>boards</h3>
				<select name="selector" value={ this.state.boardId } onChange={this.handleInput("boardId")} >
					{boardOptions}
				</select>
			</div>
		)
	}

	render() {
		// console.log(this.state);
		const preview = this.state.photoUrl ? <img src={this.state.photoUrl} /> : null;
		return (
			<div>
				<form onSubmit={this.handleSubmit}>

					<label>
						Link
						<input type="link" value={this.state.link} onChange={this.handleInput("link")} />
					</label>
					

					<input type="file" onChange={this.handleFile} />
					<h3>photo preview</h3>
					{preview}

					{ this.constructBoardSelection() }

					<label>
						Title
						<input type="title" value={this.state.title} onChange={this.handleInput("title")} />
					</label>

					<label>
						Description
						<input type="description" value={this.state.description} onChange={this.handleInput("description")} />
					</label>

					<button type="submit">create Pin</button>
				</form>
			</div>
		);
	}
}

export default CreatePinForm;