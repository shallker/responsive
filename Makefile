
build/build.js: components index.js
	@component build --dev
	@echo built build/build.js

components: component.json
	@component install --dev

clean:
	rm -fr build components template.js

.PHONY: clean
