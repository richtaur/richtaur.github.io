deploy:
	aws s3 sync htdocs s3://www.matthackedit.com \
		--cache-control max-age=86400 \
		--size-only \
		--acl public-read \
		--delete \
		--profile richtaur \
		--region us-west-2

deploy-all:
	aws s3 sync htdocs s3://www.matthackedit.com \
		--cache-control max-age=86400 \
		--acl public-read \
		--delete \
		--profile richtaur \
		--region us-west-2
