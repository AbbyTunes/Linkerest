# json.set! user.id do
	json.extract! user, :id, :username
# end


# Only one source, don't do nested source of facts

# json.myPins user.pins
# json.myBoards user.boards