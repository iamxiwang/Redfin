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
    demo.img.attach(io: URI.open("https://ssl.cdn-redfin.com/system_files/images/76/076/51600076_158_0.jpg"),filename: "demo.jpg")

    Baobob = User.create!(
        username: 'Baobob',
        email: 'baobob@gmail.com',
        password: 'password'
    )
    Baobob.img.attach(
        io: URI.open("https://images.pexels.com/photos/14208139/pexels-photo-14208139.jpeg?auto=compress&cs=tinysrgb&w=600"),filename: 'babob.jpg')

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
        street_address: "2839 Pacific Ave,",
        city: 'San Francisco',
        state: 'CA',
        zip: 94115,
        property_type: 'Single Family Residentia',
        list_price: 15900000,
        beds: 5,
        baths: 5.5,
        sqft: 8650,
        lot: 5745,
        description: "
        With its show-stopping curb appeal on one of Pacific Heights' most sought-after blocks, 2839 Pacific is a warm & inviting home like no other in San Francisco. Evocative of a Parisienne-style villa, the home's dramatic architecture lends itself beautifully to a comfortable, more contemporary style of furnishing favored by today's leading design connoisseurs. This grand residence has been updated for modern living with top-of-line appliances, lighting & security. Its generous yet quite straightforward floor plan provides for gracious indoor/outdoor entertaining on the main level, a full-floor primary suite with sunny home office on the 2nd level, and a top level featuring four bedrooms, three baths & a second home office. The lower level allows for more casual relaxation, with its large media room, recreation room, catering kitchen, and outdoor fitness patio & spa. Two-car garage, wine cellar and elevator to all levels complete this must-see home in one of SF's prime locations.",
        year_built: 1912,
        lat: 37.792480902734674, 
        lng: -122.44197424461238,
        est_mo_payment:101956,
        greenfin_estimate: 15852534,
        price_per_sqft: 1838
        )

        
