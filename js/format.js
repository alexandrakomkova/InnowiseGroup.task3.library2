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