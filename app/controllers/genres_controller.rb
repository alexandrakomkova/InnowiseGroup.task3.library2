# frozen_string_literal: true
#
# .rubocop.yml
class GenresController < ApplicationController
  # before_action :set_book, only: [:show, :update, :destroy]

      # GET /books
  def index
    @genres = Genre.all
    render json: { status: 'SUCCESS', data: @genres }
  end

      # GET /books/1
  def show
    @genre = Genre.find(params[:id])
    render json: { status: 'SUCCESS', data: @genre }
  end

      # POST /books
  def create
    @genre = Genre.new(genre_params)

    if @genre.save
      render json: { status: 'SUCCESS', data: @genre }, status: :created
    else
      render json: { status: 'ERROR', data: @genre.errors }, status: :unprocessable_entity
    end
  end

      # PATCH/PUT /books/1
  def update
    @genre = genre_params

    if @genre.update(genre_params)
      render json: { status: 'SUCCESS', data: @genre }
    else
      render json: { status: 'ERROR', data: @genre.errors }, status: :unprocessable_entity
    end
  end

      # DELETE /books/1
  def destroy
    @genre = genre_params
    @genre.destroy
    render json: { status: 'SUCCESS', message: 'deleted genre', data: @genre }
  end

      private
      # Use callbacks to share common setup or constraints between actions.
  def set_genre
    @genre = Genre.find(params[:id])
  end

      # Only allow a list of trusted parameters through.
  def genre_params
    params.permit(:genre)
  end
    end

