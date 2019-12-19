import React from 'react';
import { Link } from 'react-router-dom';

class CreatePinForm extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			link: "",
			photo: null,
			photoUrl: null,
			boardId: null,
			title: "",
			description: ""
		}
		this.handleInput = this.handleInput.bind(this);
		this.handleFile = this.handleFile.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		// this.constructBoardSelection = this.constructBoardSelection.bind(this);
	}

	componentDidMount() {
		this.props.fetchBoards();
	}

	handleInput(field) {
		return (e) => this.setState({ [field]: e.target.value })
	}

	handleFile(e) {

		const fileReader = new FileReader();
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
		// let saveButton = document.getElementById("save-pin-button");
		// saveButton.disabled = true;

		const formData = new FormData();
		formData.append('pin[link]', this.state.link);

		if (this.state.photo) {
			formData.append('pin[photo]', this.state.photo);
		}

		let boardId = this.state.boardId ? this.state.boardId : this.props.boards[0].id;
		console.log(boardId)
		$.ajax({
			url: '/api/pins',
			method: 'POST',
			data: formData,
			contentType: false,
			processData: false
		}).then((response) => (
			$.ajax({
				url: `/api/boards/${boardId}/pins/${response.id}/items`,
				method: 'POST',
				data: { item: { 
					title: this.state.title, 
					description: this.state.description
				}}
			}).then((response) => {
				// this.props.history.push(`/`);
				this.props.history.push(`/my-boards/${boardId}`);
				// location.reload(true);
			})
		))
	}

	constructBoardSelection() {
		const { boards } = this.props;

		const currentBoards = [];	
		boards.forEach(board => currentBoards.push(board));

		// if (currentBoards.length > 0 && currentBoards[0] && !this.state.boardId) {
		// 	this.setState({ boardId: currentBoards[0].id });
		// 	console.log(this.state.boardId);
		// }

		if (boards.length === 0) {
			return ( 
				<div className="create-pin-empty-board"> 
				</div> 
				
				// <div className="board-frame">
				// 	<div className="empty-board" >
				// 		<div className="empty-text"> you don't have Boards yet</div>
				// 		<Link to="/create-pin"><div className="upload-pin">Create Board</div></Link>
				// 	</div>
				// </div>
			) 
		}

		let boardOptions;

		boardOptions = currentBoards.map(board => {
			return <option className="board-options" key={board.id} value={board.id}>{board.title}</option>
		})

		let boardId = this.state.boardId ? this.state.boardId : this.props.boards[0].id;

		return (
			<div className="upper-form">
				<select className="selector" value={ boardId } onChange={this.handleInput("boardId")} >
					{boardOptions}
				</select>
				<button type="submit" className="save-button" id="save-pin-button">Save</button>
			</div>
		)
	}

	render() {
		const preview = this.state.photoUrl ? <img className="offset-img" src={this.state.photoUrl} /> : ( 
			<div className="camera"></div>
			);
		
		let name;
		if (this.props.currentUser) {
			name = this.props.currentUser.username;

		} else {
			name = "loading";
		}
		return (
			<div className="form-canvas">

				<form onSubmit={this.handleSubmit} className="form-session">

					{ this.constructBoardSelection() }
					<div className="lower-form">

						<div className="left-form">
							<input type="file" className="preview" onChange={this.handleFile} value="" />
							{/* <div className="camera" ></div> */}
							{ preview }
						</div>
						
						<div className="right-form">

							<input type="title" value={this.state.title} 
									className="title-input"
									placeholder="Add your title"
									onChange={this.handleInput("title")} />
							
							<div className="user-profile">
								<div className="user-name">{name}</div>
							</div>

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