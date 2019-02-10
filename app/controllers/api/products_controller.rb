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

  def edit
    @product = Product.find(params[:id])
    @cart = Cart.find(@product.cart_id)

    
    if @product.update_column(:cart_id, nil)
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
    @cart = Cart.find(cart_params[:cart_id])

    if @product.update(cart_params)
      @products = @cart.products
      render "api/products/update"
    else
      render json: @product.errors.full_messages, status: 404
    end
  end

  def cart_params
    params.require(:cart).permit(:cart_id)
  end

end
