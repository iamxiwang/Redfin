# == Schema Information
#
# Table name: appointments
#
#  id         :bigint           not null, primary key
#  agent_id   :bigint           not null
#  user_id    :bigint           not null
#  listing_id :bigint           not null
#  tour_time  :datetime         not null
#  message    :string
#  cancelled  :boolean
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Appointment < ApplicationRecord
    validates :agent_id, :user_id, :listing_id, :tour_time, presence: true

    belongs_to :agent,
        foreign_key: :agent_id,
        class_name: :User

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :listing,
        foreign_key: :listing_id,
        class_name: :Listing
end
