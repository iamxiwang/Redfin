# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
require 'open-uri'

puts "Destroying tables..."
# Unnecessary if using `rails db:seed:replant`
Appointment.destroy_all
Comment.destroy_all
Listing.destroy_all
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
puts "before opeing the url"
demo.img.attach(io: URI.open("https://greenfin-seeds.s3.us-west-1.amazonaws.com/demo-lition.jpeg"),filename: "demo.jpg")
puts "Done opeing the url"
Baobob = User.create!(
    username: 'Baobob',
    email: 'baobob@gmail.com',
    password: 'password'
)
puts "before opeing baobob the url"
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


ApplicationRecord.connection.reset_pk_sequence!('listings')

l1 = Listing.create!(
        agent_id: 2,
        status: 'Open house SUN 12pm 50 2 pm',
        street_address: "30 Santa Clara Ave,",
        city: 'San Francisco',
        state: 'CA',
        zip: 94127,
        property_type: 'Single Family Residential',
        list_price: 4600000,
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
    {io: URI.open("https://greenfin-seeds.s3.us-west-1.amazonaws.com/L1-1.jpeg"),filename: "l1main.jpg"},
    {io: URI.open("https://greenfin-seeds.s3.us-west-1.amazonaws.com/L1-2.jpeg"),filename: "l1second.jpg"},
    {io: URI.open("https://greenfin-seeds.s3.us-west-1.amazonaws.com/L1-3.jpeg"),filename: "l1third.jpg"}
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
    {io: URI.open("https://greenfin-seeds.s3.us-west-1.amazonaws.com/L2-1.jpeg"),filename: "l2main.jpg"},
    {io: URI.open("https://greenfin-seeds.s3.us-west-1.amazonaws.com/L2-2.jpeg"),filename: "l2second.jpg"},
    {io: URI.open("https://greenfin-seeds.s3.us-west-1.amazonaws.com/L2-3.jpeg"),filename: "l2third.jpg"}

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
            greenfin_estimate: 11730000,
            price_per_sqft: 2200
            )

        
