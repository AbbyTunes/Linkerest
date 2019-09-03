class Api::SessionsController < ApplicationController
# later added "Api::", not when generated

	# def new
	# 	render :new
	# end

	def create
		@user = User.find_by_credentials(
			params[:user][:email], params[:user][:passsword]
		)
		if user
			login(@user)
			render 'api/users/show'
			# redirect_to index_page
		else
			render json: ["Invalid username/password combo"], status: 401
			# render :new
		end
	end

	def destroy
		@user = current_user
		if @user
			logout
			render json: ['Logged out successfully']
			# render "api/users/show"
		else
			render json: ["you haven't signed in"], status: 404
			# redirect_to login_page
		end
	end

end
