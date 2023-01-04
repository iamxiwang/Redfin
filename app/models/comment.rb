# == Schema Information
#
# Table name: comments
#
#  id         :bigint           not null, primary key
#  listing_id :bigint           not null
#  body       :string           not null
#  author_id  :bigint           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Comment < ApplicationRecord
    validates :listing_id, :body, :author_id, presence: true

    belongs_to :listing,
        foreign_key: :listing_id,
        class_name: :Listing

    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User
end
