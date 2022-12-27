class CreateLisitngs < ActiveRecord::Migration[7.0]
  def change
    create_table :listings do |t|
      t.references :agent, null: false, foreign_key: {to_table: :users}
      t.string :status, null: false
      t.string :street_address, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.integer :zip, null: false
      t.string :property_type, null: false
      t.integer :list_price, null: false
      t.integer :beds, null: false
      t.integer :baths, null: false
      t.integer :sqft, null: false
      t.integer :lot, null: false
      t.datetime :listing_date, null: false
      t.text :description
      t.string :img_url, null: false
      t.integer :garage, null: false
      t.integer :year_built, null: false
      t.float :lat, null: false
      t.float :lng, null: false
      t.integer :time_on_greenfin, null: false
      t.integer :est_mo_payment, null: false
      t.integer :greenfin_estimate, null: false
      t.integer :price_per_sqft, null: false

      t.timestamps
    end
    add_index :listings, :street_address, unique: true
    add_index :listings, [:city,:state]
    
  end
end
