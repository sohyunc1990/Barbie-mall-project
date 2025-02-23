class ProductsController < ApplicationController

    def index
        @products = Product.all
        render json: @products
    end

    def show
        @product = Product.find(params[:id])
        render json: @product
    end

    def create
        @product = Product.new(product_params)
        @product.save
        render json: @product
    end

    def update
        @product = Product.find(params[:id])
        @product.update(product_params)
    end

    def destroy
        @product = Product.find(params[:id])
        @product.destroy
    end

    private

    def product_params
        params.require(:product).permit(:name, :img_url, :price, :category)
    end

end
