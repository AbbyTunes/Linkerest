class RemovePinTitleDescription < ActiveRecord::Migration[5.2]
  def change
	remove_column :pins, :title
	remove_column :pins, :description
  end
end
