format_url = "http://localhost:3000/formats";
book_url = 'http://localhost:3000/books';
genre_url = 'http://localhost:3000/genres';
author_url = 'http://localhost:3000/authors';
publisher_url = 'http://localhost:3000/publishers';

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

function add_script(src) {
    var script = document.createElement('script');
    script.src = src;
    script.async=true;
    document.body.appendChild(script);
}

add_script('js/book.js');
add_script('js/genre.js');
add_script('js/author.js');
add_script('js/format.js');
add_script('js/publisher.js');