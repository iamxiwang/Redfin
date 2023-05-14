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

    # def update
    #     # debugger
    #     @appointment = Appointment.find_by(id: params[:id])

    #     if @appointment.update(appointment_params)
    #         render :show
    #     else
    #         render json: @appointment.errors.full_messages, status: 422
    #     end
    # end

    def destroy
        @like =Like.find_by(id: params[:id])

        if @like.destroy
            render json: {messages: 'like is sucessfully destroyed'}
        end
    end


    private 
    
    def like_params
        params.require(:like).permit(:user_id,:listing_id)
    end


end