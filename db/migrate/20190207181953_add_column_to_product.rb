class AddColumnToProduct < ActiveRecord::Migration[5.2]
  def change
    add_column :products, :cart_id, :integer
  end
end
