define(['reqwest', 'pubsub'], function(ajax, pubsub) {
	var uris = {
			search: 'search',
			base: 'http://content.guardianapis.com/'
		},
		default_params = {
			'format': 'json',
			'api-key': 'techdev-internal'
		};
	
	function toArray(obj) {
		var arr = [];
		for (var key in obj) {
			arr.push(obj[key]);
		}
		return arr;
	}

	function getItem(id) {
		var data = default_params;
		data['show-fields'] = 'all';
		ajax({
			url: uris.base + id,
			data: data,
			type: 'jsonp',
			success: function(res) {
				pubsub.publish('gapi:gotitem', res);
			}
		});
	}

	function get(what) {
		what = what.charAt(0).toUpperCase() + what.slice(1);
		arguments = toArray(arguments);
		arguments.splice(0, 1);
		function_name = 'get' + what;
		eval(function_name + '.apply(this, arguments);');
	}

	return {
		get: get
	}
});