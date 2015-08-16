.DEFAULT_GOAL=watch

watch:
	browser-sync start --proxy http://local.readers-grow.com --port 1234 --files="**/*.jsx, **/*.css"
compile:
	cd javascript && jspm bundle-sfx app app.js
