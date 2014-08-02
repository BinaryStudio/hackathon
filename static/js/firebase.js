var firebase = (function() {
    var basePath = 'ava/';
    var parkfb = new Firebase("https://parkplace.firebaseio.com/");

    var bindElement = function(elements) {
        var path, ele;
        for(var i = 0; i < elements.size(); i++) {
            ele = elements.eq(i);
            path = basePath + ele.data('id');
            parkfb.child(path).on('value', function(snap) {
                $("span[data-id='"+snap.name()+"']").text(snap.val());
            }); 
        }   
    }   

    return {
        bindElement: bindElement
    };  
})();