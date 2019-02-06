json.products do 
    json.array! @products do |product|
        json.id product.id
        json.title product.title
        json.price product.price
        json.size product.size
        json.photoUrl url_for(product.photo)
    end
end
