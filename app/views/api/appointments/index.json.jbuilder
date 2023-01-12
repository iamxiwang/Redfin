@appointments.each do |appointment|
    json.set! appointment.id do
        json.extract! appointment, :id, :agent_id, :user_id,:listing_id, :message,:cancelled

        json.tour_time appointment.tour_time.strftime("%a %b %e, %Y")
    end
end