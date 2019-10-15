json.extract! board, :id, :authorId, :isPrivate, :title, :description

if board.pins[0].photo.attached?
	json.boardPhoto url_for(board.pins[0].photo)
end

json.itemIds board.items.ids # array of ids
json.authorName board.author.username



# http://localhost:3000/api/boards/1
