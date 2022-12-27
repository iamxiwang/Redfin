class Api::ListingsController < ApplicationController
    # before_action :require_logged_in

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

        if @listing.save
            render :show
        else
            render json: @listing.errors.full_messages, status: 422
        end
    end


    def update 
        if @listing.update(listing_params) && 
            @listing.listing_agent_id === current_user.id
            render :show
        else
            render json: @list.errors.full_messages, status: 422
        end
    end

    def destroy
        @listing.destroy
        head :no_content #return header only
    end

    private

    def set_list
        @listing = Listing.find(params[:id])
    rescue
        render json: ['Listing not found'], status: :not_found
    end

    def listing_params
        params.require(:listing).permit(:agent_id,
                :status, :street_address, :city, :state,
                :zip, :property_type, :list_price,
                :beds, :baths, :sqft, :lot, :listing_data,
                :description,:img_url, :garage, 
                :year_built, :lat, :lng, :time_on_greenfin,
                :est_mo_payment,:greenfin_estimate, :price_per_sqft)
    end



end