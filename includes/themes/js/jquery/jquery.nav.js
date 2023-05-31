/*
 * jQuery One Page Nav Plugin
 * http://github.com/davist11/jQuery-One-Page-Nav
 *
 * Copyright (c) 2010 Trevor Davis (http://trevordavis.net)
 * Dual licensed under the MIT and GPL licenses.
 * Uses the same license as jQuery, see:
 * http://jquery.org/license
 *
 * Edited by Peter Viszt (http://visztpeter.me)
 */

(function(d,c,a,e){
    var b=function(g,f){
        this.elem=g;
        this.$elem=d(g);
        this.options=f;
        this.metadata=this.$elem.data("plugin-options");
        this.$nav=this.$elem.find("a");
        this.$win=d(c);
        this.sections={};
        this.didScroll=false;
        this.$doc=d(a);
        this.docHeight=this.$doc.height()};
    b.prototype={
        defaults:{
            //currentClass:"current",
            changeHash:false,
            easing:"swing",
            filter:":not(.disabled)",
            scrollSpeed:750,
            scrollOffset:0,
            scrollThreshold:0.5,
            begin:false,
            end:false,
            scrollChange:false},
            init:function(){
                var f=this;
                f.config=d.extend({},f.defaults,f.options,f.metadata);
                if(f.config.filter!==""){
                    f.$nav=f.$nav.filter(f.config.filter)
                }
                f.$nav.on("click.onePageNav",d.proxy(f.handleClick,f));
                f.getPositions();
                f.bindInterval();
                f.$win.on("resize.onePageNav",d.proxy(f.getPositions,f));
                return this},
            /*
            adjustNav:function(f,g){
                f.$elem.find("."+f.config.currentClass).removeClass(f.config.currentClass);
                },
            */
            bindInterval:function(){
                var g=this;
                var f;
                g.$win.on("scroll.onePageNav",function(){g.didScroll=true});
                g.t=setInterval(
                    function(){
                        f=g.$doc.height();
                        if(g.didScroll){
                            g.didScroll=false;
                            g.scrollChange()
                        }
                        if(f!==g.docHeight){
                            g.docHeight=f;
                            g.getPositions()
                        }},
                    250)},
                getHash:function(f){return f.data("slug")},
                getPositions:function(){
                        var h=this;
                        var i;
                        var g;
                        var f;
                        h.$nav.each(function(){
                            i=h.getHash(d(this));
                            f=d("#"+i);
                            if(f.length){
                                g=f.offset().top;h.sections[i]=Math.round(g)-h.config.scrollOffset
                            }
                        })
                    },
                getSection:function(i){
                        var f=null;
                        var h=Math.round(this.$win.height()*this.config.scrollThreshold);
                        for(var g in this.sections){
                            if((this.sections[g]-h)<i){
                                f=g
                            }
                        }
                        return f
                    },
                /*
                handleClick:function(j){
                        var g=this;
                        var f=d(j.currentTarget);
                        var i=f.parent();
                        var h="#"+g.getHash(f);
                        if(!i.hasClass(g.config.currentClass)){
                            if(g.config.begin){
                                g.config.begin()
                            }
                            g.adjustNav(g,i);
                            g.unbindInterval();
                            d.scrollTo(h,
                                       g.config.scrollSpeed,
                                       {axis:"y",
                                        easing:g.config.easing,
                                        offset:{top:-g.config.scrollOffset},
                                        onAfter:function(){
                                                if(g.config.changeHash){
                                                    c.location.hash=h
                                                }
                                                g.bindInterval();
                                                if(g.config.end){
                                                    g.config.end()
                                                }
                                            }
                                        }
                                       )
                        }
                        j.preventDefault()
                },*/
                scrollChange:function(){
                        var h=this.$win.scrollTop();
                        var f=this.getSection(h);
                        var g;
                        if(f!==null){
                            //g=this.$elem.find('a[data-slug$="'+f+'"]').parent();
                            //if(!g.hasClass(this.config.currentClass)){
                                //this.adjustNav(this,g);
                                if(this.config.scrollChange){
                                    this.config.scrollChange(g)
                                }
                            //}
                        }
                    },
                unbindInterval:function(){
                    clearInterval(this.t);
                    this.$win.unbind("scroll.onePageNav")
                    }
        };
        b.defaults=b.prototype.defaults;
        d.fn.onePageNav=function(f){
                return this.each(function(){
                        new b(this,f).init()
                    })
            }
})
(jQuery,window,document);

/**
 * Copyright (c) 2007-2012 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * @author Ariel Flesler
 * @version 1.4.3
 */
;(function($){var h=$.scrollTo=function(a,b,c){$(window).scrollTo(a,b,c)};h.defaults={axis:'xy',duration:parseFloat($.fn.jquery)>=1.3?0:1,limit:true};h.window=function(a){return $(window)._scrollable()};$.fn._scrollable=function(){return this.map(function(){var a=this,isWin=!a.nodeName||$.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!isWin)return a;var b=(a.contentWindow||a).document||a.ownerDocument||a;return/webkit/i.test(navigator.userAgent)||b.compatMode=='BackCompat'?b.body:b.documentElement})};$.fn.scrollTo=function(e,f,g){if(typeof f=='object'){g=f;f=0}if(typeof g=='function')g={onAfter:g};if(e=='max')e=9e9;g=$.extend({},h.defaults,g);f=f||g.duration;g.queue=g.queue&&g.axis.length>1;if(g.queue)f/=2;g.offset=both(g.offset);g.over=both(g.over);return this._scrollable().each(function(){if(!e)return;var d=this,$elem=$(d),targ=e,toff,attr={},win=$elem.is('html,body');switch(typeof targ){case'number':case'string':if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(targ)){targ=both(targ);break}targ=$(targ,this);if(!targ.length)return;case'object':if(targ.is||targ.style)toff=(targ=$(targ)).offset()}$.each(g.axis.split(''),function(i,a){var b=a=='x'?'Left':'Top',pos=b.toLowerCase(),key='scroll'+b,old=d[key],max=h.max(d,a);if(toff){attr[key]=toff[pos]+(win?0:old-$elem.offset()[pos]);if(g.margin){attr[key]-=parseInt(targ.css('margin'+b))||0;attr[key]-=parseInt(targ.css('border'+b+'Width'))||0}attr[key]+=g.offset[pos]||0;if(g.over[pos])attr[key]+=targ[a=='x'?'width':'height']()*g.over[pos]}else{var c=targ[pos];attr[key]=c.slice&&c.slice(-1)=='%'?parseFloat(c)/100*max:c}if(g.limit&&/^\d+$/.test(attr[key]))attr[key]=attr[key]<=0?0:Math.min(attr[key],max);if(!i&&g.queue){if(old!=attr[key])animate(g.onAfterFirst);delete attr[key]}});animate(g.onAfter);function animate(a){$elem.animate(attr,f,g.easing,a&&function(){a.call(this,e,g)})}}).end()};h.max=function(a,b){var c=b=='x'?'Width':'Height',scroll='scroll'+c;if(!$(a).is('html,body'))return a[scroll]-$(a)[c.toLowerCase()]();var d='client'+c,html=a.ownerDocument.documentElement,body=a.ownerDocument.body;return Math.max(html[scroll],body[scroll])-Math.min(html[d],body[d])};function both(a){return typeof a=='object'?a:{top:a,left:a}}})(jQuery);