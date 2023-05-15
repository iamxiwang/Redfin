class Api::LikesController < ApplicationController
    before_action :require_logged_in


    def index
        @likes = Like.where(user_id: params[:user_id])
        render :index
    end

    def create 
        @like = Like.new(like_params)
        if @like.save
            render :show
        else
            render json: @like.errors.full_messages, status: 422
        end
    end

    def destroy
        @like =Like.find_by(id: params[:id])

        if @like.destroy
            render json: {messages: 'like is sucessfully destroyed'}
        else
            render json: { error: 'Failed to destroy the like' }, status: 500
        end
    end


    private 
    
    def like_params
        params.require(:like).permit(:user_id,:listing_id)
    end


end