l3.photos.attach([
    {io: URI.open("https://greenfin-seeds.s3.us-west-1.amazonaws.com/L3-1.jpeg"),filename: "l3main.jpg"},
    {io: URI.open("https://greenfin-seeds.s3.us-west-1.amazonaws.com/L3-2.jpeg"),filename: "l3second.jpg"},
    {io: URI.open("https://greenfin-seeds.s3.us-west-1.amazonaws.com/L3-3.jpeg"),filename: "l3third.jpg"}

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
    {io: URI.open("https://greenfin-seeds.s3.us-west-1.amazonaws.com/L4-1.jpeg"),filename: "l4main.jpg"},
    {io: URI.open("https://greenfin-seeds.s3.us-west-1.amazonaws.com/L4-2.jpeg"),filename: "l4second.jpg"},
    {io: URI.open("https://greenfin-seeds.s3.us-west-1.amazonaws.com/L4-3.jpeg"),filename: "l4third.jpg"}

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
            list_price: 1175000,
            beds: 1,
            baths: 1.5,
            sqft: 1122,
            lot: 3163,
            description: "1805 Buchanan Street, #1B provides the opportunity to own an individualized work of art while experiencing the finest in luxury living. Located in the heart of Japantown, this unique residence offers ease of access to some of the city's best amenities. The brand-new four-story building pulls inspiration from traditional Japanese architecture, while respecting the neighborhood's iconic aesthetics, ultimately creating a striking structure. A geometric yet complex facade of concrete, steel, glass, and slatted wood provides abundant natural light and ample vantage points. Unit #1B has an expansive layout with heightened ceilings, elegant living spaces with designer materials, top of the line kitchens with best in class appliances, spa-grade bathrooms and high-end finishes. Topping off the luxury building is an expansive communal rooftop deck with spa, bbq grill and seated fire table. A great pied-e-terre, investment property or grand 1 bedroom primary residence.",
            year_built: 2021,
            lat: 37.787231152782304, 
            lng: -122.4301664292717,
            est_mo_payment: 10613,
            greenfin_estimate: 1172234,
            price_per_sqft: 1337
            )

        
l5.photos.attach([
    {io: URI.open("https://greenfin-seeds.s3.us-west-1.amazonaws.com/L5-1.jpeg"),filename: "l5main.jpg"},
    {io: URI.open("https://greenfin-seeds.s3.us-west-1.amazonaws.com/L5-2.jpeg"),filename: "l5second.jpg"},
    {io: URI.open("https://greenfin-seeds.s3.us-west-1.amazonaws.com/L5-3.jpeg"),filename: "l5third.jpg"}

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
    {io: URI.open("https://greenfin-seeds.s3.us-west-1.amazonaws.com/L6-1.jpeg"),filename: "l6main.jpg"},
    {io: URI.open("https://greenfin-seeds.s3.us-west-1.amazonaws.com/L6-2.jpeg"),filename: "l6second.jpg"},
    {io: URI.open("https://greenfin-seeds.s3.us-west-1.amazonaws.com/L6-3.jpeg"),filename: "l6third.jpg"}

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
            list_price: 3620876,
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
    {io: URI.open("https://greenfin-seeds.s3.us-west-1.amazonaws.com/L7-1.jpeg"),filename: "l7main.jpg"},
    {io: URI.open("https://greenfin-seeds.s3.us-west-1.amazonaws.com/L7-2.jpeg"),filename: "l7second.jpg"},
    {io: URI.open("https://greenfin-seeds.s3.us-west-1.amazonaws.com/L7-3.jpeg"),filename: "l7third.jpg"}

])

# S3 SEEDS UNTIL ABOVE

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

l11 = Listing.create!(
            agent_id: 7,
            status: 'Active',
            street_address: "1650 Broadway St,",
            city: 'San Francisco',
            state: 'CA',
            zip: 94109,
            property_type: 'Condo',
            list_price: 2975000,
            beds: 3,
            baths: 2.5,
            sqft: 1484,
            lot: 1009,
            description: "Presenting a rare opportunity to own a North facing, rarely used, condo at the prestigious LuXe, a collection of 34 boutique residences, located on Broadway in the Pacific Heights, featuring iconic views of the Golden Gate Bridge, Marina, & Russian Hill! Recently built in 2016, this well acquainted, modern 3 bedroom & 2.5 baths condo was designed by award winning Edmonds & Lee Architects, featuring Caesar Stone kitchen countertops & custom moveable island. This pristine condo #401 features brilliant European Oak Floors, open living spaces, premium Studio Becker custom cabinetry, & radiant heated bathrooms complimented by Victoria + Albert designer tub. The floor to ceiling windows span the entire Northern view, with breathtaking outlooks of the Marina Bay, Russian Hill, and Golden Gate Bridge iconic views. The LuXe amenities include a front desk attendant, community room, and common outdoor space with BBQ. Located in an exceptionally rare and prime location central to hundreds of popular artisan stores, fun boutiques, gourmet Michelin-star restaurants, lush parks, prestigious galleries and exciting nightlife- all just blocks away and within walking distance. Immaculately maintained, and rarely used, this is an opportunity you don't want to miss!",
            year_built: 2016,
            lat: 37.796113305214874, 
            lng: -122.42441855810671,
            est_mo_payment: 20404,
            greenfin_estimate: 2874000,
            price_per_sqft: 2005
            )

        
l11.photos.attach([
    {io: URI.open("https://ssl.cdn-redfin.com/photo/9/bigphoto/160/422701160_0.jpg"),filename: "l11main.jpg"},
    {io: URI.open("https://ssl.cdn-redfin.com/photo/9/mbpaddedwide/160/genMid.422701160_15_0.jpg"),filename: "l11second.jpg"},
    {io: URI.open("https://ssl.cdn-redfin.com/photo/9/mbpaddedwide/160/genMid.422701160_46_0.jpg"),filename: "l11third.jpg"}

])


# l12 
l12 = Listing.create!(
            agent_id: 5,
            status: 'Active',
            street_address: "181 Fremont Unit 63A,",
            city: 'San Francisco',
            state: 'CA',
            zip: 94105,
            property_type: 'Condo',
            list_price: 5660000,
            beds: 3,
            baths: 3.5,
            sqft: 1882,
            lot: 1009,
            description: "
            Residence 63A is a 3-bedroom, 3.5-bath,1,882 square-foot home with a gracious foyer and open living room-dining room featuring arresting views of the Bay and the city. Contemporary interiors feature the world's finest materials hand-selected from around the globe including French oak hardwood floors, an open kitchen with Miele and Sub-Zero appliances and a spa-like primary bath wrapped in Arabescato Corchia marble. The primary bedroom is a refuge with striking windows and a custom-built sliding wall separating the sleeping area and primary bathroom concealing a sleek Sura 55'' television. Beyond exceptional privacy and unrivaled views, 181 Fremont boasts 5-star services, world-class art program, private full-floor Residents' Club w/ a 360-degree open-air terrace, skybridge access to Salesforce Park, and more.",
            year_built: 2018,
            lat: 37.789793759090024, 
            lng: -122.39542348878835,
            est_mo_payment: 40172,
            greenfin_estimate: 5491899,
            price_per_sqft: 3007
            )

        
l12.photos.attach([
    {io: URI.open("https://ssl.cdn-redfin.com/photo/9/bigphoto/332/423714332_1.jpg"),filename: "l12main.jpg"},
    {io: URI.open("https://ssl.cdn-redfin.com/photo/9/mbpaddedwide/332/genMid.423714332_5_0.jpg"),filename: "l12second.jpg"},
    {io: URI.open("https://ssl.cdn-redfin.com/photo/9/mbpaddedwide/332/genMid.423714332_17_0.jpg"),filename: "l12third.jpg"}

])


# l13

l13 = Listing.create!(
            agent_id: 2,
            status: 'Active',
            street_address: "64 Mars St,",
            city: 'San Francisco',
            state: 'CA',
            zip: 94114,
            property_type: 'Single Family Residential',
            list_price: 1675000,
            beds: 3,
            baths: 2,
            sqft: 2185,
            lot: 2469,
            description: "Attention contractors and buyers with imagination! This diamond in the rough is an excellent opportunity to create a wonderful home in one of San Francisco's most coveted neighborhoods. On the main level, the large living room has a fireplace, coved ceilings and bay windows with unobstructed views of the City to the Bay. Classic pocket doors open from the living room to the large dining room with built-in cabinet. The kitchen and half-bath have been removed and are waiting for a new owner. Stairs descend to a recently remodeled bedroom and bath. This room has a private entrance from the front of the home. The upper level consists of two, nice sized bedrooms. The front bedroom has amazing views and the rear bedroom has direct access to a deck and stairs to a spacious yard. There is also a full bath on this level. There is also a one-car garage. 64 Mars Street is minutes from the Castro, Cole Valley and Haight Ashbury neighborhoods,public transportation and Buena Vista Park.",
            year_built: 1908,
            lat: 37.76127000914336, 
            lng: -122.44473394461302,
            est_mo_payment: 10818,
            greenfin_estimate: 1663950,
            price_per_sqft: 767
            )

        
l13.photos.attach([
    {io: URI.open("https://ssl.cdn-redfin.com/photo/9/bigphoto/405/422706405_0.jpg"),filename: "l13main.jpg"},
    {io: URI.open("https://ssl.cdn-redfin.com/photo/9/mbpaddedwide/405/genMid.422706405_20_3.jpg"),filename: "l13second.jpg"},
    {io: URI.open("https://ssl.cdn-redfin.com/photo/9/mbpaddedwide/405/genMid.422706405_60_4.jpg"),filename: "l13third.jpg"}

])

# l14

l14 = Listing.create!(
            agent_id: 8,
            status: 'Active',
            street_address: "1000 North Point St #708",
            city: 'San Francisco',
            state: 'CA',
            zip: 94109,
            property_type: 'Co-op',
            list_price: 1895000,
            beds: 2,
            baths: 2,
            sqft: 1100,
            lot: 0,
            description: "Luxurious Co-Op fully remodeled from the underpinnings of new electrical, plumbing, hydronic heat, all new windows and the finest finish materials. Smart design choices optimize the iconic views spanning from Sutro Tower to Alcatraz. Grounded with white oak floors, recessed lighting and extra tall door frames. The kitchen features a porcelain back splash that doubles as dramatic art. Built-in Miele appliances and subzero wine storage call for entertaining. Clever storage throughout the home keeps the eyes attention on the views. The primary bedroom features walls of glass and multiple custom closets. Thoughtful touches in the primary bath from heated floors to a shower with a view. The 2nd bedroom has been reimagined as a den/office with spectacular views. The 2nd bath is reminiscent of a luxurious spa. Residents enjoy living in the heart of SF with doorman, parking, storage, clubroom and zen garden.",
            year_built: 1963,
            lat: 37.80571054613887, 
            lng: -122.4239995427656 ,
            est_mo_payment: 11993,
            greenfin_estimate: 1839215,
            price_per_sqft: 1840
            )

        
l14.photos.attach([
    {io: URI.open("https://ssl.cdn-redfin.com/photo/9/bigphoto/713/422693713_1.jpg"),filename: "l14main.jpg"},
    {io: URI.open("https://ssl.cdn-redfin.com/photo/9/mbpaddedwide/713/genMid.422693713_5_2.jpg"),filename: "l14second.jpg"},
    {io: URI.open("https://ssl.cdn-redfin.com/photo/9/mbpaddedwide/713/genMid.422693713_15_4.jpg"),filename: "l14third.jpg"}

])

# l15

l15 = Listing.create!(
            agent_id: 1,
            status: 'Active',
            street_address: "301 4th St,",
            city: 'Sausalito',
            state: 'CA',
            zip: 94965,
            property_type: 'Multi-Family (2-4 Unit)',
            list_price: 3499999,
            beds: 4,
            baths: 4,
            sqft: 3192,
            lot: 3001,
            description: "Welcome to Sausalito! This home is radiating with natural light, Captivating expansive views of the Richardson/San Francisco Bay, Angel Island, the Bay Bridge and the City of San Francisco. Equipped with two stories of main living quarters and a fully finished basement transformed into in-law/Au pair unit with Kitchen and full bathroom. Possible third unit, Buyer to verify!!! A short walk to the back of the property presents you with an attached two story, single bedroom apartment separated by a charming spiral staircase between each level. Recently landscaped, painted, re-floored and gracefully remodeled this elegant retreat is completely move in ready! Just a ten minute walk to town, close to parks, and one of Sausalitos secret staircases. This property is centrally located! Whether it's outdoor activities, shopping or nightlife you are chasing; An opportunity has presented itself to own this beauty, full of income potential. Don't miss out!",
            year_built: 1898,
            lat: 37.85014694193794, 
            lng: -122.48273675810528,
            est_mo_payment: 22604,
            greenfin_estimate: 3497576,
            price_per_sqft: 1096
            )

        
l15.photos.attach([
    {io: URI.open("https://ssl.cdn-redfin.com/photo/27/bigphoto/458/322105458_0.jpg"),filename: "l15main.jpg"},
    {io: URI.open("https://ssl.cdn-redfin.com/photo/27/mbpaddedwide/458/genMid.322105458_24_1.jpg"),filename: "l15second.jpg"},
    {io: URI.open("https://ssl.cdn-redfin.com/photo/27/mbpaddedwide/458/genMid.322105458_74_1.jpg"),filename: "l15third.jpg"}

])
# l16

l16 = Listing.create!(
        agent_id: 7,
        status: 'Open house SUN 12pm 50 2 pm',
        street_address: "615 Sausalito Blvd,",
        city: 'Sausalito',
        state: 'CA',
        zip: 94965,
        property_type: 'Single Family Residential',
        list_price: 7500000,
        beds: 5,
        baths: 4.5,
        sqft: 4974,
        lot: 5497,
        description: "Stately home in the coveted BANANA BELT of historic Sausalito has sweeping SF & Bay views! Unrivaled privacy atop a 1/3 acre knoll not visible from street but just min to SF. Owned by 1 family nearly 40 yrs, this Georgian-style gem w/its storybook facade, has been impeccably designed for multiple generations & modern functionality. Surrounded by manicured gardens, lush lawn & English garden hedges. Living level consists of a huge 30'x 60' Provence-style Kitchen which sits at the heart of the home. It enjoys an atrium wall of windows & is anchored by a cozy f/p. Entertainers will love the Viking Double oven, SubZero frig, Butler's pantry & wet bar...Perfect for casual or formal events. French doors lead to a stunning SF City view terrace that overlooks the beautiful lawn. Formal Dining Rm & Living Rm w/ f/p & library/music annex all with those same great Bay views. Home has sep. East & West wings, accessed by sep. staircases. Owner's wing contains Primary Suite w/SF views (& sunrises), luxurious bath, sitting rm, WFH Office + extra room for gym/nursery/etc. West Wing enjoys a Family Rm, 2BD/1BA & laundry. Downstairs is a Guest Suite(perfect for single-level living) & an Art Studio. See conceptual rendering for addition of 2-car garage w/workshop & ADU w/living roof!",
        year_built: 1987,
        lat: 37.852280180198974, 
        lng: -122.4845812446109,
        est_mo_payment: 48438,
        greenfin_estimate: 75000000,
        price_per_sqft: 1508
        )


l16.photos.attach([
    {io: URI.open("https://ssl.cdn-redfin.com/photo/27/bigphoto/327/322089327_5.jpg"),filename: "l16main.jpg"},
    {io: URI.open("https://ssl.cdn-redfin.com/photo/27/mbpaddedwide/327/genMid.322089327_13_6.jpg"),filename: "l16second.jpg"},
    {io: URI.open("https://ssl.cdn-redfin.com/photo/27/mbpaddedwide/327/genMid.322089327_39_5.jpg"),filename: "l16third.jpg"}
])
# l17

l17 = Listing.create!(
        agent_id: 2,
        status: 'Open house SUN 12pm 50 2 pm',
        street_address: "445 Belvedere Ave,",
        city: 'Belvedere',
        state: 'CA',
        zip: 94920,
        property_type: 'Single Family Residential',
        list_price: 31000000,
        beds: 4,
        baths: 6,
        sqft: 8131,
        lot: 9497,
        description: "Featured in Architectural Digest, this world-class residence showcases panoramic views of the San Francisco Bay, the Golden Gate Bridge, the entire city skyline of San Francisco, and Sausalito. This magnificent masterpiece in a dramatic setting on the most prestigious location is comprised of a 8,131 sq .ft. home on a 0.67 acre lot, featuring 4 bedrooms and 5.5 baths. This architectural work of art was designed by architect Charles Gwathmey, with spectacular outlooks from every corner of the expansive 4-level floor plan. . The uppermost level contains a 3-car garage with glass doors, an elevator which descends to a courtyard, a detached one bedroom, one bath guesthouse and a spacious wine cellar. A full bath with steam shower and sauna on the lowest level open onto a spacious outdoor terrace with a pool, whose infinity edge'' of water establishes a poetic connection to the Bay.",
        year_built: 2000,
        lat: 37.86403136217147, 
        lng: -122.46019177344584,
        est_mo_payment: 200209,
        greenfin_estimate: 31000000,
        price_per_sqft: 3813
        )


l17.photos.attach([
    {io: URI.open("https://ssl.cdn-redfin.com/photo/27/bigphoto/941/322049941_0.jpg"),filename: "l17main.jpg"},
    {io: URI.open("https://ssl.cdn-redfin.com/photo/27/mbpaddedwide/941/genMid.322049941_12_0.jpg"),filename: "l17second.jpg"},
    {io: URI.open("https://ssl.cdn-redfin.com/photo/27/mbpaddedwide/941/genMid.322049941_36_0.jpg"),filename: "l17third.jpg"}
])


# l18

l18 = Listing.create!(
        agent_id: 1,
        status: 'Open house SUN 12pm 50 2 pm',
        street_address: "93 Cumberland St,",
        city: 'San Francisco',
        state: 'CA',
        zip: 94110,
        property_type: 'Condo',
        list_price: 4950000,
        beds: 4,
        baths: 3.5,
        sqft: 5332,
        lot: 3497,
        description: "Welcome to 93 Cumberland in The Light House: a unique townhouse condominium in a 100+ year old restored neoclassical church across from the lush palm trees of Dolores Park. This 4-bedroom, 3.5-bathroom home centers around a spectacular great room with 30' ceilings, exposed brick walls, polished cement floors, steel beams, original & repurposed woodwork, clerestory windows, endless seating and dining areas, and an open industrial-style kitchen. On the main level is a bedroom, walk-in closet, gorgeous full bathroom with glass shower, half bath, and office. Upstairs are two skylit bedrooms, two walk-in closets, and a stunning bathroom with limestone tub & glass shower. On the lower floor is a family room (could be 4th bedroom), and a den/game room. Adjacent is an expansive laundry room/prep kitchen and a stylish full bathroom with shower. The unit includes one generous garage parking space, and the building offers a shared bike room and a beautiful garden. Live in the center of it all!",
        year_built: 1915,
        lat: 37.758971340793146,
        lng:  -122.42540043111879,
        est_mo_payment: 33770,
        greenfin_estimate: 4763226,
        price_per_sqft: 928
        )


l18.photos.attach([
    {io: URI.open("https://ssl.cdn-redfin.com/photo/9/bigphoto/125/423738125_1.jpg"),filename: "l18main.jpg"},
    {io: URI.open("https://ssl.cdn-redfin.com/photo/9/mbpaddedwide/125/genMid.423738125_11_1.jpg"),filename: "l18second.jpg"},
    {io: URI.open("https://ssl.cdn-redfin.com/photo/9/mbpaddedwide/125/genMid.423738125_33_1.jpg"),filename: "l18third.jpg"}
])

# l19


l19 = Listing.create!(
        agent_id: 4,
        status: 'Open house SUN 12pm 50 2 pm',
        street_address: "148 Huntington Dr,",
        city: 'San Francisco',
        state: 'CA',
        zip: 94132,
        property_type: 'Single Family Residential',
        list_price: 2388000,
        beds: 4,
        baths: 3.5,
        sqft: 1996,
        lot: 3497,
        description: "Sophisticated, Modern & Luxurious Home in Desirable Lake Shore! This fully detached, renovated from studs, 2-level 1,996 SQFT, 4BD/3.5BA home has just completed a full transformation. This smart home equipped with voice control, wall screen & security cameras. Behind the modern facade, beautiful White Oak hardwood floors, recessed lightings, plenty of natural light flows throughout the home's open airy layout with skylights. Upstairs offers open space with high ceilings, chef's dream kitchen w/ premium finishes including bar island, quartz countertops, backslash to ceilings, professional-grade appliances, modern cabinetry, 3BD/2BA w/ 1 master suite. Downstairs offers an entertaining family room w/ wet bar, 1BD/1BA master suite & half bath(All done w/ permits). Huge backyard & patio, perfect for family gathering/relaxation/BBQ, 1 car garage w/ washer/dryer installed. Close to Lake Merced, Golf Course, Ocean Beach, Lakeshore Plaza, Stonestown, SF Zoo, TOP-RANKED schools, & SFSU. Must See!",
        year_built: 1953,
        lat: 37.73297934711217, 
        lng: -122.49599900228422,
        est_mo_payment: 15432,
        greenfin_estimate: 2000000,
        price_per_sqft: 1196
        )


l19.photos.attach([
    {io: URI.open("https://ssl.cdn-redfin.com/photo/8/bigphoto/710/ML81915710_0.jpg"),filename: "l19main.jpg"},
    {io: URI.open("https://ssl.cdn-redfin.com/photo/8/mbpaddedwide/710/genMid.ML81915710_20_0.jpg"),filename: "l19second.jpg"},
    {io: URI.open("https://ssl.cdn-redfin.com/photo/8/mbpaddedwide/710/genMid.ML81915710_20_0.jpg"),filename: "l19third.jpg"}
])

# l20

l20 = Listing.create!(
        agent_id: 3,
        status: 'Open house SUN 12pm 50 2 pm',
        street_address: "1020 Broadway,",
        city: 'San Francisco',
        state: 'CA',
        zip: 94133,
        property_type: 'Single Family Residential',
        list_price: 6950000,
        beds: 5,
        baths: 3.5,
        sqft: 3285,
        lot: 6892,
        description: "PRICE REDUCTION! The offering of 1020 Broadway in the beautiful and historic Russian Hill/Nob Hill neighborhoods of San Francisco is a chance to own a piece of unmolested historic San Francisco and renovate this San Francisco Heritage Foundation registered estate to it's former glory. Combined with one of the biggest lots in the area, the home includes gorgeous period details, mature landscaping, and incredible views of downtown San Francisco and the Bay Bridge. This 3,285 sqft home boasts original Douglas Fir floors, wood burning fireplaces in several rooms, a large sunroom, 5 beds and 3.5 baths. The large wooden windows let in the warm afternoon light, and while there are two decks, the possibilities for expanding outdoor living on the property are boundless. The home is ideally designed to facilitate entertaining with its grand living room and additional guest/staff apartment.",
        year_built: 1925,
        lat: 37.797384445885854,
        lng: -122.41404177344734,
        est_mo_payment: 44886,
        greenfin_estimate: 6891210,
        price_per_sqft: 2116
        )


l20.photos.attach([
    {io: URI.open("https://ssl.cdn-redfin.com/photo/9/bigphoto/620/422638620_0.jpg"),filename: "l20main.jpg"},
    {io: URI.open("https://ssl.cdn-redfin.com/photo/9/mbpaddedwide/620/genMid.422638620_4_3.jpg"),filename: "l20second.jpg"},
    {io: URI.open("https://ssl.cdn-redfin.com/photo/9/mbpaddedwide/620/genMid.422638620_12_3.jpg"),filename: "l20third.jpg"}
])

ApplicationRecord.connection.reset_pk_sequence!('comments')

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


