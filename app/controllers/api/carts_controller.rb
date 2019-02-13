class Api::CartsController < ApplicationController
    skip_before_action :verify_authenticity_token

    def index
        @cart = Cart.first
        if (@cart.products.length >= 1)
            @products = @cart.products
            render "api/products/update"
        else
            render "api/carts/index"
        end
    end

    def update
        @cart = Cart.find(params[:id])
        @user = user_params
        products = @cart.products
        cart_id = @cart.id
        if @cart
            UserMailer.checkout_mail(@user, @cart).deliver_now
            products.each do |product|
                product.update(cart_id: nil)
                @cart.products.delete(product)
            end
            
            render "api/carts/index"
        else 
            render json: @cart.errors.full_messages, status: 404
        end
    end

     def user_params
        params.require(:user).permit(:firstName, :lastName, :email)
    end
end
