# frozen_string_literal: true

Rails.application.routes.draw do
  get '/books', to: 'books#index'
  resources :books
  resources :genres
  resources :authors
  resources :publishers
  resources :formats
end
=begin
#root 'api/v1/books#index'
namespace 'api' do
    namespace 'v1' do
      resources :books
      resources :genres
      resources :authors
      resources :publishers
      resources :formats
    end
  end
=end