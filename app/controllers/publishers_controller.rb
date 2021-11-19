# frozen_string_literal: true

# .rubocop.yml
class PublishersController < ApplicationController
  before_action :set_publisher, only: [:show, :update, :destroy]

  # GET /publishers
  def index
    @publishers = Publisher.all
    render json: @publishers
  end

  # GET /books/1
  def show
    @publisher = Publisher.find(params[:id])
    render json: @publisher
  end

  # POST /publishers
  def create
    @publisher = Publisher.new(publisher_params)

    if @publisher.save
      render json: @publisher, status: :created
    else
      render json: @publisher.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /publishers/1
  def update
    @publisher = Publisher.find(params[:id])

    if @publisher.update(publisher_params)
      render json: @publisher
    else
      render json: @publisher.errors, status: :unprocessable_entity
    end
  end

  # DELETE /publishers/1
  def destroy
    @publisher = Publisher.find(params[:id])
    @publisher.destroy
    render json: { message: 'deleted publisher', data: @publisher }
  end

      private
  # Use callbacks to share common setup or constraints between actions.
  def set_publisher
    @publisher = Publisher.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def publisher_params
    params.require(:publisher).permit(:name, :address, :phone)
  end
    end



