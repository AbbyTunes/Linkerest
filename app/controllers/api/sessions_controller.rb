class Api::SessionsController < ApplicationController

	def create
		@user = User.find_by_credentials(
			params[:user][:username], params[:user][:password]
		)
		if @user
			login(@user)
			render 'api/users/show'
		else
			render json: ["Invalid username/password combo"], status: 401
		end
	end

	def destroy
		@user = current_user
		if @user
			logout
			render json: ['Logged out successfully']
		else
			render json: ["you haven't signed in"], status: 404
		end
	end

end
