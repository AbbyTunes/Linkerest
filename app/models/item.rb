# == Schema Information
#
# Table name: board_pins
#
#  id          :bigint           not null, primary key
#  boardId     :integer          not null
#  pinId       :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  title       :string
#  description :string
#  authorId    :integer
#

class Item < ApplicationRecord

	validates :boardId, :pinId, :authorId, presence: true
	# validates :title, uniqueness: { scope: :authorId }

	belongs_to :board,
	foreign_key: :boardId,
	class_name: 'Board'

	belongs_to :pin,
	foreign_key: :pinId,
	class_name: 'Pin'

	belongs_to :author,
	foreign_key: :authorId,
	class_name: 'User'

end
