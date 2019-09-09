class Api::PinsController < ApplicationController

	def index
		@pins = Pin.all
	end

	def show
		@pin = Pin.find(params[:id])
		render 'api/pins/show'
	end

	def create
		@pin = Pin.new(pin_params)
		@pin.authorId = current_user.id 
		if @pin.save
			render 'api/pins/show'
		else
			render json: @pin.errors.full_messages
		end
		# have at least a photo
		# name/link/description (not required)
	end

	def destroy
		# delete the pin
		@pin = Pin.find(params[:id])
		@pin.destroy
		render json: "the pin has been deleted"
		# render 'api/pin/index'
	end

	private
	def pin_params
		params.require(:pin).permit(:title, :description, :link)
	end

end

# def edit
	# change to: under other board
	# change the name/link/description
# def update