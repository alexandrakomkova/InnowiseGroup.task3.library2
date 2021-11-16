# frozen_string_literal: true

4.times do
  Book.create({
                title: Faker::Book.title,
                body: Faker::Lorem.sentence
              })
end
