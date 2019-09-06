# == Schema Information
#
# Table name: pins
#
#  id          :bigint           not null, primary key
#  authorId    :integer          not null
#  title       :string
#  description :text
#  link        :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Pin < ApplicationRecord

	validates :authorId, presence: true
	validates :title, uniqueness: { scope: :authorId }

	has_one_attached :photo

	belongs_to :author,
	foreign_key: :authorId,
	class_name: 'User'

	has_many :boardPins,
	foreign_key: :pinId,
	class_name: 'BoardPin'

	has_many :boards,
	through: :boardPins,
	source: :board

	# has_many :boards,
	# foreign_key: :boardId,
	# class_name: 'Board'
end
