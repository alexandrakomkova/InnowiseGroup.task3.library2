class CreateFormats < ActiveRecord::Migration[6.1]
  def change
    create_table :formats do |t|
      t.string :format

      t.timestamps
    end
  end
end
