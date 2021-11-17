# frozen_string_literal: true

# .rubocop.yml
class Format < ApplicationRecord
  has_many :books

  validates :format, presence: true, length: { minimum: 5, maximum: 20 }
end
