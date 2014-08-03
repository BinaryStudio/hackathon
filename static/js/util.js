//将表单serialize成json
(function($) {
    $.fn.serializeJson = function() {
        var serializeObj = {};
        $(this.serializeArray()).each(function() {
            serializeObj[this.name] = this.value;
        });
        return serializeObj;
    };
})(jQuery);

function submitData(method, url, submitData, successCallBack, errorCallBack) {
    $.ajax({
        type: method,
        url: url,
        data: submitData,
        success: successCallBack,
        error: errorCallBack
    });
}

function callBackGenerator(callBackType, notifyCallBack) {
    if (callBackType === 'error') {
        return function(XmlHttpRequest, textStatus, errorThrown) {
            console.log(XmlHttpRequest);
        };
    } else if (callBackType === 'success') {
        return function(msg) {
            if (notifyCallBack != undefined) {
                notifyCallBack(msg);
            }
            window.location.href = "control/3";
        };
    }
}