class Api::ProductsController < ApplicationController
  skip_before_action :verify_authenticity_token
  
  def index
    @products = Product.all
    render "api/products/index"
  end

  def remove_product_from_cart
    @product = Product.find(params[:id])

    if @product.reset
      render json: {}, status: :ok
    else 
      render json: @product.errors.full_messages, status: 404
    end
  end

  def add_product_to_cart
    @product = Product.find(params[:id])
    if @product.update(product_params)
      render json: {}, status: :ok
    else
      render json: @product.errors.full_messages, status: 404
    end
  end

  private
  def product_params
    params.require(:product).permit(:cart_id, :size, :quantity)
  end

end
