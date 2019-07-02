var mapLocation = new google.maps.LatLng(44.8172724, 20.4564955); //change coordinates here
var marker;
var map;

function initialize() {
    var mapOptions = {
        zoom: 13, //change zoom here
        center: mapLocation,
        scrollwheel: false,
				styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#dbdbdb"},{"visibility":"on"}]}]
                
    };
    
    map = new google.maps.Map(document.getElementById('map-canvas'),
    mapOptions);
    
    
    //change address details here
    var contentString = '<div class="map-info-box">' 
    + '<div class="map-head">' 
    + '<h3>Launch</h3></div>' 
    + '<p class="map-address"><i class="fa fa-map-marker"></i> Lorem ipsum dolor sit amet <br><i class="fa fa-phone"></i> 604-788-1832<br><span class="map-email"><i class="fa fa-envelope"></i> info@sitename.com</span></p>' 
    + '<p><a href="https://www.google.com/maps/place/Čika-Ljubina+8,+Beograd+11000/@44.8172724,20.4543068,16z/data=!4m5!3m4!1s0x475a7ab31c364633:0x15bb9a5da654fde!8m2!3d44.8172686!4d20.4586842" target="_blank">Open on Google Maps</a></p></div>';
    
    
    var infowindow = new google.maps.InfoWindow({
        content: contentString,
    });
    
    
    var image = 'img/flag.svg';
    marker = new google.maps.Marker({
        map: map,
        draggable: true,
        title: 'SAE Institute Belgrade', //change title here
        icon: image,
        animation: google.maps.Animation.DROP,
        position: mapLocation
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map, marker);
    });

}

google.maps.event.addDomListener(window, 'load', initialize);
