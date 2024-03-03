default: node_modules
	rm -rf docs
	node build.js

serve:
	http-server docs -p 8088