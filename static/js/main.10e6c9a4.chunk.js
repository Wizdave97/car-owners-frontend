(this["webpackJsonpcar-owners-frontend"]=this["webpackJsonpcar-owners-frontend"]||[]).push([[0],{18:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAJ9JREFUeJzt18ENwjAMBVCDOgeDMAdIrIjEGIzCHnDgTl0lqZHyntSbG/38UxwBAAAAzOaQmHkPTzHWzzse90rxrxRQHaDa9AUsiZnr8BQAQIXMMrTm0eGMFpeWn3sUUL0tNt1h+qewAqoDVMssQ2vuHc4AAPbXYxfIOkXEOTn7jIjXwCwlbvFdnDJf04a3xfRPYQVUB6g2fQEAAADAfD4yIRDDobRxEwAAAABJRU5ErkJggg=="},20:function(e,t,a){e.exports=a.p+"static/media/car.4ddb474f.jpg"},21:function(e,t,a){e.exports=a.p+"static/media/back.ea7e81e3.svg"},25:function(e,t,a){e.exports=a(38)},30:function(e,t,a){},31:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(15),c=a.n(l),s=a(5),m=(a(30),a(31),a(16)),o=a(17),u=a(22),i=a(23),x=a(1),f=a(24),p=a(6),d=a.n(p),g=a(8),y=a(4),h=a(18),E=a.n(h),w=function(e){return n.a.createElement("div",{className:"w-4 h-4 mx-2 my-2 rounded-full",style:{backgroundColor:e.color}})},N=function(e){return n.a.createElement(s.b,{to:e.selectFilter,className:"w-full p-0 my-4"},n.a.createElement("div",{className:"w-full bg-white rounded-lg shadow-inner overflow-hidden"},n.a.createElement("div",{className:"w-full my-2 p-2"},n.a.createElement("h2",{className:"w-full text-center text-2xl text-gray-900 font-bold"},"".concat(e.startYear," - ").concat(e.endYear))),n.a.createElement("div",{className:"w-full my-2 p-2"},n.a.createElement("h3",{className:"w-full text-center text-xl text-gray-700 font-normal capitalize"},e.gender)),e.countries&&e.countries.length>0?n.a.createElement("div",{className:"w-full flex flex-wrap my-2 p-2 justify-center"},e.countries.map((function(e){return n.a.createElement("span",{key:e,className:"bg-gray-200 rounded-full text-center px-2 py-0 text-2xl text-gray-800 mx-2 my-2"},e)}))):null,e.colors&&e.colors.length>0?n.a.createElement("div",{className:"w-full flex flex-wrap my-2 p-2 justify-center"},e.colors.map((function(e){return n.a.createElement(w,{key:e,color:e})}))):null))},b=function(e){var t=Object(r.useState)({nextPage:null,prevPage:null}),a=Object(y.a)(t,2),l=a[0],c=a[1],s=Object(r.useState)(null),m=Object(y.a)(s,2),o=m[0],u=m[1],i=Object(r.useState)({fetchStart:!1,fetchSuccess:!1,fetchFail:!1}),x=Object(y.a)(i,2),p=x[0],h=x[1],w=function(e){h({fetchStart:!0,fetchSuccess:!1,fetchFail:!1}),fetch(e).then((function(e){return e.json()})).then(function(){var e=Object(g.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(500!==t.status){e.next=4;break}return e.next=3,h({fetchStart:!1,fetchSuccess:!1,fetchFail:!0});case 3:return e.abrupt("return");case 4:if(400!==t.status){e.next=8;break}return e.next=7,h({fetchStart:!1,fetchSuccess:!0,fetchFail:!0});case 7:return e.abrupt("return");case 8:return e.next=10,u(t.data);case 10:return e.next=12,c({nextPage:t.nextPage,prevPage:t.prevPage});case 12:return e.next=14,h({fetchStart:!1,fetchSuccess:!0,fetchFail:!1});case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){h({fetchStart:!1,fetchSuccess:!1,fetchFail:!0})}))};Object(r.useEffect)((function(){document.title="Filters",w("https://immense-ravine-06184.herokuapp.com/filters?page=1")}),[]);var b=n.a.createElement("div",{className:"w-full flex flex-wrap my-2 p-2 justify-center"},n.a.createElement("span",{className:"bg-gray-200 rounded-full text-center px-2 py-0 text-2xl text-gray-800 mx-2"},"Loading Filters"));return p.fetchSuccess&&(b=o&&o.length>0?o.map((function(e){for(var t in e)e[t]||delete e[t];return n.a.createElement(N,{key:String(e.id),selectFilter:(a=e,function(e){return Object(f.a)({},e,{pathname:"/people",state:{filter:a}})}),startYear:e.start_year,endYear:e.end_year,gender:e.gender,colors:e.colors,countries:e.countries});var a})):n.a.createElement("div",{className:"w-full flex flex-wrap my-2 p-2 justify-center"},n.a.createElement("span",{className:"bg-gray-200 rounded-full text-center px-2 py-0 text-2xl text-gray-800 mx-2"},"No filters found"))),p.fetchFail&&(b=n.a.createElement("div",{className:"w-full flex flex-wrap my-2 p-2 justify-center"},n.a.createElement("span",{className:"bg-gray-200 rounded-full text-center px-2 py-0 text-2xl text-gray-800 mx-2"},"An error occured, please retry"),n.a.createElement("button",{onClick:function(){return w(l.nextPage)},className:"bg-indigo-600 rounded-md text-center px-2 py-0 text-2xl text-gray-100 mx-2"},"Click to retry"))),n.a.createElement("div",{className:"w-full p-4"},n.a.createElement("div",{className:"w-full flex flex-no-wrap justify-start items-center mb-4"},n.a.createElement("div",{className:"w-8 h-8 rounded-md mx-2"},n.a.createElement("img",{className:"w-full",src:E.a,alt:"filters"})),n.a.createElement("h1",{className:"text-gray-900 text-2xl mx-2 font-extrabold"},"Filters")),n.a.createElement("div",{className:"w-full flex flex-wrap p-4"},b),n.a.createElement("div",{className:"w-full flex flex-wrap p-4 justify-between"},n.a.createElement("button",{onClick:function(){return w(l.prevPage)},className:"bg-indigo-600 rounded text-center p-2 text-2xl text-gray-100 mx-2 ".concat(l.prevPage?"":"opacity-50 cursor-not-allowed")},"Previous Page"),n.a.createElement("button",{onClick:function(){return w(l.nextPage)},className:"bg-indigo-600 rounded text-center p-2 text-2xl text-gray-100 mx-2 ".concat(l.nextPage?"":"opacity-50 cursor-not-allowed")},"Next Page")))},v=a(20),A=a.n(v),j=function(e){return n.a.createElement("div",{className:"w-full p-2 my-4 flex flex-wrap md:flex-no-wrap bg-white rounded-lg shadow-inner overflow-hidden items-center"},n.a.createElement("div",{className:"w-full md:w-3/12 bg-transparent my-2 px-2 py-5"},n.a.createElement("div",{className:"w-full rounded-md shadow-xl overflow-hidden"},n.a.createElement("img",{className:"w-full",src:A.a,alt:"Car"}))),n.a.createElement("div",{className:"w-full md:w-9/12 my-2 p-2"},n.a.createElement("div",{className:"w-full my-2"},n.a.createElement("h3",{className:"w-full px-2 text-left text-2xl text-gray-900 font-normal"},"".concat(e.firstName," ").concat(e.lastName))),n.a.createElement("div",{className:"w-full p-0 my-2 flex flex-no-wrap items-end"},n.a.createElement("ul",{className:"h-12 p-0 list-none"},n.a.createElement("li",{className:"px-2 py-0 text-md text-gray-600"},"Brand"),n.a.createElement("li",{className:"px-2 py-0 text-md text-gray-900"},e.carModel)),n.a.createElement("div",{class:"w-px h-12 mx-2 bg-gray-900"}),n.a.createElement("ul",{className:"h-12 p-0 list-none"},n.a.createElement("li",{className:"px-2 py-0 text-md text-gray-600"},"Year"),n.a.createElement("li",{className:"px-2 py-0 text-md text-gray-900"},e.carModelYear)),n.a.createElement("div",{class:"w-px h-12 mx-2 bg-gray-900"}),n.a.createElement("ul",{className:"h-12 p-0 list-none"},n.a.createElement("li",{className:"px-2 py-0 text-md text-gray-600"},"Color"),n.a.createElement("li",{className:"px-2 py-0"},n.a.createElement(w,{color:e.carColor})))),n.a.createElement("div",{className:"w-full p-0 my-2 flex flex-wrap md:flex-no-wrap items-start"},n.a.createElement("ul",{className:"p-0 list-none"},n.a.createElement("li",{className:"px-2 py-0 text-md text-gray-600"},"Country"),n.a.createElement("li",{className:"px-2 py-0 text-md text-gray-900"},e.country)),n.a.createElement("div",{class:"w-px h-full mx-2 bg-transparent"}),n.a.createElement("ul",{className:"p-0 list-none"},n.a.createElement("li",{className:"px-2 py-0 text-md text-gray-600"},"Gender"),n.a.createElement("li",{className:"px-2 py-0 text-md text-gray-900 capitalize"},e.gender)),n.a.createElement("div",{class:"w-px h-full mx-2 bg-transparent"}),n.a.createElement("ul",{className:"p-0 list-none"},n.a.createElement("li",{className:"px-2 py-0 text-md text-gray-600"},"Job"),n.a.createElement("li",{className:"px-2 py-0 text-md text-gray-900"},e.jobTitle))),n.a.createElement("div",{className:"w-full p-0 my-2"},n.a.createElement("p",{className:"px-2 py-0 m-0 text-md text-gray-900 truncate"},n.a.createElement("span",{className:"pr-2 py-0 text-md text-gray-600"},"Email:"),e.email)),n.a.createElement("div",{className:"w-full p-0 my-2"},n.a.createElement("p",{className:"px-2 py-0 m-0 text-md text-gray-900 truncate"},n.a.createElement("span",{className:"pr-2 py-0 text-md text-gray-600"},"Bio:"),e.bio))))},S=a(21),k=a.n(S),O=function(e){var t=Object(x.g)(),a=Object(x.f)().push,l={};t.state&&(l=t.state.filter);var c=Object(r.useState)({nextPage:null,prevPage:null}),s=Object(y.a)(c,2),m=s[0],o=s[1],u=Object(r.useState)(null),i=Object(y.a)(u,2),f=i[0],p=i[1],h=Object(r.useState)({fetchStart:!1,fetchSuccess:!1,fetchFail:!1}),E=Object(y.a)(h,2),w=E[0],N=E[1],b=function(e){N({fetchStart:!0,fetchSuccess:!1,fetchFail:!1}),fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)}).then((function(e){return e.json()})).then(function(){var e=Object(g.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(500!==t.status){e.next=4;break}return e.next=3,N({fetchStart:!1,fetchSuccess:!1,fetchFail:!0});case 3:return e.abrupt("return");case 4:if(400!==t.status){e.next=8;break}return e.next=7,N({fetchStart:!1,fetchSuccess:!0,fetchFail:!0});case 7:return e.abrupt("return");case 8:return e.next=10,p(t.data);case 10:return e.next=12,o({nextPage:t.nextPage,prevPage:t.prevPage});case 12:return e.next=14,N({fetchStart:!1,fetchSuccess:!0,fetchFail:!1});case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){N({fetchStart:!1,fetchSuccess:!1,fetchFail:!0})}))};Object(r.useEffect)((function(){document.title="Car Owners",b("https://immense-ravine-06184.herokuapp.com/people?page=1")}),[]);var v=n.a.createElement("div",{className:"w-full flex flex-wrap my-2 p-2 justify-center"},n.a.createElement("span",{className:"bg-gray-200 rounded-full text-center px-2 py-0 text-2xl text-gray-800 mx-2"},"Loading Car Owners"));return w.fetchSuccess&&(v=f&&f.length>0?f.map((function(e){return n.a.createElement(j,{key:String(e.id),firstName:e.first_name,lastName:e.last_name,email:e.email,carModel:e.car_model,carModelYear:e.car_model_year,carColor:e.car_color,country:e.country,gender:e.gender,jobTitle:e.job_title,bio:e.bio})})):n.a.createElement("div",{className:"w-full flex flex-wrap my-2 p-2 justify-center"},n.a.createElement("span",{className:"bg-gray-200 rounded-full text-center px-2 py-0 text-2xl text-gray-800 mx-2"},"There are no car owners that match the selected filter"))),w.fetchFail&&(v=n.a.createElement("div",{className:"w-full flex flex-wrap my-2 p-2 justify-center"},n.a.createElement("span",{className:"bg-gray-200 rounded-full text-center px-2 py-0 text-2xl text-gray-800 mx-2"},"An error occured, please retry"),n.a.createElement("button",{onClick:function(){return b(m.nextPage)},className:"bg-indigo-600 rounded-md text-center px-2 py-0 text-2xl text-gray-100 mx-2"},"Click to retry"))),n.a.createElement("div",{className:"w-full mx-auto p-4"},n.a.createElement("div",{className:"w-full flex flex-no-wrap justify-start items-center mb-4"},n.a.createElement("div",{role:"link",className:"mx-2 flex flex-no-wrap cursor-pointer items-center",onClick:function(){return a("/")}},n.a.createElement("div",{className:"w-8 h-8 p-0 mx-2"},n.a.createElement("img",{className:"w-full",src:k.a,alt:"go home"})),n.a.createElement("h1",{className:"text-gray-900 text-md md:text-2xl mx-auto font-normal"},"Filters")),n.a.createElement("h1",{className:"w-full text-center text-gray-900 text-lg md:text-2xl font-extrabold"},"Car Owners")),n.a.createElement("div",{className:"w-full flex flex-wrap p-4"},v),n.a.createElement("div",{className:"w-full flex flex-wrap p-4 justify-between"},n.a.createElement("button",{onClick:function(){return b(m.prevPage)},className:"bg-indigo-600 rounded text-center p-2 text-2xl text-gray-100 mx-2 ".concat(m.prevPage?"":"opacity-50 cursor-not-allowed")},"Previous Page"),n.a.createElement("button",{onClick:function(){return b(m.nextPage)},className:"bg-indigo-600 rounded text-center p-2 text-2xl text-gray-100 mx-2 ".concat(m.nextPage?"":"opacity-50 cursor-not-allowed")},"Next Page")))},P=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"w-full min-h-full bg-gray-100"},n.a.createElement(x.c,null,n.a.createElement(x.a,{exact:!0,path:"/",render:function(){return n.a.createElement(b,null)}}),n.a.createElement(x.a,{path:"/people",render:function(){return n.a.createElement(O,null)}})))}}]),a}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(s.a,null,n.a.createElement(P,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.10e6c9a4.chunk.js.map