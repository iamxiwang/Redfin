class Api::CommentsController < ApplicationController
    before_action :require_logged_in, only: [:create, :update, :destroy]
    

        def index
            @comments = Comment.where(listing_id: params[:listing_id])
            render :index    
        end

        def create
            @comment = Comment.new(comment_params)
            if@comment.save
                render :show
            else
                render json: @comment.errors.full_messages, status: 422
            end
        end

        def update 
            @comment = Comment.find_by(id: params[:id])

            if@comment.update(comment_params)
                render :show
            else
                render json: @comment.errors.full_messages, status: 422
            end
        end

        def destroy 
            @comment = Comment.find_by(id: params[:id])

            if @comment.destroy
                render json: {messages: 'Comment is successfully destroyed'}
            end
        end

        private

        def comment_params
            params.require(:comment).permit(:author_id, :body, :listing_id)
        end

end