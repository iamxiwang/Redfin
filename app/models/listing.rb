class Listing < ApplicationRecord

    validates :agent_id, :status ,:city,:state,
        :zip, :property_type, :list_price, :beds, :baths,
        :sqft, :lot, :img_url, :garage,
        :year_built, :lat, :lng, :time_on_greenfin, :est_mo_payment, 
        :greenfin_estimate,:price_per_sqft,
        presence: true

    validates :street_address,
        presence: true,
        uniqueness: true

end