

@listings.each do |listing|
    json.set! listing.id do
        json.partial! 'listing', listing: listing
        json.photoUrl listing.photos.map{|photo| photo.url}
        json.created_at listing.created_at.strftime("%b %e, %Y")
    end
end
