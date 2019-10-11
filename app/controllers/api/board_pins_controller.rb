class Api::BoardPinsController < ApplicationController

	def index
		@boardPins = BoardPin.all
		render 'api/board_pin/index'
	end

	def show
		@boardPin = BoardPin.find(params[:id])
		render 'api/board_pin/show'
	end

	def create
		@boardPin = BoardPin.new(boardPin_params)
		@boardPin.authorId = current_user.id
		# @boardPin.boardId = 
		# @boardPin.pinId = 
		if @boardPin.save
			render 'api/board_pin/show'
		else
			render json: @boardPin.errors.full_messages
		end
	end

	def destroy
		@boardPin = BoardPin.find(params[:id])
		@boardPin.destroy
		render json: "the boardPin has been deleted"
	end

	private
	def boardPin_params
		params.require(:boardPin).permit(:title, :description)
	end
end

	# def edit
	# end

	# def update
	# end