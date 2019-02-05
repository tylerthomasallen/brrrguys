class AddSizeColumnToProducts < ActiveRecord::Migration[5.2]
  def change
    add_column :products, :size, :string, null: false
  end
end
