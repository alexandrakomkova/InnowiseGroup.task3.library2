# frozen_string_literal: true

# .rubocop.yml
class AuthorsController < ApplicationController
      # before_action :set_book, only: [:show, :update, :destroy]

      # GET /books
  def index
    @authors = Author.all
    render json: { status: 'SUCCESS', data: @authors }
  end

      # GET /books/1
  def show
    @author = Author.find(params[:id])
    render json: { status: 'SUCCESS', data: @author }
  end

      # POST /books
  def create
    @author = Author.new(author_params)

    if @author.save
      render json: { status: 'SUCCESS', data: @author }, status: :created
    else
      render json: { status: 'ERROR', data: @author.errors }, status: :unprocessable_entity
    end
  end

      # PATCH/PUT /books/1
  def update
    @author = Author.find(params[:id])

    if @author.update(author_params)
      render json: { status: 'SUCCESS', data: @author }
    else
      render json: { status: 'ERROR', data: @author.errors }, status: :unprocessable_entity
    end
  end

      # DELETE /books/1
  def destroy
    @author = Author.find(params[:id])
    @author.destroy
    render json: { status: 'SUCCESS', message: 'deleted author', data: @author }
  end

      private
      # Use callbacks to share common setup or constraints between actions.
  def set_author
    @author = Author.find(params[:id])
  end

      # Only allow a list of trusted parameters through.
  def author_params
    params.require(:author).permit(:name, :surname)
  end
    end

