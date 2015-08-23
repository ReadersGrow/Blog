.DEFAULT_GOAL=watch

watch:
	sass --watch app/styles/style.scss:style.css --load-path app/jspm_packages/npm/bourbon\@4.2.4/app/assets/stylesheets/ app/jspm_packages/npm/bourbon-neat\@1.7.2/app/assets/stylesheets/ &
	browser-sync start --proxy http://local.readers-grow.com --port 1234 --files="**/*.jsx, **/*.css, **/*.twig"
compile:
	cd javascript && jspm bundle-sfx app app.js
