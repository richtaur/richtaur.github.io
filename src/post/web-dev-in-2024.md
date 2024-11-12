---
title: How has web dev changed in the last decade?
date: 2024-11-12
layout: post.html
summary: Let's discuss what's new in the web dev world since the 2010s.
tags: [article]
---

Web development has changed a lot, especially in the last **14 years** since I was working directly in the field.

These days I'm making *games*, but still using *web dev tech*. For example, my upcoming game [Pixel Washer][pw_steam] is 100% [hand-written JavaScript][pw_itch]!

<p>
<iframe width="560" height="315" src="https://www.youtube.com/embed/_tClgq84l2U?si=aVYm2gwadlfY4uxL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</p>

Recently I've been researching what's new in the field since I left to pursue games.

I like to write documentation for myself as I learn new stuff. Taking the extra step to publish it helps me improve its quality *and* has the potential to help fellow devs who are investigating similar topics.

So let's do it! Naturally there are more new web dev developments than I've covered here. The topics I was most interested in include:

* TypeScript
* JavaScript Advancements
* Web Components
* JavaScript Frameworks
* CSS Advancements
* User Interface Optimization
* Containerization
* Continuous Integration/Development
* Test Driven Development
* Databases and Deployment

I'm gonna walk through each of these new developments, giving you my thoughts along the way.

## 1) TypeScript

[TypeScript][ts] is, in a nutshell, strongly typed [JavaScript][js].

It's recently skyrocketed in popularity because many developers dislike that JavaScript is loosely typed (I am not among them). TypeScript is also developed by Microsoft, one of the biggest tech companies out there, which has given it deep reach.

As you'd expect, TypeScript transpiles to JavaScript. It provides comfortable ways to structure your code, including [enums][ts_enums] and [classes][ts_classes] (the latter of which JavaScript itself now supports, more on that below).

I've actually used TypeScript to ship a few games (see my [portfolio][portfolio]) and I like it just fine.
For my personal projects I still prefer vanilla JavaScript, but for teams I recommend TypeScript for the structure it provides.

## 2) JavaScript Advancements

Back in my day (this makes me sound older than I am), every variable was declared with `var` and that was it.
Today `var` is still supported, but we also have the option of using `let` and `const`.

The former allows us to reassign the variable, while the latter doesn't. For example:

```js
// This works fine
let foo = "foo";
foo = "bar"; 
```

```js
// This also works fine
const foo = {};
foo.bar = "bar";
```

```js
// Uncaught TypeError: Assignment to constant variable.
const foo = "foo";
foo = "bar'; 
```

This is a slightly different implementation of `const` than in most C-syntax languages I've used, but once I got past that weirdness I began to really enjoy the expressiveness that `let` and `const` gave to my code. To me it's easier to read than a sea of `var` declarations.

As we mentioned, JavaScript now has *baked-in* classical inheritance, including support for
[extends][js_extends], [constructor][js_constructor], and [private][js_private] and [static][js_static] fields.

Personally I find the use of `#` to denote private members an odd choice. I'm not sure why; maybe it looks like a comment to my eyes?

```js
class Dog extends Animal {
	#privateField;
	#privateFieldWithInitializer = 42;
}
```

I'm also just not big on classical inheritance. It's super readable, which I like, but not as *portable* as I want.
Personally I prefer functional approaches; my JavaScript code ends up only making use of `new` when required by the language (e.g. `AudioContext`, `Promise`, `RegExp`, etc.).

Other JavaScript advancements include [array filters][js_filters], [generator functions][js_generators], and [Map][js_map], which is pretty cool.

If I had to choose, my favorite "new" JavaScript advancement would be the ability to write asynchronous code (via `async` and `await`) that's easy to read and write:

```js
function delay (duration) {
	return new Promise(resolve => setTimeout(resolve, duration));
}

async function myAsyncCode (durationBetweenCommands) {
	console.log("Running ...");
	await delay(durationBetweenCommands);

	console.log("Almost there..!");
	await delay(durationBetweenCommands);

	console.log("DONE!");
}

myAsyncCode(1000);
```

