var firebase = (function() {
    var basePath = 'ava/';
    var parkfb = new Firebase("https://parkplace.firebaseio.com/");

    var bindElement = function(elements) {
        var path, ele;
        for(var i = 0; i < elements.length; i++) {
            ele = elements.eq(i);
            path = path + ele.data('id');
            parkfb.child(path).on('value', function(snap) {
                ele.text(snap.val());
            });
        }
    }

    return {
        bindElement: bindElement
    };
})();
