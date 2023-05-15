@likes.each do |like|
    json.set! like.id do
        json.extract! like, :listing_id
    end
end