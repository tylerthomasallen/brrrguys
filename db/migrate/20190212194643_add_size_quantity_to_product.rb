class AddSizeQuantityToProduct < ActiveRecord::Migration[5.2]
  def change
    add_column :products, :size, :string, null: false, default: "S"
    add_column :products, :quantity, :integer, null: false, default: 1
  end
end
