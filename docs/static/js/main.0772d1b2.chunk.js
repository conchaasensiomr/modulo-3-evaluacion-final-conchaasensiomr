(this["webpackJsonpevaluacion-final"]=this["webpackJsonpevaluacion-final"]||[]).push([[0],{11:function(e,a,t){e.exports=t.p+"static/media/notfound_image.cb66f414.png"},22:function(e,a,t){e.exports=t.p+"static/media/Rick_and_Morty_logo.75509f2e.png"},23:function(e,a,t){e.exports=t.p+"static/media/title_image.779837d7.png"},25:function(e,a,t){e.exports=t(38)},30:function(e,a,t){},31:function(e,a,t){},38:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(19),i=t.n(c),l=t(7),s=(t(30),t(12)),m=t(1),o=(t(31),t(14)),u=t.n(o),p=t(24),f=t(20);function d(e){return fetch(e).then((function(e){return e.json()})).then((function(e){return e.results})).then((function(e){return e.map(_)})).then((function(e){return e.map(E)}))}function E(e){return e.specie="Human"===e.specie?"Humano":"Alien",e.status=function(e){if("Alive"===e.status)return"Vivo";if("Dead"===e.status)return"Muerto";if("unknown"===e.status)return"Desconocido"}(e),e}function _(e){return{id:e.id,image:e.image,name:e.name,status:e.status,specie:e.species,origin:e.origin.name,episodes:e.episode.length,gender:e.gender}}var h=function(){var e=Object(f.a)(u.a.mark((function e(){var a,t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([d("https://rickandmortyapi.com/api/character/"),d("https://rickandmortyapi.com/api/character/?page=2"),d("https://rickandmortyapi.com/api/character/?page=3")]);case 2:return t=e.sent,e.abrupt("return",(a=[]).concat.apply(a,Object(p.a)(t)));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(e){var a=function(a){a.preventDefault(),e.handleFilters({key:a.target.id,value:a.target.value})};return r.a.createElement("form",{className:"form__search",onKeyDown:function(e){"Enter"===e.key&&e.preventDefault()}},r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"filterName"}),r.a.createElement("input",{className:"input__search",type:"text",placeholder:"Escribe el nombre de un personaje",id:"filterName",value:e.filterName,onChange:a})),r.a.createElement("div",{className:"select__filter"},r.a.createElement("label",{htmlFor:"filterSpecie"},"Selecciona la especie "),r.a.createElement("select",{className:"select__input",name:"filterSpecie",id:"filterSpecie",value:e.filterSpecie,onChange:a},r.a.createElement("option",{value:"all"},"Todos"),r.a.createElement("option",{value:"Humano"},"Humano"),r.a.createElement("option",{value:"Alien"},"Alien"))))},N=function(e){return r.a.createElement("div",{className:"card__detail-container"},r.a.createElement("section",{className:"card__container"},r.a.createElement("img",{src:e.image,alt:e.name}),r.a.createElement("div",{className:"card__text"},r.a.createElement("div",{className:"card__title"},r.a.createElement("h2",null,e.name)),r.a.createElement("ul",null,r.a.createElement("li",null,"Estado: ".concat(e.status)),r.a.createElement("li",null,"Especie: ".concat(e.specie)),r.a.createElement("li",null,"Planeta de origen: ".concat(e.origin)),r.a.createElement("li",null,"N\xba de episodios: ".concat(e.episodes))))),r.a.createElement(l.b,{className:"btn__return",to:"/"},r.a.createElement("i",{className:"fas fa-angle-left"})," Volver"))},v=function(e){return r.a.createElement(l.b,{to:"/character/".concat(e.id)},r.a.createElement("article",null,r.a.createElement("img",{className:"character__img",src:e.image,alt:e.name}),r.a.createElement("div",{className:"character__container"},r.a.createElement("div",{className:"character__text-container"},r.a.createElement("h3",{className:"character__title"},e.name),r.a.createElement("span",{className:"character__text"},e.specie)),r.a.createElement("div",{className:"character__icon"},r.a.createElement("span",null,"Alien"===e.specie?r.a.createElement("i",{className:"fab fa-reddit-alien"}):"Male"===e.gender?r.a.createElement("i",{className:"fas fa-male"}):r.a.createElement("i",{className:"fas fa-female"})),r.a.createElement("span",{className:"status__container"},"Muerto"===e.status?r.a.createElement("i",{className:"fas fa-skull-crossbones"}):"Desconocido"===e.status?r.a.createElement("i",{className:"fas fa-question"}):r.a.createElement("i",{className:"fas fa-heartbeat"}))," "))))},b=t(11),y=t.n(b),k=t(6),j=t.n(k);v.propTypes={name:j.a.string,specie:j.a.string,id:j.a.number,gender:j.a.string,status:j.a.string};var x=function(e){if(0===e.characters.length){var a="all"===e.filterSpecie?"personaje":e.filterSpecie;return r.a.createElement("div",{className:"container__notfound"},r.a.createElement("p",{className:"container__notfound-text"},"No hay ning\xfan ".concat(a," que coincida con el nombre ").concat(e.filterName)),r.a.createElement("div",{className:"container__notfound-img"},r.a.createElement("img",{src:y.a,alt:"no encontrado"})))}var t=e.characters.sort((function(e,a){return e.name>a.name?1:e.name<a.name?-1:0})).map((function(e){return r.a.createElement("li",{className:"character__list",key:e.id},r.a.createElement(v,{key:e.id,id:e.id,name:e.name,image:e.image,specie:e.specie,gender:e.gender,status:e.status}))}));return r.a.createElement("ul",{className:"characters__container"},t)},S=t(22),O=t.n(S),w=t(23),A=t.n(w),D=function(){return r.a.createElement(l.b,{to:"/"},r.a.createElement("div",{className:"header"},r.a.createElement("img",{className:"header__logo",src:O.a,alt:"Rick and Morty"}),r.a.createElement("img",{className:"header__img",src:A.a,alt:"portal"})," "))};var M=function(){var e=Object(n.useState)([]),a=Object(s.a)(e,2),t=a[0],c=a[1],i=Object(n.useState)(""),l=Object(s.a)(i,2),o=l[0],u=l[1],p=Object(n.useState)("all"),f=Object(s.a)(p,2),d=f[0],E=f[1];function _(e){return"all"===d||e.specie===d}function v(e){return e.name.toLowerCase().includes(o.toLowerCase())}return Object(n.useEffect)((function(){h().then((function(e){return c(e)}))}),[]),r.a.createElement("div",{className:"App"},r.a.createElement(D,null),r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/"},r.a.createElement(g,{filterSpecie:d,filterName:o,handleFilters:function(e){"filterName"===e.key?u(e.value):"filterSpecie"===e.key&&E(e.value)}}),r.a.createElement(x,{filterName:o,filterSpecie:d,characters:t.filter(v).filter(_)})),r.a.createElement(m.a,{path:"/character/:id",render:function(e){var a=parseInt(e.match.params.id),n=t.find((function(e){return e.id===a}));return n?r.a.createElement("div",null,r.a.createElement(N,{image:n.image,name:n.name,status:n.status,specie:n.specie,origin:n.origin,episodes:n.episodes})):r.a.createElement("div",{className:"container__character--notfound"},r.a.createElement("p",{className:"route__character-notfound"},"El personaje que buscas no existe"),r.a.createElement("img",{src:y.a,alt:"no encontrado"}))}})))};i.a.render(r.a.createElement(l.a,null,r.a.createElement(M,null)),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.0772d1b2.chunk.js.map