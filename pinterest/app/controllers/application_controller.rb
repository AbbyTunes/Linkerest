class ApplicationController < ActionController::Base

	protect_from_forgery with: :exception
	helper_method :current_user, :logged_in?

	def current_user
		@current_user ||= User.find_by_session_token(session[:session_token])
	end

	def logged_in?
		!!current_user
	end

	def login(user)
		@current_user = user
		session[:session_token] = user.reset_session_token
	end

	def logout
		current_user.reset_session_token
		session[:session_token] = nil
	end

	def ensure_login
		redirect_to unless logged_in?
	end

	def login_page
		new_api_session
	end

	def new_user_form
		new_api_user
	end

	def index_page
		puts "you've reached the Index home page"
	end
end
