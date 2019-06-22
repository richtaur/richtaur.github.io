---
title: Make One Game at a Time
date: 2019-06-22
layout: post.html
summary: "Game design principle: make one game at a time."
tags: [article]
---

_Here's a recent addition to [My Game Design Principles](/post/game-design-principles/):_

Be realistic with yourself: how many games are hidden within the game you're making? Does (nearly) everything happen within one primary game simulation? If not, you're actually making multiple games and have potentially magnitudes more work to do.

Classic RPGs are generally multiple games rolled into one: map exploration, turn-based combat, managing equipment and economies, and often more. Development work on the map exploration doesn't necessarily make the combat better, and vice versa.

Aside from some menu scenes, **Spelunky** is one game in that the bulk of the gameplay happens in the core simulation: move your avatar around, jump over blocks, enter doorways to other areas. Worlds are selected and items are purchased through the main game loop.

Think about how this applies to some of your favorite classics: The original **Super Mario Bros.** is just one game (the micro: jump around, go right). While **Super Mario Bros. 3** is at least two games (micro: jump and go right, macro: navigate the overworld map, avoid hazards, collect items, etc.).

Some of the best games ever made have many embedded game loops. But when you have multiple game loops as a small or solo team, you're running at less development capacity:

* 1 game loop = 100% development capacity
* 2 game loops = 50% capacity
* 3 game loops = 33% capacity
* 4 game loops = 25% capacity
* etc.

When you're making only **one game**, you can develop at full capacity. Every improvement makes the whole game better instead of just a portion.
