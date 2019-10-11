@boardPins.each do |boardPin|
	json.set! boardPin.id do
		json.partial! 'api/board_pins/boardpin', boardPin: boardPin
	end
end