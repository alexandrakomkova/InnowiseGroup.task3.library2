format_url = 'http://localhost:3000/formats';
let json = {
    "format": document.getElementById('format_name').value,
}
function add_format(){
    post(format_url, json)
}
function delete_format() {
    let format_id = document.getElementById('format_id').value.toString();
    delete_instance(form_instance_url(format_url, format_id));
}
function update_format(){
    let format_id = document.getElementById('format_id').value.toString();
    put(form_instance_url(format_url, format_id),json);
}
function get_format(){
    let format_id = document.getElementById('format_id').value.toString();
    get(form_instance_url(format_url, format_id), 'result_format')
}
function get_all_formats(){
    get(format_url, 'result_format')
}