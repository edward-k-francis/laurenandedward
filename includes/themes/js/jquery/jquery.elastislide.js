/**
 * jquery.elastislide.js v1.1.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2012, Codrops
 * http://www.codrops.com
 */
(function(g,h,e){
    var a=g.event,b,j;
    b=a.special.debouncedresize={
        setup:function(){
            g(this).on("resize",b.handler)},teardown:function(){
                g(this).off("resize",b.handler)},handler:function(o,k){
                    var n=this,m=arguments,l=function(){
                        o.type="debouncedresize";
                        a.dispatch.apply(n,m)};
                        if(j){clearTimeout(j)}
                            k?l():j=setTimeout(l,b.threshold)},
                threshold:150};
                var c="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
                g.fn.imagesLoaded=function(r){
                    var o=this,t=g.isFunction(g.Deferred)?g.Deferred():0,s=g.isFunction(t.notify),l=o.find("img").add(o.filter("img")),m=[],q=[],n=[];
                    if(g.isPlainObject(r)){
                        g.each(r,function(u,v){
                            if(u==="callback"){
                                r=v}
                            else{
                                if(t){
                                    t[u](v)}
                            }
                        })
                    }
                    function p(){var u=g(q),v=g(n);
                    if(t){
                        if(n.length){
                            t.reject(l,u,v)
                        }else{
                            t.resolve(l)}
                        }
                        if(g.isFunction(r)){
                            r.call(o,l,u,v)
                        }
                    }
                    function k(u,v){
                        if(u.src===c||g.inArray(u,m)!==-1){
                            return
                        }
                        m.push(u);
                        if(v){
                            n.push(u)
                        }else{
                            q.push(u)
                        }
                        g.data(u,"imagesLoaded",{isBroken:v,src:u.src});
                        if(s){
                            t.notifyWith(g(u),[v,l,g(q),g(n)])
                        }
                        if(l.length===m.length){
                            setTimeout(p);
                            l.unbind(".imagesLoaded")
                        }
                    }
                    if(!l.length){
                        p()
                    }else{
                        l.bind("load.imagesLoaded error.imagesLoaded",
                                function(u){
                                    k(u.target,u.type==="error")
                                }).each(function(u,w){
                                            var x=w.src;
                                            var v=g.data(w,"imagesLoaded");
                                            if(v&&v.src===x){
                                                k(w,v.isBroken);
                                                return
                                            }
                                            if(w.complete&&w.naturalWidth!==e){
                                                k(w,w.naturalWidth===0||w.naturalHeight===0);
                                                return
                                            }
                                            if(w.readyState||w.complete){
                                                w.src=c;w.src=x
                                            }
                                        })
                    }
                    return t?t.promise(o):o
                };
                var d=g(h),f=h.Modernizr;
                g.Elastislide=function(k,l){
                    this.$el=g(l);
                    this._init(k)};
                    g.Elastislide.defaults={orientation:"horizontal",
                                            speed:500,
                                            easing:"ease-in-out",
                                            minItems:3,
                                            start:0,
                                            onClick:function(m,k,l){return false},
                                            onReady:function(){return false},
                                            onBeforeSlide:function(){return false},
                                            onAfterSlide:function(){return false}};
                    g.Elastislide.prototype={_init:function(l){this.options=g.extend(true,{},g.Elastislide.defaults,l);
                                             var k=this,m={WebkitTransition:"webkitTransitionEnd",
                                                           MozTransition:"transitionend",
                                                           OTransition:"oTransitionEnd",
                                                           msTransition:"MSTransitionEnd",
                                                           transition:"transitionend"};
                    this.transEndEventName=m[f.prefixed("transition")];
                    this.support=f.csstransitions&&f.csstransforms;
                    this.current=this.options.start;
                    this.isSliding=false;
                    this.$items=this.$el.children("li");
                    this.itemsCount=this.$items.length;
                    if(this.itemsCount===0){return false}
                    this._validate();
                    this.$items.detach();
                    this.$el.empty();
                    this.$el.append(this.$items);
                    this.$el.wrap('<div class="elastislide-wrapper elastislide-loading elastislide-'+this.options.orientation+'"></div>');
                    this.hasTransition=false;
                    this.hasTransitionTimeout=setTimeout(function(){k._addTransition()},100);
                    this.$el.imagesLoaded(function(){
                                            k.$el.show();
                                            k._layout();
                                            k._configure();
                                            if(k.hasTransition){
                                                k._removeTransition();
                                                k._slideToItem(k.current);
                                                k.$el.on(k.transEndEventName,function(){
                                                                                k.$el.off(k.transEndEventName);
                                                                                k._setWrapperSize();
                                                                                k._addTransition();
                                                                                k._initEvents()})
                                            }else{
                                                clearTimeout(k.hasTransitionTimeout);
                                                k._setWrapperSize();
                                                k._initEvents();
                                                k._slideToItem(k.current);
                                                setTimeout(function(){k._addTransition()},25)}
                                                k.options.onReady()})}
                                    ,_validate:function(){if(this.options.speed<0){this.options.speed=500}if(this.options.minItems<1||this.options.minItems>this.itemsCount){this.options.minItems=1}if(this.options.start<0||this.options.start>this.itemsCount-1){this.options.start=0}if(this.options.orientation!="horizontal"&&this.options.orientation!="vertical"){this.options.orientation="horizontal"}},_layout:function(){this.$el.wrap('<div class="elastislide-carousel"></div>');this.$carousel=this.$el.parent();this.$wrapper=this.$carousel.parent().removeClass("elastislide-loading");var k=this.$items.find("img:first");this.imgSize={width:k.outerWidth(true),height:k.outerHeight(true)};this._setItemsSize();this.options.orientation==="horizontal"?this.$el.css("max-height",this.imgSize.height):this.$el.css("height",this.options.minItems*this.imgSize.height);this._addControls()},_addTransition:function(){if(this.support){this.$el.css("transition","all "+this.options.speed+"ms "+this.options.easing)}this.hasTransition=true},_removeTransition:function(){if(this.support){this.$el.css("transition","all 0s")}this.hasTransition=false},_addControls:function(){var k=this;this.$navigation=g('<nav><span class="elastislide-prev"></span><span class="elastislide-next"></span></nav>').appendTo(this.$wrapper);this.$navPrev=this.$navigation.find("span.elastislide-prev").on("mousedown.elastislide",function(l){k._slide("prev");return false});this.$navNext=this.$navigation.find("span.elastislide-next").on("mousedown.elastislide",function(l){k._slide("next");return false})},_setItemsSize:function(){var k=this.options.orientation==="horizontal"?(Math.floor(this.$carousel.width()/this.options.minItems)*100)/this.$carousel.width():100;this.$items.css({width:k+"%","max-width":this.imgSize.width,"max-height":this.imgSize.height});if(this.options.orientation==="vertical"){this.$wrapper.css("max-width",this.imgSize.width+parseInt(this.$wrapper.css("padding-left"))+parseInt(this.$wrapper.css("padding-right")))}},_setWrapperSize:function(){if(this.options.orientation==="vertical"){this.$wrapper.css({height:this.options.minItems*this.imgSize.height+parseInt(this.$wrapper.css("padding-top"))+parseInt(this.$wrapper.css("padding-bottom"))})}},_configure:function(){this.fitCount=this.options.orientation==="horizontal"?this.$carousel.width()<this.options.minItems*this.imgSize.width?this.options.minItems:Math.floor(this.$carousel.width()/this.imgSize.width):this.$carousel.height()<this.options.minItems*this.imgSize.height?this.options.minItems:Math.floor(this.$carousel.height()/this.imgSize.height)},_initEvents:function(){var k=this;d.on("debouncedresize.elastislide",function(){k._setItemsSize();k._configure();k._slideToItem(k.current)});this.$el.on(this.transEndEventName,function(){k._onEndTransition()});if(this.options.orientation==="horizontal"){this.$el.on({swipeleft:function(){k._slide("next")},swiperight:function(){k._slide("prev")}})}else{this.$el.on({swipeup:function(){k._slide("next")},swipedown:function(){k._slide("prev")}})}this.$el.on("click.elastislide","li",function(m){var l=g(this);k.options.onClick(l,l.index(),m)})},_destroy:function(k){this.$el.off(this.transEndEventName).off("swipeleft swiperight swipeup swipedown .elastislide");d.off(".elastislide");this.$el.css({"max-height":"none",transition:"none"}).unwrap(this.$carousel).unwrap(this.$wrapper);this.$items.css({width:"auto","max-width":"none","max-height":"none"});this.$navigation.remove();this.$wrapper.remove();if(k){k.call()}},_toggleControls:function(k,l){if(l){(k==="next")?this.$navNext.show():this.$navPrev.show()}else{(k==="next")?this.$navNext.hide():this.$navPrev.hide()}},_slide:function(l,n){if(this.isSliding){return false}this.options.onBeforeSlide();this.isSliding=true;var t=this,k=this.translation||0,q=this.options.orientation==="horizontal"?this.$items.outerWidth(true):this.$items.outerHeight(true),o=this.itemsCount*q,m=this.options.orientation==="horizontal"?this.$carousel.width():this.$carousel.height();if(n===e){var p=this.fitCount*q;if(p<0){return false}if(l==="next"&&o-(Math.abs(k)+p)<m){p=o-(Math.abs(k)+m);this._toggleControls("next",false);this._toggleControls("prev",true)}else{if(l==="prev"&&Math.abs(k)-p<0){p=Math.abs(k);this._toggleControls("next",true);this._toggleControls("prev",false)}else{var s=l==="next"?Math.abs(k)+Math.abs(p):Math.abs(k)-Math.abs(p);s>0?this._toggleControls("prev",true):this._toggleControls("prev",false);s<o-m?this._toggleControls("next",true):this._toggleControls("next",false)}}n=l==="next"?k-p:k+p}else{var p=Math.abs(n);if(Math.max(o,m)-p<m){n=-(Math.max(o,m)-m)}p>0?this._toggleControls("prev",true):this._toggleControls("prev",false);Math.max(o,m)-m>p?this._toggleControls("next",true):this._toggleControls("next",false)}this.translation=n;if(k===n){this._onEndTransition();return false}if(this.support){this.options.orientation==="horizontal"?this.$el.css("transform","translateX("+n+"px)"):this.$el.css("transform","translateY("+n+"px)")}else{g.fn.applyStyle=this.hasTransition?g.fn.animate:g.fn.css;var r=this.options.orientation==="horizontal"?{left:n}:{top:n};this.$el.stop().applyStyle(r,g.extend(true,[],{duration:this.options.speed,complete:function(){t._onEndTransition()}}))}if(!this.hasTransition){this._onEndTransition()}},_onEndTransition:function(){this.isSliding=false;this.options.onAfterSlide()},_slideTo:function(o){var o=o||this.current,n=Math.abs(this.translation)||0,m=this.options.orientation==="horizontal"?this.$items.outerWidth(true):this.$items.outerHeight(true),l=n+this.$carousel.width(),k=Math.abs(o*m);if(k+m>l||k<n){this._slideToItem(o)}},_slideToItem:function(l){var k=this.options.orientation==="horizontal"?l*this.$items.outerWidth(true):l*this.$items.outerHeight(true);this._slide("",-k)},add:function(n){var k=this,m=this.current,l=this.$items.eq(this.current);this.$items=this.$el.children("li");this.itemsCount=this.$items.length;this.current=l.index();this._setItemsSize();this._configure();this._removeTransition();m<this.current?this._slideToItem(this.current):this._slide("next",this.translation);setTimeout(function(){k._addTransition()},25);if(n){n.call()}},setCurrent:function(k,l){this.current=k;this._slideTo();if(l){l.call()}},next:function(){self._slide("next")},previous:function(){self._slide("prev")},slideStart:function(){this._slideTo(0)},slideEnd:function(){this._slideTo(this.itemsCount-1)},destroy:function(k){this._destroy(k)}};var i=function(k){if(h.console){h.console.error(k)}};g.fn.elastislide=function(m){var k=g.data(this,"elastislide");if(typeof m==="string"){var l=Array.prototype.slice.call(arguments,1);this.each(function(){if(!k){i("cannot call methods on elastislide prior to initialization; attempted to call method '"+m+"'");return}if(!g.isFunction(k[m])||m.charAt(0)==="_"){i("no such method '"+m+"' for elastislide self");return}k[m].apply(k,l)})}else{this.each(function(){if(k){k._init()}else{k=g.data(this,"elastislide",new g.Elastislide(m,this))}})}return k}})(jQuery,window);