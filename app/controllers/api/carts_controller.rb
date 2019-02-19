class Api::CartsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @cart = Cart.first
    @products = @cart.products
    # binding.pry
    if @products.empty?
      render "api/carts/index"
    else
      render "api/products/update"
    end
  end

  def checkout
    cart_checkout = CartServices::Checkout.new(Cart.find(params[:id]), user_params, true)

    if cart_checkout.execute
      render json: {}, status: :ok
    else
      render json: cart_checkout.errors, status: 404
    end
  end

  private
  def user_params
    params.require(:user).permit(:firstName, :lastName, :email)
  end
end
