//>>built
define("dojox/mobile/IconContainer","dojo/_base/array dojo/_base/declare dojo/_base/lang dojo/_base/window dojo/dom-construct dijit/_Contained dijit/_Container dijit/_WidgetBase ./IconItem ./Heading ./View".split(" "),function(k,f,g,l,e,m,n,p,r,q,h){return f("dojox.mobile.IconContainer",[p,n,m],{defaultIcon:"",transition:"below",pressedIconOpacity:.4,iconBase:"",iconPos:"",back:"Home",label:"My Application",single:!1,editable:!1,tag:"ul",baseClass:"mblIconContainer",editableMixinClass:"dojox/mobile/_EditableIconMixin",
iconItemPaneContainerClass:"dojox/mobile/Container",iconItemPaneContainerProps:null,iconItemPaneClass:"dojox/mobile/_IconItemPane",iconItemPaneProps:null,buildRendering:function(){this.domNode=this.containerNode=this.srcNodeRef||e.create(this.tag);this._terminator=e.create("ul"===this.tag?"li":"div",{className:"mblIconItemTerminator"},this.domNode);this.inherited(arguments)},postCreate:function(){this.editable&&!this.startEdit&&require([this.editableMixinClass],g.hitch(this,function(a){f.safeMixin(this,
new a);this.set("editable",this.editable)}))},startup:function(){this._started||(require([this.iconItemPaneContainerClass],g.hitch(this,function(a){this.paneContainerWidget=new a(this.iconItemPaneContainerProps);if("below"===this.transition)e.place(this.paneContainerWidget.domNode,this.domNode,"after");else{a=this.appView=new h({id:this.id+"_mblApplView"});var c=this;a.onAfterTransitionIn=function(a,b,d,e,f){c._opening._open_1()};a.domNode.style.visibility="hidden";var b=a._heading=new q({back:this._cv?
this._cv(this.back):this.back,label:this._cv?this._cv(this.label):this.label,moveTo:this.domNode.parentNode.id,transition:"zoomIn"==this.transition?"zoomOut":this.transition});a.addChild(b);a.addChild(this.paneContainerWidget);for(var d,b=this.getParent();b;b=b.getParent())if(b instanceof h){d=b.domNode.parentNode;break}d||(d=l.body());d.appendChild(a.domNode);a.startup()}})),this.inherited(arguments))},closeAll:function(){k.forEach(this.getChildren(),function(a){a.close(!0)},this)},addChild:function(a,
c){this.inherited(arguments);this._started&&a.paneWidget&&!a.paneWidget.getParent()&&this.paneContainerWidget.addChild(a.paneWidget,c);this.domNode.appendChild(this._terminator)},removeChild:function(a){var c="number"==typeof a?a:a.getIndexInParent();this.paneContainerWidget.removeChild(c);this.inherited(arguments)},_setLabelAttr:function(a){this.appView&&(this.label=a,a=this._cv?this._cv(a):a,this.appView._heading.set("label",a))}})});