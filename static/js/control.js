$(function() {
    var id = $('#placeid').html();
    $('#carin').on('click', function(event) {
        console.log('clickin');
        $.get('/rest/slots/des/' + id, function() {});
    });
    $('#carout').on('click', function(event) {
        console.log('clickout');
        $.get('/rest/slots/inc/' + id, function() {});
    });
    $.get('/rest/parkings/' + id, function(msg) {
        console.log(msg);
        $('#parkname').html(msg.data.name);
        $('#total_pak').html(msg.data.total_pak);

    })
});