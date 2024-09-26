class CreateQueries < ActiveRecord::Migration[7.2]
  def change
    create_table :queries do |t|
      t.text :description

      t.timestamps
    end
  end
end
