$(function () {
	$('#carin').click(function (event) {
		submitData('get', '/rest/slots/inc/', form, callBackGenerator('success'), callBackGenerator('error'));
	});
	$('#carout').click(function (event) {
		submitData('get', '/rest/slots/des/', form, callBackGenerator('success'), callBackGenerator('error'));
	});
});