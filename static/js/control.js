$(function() {
    var id = $('#placeid').html();
    $('#carin').on('touch', function(event) {
        console.log('clickin');
        $.get('/rest/slots/inc/' + id, function() {});
    });
    $('#carout').on('touch', function(event) {
        console.log('clickout');
        $.get('/rest/slots/des/' + id, function() {});
    });
    $.get('/rest/parkings/' + id, function(msg) {
        console.log(msg);
    })
});