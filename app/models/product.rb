class Product < ApplicationRecord
  validates :title, :price, presence: true
  validates :title, uniqueness: true

  has_one_attached :photo

  belongs_to :cart,
    foreign_key: :cart_id,
    class_name: :Cart
end
