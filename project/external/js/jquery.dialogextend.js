(function(){var i;i=jQuery,i.widget("ui.dialogExtend",{version:"2.0.0",modes:{},options:{closable:!0,dblclick:!1,titlebar:!1,icons:{close:"ui-icon-closethick",restore:"ui-icon-newwin"},load:null,beforeRestore:null,restore:null},_create:function(){return this._state="normal",i(this.element[0]).data("ui-dialog")||i.error("jQuery.dialogExtend Error : Only jQuery UI Dialog element is accepted"),this._verifyOptions(),this._initStyles(),this._initButtons(),this._initTitleBar(),this._setState("normal"),this._on("load",function(i){return console.log("test",i)}),this._trigger("load")},_setState:function(t){return i(this.element[0]).removeClass("ui-dialog-"+this._state).addClass("ui-dialog-"+t),this._state=t},_verifyOptions:function(){var t,e,o;!this.options.dblclick||this.options.dblclick in this.modes||(i.error("jQuery.dialogExtend Error : Invalid <dblclick> value '"+this.options.dblclick+"'"),this.options.dblclick=!1),this.options.titlebar&&"none"!==(e=this.options.titlebar)&&"transparent"!==e&&(i.error("jQuery.dialogExtend Error : Invalid <titlebar> value '"+this.options.titlebar+"'"),this.options.titlebar=!1),o=[];for(t in this.modes)this["_verifyOptions_"+t]?o.push(this["_verifyOptions_"+t]()):o.push(void 0);return o},_initStyles:function(){var t,e,o;i(".dialog-extend-css").length||(e="",e+='<style class="dialog-extend-css" type="text/css">',e+=".ui-dialog .ui-dialog-titlebar-buttonpane>a { float: right; }",e+=".ui-dialog .ui-dialog-titlebar-restore { width: 19px; height: 18px; }",e+=".ui-dialog .ui-dialog-titlebar-restore span { display: block; margin: 1px; }",e+=".ui-dialog .ui-dialog-titlebar-restore:hover,",e+=".ui-dialog .ui-dialog-titlebar-restore:focus { padding: 0; }",e+=".ui-dialog .ui-dialog-titlebar ::selection { background-color: transparent; }",e+="</style>",i(e).appendTo("body")),o=[];for(t in this.modes)o.push(this["_initStyles_"+t]());return o},_initButtons:function(){var t,e,o,n,a,l=this;n=i(this.element[0]).dialog("widget").find(".ui-dialog-titlebar"),t=i('<div class="ui-dialog-titlebar-buttonpane"></div>').appendTo(n),t.css({position:"absolute",top:"50%",right:"0.3em","margin-top":"-10px",height:"18px"}),n.find(".ui-dialog-titlebar-close").css({position:"relative","float":"right",top:"auto",right:"auto",margin:0}).find(".ui-icon").removeClass("ui-icon-closethick").addClass(this.options.icons.close).end().appendTo(t).end(),t.append('<a class="ui-dialog-titlebar-restore ui-corner-all ui-state-default" href="#"><span class="ui-icon '+this.options.icons.restore+'" title="restore">restore</span></a>').find(".ui-dialog-titlebar-restore").attr("role","button").mouseover(function(){return i(this).addClass("ui-state-hover")}).mouseout(function(){return i(this).removeClass("ui-state-hover")}).focus(function(){return i(this).addClass("ui-state-focus")}).blur(function(){return i(this).removeClass("ui-state-focus")}).end().find(".ui-dialog-titlebar-close").toggle(this.options.closable).end().find(".ui-dialog-titlebar-restore").hide().click(function(i){return i.preventDefault(),l.restore()}).end(),a=this.modes;for(o in a)e=a[o],this._initModuleButton(o,e);return n.dblclick(function(){return l.options.dblclick?"normal"!==l._state?l.restore():l[l.options.dblclick]():void 0}).select(function(){return!1})},_initModuleButton:function(t,e){var o,n=this;return o=i(this.element[0]).dialog("widget").find(".ui-dialog-titlebar-buttonpane"),o.append('<a class="ui-dialog-titlebar-'+t+' ui-corner-all ui-state-default" href="#" title="'+t+'"><span class="ui-icon '+this.options.icons[t]+'">'+t+"</span></a>").find(".ui-dialog-titlebar-"+t).attr("role","button").mouseover(function(){return i(this).addClass("ui-state-hover")}).mouseout(function(){return i(this).removeClass("ui-state-hover")}).focus(function(){return i(this).addClass("ui-state-focus")}).blur(function(){return i(this).removeClass("ui-state-focus")}).end().find(".ui-dialog-titlebar-"+t).toggle(this.options[e.option]).click(function(i){return i.preventDefault(),n[t]()}).end()},_initTitleBar:function(){var t;switch(this.options.titlebar){case!1:return 0;case"none":return i(this.element[0]).dialog("option","draggable")&&(t=i("<div />").addClass("ui-dialog-draggable-handle").css("cursor","move").height(5),i(this.element[0]).dialog("widget").prepend(t).draggable("option","handle",t)),i(this.element[0]).dialog("widget").find(".ui-dialog-titlebar").find(".ui-dialog-title").html("&nbsp;").end().css({"background-color":"transparent","background-image":"none",border:0,position:"absolute",right:0,top:0,"z-index":9999}).end();case"transparent":return i(this.element[0]).dialog("widget").find(".ui-dialog-titlebar").css({"background-color":"transparent","background-image":"none",border:0});default:return i.error("jQuery.dialogExtend Error : Invalid <titlebar> value '"+this.options.titlebar+"'")}},state:function(){return this._state},restore:function(){return this._trigger("beforeRestore"),this._restore(),this._toggleButtons(),this._trigger("restore")},_restore:function(){return"normal"!==this._state?(this["_restore_"+this._state](),this._setState("normal"),i(this.element[0]).dialog("widget").focus()):void 0},_saveSnapshot:function(){return"normal"===this._state?(this.original_config_resizable=i(this.element[0]).dialog("option","resizable"),this.original_config_draggable=i(this.element[0]).dialog("option","draggable"),this.original_size_height=i(this.element[0]).dialog("widget").outerHeight(),this.original_size_width=i(this.element[0]).dialog("option","width"),this.original_size_maxHeight=i(this.element[0]).dialog("option","maxHeight"),this.original_position_mode=i(this.element[0]).dialog("widget").css("position"),this.original_position_left=i(this.element[0]).dialog("widget").offset().left-i("body").scrollLeft(),this.original_position_top=i(this.element[0]).dialog("widget").offset().top-i("body").scrollTop(),this.original_titlebar_wrap=i(this.element[0]).dialog("widget").find(".ui-dialog-titlebar").css("white-space")):void 0},_loadSnapshot:function(){return{config:{resizable:this.original_config_resizable,draggable:this.original_config_draggable},size:{height:this.original_size_height,width:this.original_size_width,maxHeight:this.original_size_maxHeight},position:{mode:this.original_position_mode,left:this.original_position_left,top:this.original_position_top},titlebar:{wrap:this.original_titlebar_wrap}}},_toggleButtons:function(t){var e,o,n,a,l,s;n=t||this._state,i(this.element[0]).dialog("widget").find(".ui-dialog-titlebar-restore").toggle("normal"!==n).css({right:"1.4em"}).end(),a=this.modes;for(o in a)e=a[o],i(this.element[0]).dialog("widget").find(".ui-dialog-titlebar-"+o).toggle(n!==e.state&&this.options[e.option]);l=this.modes,s=[];for(o in l)e=l[o],e.state===n?s.push(i(this.element[0]).dialog("widget").find(".ui-dialog-titlebar-restore").insertAfter(i(this.element[0]).dialog("widget").find(".ui-dialog-titlebar-"+o)).end()):s.push(void 0);return s}})}).call(this),function(){var i;i=jQuery,i.extend(!0,i.ui.dialogExtend.prototype,{modes:{collapse:{option:"collapsable",state:"collapsed"}},options:{collapsable:!1,icons:{collapse:"ui-icon-triangle-1-s"},beforeCollapse:null,collapse:null},collapse:function(){var t,e;return t=i(this.element[0]).dialog("widget").find(".ui-dialog-titlebar").height()+15,this._trigger("beforeCollapse"),"normal"!==this._state&&this._restore(),this._saveSnapshot(),e=i(this.element[0]).dialog("widget").position(),i(this.element[0]).dialog("option",{resizable:!1,height:t,maxHeight:t,position:[e.left-i(document).scrollLeft(),e.top-i(document).scrollTop()]}).on("dialogclose",this._collapse_restore).hide().dialog("widget").find(".ui-dialog-buttonpane:visible").hide().end().find(".ui-dialog-titlebar").css("white-space","nowrap").end().find(".ui-dialog-content"),this._setState("collapsed"),this._toggleButtons(),this._trigger("collapse")},_restore_collapsed:function(){var t;return t=this._loadSnapshot(),i(this.element[0]).show().dialog("widget").find(".ui-dialog-buttonpane:hidden").show().end().find(".ui-dialog-titlebar").css("white-space",t.titlebar.wrap).end().find(".ui-dialog-content").dialog("option",{resizable:t.config.resizable,height:t.size.height,maxHeight:t.size.maxHeight}).off("dialogclose",this._collapse_restore)},_initStyles_collapse:function(){var t;return i(".dialog-extend-collapse-css").length?void 0:(t="",t+='<style class="dialog-extend-collapse-css" type="text/css">',t+=".ui-dialog .ui-dialog-titlebar-collapse { width: 19px; height: 18px; }",t+=".ui-dialog .ui-dialog-titlebar-collapse span { display: block; margin: 1px; }",t+=".ui-dialog .ui-dialog-titlebar-collapse:hover,",t+=".ui-dialog .ui-dialog-titlebar-collapse:focus { padding: 0; }",t+="</style>",i(t).appendTo("body"))},_collapse_restore:function(){return i(this).dialogExtend("restore")}})}.call(this),function(){var i;i=jQuery,i.extend(!0,i.ui.dialogExtend.prototype,{modes:{maximize:{option:"maximizable",state:"maximized"}},options:{maximizable:!1,icons:{maximize:"ui-icon-extlink"},beforeMaximize:null,maximize:null},maximize:function(){var t,e;return t=i(window).height()-11,e=i(window).width()-11,this._trigger("beforeMaximize"),"normal"!==this._state&&this._restore(),this._saveSnapshot(),i(this.element[0]).dialog("option","draggable")&&i(this.element[0]).dialog("widget").draggable("option","handle",null).find(".ui-dialog-draggable-handle").css("cursor","text").end(),i(this.element[0]).dialog("widget").css("position","fixed").find(".ui-dialog-content").show().dialog("widget").find(".ui-dialog-buttonpane").show().end().find(".ui-dialog-content").dialog("option",{resizable:!1,draggable:!1,height:t,width:e,position:{my:"left top",at:"left top",of:window}}),this._setState("maximized"),this._toggleButtons(),this._trigger("maximize")},_restore_maximized:function(){var t;return t=this._loadSnapshot(),i(this.element[0]).dialog("widget").css("position",t.position.mode).find(".ui-dialog-titlebar").css("white-space",t.titlebar.wrap).end().find(".ui-dialog-content").dialog("option",{resizable:t.config.resizable,draggable:t.config.draggable,height:t.size.height,width:t.size.width,maxHeight:t.size.maxHeight,position:{my:"left top",at:"left+"+t.position.left+" top+"+t.position.top,of:window}}),i(this.element[0]).dialog("option","draggable")?i(this.element[0]).dialog("widget").draggable("option","handle",i(this.element[0]).dialog("widget").find(".ui-dialog-draggable-handle").length?i(this.element[0]).dialog("widget").find(".ui-dialog-draggable-handle"):".ui-dialog-titlebar").find(".ui-dialog-draggable-handle").css("cursor","move"):void 0},_initStyles_maximize:function(){var t;return i(".dialog-extend-maximize-css").length?void 0:(t="",t+='<style class="dialog-extend-maximize-css" type="text/css">',t+=".ui-dialog .ui-dialog-titlebar-maximize { width: 19px; height: 18px; }",t+=".ui-dialog .ui-dialog-titlebar-maximize span { display: block; margin: 1px; }",t+=".ui-dialog .ui-dialog-titlebar-maximize:hover,",t+=".ui-dialog .ui-dialog-titlebar-maximize:focus { padding: 0; }",t+="</style>",i(t).appendTo("body"))}})}.call(this),function(){var i;i=jQuery,i.extend(!0,i.ui.dialogExtend.prototype,{modes:{minimize:{option:"minimizable",state:"minimized"}},options:{minimizable:!1,minimizeLocation:"left",icons:{minimize:"ui-icon-minus"},beforeMinimize:null,minimize:null},minimize:function(){var t,e,o;return this._trigger("beforeMinimize"),"normal"!==this._state&&this._restore(),o=200,i("#dialog-extend-fixed-container").length?e=i("#dialog-extend-fixed-container"):(e=i('<div id="dialog-extend-fixed-container"></div>').appendTo("body"),e.css({position:"fixed",bottom:1,left:1,right:1,"z-index":9999})),this._toggleButtons("minimized"),t=i(this.element[0]).dialog("widget").clone().children().remove().end(),i(this.element[0]).dialog("widget").find(".ui-dialog-titlebar").clone(!0,!0).appendTo(t),t.css({"float":this.options.minimizeLocation,margin:1}),e.append(t),i(this.element[0]).data("dialog-extend-minimize-controls",t),i(this.element[0]).dialog("option","draggable")&&t.removeClass("ui-draggable"),t.css({height:"auto",width:o,position:"static"}),i(this.element[0]).on("dialogbeforeclose",this._minimize_restoreOnClose).dialog("widget").hide(),this._setState("minimized"),this._trigger("minimize")},_restore_minimized:function(){return i(this.element[0]).dialog("widget").show(),i(this.element[0]).off("dialogbeforeclose",this._minimize_restoreOnClose),i(this.element[0]).data("dialog-extend-minimize-controls").remove(),i(this.element[0]).removeData("dialog-extend-minimize-controls")},_initStyles_minimize:function(){var t;return i(".dialog-extend-minimize-css").length?void 0:(t="",t+='<style class="dialog-extend-minimize-css" type="text/css">',t+=".ui-dialog .ui-dialog-titlebar-minimize { width: 19px; height: 18px; }",t+=".ui-dialog .ui-dialog-titlebar-minimize span { display: block; margin: 1px; }",t+=".ui-dialog .ui-dialog-titlebar-minimize:hover,",t+=".ui-dialog .ui-dialog-titlebar-minimize:focus { padding: 0; }",t+="</style>",i(t).appendTo("body"))},_verifyOptions_minimize:function(){var t;return!this.options.minimizeLocation||"left"!==(t=this.options.minimizeLocation)&&"right"!==t?(i.error("jQuery.dialogExtend Error : Invalid <minimizeLocation> value '"+this.options.minimizeLocation+"'"),this.options.minimizeLocation="left"):void 0},_minimize_restoreOnClose:function(){return i(this).dialogExtend("restore")}})}.call(this);
