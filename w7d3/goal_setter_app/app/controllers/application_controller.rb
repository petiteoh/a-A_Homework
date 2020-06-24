class ApplicationController < ActionController::Base

    helper_method :current_user, :logged_in?
    
    def login!(user)
        session[:session_token] = user.reset_session_token!
    end

    def logged_in?
        !!current_user
        # `!!` will coerce current_user into a boolean
			# if current_user is nil, this will return false
			# if current_user is a User obj, this will return true
    end

    def logout!
        @current_user.reset_session_token!
        session[:session_token] = nil
        @current_user = nil
    end

    def ensure_logged_in
        redirect_to new_session_url unless logged_in?
    end

    def current_user
        @current_user ||= User.find_by(session_token: session[:session_token])
    end
end

#CELLL