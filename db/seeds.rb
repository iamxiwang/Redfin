# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
require 'open-uri'
# ApplicationRecord.transaction do 
    puts "Destroying tables..."
    # Unnecessary if using `rails db:seed:replant`
    User.destroy_all

    puts "Resetting primary keys..."
    # For easy testing, so that after seeding, the first `User` has `id` of 1
    ApplicationRecord.connection.reset_pk_sequence!('users')

    puts "Creating users..."
    # Create one user with an easy to remember username, email, and password:
    demo = User.create!(
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
# end

Listing.destroy_all
ApplicationRecord.connection.reset_pk_sequence!('listings')

l1 = Listing.create!(
        agent_id: 2,
        status: 'Open house SUN 12pm 50 2 pm',
        street_address: "30 Santa Clara Ave,",
        city: 'San Francisco',
        state: 'CA',
        zip: 94127,
        property_type: 'Single Family Residential',
        list_price: 46000000,
        beds: 4,
        baths: 4,
        sqft: 3891,
        lot: 5497,
        description: "Stunning Cape Cod residence on a coveted Cow Hollow block, just steps to the many shops and restaurants of Union Street and Chestnut Street. This exceptional home has been superbly renovated, with fine detailing throughout.",
        year_built: 1925,
        lat: 37.7386613385249,  
        lng: -122.46621743111069,
        est_mo_payment: 29735,
        greenfin_estimate: 4643112,
        price_per_sqft: 1182
        )


l1.photos.attach([
    {io: URI.open("https://ssl.cdn-redfin.com/photo/9/bigphoto/295/422701295_0.jpg"),filename: "l1main.jpg"},
    {io: URI.open("https://ssl.cdn-redfin.com/photo/9/bigphoto/295/422701295_11_0.jpg"),filename: "l1second.jpg"},
    {io: URI.open("https://ssl.cdn-redfin.com/photo/9/bigphoto/295/422701295_38_0.jpg"),filename: "l1third.jpg"}
])

l2 = Listing.create!(
        agent_id: 8,
        status: 'active',
        street_address: "41-43 Parker Ave,",
        city: 'San Francisco',
        state: 'CA',
        zip: 94118,
        property_type: 'Muti-Family(2-4 Unit)',
        list_price: 3985000,
        beds: 6,
        baths: 4,
        sqft: 3000,
        lot: 4295,
        description: "41-43 Parker is a fabulous duplex located in the highly desirable Jordan Park neighborhood. Both units are 3 bedrooms and 2 bathrooms. The kitchens have granite countertops, high end appliances, and gourmet stoves. There is a large backyard with decks, and a potential for a private garage. The area was formerly known as Doctors Row as many physicians occupied the area due to the close proximity of the former Children's Hospital. Walking distance to Laurel Heights Shopping Center and the Geary Boulevard Shopping District.",
        year_built: 1908,
        lat: '37.78562262774873', 
        lng: '-122.45499894660016',
        est_mo_payment:25566,
        greenfin_estimate: 3840605,
        price_per_sqft: 1328
        )

        
l2.photos.attach([
    {io: URI.open("https://ssl.cdn-redfin.com/photo/9/bigphoto/112/422694112_41_2.jpg"),filename: "l2main.jpg"},
    {io: URI.open("https://ssl.cdn-redfin.com/photo/9/bigphoto/112/422694112_42_2.jpg"),filename: "l2second.jpg"},
    {io: URI.open("https://ssl.cdn-redfin.com/photo/9/bigphoto/112/422694112_52_2.jpg"),filename: "l2third.jpg"}

])




l3 = Listing.create!(
            agent_id: 9,
            status: 'Active',
            street_address: "207 Cherry St,",
            city: 'San Francisco',
            state: 'CA',
            zip: 94118,
            property_type: 'Singel Family Residential',
            list_price: 11750000,
            beds: 6,
            baths: 3.5,
            sqft: 5340,
            lot: 4295,
            description: "This beautifully remodeled home on a great flat block of Presidio Heights is for sale or lease for the first time in 36 years. Benefiting from 6 bedrooms, 3.5 baths, a library, office, big flat garden, multiple decks and patios, playroom, family room, and one of the best kitchens anyone could want, this home truly checks every box. There is off street parking for 3 cars and an electric outlet in the garage. 207 Cherry is elegant yet extremely approachable. It really is a feel good home! The rooms are spacious and there is great light. There are beautiful hardwood floors throughout and great detail. This is the house you've been waiting for.",
            year_built: 1909,
            lat: 37.788621291249356, 
            lng: -122.45752618878839,
            est_mo_payment: 75308,
            greenfin_estimate: 75308,
            price_per_sqft: 2200
            )

        
l3.photos.attach([
    {io: URI.open("https://ssl.cdn-redfin.com/photo/9/bigphoto/548/422686548_0.jpg"),filename: "l3main.jpg"},
    {io: URI.open("https://ssl.cdn-redfin.com/photo/9/mbpaddedwide/548/genMid.422686548_15_2.jpg"),filename: "l3second.jpg"},
    {io: URI.open("https://ssl.cdn-redfin.com/photo/9/bigphoto/548/422686548_54_3.jpg"),filename: "l3third.jpg"}

])


Comment.create!(
    listing_id: l1.id,
    body: 'The house is stunning',
    author_id: demo.id,
)

Comment.create!(
    listing_id: l1.id,
    body: 'Althought it is very nice house, but it is too expensive',
    author_id: demo.id,
)
Comment.create!(
    listing_id: l2.id,
    body: 'The house is too small for a 4 kids family',
    author_id: demo.id,
)
Comment.create!(
    listing_id: l2.id,
    body: 'I love it',
    author_id: demo.id,
)
Comment.create!(
    listing_id: l3.id,
    body: 'Good place for a samll size of family',
    author_id: demo.id,
)

Comment.create!(
    listing_id: l3.id,
    body: 'Best hight school in san francisco nearby',
    author_id: demo.id,
)


