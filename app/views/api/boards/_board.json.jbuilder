json.extract! board, :id, :authorId, :isPrivate, :title, :description

if board.pins[0].photo.attached?
	json.photo url_for(board.pins[0].photo)
end

json.authorName board.author.username

