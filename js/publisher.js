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