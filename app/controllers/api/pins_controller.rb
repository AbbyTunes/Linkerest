class Api::PinsController < ApplicationController

	def index
		@pins = Pin.all
		render 'api/pins/index'
	end

	def show
		@pin = Pin.find(params[:id])
		render 'api/pins/show'
	end

	def create
		@pin = Pin.new(pin_params)
		@pin.authorId = current_user.id 

		@item = Item.new(item_params)


		if @pin.save && @item.save
			render 'api/pins/show'
		else
			render json: @pin.errors.full_messages, status: 422
		end
	end

	def destroy
		@pin = Pin.find(params[:id])
		@pin.destroy
		render json: "the pin has been deleted"
		# render 'api/pin/index'
	end

	private
	def pin_params
		params.require(:pin).permit(:link, :photo)
	end

	private
	def item_params
		params.require(:item).permit(:title, :description)
	end

end

# def edit
	# change to: under other board
	# change the name/link/description
# def update