format_url = "http://localhost:3000/formats";
book_url = 'http://localhost:3000/books';
genre_url = 'http://localhost:3000/genres';
author_url = 'http://localhost:3000/authors';
publisher_url = 'http://localhost:3000/publishers';

function form_instance_url(url, id) {
    let instance_url = url+'/'+id.toString();
    return instance_url;
}

function set_result_to_div (data, result_div) {
    const array=[data];
    clear_result_div(document.getElementById(result_div))
        array.forEach(function(element){
            let result = document.createElement('div');
            result.textContent = JSON.stringify(element);
            document.getElementById(result_div).appendChild(result);
        });
}

function clear_result_div(div){
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }
}

function error_alert(error){
    alert(" Can't do because: " + error.toString());
}

function add_author(){
    let json_author = {
        "name": document.getElementById('author_name').value.toString(),
        "surname": document.getElementById('author_surname').value.toString()
    }
    post(author_url, json_author)
}

function delete_author() {
    let author_id = document.getElementById('author_id').value.toString();
    delete_instance(form_instance_url(author_url, author_id));
}

function update_author(){
    let json_author = {
        "name": document.getElementById('author_name').value.toString(),
        "surname": document.getElementById('author_surname').value.toString()
    }
    let author_id = document.getElementById('author_id').value.toString();
    put(form_instance_url(author_url, author_id),json_author);
}

function get_author(){
    let author_id = document.getElementById('author_id').value.toString();
    get(form_instance_url(author_url, author_id), 'result_author')
}

function get_all_authors(){
    get(author_url, 'result_author')
}

function add_genre(){
    let json_genre = {
        "genre": document.getElementById('genre_name').value.toString()
    }
    post(genre_url, json_genre)
}

function delete_genre() {
    let genre_id = document.getElementById('genre_id').value.toString();
    delete_instance(form_instance_url(genre_url, genre_id));
}

function update_genre(){
    let json_genre = {
        "genre": document.getElementById('genre_name').value.toString()
    }
    let genre_id = document.getElementById('genre_id').value.toString();
    put(form_instance_url(genre_url, genre_id),json_genre);
}

function get_genre(){
    let genre_id = document.getElementById('genre_id').value.toString();
    get(form_instance_url(genre_url, genre_id),'result_genre')
}

function get_all_genres(){
    get(genre_url, 'result_genre')
}

function add_publisher(){
    let json_publisher = {
        "name": document.getElementById('publisher_name').value,
        "address": document.getElementById('publisher_address').value,
        "phone": document.getElementById('publisher_phone').value,
    }
    post(publisher_url, json_publisher)
}

function delete_publisher() {
    let publisher_id = document.getElementById('publisher_id').value.toString();
    delete_instance(form_instance_url(publisher_url, publisher_id));
}

function update_publisher(){
    let json_publisher = {
        "name": document.getElementById('publisher_name').value,
        "address": document.getElementById('publisher_address').value,
        "phone": document.getElementById('publisher_phone').value,
    }
    let publisher_id = document.getElementById('publisher_id').value.toString();
    put(form_instance_url(publisher_url, publisher_id),json_publisher);
}

function get_publisher(){
    let publisher_id = document.getElementById('publisher_id').value.toString();
    get(form_instance_url(publisher_url, publisher_id), 'result_publisher')
}

function get_all_publishers(){
    get(publisher_url, 'result_publisher')
}

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

function add_format(){
    let json_format = {
        "format": document.getElementById('format_name').value.toString()
    }
    post(format_url, json_format)
}

function delete_format() {
    let format_id = document.getElementById('format_id').value.toString();
    delete_instance(form_instance_url(format_url, format_id));
}

function update_format(){
    let json_format = {
        "format": document.getElementById('format_name').value.toString()
    }
    let format_id = document.getElementById('format_id').value.toString();
    put(form_instance_url(format_url, format_id),json_format);
}

function get_format(){
    let format_id = document.getElementById('format_id').value.toString();
    get(form_instance_url(format_url, format_id), 'result_format')
}

function get_all_formats(){
    get(format_url, 'result_format')
}