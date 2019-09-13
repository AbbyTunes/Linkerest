class ChangeBoardPinTableName < ActiveRecord::Migration[5.2]
	def change
	rename_table :boardsPins, :board_pins
	end
end
