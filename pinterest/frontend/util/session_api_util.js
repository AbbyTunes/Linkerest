// create user
export const signup = (user) => (
	$.ajax({
		method: 'POST',
		url: '/api/users',
		data: { user }
	})
);

// create session
export const login = (user) => (
	$.ajax({
		method: 'POST',
		url: '/api/session',
		data: { user }
	})
);

// destroy session
export const logout = () => (
	$.ajax({
		method: 'DELETE',
		url: '/api/session'
	})
)


