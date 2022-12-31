class RemoveListingDateFromListings < ActiveRecord::Migration[7.0]
  def change
    remove_column :listings, :listing_date
    remove_column :listings, :time_on_greenfin
  end
end
