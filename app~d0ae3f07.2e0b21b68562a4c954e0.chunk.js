(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"+Sfn":function(t,e,n){"use strict";n.d(e,"a",function(){return i});var a=n("4R65"),i=function(){function t(t,e,n){void 0===n&&(n=""),this.overlays={Wind:a.tileLayer("http://{s}.tile.openweathermap.org/map/wind/{z}/{x}/{y}.png?appid={apiKey}",{maxZoom:19,attribution:'Map data &copy; <a href="http://openweathermap.org">OpenWeatherMap</a>',apiKey:"10d52673f466e43fcf146cdb041a1a89",opacity:.5}),Clouds:a.tileLayer("http://{s}.tile.openweathermap.org/map/clouds/{z}/{x}/{y}.png?appid={apiKey}",{maxZoom:19,attribution:'Map data &copy; <a href="http://openweathermap.org">OpenWeatherMap</a>',apiKey:"10d52673f466e43fcf146cdb041a1a89",opacity:.5}),Pressure:a.tileLayer("http://{s}.tile.openweathermap.org/map/pressure/{z}/{x}/{y}.png?appid={apiKey}",{maxZoom:19,attribution:'Map data &copy; <a href="http://openweathermap.org">OpenWeatherMap</a>',apiKey:"10d52673f466e43fcf146cdb041a1a89",opacity:.5})},this.baseLayers={Terrain:a.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:17,attribution:'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'}),Satellite:a.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{attribution:"Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"})};var i=this.baseLayers.Terrain;n&&(i=this.baseLayers[n]),this.imap=a.map(t,{center:[e.location.lat,e.location.lng],zoom:e.zoom,minZoom:e.minZoom,zoomControl:!1,layers:[i]})}return t.prototype.addLayer=function(t,e){this.overlays[t]=e,this.imap.addLayer(e)},t.prototype.addLayerGroup=function(t){this.overlays[t]=a.layerGroup([]),this.imap.addLayer(this.overlays[t])},t.prototype.showLayerControl=function(){this.control=a.control.layers(this.baseLayers,this.overlays).addTo(this.imap)},t.prototype.showZoomControl=function(t){void 0===t&&(t="topleft"),a.control.zoom({position:t}).addTo(this.imap)},t.prototype.moveTo=function(t,e){this.imap.setZoom(t),this.imap.panTo(new a.LatLng(e.lat,e.lng))},t.prototype.zoomTo=function(t){this.imap.setView(new a.LatLng(t.lat,t.lng),8)},t.prototype.addMarker=function(t,e,n){var i;void 0===e&&(e=""),void 0===n&&(n="default");var o=a.marker([t.lat,t.lng]);if(e){var r=a.popup({autoClose:!1,closeOnClick:!1});r.setContent(e),o.bindPopup(r)}this.overlays[n]?i=this.overlays[n]:(i=a.layerGroup([]),this.overlays[n]=i,this.imap.addLayer(i)),o.addTo(i)},t.prototype.invalidateSize=function(){this.imap.invalidateSize(),this.imap._onResize()},t}()},0:function(t,e,n){n("GAND"),n("GmYv"),t.exports=n("b9nV")},"54d1":function(t,e,n){"use strict";n.d(e,"a",function(){return a});var a=function(){return function(t,e){this.total=t,this.donation=e}}()},Scd8:function(t,e,n){"use strict";(function(t){n.d(e,"a",function(){return p});var a=n("aurelia-framework"),i=n("4ysu"),o=n("70NS"),r=n("1aCK"),s=n("aurelia-event-aggregator"),c=n("54d1"),l=function(t,e,n,a){var i,o=arguments.length,r=o<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,a);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(r=(o<3?i(r):o>3?i(e,n,r):i(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r},d=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},u=function(e,n,a,i){return new(a||(a=t))(function(t,o){function r(t){try{c(i.next(t))}catch(t){o(t)}}function s(t){try{c(i.throw(t))}catch(t){o(t)}}function c(e){e.done?t(e.value):new a(function(t){t(e.value)}).then(r,s)}c((i=i.apply(e,n||[])).next())})},f=function(t,e){var n,a,i,o,r={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,a&&(i=2&o[0]?a.return:o[0]?a.throw||((i=a.return)&&i.call(a),0):a.next)&&!(i=i.call(a,o[1])).done)return i;switch(a=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return r.label++,{value:o[1],done:!1};case 5:r.label++,a=o[1],o=[0];continue;case 7:o=r.ops.pop(),r.trys.pop();continue;default:if(!(i=(i=r.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){r=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){r.label=o[1];break}if(6===o[0]&&r.label<i[1]){r.label=i[1],i=o;break}if(i&&r.label<i[2]){r.label=i[2],r.ops.push(o);break}i[2]&&r.ops.pop(),r.trys.pop();continue}o=e.call(t,r)}catch(t){o=[6,t],a=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}},p=function(){function t(t,e,n,a){this.httpClient=t,this.ea=e,this.au=n,this.router=a,this.candidates=[],this.donations=[],this.paymentMethods=["Cash","Paypal"],this.total=0,t.configure(function(t){t.withBaseUrl("https://elated-mechanic-1.glitch.me")})}return t.prototype.getCandidates=function(){return u(this,void 0,void 0,function(){var t,e;return f(this,function(n){switch(n.label){case 0:return[4,this.httpClient.get("/api/candidates")];case 1:return t=n.sent(),e=this,[4,t.content];case 2:return e.candidates=n.sent(),console.log(this.candidates),[2]}})})},t.prototype.createCandidate=function(t,e,n){return u(this,void 0,void 0,function(){var a,i;return f(this,function(o){switch(o.label){case 0:return a={firstName:t,lastName:e,office:n},[4,this.httpClient.post("/api/candidates",a)];case 1:return[4,o.sent().content];case 2:return i=o.sent(),this.candidates.push(i),[2]}})})},t.prototype.donate=function(t,e,n,a){return u(this,void 0,void 0,function(){var i;return f(this,function(o){switch(o.label){case 0:return i={amount:t,method:e,candidate:n,location:a},[4,this.httpClient.post("/api/candidates/"+n._id+"/donations",i)];case 1:return o.sent(),this.donations.push(i),this.total=this.total+t,this.ea.publish(new c.a(this.total,i)),console.log("Total so far "+this.total),[2]}})})},t.prototype.signup=function(t,e,n,a){return u(this,void 0,void 0,function(){var i;return f(this,function(o){switch(o.label){case 0:return i={firstName:t,lastName:e,email:n,password:a},[4,this.httpClient.post("/api/users",i)];case 1:return[4,o.sent().content];case 2:return o.sent(),this.changeRouter("app"),[2,!1]}})})},t.prototype.login=function(t,e){return u(this,void 0,void 0,function(){var n,a;return f(this,function(i){switch(i.label){case 0:return[4,this.httpClient.post("/api/users/authenticate",{email:t,password:e})];case 1:return[4,(n=i.sent()).content];case 2:return(a=i.sent()).success?(this.httpClient.configure(function(t){t.withHeader("Authorization","bearer "+a.token)}),localStorage.donation=JSON.stringify(n.content),[4,this.getCandidates()]):[3,4];case 3:return i.sent(),this.changeRouter("app"),[2,!0];case 4:return[2,!1]}})})},t.prototype.logout=function(){localStorage.donation=null,this.httpClient.configure(function(t){t.withHeader("Authorization","")}),this.changeRouter("start")},t.prototype.checkIsAuthenticated=function(){"null"!==localStorage.donation&&(!0,this.httpClient.configure(function(t){var e=JSON.parse(localStorage.donation);t.withHeader("Authorization","bearer "+e.token)}),this.changeRouter("app"))},t.prototype.changeRouter=function(t){this.router.navigate("/",{replace:!0,trigger:!1}),this.router.reset(),this.au.setRoot(o.d.moduleName(t))},t=l([Object(a.c)(r.a,s.a,a.Aurelia,i.c),d("design:paramtypes",[r.a,s.a,a.Aurelia,i.c])],t)}()}).call(this,n("25Wt"))},app:function(t,e,n){"use strict";n.r(e),n.d(e,"App",function(){return a});n("70NS");var a=function(){function t(){}return t.prototype.configureRouter=function(t,e){t.map([{route:["","donate"],name:"Donate",moduleId:"views/donate",nav:!0,title:"Donate"},{route:"candidates",name:"candidates",moduleId:"views/candidates",nav:!0,title:"Candidate"},{route:"map",name:"map",moduleId:"views/map",nav:!0,title:"Map"},{route:"logout",name:"logout",moduleId:"views/logout",nav:!0,title:"Logout"}]),this.router=e},t}()},"app.html":function(t,e,n){t.exports='<template>\n  <require from="resources/elements/nav-bar.html"></require>\n  <div class="ui container">\n    <section class="ui raised segment">\n      <h3 class="ui headder"> Donation </h3>\n    </section>\n    <nav-bar router.bind="router"></nav-bar>\n    <div class="ui basic segment">\n      <router-view></router-view>\n    </div>\n  </div>\n</template>\n'},main:function(t,e,n){"use strict";var a={debug:!1,testing:!1},i=(n("70NS"),n("25Wt"));function o(t){return t.use.standardConfiguration().feature("resources/index"),t.use.developmentLogging(a.debug?"debug":"warn"),a.testing&&t.use.plugin("aurelia-testing"),t.start().then(function(){return t.setRoot("start")})}n.d(e,"configure",function(){return o}),i.config({warnings:{wForgottenReturn:!1}})},"resources/elements/candidate-form":function(t,e,n){"use strict";n.r(e),n.d(e,"CandidateForm",function(){return s});var a=n("aurelia-framework"),i=n("Scd8"),o=function(t,e,n,a){var i,o=arguments.length,r=o<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,a);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(r=(o<3?i(r):o>3?i(e,n,r):i(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r},r=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},s=function(){function t(t){this.ds=t}return t.prototype.addCandidate=function(){this.ds.createCandidate(this.firstName,this.lastName,this.office)},o([a.b,r("design:type",Array)],t.prototype,"candidates",void 0),t=o([Object(a.c)(i.a),r("design:paramtypes",[i.a])],t)}()},"resources/elements/candidate-form.html":function(t,e){t.exports='<template>\n  <form submit.trigger="addCandidate()" class="ui form stacked segment">\n    <h3 class="ui dividing header"> Add a Candidate </h3>\n    <div class="field">\n      <label>First Name </label> <input value.bind="firstName">\n    </div>\n    <div class="field">\n      <label>Last Name </label> <input value.bind="lastName">\n    </div>\n    <div class="field">\n      <label>Office </label> <input value.bind="office">\n    </div>\n    <button class="ui blue submit button">Add</button>\n  </form>\n</template>\n'},"resources/elements/candidate-list":function(t,e,n){"use strict";n.r(e),n.d(e,"CandidateList",function(){return r});var a=n("aurelia-framework"),i=function(t,e,n,a){var i,o=arguments.length,r=o<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,a);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(r=(o<3?i(r):o>3?i(e,n,r):i(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r},o=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},r=function(){function t(){}return i([a.b,o("design:type",Array)],t.prototype,"candidates",void 0),t}()},"resources/elements/candidate-list.html":function(t,e){t.exports='<template>\n  <h4 class="ui dividing header"> Candidates </h4>\n  <table class="ui celled table segment">\n    <thead>\n      <tr>\n        <th>last Name</th>\n        <th>First Name</th>\n        <th>Office</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr repeat.for="candidate of candidates">\n        <td>\n          ${candidate.lastName}\n        <td>\n          ${candidate.firstName}\n        </td>\n        <td>\n          ${candidate.office}\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</template>\n'},"resources/elements/coordinates":function(t,e,n){"use strict";n.r(e),n.d(e,"Coordinates",function(){return r});var a=n("aurelia-framework"),i=function(t,e,n,a){var i,o=arguments.length,r=o<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,a);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(r=(o<3?i(r):o>3?i(e,n,r):i(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r},o=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},r=function(){function t(){}return i([a.b,o("design:type",Object)],t.prototype,"location",void 0),t}()},"resources/elements/coordinates.html":function(t,e){t.exports='<template>\n  <h4 class="ui dividing header"> Enter Coordinates </h4>\n  <div class="two fields">\n    <div class="field">\n      <label>Latitude</label> <input placeholder="00.000000" value.bind="location.lat"/>\n    </div>\n    <div class="field">\n      <label>Longitude</label> <input placeholder="00.000000" value.bind="location.lng"/>\n    </div>\n  </div>\n</template>\n'},"resources/elements/donate-form":function(t,e,n){"use strict";n.r(e),n.d(e,"DonateForm",function(){return s});var a=n("aurelia-framework"),i=n("Scd8"),o=function(t,e,n,a){var i,o=arguments.length,r=o<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,a);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(r=(o<3?i(r):o>3?i(e,n,r):i(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r},r=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},s=function(){function t(t){this.ds=t,this.amount="0",this.selectedMethod="",this.selectedCandidate=null,this.location={lat:53.2734,lng:-7.7783203}}return t.prototype.makeDonation=function(){this.ds.donate(parseInt(this.amount),this.selectedMethod,this.selectedCandidate,this.location)},o([a.b,r("design:type",Array)],t.prototype,"paymentMethods",void 0),o([a.b,r("design:type",Array)],t.prototype,"candidates",void 0),t=o([Object(a.c)(i.a),r("design:paramtypes",[i.a])],t)}()},"resources/elements/donate-form.html":function(t,e,n){t.exports='<template>\n  <require from="./coordinates"></require>\n\n  <form submit.trigger="makeDonation()" class="ui form stacked segment">\n    <h3 class=\'ui dividing header\'> Make a Donation </h3>\n    <div class="grouped inline fields">\n      <div class="field">\n        <label>Amount</label> <input type="number" value.bind="amount">\n      </div>\n    </div>\n    <div class="grouped inline fields">\n      <div class="field" repeat.for="method of paymentMethods">\n        <div class="ui radio checkbox">\n          <input type="radio" model.bind="method" checked.bind="selectedMethod">\n          <label>${method}</label>\n        </div>\n      </div>\n    </div>\n    <coordinates location.two-way="location"></coordinates>\n    <h4 class="ui dividing header"> Select Candidate </h4>\n    <div class="grouped inline fields">\n      <div class="field" repeat.for="candidate of candidates">\n        <div class="ui radio checkbox">\n          <input type="radio" model.bind="candidate" checked.bind="selectedCandidate">\n          <label>${candidate.lastName}, ${candidate.firstName}</label>\n        </div>\n      </div>\n    </div>\n    <button class="ui blue submit button">Donate</button>\n  </form>\n</template>\n'},"resources/elements/donation-map":function(t,e,n){"use strict";n.r(e),n.d(e,"DonationMap",function(){return l});var a=n("aurelia-framework"),i=n("aurelia-event-aggregator"),o=n("+Sfn"),r=n("54d1"),s=function(t,e,n,a){var i,o=arguments.length,r=o<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,a);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(r=(o<3?i(r):o>3?i(e,n,r):i(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r},c=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},l=function(){function t(t){var e=this;this.ea=t,this.mapId="donations-map",this.mapHeight=300,t.subscribe(r.a,function(t){e.renderDonation(t.donation)})}return t.prototype.renderDonation=function(t){if(this.map){var e=t.candidate.firstName+" "+t.candidate.lastName+" €"+t.amount.toString();this.map.addMarker(t.location,e),this.map.moveTo(12,t.location)}},t.prototype.attached=function(){this.map=new o.a(this.mapId,{location:{lat:53.2734,lng:-7.7783203},zoom:8,minZoom:7},"Terrain"),this.map.showZoomControl()},t=s([Object(a.c)(i.a),c("design:paramtypes",[i.a])],t)}()},"resources/elements/donation-map.html":function(t,e){t.exports='<template>\n  <div class="ui stacked segment">\n    <div id="${mapId}" class="ui embed" style="height:${mapHeight}px; z-index: 0"></div>\n  </div>\n</template>\n'},"resources/elements/donations-list":function(t,e,n){"use strict";n.r(e),n.d(e,"DonationsList",function(){return r});var a=n("aurelia-framework"),i=function(t,e,n,a){var i,o=arguments.length,r=o<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,a);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(r=(o<3?i(r):o>3?i(e,n,r):i(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r},o=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},r=function(){function t(){}return i([a.b,o("design:type",Array)],t.prototype,"donations",void 0),t}()},"resources/elements/donations-list.html":function(t,e){t.exports='<template>\n  <div class="ui stacked segment">\n    <h3 class="ui dividing header"> Donations to Date </h3>\n    <table class="ui celled table segment">\n      <thead>\n        <tr>\n          <th>Amount</th>\n          <th>Payment Method</th>\n          <th>Candidate</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr repeat.for="donation of donations">\n          <td> ${donation.amount}</td>\n          <td> ${donation.method}</td>\n          <td> ${donation.candidate.lastName}, ${donation.candidate.firstName}</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</template>\n'},"resources/elements/nav-bar.html":function(t,e){t.exports='<template bindable="router">\n\n  <nav class="ui inverted menu">\n    <div class="right menu">\n      <div repeat.for="row of router.navigation">\n        <a class="${row.isActive ? \'active\' : \'\'} item"  href.bind="row.href">${row.title}</a>\n      </div>\n    </div>\n  </nav>\n\n</template>\n'},"resources/elements/total-donated":function(t,e,n){"use strict";n.r(e),n.d(e,"TotalDonated",function(){return l});var a=n("aurelia-framework"),i=n("Scd8"),o=n("54d1"),r=n("aurelia-event-aggregator"),s=function(t,e,n,a){var i,o=arguments.length,r=o<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,a);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(r=(o<3?i(r):o>3?i(e,n,r):i(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r},c=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},l=function(){function t(t,e){var n=this;this.ds=t,this.ea=e,this.total=0,this.total=t.total,e.subscribe(o.a,function(t){n.total=t.total})}return t=s([Object(a.c)(i.a,r.a),c("design:paramtypes",[i.a,r.a])],t)}()},"resources/elements/total-donated.html":function(t,e){t.exports='<template>\n\n  <section class="ui stacked statistic segment">\n    <div class="value">\n      ${total}\n    </div>\n    <div class="label">\n      Donated\n    </div>\n  </section>\n\n</template>\n'},"resources/index":function(t,e,n){"use strict";function a(t){}n.r(e),n.d(e,"configure",function(){return a})},start:function(t,e,n){"use strict";n.r(e),n.d(e,"Start",function(){return s});var a=n("aurelia-framework"),i=(n("70NS"),n("Scd8")),o=function(t,e,n,a){var i,o=arguments.length,r=o<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,a);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(r=(o<3?i(r):o>3?i(e,n,r):i(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r},r=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},s=function(){function t(t){this.ds=t}return t.prototype.configureRouter=function(t,e){t.map([{route:["","login"],name:"Login",moduleId:"views/login",nav:!0,title:"Login"},{route:"signup",name:"signup",moduleId:"views/signup",nav:!0,title:"Signup"}]),this.router=e},t.prototype.attached=function(){this.ds.checkIsAuthenticated()},t=o([Object(a.c)(i.a),r("design:paramtypes",[i.a])],t)}()},"start.html":function(t,e,n){t.exports='<template>\n  <require from="resources/elements/nav-bar.html"></require>\n  <div class="ui container">\n    <section class="ui raised segment">\n      <h3 class="ui headder"> Donation </h3>\n    </section>\n    <nav-bar router.bind="router"></nav-bar>\n    <div class="ui basic segment">\n      <router-view></router-view>\n    </div>\n  </div>\n</template>\n'},"views/candidates":function(t,e,n){"use strict";n.r(e),n.d(e,"Candidates",function(){return s});var a=n("aurelia-framework"),i=n("Scd8"),o=function(t,e,n,a){var i,o=arguments.length,r=o<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,a);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(r=(o<3?i(r):o>3?i(e,n,r):i(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r},r=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},s=function(){function t(t){this.ds=t,this.candidates=t.candidates}return t=o([Object(a.c)(i.a),r("design:paramtypes",[i.a])],t)}()},"views/candidates.html":function(t,e,n){t.exports='<template>\n  <require from="../resources/elements/candidate-form"></require>\n  <require from="../resources/elements/candidate-list"></require>\n  <require from="../resources/elements/total-donated"></require>\n\n  <div class="ui stackable grid">\n    <div class="seven wide column">\n      <candidate-form candidates.bind="candidates"></candidate-form>\n    </div>\n    <div class="two wide column">\n      <total-donated></total-donated>\n    </div>\n    <div class="seven wide column">\n      <candidate-list candidates.bind="candidates"></candidate-list>\n    </div>\n  </div>\n</template>\n'},"views/donate":function(t,e,n){"use strict";n.r(e),n.d(e,"Donate",function(){return s});var a=n("aurelia-framework"),i=n("Scd8"),o=function(t,e,n,a){var i,o=arguments.length,r=o<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,a);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(r=(o<3?i(r):o>3?i(e,n,r):i(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r},r=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},s=function(){function t(t){this.ds=t,this.total=0,this.candidates=t.candidates,this.donations=t.donations,this.paymentMethods=t.paymentMethods,this.total=t.total}return t=o([Object(a.c)(i.a),r("design:paramtypes",[i.a])],t)}()},"views/donate.html":function(t,e,n){t.exports='<template>\n  <require from="../resources/elements/donations-list"></require>\n  <require from="../resources/elements/donate-form"></require>\n  <require from="../resources/elements/total-donated"></require>\n  <require from="../resources/elements/donation-map"></require>\n\n  <div class="ui stackable grid">\n    <div class="seven wide column">\n      <donate-form payment-methods.bind="paymentMethods" candidates.bind="candidates"></donate-form>\n    </div>\n    <div class="two wide column">\n      <total-donated></total-donated>\n    </div>\n    <div class="seven wide column">\n      <donation-map></donation-map>\n      <donations-list donations.bind="donations"></donations-list>\n    </div>\n  </div>\n</template>\n'},"views/login":function(t,e,n){"use strict";n.r(e),function(t){n.d(e,"Login",function(){return l});var a=n("aurelia-framework"),i=n("Scd8"),o=function(t,e,n,a){var i,o=arguments.length,r=o<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,a);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(r=(o<3?i(r):o>3?i(e,n,r):i(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r},r=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},s=function(e,n,a,i){return new(a||(a=t))(function(t,o){function r(t){try{c(i.next(t))}catch(t){o(t)}}function s(t){try{c(i.throw(t))}catch(t){o(t)}}function c(e){e.done?t(e.value):new a(function(t){t(e.value)}).then(r,s)}c((i=i.apply(e,n||[])).next())})},c=function(t,e){var n,a,i,o,r={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,a&&(i=2&o[0]?a.return:o[0]?a.throw||((i=a.return)&&i.call(a),0):a.next)&&!(i=i.call(a,o[1])).done)return i;switch(a=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return r.label++,{value:o[1],done:!1};case 5:r.label++,a=o[1],o=[0];continue;case 7:o=r.ops.pop(),r.trys.pop();continue;default:if(!(i=(i=r.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){r=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){r.label=o[1];break}if(6===o[0]&&r.label<i[1]){r.label=i[1],i=o;break}if(i&&r.label<i[2]){r.label=i[2],r.ops.push(o);break}i[2]&&r.ops.pop(),r.trys.pop();continue}o=e.call(t,r)}catch(t){o=[6,t],a=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}},l=function(){function t(t){this.ds=t,this.email="marge@simpson.com",this.password="secret",this.prompt=""}return t.prototype.login=function(t){return s(this,void 0,void 0,function(){return c(this,function(t){switch(t.label){case 0:return console.log("Trying to log in "+this.email),[4,this.ds.login(this.email,this.password)];case 1:return t.sent()||(this.prompt="Oops! Try again..."),[2]}})})},t=o([Object(a.c)(i.a),r("design:paramtypes",[i.a])],t)}()}.call(this,n("25Wt"))},"views/login.html":function(t,e){t.exports='<template>\n  <div class="ui stackable two column grid">\n    <div class="column">\n      <form submit.delegate="login($event)" class="ui stacked segment form">\n        <h3 class="ui header">Log-in</h3>\n        <div class="field">\n          <label>Email</label> <input placeholder="Email" value.bind="email"/>\n        </div>\n        <div class="field">\n          <label>Password</label> <input type="password" value.bind="password"/>\n        </div>\n        <button class="ui blue submit button">Login</button>\n        <h3>${prompt}</h3>\n      </form>\n    </div>\n    <div class="column">\n      <img class="ui medium image" src="/images/homer4.jpeg">\n    </div>\n  </div>\n</template>\n'},"views/logout":function(t,e,n){"use strict";n.r(e),n.d(e,"Logout",function(){return s});var a=n("aurelia-framework"),i=n("Scd8"),o=function(t,e,n,a){var i,o=arguments.length,r=o<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,a);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(r=(o<3?i(r):o>3?i(e,n,r):i(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r},r=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},s=function(){function t(t){this.ds=t}return t.prototype.attached=function(){this.ds.logout()},t=o([Object(a.c)(i.a),r("design:paramtypes",[i.a])],t)}()},"views/logout.html":function(t,e){t.exports="<template>\n\n</template>\n"},"views/map":function(t,e,n){"use strict";n.r(e),n.d(e,"Map",function(){return c});var a=n("+Sfn"),i=n("Scd8"),o=n("aurelia-framework"),r=function(t,e,n,a){var i,o=arguments.length,r=o<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,a);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(r=(o<3?i(r):o>3?i(e,n,r):i(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r},s=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(t){this.ds=t,this.mapId="main-map",this.mapHeight=600}return t.prototype.renderDonations=function(){for(var t=0,e=this.ds.donations;t<e.length;t++){var n=e[t],a=n.candidate.firstName+" "+n.candidate.lastName+" €"+n.amount.toString();this.map.addMarker(n.location,a,"Donations")}},t.prototype.attached=function(){this.map=new a.a(this.mapId,{location:{lat:53.2734,lng:-7.7783203},zoom:8,minZoom:1},"Terrain"),this.map.showZoomControl(),this.map.addLayerGroup("Donations"),this.map.showLayerControl(),this.renderDonations()},t=r([Object(o.c)(i.a),s("design:paramtypes",[i.a])],t)}()},"views/map.html":function(t,e){t.exports='<template>\n  <div class="ui stacked segment">\n    <div id="${mapId}" class="ui embed" style="height:${mapHeight}px; z-index: 0"></div>\n  </div>\n</template>\n'},"views/signup":function(t,e,n){"use strict";n.r(e),n.d(e,"Signup",function(){return s});var a=n("aurelia-framework"),i=n("Scd8"),o=function(t,e,n,a){var i,o=arguments.length,r=o<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,a);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(r=(o<3?i(r):o>3?i(e,n,r):i(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r},r=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},s=function(){function t(t){this.ds=t,this.firstName="Marge",this.lastName="Simpson",this.email="marge@simpson.com",this.password="secret",this.prompt=""}return t.prototype.signup=function(t){console.log("Trying to sign up "+this.email),this.ds.signup(this.firstName,this.lastName,this.email,this.password)||(this.prompt="Oops! Try again...")},t=o([Object(a.c)(i.a),r("design:paramtypes",[i.a])],t)}()},"views/signup.html":function(t,e){t.exports='<template>\n\n  <div class="ui stackable two column grid">\n    <div class="column">\n      <img class="ui medium image" src="/images/homer2.png">\n    </div>\n    <div class="column">\n      <form submit.delegate="signup($event)" class="ui stacked segment form">\n        <h3 class="ui header">Register for Donation</h3>\n        <div class="two fields">\n          <div class="field">\n            <label>First Name</label> <input placeholder="First Name" type="text" value.bind="firstName">\n          </div>\n          <div class="field">\n            <label>Last Name</label> <input placeholder="Last Name" type="text" value.bind="lastName">\n          </div>\n        </div>\n        <div class="field">\n          <label>Email</label> <input placeholder="Email" type="text" value.bind="email">\n        </div>\n        <div class="field">\n          <label>Password</label> <input type="password" value.bind="password">\n        </div>\n        <button class="ui blue submit button">Submit</button>\n      </form>\n      <h3>${prompt}</h3>\n    </div>\n  </div>\n</template>\n'}},[[0,1,2,5,4,6,8,7,3]]]);
//# sourceMappingURL=app~d0ae3f07.2e0b21b68562a4c954e0.bundle.map