book_url = 'http://localhost:3000/books';
json = {
    "title": document.getElementById('book_title').value,
    "body": document.getElementById('book_description').value,
    "authors_id": document.getElementById('authors_id').value,
    "publishers_id": document.getElementById('publishers_id').value,
    "genres_id": document.getElementById('genres_id').value,
    "formats_id": document.getElementById('formats_id').value
}
function add_book(){
    post(book_url, json)
}
function get_book(){
    let book_id = document.getElementById("book_id").value.toString();
    get(form_instance_url(book_url, book_id).trim(), 'result_book')
}
function delete_book() {
    let book_id = document.getElementById("book_id").value.toString();
    delete_instance(form_instance_url(book_url, book_id));
}
function update_book(){
    let book_id = document.getElementById("book_id").value.toString();
    put(form_instance_url(book_url, book_id),json);
}
function get_all_books(){
    get(book_url, 'result_book')
}