json.extract! boardPin, :id, :authorId, :title

json.pinItem boardPin.pin
json.authorName boardPin.author.username