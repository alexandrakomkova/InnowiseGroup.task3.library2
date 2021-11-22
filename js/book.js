function add_book(){
    let json_book = {
        "title": document.getElementById('book_title').value.toString(),
        "body": document.getElementById('book_description').value.toString(),
        "authors_id": document.getElementById('authors_id').value.toString(),
        "publishers_id": document.getElementById('publishers_id').value.toString(),
        "genres_id": document.getElementById('genres_id').value.toString(),
        "formats_id": document.getElementById('formats_id').value.toString()
    }
    post(book_url, json_book)
}

function get_book(){
    let book_id = document.getElementById('book_id').value.toString();
    get(form_instance_url(book_url, book_id).trim(), 'result_book')
}

function delete_book() {
    let book_id = document.getElementById('book_id').value.toString();
    delete_instance(form_instance_url(book_url, book_id));
}

function update_book(){
    let json_book = {
        "title": document.getElementById('book_title').value.toString(),
        "body": document.getElementById('book_description').value.toString(),
        "authors_id": document.getElementById('authors_id').value.toString(),
        "publishers_id": document.getElementById('publishers_id').value.toString(),
        "genres_id": document.getElementById('genres_id').value.toString(),
        "formats_id": document.getElementById('formats_id').value.toString()
    }
    let book_id = document.getElementById('book_id').value.toString();
    put(form_instance_url(book_url, book_id),json_book);
}

function get_all_books(){
    get(book_url, 'result_book')
}
