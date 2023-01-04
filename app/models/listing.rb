# == Schema Information
#
# Table name: listings
#
#  id                :bigint           not null, primary key
#  agent_id          :bigint           not null
#  status            :string           not null
#  street_address    :string           not null
#  city              :string           not null
#  state             :string           not null
#  zip               :integer          not null
#  property_type     :string           not null
#  list_price        :integer          not null
#  beds              :integer          not null
#  baths             :integer          not null
#  sqft              :integer          not null
#  lot               :integer          not null
#  description       :text
#  img_url           :string           not null
#  garage            :integer          not null
#  year_built        :integer          not null
#  lat               :float            not null
#  lng               :float            not null
#  est_mo_payment    :integer          not null
#  greenfin_estimate :integer          not null
#  price_per_sqft    :integer          not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#
class Listing < ApplicationRecord

    validates :agent_id, :status ,:city,:state,
        :zip, :property_type, :list_price, :beds, :baths,
        :sqft, :lot, :img_url, :garage,
        :year_built, :lat, :lng, :est_mo_payment, 
        :greenfin_estimate,:price_per_sqft,
        presence: true

    validates :street_address,
        presence: true,
        uniqueness: true


    has_many :comments,
        foreign_key: :listing_id,
        class_name: :Comment

end
