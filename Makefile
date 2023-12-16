default: node_modules
	rm -rf docs
	node build.js

serve:
	http-server docs -p 8088

publish:
	aws s3 sync docs s3://www.richtaur.com \
		--cache-control max-age=86400 \
		--size-only \
		--acl public-read \
		--delete \
		--profile richtaur \
		--region us-west-2

publish-all:
	aws s3 sync docs s3://www.richtaur.com \
		--cache-control max-age=86400 \
		--acl public-read \
		--delete \
		--profile richtaur \
		--region us-west-2
