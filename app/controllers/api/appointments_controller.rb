class Api::AppointmentsController < ApplicationController
    before_action :require_logged_in


    def index
        @appointments = Appointment.where(user_id: params[:user_id])
        render :index
    end

    def create 
        @appointment = Appointment.new(appointment_params)
        if @appointment.save
            render :show
        else
            render json: @appointment.errors.full_messages, status: 422
        end
    end

    def update
        # debugger
        @appointment = Appointment.find_by(id: params[:id])

        if @appointment.update(appointment_params)
            render :show
        else
            render json: @appointment.errors.full_messages, status: 422
        end
    end

    def destroy
        @appointment =Appointment.find_by(id: params[:id])

        if @appointment.destroy
            render json: {messages: 'Appointment is sucessfully destroyed'}
        end
    end


    private 
    
    def appointment_params
        params.require(:appointment).permit(:agent_id,:user_id,:listing_id,:tour_time,:message,:cancelled)
    end


end