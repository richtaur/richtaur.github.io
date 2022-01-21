var Metalsmith = require("metalsmith");
var collections = require("metalsmith-collections");
var markdown = require("metalsmith-markdown");
var layouts = require("metalsmith-layouts");
var permalinks = require("metalsmith-permalinks");
var handlebars = require("handlebars");
var moment = require("moment");
var fs = require("fs");

const URL = "http://www.richtaur.com/";

// Helper: extractDomain
handlebars.registerHelper("extractDomain", function (url) {
	if (url.indexOf("://") > -1) {
		return url.split("/")[2];
	} else {
		return url.split("/")[0];
	}
});

// Helper: formatDate
handlebars.registerHelper("formatDate", function (date) {
	var mom = moment(date);
	return mom.format("MMM D, Y");
});

// Helper: formatDateRSS
handlebars.registerHelper("formatDateRSS", function (date) {
	var mom = moment(date);
	return mom.format("Y-MM-DDTHH:mm:ssZ");
});

// Helper: image
handlebars.registerHelper("image", function (path) {
	return URL + "media/images/" + path;
});

// Helper: link
handlebars.registerHelper("link", function (path) {
	return URL + path;
});

// Partial: cta
var ctaContents = fs.readFileSync("layouts/cta.html", "utf8");
handlebars.registerPartial("cta", ctaContents)

// Partial: header
var headerContents = fs.readFileSync("layouts/header.html", "utf8");
handlebars.registerPartial("header", headerContents)

// Partial: summary
var summaryContents = fs.readFileSync("layouts/summary.html", "utf8");
handlebars.registerPartial("summary", summaryContents)

// Partial: footer
var footerContents = fs.readFileSync("layouts/footer.html", "utf8");
handlebars.registerPartial("footer", footerContents)

Metalsmith(__dirname)
	.metadata({
		siteName: "richtaur",
		description: "Articles and drawings by Matt Hackett, a game developer in California.",
		url: URL,
		date: new Date()
	})
	.source("./src")
	.destination("./htdocs")
	.clean(false)
	.use(collections({
		posts: {
			pattern: "post/*.md",
			sortBy: "date",
			reverse: true
		}
	}))
	.use(markdown())
	.use(permalinks())
	.use(layouts({
		engine: "handlebars"
	}))
	.build(function(err, files) {
		if (err) { throw err; }
	});
