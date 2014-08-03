$(function () {
	var id = $('#placeid').html();
	$('#carin').click(function (event) {
		console.log('clickin');
		$.get('/rest/slots/inc/' + id, function () {});
	});
	$('#carout').click(function (event) {
		console.log('clickout');
		$.get('/rest/slots/des/' + id, function () {});
	});
});