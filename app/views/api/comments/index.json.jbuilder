@comments.each do |comment|
    json.set! comment.id do
        # json.extract! comment, :id, :author_id, :listing_id,:body,:created_at
        json.partial! 'comment', comment: comment
        json.profileImgUrl comment.author.img.url
        json.create_date comment.created_at.strftime("%a %b %e, %Y")
        json.update_date comment.updated_at.strftime("%a %b %e, %Y")
    end
end