<!DOCTYPE html>
<html>
  <head>
    <title>Travelsafer</title>
    <meta name="viewport" content="initial-scale=1.0">
    <meta charset="utf-8">
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="stylesheet/index.css">
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBW8KU767TtEUPCktqpmGBffaeZKjwSTuw&callback=initMap"
    async defer></script>
    <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
    <!-- 지도 script -->
    <script>
      var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          // center를 이용해서 지도의 위치를 변경
          // lat은 위도 lng은 경도
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
      }
    </script>
    <!-- 지도 style -->
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
    </style>
  </head>
  <body>
  
    <div id="map" style = "z-index: 1;"></div>
    <div id="content">
      <div class="search">
        <img src="./img/maps_flags.png" class="map_flag" width="30px">
        <form action="">
          <input type="text"></input>
        </form>
      </div>
      <div id="menu">
        <ul>
            <li id="menuBtn"><img src="img/menu.svg" alt=""></li>
            <a href="" id="ali"><li><img src="img/ticket.svg" alt=""></li></a>
            <a href=""><li><img src="img/online.svg" alt=""></li></a>
            <a href=""><li><img src="img/man-avatar.svg" alt=""></li></a>
        </ul>
      </div>
    </div>
	
    <script src="javascript/menu.js"></script>
  </body>
</html>