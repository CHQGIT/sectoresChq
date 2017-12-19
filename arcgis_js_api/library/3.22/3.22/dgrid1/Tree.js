//>>built
define("dgrid1/Tree","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/aspect dojo/Deferred dojo/dom-construct dojo/dom-class dojo/on dojo/promise/all dojo/query dojo/when ./util/has-css3 ./Grid dojo/has!touch?./util/touch".split(" "),function(C,y,D,H,E,u,p,z,F,v,A,B,I,w){return C(null,{collapseOnRefresh:!1,enableTreeTransitions:!0,treeIndentWidth:9,constructor:function(){this._treeColumnListeners=[]},shouldExpand:function(a,b,c){return c},expand:function(a,b,c,d){function g(){l||e._processScroll&&
e._processScroll()}if(this._treeColumn){var e=this,h=a.element?a:this.row(a),k=!!this._expanded[h.id],q=B("transitionend"),m;a=h.element;a=-1<a.className.indexOf("dgrid-expando-icon")?a:v(".dgrid-expando-icon",a)[0];c=c||!this.enableTreeTransitions;if(a&&a.mayHaveChildren&&(c||b!==k)){var l=void 0===b?!this._expanded[h.id]:b,G=this.getScrollPosition();this._resetExpanded(h.id,l);p.replace(a,"ui-icon-triangle-1-"+(l?"se":"e"),"ui-icon-triangle-1-"+(l?"e":"se"));p.toggle(h.element,"dgrid-row-expanded",
l);b=h.element;var f=b.connected,r,x,n={};if(!f){var f=n.container=b.connected=u.create("div",{className:"dgrid-tree-container"},b,"after"),t=function(a){var b=e._renderedCollection.getChildren(h.data);e.sort&&0<e.sort.length&&(b=b.sort(e.sort));b.track&&e.shouldTrackCollection&&(f._rows=a.rows=[],b=b.track(),f._handles=[b.tracking,e._observeCollection(b,f,a)]);t.collection=b;return"start"in a?b.fetchRange({start:a.start,end:a.start+a.count}):b.fetch()};"level"in a&&(f.level=t.level=a.level+1);if(this.renderQuery)m=
d?e._renderedCollection.getChildren(h.data).fetchRange({start:0,end:1}).totalLength.then(function(a){n.start=a-e.minRowsPerPage;n.end=a-1;n.count=e.minRowsPerPage;e._previousScrollPosition=G;return e.renderQuery(t,n)}):this.renderQuery(t,n);else{var w=u.create("div",null,f);m=this._trackError(function(){return e.renderQueryResults(t(n),w,y.mixin({rows:n.rows},"level"in t?{queryLevel:t.level}:null)).then(function(a){u.destroy(w);return a})})}q&&z(f,q,this._onTreeTransitionEnd)}f.hidden=!l;r=f.style;
!q||c?(r.display=l?"block":"none",r.height="",g()):(z.once(f,q,g),l?(r.display="block",x=f.scrollHeight,r.height="0px"):(p.add(f,"dgrid-tree-resetting"),r.height=f.scrollHeight+"px"),setTimeout(function(){p.remove(f,"dgrid-tree-resetting");r.height=l?x?x+"px":"auto":"0px"},0))}return A(m)}},_configColumns:function(){var a=this.inherited(arguments);this._resetExpanded();for(var b=0,c=a.length;b<c;b++)if(a[b].renderExpando){this._configureTreeColumn(a[b]);break}return a},insertRow:function(a,b,c,d,
g){g=g||{};var e=g.queryLevel="queryLevel"in g?g.queryLevel:"level"in b?b.level:0,h=this.inherited(arguments),k=this.row(h);(e=this.shouldExpand(k,e,this._expanded[k.id]))&&this._expandWhenInDom(h,g);(e||!this.collection.mayHaveChildren||this.collection.mayHaveChildren(a))&&p.add(h,"dgrid-row-expandable");return h},_expandWhenInDom:function(a,b,c){a.offsetHeight?(a=this.expand(a,!0,!0,b.scrollingUp),c&&a.then(function(){c.resolve()})):a.parentNode&&this.domNode.offsetHeight&&(this._expandPromises&&
!c&&(c=new E,this._expandPromises.push(c.promise)),setTimeout(this._expandWhenInDom.bind(this,a,b,c),0))},_queueNodeForDeletion:function(a){this.inherited(arguments);var b=a.connected;b&&this._deleteQueue.push(b)},_pruneRow:function(a,b){var c=a.connected,d;if(c){var g=this.row(a).id;this._expanded[g]&&(d=v("\x3e.dgrid-preload",c)[b?1:0])&&(d=this._findPreload(d),d=b?d.next:d.previous,d.expandedContent||(d.expandedContent={}),d.expandedContent[g]=c.offsetHeight)}this.inherited(arguments,[a,b,{treePrune:!0,
removeBelow:b}])},refresh:function(a){var b;this._expandPromises=[];b=(this.keepScrollPosition||a&&a.keepScrollPosition)&&Object.keys(this._expanded).length?this.inherited(arguments,y.mixin(a||{},{keepScrollPosition:!1})):this.inherited(arguments);return A(b).then(function(){var a=this._expandPromises;delete this._expandPromises;return F(a)}.bind(this))},removeRow:function(a,b,c){var d=a.connected,g={},e,h,k,q;d&&(d._handles&&(D.forEach(d._handles,function(a){a.remove()}),delete d._handles),d._rows&&
(g.rows=d._rows),e=v("\x3e.dgrid-row",d),h=v("\x3e.dgrid-preload",d),e&&e.length&&(this._releaseRange&&(k=e[0].rowIndex,q=e[e.length-1].rowIndex,this._releaseRange(this._findPreload(h[0]),!1,k,q)),e.forEach(function(a){c&&c.treePrune?this._pruneRow(a,c.removeBelow):this.removeRow(a,!0,g)},this)),this._removePreloads&&this._removePreloads(h),d._rows&&(d._rows.length=0,delete d._rows),b?this._queueNodeForDeletion(d):u.destroy(d));this.inherited(arguments)},_refreshCellFromItem:function(a,b){if(!a.column.renderExpando)return this.inherited(arguments);
this.inherited(arguments,[a,b,{queryLevel:v(".dgrid-expando-icon",a.element)[0].level}])},cleanup:function(){this.inherited(arguments);this.collapseOnRefresh&&this._resetExpanded()},_destroyColumns:function(){this.inherited(arguments);for(var a=this._treeColumnListeners,b=a.length;b--;)a[b].remove();this._treeColumnListeners=[];this._treeColumn=null},_calcRowHeight:function(a){var b=a.connected;return this.inherited(arguments)+(b?b.offsetHeight:0)},_configureTreeColumn:function(a){var b=this,c=".dgrid-content .dgrid-column-"+
a.id,d;this._treeColumn=a;if(!a._isConfiguredTreeColumn){var g=a.renderCell||this._defaultRenderCell;a._isConfiguredTreeColumn=!0;a.renderCell=function(c,d,e,m){var h=m&&"queryLevel"in m?m.queryLevel:0,k=!b.collection.mayHaveChildren||b.collection.mayHaveChildren(c),f;f=a.renderExpando(h,k,b._expanded[b.collection.getIdentity(c)],c);f.level=h;f.mayHaveChildren=k;(c=g.call(a,c,d,e,m))&&c.nodeType?(e.appendChild(f),e.appendChild(c)):e.insertBefore(f,e.firstChild)};"function"!==typeof a.renderExpando&&
(a.renderExpando=this._defaultRenderExpando)}var e=this._treeColumnListeners;0===e.length&&(e.push(this.on(a.expandOn||".dgrid-expando-icon:click,"+c+":dblclick,"+c+":keydown",function(a){var c=b.row(a);b.collection.mayHaveChildren&&!b.collection.mayHaveChildren(c.data)||"keydown"===a.type&&32!==a.keyCode||"dblclick"===a.type&&d&&1<d.count&&c.id===d.id&&-1<a.target.className.indexOf("dgrid-expando-icon")||b.expand(c);-1<a.target.className.indexOf("dgrid-expando-icon")&&(d&&d.id===b.row(a).id?d.count++:
d={id:b.row(a).id,count:1})})),B("touch")&&e.push(this.on(w.selector(c,w.dbltap),function(){b.expand(this)})))},_defaultRenderExpando:function(a,b,c){var d=this.grid.isRTL?"right":"left",g="dgrid-expando-icon";b&&(g+=" ui-icon ui-icon-triangle-1-"+(c?"se":"e"));return u.create("div",{className:g,innerHTML:"\x26nbsp;",style:"margin-"+d+": "+a*this.grid.treeIndentWidth+"px; float: "+d+";"})},_onNotification:function(a,b){"delete"===b.type&&this._resetExpanded(b.id);this.inherited(arguments)},_onTreeTransitionEnd:function(a){var b=
this,c=this.style.height;c&&(this.style.display="0px"===c?"none":"block");a&&(p.add(this,"dgrid-tree-resetting"),setTimeout(function(){p.remove(b,"dgrid-tree-resetting")},0));this.style.height=""},_resetPlaceHolder:function(a){var b=this._getHeadPreload&&this._getHeadPreload();if(b)if(null!=a)a:for(;b;){var c=b.expandedContent;if(c&&c[a]){delete c[a];this._adjustPreloadHeight(b);break a}b=b.next}else for(a=b;a;)a.expandedContent&&(delete a.expandedContent,this._adjustPreloadHeight(a)),a=a.next},_resetExpanded:function(a,
b){this._resetPlaceHolder(a);null==a?this._expanded={}:b?this._expanded[a]=!0:delete this._expanded[a]},_calculatePreloadHeight:function(a){var b=this.inherited(arguments),c=a.expandedContent;c&&Object.keys(c).forEach(function(a){b+=c[a]});return b},_getRenderedCollection:function(a){return a.level?a.query.collection:this.inherited(arguments)}})});