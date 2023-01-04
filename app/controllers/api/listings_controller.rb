class Api::ListingsController < ApplicationController
    before_action :require_logged_in, only: [:create,:update,:destroy]

    def index 
        @listings = Listing.all
        render :index
    end

    def show 
        @listing = Listing.find(params[:id])
        render :show
    end

    def create
        @listing = Listing.new(listing_params)

        if @listing.save!
            render :show
        else
            render json: @listing.errors.full_messages, status: 422
        end
    end


    def update 
        @listing = Listing.find_by(id: params[:id])
        if @listing.update(listing_params)
            #  && @listing.listing_agent_id === current_user.id
            render :show
        else
            render json: @list.errors.full_messages, status: 422
        end
    end

    def destroy
        @listing = Listing.find_by(id: params[:id])
        if @listing.destroy
            # head :no_content #return header only
            render json: {message: 'Listing is successfully removed'}
        end
    end

    private

    def listing_params
        params.require(:listing).permit(
            :agent_id,:status, :street_address,
            :city, :state,:zip, :property_type,
            :list_price,:beds, :baths, 
            :sqft, :lot,:description,
            :img_url, :garage, :year_built, 
            :lat, :lng,:est_mo_payment,
            :greenfin_estimate, :price_per_sqft
            )
    end



end