```javascript
{
	entities: {
		users: {
			4: {
				id: 4,
				username: "name_1",
				passwordDigest: "1_password_digetst_string",
				sessionToken: "1_a_password_digetst_string",
			},
			5: {
				id: 5,
				username: "name_2",
				passwordDigest: "2_password_digetst_string",
				sessionToken: "2_password_digetst_string",
			}
		},
		boards: {
			1: {
				id: 1,
				authorId: 2,
				title: "board_1",
				description: "board_1_belongs_to_user_2",
				isPrivate: false,
				topic: "topic_1",
			},
		},
		pins: {
			1: {
				id: 1,
				authorId: 1,
				title: "pin_1",
				description: "pin_1_belongs_to_user_1",
				link: "www.google.com",
			},
		},
		notifications: {
			1: {
				id: 1,
				userId: 2,
				body: "user_2_received_notice_1",
			},
		},
		boardsPins: {
			1: {
				id: 1,
				boardId: 1,
				pinId: 1,
			},
		},
		followUsers: {
			1: {
				id: 1,
				followerId: 1,
				followeeId: 2,
			},
			2: {
				id: 2,
				followerId: 2,
				followeeId: 1,
			},
		},
		topics: {
			1: {
				id: 1,
				name: "topic_1",
			},
			2: {
				id: 2,
				name: "topic_2",
			},
		},
		followTopics: {
			1: {
				id: 1,
				userId: 1,
				topicId: 1,
			},
			2: {
				id: 2,
				userId: 2,
				topicId: 2,
			},
		},
	},
	ui: {
		loading: true / false
	},
	errors: {
		login: ["Incorrect username/password combination"]
	},
	session: {
		currentUserId: 5
	}
}

```