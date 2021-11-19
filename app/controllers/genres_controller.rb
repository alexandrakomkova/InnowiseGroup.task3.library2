# frozen_string_literal: true
#
# .rubocop.yml
class GenresController < ApplicationController
  before_action :set_genre, only: [:show, :update, :destroy]

  # GET /genres
  def index
    @genres = Genre.all
    render json: @genres
  end

  # GET /books/1
  def show
    @genre = Genre.find(params[:id])
    render json: @genre
  end

  # POST /genres
  def create
    @genre = Genre.new(genre_params)

    if @genre.save
      render json: @genre, status: :created
    else
      render json: @genre.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /genres/1
  def update
    @genre = genre_params

    if @genre.update(genre_params)
      render json: @genre
    else
      render json: @genre.errors, status: :unprocessable_entity
    end
  end

  # DELETE /genres/1
  def destroy
    @genre =set_genre
    @genre.destroy
    render json: { message: 'deleted genre', data: @genre }
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

