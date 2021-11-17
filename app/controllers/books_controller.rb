class BooksController < ApplicationController
  def index
    @books = Book.all
    render json: { status: 'SUCCESS', data: @books }
  end

  def show
    @book = set_book
    render json: { status: 'SUCCESS', data: @book }
  end

  # GET /books/1
  # POST /books
  def create
    @book = Book.new(book_params)

    if @book.save
      render json: { status: 'SUCCESS', data: @book }, status: :created
    else
      render json: { status: 'ERROR', data: @book.errors }, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /books/1
  def update
    @book = set_book

    if @book.update(book_params)
      render json: { status: 'SUCCESS', data: @book }
    else
      render json: { status: 'ERROR', data: @book.errors }, status: :unprocessable_entity
    end
  end

  # DELETE /books/1
  def destroy
    @book = set_book
    @book.destroy
    render json: { status: 'SUCCESS', message: 'deleted book', data: @book }
  end

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_book
    @book = Book.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def book_params
    params.require(:book).permit(:title, :body, :authors_id, :publishers_id, :genres_id, :formats_id)
  end
end

=begin

  def show
    @book = set_book
    render json: { status: 'SUCCESS', data: @book }
  end

  # POST /books
  def create
    @book = Book.new(book_params)

    if @book.save
      render json: { status: 'SUCCESS', data: @book }, status: :created
    else
      render json: { status: 'ERROR', data: @book.errors }, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /books/1
  def update
    @book = set_book

    if @book.update(book_params)
      render json: { status: 'SUCCESS', data: @book }
    else
      render json: { status: 'ERROR', data: @book.errors }, status: :unprocessable_entity
    end
  end

  # DELETE /books/1
  def destroy
    @book = set_book
    @book.destroy
    render json: { status: 'SUCCESS', message: 'deleted book', data: @book }
  end


=end