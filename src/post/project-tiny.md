---
title: Project Tiny
date: 2021-10-11
layout: post.html
summary: Thoughts about a game concept inspired by the classic Super Nintendo game ActRaiser.
tags: [article]
image: title.png
thumbnail: thumb.jpg
---

<div>
  ![Project Tiny](/media/images/post/project-tiny/title.png)
</div>

[ActRaiser][ActRaiser] has been one of my favorite games for about as long as I can remember.
Recently Square Enix surprised me with the release of a remake, [Actraiser Renaissance][Actraiser Renaissance], so now seemed like a good time to write about this old project.

Every year or so I play through the original ActRaiser all the way to the end and enjoy every minute of it. Naturally, this means I want to make a game inspired by it. But ActRaiser is a complicated game, split into two distinct genres: side-scrolling platformer and town simulator. The platforming part is fine, but I've always been more interested in the town simulator.

<div>
  ![ActRaiser](/media/images/post/project-tiny/actraiser.png)
</div>

I find the actual game design of ActRaiser's town simulator nebulous, something I have a hard time describing in detail.
I'm not really interested in directly copying game mechanics anyway, so I figured a good place to start would be to just throw down some assets and see what happens.

<div>
  ![Project Tiny](/media/images/post/project-tiny/env.png)
</div>

Thanks to fine resources like [RPGClassics][RPGClassics], extracting the sprites was easy and straightforward.
Then I imported them into Unity and started hacking.

<div>
  ![Project Tiny](/media/images/post/project-tiny/3d.png)
</div>

The tiny little people that run around in ActRaiser are truly delightful, so I wanted to see them moving up and down my screen as soon as possible. This created the need for a pathfinding algorithm, my favorite being [A*][astar].

This was around 2017, when I barely knew how to use Unity. So even though I had a [public A* implementation][repo] of my own, I used a guide I found online to help me do it "the Unity way" which is where I struggled at the time.

<div>
  ![Project Tiny](/media/images/post/project-tiny/tiny-astar.gif)
</div>

The implementation had some issues, but worked well enough. Next: what's the gameplay?
Whenever I play ActRaiser I enjoy the simplicity of it, but I also crave just a little bit more. Some kind of resource-gathering mechanics would probably scratch that itch, so I hacked on that idea.

<div>
  ![Project Tiny](/media/images/post/project-tiny/tiny-harvest.gif)
</div>

Within a few hours, the little peons could be commanded to gather resources from nearby trees. I didn't have any "wood" sprite from the assets so peons grab _dogs_ from the trees (to represent wood). Bark!

Peons could also be commanded to create houses and even windmills for some reason. None of these entities _did_ anything yet, but it was fun to build a little bit and watch a tiny town (of sorts) grow over time.

## Summary

Project Tiny was a fun little project, something to help me learn Unity while getting to spend some intimate time with one of my favorite video games. I didn't stick with it for long, but I'm pleased to say that it's led to another more successful project. Stay tuned!

[ActRaiser]: https://en.wikipedia.org/wiki/ActRaiser
[Actraiser Renaissance]: https://square-enix-games.com/en_US/games/actraiser-renaissance
[RPGClassics]: http://shrines.rpgclassics.com/snes/actraiser/
[astar]: https://en.wikipedia.org/wiki/A*_search_algorithm
[repo]: https://github.com/richtaur/astarjs
