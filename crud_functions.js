function post(url, json_data) {
    $.ajax({
        type: 'post',
        data: json_data,
        cache: false,
        url: url,
        dataType: 'json',
        error: function (request, error) {
            error_alert(error)
        },
        success: function () {
            alert(" Done ! ");
        }
    });
}
function delete_instance(url) {
    $.ajax({
        type: 'delete',
        cache: false,
        url: url,
        dataType: 'json',
        error: function (request, error) {
            error_alert(error)
        },
        success: function () {
            alert(" Done ! ");
        }
    });
}
function put(url) {
    $.ajax({
        type: 'delete',
        cache: false,
        url: url,
        dataType: 'json',
        error: function (request, error) {
            console.log(arguments);
            error_alert(error)
        },
        success: function () {
            alert(" Done ! ");
        }
    });
}
function get(url, result_block) {
    $.ajax({
        type: 'get',
        cache: false,
        url: url,
        dataType: 'json',
        error: function (request, error) {
           error_alert(error)
        },
        success: function (data) {
            set_result_to_div(data, result_block)
        }
    });

}