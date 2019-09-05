class Api::PinsController < ApplicationController

	def index
		Pin.all
	end

	def show
		# show detail of one pin
	end

	def create
		# have at least a photo
		# name/link/description (not required)
	end

	def destroy
		# delete the pin
	end

end

	# def edit
	# 	# change isPrivate: boolean
	# 	# change to: under other board
	# 	# change the name/link/description
	# end

	# def update
	# end