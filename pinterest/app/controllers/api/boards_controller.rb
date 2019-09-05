class Api::BoardsController < ApplicationController

	def index
		# show all boards
		Board.all
	end

	def show
		# show pins of one board
		
	end

	def create
		# have at least a photo
		# name/link/description (not required)
	end

	def destroy
		# delete the pin
	end

end
