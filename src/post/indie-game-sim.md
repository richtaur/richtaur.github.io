---
title: Making an Indie Game About Indie Game Making
date: 2018-03-25
layout: post.html
summary: A solo developer's struggle with creativity.
tags: [postmortem]
---

Everyone who makes games has their own unique perspective on the process, but we can generally all agree that it’s nebulous and fraught with peril. Sometimes even the question of “which game concept should I work on?” seems impossible to answer. Fortunately, there are some guiding lights.

There’s [Derek Yu’s triple threat][1]: Games I want to make, games I want to have made, and games I’m good at making.

<div class="content-focus">
  ![Demon Seed sketch 1](/media/images/post/indie-game-sim/image18.jpg)
</div>

There’s Ryan Clark’s [How to Choose the Right Design][2], which suggests analyzing the market and utilizing hooks to capture interest. There’s also a model presented by game designer Daniel Cook in his article [Visualizing the Creative Process][3].

Getting to work on games is a gift, but it’s extremely challenging. Even choosing which method to use to pick a project can be a daunting task itself. When I had the opportunity to work on a relatively small game of my own, for a while I had decision paralysis. There are many exciting ideas floating around, but which one to commit to?

In addition to the above guides, there’s the old adage “write what you love” which always rang true to me. When looking at my life for the last several years, it’s easy to see that I’m obsessed with making video games. I love it, I think about it all the time, and I realized I wanted to make a game that provided a glimpse of what making video games has been like for me.

<div class="content-focus">
  ![](/media/images/post/indie-game-sim/image1.png)
</div>

### A Game About Game Development

There are other well executed games that tackle game development, especially **Game Dev Story** and [Game Dev Tycoon][4], both simulation games. For this project I wanted players to get their hands dirty by doing some game design. That meant including a level editor of sorts where players could make their own little 2D games by placing tiles and entities individually. My starting point would be a gamified level editor.

So, what kind of games do players make in this level editor? There are essentially infinite genres of games, but I needed to keep my scope small. I experimented with various genres of games, including overhead action games like **Zelda** (of course) and even shooter games like **Gradius** or **R-Type** (really showing my age here). Making your own little games is a complicated thing to ask of a player, and I felt that an overly complex design would lose many people. For these reasons I decided to focus on just one genre of game. But which one?

<div class="content-focus">
  ![](/media/images/post/indie-game-sim/image19.png)
</div>

There’s always been something special to me about the longevity of side-scrolling classics like **Castlevania** and **Sonic the Hedgehog**. Side-scrolling platformers are easy to comprehend and having gravity out of the box is fun. Many of the most beloved indie games of old and new have their roots in the original **Super Mario Bros.**, with good reason. Since there was so much new stuff going on in my “making games as a game” concept, the general familiarity with platformers felt like meeting the player halfway.

<div class="content-focus">
  ![](/media/images/post/indie-game-sim/image3.png)
</div>

### The Meta Game

Why make games in the first place? After shaking off an existential crisis, I continued.

Why would players want to make games? When trying to dig deeper than the typical, “because games are awesome” answer, I somehow ended up in my hometown.

<div class="content-focus">
  ![](/media/images/post/indie-game-sim/image5.png)
</div>

I started making games to amuse my friends and to play together with them. The Internet as we know it did not exist, so I’d carry around 3.5” floppy disks for my friends to play the games on their computers. These days I distribute games on [Steam][5], but when I first started making games, I distributed them around my hometown.

Early versions of **Indie Game Sim** put the player in a simplified version of my own childhood neighborhood, complete with a school and weird remixed versions of old friends. Think **Earthbound**, but instead of fighting monsters, you’re delivering games around town like some kind of Game Dev Santa Claus™.

Everyone I told about this feature was interested in it, but unfortunately it was out of scope. The itch to create it is still there and maybe someday I’ll get to. In the meantime, it was too big and distracted from the core gameplay of actually making games.

When the town was cut, the reason to make games disappeared. The “why make games?” question came up again and after more existential cold sweats, I continued. This time I was less interested in the past and more interested in how I’d answer the question today.

<div class="content-focus">
  ![](/media/images/post/indie-game-sim/image14.png)
</div>

### The Vault Market

It seems as though most independent desktop game developers make the bulk of their first-party sales on Steam. Some of those developers live and breathe Steam. They are obsessed with maximizing their Steam sales, Steam discovery, Steam wishlists, Steam reviews, Steam Steam Steam. Many indies are super into Steam.

I like Steam, too. Aside from being my primary games library these days, it also has great developer tools. Publishing games, watching stats, reading reviews — they all feel exciting to me. This led me to integrate a retro version of Steam called Vault (a play on Valve, the company that runs Steam). This provided a place for the player to unlock content and make money, as well as a platform for me to design my own games to challenge the player. Beating the games I’ve designed and built into **Indie Game Sim** is the way players unlock new game entities such as cannons, spike traps, and teleporters.

