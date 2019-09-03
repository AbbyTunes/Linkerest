class ApplicationController < ActionController::Base

	protect_from_forgery with: :exception
	helper_method :current_user, :logged_in?

	def current_user
		has_token = session[:session_token]
		return nil unless has_token
		@current_user ||= User.find_by_session_token(has_token)
	end

	def logged_in?
		!!current_user
	end

	def login(user)
		user.reset_session_token
		session[:session_token] = user.session_token
		# session[:session_token] = user.reset_session_token
		@current_user = user
	end


	def logout
		current_user.reset_session_token
		session[:session_token] = nil
		# @current_user = nil
	end

	def ensure_login
		unless logged_in? # unless current_user
			render json: ['you are not logged_in'], status: 401
		end
		# redirect_to login_page unless logged_in?
	end

end

	# def login_page
	# 	new_api_session
	# end

	# def new_user_form
	# 	new_api_user
	# end

	# def index_page
	# 	puts "you've reached the Index home page"
	# end

