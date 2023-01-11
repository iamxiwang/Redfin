@appointments.each do |appointment|
    json.set! appointment.id do
        json.extract! appointment, :id, :agent_id, :user_id,:listing_id, :message, :tour_time,:cancelled
    end
end