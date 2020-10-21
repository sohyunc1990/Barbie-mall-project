class ReviewsController < ApplicationController

    def index
        reviews = Review.all
        render json: reviews
    end

    def show
        @review = Review.find(params[:id])
        render json: @review
    end

    def create
        review = Review.create!(
            user_id: params['review']['user_id'],
            product_id: params['review']['product_id'],
            rating: params['review']['rating'],
            comment: params['review']['comment']            
        )
    end

    def destroy
        @review = Review.find(params[:id])
        @review.destroy
    end

end
