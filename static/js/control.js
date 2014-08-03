$(function () {
	$('#carin').click(function (event) {
		console.log('clickin');
		submitData('get', '/rest/slots/inc/', {}, callBackGenerator('success'), callBackGenerator('error'));
	});
	$('#carout').click(function (event) {
		console.log('clickout');
		submitData('get', '/rest/slots/des/', {}, callBackGenerator('success'), callBackGenerator('error'));
	});
});