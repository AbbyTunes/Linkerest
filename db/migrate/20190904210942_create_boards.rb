class CreateBoards < ActiveRecord::Migration[5.2]
  def change
	create_table :boards do |t|
		t.integer :authorId, null: false
		t.string :title
		t.text :description
		t.boolean :isPrivate, null: false, default: false

		t.timestamps
	end
	add_index :boards, :authorId
	add_index :boards, [:authorId, :title], unique: true
  end
end
