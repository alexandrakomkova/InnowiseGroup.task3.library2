# frozen_string_literal: true

# .rubocop.yml
class BooksController < ApplicationController
  before_action :set_book, only: [:show, :update, :destroy]
  def index
    @books = Book.all
    render json: @books
  end

  def show
    @book = set_book
    render json: @book
  end

  def create
    @book = Book.new(book_params)

    if @book.save
      render json: @book, status: :created
    else
      render json: @book.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /books/1
  def update
    @book = set_book

    if @book.update(book_params)
      render json: @book
    else
      render json: @book.errors, status: :unprocessable_entity
    end
  end

  # DELETE /books/1
  def destroy
    @book = set_book
    @book.destroy
    render json: { message: 'deleted book', data: @book }
  end

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_book
    @book = Book.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def book_params
    params.permit(:title, :body, :authors_id, :publishers_id, :genres_id, :formats_id)
  end
end