## 3) Web Components

Web Components are a collection of features including [custom elements][custom_elements], [shadow DOM][shadow_dom], and [HTML templates][html_templates].

First up are **custom elements**, which allow developers to create their own unique nodes.
This will certainly help prevent "div soup" which is when developers just use `<div>` elements for everything.

Custom elements also help encapsulate the code that we'll inevitablly want to attach to our nodes. Creating your own element looks something like this:

```js
// Define a chess board class
export default class ChessBoard extends HTMLElement {
	constructor () {
		super();
	}
}

// Register our custom element
customElements.define("chess-board", ChessBoard);
```

Then you can define your new element in your markup:

```html
<chess-board>Text? In MY chess board?!</chess-board>
```

Conveniently, a custom element comes with 4 built-in lifecycle callbacks:

* `connectedCallback()` is called when an element is added to the document.
* `disconnectedCallback()` is called when an element is removed from the document.
* `adoptedCallback()` is called when an element is moved to a new document.
* `attributeChangedCallback()` is called when an attribute is changed (although it requires some extra code, see below).

For a class member to change and trigger `attributeChangedCallback()`, it must be included in the class's `observedAttributes` array:

```js
export default class ChessBoard extends HTMLElement {
	// Member names in this array trigger the event
	static observedAttributes = ["color", "size"];

	constructor () {
		super();
	}

	attributeChangedCallback (name, oldValue, newValue) {
		console.log(`Attribute ${name} changed!`);
		console.log(`Old/new: ${oldValue} => ${newValue}`);
	}
}
```

Custom elements pair nicely with the **cool** and **mysterious** sounding *shadow DOM*.
What's next, **dragon DOM**?? (Sounds awesome actually!)

```js
// Define a chess board class
export default class ChessBoard extends HTMLElement {
	constructor () {
		super();
	}

	connectedCallback () {
		console.log("ChessBoard.connectedCallback()");

		// Create the shadow root
		const shadowRoot = this.attachShadow({mode: "open"});

		// Create a div container
		const divNode = document.createElement("div");

		// Attach nodes
		shadowRoot.appendChild(divNode);
	}
}

// Register our custom element
customElements.define("chess-board", ChessBoard);
```

Lastly, [HTML templates][html_templates] provide a new way to reuse markup structures:

```html
<template id="my-template">
	<p>Example</p>
</template>
```

This markup won't appear in your document by default. To use the template, reference the template then append it to the DOM, like so:

```js
const templateNode = document.getElementById("my-template");
const templateContent = templateNode.content;
document.body.appendChild(templateContent);
```

There are also [slots][slots] for even more capability.
They seem a little fiddly to me, but I bet they're handy in certain situations.

## 4) JavaScript Frameworks

It's pretty clear that [React][react] has become an industry standard web framework.
Like TypeScript, it's powered by a tech titan (this time Facebook/Meta).

It's kind of nice when there's an industry standard framework because it can make your skills more transferable between gigs.
You'll always have to learn what an individual company's architecture is like and how all the systems work together, but
having one framework to learn can be helpful, especially if the framework's opinions have informed other parts of the software.

There's also [React Native][react_native] which allows developers to create mobile applications.
*Back in my day* (again with this) we had to figure this out on our own!
You created your own Android app from scratch and embedded your HTML5 game manually.

(Anyone remember [Ludei][ludei]??
For creating fast HTML5 mobile apps, they were the only shop in town for quite a while. Great product.)

I've used many frameworks in the same vein (especially when I was at [Yahoo][yahoo]), but haven't tried React yet.
The documentation looks pretty straightforward and I'm sure it would be easy to get ramped up quickly.

Something that doesn't sit well with me is that [React strongly recommends][react_frameworks] using another framework to build apps with it.

> If you want to build a new app or a new website fully with React, we recommend picking one of the React-powered frameworks popular in the community.

