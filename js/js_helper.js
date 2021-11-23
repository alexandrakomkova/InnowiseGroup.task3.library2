format_url = "http://localhost:3000/formats";
book_url = 'http://localhost:3000/books';
genre_url = 'http://localhost:3000/genres';
author_url = 'http://localhost:3000/authors';
publisher_url = 'http://localhost:3000/publishers';

function form_instance_url(url, id) {
    let instance_url = url+'/'+id.toString();
    return instance_url;
}

function error_alert(error){
    alert(" Can't do because: " + error.toString());
}

function draw_table(data, result_block) {
    remove_data_from_table(result_block);
        for (var i = 0; i < data.length; i++) {
            choose_table(data[i], result_block)
        }
}
function draw_row_book(rowData, result_block) {
    var row = $("<tr />")
    $(result_block).append(row);
    row.append($("<td>" + rowData.id + "</td>"));
    row.append($("<td>" + rowData.title + "</td>"));
    row.append($("<td>" + rowData.body + "</td>"));
    row.append($("<td>" + rowData.authors_id + "</td>"));
    row.append($("<td>" + rowData.publishers_id + "</td>"));
    row.append($("<td>" + rowData.genres_id + "</td>"));
    row.append($("<td>" + rowData.formats_id + "</td>"));
}
function draw_row_genre(rowData, result_block) {
    var row = $("<tr />")
    $(result_block).append(row);
    row.append($("<td>" + rowData.id + "</td>"));
    row.append($("<td>" + rowData.genre + "</td>"));
}

function draw_row_format(rowData, result_block) {
    var row = $("<tr />")
    $(result_block).append(row);
    row.append($("<td>" + rowData.id + "</td>"));
    row.append($("<td>" + rowData.format + "</td>"));
}

function draw_row_publisher(rowData, result_block) {
    var row = $("<tr />")
    $(result_block).append(row);
    row.append($("<td>" + rowData.id + "</td>"));
    row.append($("<td>" + rowData.name + "</td>"));
    row.append($("<td>" + rowData.address + "</td>"));
    row.append($("<td>" + rowData.phone + "</td>"));
}

function draw_row_author(rowData, result_block) {
    var row = $("<tr />")
    $(result_block).append(row);
    row.append($("<td>" + rowData.id + "</td>"));
    row.append($("<td>" + rowData.name + "</td>"));
    row.append($("<td>" + rowData.surname + "</td>"));
}

function check_data_type(data, result_block) {

    if(Array.isArray(data)){
        draw_table(data, result_block)
    }
    else{
        const arr = [data]
        draw_table(arr, result_block)
    }
}

function choose_table(data, result_block) {
    switch (result_block) {
        case "result_book":
            draw_row_book(data,form_table_id(result_block));
            break;
        case "result_genre":
            draw_row_genre(data,form_table_id(result_block));
            break;
        case "result_format":
            draw_row_format(data,form_table_id(result_block));
            break;
        case "result_author":
            draw_row_author(data,form_table_id(result_block));
            break;
        case "result_publisher":
            draw_row_publisher(data,form_table_id(result_block));
            break;
        default:
            break;
    }
}

function form_table_id(result_block) {
    return "#"+result_block;
}

function remove_data_from_table(result_block) {
    $(form_table_id(result_block) + " tbody").remove();
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