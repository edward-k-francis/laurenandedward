var feed = new Instafeed({
    get: 'tagged',
    tagName: 'laurenandedward',
	limit: '28',
    clientId: '457f8525e08841ca83fdb6b57bcacd88',
	template: '<span style="padding:1%;"><a class="fancybox" data-fancybox-group="instagram" href="{{image}}" title="{{caption}}"><img src="{{image}}" class="size-fourth wp-post-image" /></a></span>',
    resolution: 'standard_resolution',
});

var win = $(window),
    doc = $(document);

win.scroll(function(){
    if( win.scrollTop() >= doc.height() - win.height() - 1 && feed.hasNext()) {
        feed.next();
    }
}).scroll();

feed.run();