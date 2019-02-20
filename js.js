




function openCity(evt, what) {
var i, tabcontent, tablinks;
tabcontent = document.getElementsByClassName("tabcontent");

for (i = 0; i < tabcontent.length; i++) { tabcontent[i].style.display = "none";}

tablinks = document.getElementsByClassName("tablinks");
for (i = 0; i < tablinks.length; i++) {
tablinks[i].className =
    tablinks[i].className.replace(" active", "");}

document.getElementById(what).style.display = "block";
evt.currentTarget.className += " active";
}


var myIndex = 0;
carousel();
function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 9000);
}


$(function($){
    var addToAll = false;
    var gallery = true;
    var titlePosition = 'inside';
    $(addToAll ? 'img' : 'img.fancybox').each(function(){
        var $this = $(this);
        var title = $this.attr('title');
        var src = $this.attr('data-big') || $this.attr('src');
        var a = $('<a href="#" class="fancybox"></a>').attr('href', src).attr('title', title);
        $this.wrap(a);
    });
    if (gallery)
        $('a.fancybox').attr('rel', 'fancyboxgallery');
    $('a.fancybox').fancybox({
        titlePosition: titlePosition
    });
});
$.noConflict();


function initialize() {var panorama;
    panorama = new google.maps.StreetViewPanorama(
        document.getElementById('street-view'),
        {
            position: {lat: 41.995924, lng:21.431499},
            pov: {heading: 165, pitch: 0},
            zoom: 1
        });
}




function initialize_property_map() {

    var propertyMarkerInfo = {
        lat: 41.994365,
        lang:  21.431572,
        icon: "http://maps.google.com/mapfiles/ms/micons/blue.png"
    };

    var url = propertyMarkerInfo.icon;
    var size = new google.maps.Size(42, 57);

    var image = {
        url: url,
        size: size,
        scaledSize: new google.maps.Size(42, 57),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(21, 56)
    };

    var propertyLocation = new google.maps.LatLng(propertyMarkerInfo.lat, propertyMarkerInfo.lang);
    var propertyMapOptions = {
        center: propertyLocation,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: false
    };
    var propertyMap = new google.maps.Map(document.getElementById("property_map"), propertyMapOptions);
    var propertyMarker = new google.maps.Marker({
        position: propertyLocation,
        map: propertyMap,
        icon: image
    });
    var panorama = new google.maps.StreetViewPanorama(
        document.getElementById('pano'), {
            position: propertyLocation,
            pov: {
                heading: 34,
                pitch: 10
            }
        });
    propertyMap.setStreetView(panorama);

}

window.onload = initialize_property_map;