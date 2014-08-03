$(function () {
	var id = $('#placeid').html();
	$('#carin').touch(function (event) {
		console.log('clickin');
		$.get('/rest/slots/inc/' + id, function () {});
	});
	$('#carout').touch(function (event) {
		console.log('clickout');
		$.get('/rest/slots/des/' + id, function () {});
	});
});