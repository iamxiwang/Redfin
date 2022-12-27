# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

ApplicationRecord.transaction do 
    puts "Destroying tables..."
    # Unnecessary if using `rails db:seed:replant`
    User.destroy_all

    puts "Resetting primary keys..."
    # For easy testing, so that after seeding, the first `User` has `id` of 1
    ApplicationRecord.connection.reset_pk_sequence!('users')

    puts "Creating users..."
    # Create one user with an easy to remember username, email, and password:
    User.create!(
        username: 'Demo-lition', 
        email: 'demo@user.io', 
        password: 'password'
    )
    # More users
    10.times do 
        User.create!({
            username: Faker::Internet.unique.username(specifier: 3),
            email: Faker::Internet.unique.email,
            password: 'password'
        }) 
    end

    puts "Done!"
end
Listing.create(
        agent_id: 5,
        status: 'pending',
        street_address: "180 Geary street",
        city: 'san francisco',
        state: 'CA',
        zip: 94122,
        property_type: 'apartment',
        list_price: 1000000,
        beds: 5,
        baths: 2,
        sqft: 1000,
        lot: 1,
        listing_date: DateTime.parse('2022-01-10'),
        description: "Loacated in the center of san francisco, next to many luxuary store and two biggest shopping mall in bay area",
        img_url: "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        garage: 0,
        year_built: 1990,
        lat: '37.78804904454068', 
        lng: '-122.40642200261699',
        time_on_greenfin:100,
        est_mo_payment:7650,
        greenfin_estimate: 1500000,
        price_per_sqft: 5000
        )