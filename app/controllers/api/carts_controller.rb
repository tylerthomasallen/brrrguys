class Api::CartsController < ApplicationController

    def index
        @cart = Cart.first
        debugger;
        render "api/carts/index"
    end
end
