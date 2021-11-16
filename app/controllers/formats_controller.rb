# frozen_string_literal: true

# .rubocop.yml

    class FormatsController < ApplicationController
      # before_action :set_book, only: [:show, :update, :destroy]

      # GET /books
      def index
        @formats = Format.all
        render json: { status: 'SUCCESS', data: @formats }
      end

      # GET /books/1
      def show
        @format = set_format
        render json: { status: 'SUCCESS', data: @format }
      end

      # POST /books
      def create
        @format = Format.new(format_params)

        if @format.save
          render json: { status: 'SUCCESS', data: @format }, status: :created
        else
          render json: { status: 'ERROR', data: @format.errors }, status: :unprocessable_entity
        end
      end

      # PATCH/PUT /books/1
      def update
        @format = Format.find(params[:id])

        if @format.update(format_params)
          render json: { status: 'SUCCESS', data: @format }
        else
          render json: { status: 'ERROR', data: @format.errors }, status: :unprocessable_entity
        end
      end

      # DELETE /books/1
      def destroy
        @format = Format.find(params[:id])
        @format.destroy
        render json: { status: 'SUCCESS', message: 'deleted format', data: @format }
      end

      private
      # Use callbacks to share common setup or constraints between actions.
      def set_format
        @format = Format.find(params[:id])
      end

      # Only allow a list of trusted parameters through.
      def format_params
        params.permit(:format)
      end
    end


