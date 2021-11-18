publisher_url = 'http://localhost:3000/publishers';
publisher_id = document.getElementById('publisher_id').value;
json = {
    "name": document.getElementById('publisher_name').value,
    "address": document.getElementById('publisher_address').value,
    "phone": document.getElementById('publisher_phone').value,
}
function add_publisher(){
    post(publisher_url, json)
}
function delete_publisher() {
    delete_instance(form_instance_url(publisher_url, publisher_id));
}
function update_publisher(){
    put(form_instance_url(publisher_url, publisher_id),json);
}
function get_publisher(){
    get(form_instance_url(publisher_url, publisher_id), json, 'result_publisher')
}
function get_all_publishers(){
    get(publisher_url, json, 'result_publisher')
}