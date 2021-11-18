genre_url = 'http://localhost:3000/genres';
genre_id = document.getElementById('genre_id').value;
json = {
    "genre": document.getElementById('genre_name').value,
}
function add_genre(){
    post(genre_url, json)
}
function delete_genre() {
    delete_instance(form_instance_url(genre_url, genre_id));
}
function update_genre(){
    put(form_instance_url(genre_url, genre_id),json);
}
function get_genre(){
    get(form_instance_url(genre_url, genre_id), json, 'result_genre')
}
function get_all_genres(){
    get(genre_url, json, 'result_genre')
}