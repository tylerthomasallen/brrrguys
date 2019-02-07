class CreateCarts < ActiveRecord::Migration[5.2]
  def change
    create_table :carts do |t|
      t.integer :count, null: false, default: 0
      t.timestamps
    end
  end
end
