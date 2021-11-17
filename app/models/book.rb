# frozen_string_literal: true

# .rubocop.yml
class Book < ApplicationRecord

  belongs_to :author, foreign_key: :authors_id
  belongs_to :publisher, foreign_key: :publishers_id
  belongs_to :genre, foreign_key: :genres_id
  belongs_to :format, foreign_key: :formats_id

  validates :title, presence: true
  validates :body, presence: true, length: { minimum: 10, maximum: 100 }
end
