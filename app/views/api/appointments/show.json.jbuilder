json.extract! @appointment, :id, :agent_id, :user_id,:listing_id, :message, :tour_time,:cancelled
json.tour_time @appointment.tour_time.strftime("%a %b %e, %Y, %H: %M")