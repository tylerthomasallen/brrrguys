class RemoveSizeColumnFromProducts < ActiveRecord::Migration[5.2]
  def change
    remove_column :products, :size
  end
end
