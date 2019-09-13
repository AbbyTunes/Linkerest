json.extract! board, :id, :authorId, :title, :description, :isPrivate


json.pins board.pins
json.authorName board.author.username

if board.pins[0].photo.attached?
	json.photo url_for(board.pins[0].photo)
end

