class CreateFavorites < ActiveRecord::Migration[6.0]
  def change
    create_table :favorites do |t|
      t.integer :user
      t.integer :product

      t.timestamps
    end
  end
end
