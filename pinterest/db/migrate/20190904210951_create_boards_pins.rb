class CreateBoardsPins < ActiveRecord::Migration[5.2]
  def change
	create_table :boardsPins do |t|
		t.integer :boardId, null: false
		t.integer :pinId, null: false
		
		t.timestamps
	end
	add_index :boardsPins, :boardId
	add_index :boardsPins, :pinId
  end
end
