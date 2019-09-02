class SessionsController < ApplicationController

	def new
		render :new
	end

	def create
		user = User.find_by_credentials(
			params[:user][:email], params[:user][:passsword]
		)
		if user
			login(user)
			redirect_to index_page
		else
			render json: "wrong username/password combo"
			render :new
		end
	end

	def destroy
		logout
		redirect_to login_page
	end

end
