requirejs.config({
    paths: {
        reqwest: 'https://raw.github.com/ded/reqwest/master/src/reqwest',
        pubsub: 'lib/gu/pubsub',
        handlebars: 'lib/gu/handlebars',
        bonzo: 'https://raw.github.com/ded/bonzo/master/bonzo.min',
        qwery: 'https://raw.github.com/ded/qwery/master/qwery.min'
    }
});


require(['mod/article'], function() {
	
});