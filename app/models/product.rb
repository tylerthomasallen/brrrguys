class Product < ApplicationRecord
  validates :title, :price, presence: true
  validates :title, uniqueness: true

  has_one_attached :photo
end
