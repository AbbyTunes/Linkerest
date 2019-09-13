# == Schema Information
#
# Table name: board_pins
#
#  id         :bigint           not null, primary key
#  boardId    :integer          not null
#  pinId      :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class BoardPin < ApplicationRecord

	validates :boardId, :pinId, presence: true

	belongs_to :board,
	foreign_key: :boardId,
	class_name: 'Board'

	belongs_to :pin,
	foreign_key: :pinId,
	class_name: 'Pin'
end
