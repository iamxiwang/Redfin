class ChangeTourTimeNullFalse < ActiveRecord::Migration[7.0]
  def change
    change_column_null :appointments, :tour_time, false
  end
end
