# frozen_string_literal: true

# .rubocop.yml
class Author < ApplicationRecord
  has_many :books

  validates :name, presence: true, length: { maximum: 20 }
  validates :surname, presence: true, length: { maximum: 20 }
end
