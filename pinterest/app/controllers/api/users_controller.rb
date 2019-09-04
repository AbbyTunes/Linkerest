class Api::UsersController < ApplicationController

	def create
		@user = User.new(user_params)
		if @user.save
			login(@user)
			render 'api/users/show'
			# don't need a show method
			# redirect_to index_page
		else
			render json: @user.errors.full_messages, status: 422
			# render :new 
			# render jbuilder file?
		end
	end

	private
	def user_params
		params.require(:user).permit(:username, :email, :password)
	end
end
