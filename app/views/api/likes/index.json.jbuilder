@likes.each do |like|
    json.set! like.id do
        json.extract! like, :id,:listing_id
    end
end