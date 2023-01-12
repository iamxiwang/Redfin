
json.extract! @comment, :id, :listing_id, :body, :author_id,:created_at
json.profileImgUrl @comment.author.img.url
json.create_date @comment.created_at.strftime("%a %b %e, %Y")


# @reviews.each do |review|
#     json.set! review.id do
#         json.extract! review, :id, :reviewer_id, :listing_id, :body, :cleanliness, :communication, :check_in, :accuracy, :location, :value, :created_at

#         #another key-value pair for extracting the username
#         json.username review.reviewer.username

#         json.create_date review.created_at.strftime("%b %e, %Y")
#         json.update_date review.updated_at.strftime("%b %e, %Y")
#     end
# end