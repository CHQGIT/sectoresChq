// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.
//>>built
define("esri/dijit/Popup","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/connect dojo/_base/kernel dojo/has dojo/window dojo/Stateful dojo/query dojo/dom dojo/dom-attr dojo/dom-class dojo/dom-construct dojo/dom-geometry dojo/dom-style dijit/registry ../kernel ../lang ../domUtils ../geometry/Polyline ../geometry/Polygon ../geometry/Multipoint ../geometry/normalizeUtils ../InfoWindowBase ../PopupBase dojo/i18n!../nls/jsapi dojo/NodeList-dom".split(" "),function(t,u,q,g,e,E,G,H,P,F,
z,f,A,D,m,I,J,w,K,Q,R,L,x,M,N,O){t=t([M,N,H],{declaredClass:"esri.dijit.Popup",offsetX:3,offsetY:3,zoomFactor:4,marginLeft:25,marginTop:25,highlight:!0,pagingControls:!0,pagingInfo:!0,keepHighlightOnHide:!1,popupWindow:!0,titleInBody:!0,anchor:"auto",visibleWhenEmpty:!0,hideDelay:1E3,location:null,constructor:function(a,c){this.initialize();u.mixin(this,a);this.domNode=F.byId(c);var b=this._nls=u.mixin({},O.widgets.popup),d=this.domNode;f.add(d,"esriPopup");(this._isRTL=!D.isBodyLtr())&&m.set(d,"direction",
"rtl");z.set(d,"innerHTML","\x3cdiv class\x3d'esriPopupWrapper' style\x3d'position: absolute;'\x3e\x3cdiv class\x3d'sizer'\x3e\x3cdiv class\x3d'titlePane'\x3e\x3cdiv class\x3d'spinner hidden' title\x3d'"+b.NLS_searching+"...'\x3e\x3c/div\x3e\x3cdiv class\x3d'title'\x3e\x3c/div\x3e\x3cdiv class\x3d'titleButton prev hidden' title\x3d'"+b.NLS_prevFeature+"'\x3e\x3c/div\x3e\x3cdiv class\x3d'titleButton next hidden' title\x3d'"+b.NLS_nextFeature+"'\x3e\x3c/div\x3e\x3cdiv class\x3d'titleButton maximize' title\x3d'"+
b.NLS_maximize+"'\x3e\x3c/div\x3e\x3cdiv class\x3d'titleButton close' title\x3d'"+b.NLS_close+"'\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d'sizer content'\x3e\x3cdiv class\x3d'contentPane'\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d'sizer'\x3e\x3cdiv class\x3d'actionsPane'\x3e\x3cdiv class\x3d'actionList hidden'\x3e\x3ca title\x3d'"+b.NLS_zoomTo+"' class\x3d'action zoomTo' href\x3d'javascript:void(0);'\x3e\x3cspan\x3e"+b.NLS_zoomTo+"\x3c/span\x3e\x3c/a\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d'pointer hidden'\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d'outerPointer hidden'\x3e\x3c/div\x3e");
this._sizers=e.query(".sizer",d);b=e.query(".titlePane",d)[0];F.setSelectable(b,!1);this._title=e.query(".title",b)[0];this._prevFeatureButton=e.query(".prev",b)[0];this._nextFeatureButton=e.query(".next",b)[0];this._maxButton=e.query(".maximize",b)[0];this._spinner=e.query(".spinner",b)[0];this._contentPane=e.query(".contentPane",d)[0];this._positioner=e.query(".esriPopupWrapper",d)[0];this._pointer=e.query(".pointer",d)[0];this._outerPointer=e.query(".outerPointer",d)[0];this._actionList=e.query(".actionsPane .actionList",
d)[0];this._eventConnections=[g.connect(e.query(".close",b)[0],"onclick",this,this.hide),g.connect(this._prevFeatureButton,"onclick",this,this.selectPrevious),g.connect(this._nextFeatureButton,"onclick",this,this.selectNext),g.connect(this._maxButton,"onclick",this,this._toggleSize),g.connect(e.query(".zoomTo",this._actionList)[0],"onclick",this,this._zoomToFeature),g.connect(this,"onClearFeatures",this,this._featuresCleared),g.connect(this,"onSelectionChange",this,this._featureSelected),g.connect(this,
"onDfdComplete",this,this._updateUI)];E("esri-touch")&&(d=K.setScrollable(this._contentPane),this._eventConnections.push(d[0],d[1]));this._toggleVisibility(!1)},onMaximize:function(){},onRestore:function(){},setMap:function(a){this.inherited(arguments);A.place(this.domNode,a.root);this.highlight&&this.enableHighlight(a);this._maxHeight=m.get(this._contentPane,"maxHeight")},unsetMap:function(){this.disableHighlight(this.map);this.inherited(arguments)},setTitle:function(a){this.popupWindow&&(w.isDefined(a)&&
""!==a||(a="\x26nbsp;"),this.destroyDijits(this._title),this.place(a,this._title),this.isShowing&&(this.startupDijits(this._title),this.reposition()))},setContent:function(a){this.popupWindow&&(w.isDefined(a)&&""!==a||(a="\x26nbsp;"),this.destroyDijits(this._contentPane),this.place(a,this._contentPane),this.isShowing&&(this.startupDijits(this._contentPane),this.reposition()))},show:function(a,c){if(this.popupWindow)if(this._delayHide=!1,a){var b=this.map,d;a.spatialReference?(this.location=a,d=b.toScreen(a)):
(this.location=b.toMap(a),d=a);var r=b._getFrameWidth();if(-1!==r&&(d.x%=r,0>d.x&&(d.x+=r),b.width>r))for(b=(b.width-r)/2;d.x<b;)d.x+=r;this._maximized?this.restore():this._setPosition(d);c&&c.closestFirst&&this.showClosestFirst(this.location);this.isShowing||(this._toggleVisibility(!0),this._followMap(),this.startupDijits(this._title),this.startupDijits(this._contentPane),this.reposition(),this.showHighlight(),this.onShow())}else this._toggleVisibility(!0)},hide:function(){this.isShowing&&(this._toggleVisibility(!1),
this._unfollowMap(),this.keepHighlightOnHide||this.hideHighlight(),this.onHide())},resize:function(a,c){this.popupWindow&&(this._sizers.style({width:a+"px"}),m.set(this._contentPane,"maxHeight",c+"px"),this._maxHeight=c,this.isShowing&&this.reposition())},reposition:function(){this.popupWindow&&this.map&&this.location&&!this._maximized&&this.isShowing&&this._setPosition(this.map.toScreen(this.location))},addActions:function(a){return q.map(a,function(a){var b=A.create("a",{href:"javascript:void(0);",
className:"action "+a.className,title:a.title,innerHTML:a.title},this._actionList);g.connect(b,"onclick",a.callback);return{action:a,node:b}},this)},removeActions:function(a){q.forEach(a,function(a){A.destroy(a.node)})},getCurrentAnchor:function(){return this._anchor},maximize:function(){var a=this.map;if(a&&!this._maximized&&this.popupWindow){this._maximized=!0;var c=this._maxButton;f.remove(c,"maximize");f.add(c,"restore");z.set(c,"title",this._nls.NLS_restore);var c=this.marginLeft,b=this.marginTop,
d=a.width-2*c,a=a.height-2*b;m.set(this.domNode,{left:this._isRTL?null:c+"px",right:this._isRTL?c+"px":null,top:b+"px",bottom:null});m.set(this._positioner,{left:null,right:null,top:null,bottom:null});this._savedWidth=m.get(this._sizers[0],"width");this._savedHeight=m.get(this._contentPane,"maxHeight");this._sizers.style({width:d+"px"});m.set(this._contentPane,{maxHeight:a-65+"px",height:a-65+"px"});this._showPointer("");this._unfollowMap();f.add(this.domNode,"esriPopupMaximized");this.onMaximize()}},
restore:function(){if(this.map&&this._maximized&&this.popupWindow){this._maximized=!1;var a=this._maxButton;f.remove(a,"restore");f.add(a,"maximize");z.set(a,"title",this._nls.NLS_maximize);m.set(this._contentPane,"height",null);this.resize(this._savedWidth,this._savedHeight);this._savedWidth=this._savedHeight=null;this.show(this.location);this._followMap();f.remove(this.domNode,"esriPopupMaximized");this.onRestore()}},startup:function(){},destroy:function(){this.map&&this.unsetMap();this.cleanup();
this.isShowing&&this.hide();this.destroyDijits(this._title);this.destroyDijits(this._content);q.forEach(this._eventConnections,g.disconnect);A.destroy(this.domNode);this._sizers=this._contentPane=this._actionList=this._positioner=this._pointer=this._outerPointer=this._title=this._prevFeatureButton=this._nextFeatureButton=this._spinner=this._eventConnections=this._pagerScope=this._targetLocation=this._nls=this._maxButton=null},selectNext:function(){this.select(this.selectedIndex+1)},selectPrevious:function(){this.select(this.selectedIndex-
1)},setFeatures:function(a,c){this._transientAnchor=c&&c.anchor;this.inherited(arguments);this._updateUI()},clearFeatures:function(a){a||(this._transientAnchor=null);this.inherited(arguments)},postscript:null,_highlightSetter:function(a){var c=this.highlight,b=this.map;this.highlight=a;if(b&&a!==c)if(a){if(this.enableHighlight(b),a=this.features&&this.features[this.selectedIndex])this.updateHighlight(b,a),this.showHighlight()}else this.disableHighlight(b)},_pagingControlsSetter:function(a){var c=
this.pagingControls,b=this.map;this.pagingControls=a;b&&a!==c&&this._updatePagingControls()},_pagingInfoSetter:function(a){var c=this.pagingInfo,b=this.map;this.pagingInfo=a;b&&a!==c&&this.features&&this.features.length&&this._updatePagingInfo()},_popupWindowSetter:function(a){var c=this.popupWindow,b=this.map;this.popupWindow=a;b&&a!==c&&(a?(this._updateUI(),this._updateWindow()):(this.hide(),this.showHighlight()))},_anchorSetter:function(a){var c=this.anchor;this.anchor=a;this.map&&a!==c&&this.reposition()},
_featuresCleared:function(){this.setTitle("\x26nbsp;");this.setContent("\x26nbsp;");this._setPagerCallbacks(this);this._updateUI();this.hideHighlight()},_featureSelected:function(){this._updateUI();this._updateWindow()},_updateWindow:function(){var a=this.selectedIndex;if(0<=a){var c=this.features[a].getContent(),b;!this.titleInBody&&c&&u.isString(c.id)&&(b=I.byId(c.id))&&b.set&&/_PopupRenderer/.test(b.declaredClass)&&b.set("showTitle",!1);this.setContent(c);this.updateHighlight(this.map,this.features[a]);
this.showHighlight()}},_toggleVisibility:function(a){this._setVisibility(a);this.isShowing=a},_setVisibility:function(a){f.toggle(this.domNode,"esriPopupVisible",a);f.toggle(this.domNode,"esriPopupHidden",!a)},_waitAndHide:function(a){var c=this;this._delayHide=!0;setTimeout(function(){c._delayHide&&(c._delayHide=!1,c.hide())},a)},_followMap:function(){this._unfollowMap();var a=this.map;this._handles=[g.connect(a,"onPanStart",this,this._onPanStart),g.connect(a,"onPan",this,this._onPan),g.connect(a,
"onZoomStart",this,this._onZoomStart),g.connect(a,"onExtentChange",this,this._onExtentChange)]},_unfollowMap:function(){var a=this._handles;a&&(q.forEach(a,g.disconnect),this._handles=null)},_onPanStart:function(){var a=this.domNode.style;this._panOrigin={left:a.left,top:a.top,right:a.right,bottom:a.bottom}},_onPan:function(a,c){var b=this._panOrigin,d=c.x,r=c.y,f=b.left,g=b.top,e=b.right,b=b.bottom;f&&(f=parseFloat(f)+d+"px");g&&(g=parseFloat(g)+r+"px");e&&(e=parseFloat(e)-d+"px");b&&(b=parseFloat(b)-
r+"px");m.set(this.domNode,{left:f,top:g,right:e,bottom:b})},_onZoomStart:function(){this._setVisibility(!1)},_onExtentChange:function(a,c,b){b&&(this._setVisibility(!0),this.show(this._targetLocation||this.location));this._targetLocation=null},_toggleSize:function(){this._maximized?this.restore():this.maximize()},_getTargetAnchor:function(){return this._transientAnchor||this.anchor},_setPosition:function(a){var c=a.x,b=a.y;a=this.offsetX||0;var d=this.offsetY||0,f=0,g=0,e=D.position(this.map.container,
!0),q=e.w,t=e.h,k="Left",l="bottom",n="right",p="top",v=D.getContentBox(this._positioner),u=v.w/2,A=v.h/2,y=m.get(this._sizers[0],"height")+this._maxHeight+m.get(this._sizers[2],"height"),z=y/2,w=0,x=0,B=c,C=b,h=this._getTargetAnchor().toLowerCase();if("auto"===h){if(h=G.getBox)h=h(),w=Math.max(h.l,e.x),q=Math.min(h.l+h.w,e.x+e.w),x=Math.max(h.t,e.y),t=Math.min(h.t+h.h,e.y+e.h),B+=e.x,C+=e.y;e=C-x>=y;y=t-C>=y;h=q-B>=v.w;v=B-w>=v.w;C-x>z&&t-C>=z&&(h?(l="",k="Left",p="",n="right"):v&&(l="",k="Right",
p="",n="left"));k&&l&&B-w>u&&q-B>=u&&(e?(k="",l="bottom",n="",p="top"):y&&(k="",l="top",n="",p="bottom"));k&&l&&(h&&e?(k="Left",l="bottom",n="right",p="top"):h&&y?(k="Left",l="top",n="right",p="bottom"):v&&y?(k="Right",l="top",n="left",p="bottom"):v&&e&&(k="Right",l="bottom",n="left",p="top"));this._anchor=p&&n?p+"-"+n:p||n}else l=k="",-1!==h.indexOf("top")?l="bottom":-1!==h.indexOf("bottom")&&(l="top"),-1!==h.indexOf("left")?k="Right":-1!==h.indexOf("right")&&(k="Left"),this._anchor=this._getTargetAnchor();
n=l+k;switch(n){case "top":case "bottom":g=14;break;case "Left":case "Right":f=13;break;case "topLeft":case "topRight":case "bottomLeft":case "bottomRight":g=14,f=-16}m.set(this.domNode,{left:c+"px",top:b+"px",right:null,bottom:null});c={left:null,right:null,top:null,bottom:null};k?c[k.toLowerCase()]=f+a+"px":c.left=-u+"px";l?c[l]=g+d+"px":c.top=-A+"px";m.set(this._positioner,c);this._showPointer(n)},_showPointer:function(a){f.remove(this._pointer,"top bottom right left topLeft topRight bottomRight bottomLeft hidden".split(" "));
f.remove(this._outerPointer,["right","left","hidden"]);"Right"===a||"Left"===a?(a=a.toLowerCase(),f.add(this._outerPointer,a)):f.add(this._pointer,a)},_setPagerCallbacks:function(a,c,b){if(this.pagingControls&&(a!==this||this._pagerScope&&this._pagerScope!==this)&&a!==this._pagerScope){this._pagerScope=a;a===this&&(c=this.selectPrevious,b=this.selectNext);var d=this._eventConnections;g.disconnect(d[1]);g.disconnect(d[2]);c&&(d[1]=g.connect(this._prevFeatureButton,"onclick",a,c));b&&(d[2]=g.connect(this._nextFeatureButton,
"onclick",a,b))}},_getLocation:function(a){var c,b,d=a&&a.geometry;if(d)switch(d.type){case "point":c=d;a.isAggregate()&&(a=a.getChildGraphics(),b=a[0],a=(b=b.geometry&&b.geometry.spatialReference)&&new L({points:q.map(a,function(a){a=a.geometry;return[a.x,a.y]}),spatialReference:b.toJson()}),b=x.getDenormalizedExtent(a));break;case "multipoint":c=d.getPoint(0);b=x.getDenormalizedExtent(d);break;case "polyline":case "polygon":c=d.getPoint(0,0),b=x.getDenormalizedExtent(d)}return[c,b]},_zoomToFeature:function(a){a.preventDefault();
var c=this.features,b=this.selectedIndex;a=this.map;if(c)if(b=this._getLocation(c[b]),c=b[0],b=b[1],c||(c=this.location),b&&b.intersects(this.location)||(this.location=c),b&&b.getWidth()&&b.getHeight())a.setExtent(b,!0);else{var d=a.getNumLevels(),b=a.getLevel(),e=a.getMaxZoom(),f=this.zoomFactor||1;0<d?b!==e&&(d=b+f,d>e&&(d=e),a.navigationManager._wheelZoom({value:d-b,mapPoint:c},!0)):a.navigationManager._wheelZoom({value:1/Math.pow(2,f)*2,mapPoint:c},!0)}},_updatePagingControls:function(){var a=
this._prevFeatureButton,c=this._nextFeatureButton,b=this.selectedIndex,d=this.features?this.features.length:0;this.pagingControls&&1<d?(0===b?f.add(a,"hidden"):f.remove(a,"hidden"),b===d-1?f.add(c,"hidden"):f.remove(c,"hidden")):(f.add(a,"hidden"),f.add(c,"hidden"))},_updatePagingInfo:function(){var a=this.features?this.features.length:0,c=this._nls,b="\x26nbsp;";this.pagingInfo&&1<a&&c.NLS_pagingInfo&&(b=w.substitute({index:this.selectedIndex+1,total:a},c.NLS_pagingInfo));a&&(c=this.getSelectedFeature(),
a=c.getInfoTemplate(),c=c.getTitle(),a&&!/esri\.InfoTemplate/.test(a.declaredClass)&&this.titleInBody||!c||(b=c+("\x26nbsp;"===b?"":" "+b)));this.setTitle(b)},_updateUI:function(){if(this.popupWindow){var a=this.features,c=this.deferreds,b=a?a.length:0,d=this._spinner,e=this._actionList,g=this._nls;this._updatePagingControls();this._updatePagingInfo();b?f.remove(e,"hidden"):f.add(e,"hidden");c&&c.length?a?f.remove(d,"hidden"):this.setContent("\x3cdiv style\x3d'text-align: center;'\x3e"+g.NLS_searching+
"...\x3c/div\x3e"):f.add(d,"hidden");b||c&&c.length?this._delayHide=!1:(this.setContent("\x3cdiv style\x3d'text-align: center;'\x3e"+g.NLS_noInfo+".\x3c/div\x3e"),this.visibleWhenEmpty||this._waitAndHide(this.hideDelay))}}});E("extend-esri")&&u.setObject("dijit.Popup",t,J);return t});