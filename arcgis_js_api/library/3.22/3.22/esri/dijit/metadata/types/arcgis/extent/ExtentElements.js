// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/metadata/types/arcgis/extent/templates/ExtentElements.html":'\x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\r\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Tabs"\x3e\r\n    \r\n    \x3c!-- geographic --\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Section"\r\n      data-dojo-props\x3d"showHeader:false,label:\'${i18nArcGIS.extent.section.geographic}\'"\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n        data-dojo-props\x3d"target:\'geoEle\',minOccurs:0,maxOccurs:\'unbounded\',label:\'${i18nArcGIS.extent.geoEle.caption}\'"\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/ElementChoice" data-dojo-props\x3d"isGeoEleChoice:true"\x3e\r\n        \r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n            data-dojo-props\x3d"target:\'GeoBndBox\',minOccurs:0,showHeader:false,label:\'${i18nArcGIS.extent.geoEle.GeoBndBox.caption}\'"\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Attribute"\r\n              data-dojo-props\x3d"target:\'esriExtentType\',minOccurs:0,showHeader:false"\x3e\r\n              \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/form/InputExtentTypeCheckBox"\r\n                data-dojo-props\x3d"falseValue:\'\',trueValue:\'search\',label:\'${i18nArcGIS.extent.geoEle.GeoBndBox.esriExtentType}\'"\x3e\r\n              \x3c/div\x3e\r\n            \x3c/div\x3e\r\n            \x3cdiv class\x3d"single" data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement" \r\n              data-dojo-props\x3d"target:\'exTypeCode\',minOccurs:0,showHeader:false"\x3e\r\n              \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/form/InputCheckBox"\r\n                data-dojo-props\x3d"falseValue:\'0\',trueValue:\'1\',label:\'${i18nArcGIS.extent.geoEle.GeoBndBox.exTypeCode}\'"\x3e\r\n              \x3c/div\x3e\r\n            \x3c/div\x3e\r\n            \x3cdiv class\x3d"gxeGeoExtentSection"\x3e  \r\n              \x3cdiv class\x3d"gxeGeoExtentCoordinates"\x3e        \r\n                \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n                  data-dojo-props\x3d"target:\'westBL\',value:-180,label:\'${i18nArcGIS.extent.geoEle.GeoBndBox.westBL}\'"\x3e\r\n                  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputNumber"\r\n                    data-dojo-props\x3d"hint:\'${i18nBase.hints.longitude}\'"\x3e\r\n                    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/form/GeoExtentTool"\r\n                      data-dojo-props\x3d"label:\'${i18nBase.geoExtent.button}\'"\x3e\x3c/div\x3e\r\n                  \x3c/div\x3e\r\n                \x3c/div\x3e\r\n                \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n                  data-dojo-props\x3d"target:\'eastBL\',value:180,label:\'${i18nArcGIS.extent.geoEle.GeoBndBox.eastBL}\'"\x3e\r\n                  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputNumber"\r\n                    data-dojo-props\x3d"hint:\'${i18nBase.hints.longitude}\'"\x3e\x3c/div\x3e\r\n                \x3c/div\x3e\r\n                \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n                  data-dojo-props\x3d"target:\'southBL\',value:-90,label:\'${i18nArcGIS.extent.geoEle.GeoBndBox.southBL}\'"\x3e\r\n                  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputNumber"\r\n                    data-dojo-props\x3d"hint:\'${i18nBase.hints.latitude}\'"\x3e\x3c/div\x3e\r\n                \x3c/div\x3e\r\n                \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n                  data-dojo-props\x3d"target:\'northBL\',value:90,label:\'${i18nArcGIS.extent.geoEle.GeoBndBox.northBL}\'"\x3e\r\n                  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputNumber"\r\n                    data-dojo-props\x3d"hint:\'${i18nBase.hints.latitude}\'"\x3e\x3c/div\x3e\r\n                \x3c/div\x3e\r\n              \x3c/div\x3e\r\n              \x3cdiv class\x3d"gxeGeoExtentViewSection gxeViewOnly"\x3e\x3c/div\x3e\r\n              \x3cdiv class\x3d"gxeGeoExtentBottom"\x3e\x3c/div\x3e\r\n            \x3c/div\x3e\r\n          \x3c/div\x3e\r\n        \r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n            data-dojo-props\x3d"target:\'GeoDesc\',minOccurs:0,showHeader:false,label:\'${i18nArcGIS.extent.geoEle.GeoDesc.caption}\'"\x3e\r\n            \x3cdiv class\x3d"single" data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n              data-dojo-props\x3d"target:\'exTypeCode\',minOccurs:0,showHeader:false"\x3e\r\n              \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/form/InputCheckBox"\r\n                data-dojo-props\x3d"falseValue:\'0\',trueValue:\'1\',label:\'${i18nArcGIS.extent.geoEle.GeoDesc.exTypeCode}\'"\x3e\r\n              \x3c/div\x3e              \r\n            \x3c/div\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n              data-dojo-props\x3d"target:\'geoId\',minOccurs:0,showHeader:false"\x3e\r\n              \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n                data-dojo-props\x3d"target:\'identCode\',minOccurs:1,label:\'${i18nArcGIS.extent.geoEle.GeoDesc.identCode}\'"\x3e\r\n              \x3c/div\x3e\r\n              \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n                data-dojo-props\x3d"target:\'identAuth\',minOccurs:0,label:\'${i18nArcGIS.codeRef.identAuth}\'"\x3e\r\n                \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/citation/CitationElements"\x3e\x3c/div\x3e    \r\n              \x3c/div\x3e\r\n            \x3c/div\x3e\r\n          \x3c/div\x3e\r\n          \r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \r\n    \x3c!-- temporal --\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Section"\r\n      data-dojo-props\x3d"showHeader:false,label:\'${i18nArcGIS.extent.section.temporal}\'"\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n        data-dojo-props\x3d"target:\'tempEle\',minOccurs:0,maxOccurs:\'unbounded\',label:\'${i18nArcGIS.extent.tempEle.caption}\'"\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element" data-dojo-props\x3d"target:\'TempExtent\',minOccurs:1,showHeader:false"\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element" data-dojo-props\x3d"target:\'exTemp\',minOccurs:1,showHeader:false"\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/ElementChoice" data-dojo-props\x3d"isExTempElementChoice:true"\x3e\r\n            \r\n              \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n                data-dojo-props\x3d"target:\'TM_Period\',minOccurs:1,showHeader:false,label:\'${i18nArcGIS.extent.tempEle.TM_Period}\'"\x3e\r\n                \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n                  data-dojo-props\x3d"target:\'tmBegin\',minOccurs:1,label:\'${i18nArcGIS.extent.tempEle.tmBegin}\'"\x3e\r\n                  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/form/InputDate" data-dojo-props\x3d"allowTime:true,forceTime:true"\x3e\x3c/div\x3e\r\n                \x3c/div\x3e\r\n                \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n                  data-dojo-props\x3d"target:\'tmEnd\',minOccurs:1,label:\'${i18nArcGIS.extent.tempEle.tmEnd}\'"\x3e\r\n                  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/form/InputDate" data-dojo-props\x3d"allowTime:true,forceTime:true"\x3e\x3c/div\x3e\r\n                \x3c/div\x3e\r\n              \x3c/div\x3e\r\n              \r\n              \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n                data-dojo-props\x3d"target:\'TM_Instant\',minOccurs:1,showHeader:false,label:\'${i18nArcGIS.extent.tempEle.TM_Instant}\'"\x3e\r\n                \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n                  data-dojo-props\x3d"target:\'tmPosition\',minOccurs:1,label:\'${i18nArcGIS.extent.tempEle.tmPosition}\'"\x3e\r\n                  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/form/InputDate" data-dojo-props\x3d"allowTime:true,forceTime:true"\x3e\x3c/div\x3e\r\n                \x3c/div\x3e\r\n              \x3c/div\x3e\r\n              \r\n            \x3c/div\x3e\r\n          \x3c/div\x3e  \r\n        \x3c/div\x3e    \r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \r\n    \x3c!-- vertical --\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Section"\r\n      data-dojo-props\x3d"showHeader:false,label:\'${i18nArcGIS.extent.section.vertical}\'"\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n        data-dojo-props\x3d"target:\'vertEle\',minOccurs:0,maxOccurs:\'unbounded\',label:\'${i18nArcGIS.extent.vertEle.caption}\'"\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/form/MinNumberElement"\r\n          data-dojo-props\x3d"target:\'vertMinVal\',minOccurs:1,label:\'${i18nArcGIS.extent.vertEle.vertMinVal}\'"\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputNumber"\x3e\x3c/div\x3e\r\n        \x3c/div\x3e  \r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n          data-dojo-props\x3d"target:\'vertMaxVal\',minOccurs:1,label:\'${i18nArcGIS.extent.vertEle.vertMaxVal}\'"\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/form/InputMaxNumber"\x3e\x3c/div\x3e\r\n        \x3c/div\x3e  \r\n      \x3c/div\x3e  \r\n    \x3c/div\x3e\r\n    \r\n    \x3c!-- description --\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Section"\r\n      data-dojo-props\x3d"showHeader:false,label:\'${i18nArcGIS.extent.section.description}\'"\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n        data-dojo-props\x3d"target:\'exDesc\',minOccurs:0,label:\'${i18nArcGIS.extent.exDesc}\'"\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputTextArea"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e  \r\n    \x3c/div\x3e\r\n  \r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("esri/dijit/metadata/types/arcgis/extent/ExtentElements","dojo/_base/declare dojo/_base/lang dojo/has ../../../../../kernel ../../../base/Descriptor dojo/text!./templates/ExtentElements.html ../form/MinNumberElement ../form/InputExtentTypeCheckBox ../form/InputMaxNumber ../form/GeoExtentTool".split(" "),function(a,b,c,d,e,f){a=a(e,{templateString:f});c("extend-esri")&&b.setObject("dijit.metadata.types.arcgis.extent.ExtentElements",a,d);return a});