<div class="content-focus">
  ![](/media/images/post/indie-game-sim/image22.png)
</div>

In the Vault market, you can set your game’s price and publish to an increasingly large fantasy audience. Your competitors’ games are in the market alongside yours. You can buy them, beat them, and unlock the new things their games introduce. This mirrors reality a bit, as one way to learn more about game development is to play other games and study them.

<div class="content-focus">
  ![](/media/images/post/indie-game-sim/image11.png)
</div>

You can browse reviews where players will say nice things or spit on your work, just like on Steam! Many reviews are kind and encouraging, while others might seem negative, unfair, or downright mean. Do they seem too harsh? Many of the reviews are real, copy/pasted directly from reviews of my own games on Steam.

<div class="content-focus">
  ![](/media/images/post/indie-game-sim/image12.png)
</div>

### Something Original

These days, it’s [not enough][6] to simply make a decent game (maybe it’s never been enough). More experienced developers than I have suggested integrating a [strange][7] attractor into your game. Others encourage you to [make your game design more personal][8].

<div class="content-focus">
  ![](/media/images/post/indie-game-sim/image13.png)
</div>

For most of my career, I’ve felt that my work has been too derivative. My exhausting love for generic medieval fantasy had consumed me to the point where it was all I put into my games, leaving no room for a unique voice. Now that I was aware of this I had to consider: What even is my voice?

As listeners of my [podcast][9] know, I’m a very self-deprecating person. I recognize that I’ve been privileged and lucky to have accomplished more than others have. While I’m proud of my achievements, there’s a voice in my head doubting my every move. Maybe it’s [imposter syndrome][10] or just relentless ambition. Either way, the cynical voice in my mind is always there, unimpressed with what I’ve made and mocking me endlessly.

<div class="content-focus">
  ![](/media/images/post/indie-game-sim/image9.png)
</div>

When trying to find what might be unique about **Indie Game Sim**, I landed on this self-deprecating part of my personality and I wanted to create a monster out of it. Maybe it’s because the rest of the game is so whimsical and it needed something darker to balance it out. Digging around in my graveyard of unfinished prototypes, I saw a dark, ominous creature I was calling a **Titan**. In another game I was working on, it walked around town eating people. Sounds like a scary monster to me. SHIP IT!

This little monster, or “the darkness” (because I don’t want to give away its actual name) follows you around **Indie Game Sim** mocking you and relishing in your failures. It also provides player unlocks that vary depending on your dialog choices. The characters in the games you create subtly reveal the decisions you made when confronting the monster.

<div class="content-focus">
  ![](/media/images/post/indie-game-sim/image2.png)
</div>

I didn’t realize until late in development that this creature was probably, at least in part, a manifestation of my own depression. 2014 was a good year for **LDG**, but its failures in 2015 had blindsided me. Sitting alone in a bathrobe all day in the dark lamenting your bad decisions … that’s a sign of depression? Who knew?!

<div class="content-focus">
  ![](/media/images/post/indie-game-sim/image16.png)
</div>

It’s not all bad. Working this game out of my system has had health benefits for sure. The darkness in the game may annoy some, but others might relate to it. Fairly often, I’ll see other creative types writing about their own self-doubt and feelings of failure. It’s comforting to see I’m not the only one, and maybe others will enjoy defeating the video game version of their inner demons.

<div class="content-focus">
  ![Adorable art by @leonieyue](/media/images/post/indie-game-sim/image8.png)
</div>

General feedback I’m seeing fits **Indie Game Sim** into a neat box:

“Super Mario Maker + Game Dev Tycoon”

Which is a fair enough generalization, I guess, but my hope is that the narrative you create by interacting with the monster will be the unique hook. Something I can bring to the table, something only I would have made.

<div class="content-focus">
  ![](/media/images/post/indie-game-sim/image4.png)
</div>

### Uploading Games

What else would I make that similar developers might not make?

In my early career, I was a web developer for companies like **Yahoo!** and [Raptr][11]. Since moving into games, I’ve drifted a bit away from that and towards desktop applications. I’ve sometimes lamented how I haven’t quite been able to figure out how to merge the two together, to use my web dev skills to enhance my desktop game creations.

As mentioned earlier, successful developers have suggested games need viral hooks to give them lift. Players will be creating their own games in **Indie Game Sim** and surely some of them will want to [share their creations][12].

