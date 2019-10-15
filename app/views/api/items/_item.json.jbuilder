json.extract! item, :id, :authorId, :pinId, :boardId, :title, :description

if item.pin.photo.attached?
	json.itemPhoto url_for(item.pin.photo)
end

json.authorName item.pin.author.username

