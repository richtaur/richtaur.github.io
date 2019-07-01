---
title: My Game Design Principles
date: 2019-06-09
layout: post.html
summary: The principles that guide my personal game design.
tags: [article]
---

There are countless decisions to make when developing games. For personal projects, I realized I kept falling in the same traps and could benefit from some **guiding principles** to help avoid them. Some early decisions in particular (eg. 2D or 3D? Gamepad or touch input?) I've determined can completely derail a personal project of mine.

Now, to be clear these are separate from any professional principles. Professional projects have so many external variables, stakeholders, platform requirements, client needs, etc. that by their nature must be flexible and specific to the project. These personal principles take a distant back seat in that context.

Also, I use “game design” as an umbrella here. When working on a solo project one must wear every kind of hat: game designer, programmer, artist, content creator, you name it. Each component must be created with intent, and to me “design” works as a general term here.

Without further ado, here are my game design principles in no particular order:

## Simple technology

Avoids code debt, hating life. Do a lot with a little.

## Optimization unnecessary

I don't really enjoy optimizing; it feels like paying for past mistakes.

## Native implementation

Game components utilize each other instead of building on top of them. Think in-game explosion entities over band-aiding some explosion system into the game.

## Diegetic UI

When possible, attempt to represent data with in-game interfaces instead of overlaying UI. A great example is the spinal cord health bar in **Dead Space**.

## No modes

Avoid modes, leaning towards doing everything within the same system. Instead of a Combat Mode, can you just stay in Explore Mode or whatever and utilize that? Think the original **The Legend of Zelda** (exploration = combat) over **Ocarina of Time** (ugh, target mode).

## Fertile soil for art

Avoid animation, play to my strengths. Favor 2D.

## Simple mechanics

Avoid awkward control schemes, explaining complicated things. Think "just tap to spawn a unit" over "up is jump, A is melee, B is projectile, A+B together is Super Power ..."

## Singular input

Click/tap only. Avoid supporting an exhausting number of keyboards/gamepads (see: [A Wizard's Lizard][awl]).

## Webby content

In a webby design, adding a new thing is beneficial to all. Think adding a new item to the mix in **Spelunky**. Avoids content crunch. (Article on "webby" designs coming soon, watch this space.)

## Turn-based

Avoids countless problems: performance, debugging, you name it.

## Organic difficulty

Instead of UI for selecting difficulty (easy, medium, hard), bake it into the gameplay itself.
Think gradually reducing difficulty based on failure or an opt-in hard-mode with risk/reward (e.g. enter the grotto or avoid it; pick up the eggplant or ignore it).

## Surprise the designer

Emergent gameplay. “Whoa, didn't expect that!” should be a reaction the designer has at some point during development.

## Cautious randomness

Don't negatively surprise the player with unavoidable random outcomes.
Let them prepare for it; prefer visualized randomness when possible.
Drawing cards is good (e.g. take a look at the top 5 cards of your deck), a gun exploding in your face is bad (oops, there was a 10% chance it would blow up, no way to know).

## Base 1 first

Get a solid handle of base 1 before moving on to base 10 or even 100. Think chess -- a piece is taken or not. They have 1 health. If your game can't handle that, maybe tacking on HP (e.g. 10 or 100) is not the solution. Don't hide behind the numbers. Large numbers have their place (forgiveness, etc.) but built on a solid, understood base.

## Avoid hungry designs

A hungry design is one that begs for more content. Like in **Minecraft**, you could add new tools, elements, monsters, all day long. With an eating mechanic, it begs for more cooking/ingredient options. It's kind of an endless pit of content, something I'd never be able to finish.

**Tetris** on the other hand is not hungry (or, it is satiated). Nothing about Tetris makes players desire a hamburger or a different variety of gun etc. It feels “done” at an early stage.

## Perfect information systems

Don't have features that only exist behind the curtains. If there's some magic “this tile has a 50% chance to kill you” then show it. Anything the game is doing the player should be able to know about (with obvious exceptions for features like Fog of War, etc.).

## Let the player have the fun

As [Sid Meier][sid] points out, one of three entities can be having the fun: the player, the designer, or the computer. Let the player have the fun.

## Singular capability

Each entity in a game should do just one thing (at least to start). Don't overcomplicate it by adding too much functionality. [Read on.](/post/singular-capability/)

## Lock before key

Present the player with the **lock** before the **key** to open it. [Read on.](/post/lock-before-key/)

## Make one game at a time

Be realistic with yourself: how many games are hidden within the game you're making? Does (nearly) everything happen within one primary game simulation? If not, you're actually making multiple games and have potentially magnitudes more work to do. [Read on.](/post/one-game-at-a-time/)

## Integrated UI

Video games often need a user interface (UI) displayed, like a health bar or a score shown on the screen somewhere. When possible, consider integrating any UI directly into the game. (Think picking up a shop item in **Spelunky** instead of selecting an item in a popup window.) [Read on.](/post/integrated-ui/)

## Low fidelity

When you're short on time or resources, consider a low fidelity approach to empower you to move more quickly. [Read on.](/post/low-fidelity/)

## Summary

These principles are a work-in-progress and are intended to help guide my personal game projects towards an attainable finish line. Rules can be broken of course, so if you see me deviating from these principles, trust that it was only after much deliberation (and maybe a little lying to myself).

Love/hate these principles? Questions about ‘em? Got your own? Let me know on [Twitter](https://twitter.com/richtaur).

## Changelog

* 7.01.2019: Added [Low Fidelity](/post/low-fidelity/)
* 6.28.2019: Added [Integrated UI](/post/integrated-ui/)
* 6.22.2019: Added [Make One Game at a Time](/post/one-game-at-a-time/)
* 6.18.2019: Added [Lock Before Key](/post/lock-before-key/)
* 6.15.2019: Added [Singular Capability](/post/singular-capability/)

[awl]: https://store.steampowered.com/app/280040/A_Wizards_Lizard/
[sid]: https://www.gamasutra.com/view/news/114402/Analysis_Sid_Meiers_Key_Design_Lessons.php