You *can* use "vanilla" React, but the devs say:

> You can use React without a framework, however we’ve found that most apps and sites eventually build solutions to common problems such as code-splitting, routing, data fetching, and generating HTML.

Their suggestions include [NextJS][nextjs], [Remix][remix] (cool name), [Gatsby][gatsby] and [Expo][expo] (for native apps).
Again I haven't used React so I'm not privvy to the specifics, but a framework requiring another framework feels incomplete to me.

Web dev has kind of always felt like building upon a teetering stack of tech, so I guess it's just par for the course.

## 5) CSS Advancements

Cascading stylesheets have come a long way!
I started making websites at the *beginning of time*, that is to say, the 1990s, when the web was first created.

"Good" HTML used to be mostly tabular and looked something like this:

```html
<HTML>
	<HEAD>
		<TITLE>GEOCITIES FANSITE 1996 ZOMG</TITLE>
	</HEAD>
	<TABLE BORDER=0 CELLPADDING=0 CELLSPACING=0>
		<TR>
			<TD>You get the idea.</TD>
		</TR>
	</TABLE>
</HTML>
```

And when I was developing websites for a living, we still needed to use floating `div` elements with ["the clearfix"][the_clearfix] everywhere to make flexible, accessible layouts.

Today we're lucky to have some cool new advancements including:

* [Grid][grid]: a powerful way to represent markup in a matrix pattern (to learn this by playing a game, see [Grid Garden][grid_garden]).
* [Flex-box][flex-box]: an amazingly thorough way to make semantic, accessible layouts (to learn *this* by playing a game, see [Flexbox Froggy][flex-box_froggy]).
* [Animations][css_animations]: lovely tools for transitioning between CSS values.

There are also CSS frameworks gaining popularity. There were only a couple I used at various jobs, one of them being [Less][less]. Today I honestly don't think I'd need a framework at all, thanks to how mature the [CSS Object Model][cssom] has become.
I mean look at all these powerful new features:

* [CSS variables][css_variables]
* [CSS data types][css_data_types]
* [Sizing units][sizing_units]
* [Value functions][css_value_functions]

Were I embarking on an exciting new CSS project, I'd probably explore all these hot new features before even considering a CSS framework. Still, I do enjoy a good [reset][reset] before attemping to implement my own design.

## 6) UI Optimization

User interface optimizations have had a lot more scrutiny in recent years.
Performance was always a big issue at Yahoo especially, as we'd *obsess* over page load times and file sizes.
At Yahoo they always liked to say:

> The fastest page you can possibly load is about:blank

We've got to deliver bytes to our users, but the fewer bytes, the better the performance.
There are of course tried-and-true ways to compress our data, including some of my favorites like [Webpack][webpack] and [TinyPNG][tinypng].

Here are some additional things to consider when optimizing UI:

* [Flash of unstyled content][flash_unstyled]
* [What is Reflow and Repaint in Simple terms][what_is_reflow]
* [What forces layout / reflow][what_forces_reflow]
* [Render-tree Construction, Layout, and Paint][render-tree]
* [Interaction to Next Paint (INP)][inp]

Probably the main thing to consider is to avoid ["layout thrashing"][layout_thrashing].
Some common optimization best practices include leveraging shadow DOM, batching changes to the DOM, and focusing on properties that don't trigger reflows.

## 7) Containerization

I was making TypeScript games fulltime when containerization first became common.

We used to have loads of dependencies and environment variables to manage, which often broke and created desyncs between developers and their systems. Then we started using [Docker][docker] and most of those problems melted away.

Honestly it felt like a welcome improvement. Stuff "just worked" more often, and updating was isolated to just the container instead of multiple dependencies with their own configurations. The only downside was the large memory footprint it took up, but we all had beefy machines, so it was fine.

