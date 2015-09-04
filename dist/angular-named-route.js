angular.module("ngNamedRoute",["ngRoute"]),angular.module("ngNamedRoute").directive("namedRoute",["namedRouteService",function(e){"use strict";return{restrict:"A",scope:{name:"=namedRoute",args:"=routeParams"},link:function(r,n){function t(){void 0!==r.name&&n.attr("href",e.reverse(r.name,r.args))}r.$watch("name",t),r.$watch("args",t,!0)}}}]),angular.module("ngNamedRoute").provider("namedRouteService",function(){"use strict";function e(e,t){var a=-1;if(!r.hasOwnProperty(e))throw new Error("Route name ["+e+"] not known.");return n.urlPrefix+r[e].path.replace(/(:\w+[\*\?]{0,1})/g,function(e,r){a++,r=r.substring(1);var n="?"===r[r.length-1]?"":"?";return("*"===r[r.length-1]||"?"===r[r.length-1])&&(r=r.substring(0,r.length-1)),angular.isArray(t)?a<t.length?t[a]:n:angular.isObject(t)?t.hasOwnProperty(r)?t[r]:n:a?"?":void 0===t?n:t})}var r={},n={urlPrefix:""};this.setUrlPrefix=function(e){n.urlPrefix=e},this.$get=["$route","$location",function(n,t){return Object.keys(n.routes).forEach(function(e){var t=n.routes[e];if(t.name){if(r.hasOwnProperty(t.name))throw new Error("Route name ["+t.name+"] defined more than once.");r[t.name]={path:e,route:t}}}),{reverse:e,open:function(r,n){t.path(e(r,n))}}}]});