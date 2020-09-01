import googleMapsApiLoader from '@/js/googleMapsApiLoader'

export default (key) => {
  return {
    render (h) {
      const el = 'div'
      const options = { ref: 'map' }
      return h(el, options)
    },
    data () {
      return {
        google: null,
        map: null
      }
    },
    mounted () {
      googleMapsApiLoader(key)
        .then((google) => {
          this.google = google
          this.initMap()
        })
    },
    methods: {
      initMap () {
        const el = this.$refs.map
        const location = ['<div><h1>미국</h1><h3>범죄율 : 53.51%<br>최다 범죄유형 : 마약거래<br>범죄율 최저 도시 : Irvine, CA</h3></div>', 40, -100]
        let map = new this.google.maps.Map(el, {
          center: {
            lat: 33,
            lng: -77
          },
          zoom: 4
        })
        let marker = new this.google.maps.Marker({
          map: map,
          draggable: true,
          animation: this.google.maps.Animation.DROP,
          position: {lat: location[1], lng: location[2]}
        })
        marker.addListener('click', ((marker) => {
          return () => {
            infowindow.setContent(location[0])
            infowindow.open(map, marker)
          }
        })(marker))
        const infowindow = new this.google.maps.InfoWindow()

        if (marker) {
          marker.addListener('click', () => {
            map.setCenter(this.getPosition())
          })
        }
        this.map = map
        this.marker = marker
      }
    }
  }
}
