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
      
      /* 지도 위의 모든 태그들을 감싼 div */
      #content{
        position: absolute;
        z-index: 2;
        top: 0px;
        left: 0px;
      }

      form{
        display: inline;
        width: 75%;
      }

      /* 검색 창 div */
      .search{
        width: 274px;
        height: 50px;
        border-radius: 25px;
        background-color: #ffffff;
        position: absolute;
        top: 80px;
        left: 50px;
        display: flex;
        align-items: center;
        box-shadow: 0px 0px 10px gray;
      }

      /* 검색하는 input */
      input{
        border: 0px;
        height: 40px;
        width: 100%;
      }

      input:focus {
        outline:none;
      }

      /* 검색 창의 이미지 */
      .map_flag{
        margin-left: 10px;
        margin-right: 10px;
        width: 8%
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
    </div>
	
    <script>
      var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          // center를 이용해서 지도의 위치를 변경
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
      }
    </script>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBW8KU767TtEUPCktqpmGBffaeZKjwSTuw&callback=initMap"
    async defer></script>
  </body>
</html>