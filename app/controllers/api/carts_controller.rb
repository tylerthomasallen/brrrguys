class Api::CartsController < ApplicationController

    def index
        @cart = Cart.first
        if (@cart.products.length >= 1)
            @products = @cart.products
            render "api/products/update"
        else
            render "api/carts/index"
        end
    end
end
