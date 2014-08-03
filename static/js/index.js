var basePath = 'ava/';
var parkfb = new Firebase("https://parkplace.firebaseio.com/");
var template = ['<table class="map-info-list" cellspacing="0" cellpadding="0" data-href="{{url}}" data-uid={{uid}}>',
    '<tbody>',
        '<tr>',
            '<td valign="top" width="30">',
                '<span class="map-info-index map-info-ico">',
                    'A',
                '</span>',
            '</td>',
            '<td>',
                '<a href="#" data-app-url="" data-app-log="list">',
                    '<table width="100%" border="0" cellspacing="0" cellpadding="0">',
                        '<tbody>',
                            '<tr>',
                                '<td>',
                                    '<span class="map-info-name">',
                                        '{{title}}',
                                    '</span>',
                                    '<span class="map-info-distance">',
                                    '</span>',
                                '</td>',
                            '</tr>',
                            '<tr>',
                                '<td style="padding:2px 0 0">',
                                '</td>',
                            '</tr>',
                            '<tr>',
                                '<td style="padding:2px 0 7px">',
                                    '<span class="map-info-address">',
                                        '地址：{{address}}',
                                    '</span>',
                                '</td>',
                            '</tr>',
                            '<tr>',
                                '<td style="padding:2px 0 7px">',
                                    '<span class="map-info-address">',
                                        '收费：每小时<span class="price"></span>元',
                                    '</span>',
                                '</td>',
                            '</tr>',
                            '<tr>',
                                '<td class="syinfo">',
                                    '<span class="sytitle">',
                                        '还剩余车位:',
                                    '</span>',
                                    '<span class="synumber">',
                                        '210',
                                    '</span><span>&nbsp;&nbsp;&nbsp;总车位:</span>',
                                    '<span class="allnumber">',
                                        '250',
                                    '</span>',
                                '</td>',
                            '</tr>',
                        '</tbody>',
                    '</table>',
                '</a>',
            '</td>',
            '<td width="10" style="padding:0 6px">',
                '<a href="{{url}}">',
                    '<span class="map-info-gomap  map-info-ico">',
                    '</span>',
                '</a>',
            '</td>',
        '</tr>',
    '</tbody>',
'</table>'].join('');


var map = new BMap.Map("map");
map.addControl(new BMap.NavigationControl()); //添加默认缩放平移控件
var point = new BMap.Point(116.331398, 39.897445);
map.centerAndZoom(point, 12);

var startPoint, endPoint;

var geolocation = new BMap.Geolocation();
var driving = new BMap.DrivingRoute(map, {
    renderOptions: {
        map: map,
        autoViewport: true
    }
});
var local = new BMap.LocalSearch(map, {
    renderOptions: {
        map: map,
        autoViewport: true
    },
    onSearchComplete: function(result) {
        window.r = result;
        var parking = result.Um[0];
        driving.search(startPoint, parking.point);
        $('.map-info').show();
        $('.loading').hide();
        var $map = $('.map-info');
        for(var i = 0; i < Math.min(r.Um.length, 5); i++) {
            var t = template;
            var t = template.replace(/{{(\w+)}}/g, function(all,key) {
                return r.Um[i][key];
            });

            var elem = $(t);
            var uid = r.Um[i].uid;
            $.ajax({
                context:elem,
                url: 'rest/parkings/uid/' + elem.data('uid'),
                success: function(data) {
                    var fid = data.data.id;
                    var total = data.data.total_pak;
                    this.find('.allnumber').text(total);
                    this.find('.synumber').data('fid', fid);
                    this.find('.price').text(data.data.hour);
                    $map.append(this);
                    var path = basePath + fid;
                    parkfb.child(path).on('value', function(snap) {
                        console.log('path:', path);
                        $(".synumber[data-fid='"+snap.name()+"']").text(snap.val());
                    });

                }
            });
        }
    }
});



geolocation.getCurrentPosition(function(r) {
    var point;
    if (this.getStatus() == BMAP_STATUS_SUCCESS) {
        point = r.point;
    } else {
        point = new BMap.Point(116.313764, 39.987192);
    }
    window.p = point;
    var mk = new BMap.Marker(point);
    map.addOverlay(mk);
    map.panTo(point);
    local.searchNearby("停车场", point);
    startPoint = point;
}, {
    enableHighAccuracy: true
})


$('body').on('click', '.map-info-list', function() {
    window.location = $(this).data('href');
});
