# Linkerest

# [Live Demo](https://linkerest.herokuapp.com/#/)

## Technologies
 * Frontend: JavaScript, Ruby, React, Rails
 * Backend: Node.js, Redux
 * Database: PostgreSQL
 * Cloud Storage: AWS
 
 ![Imgur](https://i.imgur.com/JaTLd56.png)

## About Developer

### Abby Xu
JavaScript, React, Redux, GraphQL, Rails, MongoDB, Express, Node.js, PostgreSQL, and AWS
* [Portfolio](https://www.abbydeveloper.com)
* [Linkedin](https://www.linkedin.com/in/abby-jun-xu/)
* [Github](https://github.com/AbbyTunes/Abby_Portfolio)

![Imgur](https://i.imgur.com/GDACneq.png)

## Background and Overview
 * Linkerest is a photo and link sharing social media site.

 * Through Linkerest, users can upload photos to AWS, store them in different boards, and display the pins in a trendy tiling stile. 

 * Navigation is made easy on Linkerest, and users are never more than a click away from a new sharing experience.

 ## Features, Design, and Technical Challenges

### Home Page: 
### Display Pin index and items in trendy tiling style

![Imgur](https://i.imgur.com/clWLLrF.png)

```javascript

// pin_index.jsx
const columns = [[], [], [], []];
const pinsArray = pins.map((pin, idx) => {
	let bucket_idx = idx % 4;
	columns[bucket_idx].push(pin);
});

const columnPins = columns.map((col, idx) => {
	return (
		<div className="col" key={`col-${idx}`} >
			{col.map((pin) => {
				return (
				<div key={`pin-${pin.id}`}>
					<PinIndexItem pin={pin} boards={boards} removePin={removePin} />
				</div>
				)
			})}
		</div>
	)
});
```

### User Authentication:
### Using Ruby on Rails framework

![Imgur](https://i.imgur.com/XVREhfF.png)

```ruby
# application_controller.rb

	def current_user
		has_token = session[:session_token]
		return nil unless has_token
		@current_user ||= User.find_by_session_token(has_token)
	end

	def login(user)
		user.reset_session_token
		session[:session_token] = user.session_token
		@current_user = user
	end

	def logout
		current_user.reset_session_token
		session[:session_token] = nil
	end
```

### Stored image uploads on AWS S3, allowing app to scale on demand, and rendering photo previews at real-time

![Imgur](https://i.imgur.com/eaFUIbi.png)

```javascript

// create_pin_form.jsx
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
 
 // ...
 
 const preview = this.state.photoUrl ? <img className="offset-img" src={this.state.photoUrl} /> : ( 
			<div className="camera"></div>
 );
```

### Construct photo items on crossed tables of pins and boards, having the ability of creating and deleting dependently

![Imgur](https://i.imgur.com/mp0O9Zl.png)

```javascript
// create_pin_form.jsx

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
		this.props.history.push(`/my-boards/${boardId}`);
	})
))

```

### Pin Show:
### creating the logic to shorten link urls if it is too long to display in a div, but still keep the original url in database

![Imgur](https://i.imgur.com/4rnmVzb.png)

```javascript

// pin_show.jsx

chompLink() {		
	let newLink = this.props.pin.link;

	if (!newLink.length) {
		newLink = "no link yet"
	}
	if (newLink.startsWith("https://")) {
		newLink = newLink.slice(8);
	};
	if (newLink.startsWith("http://")) {
		newLink = newLink.slice(7);
	};
	if (newLink.endsWith(".com") && newLink.length > 24) {
		newLink = newLink.slice(0, -4);
	}
	if (newLink.length > 20) {
		newLink = newLink.slice(0, 20);
		newLink += "...";
	}
	return newLink;
}
```

### Board Index:
### Integrated CSS transition, transform and content attributes to create animation, making photo sharing an interactive and fun experience

![Imgur](https://i.imgur.com/oaVdAba.png)

```scss

// boards.scss
.board-outer:hover {
	background-color: rgb(233, 233, 233);
	-webkit-transition: all 0.35s; /* Safari prior 6.1 */ 
	transition: all 0.3s;
}

.board-outer:hover .board-delete {
	display: block;
}

.board-delete {
	display: none;
	position: absolute;
	right: 0;
	background: image-url("pen.png");
	background-size: contain;
	background-repeat: no-repeat;
	height: 30px;
	width: 30px;
	z-index: 100;
	cursor: pointer;
	-webkit-transition: all 0.35s; /* Safari prior 6.1 */ 
	transition: all 0.35s; 
	transition-timing-function: ease;
}

.board-delete:hover {
	display: block;
	width: 80px;
	height: 32px;
	border-radius: 20px;
	background: red;
}

.board-delete:hover:before {
	display: inline-block;
	content: "Delete";
	position: absolute;
    top: 0;
	right: 0;
	padding: 6px 16px;
    font-size: 16px;
    font-weight: 600;
    color: white;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    z-index: 200;
}
```

### Upcoming Features
* Search functionality
* Following & Followed
