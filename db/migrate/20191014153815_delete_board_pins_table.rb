class DeleteBoardPinsTable < ActiveRecord::Migration[5.2]
  def change
	drop_table :board_pins
  end
end
