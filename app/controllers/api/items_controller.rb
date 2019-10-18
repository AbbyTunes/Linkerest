class Api::ItemsController < ApplicationController

	def index
		# @items = Item.all
		current_user.items.
		render 'api/items/index'
	end

	def show
		@item = Item.find(params[:id])
		render 'api/items/show'
	end

	def create
		@item = Item.new(item_params)
		@item.authorId = current_user.id
		# debugger
		@item.boardId = params[:board_id]
		@item.pinId = params[:pin_id]
		if @item.save
			render 'api/items/show'
		else
			render json: @item.errors.full_messages
		end
	end

	def destroy
		@item = Item.find(params[:id])
		# @item = Item.find(params[:itemId])
		@item.destroy
		render json: { itemId: @item.id, boardId: @item.board.id }
	end

	private
	def item_params
		params.require(:item).permit(:title, :description)
	end
end

	# def edit
	# end

	# def update
	# end
