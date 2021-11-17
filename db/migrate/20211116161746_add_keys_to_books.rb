class AddKeysToBooks < ActiveRecord::Migration[6.1]
  def change
    add_reference :books, :authors, index: true, foreign_key: true
    add_reference :books, :publishers, index: true, foreign_key: true
    add_reference :books, :genres, index: true, foreign_key: true
    add_reference :books, :formats, index: true, foreign_key: true

  end
end
