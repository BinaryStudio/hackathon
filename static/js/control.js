$(function () {
	$('#carin').click(function (event) {
		console.log('clickin');
		submitData('get', '/rest/slots/inc/', form, callBackGenerator('success'), callBackGenerator('error'));
	});
	$('#carout').click(function (event) {
		console.log('clickout');
		submitData('get', '/rest/slots/des/', form, callBackGenerator('success'), callBackGenerator('error'));
	});
});