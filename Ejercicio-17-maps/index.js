// Crear objeto de mapa

let markers, map;

function initMap() {
  const posicion = {
    lat: -25.363,
    lng: 131.044,
  };

  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: posicion,
  });


// Crear marcadores


  markers.push(
    new google.maps.Marker({
      position: {
        lat: 40.463667, 
        lng: -3.74922,
      },
      map,
      title: "España",
    })
  );
  markers.push(
    new google.maps.Marker({
      position: {
        lat: 36.7182015,
        lng: -4.5193065,
      },
      map,
      title: "Málaga",
    })
  );
  markers.push(
    new google.maps.Marker({
      position: {
        lat: 28.1173563,
        lng: -15.4746365,
      },
      map,
      title: "Las Palmas de Gran Canaria",
    })
  );
}