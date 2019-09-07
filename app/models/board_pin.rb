class BoardPin < ApplicationRecord

	validates :boardId, :pinId, presence: true

	belongs_to :board,
	foreign_key: :boardId,
	class_name: 'Board'

	belongs_to :pin,
	foreign_key: :pinId,
	class_name: 'Pin'
end
