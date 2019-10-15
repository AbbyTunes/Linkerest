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
			// pinId: null,
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

		const currentBoards = [];	
		boards.forEach(board => currentBoards.push(board));

		if (currentBoards.length > 0 && currentBoards[0] && !this.state.boardId) {
			this.setState({ boardId: currentBoards[0].id })
		}

		if (boards.length === 0) {
			return ( <div> 
					<p>you don't have Boards yet</p>
					{/* <CreateBoardForm createBoard={CreateBoard} /> */}
				</div> ) 
		}

		let boardOptions;

		boardOptions = currentBoards.map(board => {
			return <option key={board.id} value={board.id}>{board.title}</option>
		})

		return (
			<div className="upper-form">
				<select className="selector" value={ this.state.boardId } onChange={this.handleInput("boardId")} >
					{boardOptions}
				</select>
				<button type="submit" className="save-button">create Pin</button>
			</div>
		)
	}

	render() {
		// console.log(this.state);
		const preview = this.state.photoUrl ? <img src={this.state.photoUrl} /> : null;
		return (
			<div className="form-canvas">

				<form onSubmit={this.handleSubmit} className="form-session">

					{this.constructBoardSelection()}
					<div className="lower-form">

						<div className="left-form">
							<input type="file" className="preview" onChange={this.handleFile} />
							{ preview }
						</div>
						
						<div className="right-form">
							
							<input type="title" value={this.state.title} 
									className="title-input"
									placeholder="Add your title"
									onChange={this.handleInput("title")} />

							<input type="description" value={this.state.description}
									className="description-input"
									placeholder="Tell everyone what your pin is about"
									onChange={this.handleInput("description")} />

							<input type="link" value={this.state.link}
									className="link-input"
									placeholder="Add a destination link"
									onChange={this.handleInput("link")} />
						</div>
					</div>

					{/* { this.constructBoardSelection() } */}
					
				</form>
			</div>
		);
	}
}

export default CreatePinForm;