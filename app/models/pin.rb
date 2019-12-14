# == Schema Information
#
# Table name: pins
#
#  id         :bigint           not null, primary key
#  authorId   :integer          not null
#  link       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Pin < ApplicationRecord

	validate :ensure_photo

	has_one_attached :photo

	belongs_to :author,
	foreign_key: :authorId,
	class_name: 'User'

	has_many :items, 
	foreign_key: :pinId,
	class_name: 'Item',
	dependent: :destroy

	has_many :boards,
	through: :items,
	source: :board

	def ensure_photo
		unless self.photo.attached?
			errors[:photo] << "photo must be attached"
		end
	end
end
