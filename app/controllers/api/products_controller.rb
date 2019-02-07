class Api::ProductsController < ApplicationController
  skip_before_action :verify_authenticity_token
  
  def index
    @products = Product.all
    render "api/products/index"
  end

  def show
    @products = Product.all
    render "api/products/show"
  end

  def update
    
    @product = Product.find(params[:id])
    @cart = Cart.find(cart_params[:cart_id])
    new_count = @cart.count + 1


    if @product.update(cart_params)
      unless @cart.products.include?(@product)
        @cart.update_column(:count, new_count)
      end
      render "api/carts/index"
    else
      render json: @product.errors.full_messages, status: 404
    end
  end

  def cart_params
    params.require(:product).permit(:cart_id)
  end

end
