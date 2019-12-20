# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord

	has_many :pins,
	foreign_key: :authorId,
	class_name: 'Pin'

	has_many :boards,
	foreign_key: :authorId,
	class_name: 'Board'

	has_many :items,
	foreign_key: :authorId,
	class_name: 'Item'


	validates :username, :password_digest, :session_token, presence: true
	validates :username, :session_token, uniqueness: true
	validates :password, length: { minimum: 6, allow_nil: true }

	attr_reader :password
	after_initialize :ensure_session_token

	def password=(password)
		@password = password
		self.password_digest = BCrypt::Password.create(password)
	end
	
	def self.find_by_credentials(username, password)
		user = User.find_by(username: username)
		user && user.is_password?(password) ? user : nil
	end

	def self.generate_session_token
		SecureRandom.urlsafe_base64(16)
	end

	def is_password?(password)
		bcp = BCrypt::Password.new(self.password_digest)
		bcp.is_password?(password)
	end

	def reset_session_token
		self.session_token = self.class.generate_session_token
		self.save!
		self.session_token
	end

	private

	def ensure_session_token
		self.session_token ||= self.class.generate_session_token
	end

end
