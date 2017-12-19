// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.
//>>built
(function(v){function u(a,b){var c=a.length;if(3>c)return 0;b||(b=a[0]);for(var d=b[0],h=b[1],f=a[c-1],c=f[0]-d,e=f[1]-h,l=0,g=0,n=a.length;g<n;g++)var f=a[g],m=f[0]-d,f=f[1]-h,l=l+(m*e-c*f),c=m,e=f;return l/2}var k={};k.calculateRingArea=u;k.calculateRingCentroid=function(a,b){var c=a.length;if(!c)return null;b||(b=a[0]);var d=b[0],h=b[1],f=0,e=0,l=0;if(2<c)for(var g=a[c-1],c=g[0]-d,n=g[1]-h,m=0,q=a.length;m<q;m++)var g=a[m],k=g[0]-d,g=g[1]-h,t=k*n-c*g,f=f+t,e=e+(c+k)*t,l=l+(n+g)*t,c=k,n=g;0==f?
e=l=0:(e/=3*f,l/=3*f);return[d+e,h+l]};k.INTERIOR=1;k.EXTERIOR=-1;k.BOUNDARY=0;k.createRingInfo=function(a,b){return new x(a,b)};k.createSegmentCoordinates=function(a){return new p(null,0,0,a)};var r=function(a){return function(){for(var b in a){var c=a[b];this[b]="function"===typeof c?c.bind(this):c}a.ctr.bind(this).apply(this,arguments)}},y=r({xmin:null,ymin:null,xmax:null,ymax:null,spatialReference:null,ctr:function(a,b,c,d,h){this.xmin=a;this.ymin=b;this.xmax=c;this.ymax=d;this.spatialReference=
h},printOut:function(){console.log([this.xmin,this.xmax,this.ymin,this.ymax].join(" "))}}),x=r({ring:null,origin:null,area:0,clockwise:!1,extent:null,_coords:null,ctr:function(a,b){this.ring=a;this.origin=b;var c=this.ring.length-1;if(!(0>c)){if(!c)c++;else if(this.ring[c][0]!=this.ring[0][0]||this.ring[c][1]!=this.ring[0][1])c++,this.ring.push(this.ring[0].slice());var d=0,h=0,f=!b;this.extent=new y(this.ring[0][0],this.ring[0][1],this.ring[0][0],this.ring[0][1]);for(var e=0;e<c;e++){var l=this.ring[e],
g=l[0];f&&(d+=g);g<this.extent.xmin?this.extent.xmin=g:g>this.extent.xmax&&(this.extent.xmax=g);g=l[1];f&&(h+=g);g<this.extent.ymin?this.extent.ymin=g:g>this.extent.ymax&&(this.extent.ymax=g)}f&&(this.origin=[d/c,h/c]);this.area=u(this.ring,this.origin);0>=this.area?this.area=-this.area:this.clockwise=!0}},setDirection:function(a){this.clockwise==!a&&(this.ring.reverse(),this.clockwise=!this.clockwise,this._coords=null)},testPoint:function(a,b){var c=this.getRingCoordinates(b).testPoint(a[0]-this.origin[0],
a[1]-this.origin[1]);return this.clockwise?c:-c},generalize:function(a,b,c){b=b||.75;for(var d=this.getRingCoordinates(a),h=d.xs,f=d.ys,e=a,l=h[0],g=f[0],n=h.length-1,m=h[n],k=f[n],w=this,t=this.clockwise?function(a){w.ring.splice(a,1)}:function(a){w.ring.splice(-a-1,1)};0<n--&&3<h.length;){var p=h[n],r=f[n],e=e*b;d.setSegment(l,g,p,r)&&d.testPointOnTouch(m,k,e)?(h.splice(n+1,1),f.splice(n+1,1),t(n+1),m=p,k=r):(l=m,g=k,m=p,k=r,e=a)}this._coords=null;c&&(this.area=u(this.ring,this.origin),this.clockwise||
(this.area=-this.area))},getRingCoordinates:function(a,b){if(b)return new p(this.ring,b[0],b[1],a,this.extent,this.clockwise);this._coords&&this._coords.eps==a||(this._coords=new p(this.ring,this.origin[0],this.origin[1],a,this.extent,this.clockwise));return this._coords}});k.RingInfo=x;var p=r({xs:null,ys:null,extent:null,eps:NaN,_sx:null,_dx:null,_sy:null,_dy:null,ctr:function(a,b,c,d,h,f){this.xs=[];this.ys=[];a||(a=[]);void 0===b&&(b=0);void 0===c&&(c=0);void 0===d&&(d=0);this.eps=Math.max(d,
0);h&&(d=this.eps/2,this.extent=new y(h.xmin-b-d,h.ymin-c-d,h.xmax-b+d,h.ymax-c+d));var e=a.length-1;if(!(0>e))for(h=e?a[e][0]==a[0][0]&&a[e][1]==a[0][1]?e:e+1:1,d=f?1:-1,f=f?0:e;h--;f+=d)e=a[f],this.xs.push(e[0]-b),this.ys.push(e[1]-c)},testPoint:function(a,b){if(!this._pointBelongsToExtent(a,b))return-1;var c=this.xs.length,d=!1;this._dy=this.ys[0]-this.ys[c-1];if(0==this._dy){for(d=c;1<d--&&(this._dy=this.ys[d]-this.ys[d-1],0==this._dy););if(0==this._dy)return 0}for(var d=0<this._dy,h=0,f=this.xs[0],
e=this.ys[0],l,g,k=1;k<=c;k++,f=l,e=g)if(g=k==c?0:k,l=this.xs[g],g=this.ys[g],this.setSegment(f,e,l,g)){var m=e-b,q=g-b,p=!1;0>m&&(m=-m,q=-q,p=!0);if(!(m>this.eps&&q>this.eps)){if(this.testPointOnTouch(a,b,this.eps))return 0;0==m?0!==q&&(0>q&&(d=!d),a<f&&d&&h++):0==q?d=p:0>q&&a<f+this._dx/this._dy*(b-e)&&h++}}return 0!=h%2?1:-1},testPointOnTouch:function(a,b,c){var d=this.findIntersectionDelta(a,b,a-this._dy,b+this._dx);a=this._sx+d*this._dx-a;b=this._sy+d*this._dy-b;return a*a+b*b<=c*c},_pointBelongsToExtent:function(a,
b){return a>=this.extent.xmin&&a<=this.extent.xmax&&b>=this.extent.ymin&&b<=this.extent.ymax},setSegment:function(a,b,c,d){this._sx=a;this._dx=c-a;this._sy=b;this._dy=d-b;return 0!=this._dx||0!=this._dy},findIntersectionDelta:function(a,b,c,d,h){void 0===h&&(h=!0);c-=a;d-=b;var f=this._dy*c-this._dx*d;if(0==f)return 0;var e=a-this._sx,k=b-this._sy,g=k*c-e*d,e=h?0:k*this._dx-e*this._dy;0>f&&(f=-f,g=-g,e=-e);return h||(e=0>e?0:e<f?e/f:1,this.testPointOnTouch(a+e*c,b+e*d,this.eps))?0>=g?0:g<f?g/f:1:
-1},addPointOfSegmentAt:function(a){this.xs.push(this._sx+a*this._dx);this.ys.push(this._sy+a*this._dy)}});k.RingCoordinates=p;v.document?define("esri/dijit/geoenrichment/utils/GeometryUtil_base",function(){return k}):v.GeometryUtil_base=k})(this);