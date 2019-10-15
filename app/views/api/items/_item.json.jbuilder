json.extract! item, :id, :authorId, :pinId, :boardId, :title, :description

if item.pin.photo.attached?
	json.photo url_for(item.pin.photo)
end

json.link item.pin.link
json.authorName item.pin.author.username
json.board item.board

