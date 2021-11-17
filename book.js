book_url = 'http://localhost:3000/books';
book_id = document.getElementById('book_id').value;
book_title = document.getElementById('book_title').value;
book_body = document.getElementById('book_description').value;
authors_id = document.getElementById('authors_id').value;
publishers_id = document.getElementById('publishers_id').value;
genres_id = document.getElementById('genres_id').value;
formats_id = document.getElementById('formats_id').value;
json = {
    "title": book_title,
    "body": book_body,
    "authors_id": authors_id,
    "publishers_id": publishers_id,
    "genres_id": genres_id,
    "formats_id": formats_id
}
function add_book(){
    post(book_url, json)
}
function delete_book() {
    delete_instance(form_instance_url(book_url, book_id.toString()));
}
function update_book(table_url){
    put(form_instance_url(book_url, book_id.toString()),json);
}
function get_book(){
    get(form_instance_url(book_url, book_id.toString()), json)
}