json.set! :cart do 
    json.set! :id, @cart.id
    json.set! :products do 
        json.array! @products do |product|
            json.id product.id
            json.title product.title
            json.price product.price
            json.photoUrl url_for(product.photo)
            json.size product.size
            json.quantity product.quantity
            json.cartId product.cart_id
        end
    end
end