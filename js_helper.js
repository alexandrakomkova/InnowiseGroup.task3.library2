function form_instance_url(url, id) {
    let instance_url = url+"/"+id.toString();
    return instance_url;
}
function set_result_to_div (data, result_div) {
    clear_result_div(document.getElementById(result_div))
    for (let line in data) {
        let result = document.createElement('div');
        result.textContent = JSON.stringify(line);
        document.getElementById(result_div).appendChild(result);
    }
}
function clear_result_div(div){
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }
}