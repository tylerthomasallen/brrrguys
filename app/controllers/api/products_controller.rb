class Api::ProductsController < ApplicationController
  def index
    @products = Product.all
    debugger;
    render "api/products/index"
  end

  def show
    @products = Product.all
    debugger;
    render "api/products/show"
  end

end
