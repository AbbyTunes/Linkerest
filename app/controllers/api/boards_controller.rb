class Api::BoardsController < ApplicationController

	def index
		@boards = current_user.boards
		render 'api/boards/index'
	end

	def show
		@board = Board.find(params[:id])
		render 'api/boards/show'
	end

	def create
		@board = Board.new(board_params)
		@board.authorId = current_user.id
		if @board.save
			render 'api/boards/show'
		else
			render json: @board.errors.full_messages
		end
	end

	def destroy
		@board = Board.find(params[:id])
		@board.destroy
		render json: @board.id 
		# render json: "the board has been deleted"
		
	end

	private
	def board_params
		params.require(:board).permit(:title, :description, :isPrivate)
	end

end

	# def edit
	# 	# change isPrivate: boolean
	# 	# change name
	# end

	# def update
	# end