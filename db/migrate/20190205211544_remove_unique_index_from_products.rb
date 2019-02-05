class RemoveUniqueIndexFromProducts < ActiveRecord::Migration[5.2]
  def change
    remove_index :products, :title
  end
end
