# frozen_string_literal: true

# .rubocop.yml
module Api
  module V1
    # .rubocop.yml
    class PublishersController < ApplicationController
      # before_action :set_book, only: [:show, :update, :destroy]

      # GET /books
      def index
        @publishers = Publisher.all
        render json: { status: 'SUCCESS', data: @publishers }
      end

      # GET /books/1
      def show
        @publisher = Publisher.find(params[:id])
        render json: { status: 'SUCCESS', data: @publisher }
      end

      # POST /books
      def create
        @publisher = Publisher.new(publisher_params)

        if @publisher.save
          render json: { status: 'SUCCESS', data: @publisher }, status: :created
        else
          render json: { status: 'ERROR', data: @publisher.errors }, status: :unprocessable_entity
        end
      end

      # PATCH/PUT /books/1
      def update
        @publisher = Publisher.find(params[:id])

        if @publisher.update(publisher_params)
          render json: { status: 'SUCCESS', data: @publisher }
        else
          render json: { status: 'ERROR', data: @publisher.errors }, status: :unprocessable_entity
        end
      end

      # DELETE /books/1
      def destroy
        @publisher = Publisher.find(params[:id])
        @publisher.destroy
        render json: { status: 'SUCCESS', message: 'deleted publisher', data: @publisher }
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
  end
end