<div class="content-focus">
  ![](https://i.imgur.com/Afz9jzQ.gif)
</div>

Since **Indie Game Sim** is built in HTML5, it was pretty easy to make a web-based version that would allow for players to share their games with each other using a simple GET parameter. The downside is that the generated URLs are large, but fortunately shorteners like [tinyurl.com][13] solve that problem for us. Here’s an example game I made:

http://tinyurl.com/hvegac3

This isn’t a perfect feature. In an ideal world we’d have an online database that would allow for easier and more feature-rich sharing. Eventually I’d like to investigate using Steamworks to share games. However, the current URL-sharing approach works as a dead simple way to share creations and I’m happy that I finally worked my web dev experience into one of my games. It’s a desktop Steam game that uses the web to give it lift.

<div class="content-focus">
  ![](/media/images/post/indie-game-sim/image10.png)
</div>

### Creating the Final Boss

At first there was no final boss. Players unlocked all the content, bought all the game dev tools, and then the darkness showed up. He congratulated you, teased you a little bit, and sent you sailing into the sunset. Not good enough!

<div class="content-focus">
  ![](/media/images/post/indie-game-sim/image15.png)
</div>

Like many good ideas, the final boss encounter came from a conversation with [Geoff Blair][14], a fantastic developer, passionate designer, and the other half of **Lost Decade Games**. Telling you more about the encounter would spoil it. Of the entire game, the thing that I’m most proud of is that the final boss spoiler is gameplay-related, not based in narrative like most spoilers.

How is the spoiler about the gameplay? If you know what the final boss encounter is, it changes how you play the entire game. The player’s first experience with the final boss might be the game’s most original feature and it was lovingly added near the end.

<div class="content-focus">
  ![](/media/images/post/indie-game-sim/image20.png)
</div>

### Summary

Game development means a lot to me. As a kid, video games blew my impressionable young face right off. When I discovered you could make games yourself, I was floored. I’m still on the floor, decades later. Whether it’s any good or not, I finally made a game about something I care for deeply.

This will sound corny but since my wife and I aren’t having children, my best analog are the video games I make. Instead of a father, I’m an obsessive creator (mad props to the hard working indies who are doing both). When I was young my own father died just before my birthday, leaving me with unresolved feelings about family and birthdays.

To many people birthdays have a kind of melancholy feel to them. While it’s often a fun and celebratory day, sometimes there’s a lingering voice in our minds reminding us that we are one year older and another closer to the end. This feeling is front and center to me, and for most of my life I’ve had a difficult time enjoying birthdays. Releasing a game is a stressful thing so when the timing worked out anyway, I decided to launch on my birthday as it’s usually a rough day anyway.

<div class="content-focus">
  ![](/media/images/post/indie-game-sim/image7.png)
</div>

Coincidentally, I was born the day my father turned 35, the same age I was when I made this game. He said I was the best birthday gift he ever received. **Indie Game Sim** is not a gift for him, nor for me. The making of it was my gift. Working on this little game was the most creatively fulfilling project of my life so far and I’m very grateful to my family, wife, friends, colleagues, and supporters that allowed me the freedom to do it.

[Indie Game Sim][15] is a retro filter of my indie game developer experience. It’s available now on [Steam][16] for Windows and Mac. A special thanks to my friend and collaborator [Joshua Morse][17] for allowing me to use his excellent [Waveform][18] music.

Thank you for reading.

<div class="content-focus">
  ![](/media/images/post/indie-game-sim/image21.png)
</div>

[1]: http://makegames.tumblr.com/post/1136623767/finishing-a-game
[2]: https://www.gamasutra.com/blogs/RyanClark/20150917/253842/What_Makes_an_Indie_Hit_How_to_Choose_the_Right_Design.php
[3]: http://www.lostgarden.com/2010/08/visualizing-creative-process.html
[4]: http://store.steampowered.com/app/239820/
[5]: http://store.steampowered.com/search/?publisher=Lost%20Decade%20Games
[6]: http://www.gamasutra.com/blogs/DanielWest/20150908/253040/Good_isnt_good_enough__releasing_an_indie_game_in_2015.php
[7]: http://www.gamasutra.com/blogs/JosephKim/20150520/243320/The_quotStrange_Attractorquot_in_Video_Game_Design.php
[8]: http://www.gamasutra.com/view/news/117521/Opinion_Indie_Game_Design_Dos_and_Donts_A_Manifesto.php
[9]: http://www.lostdecadegames.com/lostcast/
[10]: http://tommyrefenes.tumblr.com/post/141157110167/impostor-syndrome
[11]: http://raptr.com/richtaur/wall
[12]: http://www.reddit.com/r/IndieGameSim/
[13]: http://tinyurl.com/
[14]: http://twitter.com/geoffblair
[15]: http://www.indiegamesim.com/
[16]: http://store.steampowered.com/app/549740
[17]: http://joshuamorse.bandcamp.com/
[18]: http://joshuamorse.bandcamp.com/album/waveform
