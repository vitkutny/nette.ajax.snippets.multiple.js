(function ($) {
	var snippets = $.nette.ext('snippets');
	snippets.getElement = function (id) {
		return $('[id=' + this.escapeSelector(id) + ']');
	};
	snippets.updateSnippets = function (snippets, back) {
		var that = this;
		var elements = [];
		for (var i in snippets) {
			this.getElement(i).each(function () {
				var $el = $(this);
				if ($el.get(0)) {
					elements.push($el.get(0));
				}
				that.updateSnippet($el, snippets[i], back);
			});
		}
		$(elements).promise().done(function () {
			that.completeQueue.fire();
		});
	};
})(window.jQuery);
