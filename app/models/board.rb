# == Schema Information
#
# Table name: boards
#
#  id          :bigint           not null, primary key
#  authorId    :integer          not null
#  title       :string
#  description :text
#  isPrivate   :boolean          default(FALSE), not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Board < ApplicationRecord

	# validates :authorId, :isPrivate, presence: true
	validates :title, uniqueness: {scope: :authorId}
	validates :isPrivate, inclusion: [true, false]

	belongs_to :author,
	foreign_key: :authorId,
	class_name: 'User'	

	has_many :items,
	foreign_key: :boardId,
	class_name: 'Item',
	dependent: :destroy

	has_many :pins,
	through: :items,
	source: :pin

	# need to use :items assiciation
	# has_many :pins,
	# foreign_key: :pinId,
	# class_name: 'Pin'
end
