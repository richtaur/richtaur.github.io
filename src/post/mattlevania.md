---
title: Mattlevania
date: 2018-11-24
layout: post.html
summary: Matt + Castlevania = Mattlevania.
tags: [prototype]
image: title.jpg
thumbnail: thumb.jpg
---

<div>
  ![Mattlevania](/media/images/post/mattlevania/title.jpg)
</div>

[Castlevania][castlevania] is one of my favorite video game franchises. The gothic theme, fun gameplay, [hypnotic](https://joshuamorse.bandcamp.com/album/vlad) [music](https://joshuamorse.bandcamp.com/album/vlad-ii), [vibrant colors](https://www.youtube.com/watch?v=Aip2aIt0ROM&t=413), and yes, even the static jumping mechanic has had a major influence on me since the 80s.

I’ve always wanted to make my own game that felt like Castlevania, but so far all I have to show for it is a series of unfinished prototypes. To break that pattern I thought I’d talk about a recent attempt using [Unity](https://unity3d.com/).

<div>
  ![Mattlevania](/media/images/post/mattlevania/cv02.gif)
</div>

This prototype didn’t get very far along, but I learned a lot while hacking. For instance: traditional side-scrolling platformer games don’t really use plug 'n play physics engines.

(Of course this is a broad, sweeping generalization. Some of the games in this genre certainly do use generic physics engines. Some games utilize kind of a hybrid of their own and a physics library or another.)

<div>
  ![Mattlevania](/media/images/post/mattlevania/cv01.gif)
</div>

But when making a game like Castlevania, it's doubtful the developers would simply use [Box2D](https://box2d.org/) and call it a day. It's too loose.

Instead, it seems like most side-scrolling platformer games use their own kind of curated physics. In Unity for example, I’d probably use the built-in [collision detection](https://docs.unity3d.com/ScriptReference/MonoBehaviour.OnTriggerEnter2D.html), but not the actual [Physics2D](https://docs.unity3d.com/Manual/Physics2DReference.html).

<div>
  ![Mattlevania](/media/images/post/mattlevania/cv03.gif)
</div>

For features like player jumping, gravity, knock-back ... I'd probably code that myself to tightly control how it feels.

It seems like velocity and collision responses would accomplish most of what a Castlevania game would need, but if I continued I'd likely spend much of my time [oiling](https://www.fortressofdoors.com/oil-it-or-spoil-it/) various areas to improve [game feel](https://en.wikipedia.org/wiki/Game_feel).

<div>
  ![Mattlevania](/media/images/post/mattlevania/cv05.gif)
</div>

After some fun experiments in Mattlevania, back on the shelf it goes. Perhaps I will dust it off someday.

If nothing else, Mattlevania made for my most popular tweet:

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">you can now kill Dracula in my flawless Castlevania remake <a href="https://twitter.com/hashtag/gamedev?src=hash&amp;ref_src=twsrc%5Etfw">#gamedev</a> <a href="https://t.co/L81GWSoi1M">pic.twitter.com/L81GWSoi1M</a></p>&mdash; Matt Hackett (@richtaur) <a href="https://twitter.com/richtaur/status/869771625557880832?ref_src=twsrc%5Etfw">May 31, 2017</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

[castlevania]: https://en.wikipedia.org/wiki/Castlevania_(1986_video_game)
