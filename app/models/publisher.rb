class Publisher < ApplicationRecord
  validates :name, presence: true, length: { maximum: 20 }
  validates :address, presence: true, length: { minimum: 10, maximum: 30 }
  validates :phone, presence: true, length: { maximum: 10 }
end
