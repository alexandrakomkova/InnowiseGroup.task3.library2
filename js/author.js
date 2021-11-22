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