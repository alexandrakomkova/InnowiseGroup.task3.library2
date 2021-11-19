genre_url = 'http://localhost:3000/genres';
let json = {
    "genre": document.getElementById('genre_name').value
}
function add_genre(){
    post(genre_url, json)
}
function delete_genre() {
    let genre_id = document.getElementById('genre_id').value.toString();
    delete_instance(form_instance_url(genre_url, genre_id));
}
function update_genre(){
    let genre_id = document.getElementById('genre_id').value.toString();
    put(form_instance_url(genre_url, genre_id),json);
}
function get_genre(){
    let genre_id = document.getElementById('genre_id').value.toString();
    get(form_instance_url(genre_url, genre_id),'result_genre')
}
function get_all_genres(){
    get(genre_url, 'result_genre')
}