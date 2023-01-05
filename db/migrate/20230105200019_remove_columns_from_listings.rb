class RemoveColumnsFromListings < ActiveRecord::Migration[7.0]
  def change
    remove_columns :listings, :img_url,:garage
  end
end
