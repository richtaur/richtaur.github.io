---
title: Singular Capability
date: 2019-06-15
layout: post.html
summary: "Game design principle: each entity should do just one thing."
tags: [article]
---

_Here's a recent addition to [My Game Design Principles](/post/game-design-principles/):_

Each entity in a game should do just one thing (at least to start). Don’t overcomplicate it by adding too much functionality.

Think of the **hookshot** in **Zelda** games. Immediately it is more involved than a sword: the hook extends outwards until it finds a target -- or reaches the end of its length -- and then returns. Compared to, say a hammer, this is already intricate.

![Hookshot](/media/images/post/principles/hookshot.png)

Beyond that, its effect is contextual: when used against enemies it can stun, hurt, or kill them. It can be used to collect items or even pull Link over pits. Of course it can pull levers, too. This is really cool and perhaps someday your game can build towards tools like this. For a small team, however, it's too much functionality, too expensive for one item.

Nintendo has massive resources and can afford to spend lavish amounts of time developing and testing complex items like the hookshot. For a small developer with fewer resources, that kind of extravagance makes more sense as a [core mechanic](http://flinthook.com/).

**Shovel Knight** is a good example of how entities _can_ be elegantly multi-purpose: The shovel can be used to dig up treasure, as a melee weapon, or to bounce on enemies' heads. But its uses are manageable and it is tightly coupled to the protagonist's name, look, and core mechanics.

![Shovel Knight](/media/images/post/principles/shovel.png)

In your game, the Zelda hookshot could be split into a handful of different items with discrete capabilities. These individual items would be easier to develop, easier to teach the player, easier AI to program, and easier to scale. A handful of items might bring more to the table than just one.

**Singular capability** = less to trip over, more bang for the buck.
