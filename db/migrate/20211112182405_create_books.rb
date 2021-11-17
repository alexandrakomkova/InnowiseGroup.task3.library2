# frozen_string_literal: true

# .rubocop.yml
class CreateBooks < ActiveRecord::Migration[6.1]
  def change
    create_table :books do |t|
      t.string :title
      t.text :body
      #t.references :genre, null: false, foreign_key: true
      #t.references :author, null: false, foreign_key: true
      #t.references :format, null: false, foreign_key: true
      #t.references :publisher, null: false, foreign_key: true

      t.timestamps
    end
  end
end
