let mymap = L.map('mapid').setView([-0.176889, -78.448162], 11.88);

L.tileLayer('https://api.mapbox.com/styles/v1/patoman470/ck2vah4h20k291dpp6den6f74/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoicGF0b21hbjQ3MCIsImEiOiJjazJ2OWpuMGIwMnQzM2NxaXBlNmk2eHZuIn0.HcX3vvMSnOFhfu_m95Ileg', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18
}).addTo(mymap);

let marker1 = L.marker([-0.214950, -78.513200]).addTo(mymap);
let marker2 = L.marker([-0.197970, -78.487290]).addTo(mymap);
let marker3 = L.marker([-0.171810, -78.484940]).addTo(mymap);
let marker4 = L.marker([-0.216660, -78.397290]).addTo(mymap);

marker1.bindPopup("Avenida Patria");
marker2.bindPopup("Avenida Francisco de Orellana");
marker3.bindPopup("Avenida Amazonas");
marker4.bindPopup("Psje El Valle");
