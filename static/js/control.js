$(function() {
    var id = $('#placeid').html();
    $('#carin').on('click', function(event) {
        console.log('clickin');
        $.get('/rest/slots/inc/' + id, function() {});
    });
    $('#carout').on('click', function(event) {
        console.log('clickout');
        $.get('/rest/slots/des/' + id, function() {});
    });
    $.get('/rest/parkings/' + id, function(msg) {
        console.log(msg);
    })
});