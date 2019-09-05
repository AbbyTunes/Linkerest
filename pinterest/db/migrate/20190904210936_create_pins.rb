class CreatePins < ActiveRecord::Migration[5.2]
  def change
	create_table :pins do |t|
		t.integer :authorId, null: false
		t.string :title
		t.text :description
		t.string :link

		t.timestamps
	end
	add_index :pins, :authorId
	add_index :pins, [:authorId, :title], unique: true
  end
end
