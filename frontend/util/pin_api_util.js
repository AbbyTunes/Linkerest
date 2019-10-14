export const fetchPins = () => (
	$.ajax({
		method: 'GET',
		url: '/api/pins'
	})
);

export const fetchPin = (id) => (
	$.ajax({
		method: 'GET',
		url: `/api/pins/${id}`
	})
);

export const createPin = (pin) => (
	$.ajax({
		method: 'POST',
		url: 'api/pins',
		data: { pin }
	})
	// $.ajax({
	// 	url: '/api/pins',
	// 	method: 'POST',
	// 	data: formData,
	// 	contentType: false,
	// 	processData: false
	// }).then(
	// 	(response) => console.log(response.message),
	// 	(response) => console.log(response.responseJSON)
	// )
);



export const removePin = (id) => (
	$.ajax({
		method: 'DELETE',
		url: `/api/pins/${id}`
	})
)