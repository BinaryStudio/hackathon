    //init the Baidu map

    var map = new BMap.Map("l-map");
    var point = new BMap.Point(116.331398, 39.897445);
    map.centerAndZoom(point, 12);
    var parkinguid;

    var local = new BMap.LocalSearch(map, {
        pageCapacity: 2,
        renderOptions: {
            map: map,
            selectFirstResult: true
        },
        onSearchComplete: function (msg) {
            if (local.getStatus() == BMAP_STATUS_SUCCESS) {
                if (msg.Um.length > 0) {
                    parkinguid = msg.Um[0].uid;
                }
                console.log(parkinguid);
            }
        }
    });


    $('#parkingaddress').blur(function () {

        var address = $('#parkingaddress').val();
        local.search(address);

    });

    $('#registerForm').submit(function (event) {
        event.preventDefault();
        console.log(event);
        var form = $('#registerForm').serializeJson();
        console.log(form);
        if (parkinguid != undefined) {
            form.day = form.day * 1;
            form.hour = form.hour * 1;
            form.total_pak = form.total_pak * 1;
            form['uid'] = parkinguid;
        }
        submitData('post', 'rest/parkings', form, callBackGenerator('success'), callBackGenerator('error'));

    });