(function(t){function e(e){for(var n,i,o=e[0],c=e[1],l=e[2],p=0,d=[];p<o.length;p++)i=o[p],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(d.length)d.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,o=1;o<a.length;o++){var c=a[o];0!==r[c]&&(n=!1)}n&&(s.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},r={app:0},s=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/cultures-hackers/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"1ede":function(t,e,a){},"29d8":function(t,e){t.exports="data:image/png;base64,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"},"40f6":function(t,e,a){t.exports=a.p+"img/logo-erc.a6c88832.png"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n,r,s=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Navbar",{attrs:{project:t.project}}),a("Map"),a("router-view")],1)},o=[],c=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},l=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nav",{staticClass:"navbar is-primary is-fixed-top",attrs:{role:"navigation","aria-label":"main navigation"}},[n("div",{staticClass:"navbar-brand"},[n("a",{staticClass:"navbar-item",attrs:{href:"https://www.unifr.ch"}},[n("img",{attrs:{src:a("29d8"),width:"28",height:"28"}})]),n("a",{staticClass:"navbar-item",attrs:{href:"#"}},[n("h1",[n("strong",[t._v("Cultures Hackers")])])])])])])}],u=a("2877"),p={},d=Object(u["a"])(p,c,l,!1,null,null,null),m=d.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"section"},[a("div",{staticClass:"level"},[a("div",{staticClass:"level-left"},[a("div",{staticClass:"level-item"},[a("p",{staticClass:"subtitle is-5"},[a("strong",[t._v(t._s(t.konmariMarkers.length)+" / "+t._s(t.markers.length))]),t._v(" elements ")])]),a("div",{staticClass:"level-item"})])]),a("div",{attrs:{id:"map"}})])},h=[],b=(a("d81d"),a("96cf"),a("1da1")),v=a("b85c"),f=a("e11e"),A=a.n(f),C=(a("2573"),a("2ef0")),I=a.n(C),y=a("bc3a"),w=a.n(y),j={data:function(){return{directus:{api:"https://eddb.unifr.ch",path:"/items/fiches",project:"cultures-hackers",map:{fields:"id,titre,latitude,longitude,personnes_ou_organisations,annee,mois,jour,lieu",sort:"id",limit:"-1",status:"published"}}}},methods:{fetchItems:function(){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.get(t.directus.api+"/"+t.directus.project+t.directus.path,{params:{fields:t.directus.map.fields,sort:t.directus.map.sort,limit:t.directus.map.limit,status:t.directus.map.status}});case 3:return a=e.sent,e.abrupt("return",a.data.data);case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return",[]);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},fetchFilters:function(t){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:w.a.get(e.directus.api+"/"+e.directus.project+"/items/"+t+"?fields=*&sort=name").then((function(t){e.choices=t.data.data}));case 1:case"end":return a.stop()}}),a)})))()},getThumbnail:function(t,e){var a=400,n="crop";return 800!==e&&2400!==e||(a=e,n="contain"),this.directus.api+"/thumbnail/"+this.directus.project+"/"+a+"/"+a+"/"+n+"/best/"+t}}},R=j,M=Object(u["a"])(R,n,r,!1,null,null,null),Z=M.exports,x=a("77c6"),O=a.n(x),k=a("b166");delete A.a.Icon.Default.prototype._getIconUrl,A.a.Icon.Default.mergeOptions({iconRetinaUrl:a("584d"),iconUrl:a("6397"),shadowUrl:a("e2b9")});var W,G,J={components:{},mixins:[Z],data:function(){return{map:null,cluster:null,items:[],markers:[],game:"",morphology:""}},computed:{konmariMarkers:function(){var t=this.markers;return t}},watch:{konmariMarkers:function(){this.updateMarkers()}},methods:{resizeMapContainer:function(){var t=document.getElementsByClassName("navbar")[0].offsetHeight,e=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,a=document.getElementById("map");a.style.height=e-t-150+"px"},createMap:function(t,e,a){this.map=A.a.map("map",{minZoom:3}).setView([t,e],a)},setupLayers:function(){A.a.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",{attribution:'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',maxZoom:20,id:"mapbox/outdoors-v11",accessToken:"pk.eyJ1IjoibnRlIiwiYSI6ImNrMzRieGxmNTAwcDMzbW12dDhiZ2ozaHYifQ.Qjgms2oJKtH7qlHcol8svg"}).addTo(this.map),this.cluster=A.a.markerClusterGroup()},createMarker:function(t,e,a){var n=A.a.marker([t,e]),r=A.a.popup().setContent(a);n.bindPopup(r);var s={id:1,lMarker:n};this.markers.push(s)},buildTooltip:function(t,e,a,n,r,s,i){var o='<div class="title is-4" style="margin-bottom:0.8rem">'+e+"</div>";return o+='<table class="table" style="font-size:18px">',null!=a&&""!=a&&(o+="<tr><td>"+O.a.icons.users.toSvg()+"</td><td>"+a+"</td></tr>"),(null!=n&&""!=n||null!=r&&""!=r||null!=s&&""!=s)&&(o+="<tr><td>"+O.a.icons.clock.toSvg()+"</td><td>",o+=null!=n&&""!=n&&null!=r&&""!=r&&null!=s&&""!=s?Object(k["a"])(new Date(n,r-1,s),"yyyy-MM-dd"):n,o+="</td></tr>"),null!=i&&""!=i&&(o+="<tr><td>"+O.a.icons["map-pin"].toSvg()+"</td><td>"+i+"</td></tr>"),o+="<tr><td>"+O.a.icons.hash.toSvg()+"</td><td>"+t+"</td></tr>",o+="</table>",o},updateMarkers:function(){var t,e=[],a=Object(v["a"])(this.konmariMarkers);try{for(a.s();!(t=a.n()).done;){var n=t.value;e.push(n.lMarker)}}catch(s){a.e(s)}finally{a.f()}this.cluster.clearLayers(),this.cluster.addLayers(e);var r=this.cluster.getBounds();I.a.isEmpty(r)?this.map.setView([51.505,-.09],4):r._northEast.lat!=r._southWest.lat?this.map.fitBounds(r):this.map.setView([r._northEast.lat,r._northEast.lng],4)},setFilter:function(t,e){"Games"===t?this.game=e:"Morphologies"===t&&(this.morphology=e)}},created:function(){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function e(){var a,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.fetchItems();case 2:t.items=e.sent,a=Object(v["a"])(t.items);try{for(a.s();!(n=a.n()).done;)r=n.value,"NULL"!=r.lng&&"NULL"!=r.lat&&0!=r.lng&&0!=r.lat&&t.createMarker(r.latitude,r.longitude,t.buildTooltip(r.id,r.titre,r.personnes_ou_organisations,r.annee,r.mois,r.jour,r.lieu))}catch(s){a.e(s)}finally{a.f()}t.cluster.addTo(t.map),t.updateMarkers();case 7:case"end":return e.stop()}}),e)})))()},mounted:function(){this.resizeMapContainer(),this.createMap(51.505,-.09,4),this.setupLayers()}},L=J,P=(a("ff39"),Object(u["a"])(L,g,h,!1,null,"b6e65f92",null)),N=P.exports,Y={name:"app",components:{Navbar:m,Map:N},data:function(){return{project:Object({NODE_ENV:"production",VUE_APP_MAPBOX_TOKEN:"pk.eyJ1IjoibnRlIiwiYSI6ImNrMzRieGxmNTAwcDMzbW12dDhiZ2ozaHYifQ.Qjgms2oJKtH7qlHcol8svg",BASE_URL:"/cultures-hackers/"}).VUE_APP_TITLE}}},H=Y,E=Object(u["a"])(H,i,o,!1,null,null,null),D=E.exports,T=a("8c4f"),U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal is-active"},[a("div",{staticClass:"modal-background",on:{click:t.closeModal}}),a("div",{staticClass:"modal-content"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-image"},[t.aboutImage?a("figure",{staticClass:"image"},[a("img",{attrs:{src:t.aboutImage,alt:""}})]):t._e()]),a("div",{staticClass:"card-content"},[a("div",{staticClass:"content",domProps:{innerHTML:t._s(t.about)}}),a("hr"),t._m(0),t._m(1)])])]),a("button",{staticClass:"modal-close is-large",attrs:{"aria-label":"close"},on:{click:t.closeModal}})])},S=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("div",{staticClass:"columns"},[n("div",{staticClass:"column is-one-third"},[n("img",{attrs:{src:a("40f6")}})]),n("div",{staticClass:"column"},[t._v(" This database is part of the "),n("a",{attrs:{href:"https://locusludi.ch"}},[t._v("Locus Ludi")]),t._v(" project that has received funding from the European Research Council (ERC) under the European Union’s Horizon 2020 research and innovation programme (Grant agreement No. 741520) ")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("div",{staticClass:"columns"},[n("div",{staticClass:"column is-one-third"},[n("img",{attrs:{src:a("96ba")}})]),n("div",{staticClass:"column"},[t._v(" EDDB ou Educational Databases est un projet de "),n("a",{attrs:{href:"https://nte.unifr.ch"}},[t._v("DIT-NTE")]),t._v(" permettant aux enseignants et aux chercheurs de mettre en place rapidement des bases de données pour la recherche et l'enseignement. ")])])])}],Q=a("92d7"),_=a.n(Q),X=a("07d2"),z=a.n(X),B={methods:{closeModal:function(){this.$router.push("/"),document.documentElement.classList.remove("is-clipped")},clipHtml:function(){document.documentElement.classList.add("is-clipped")},pretty:function(t){var e="";return t&&(e=_.a.decode(t),e=z()(e)),e}}},V=B,K=Object(u["a"])(V,W,G,!1,null,null,null),F=K.exports,q={mixins:[F,Z],data:function(){return{about:"",aboutImage:""}},created:function(){this.clipHtml(),this.fetchAbout()}},$=q,tt=Object(u["a"])($,U,S,!1,null,null,null),et=tt.exports;s["a"].use(T["a"]);var at=new T["a"]({mode:"history",base:"/cultures-hackers/",routes:[{path:"/about",name:"about",component:et}]});a("e8ce"),s["a"].config.productionTip=!1,new s["a"]({router:at,render:function(t){return t(D)}}).$mount("#app")},"96ba":function(t,e,a){t.exports=a.p+"img/unifr-full.6b223179.png"},ff39:function(t,e,a){"use strict";var n=a("1ede"),r=a.n(n);r.a}});
//# sourceMappingURL=app.b506c963.js.map