I'm pretty sure there's a financial cost to using something like Docker as an enterprise solution (which I don't love), but
there's also [Kubernetes][kubernetes] which has similar features and is open-source.

Usually when I'm spinning up personal projects, containerization feels unnecessary (and out of scope) so I haven't messed with it much on my own. If I did want to explore it, I'd start with Kubernetes.

## 8) CI/CD

When I was looking into new web tech, [continuous integration][continuous_integration] and [continuous deployment][continuous_deployment] (or [CI/CD][ci_cd]) were brought up ... continuously!

**CI** continuously integrates the work of fellow engineers together to limit conflicts and other issues.

**CD** continously deploys the software regularly to help spot bugs and other issues quickly.

These are both strategies that were lightly practiced at web shops where I worked, but we didn't have the benefit of the experience and new terminology to build best practices around.

As a solo developer, **CI** isn't as relevant to me.
My work schedule is too variable to automate deployment, but I have implemented [GitHub Actions][github_actions] for [Pixel Washer][pw_steam].
For example, all I have to do is push to the `main` branch and my game deploys automatically to [Itch][pw_itch].
Pretty cool! (Shout out to [Geoff Blair][gb] for showing me that GitHub can do that.)

<p>
<iframe width="560" height="315" src="https://www.youtube.com/embed/vQ7G_N6Z4Gk?si=b42hrGY6s-d1cMfg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</p>

## 9) TDD

[Test-driven development][tdd] (TDD) involves automated unit tests that let you know if your code is working propertly (or not).

* ✅ Your code is working
* ⛔️ Your code sucks

It creates a situation where even if your *changes* aren't more stable, you are more aware of the stability of your software. That's a good thing!

Of course, there are trade-offs.

Preparing for unit tests can create an extra step, where your code needs to be separated into a consumable API for the tests.
Sometimes this is easy (or even free), if the architecture is setup for it.
Or maybe the developer(s) just like working that way.

Other times it's a slog, requiring messy refactors.
I read somewhere that described TDD as "simple but not easy" and I think that's accurate.

Some of the teams I worked with at Yahoo required unit tests, others didn't.
Most startups I worked with didn't even consider TDD.
I think the focus was on speed and ability to pivot, rather than stability.

There are some developers who swear by TDD, and can't believe when others don't practice it.
"You must write such unstable code!" they must think (and are often correct).

TDD is definitely something that large software companies will want to explore (or integrate), but for solo game developers (like me) it might be out of scope. Either way it's nice that we have a way to make our code more stable.

## 10) Databases and Deployment

I'll just shove these two topics together because they both start with "D" and I'm nearing the end of what I studied (and for the [D&D][dnd] reference).

In my search for latest/greatest web tech, databases naturally came up a lot.
"Back in my day" (this is the last time I promise) we used [MySQL][mysql] for most projects.
The most common tech stack I'd use was nicknamed [LAMP][lamp] (Linux, Apache, MySQL, and PHP), since they all worked together so nicely.

Today there's no shortage of database options.
I haven't yet tried it out, but the database that caught my eye the most was definitely [PostgreSQL][postgresql].
It's open source and its users are vocal about how much they love it.
Someday I'll think of an excuse to use it for a project.

([MongoDB][mongodb] also received lots of praise but from what I've seen "source available" is always less appealing than "open source".)

Lastly, **cloud deployment** is much more of a thing than when I was deep in web dev land.
We used to come up with our own server infrastructure, load balancing, content distribution, etc. but these days it's more common to use a cloud platform.

There's no shortage of platforms, but far and away the most popular one I saw was [Amazon Web Services][aws] (AWS).
Fortunately for me, I have experience deploying websites via AWS.
For example, the [Lost Decade Games][ldg] website still runs on AWS!

However my websites are mostly serving static files (including [this one][richtaur_github]!).
To get my AWS skills up to par, I should deploy a server with a database and all that jazz.
Maybe someday! I've been thinking about designing a project that would use all this tech I talk about here.

## Thanks For Reading

A project that uses all this cool new tech would be fun to design and cool to implement.
If I do end up hacking on something new and cool, you can be sure I'll write about it here.
[Subscribing][subscribe] is still a thing, via the power of RSS!

In the meantime check out [my podcast][mtg] and I'm trying to be more active on [Bluesky][bsky].
Hope this was interesting and/or entertaining.
See you around!

[js]: https://developer.mozilla.org/en-US/docs/Web/JavaScript
[ts]: https://www.typescriptlang.org/
[pw_itch]: https://valadria.itch.io/pixel-washer
[pw_steam]: https://store.steampowered.com/app/2572060/Pixel_Washer/
[ts_enums]: https://www.typescriptlang.org/docs/handbook/enums.html
[ts_classes]: https://www.typescriptlang.org/docs/handbook/classes.html
[portfolio]: /portfolio/
[js_extends]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends
[js_constructor]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor
[js_private]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_properties
[js_static]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static
[js_filters]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
[js_generators]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
[js_map]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
[custom_elements]: https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements
[shadow_dom]: https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM
[html_templates]: https://developer.mozilla.org/en-US/docs/Web/API/HTMLTemplateElement
[slots]: https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_templates_and_slots
[react]: https://react.dev/
[react_native]: https://reactnative.dev/
[ludei]: https://github.com/ludei
[yahoo]: https://www.yahoo.com/
[react_frameworks]: https://react.dev/learn/start-a-new-react-project
[nextjs]: https://nextjs.org/
[remix]: https://remix.run/
[gatsby]: https://www.gatsbyjs.com/
[expo]: https://expo.dev/
[the_clearfix]: https://css-tricks.com/snippets/css/clear-fix/
[grid]: https://web.dev/learn/css/grid
[grid_garden]: https://cssgridgarden.com/
[flex-box]: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
[flex-box_froggy]: https://flexboxfroggy.com/
[css_animations]: https://developer.mozilla.org/en-US/docs/Web/CSS/animation
[less]: https://lesscss.org/
[cssom]: https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model
[css_variables]: https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties
[css_data_types]: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Types
[sizing_units]: https://web.dev/learn/css/sizing
[css_value_functions]: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Functions
[reset]: https://piccalil.li/blog/a-more-modern-css-reset/
[webpack]: https://webpack.js.org/
[tinypng]: https://tinypng.com/
[flash_unstyled]: https://en.wikipedia.org/wiki/Flash_of_unstyled_content
[what_is_reflow]: https://gist.github.com/gopal1996/de0b218253fcf8c9634bd8029d14eaf4
[what_forces_reflow]: https://gist.github.com/paulirish/5d52fb081b3570c81e3a
[render-tree]: https://web.dev/articles/critical-rendering-path/render-tree-construction
[inp]: https://web.dev/articles/inp
[layout_thrashing]: https://web.dev/articles/avoid-large-complex-layouts-and-layout-thrashing
[docker]: https://www.docker.com/
[kubernetes]: https://kubernetes.io/
[continuous_integration]: https://en.wikipedia.org/wiki/Continuous_integration
[continuous_deployment]: https://en.wikipedia.org/wiki/Continuous_deployment
[ci_cd]: https://en.wikipedia.org/wiki/CI/CD
[github_actions]: https://github.com/features/actions
[gb]: https://www.geoffblair.com/
[tdd]: https://en.wikipedia.org/wiki/Test-driven_development
[dnd]: https://en.wikipedia.org/wiki/Dungeons_%26_Dragons
[mysql]: https://www.mysql.com/
[lamp]: https://en.wikipedia.org/wiki/LAMP_(software_bundle)
[postgresql]: https://www.postgresql.org/
[mongodb]: https://www.mongodb.com/
[aws]: https://aws.amazon.com/
[ldg]: http://www.lostdecadegames.com/
[richtaur_github]: https://github.com/richtaur/richtaur.github.io
[subscribe]: /rss.xml
[mtg]: https://www.valadria.com/make-the-game/
[bsky]: https://bsky.app/profile/richtaur.bsky.social