# richtaur.com

The personal website of [Matt Hackett](https://twitter.com/richtaur), a game developer in California.

![Matt Hackett](https://i.imgur.com/LdPRkva.png)

## Run

* `yarn`
* `make`
* `make serve`

## Development

The site content comes from the `src` folder.
The `docs` folder is generated from `src`.

## New Posts

New posts go into the `src/post/` folder. The filenames become slugs, e.g.
`20-shining-force-chibis.md` -> `richtaur.com/post/20-shining-force-chibis`

## Publish

Push to the `main` branch, which will trigger GitHub Actions to push to `richtaur.com`.