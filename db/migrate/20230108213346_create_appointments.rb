class CreateAppointments < ActiveRecord::Migration[7.0]
  def change
    create_table :appointments do |t|
      t.references :agent, null: false, foreign_key: {to_table: :users}
      t.references :user, null: false, foreign_key: true
      t.references :listing, null: false, foreign_key: true
      t.datetime :tour_time
      t.string :message
      t.boolean :cancelled

      t.timestamps
    end
  end
end
