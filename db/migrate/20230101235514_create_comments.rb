class CreateComments < ActiveRecord::Migration[7.0]
  def change
    create_table :comments do |t|
      t.references :listing, null: false, foreign_key: true
      t.string :body, null: false
      t.references :author, null: false, foreign_key: {to_table: :users}

      t.timestamps
    end
  end
end
