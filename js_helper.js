function form_instance_url(url, id) {
    let instance_url = url+'/'+id.toString();
    return instance_url;
}
function set_result_to_div (data, result_div) {
    const array=[data];
    clear_result_div(document.getElementById(result_div))
        array.forEach(function(element){
            let result = document.createElement('div');
            result.textContent = JSON.stringify(element);
            document.getElementById(result_div).appendChild(result);
        });
}
function clear_result_div(div){
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }
}
function error_alert(error){
    alert(" Can't do because: " + error.toString());
}