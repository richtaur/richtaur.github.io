default: node_modules
	rm -rf htdocs
	node build.js

# make post title="from-sketch-to-line"
post:
	echo "$(title)"
	cp docs/post-template.md src/post/$(title).md
	mkdir src/media/images/post/$(title)
	cp src/media/images/post/indie-game-sim/_title.png src/media/images/post/$(title)/
	cp src/media/images/post/indie-game-sim/_thumbnail.jpg src/media/images/post/$(title)/

serve:
	http-server htdocs -p 8081

deploy:
	aws s3 sync htdocs s3://www.richtaur.com \
		--cache-control max-age=86400 \
		--size-only \
		--acl public-read \
		--delete \
		--profile richtaur \
		--region us-west-2

deploy-all:
	aws s3 sync htdocs s3://www.richtaur.com \
		--cache-control max-age=86400 \
		--acl public-read \
		--delete \
		--profile richtaur \
		--region us-west-2
