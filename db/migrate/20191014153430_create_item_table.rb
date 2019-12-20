class CreateItemTable < ActiveRecord::Migration[5.2]
  def change
	create_table :items do |t|
		t.integer :boardId, null: false
		t.integer :pinId, null: false
		t.integer :authorId, null: false
		t.string :title, null: false
		t.string :description, null: false

		t.timestamps
	end
	add_index :items, :boardId
	add_index :items, :pinId
  end
end