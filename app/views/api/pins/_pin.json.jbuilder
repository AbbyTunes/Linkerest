json.extract! pin, :id, :authorId, :title, :description, :link

if pin.photo.attached?
	json.photo url_for(pin.photo)
end
	
# has authorId, need to show user.name
