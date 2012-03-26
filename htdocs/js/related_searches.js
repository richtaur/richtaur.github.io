(function () {

// Setup
var stageNode = $("#stage");
var photoNode = $("#stage img");
var activeNode = photoNode;
var gamuts = [];

var STANDARD_DURATION = 1000;
var WIDTH = photoNode.width();
var HEIGHT = photoNode.height();

// Load up an image
gamuts.push((function () {
	var imageNodes = {};

	return function (node, parent) {
		var src = parent.attr("data-image-src");
		if (!src) { return; }

		// TODO: why wait to load the image?
		$(activeNode).fadeOut(STANDARD_DURATION, function () {
			var imageNode = imageNodes[src];
			if (imageNode) {
				activeNode = imageNode;
				imageNode.src = src;
				$(imageNode).fadeIn(STANDARD_DURATION);
			} else {
				var imageNode = new Image();
				stageNode.append(imageNode);
				$(imageNode).css("opacity", 0);
				imageNode.onload = function () {
					activeNode = imageNode;
					imageNode.width = WIDTH;
					imageNode.height = HEIGHT;
					$(imageNode).animate({
						"opacity": 1
					}, STANDARD_DURATION);
				};
				imageNode.src = src;
				imageNodes[src] = imageNode;
			}
		});

		return true;
	};
})());

// Include an iframe
gamuts.push((function () {
	var iframeNode = $("#stage iframe");
	$(iframeNode).hide();

	return function (node, parent) {
		var src = parent.attr("data-iframe-src");
		if (!src) { return; }

		iframeNode.attr("src", src);
		$(activeNode).fadeOut(STANDARD_DURATION, function () {
			iframeNode.css("opacity", 0);
			$(iframeNode).show();
			//$(iframeNode).fadeIn(STANDARD_DURATION);
			$(iframeNode).animate({
				"opacity": 1
			}, STANDARD_DURATION);
			activeNode = iframeNode;
		});

		return true;
	};
})());

// Run the gamut when a link is clicked
$("#bd ul li a").click(function (e) {
	var node = $(this);
	var parent = node.parent();
	for (var i = 0, j = gamuts.length; i < j; ++i) {
		var result = gamuts[i](node, parent);
		if (result === true) {
			e.preventDefault();
			break;
		}
	}
});

})();
