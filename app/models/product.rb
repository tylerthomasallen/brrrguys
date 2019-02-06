class Product < ApplicationRecord
  sizes = ['M', 'L', 'XL', 'S']
  validates :title, :price, presence: true
  validates :title, uniqueness: true
  validates :size, inclusion: { in: sizes }

  has_one_attached :photo
end
