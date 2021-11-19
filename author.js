author_url = 'http://localhost:3000/authors';

let json = {
    "name": document.getElementById('author_name').value,
    "surname": document.getElementById('author_surname').value,
}
function add_author(){
    post(author_url, json)
}
function delete_author() {
    let author_id = document.getElementById('author_id').value.toString();
    delete_instance(form_instance_url(author_url, author_id));
}
function update_author(){
    let author_id = document.getElementById('author_id').value.toString();
    put(form_instance_url(author_url, author_id),json);
}
function get_author(){
    let author_id = document.getElementById('author_id').value.toString();
    get(form_instance_url(author_url, author_id), 'result_author')
}
function get_all_authors(){
    get(author_url, 'result_author')
}