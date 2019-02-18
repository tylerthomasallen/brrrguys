class Product < ApplicationRecord
  sizes = ["S", "M", "L", "XL"]
  maxQuantity = 10
  quantities = [*1..maxQuantity] 

  validates :title, :price, presence: true
  validates :title, uniqueness: true
  validates :size, inclusion: { in: sizes }
  validates :quantity, inclusion: { in: quantities }

  has_one_attached :photo

  belongs_to :cart,
    optional: :true,
    foreign_key: :cart_id,
    class_name: :Cart

    def reset
      self.update!(cart_id: nil, size: 'S', quantity: 1)
    end
end
