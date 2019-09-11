json.extract! pin, :id, :authorId, :title, :description, :link

if pin.photo.attached?
	json.photo url_for(pin.photo)
end

json.authorName pin.author.username
	
# json.author do
# 	json.partial! 'api/users/user', user: pin.author
# end
# has authorId, need to show user.name
