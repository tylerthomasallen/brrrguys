# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

if Product.first
    Product.destroy_all
end

prices = [3.99, 4.59, 4.99, 5.49, 6.59, 7.59, 8.99, 9.99]

i = 0
while i <= 9
    product = Product.create(title: Faker::Beer.unique.name, price: prices.sample)
    file = File.open("app/assets/images/beer/p#{i}.jpg")
    product.photo.attach(io: file, filename: "beerphoto#{i}")
    i += 1
end

if Cart.first
    Cart.destroy_all
end

Cart.create