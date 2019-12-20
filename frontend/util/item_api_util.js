export const fetchItems = () => (
	$.ajax({
		method: 'GET',
		url: '/api/items'
	})
);

export const fetchItem = (id) => (
	$.ajax({
		method: 'GET',
		url: `/api/items/${id}`
	})
);

export const createItem = (item) => (
	$.ajax({
		method: 'POST',
		url: 'api/items',
		data: { item }
	})
);

export const removeItem = (id) => (
	$.ajax({
		method: 'DELETE',
		url: `/api/items/${id}`
	})
)