l2.photos.attach([
    {io: URI.open("https://ssl.cdn-redfin.com/photo/9/bigphoto/702/422690702_0.jpg"),filename: "l2main.jpg"},
    {io: URI.open("https://ssl.cdn-redfin.com/photo/9/bigphoto/702/422690702_11_1.jpg"),filename: "l2second.jpg"},
    {io: URI.open("https://ssl.cdn-redfin.com/photo/9/bigphoto/702/422690702_12_1.jpg"),filename: "l2third.jpg"}

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

# l4

l4 = Listing.create!(
            agent_id: 1,
            status: 'Video Tour',
            street_address: "669 Marina Blvd",
            city: 'San Francisco',
            state: 'CA',
            zip: 94118,
            property_type: 'Singel Family Residential',
            list_price: 7399000,
            beds: 5,
            baths: 5,
            sqft: 3929,
            lot: 4944,
            description: "
            Overlooking the SF Marina Yacht Harbor, this remodeled residence grants views of The Golden Gate Bridge, Alcatraz, & more! Classically designed with 5 beds & 5 full baths, a lower-level living space, & an expansive backyard- located in the coveted Marina District. From the grand foyer, follow Italian porcelain tile into a bright living room that offers views of the peaceful harbor. Off the modern & upgraded kitchen, a window-lined dining area leads out to a private backyard with 2 spacious patios & durable turf, offering a great place for hosting. Passing the main level bedroom/office, a staircase will guide you up to 3 bedrooms, each with an ensuite. Natural light pours into 2 of the bedrooms through a sunroom while the 3rd bedroom connects to a balcony facing the harbor. On the ground floor, you'll find an ADU with a kitchenette, living room, workout space/den, & a bedroom/bathroom. Moments from the Palace of Fine Arts, Presidio Park, & fine dining, this home truly offers it all.",
            year_built: 1931,
            lat: 37.80540824693704, 
            lng: -122.44494858878804,
            est_mo_payment: 47445,
            greenfin_estimate: 7465846,
            price_per_sqft: 1883
            )

        
l4.photos.attach([
    {io: URI.open("https://ssl.cdn-redfin.com/photo/77/bigphoto/117/422701117_1.jpg"),filename: "l4main.jpg"},
    {io: URI.open("https://ssl.cdn-redfin.com/photo/77/mbpaddedwide/117/genMid.422701117_20_1.jpg"),filename: "l4second.jpg"},
    {io: URI.open("https://ssl.cdn-redfin.com/photo/77/bigphoto/117/422701117_79_1.jpg"),filename: "l4third.jpg"}

])

# l5
l5 = Listing.create!(
            agent_id: 9,
            status: 'Floor Plans',
            street_address: "1805 Buchanan St Unit 1B",
            city: 'San Francisco',
            state: 'CA',
            zip: 94115,
            property_type: 'Singel Family Residential',
            list_price: 11750000,
            beds: 1,
            baths: 1.5,
            sqft: 1122,
            lot: 3163,
            description: "1805 Buchanan Street, #1B provides the opportunity to own an individualized work of art while experiencing the finest in luxury living. Located in the heart of Japantown, this unique residence offers ease of access to some of the city's best amenities. The brand-new four-story building pulls inspiration from traditional Japanese architecture, while respecting the neighborhood's iconic aesthetics, ultimately creating a striking structure. A geometric yet complex facade of concrete, steel, glass, and slatted wood provides abundant natural light and ample vantage points. Unit #1B has an expansive layout with heightened ceilings, elegant living spaces with designer materials, top of the line kitchens with best in class appliances, spa-grade bathrooms and high-end finishes. Topping off the luxury building is an expansive communal rooftop deck with spa, bbq grill and seated fire table. A great pied-e-terre, investment property or grand 1 bedroom primary residence.",
            year_built: 2021,
            lat: 37.787231152782304, 
            lng: -122.4301664292717,
            est_mo_payment: 10613,
            greenfin_estimate: 1472234,
            price_per_sqft: 1337
            )

        
l5.photos.attach([
    {io: URI.open("https://ssl.cdn-redfin.com/photo/9/bigphoto/674/422699674_0.jpg"),filename: "l5main.jpg"},
    {io: URI.open("https://ssl.cdn-redfin.com/photo/9/bigphoto/674/422699674_12_0.jpg"),filename: "l5second.jpg"},
    {io: URI.open("https://ssl.cdn-redfin.com/photo/9/bigphoto/674/422699674_2_0.jpg"),filename: "l5third.jpg"}

])

# l6
l6 = Listing.create!(
            agent_id: 3,
            status: 'Back on market',
            street_address: "401 Harrison St Unit 39E,",
            city: 'San Francisco',
            state: 'CA',
            zip: 94105,
            property_type: 'Condo',
            list_price: 2645000,
            beds: 2,
            baths: 2,
            sqft: 1297,
            lot: 0,
            description: "Designed by the renowned Ken Fulk, The Harrison sets a new benchmark for lavish urban living. From kitchens with professional-grade appliances by Bertazzoni and Sub-Zero, to the spa-like primary baths featuring porcelain Herringbone flooring revel in unrivaled style. All homes feature diagonal-planked Siberian Oak floors, polished white slab Carrara marble countertops and unlacquered Waterworks brass fixtures. Enjoy five-star amenities and services including a Grand Salon lobby staffed 24/7, a concierge, The Pantry with coffee and tea, fitness center, heated pool and spa, and close proximity to San Francisco's most sought-after attractions. The Harrison is over 98% sold. Don't miss this chance to own one of the final new homes with the best views. Call sales gallery at 415 721 7788 for an appointment.",
            year_built: 2014,
            lat: 37.78644269699898, 
            lng: -122.39231558878846,
            est_mo_payment: 18488,
            greenfin_estimate: 2551532,
            price_per_sqft: 2039
            )

        
l6.photos.attach([
    {io: URI.open("https://ssl.cdn-redfin.com/photo/9/bigphoto/985/422697985_1.jpg"),filename: "l6main.jpg"},
    {io: URI.open("https://ssl.cdn-redfin.com/photo/9/mbpaddedwide/985/genMid.422697985_7_1.jpg"),filename: "l6second.jpg"},
    {io: URI.open("https://ssl.cdn-redfin.com/photo/9/mbpaddedwide/985/genMid.422697985_22_1.jpg"),filename: "l6third.jpg"}

])


# l7
l7 = Listing.create!(
            agent_id: 1,
            status: 'Active',
            street_address: "738 15th Ave,",
            city: 'San Francisco',
            state: 'CA',
            zip: 94118,
            property_type: 'Singel Family Residential',
            list_price: 11750000,
            beds: 4,
            baths: 3.5,
            sqft: 3106,
            lot: 3184,
            description: "Newly completed renovation, with approved plans & permits. Perfect for the entire family, including a newly built ground level suite...a perfect respite for parents, a teen or an in-law, with double doors to let sunshine & fresh air pour in, leading to the multi-tier backyard oasis. What a great way to start the morning or relax the day away. The home's main level boasts separate formal living & formal dining rooms. The chef's kitchen opens to a family room overlooking the backyard. There's also a private, quaint study room. Lots of natural light & windows & skylights everywhere. The upper level houses the primary suite, 2 additional bedrooms & 2 full baths. Another jack & jill room that connects the 2 bedrooms has a closet & can be used as another bedroom or loft/play area just for the kids. Top tier fixtures throughout the baths, kitchen & entire home. Home inspection reports & City building permits are completed, approved & on file. Currently NOT staged...and still gorgeous! 3D Home Tour Link: https://my.matterport.com/show/?m=PEPT8WhTw9h&title=0&brand=0",
            year_built: 1917,
            lat: 37.774396789593354, 
            lng: -122.4732834157775,
            est_mo_payment: 22473,
            greenfin_estimate: 3520876,
            price_per_sqft: 1127
            )

        
l7.photos.attach([
    {io: URI.open("https://ssl.cdn-redfin.com/photo/9/bigphoto/882/422711882_2.jpg"),filename: "l7main.jpg"},
    {io: URI.open("https://ssl.cdn-redfin.com/photo/9/bigphoto/882/422711882_17_2.jpg"),filename: "l7second.jpg"},
    {io: URI.open("https://ssl.cdn-redfin.com/photo/9/bigphoto/882/422711882_18_2.jpg"),filename: "l7third.jpg"}

])

# l8

l8 = Listing.create!(
            agent_id: 9,
            status: 'Active',
            street_address: "2620 Buchanan St,",
            city: 'San Francisco',
            state: 'CA',
            zip: 94115,
            property_type: 'Singel Family Residential',
            list_price: 165000000,
            beds: 6,
            baths: 7.5,
            sqft: 6820,
            lot: 3502,
            description: "Situated in the heart of Pacific Heights, 2620 Buchanan is the pinnacle of this distinguished neighborhood just steps from the popular shops and restaurants of Fillmore and Union Streets. A 4-year renovation yields Bay views on 3 levels, 13 ft ceilings & custom finishes. A living room w/ fireplace is lit by the home's turret. A chef's kitchen boasts dual sets of appliances, breakfast area & butler's pantry. A family room adjacent to the kitchen opens to a walk-out deck. Hidden wet bar & powder room complete the 1st level. Upstairs are 4 en-suite bathrooms, & the primary suite comprises the full top level w/ expansive dressing room, walk-in closets, wet room w/ 2 shower heads & soaking tub, & dual vanities w/ picture window. The lower level offers an office w/ kitchenette & private street access. The in-home gym boasts padded floors, wall-to-wall mirrors & built-in cooling. A wine case has space for 330 bottles, & a family/theater room features a dining area & bonus kitchen + access to covered patio w/ BBQ & firepit-warmed yard w/ built-in seating. The garage accommodates 4 cars w/ a turntable for ease of access. 2620 Buchanan is a property like no other with its prime location in San Francisco's most prominent neighborhood and high-end design, form and functionality.",
            year_built: 1900,
            lat: 37.794762896973104, 
            lng: -122.43137315995307,
            est_mo_payment: 105803,
            greenfin_estimate: 169000000,
            price_per_sqft: 2419
            )

        
l8.photos.attach([
    {io: URI.open("https://ssl.cdn-redfin.com/photo/9/bigphoto/121/422703121_29_1.jpg"),filename: "l8main.jpg"},
    {io: URI.open("https://ssl.cdn-redfin.com/photo/9/mbpaddedwide/121/genMid.422703121_8_1.jpg"),filename: "l8second.jpg"},
    {io: URI.open("https://ssl.cdn-redfin.com/photo/9/mbpaddedwide/121/genMid.422703121_24_1.jpg"),filename: "l8third.jpg"}

])

# l9
l9 = Listing.create!(
            agent_id: 2,
            status: 'Active',
            street_address: "2418 20th Ave #208,",
            city: 'San Francisco',
            state: 'CA',
            zip: 94116,
            property_type: 'condo',
            list_price: 1095000,
            beds: 3,
            baths: 3,
            sqft: 1217,
            lot: 1000,
            description: "The Parkside features 13 generous, sunlit condos ranging from one to three bedrooms, all of which are located on the top two floors of the building. Extensively updated, each unit offers San Francisco living at its finest, at every step. From Pacific Ocean views and French door terraces, to chef's kitchens and spa-quality bathrooms. The updated kitchen has everything you need: gorgeous porcelain slab countertops and backsplash, a statement waterfall breakfast bar, modern cabinetry, and high-end stainless steel appliances from Thermador, Fisher & Paykel and Bosch. Parking is available for every unit as well as bike parking and storage.",
            year_built: 1929,
            lat: 37.7428384439749, 
            lng: -122.47641340043766,
            est_mo_payment: 7632,
            greenfin_estimate: 1000000,
            price_per_sqft: 900
            )

        
l9.photos.attach([
    {io: URI.open("https://ssl.cdn-redfin.com/photo/9/bigphoto/908/422697908_0.jpg"),filename: "l9main.jpg"},
    {io: URI.open("https://ssl.cdn-redfin.com/photo/9/mbpaddedwide/908/genMid.422697908_11_0.jpg"),filename: "l9second.jpg"},
    {io: URI.open("https://ssl.cdn-redfin.com/photo/9/mbpaddedwide/908/genMid.422697908_33_0.jpg"),filename: "l9third.jpg"}

])


# l10
l10 = Listing.create!(
            agent_id: 4,
            status: 'Active',
            street_address: "2121 Webster St Ph 1-7,",
            city: 'San Francisco',
            state: 'CA',
            zip: 94115,
            property_type: 'Singel Family Residential',
            list_price: 19995000,
            beds: 5,
            baths: 5.5,
            sqft: 5310,
            lot: 1009,
            description: "Following three years of design & build, the just-completed Penthouse 1-7 at The Pacific showcases large-scale rooms with soaring ceilings, windows on three sides, contemporary designs, and topline infrastructure - atop one of San Francisco's most admired buildings. Masterfully created with materials certified organic & toxin-free, this five-bedroom, five & one-half bath penthouse spans 5,310sf while providing a palette of warm finishes rich in texture - from walnut millwork to undulating floors of travertine. For safety & convenience, advanced infrastructure amenities include automated control of lighting, shades, climate, media & security. The Pacific's in-demand amenities include 24/7 door-staff, concierge, fitness room, hotel-style suite for guests, landscaped gardens, fireside library & rooftop terrace with fireboxes to enjoy views of Pacific Heights landmarks. Centrally located amidst the coffee houses, bistros, bookstores, and stylish boutiques of the Fillmore Corridor.",
            year_built: 2016,
            lat: 37.79040598653918, 
            lng: -122.43284174461239,
            est_mo_payment: 133060,
            greenfin_estimate: 200005000,
            price_per_sqft: 3766
            )

        
l10.photos.attach([
    {io: URI.open("https://ssl.cdn-redfin.com/photo/9/bigphoto/130/421612130_0.jpg"),filename: "l10main.jpg"},
    {io: URI.open("https://ssl.cdn-redfin.com/photo/9/mbpaddedwide/130/genMid.421612130_6_1.jpg"),filename: "l10second.jpg"},
    {io: URI.open("https://ssl.cdn-redfin.com/photo/9/mbpaddedwide/130/genMid.421612130_19_1.jpg"),filename: "l10third.jpg"}

])

# l11

l10 = Listing.create!(
            agent_id: 4,
            status: 'Active',
            street_address: "2121 Webster St Ph 1-7,",
            city: 'San Francisco',
            state: 'CA',
            zip: 94115,
            property_type: 'Singel Family Residential',
            list_price: 19995000,
            beds: 5,
            baths: 5.5,
            sqft: 5310,
            lot: 1009,
            description: "Following three years of design & build, the just-completed Penthouse 1-7 at The Pacific showcases large-scale rooms with soaring ceilings, windows on three sides, contemporary designs, and topline infrastructure - atop one of San Francisco's most admired buildings. Masterfully created with materials certified organic & toxin-free, this five-bedroom, five & one-half bath penthouse spans 5,310sf while providing a palette of warm finishes rich in texture - from walnut millwork to undulating floors of travertine. For safety & convenience, advanced infrastructure amenities include automated control of lighting, shades, climate, media & security. The Pacific's in-demand amenities include 24/7 door-staff, concierge, fitness room, hotel-style suite for guests, landscaped gardens, fireside library & rooftop terrace with fireboxes to enjoy views of Pacific Heights landmarks. Centrally located amidst the coffee houses, bistros, bookstores, and stylish boutiques of the Fillmore Corridor.",
            year_built: 2016,
            lat: 37.79040598653918, 
            lng: -122.43284174461239,
            est_mo_payment: 133060,
            greenfin_estimate: 200005000,
            price_per_sqft: 3766
            )

        
l10.photos.attach([
    {io: URI.open("https://ssl.cdn-redfin.com/photo/9/bigphoto/130/421612130_0.jpg"),filename: "l10main.jpg"},
    {io: URI.open("https://ssl.cdn-redfin.com/photo/9/mbpaddedwide/130/genMid.421612130_6_1.jpg"),filename: "l10second.jpg"},
    {io: URI.open("https://ssl.cdn-redfin.com/photo/9/mbpaddedwide/130/genMid.421612130_19_1.jpg"),filename: "l10third.jpg"}

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


