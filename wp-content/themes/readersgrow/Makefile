.DEFAULT_GOAL=watch

styleRoot = app/jspm_packages/npm

watch:
	sass --watch app/styles/style.scss:style.css --load-path \
		$(styleRoot)/colors.css\@2.3.0/sass/ \
		$(styleRoot)/bourbon\@4.2.4/app/assets/stylesheets/ \
		$(styleRoot)/bourbon-neat\@1.7.2/app/assets/stylesheets/ \
		&
		
	browser-sync start --proxy http://local.readers-grow.com --port 1234 --files="**/*.jsx, **/*.css, **/*.twig"
compile:
	cd javascript && jspm bundle-sfx app app.js
