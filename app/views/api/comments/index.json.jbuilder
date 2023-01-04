@comments.each do |comment|
    json.set! comment.id do
        # json.extract! comment, :id, :author_id, :listing_id,:body,:created_at
        json.partial! 'comment', comment: comment
    end
end