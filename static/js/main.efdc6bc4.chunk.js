(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){e.exports=a(50)},26:function(e,t,a){},30:function(e,t,a){},33:function(e,t,a){},36:function(e,t,a){},38:function(e,t,a){},41:function(e,t,a){},43:function(e,t,a){},48:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(16),c=a.n(s),o=a(52),i=(a(26),a(1)),l=a.n(i),u=a(12),p=a(19),f=a(17),v=a(3),h=a(7),d=a(8),m=a(10),b=a(9),w=a(11),g=a(51),S=(a(30),a(33),function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(m.a)(this,Object(b.a)(t).call(this,e))).romanizeNum=function(e){var t="",a=["I","II","III","IV","V","VI","VII","VIII","IX","X"];return a.forEach(function(n){a[e]&&(t=a[e])}),t},a.state={},a}return Object(w.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props.films;return r.a.createElement("div",{className:"Sidebar fade"},r.a.createElement("div",{className:"star-wars"},r.a.createElement("div",{className:"crawl"},r.a.createElement("div",{className:"title"},r.a.createElement("p",null,"Episode ",this.romanizeNum(e.episode_id)),r.a.createElement("h1",{className:"film-title"},e.title),r.a.createElement("p",null,"Released:  ",e.date)),r.a.createElement("p",null,e.opening_crawl))))}}]),t}(n.Component)),x=(a(36),a(38),function(e){var t=e.entry,a=e.toggleFavorites,n=e.favorites,s=e.isFavorite,c=t.properties.map(function(e){return r.a.createElement("p",{key:e.header,className:"card-text"},r.a.createElement("span",{className:"card-header"},e.header),e.text)});return r.a.createElement("div",{className:"Card"},r.a.createElement("div",{className:"fav-btn-card-container"},r.a.createElement("h3",null,t.name),r.a.createElement("button",{type:"submit",className:"fav-btn \n\t\t\t\t\t\t".concat(s||n.includes(t)?"fav-btn-active":"fav-btn-inactive"),onClick:function(){return a(t)}},r.a.createElement("i",{className:"fas fa-jedi"}))),c)}),E=function(e){var t=e.entries,a=e.toggleFavorites,n=e.favorites,s=t.map(function(e){return r.a.createElement(x,{entry:e,key:e.name,toggleFavorites:a,favorites:n,isFavorite:e.isFavorite})});return r.a.createElement("div",{className:"CardContainer"},s)},k=function(){var e=Object(v.a)(l.a.mark(function e(t){var a,n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if(!((a=e.sent).status>=400)){e.next=7;break}throw new Error("Fetch has failed");case 7:return e.next=9,a.json();case 9:return n=e.sent,e.abrupt("return",n);case 11:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(v.a)(l.a.mark(function e(){var t,a,n,r;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=Math.round(6*Math.random()+1),"https://swapi.co/api/films/",e.next=4,k("https://swapi.co/api/films/");case 4:return a=e.sent,e.next=7,a.results[t];case 7:return n=e.sent,e.next=10,O(n);case 10:return r=e.sent,e.abrupt("return",r);case 12:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(v.a)(l.a.mark(function e(t){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{opening_crawl:t.opening_crawl,episode_id:t.episode_id,title:t.title,date:t.release_date.slice(0,4)});case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(v.a)(l.a.mark(function e(){var t,a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"https://swapi.co/api/people/",e.next=3,k("https://swapi.co/api/people/");case 3:return t=e.sent,e.next=6,N(t.results);case 6:return a=e.sent,e.abrupt("return",Promise.all(a));case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(v.a)(l.a.mark(function e(t){var a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.map(function(){var e=Object(v.a)(l.a.mark(function e(t){var a,n,r,s,c,o;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F(t);case 2:return a=e.sent,n=a.planetName,r=a.planetPop,e.next=7,y(t);case 7:return s=e.sent,c=s.speciesName,o=s.language,e.abrupt("return",{name:t.name,id:t.name,isFavorite:!1,type:"people",properties:[{header:"Homeworld: ",text:"".concat(n)},{header:"Species: ",text:"".concat(c)},{header:"Population: ",text:"".concat(r)},{header:"Language: ",text:"".concat(o)}]});case 11:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}());case 2:return a=e.sent,e.abrupt("return",Promise.all(a));case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(v.a)(l.a.mark(function e(t){var a,n,r;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.homeworld,e.next=3,k(a);case 3:return n=e.sent,r={planetName:n.name,planetPop:n.population},e.abrupt("return",r);case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(v.a)(l.a.mark(function e(t){var a,n,r;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.species[0],e.next=3,k(a);case 3:return n=e.sent,r={speciesName:n.name,language:n.language},e.abrupt("return",r);case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(v.a)(l.a.mark(function e(){var t,a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"https://swapi.co/api/planets/",e.next=3,k("https://swapi.co/api/planets/");case 3:return t=e.sent,e.next=6,I(t.results);case 6:return a=e.sent,e.abrupt("return",Promise.all(a));case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(v.a)(l.a.mark(function e(t){var a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.map(function(){var e=Object(v.a)(l.a.mark(function e(t){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=t.name,e.t1=t.name,e.t2={header:"Terrain: ",text:"".concat(t.terrain)},e.t3={header:"Population: ",text:"".concat(t.population)},e.t4={header:"Climate: ",text:"".concat(t.climate)},e.t5="",e.next=8,V(t.residents);case 8:return e.t6=e.sent,e.t7=e.t5.concat.call(e.t5,e.t6),e.t8={header:"Residents: ",text:e.t7},e.t9=[e.t2,e.t3,e.t4,e.t8],e.abrupt("return",{name:e.t0,id:e.t1,isFavorite:!1,type:"planets",properties:e.t9});case 13:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}());case 2:return a=e.sent,e.abrupt("return",Promise.all(a));case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),V=function(){var e=Object(v.a)(l.a.mark(function e(t){var a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.map(function(){var e=Object(v.a)(l.a.mark(function e(t){var a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k(t);case 2:return a=e.sent,e.abrupt("return",a.name);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()),e.next=3,Promise.all(a);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(v.a)(l.a.mark(function e(){var t,a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"https://swapi.co/api/vehicles/",e.next=3,k("https://swapi.co/api/vehicles/");case 3:return t=e.sent,e.next=6,_(t.results);case 6:return a=e.sent,e.abrupt("return",Promise.all(a));case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(v.a)(l.a.mark(function e(t){var a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.map(function(){var e=Object(v.a)(l.a.mark(function e(t){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{name:t.name,id:t.name,isFavorite:!1,type:"vehicles",properties:[{header:"Model: ",text:"".concat(t.model)},{header:"Class: ",text:"".concat(t.vehicle_class)},{header:"Passengers: ",text:"".concat(t.passengers)}]});case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}());case 2:return a=e.sent,e.abrupt("return",Promise.all(a));case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),B=a(53),J=(a(41),a(43),function(e){var t=e.favorites,a=e.handleFavoritesClick,n=e.favoritesSelected;return r.a.createElement("div",{className:"FavoriteButton"},r.a.createElement("button",{className:"cat-button favorites-button \n            ".concat(n?"cat-button-active":"cat-button-inactive"),name:"favorites",onClick:function(e){return a(e)}},r.a.createElement(B.a,{to:"/favorites",className:"nav"},"Favorites"),r.a.createElement("span",{className:"favorites-count"},t?t.length:0)))}),M=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(m.a)(this,Object(b.a)(t).call(this,e))).handlePeopleClick=function(){!0===a.state.peopleSelected?a.setState({peopleSelected:!1}):(a.setState({peopleSelected:!0,vehiclesSelected:!1,planetsSelected:!1,favoritesSelected:!1}),a.props.showPeople())},a.handlePlanetClick=function(){!0===a.state.planetsSelected?a.setState({planetsSelected:!1}):(a.setState({peopleSelected:!1,vehiclesSelected:!1,planetsSelected:!0,favoritesSelected:!1}),a.props.showPlanet())},a.handleVehicleClick=function(){!0===a.state.vehiclesSelected?a.setState({vehiclesSelected:!1}):(a.setState({peopleSelected:!1,vehiclesSelected:!0,planetsSelected:!1,favoritesSelected:!1}),a.props.showVehicle())},a.handleFavoritesClick=function(){!0===a.state.favoritesSelected?a.setState({favoritesSelected:!1}):(a.setState({peopleSelected:!1,vehiclesSelected:!1,planetsSelected:!1,favoritesSelected:!0}),a.props.showFavorites())},a.state={peopleSelected:!1,vehiclesSelected:!1,planetsSelected:!1,favoritesSelected:!1},a}return Object(w.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props.favorites,t=this.state,a=t.peopleSelected,n=t.planetsSelected,s=t.vehiclesSelected,c=t.favoritesSelected;return r.a.createElement("div",{className:"Nav"},r.a.createElement("button",{className:"cat-button people-button \n\t\t      \t".concat(a?"cat-button-active":"cat-button-inactive"),name:"people",onClick:this.handlePeopleClick},r.a.createElement(B.a,{to:"/people",className:"nav"},"People")),r.a.createElement("button",{className:"cat-button planets-button \n\t\t      \t".concat(n?"cat-button-active":"cat-button-inactive"),name:"planets",onClick:this.handlePlanetClick},r.a.createElement(B.a,{to:"/planets",className:"nav"},"Planets")),r.a.createElement("button",{className:"cat-button vehicles-button \n\t\t      \t".concat(s?"cat-button-active":"cat-button-inactive"),name:"vehicles",onClick:this.handleVehicleClick},r.a.createElement(B.a,{to:"/vehicles",className:"nav"},"Vehicles")),r.a.createElement(J,{className:"FavoriteButton",favorites:e,handleFavoritesClick:this.handleFavoritesClick,favoritesSelected:c}))}}]),t}(n.Component),X=(a(48),function(e){var t=e.closeError;return r.a.createElement("div",{className:"ErrorPopup"},r.a.createElement("div",{className:"popup-inner"},r.a.createElement("h1",null,"You have no favorites selected!"),r.a.createElement("button",{onClick:t},"X")))}),z=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(m.a)(this,Object(b.a)(t).call(this,e))).toggleFavorites=function(){var e=Object(v.a)(l.a.mark(function e(t){var n,r,s,c,o;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return s=t.type,c=t.id,o=a.state[s].map(function(e){return e.id===c?Object(f.a)({},e,{isFavorite:!e.isFavorite}):e}),r=a.isInFavorites(t)?a.state.favorites.filter(function(e){return e.id!==c}):[].concat(Object(p.a)(a.state.favorites),[t]),e.next=5,a.setState((n={},Object(u.a)(n,s,o),Object(u.a)(n,"favorites",r),n));case 5:return e.next=7,a.setLocalStorage("favorites",r);case 7:return e.next=9,a.setLocalStorage([s],o);case 9:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.isInFavorites=function(e){return a.state.favorites.find(function(t){return t.id===e.id})},a.toggleErrorPopup=function(){a.setState({showErrorPopup:!a.state.showErrorPopup})},a.showFavorites=function(){a.state.favorites.length?a.setState({favoritesSelected:!0,peopleSelected:!1,planetsSelected:!1,vehiclesSelected:!1}):a.toggleErrorPopup()},a.getFilm=Object(v.a)(l.a.mark(function e(){var t;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j();case 2:t=e.sent,a.setState({films:t});case 4:case"end":return e.stop()}},e,this)})),a.getPeople=Object(v.a)(l.a.mark(function e(){var t;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P();case 2:t=e.sent,a.setState({people:t}),a.setLocalStorage("people",t);case 5:case"end":return e.stop()}},e,this)})),a.getPlanets=Object(v.a)(l.a.mark(function e(){var t;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C();case 2:t=e.sent,a.setState({planets:t}),a.setLocalStorage("planets",t);case 5:case"end":return e.stop()}},e,this)})),a.getVehicles=Object(v.a)(l.a.mark(function e(){var t;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L();case 2:t=e.sent,a.setState({vehicles:t}),a.setLocalStorage("vehicles",t);case 5:case"end":return e.stop()}},e,this)})),a.getFavorites=Object(v.a)(l.a.mark(function e(){var t,n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=a.state.favorites,localStorage.favorites||!t.length){e.next=5;break}a.setLocalStorage("favorites",t),e.next=10;break;case 5:if(!localStorage.favorites){e.next=10;break}return e.next=8,a.getLocalStorage("favorites");case 8:n=e.sent,a.setState({favorites:n});case 10:case"end":return e.stop()}},e,this)})),a.setLocalStorage=function(e,t){localStorage.setItem(e,JSON.stringify(t))},a.getLocalStorage=function(e){if(localStorage.length)return JSON.parse(localStorage.getItem(e))},a.showPeople=function(){var e=Object(v.a)(l.a.mark(function e(t){var n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(localStorage.people){e.next=5;break}return e.next=3,a.getPeople();case 3:e.next=6;break;case 5:localStorage.people&&(n=a.getLocalStorage("people"),a.setState({people:n,peopleSelected:!0,planetsSelected:!1,vehiclesSelected:!1,favoritesSelected:!1,scroll:!1}));case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.showVehicles=function(){var e=Object(v.a)(l.a.mark(function e(t){var n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(localStorage.vehicles){e.next=5;break}return e.next=3,a.getVehicles();case 3:e.next=6;break;case 5:localStorage.vehicles&&(n=a.getLocalStorage("vehicles"),a.setState({vehicles:n,vehiclesSelected:!0,peopleSelected:!1,planetsSelected:!1,favoritesSelected:!1,scroll:!1}));case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.showPlanets=function(){var e=Object(v.a)(l.a.mark(function e(t){var n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(localStorage.planets){e.next=5;break}return e.next=3,a.getPlanets();case 3:e.next=6;break;case 5:localStorage.planets&&(n=a.getLocalStorage("planets"),a.setState({planets:n,planetsSelected:!0,peopleSelected:!1,vehiclesSelected:!1,favoritesSelected:!1,scroll:!1}));case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.state={films:{},people:[],vehicles:[],planets:[],peopleSelected:!1,vehiclesSelected:!1,planetsSelected:!1,favorites:[],scroll:!0,favoritesSelected:!1,showErrorPopup:!1},a}return Object(w.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=Object(v.a)(l.a.mark(function e(){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.getFilm(),this.showPeople(),this.showVehicles(),this.showPlanets(),this.getFavorites();case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.films,n=t.people,s=t.vehicles,c=t.planets,o=t.favorites,i=t.showErrorPopup;return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"header"},r.a.createElement("h1",{className:"app-title"},"swapi box"),r.a.createElement(M,{showPeople:this.showPeople,showPlanet:this.showPlanets,showVehicle:this.showVehicles,showFavorites:this.showFavorites,favorites:o,toggleErrorPopup:this.toggleErrorPopup})),i?r.a.createElement(X,{text:"close",closeError:this.toggleErrorPopup}):r.a.createElement("div",{className:"error-popup-placeholder"}),r.a.createElement(g.a,{exact:!0,path:"/",render:function(e){return r.a.createElement(S,Object.assign({},e,{films:a}))}}),r.a.createElement(g.a,{exact:!0,path:"/people",render:function(t){return r.a.createElement(E,Object.assign({},t,{entries:n,toggleFavorites:e.toggleFavorites,favorites:o}))}}),r.a.createElement(g.a,{exact:!0,path:"/vehicles",render:function(t){return r.a.createElement(E,Object.assign({},t,{entries:s,toggleFavorites:e.toggleFavorites,favorites:o}))}}),r.a.createElement(g.a,{exact:!0,path:"/planets",render:function(t){return r.a.createElement(E,Object.assign({},t,{entries:c,toggleFavorites:e.toggleFavorites,favorites:o}))}}),r.a.createElement(g.a,{exact:!0,path:"/favorites",render:function(t){return r.a.createElement(E,Object.assign({},t,{entries:o,toggleFavorites:e.toggleFavorites,favorites:o}))}}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var R=r.a.createElement(o.a,null,r.a.createElement(z,null));c.a.render(R,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,2,1]]]);
//# sourceMappingURL=main.efdc6bc4.chunk.js.map