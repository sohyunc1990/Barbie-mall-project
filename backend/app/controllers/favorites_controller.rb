class FavoritesController < ApplicationController
    def index
        favorites = Favorite.all
        render json: favorites
    end

    def show
        @favorite = Favorite.find(params[:id])
        render json: @favorite
    end

    def create
        favorite = Favorite.create!(
            user_id: params['favorite']['user_id'],
            product_id: params['favorite']['product_id']
        )
    end

    def destroy
        @favorite = Favorite.find(params[:id])
        @favorite.destroy
    end

end
