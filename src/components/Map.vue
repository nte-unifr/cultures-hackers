<template>
  <section class="section">
    <div class="level">
      <div class="level-left">
        <div class="level-item">
          <p class="subtitle is-5">
            <strong>{{ konmariMarkers.length }} / {{ markers.length }}</strong> elements
          </p>
        </div>
        <div class="level-item">
        </div>
      </div>
    </div>
    <div id="map"></div>
  </section>
</template>

<script>
import L from "leaflet";
import "leaflet.markercluster";
import _ from "lodash";
import directus from "../mixins/Directus.vue";
import feather from "feather-icons"
import format from "date-fns/format"

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});

export default {
  components: { },
  mixins: [directus],
  data() {
    return {
      map: null,
      cluster: null,
      items: [],
      markers: [],
      game: "",
      morphology: ""
    };
  },
  computed: {
    konmariMarkers() {
      let konmari = this.markers;

      return konmari;
    }
  },
  watch: {
    konmariMarkers() {
      this.updateMarkers();
    }
  },
  methods: {
    resizeMapContainer: function() {
      const navbarHeight = document.getElementsByClassName("navbar")[0]
        .offsetHeight;
      const windowHeight =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight;
      const mapContainer = document.getElementById("map");
      mapContainer.style.height =
        windowHeight - navbarHeight - 150 + "px";
    },
    createMap: function(viewLat, viewLng, zoom) {
      this.map = L.map("map", {
        minZoom: 3
      }).setView([viewLat, viewLng], zoom);
    },
    setupLayers: function() {
      L.tileLayer(
        "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
        {
          attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 20,
          id: "mapbox/outdoors-v11",
          accessToken: process.env.VUE_APP_MAPBOX_TOKEN
        }
      ).addTo(this.map);
      this.cluster = L.markerClusterGroup();
    },
    createMarker: function(lat, lng, content) {
      lat = isNaN(Number(lat)) ? 0 : Number(lat)
      lng = isNaN(Number(lng)) ? 0 : Number(lng)
      let lMarker = L.marker([Number(lat), Number(lng)]);
      let popup = L.popup().setContent(content);
      lMarker.bindPopup(popup, {
        maxWidth: 650
      })
      let m = {
        id: 1,
        lMarker: lMarker
      };
      this.markers.push(m);
    },
    buildTooltip: function(id, title, po, year, month, day, location, tags, resume, owner, pdf, photo) {
      let str = ''
      str += '<div class="media">'
      if (photo != undefined && photo.data.thumbnails[2].url != null && photo.data.thumbnails[2].url != "") {
        str += '<div class="media-left"><figure class="image is-96x96"><img src="' + photo.data.thumbnails[2].url + '"></figure></div>'
      }
      str += '<div class="media-content"><p class="title is-4">' + title + '</p><p class="subtitle is-6"><span class="tag is-dark">' + feather.icons.hash.toSvg({ 'width': 15 }) + id + '</span></p></div>'
      str += '</div>'
      str += '<table class="table" style="font-size:18px; margin-top:1rem">'
      if (po != null && po != "") {
        str += '<tr><td>' + feather.icons.users.toSvg() + '</td><td>' + po + '</td></tr>'
      }
      if (year != null && year != "" || month != null && month != "" || day != null && day != "") {
        str += '<tr><td>' + feather.icons.clock.toSvg() + '</td><td>'
        if (year != null && year != "" && month != null && month != "" && day != null && day != "") {
          str += format(new Date(year, month-1, day), 'yyyy-MM-dd')
        } else {
          str += year
        }
        str += '</td></tr>'
      }
      if (location != null && location != "") {
        str += '<tr><td>' + feather.icons['map-pin'].toSvg() + '</td><td>' + location + '</td></tr>'
      }
      if (tags != null && tags.length > 0) {
        str += '<tr><td>' + feather.icons.tag.toSvg() + '</td><td>'
        for (const tag of tags) {
          if (tags.length -1 !== tags.indexOf(tag)) {
            str += tag + ', '
          } else {
            str += tag
          }
        }
        str += '</td></tr>'
      }
      if (resume != null && resume != "" && resume != " ") {
        str += '<tr><td>' + feather.icons['align-justify'].toSvg() + '</td><td>' + resume + '</td></tr>'
      }
      if (pdf != undefined && pdf.data.full_url != null && pdf.data.full_url != "") {
        str += '<tr><td>' + feather.icons['file'].toSvg() + '</td><td><a href="' + pdf.data.full_url + '">PDF</a></td></tr>'
      }
      if (owner.first_name != null && owner.first_name != "" && owner.last_name != null && owner.last_name != "") {
        str += '<tr><td>' + feather.icons['edit-3'].toSvg() + '</td><td>' + owner.first_name + ' ' + owner.last_name + '</td></tr>'
      }
      str += "</table>"

      return str;
    },
    updateMarkers: function() {
      let lMarkers = [];
      for (const marker of this.konmariMarkers) {
        lMarkers.push(marker.lMarker);
      }
      this.cluster.clearLayers();
      this.cluster.addLayers(lMarkers);
      let clusterBounds = this.cluster.getBounds();
      if (!_.isEmpty(clusterBounds)) {
        if (clusterBounds._northEast.lat != clusterBounds._southWest.lat) {
          this.map.fitBounds(clusterBounds);
        } else {
          this.map.setView(
            [clusterBounds._northEast.lat, clusterBounds._northEast.lng],
            4
          );
        }
      } else {
        this.map.setView([51.505, -0.09], 4);
      }
    },
    setFilter(name, value) {
      if (name === "Games") {
        this.game = value;
      } else if (name === "Morphologies") {
        this.morphology = value;
      }
    }
  },
  async created() {
    this.items = await this.fetchItems();
    for (const item of this.items) {
      if (
        item.lng != "NULL" &&
        item.lat != "NULL" &&
        item.lng != 0 &&
        item.lat != 0
      ) {
        this.createMarker(
          item.latitude,
          item.longitude,
          this.buildTooltip(item.id, item.titre, item.personnes_ou_organisations, item.annee, item.mois, item.jour, item.lieu, item.tags, item.resume, item.owner, item.pdf, item.photo)
        );
      }
    }
    this.cluster.addTo(this.map);
    this.updateMarkers();
  },
  mounted() {
    this.resizeMapContainer();
    this.createMap(51.505, -0.09, 4);
    this.setupLayers();
  }
};
</script>

<style scoped>
@import "~leaflet/dist/leaflet.css";
@import "~leaflet.markercluster/dist/MarkerCluster.css";
@import "~leaflet.markercluster/dist/MarkerCluster.Default.css";
#map {
  height: 800px;
  z-index: 1;
  color: #000;
}
.modal {
  z-index: 2;
}
</style>