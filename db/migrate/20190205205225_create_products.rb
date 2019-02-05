class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :title, null: false
      t.float :price, null: false
      t.timestamps
    end
    add_index :products, :title, unique: true
  end
end
