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
);



export const removePin = (id) => (
	$.ajax({
		method: 'DELETE',
		url: `/api/pins/${id}`
	})
)
