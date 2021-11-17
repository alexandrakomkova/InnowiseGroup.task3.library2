# frozen_string_literal: true

2.times do
  Book.create({
                title: Faker::Book.title,
                body: Faker::Lorem.sentence,
                authors_id: 1,
                publishers_id: 1,
                genres_id: 1,
                formats_id: 1
              })
end
