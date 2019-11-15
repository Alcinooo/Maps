let mymap2 = L.map('map2id').setView([-0.188656, -78.487833], 12.67);

L.tileLayer('https://api.mapbox.com/styles/v1/patoman470/ck2vah4h20k291dpp6den6f74/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoicGF0b21hbjQ3MCIsImEiOiJjazJ2OWpuMGIwMnQzM2NxaXBlNmk2eHZuIn0.HcX3vvMSnOFhfu_m95Ileg', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18
}).addTo(mymap2);

for ( let i=0; i < places.length; i++ ){
  L.marker( [places[i].latitude, places[i].longitude] )
      .bindPopup( '<h3>' + places[i].placeName + '</h3>' + '<p>' + places[i].Cost + '</p>')
      .addTo( mymap2 );
}
