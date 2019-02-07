class Api::CartsController < ApplicationController

    def index
        @cart = Cart.first
        render "api/carts/index"
    end
end
