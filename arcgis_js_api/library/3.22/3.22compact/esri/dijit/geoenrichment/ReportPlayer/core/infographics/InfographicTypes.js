// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/infographics/InfographicTypes",["dojo/_base/lang"],function(f){var a={STATIC:"static",ATTACHMENTS:"attachments",AREA_DETAILS:"areaDetails",INTERESTING_FACTS:"interestingFacts"},c={AGE_PYRAMID:"AgePyramid",TAPESTRY:"TapestryNEW",RELATED_VARS:"RelatedVariables",ONE_VAR:"OneVar"},d={},b;for(b in c)d[c[b]]=!0;f.mixin(a,c);var e={};for(b in a)e[a[b]]=!0;a.isDynamic=function(a){return d[a]};a.isSupported=function(a){return e[a]};return a});