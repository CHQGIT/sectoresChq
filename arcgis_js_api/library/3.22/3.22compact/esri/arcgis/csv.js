// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.
//>>built
define("esri/arcgis/csv","dojo/_base/lang dojo/_base/array dojo/_base/Deferred dojo/sniff dojo/number dojox/data/CsvStore ../kernel ../config ../request ../SpatialReference ../geometry/jsonUtils ../geometry/webMercatorUtils".split(" "),function(l,c,A,B,N,O,P,C,Q,t,D,E){function F(a){var b=0,d="";c.forEach([","," ",";","|","\t"],function(c){var g=a.split(c).length;g>b&&(b=g,d=c)});return d}function G(a,b){if(!a||"[object Date]"!==Object.prototype.toString.call(a)||isNaN(a.getTime()))return!1;var d=
!0;if(B("chrome")&&/\d+\W*$/.test(b)){if(b.match(/[^0-9a-zA-Z\s]/))return!1;var c=b.match(/[a-zA-Z]{2,}/);if(c){for(var d=!1,g=0,k=c.length,m=/^((jan(uary)?)|(feb(ruary)?)|(mar(ch)?)|(apr(il)?)|(may)|(jun(e)?)|(jul(y)?)|(aug(ust)?)|(sep(tember)?)|(oct(ober)?)|(nov(ember)?)|(dec(ember)?)|(am)|(pm)|(gmt)|(utc))$/i;!d&&g<=k&&!(d=!m.test(c[g]));)g++;d=!d}}return d}function H(a,b,d){var f=a.indexOf("\n"),f=l.trim(a.substr(0,f)),g=b.columnDelimiter;g||(g=F(f));var k=new O({data:a,separator:g});k.fetch({onComplete:function(a,
g){var e=0,f={layerDefinition:b.layerDefinition,featureSet:{features:[],geometryType:"esriGeometryPoint"}},y=f.layerDefinition.objectIdField,m=f.layerDefinition.fields;y||c.some(m,function(a){return"esriFieldTypeOID"===a.type?(y=a.name,!0):!1})||(m.push({name:"__OBJECTID",alias:"__OBJECTID",type:"esriFieldTypeOID",editable:!1}),y="__OBJECTID");var h,n,q=k._attributes,t=[],u=[];c.forEach(m,function(a){"esriFieldTypeDate"===a.type?t.push(a.name):"esriFieldTypeDouble"!==a.type&&"esriFieldTypeInteger"!==
a.type||u.push(a.name)});b.locationInfo&&"coordinates"===b.locationInfo.locationType?(h=b.locationInfo.latitudeFieldName,n=b.locationInfo.longitudeFieldName):c.forEach(q,function(a){var e;e=c.indexOf(I,a.toLowerCase());-1!==e&&(h=a);e=c.indexOf(J,a.toLowerCase());-1!==e&&(n=a)});if(h&&n){-1===c.indexOf(u,h)&&u.push(h);-1===c.indexOf(u,n)&&u.push(n);var r;l.isArray(b.outFields)&&-1===c.indexOf(b.outFields,"*")&&(r=b.outFields);c.forEach(q,function(a){c.some(m,function(e){return a===e.name})||m.push({name:a,
alias:a,type:a===h||a===n?"esriFieldTypeDouble":"esriFieldTypeString"})});var q=0,x=a.length;for(q;q<x;q++){var v=a[q],w=k.getAttributes(v),p={};c.forEach(w,function(a){if(a&&(a===h||a===n||!r||-1<c.indexOf(r,a))){var e=a;0===a.length&&c.forEach(m,function(e,b){e.name==="attribute_"+(b-1)&&(a="attribute_"+(b-1))});if(-1<c.indexOf(t,a)){var e=k.getValue(v,e),b=new Date(e);p[a]=G(b,e)?b.getTime():null}else-1<c.indexOf(u,a)?(b=N.parse(k.getValue(v,e)),a!==h&&a!==n||!(isNaN(b)||181<Math.abs(b))||(b=parseFloat(k.getValue(v,
e))),isNaN(b)?p[a]=null:p[a]=b):p[a]=k.getValue(v,e)}});p[y]=e;e++;var w=p[h],z=p[n];null==z||null==w||isNaN(w)||isNaN(z)||(r&&-1===c.indexOf(r,h)&&delete p[h],r&&-1===c.indexOf(r,n)&&delete p[n],f.featureSet.features.push({geometry:{x:z,y:w,spatialReference:{wkid:4326}},attributes:p}))}f.layerDefinition.name="csv";d&&d(f)}else setTimeout(function(){console.error("File does not seem to contain fields with point coordinates.")},1),d&&d(null,Error("File does not seem to contain fields with point coordinates."))},
onError:function(a){console.error("Error fetching items from CSV store: ",a);d&&d(null,a)}});return!0}function x(a,b,d,f,g,k){0===a.length&&g(null);var m=D.getGeometryType(b),h=[];c.forEach(a,function(a){a=new m(a);a.spatialReference=d;h.push(a)},this);b=[102113,102100,3857];d.wkid&&4326===d.wkid&&f.wkid&&-1<c.indexOf(b,f.wkid)?(c.forEach(h,function(a){a.xmin?(a.xmin=Math.max(a.xmin,-180),a.xmax=Math.min(a.xmax,180),a.ymin=Math.max(a.ymin,-89.99),a.ymax=Math.min(a.ymax,89.99)):a.rings?c.forEach(a.rings,
function(a){c.forEach(a,function(a){a[0]=Math.min(Math.max(a[0],-180),180);a[1]=Math.min(Math.max(a[1],-89.99),89.99)},this)},this):a.paths?c.forEach(a.paths,function(a){c.forEach(a,function(a){a[0]=Math.min(Math.max(a[0],-180),180);a[1]=Math.min(Math.max(a[1],-89.99),89.99)},this)},this):a.x&&(a.x=Math.min(Math.max(a.x,-180),180),a.y=Math.min(Math.max(a.y,-89.99),89.99))},this),a=[],c.forEach(h,function(b){b=E.geographicToWebMercator(b);102100!==f.wkid&&(b.spatialReference=f);a.push(b.toJson())},
this),g(a)):null!==d.wkid&&-1<c.indexOf(b,d.wkid)&&null!==f.wkid&&4326===f.wkid?(a=[],c.forEach(h,function(b){a.push(E.webMercatorToGeographic(b).toJson())},this),g(a)):(b=function(b,d){b&&b.length===a.length?(a=[],c.forEach(b,function(b){b&&(b.rings&&0<b.rings.length&&0<b.rings[0].length&&0<b.rings[0][0].length&&!isNaN(b.rings[0][0][0])&&!isNaN(b.rings[0][0][1])||b.paths&&0<b.paths.length&&0<b.paths[0].length&&0<b.paths[0][0].length&&!isNaN(b.paths[0][0][0])&&!isNaN(b.paths[0][0][1])||b.xmin&&!isNaN(b.xmin)&&
b.ymin&&!isNaN(b.ymin)||b.x&&!isNaN(b.x)&&b.y&&!isNaN(b.y))?a.push(b.toJson()):a.push(null)},this),g(a)):k(b,d)},C.defaults.geometryService?C.defaults.geometryService.project(h,f,l.hitch(this,b),k):g(null))}function K(a,b){var d=[102113,102100,3857];return a&&b&&a.wkid===b.wkid&&a.wkt===b.wkt||a&&b&&a.wkid&&b.wkid&&-1<c.indexOf(d,a.wkid)&&-1<c.indexOf(d,b.wkid)?!0:!1}function L(a,b,d,f){if(a.featureSet&&0!==a.featureSet.features.length)if(K(d,b))f(a);else{var g,k=function(b){var d=[];c.forEach(a.featureSet.features,
function(a,c){b[c]&&(a.geometry=b[c],d.push(a))},this);f(a)},m=function(b,c){console.error("error projecting featureSet ("+a.layerDefinition.name+"). Final try.");f(a)},h=function(c,f){console.error("error projecting featureSet ("+a.layerDefinition.name+"). Try one more time.");x(g,a.featureSet.geometryType,b,d,l.hitch(this,k),l.hitch(this,m))};a.featureSet.features&&0<a.featureSet.features.length?(g=[],c.forEach(a.featureSet.features,function(b){if(b.geometry.toJson)g.push(b.geometry);else{var c=
D.getGeometryType(a.featureSet.geometryType);g.push(new c(b.geometry))}}),b.toJson||(b=new t(b)),d.toJson||(d=new t(d)),x(g,a.featureSet.geometryType,b,d,l.hitch(this,k),l.hitch(this,h))):f(a)}}var I="lat latitude y ycenter latitude83 latdecdeg point-y lat_dd".split(" "),J="lon lng long longitude x xcenter longitude83 longdecdeg point-x long_dd".split(" "),M={latFieldStrings:I,longFieldStrings:J,buildCSVFeatureCollection:function(a){var b=new A,c=function(a,c){c?b.errback(c):b.callback(a)},f={url:a.url,
handleAs:"text",load:function(b){H(b,a,l.hitch(this,c))},error:function(a){b.errback(a);console.error("error: "+a)}};-1<a.url.indexOf("arcgis.com")&&-1<a.url.indexOf("/content/items")&&-1<a.url.indexOf("/data")&&(f.headers={"Content-Type":""});Q(f,{usePost:!1});return b},projectFeatureCollection:function(a,b,c){var d=new A;c||(c=new t({wkid:4326}));L(a,c,b,l.hitch(this,function(a){d.callback(a)}));return d},generateDefaultPopupInfo:function(a){var b={esriFieldTypeDouble:1,esriFieldTypeSingle:1},d=
{esriFieldTypeInteger:1,esriFieldTypeSmallInteger:1},f={esriFieldTypeDate:1},g=null;a=c.map(a.layerDefinition.fields,l.hitch(this,function(a){"NAME"===a.name.toUpperCase()&&(g=a.name);var c="esriFieldTypeOID"!==a.type&&"esriFieldTypeGlobalID"!==a.type&&"esriFieldTypeGeometry"!==a.type,h=null;if(c){var e=a.name.toLowerCase();if(-1<",stretched value,fnode_,tnode_,lpoly_,rpoly_,poly_,subclass,subclass_,rings_ok,rings_nok,".indexOf(","+e+",")||-1<e.indexOf("area")||-1<e.indexOf("length")||-1<e.indexOf("shape")||
-1<e.indexOf("perimeter")||-1<e.indexOf("objectid")||e.indexOf("_")===e.length-1||e.indexOf("_i")===e.length-2&&1<e.length)c=!1;a.type in d?h={places:0,digitSeparator:!0}:a.type in b?h={places:2,digitSeparator:!0}:a.type in f&&(h={dateFormat:"shortDateShortTime"})}return l.mixin({},{fieldName:a.name,label:a.alias,isEditable:!0,tooltip:"",visible:c,format:h,stringFieldOption:"textbox"})}));return{title:g?"{"+g+"}":"",fieldInfos:a,description:null,showAttachments:!1,mediaInfos:[]}},_getSeparator:F,
_isValidDate:G,_processCsvData:H,_projectGeometries:x,_sameSpatialReference:K,_projectFeatureSet:L};B("extend-esri")&&l.setObject("arcgis.csv",M,P);return M});