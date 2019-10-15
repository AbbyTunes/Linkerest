json.extract! pin, :id, :authorId, :link

if pin.photo.attached?
	json.photo url_for(pin.photo)
end

json.authorName pin.author.username

# has authorId, need to show user.name	
# json.author do
# 	json.partial! 'api/users/user', user: pin.author
# end

