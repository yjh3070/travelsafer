<!DOCTYPE html>
<html>
  <head>
    <title>Simple Map</title>
    <meta name="viewport" content="initial-scale=1.0">
    <meta charset="utf-8">
    <style>
        /* Always set the map height explicitly to define the size of the div
        * element that contains the map. */
      #map {
        height: 100%;
      }
      /* Optional: Makes the sample page fill the window. */
      html, body {
        height: 100%;
        margin: 0;
        padding: 0;
      }
      
      #content{
        position: absolute;
        z-index: 2;
        top: 0px;
        left: 0px;
      }

      /* #content *{
        z-index: 2;
      } */

      .search{
        width: 274px;
        height: 50px;
        border-radius: 25px;
        background-color: #ffffff;
        position: absolute;
        top: 10%;
        left: 5%;
        box-shadow: ;
      }

      input{
        border: 0px;
      }
    </style>
  </head>
  <body>
  
    <div id="map" style = "z-index: 1;"></div>
    <div id="content">
      <form action="">
        <input  class="search" type="text"></input>
        
      </form>
    </div>
	
    <script>
      var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
      }
    </script>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBW8KU767TtEUPCktqpmGBffaeZKjwSTuw&callback=initMap"
    async defer></script>
  </body>
</html>