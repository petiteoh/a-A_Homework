class User < ApplicationRecord
    validates :username, presence: true, uniqueness: true
    validates :password_digest, presence: true
    validates :session_token, presence: true
    validates :password, length: {minimum: 6, allow: nil}

    after_initialize :ensure_session_token

attr_reader :password

    def self.find_by_credentials(username, password)
        @user = User.find_by(username: username)
        return nil unless @user && @user.is_password?(password)
        @user
    end

    def is_password?(password) #<=== plaintext password
        bc_password = Bcrypt::Password.new(self.password_digest) #<=== bcrypt object of our digest
        bc_password.is_password?(password) #<==== 
    end

    def password=(password)   #<=== this arg is the password provided by person who wants to create new user
        @password = password
        self.password_digest = BCrypt::Password.create(password) #<== under the hood, turning this into a digest, and adding that to our table
    end

    def reset_session_token!
        self.session_token = self.class.generate_session_token
        self.save!
        self.session_token
    end
        
private 
    def ensure_session_token
        @user ||= User.generate_session_token
    end

    def self.generate_session_token
        SecureRandom::urlsafe_base64(32)
    end
end

#FIG_VAPER