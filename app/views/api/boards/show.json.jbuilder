json.board do
	json.partial! 'api/boards/board', board: @board
end

json.items do
	@board.items.each do |item|
		json.set! item.id do
			json.partial! 'api/items/item', item: item
		end
	end
end

# json.pins do
# 	@board.pins.each do |pin|
# 		json.set! pin.id do
# 			json.partial! 'api/pins/pin', pin: pin
# 		end
# 	end
# end


 
