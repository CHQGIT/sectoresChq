// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/views/2d/tiling/TileQueue",["require","exports","../../../core/QueueProcessor"],function(r,t,l){function q(b,a){b.length=0;a.forEach(function(a){return b.push(a)});return b}var m=new Set,f=[],d=new Map;return function(){function b(a){var b=this;this.tileInfoView=a.tileInfoView;this._queue=new l({concurrency:6,process:a.process,peeker:function(a){return b._peek(a)}})}Object.defineProperty(b.prototype,"length",{get:function(){return this._queue.length},enumerable:!0,
configurable:!0});b.prototype.clear=function(){this._queue.clear()};b.prototype.find=function(a,b){return this._queue.find(a)};b.prototype.has=function(a){return this._queue.has(a)};b.prototype.pause=function(){return this._queue.pause()};b.prototype.push=function(a){return this._queue.push(a)};b.prototype.reset=function(){return this._queue.reset()};b.prototype.resume=function(){return this._queue.resume()};b.prototype._peek=function(a){var b=this;if(!this.state)return a[0];var l=this.tileInfoView,
n=Number.NEGATIVE_INFINITY,p=Number.POSITIVE_INFINITY;a.forEach(function(a){var e=b.tileInfoView.getTileScale(a);d.has(e)||(d.set(e,[]),n=Math.max(e,n),p=Math.min(e,p));d.get(e).push(a);m.add(e)});var c=this.state.scale;d.has(c)||(q(f,m),f.sort(),c=f.reduce(function(a,b,d,f){return Math.abs(b-c)<Math.abs(a-c)?b:a},f[0]));c=Math.min(c,n);c=Math.max(c,p);a=d.get(c);var g=l.getClosestInfoForScale(c),h=g.getColumnForX(this.state.center[0]),k=g.getRowForY(this.state.center[1]);a.sort(function(a,b){var c=
g.denormalizeCol(a.col,a.world),d=g.denormalizeCol(b.col,b.world);return Math.sqrt((h-c)*(h-c)+(k-a.row)*(k-a.row))-Math.sqrt((h-d)*(h-d)+(k-b.row)*(k-b.row))});m.clear();d.clear();return a[0]};return b}()});