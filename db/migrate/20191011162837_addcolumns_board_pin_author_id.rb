class AddcolumnsBoardPinAuthorId < ActiveRecord::Migration[5.2]
  def change
	add_column :board_pins, :authorId, :integer
  end
end
