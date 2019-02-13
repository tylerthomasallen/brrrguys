class Api::ProductsController < ApplicationController
  skip_before_action :verify_authenticity_token
  
  def index
    @products = Product.all
    render "api/products/index"
  end

  def show
    @products = [Product.find(params[:id])]
    render "api/products/index"
  end

  def edit
    @product = Product.find(params[:id])
    @cart = Cart.find(@product.cart_id)
    product_defaults = { cart_id: nil, size: "S", quantity: 1}

    
    if @product.update(product_defaults)
      if @cart
        @products = @cart.products
        render "api/products/update"
      else
        render json: @cart.errors.full_messages, status: 404
      end

    else
      render json: @product.errors.full_messages, status: 404
    end
  end

  def update
    
    @product = Product.find(params[:id])
    @cart = Cart.find(product_params[:cart_id])

    if @product.update(product_params)
      @products = @cart.products
      render "api/products/update"
    else
      render json: @product.errors.full_messages, status: 404
    end
  end

  def product_params
    params.require(:product).permit(:cart_id, :size, :quantity)
  end

end
