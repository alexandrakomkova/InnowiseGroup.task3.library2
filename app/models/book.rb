# frozen_string_literal: true

# .rubocop.yml
class Book < ApplicationRecord
  validates :title, presence: true
  validates :body, presence: true, length: { minimum: 10, maximum: 100 }
end
