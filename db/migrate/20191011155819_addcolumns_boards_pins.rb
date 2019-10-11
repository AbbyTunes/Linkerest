class AddcolumnsBoardsPins < ActiveRecord::Migration[5.2]
  def change
	add_column :board_pins, :title, :string
	add_column :board_pins, :description, :string
  end
end
