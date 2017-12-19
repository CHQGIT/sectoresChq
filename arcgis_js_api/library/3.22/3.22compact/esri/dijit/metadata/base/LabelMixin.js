// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.
//>>built
define("esri/dijit/metadata/base/LabelMixin","dojo/_base/declare dojo/_base/lang dojo/topic dojo/dom-style dojo/has ./MandatoryLabel ./OptionalLabel ../../../kernel".split(" "),function(b,e,g,c,h,k,l,m){b=b(null,{_contentIsOptional:!1,_contentNode:null,_isOptionallyOff:!1,labelWidget:null,constructor:function(a){e.mixin(this,a)},initializeLabel:function(a,b,f,c,d){this._contentIsOptional=b;this._contentNode=d;this._isOptionallyOff=!1;d="";b?(f?(d='checked\x3d"checked"',this.toggleContent(!0)):this.toggleContent(!1),
this.labelWidget=new l({label:a,checkedAttr:d,onClick:e.hitch(this,function(a){this.toggleContent(a,!0)})},c)):(this.labelWidget=new k({label:a},c),this.toggleContent(!0))},toggleContent:function(a,b){if(!this.hide&&this._contentNode&&(a?c.set(this._contentNode,"display","block"):c.set(this._contentNode,"display","none"),this._contentIsOptional)){this._isOptionallyOff=!a;!b&&this.labelWidget&&this.labelWidget.setChecked&&this.labelWidget.setChecked(a);this.whenOptionalContentToggled(!a);try{g.publish("gxe/optional-content-toggled",
{src:this,isOptionallyOff:!a})}catch(f){console.error(f)}}},whenOptionalContentToggled:function(a){}});h("extend-esri")&&e.setObject("dijit.metadata.base.LabelMixin",b,m);return b});