format_url = 'http://localhost:3000/formats';
format_id = document.getElementById('format_id').value;
json = {
    "format": document.getElementById('format_name').value,
}
function add_format(){
    post(format_url, json)
}
function delete_format() {
    delete_instance(form_instance_url(format_url, format_id));
}
function update_format(){
    put(form_instance_url(format_url, format_id),json);
}
function get_format(){
    get(form_instance_url(format_url, format_id), json)
}