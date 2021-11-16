# frozen_string_literal: true

# .rubocop.yml
module Api
  module V1
    # .rubocop.yml
    class BooksController < ApplicationController
      # before_action :set_book, only: [:show, :update, :destroy]

      # GET /books
      def index
        @books = Book.all

        #render json: { status: 'SUCCESS', data: @books }
      end

      # GET /books/1
      def show
        @book = Book.find(params[:id])
        # redirect_to @book
        render json: { status: 'SUCCESS', data: @book }
      end

      # POST /books
      def create
        book = Book.new(book_params)

        if book.save
          render json: { status: 'SUCCESS', data: book }, status: :created
        else
          render json: { status: 'ERROR', data: book.errors }, status: :unprocessable_entity
        end
      end

      # PATCH/PUT /books/1
      def update
        book = Book.find(params[:id])

        if book.update(book_params)
          render json: { status: 'SUCCESS', data: book }
        else
          render json: { status: 'ERROR', data: book.errors }, status: :unprocessable_entity
        end
      end

      # DELETE /books/1
      def destroy
        book = Book.find(params[:id])
        book.destroy
        render json: { status: 'SUCCESS', message: 'deleted book', data: book }
      end

      private
      # Use callbacks to share common setup or constraints between actions.
      def set_book
        @book = Book.find(params[:id])
      end

      # Only allow a list of trusted parameters through.
      def book_params
        params.require(:book).permit(:title, :body)
      end
    end
  end
end

