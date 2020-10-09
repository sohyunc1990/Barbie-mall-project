class CreateProducts < ActiveRecord::Migration[6.0]
  def change
    create_table :products do |t|
      t.string :name
      t.string :img_url
      t.integer :price
      t.string :category

      t.timestamps
    end
  end
end
