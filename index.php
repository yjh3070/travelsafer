<?php
  $menuclick = '';
?>
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
      <?php
      //  if($_GET['menu']){
      //   $menu = $_GET['menu'];
      //   include_once($menu.".php");
      //  }else{
      //    include_once('main.php');
      //  }

      include_once('main.php');
      include_once('board.php');
      include_once('shop.php');
      ?>

    <script>
      // $('.menuli1').click(function(){
      //   menuclick = 'board';
      // });
    </script>
    <script src="javascript/index.js"></script>
    <script src="javascript/menu.js"></script>
  </body>
</html>