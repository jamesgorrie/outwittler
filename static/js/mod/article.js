define(['lib/gu/g', 'pubsub', 'bonzo', 'qwery'], function(g, pubsub, bonzo, qwery) {
	var id = '/p/396m3';

	function init() {
		g.get('item', id);
	}

	function makeArticle(res) {
		var article = res.response.content,
			article_body = article.fields.body,
			article_container = qwery('.article');
		console.log(article_container);
		bonzo(article_container).append(article_body);
	}

	// subscribe
	pubsub.subscribe('gapi:gotitem', makeArticle);

	// go!
	init();
});