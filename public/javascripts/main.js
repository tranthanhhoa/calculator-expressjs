jQuery(document).ready(function ($) {

    var number = $('.numbers li'),
        num = '',
        x_num = $('.x-num'),
        y_num = $('.y-num'),
        x_num_text = '',
        y_num_text = '',
        method = $('.operation'),
        operation = $('.operations li'),
        screen = $('.screen');
    if(x_num_text == "" && y_num_text == ""){
        $('#btn-calc').prop("disabled",true);
    }
    number.on('click', function () {
        if (x_num.text() == "" || method.text() == "") {
            x_num_text += $(this).text();
            x_num.html(x_num_text);
        } else {
            y_num_text += $(this).text();
            y_num.html(y_num_text);
            $('#btn-calc').prop("disabled",false);
        }

    });
    operation.on('click', function () {
        if (x_num.text() == '') {
            return false;
        } else {
            var o = $(this).text();
            method.html(o);
        }
    });
    $('#btn-calc').on('click', function () {
        console.log(x_num_text, y_num_text, method.text());
        $.ajax({
            url: '/calculator',
            type: 'POST',
            dataType: 'json',
            data: {x: x_num_text, y: y_num_text, method: method.text()}
        })
            .done(function (data) {
                console.log(data);
                $('.method').html(data.method);
                $('#result').html(data.result);
            })
            .fail(function () {
                console.log("error");
            })
            .always(function () {
                console.log("complete");
            });
    });
    $('#btn-clear').on('click', function () {
        x_num_text = '';
        y_num_text = '';
        x_num.empty();
        y_num.empty();
        method.empty();
        $('#result').empty();
        $('#btn-calc').prop("disabled",true);
    })
});