class Cart < ApplicationRecord
    has_many :products,
        foreign_key: :cart_id,
        class_name: :Product
end
