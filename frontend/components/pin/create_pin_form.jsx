import React from 'react';

class CreatePinForm extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			link: "",
			photo: null,
			photoUrl: null
		}
		this.handleInput = this.handleInput.bind(this);
		this.handleFile = this.handleFile.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInput(field) {
		return (e) => this.setState({ [field]: e.target.value })
	}

	handleFile(e) {
		// this.setState({ photo: e.currentTarget.files[0] });
		
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
		}).then(
			(response) => console.log(response),
			(response) => console.log(response.responseJSON)
		);
		// debugger;
		// this.props.createPin(this.state);
	}

	render() {
		console.log(this.state);
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

					<button type="submit">create Pin</button>
				</form>
			</div>
		);
	}
}

export default CreatePinForm;