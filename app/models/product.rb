class Product < ApplicationRecord
  validates :title, :price, presence: true
  validates :title, uniqueness: true
  validates :size { in: ["M", "L", "XL", "S"]}
end
