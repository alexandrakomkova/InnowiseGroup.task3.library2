# frozen_string_literal: true

# .rubocop.yml
class Genre < ApplicationRecord
  validates :genre, presence: true, length: { minimum: 5, maximum: 20 }
end
