```javascript
{
	entities: {
		users: {
			4: {
				id: 4,
				username: "name_1",
				password_digest: "1_password_digetst_string",
				session_token: "1_a_password_digetst_string",
			},
			5: {
				id: 5,
				username: "name_2",
				password_digest: "2_password_digetst_string",
				session_token: "2_password_digetst_string",
			}
		},
		boards: {
			1: {
				id: 1,
				author_id: 2,
				title: "board_1",
				description: "board_1_belongs_to_user_2",
				is_private: false,
				topic: "topic_1",
			},
		},
		pins: {
			1: {
				id: 1,
				author_id: 1,
				title: "pin_1",
				description: "pin_1_belongs_to_user_1",
				link: "www.google.com",
			},
		},
		notifications: {
			1: {
				id: 1,
				user_id: 2,
				body: "user_2_received_notice_1",
			},
		},
		boardsPins: {
			1: {
				id: 1,
				board_id: 1,
				pin_id: 1,
			},
		},
		followUsers: {
			1: {
				id: 1,
				follower_id: 1,
				followee_id: 2,
			},
			2: {
				id: 2,
				follower_id: 2,
				followee_id: 1,
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
				user_id: 1,
				topic_id: 1,
			},
			2: {
				id: 2,
				user_id: 2,
				topic_id: 2,
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