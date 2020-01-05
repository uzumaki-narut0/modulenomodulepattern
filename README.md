# module/nomodule pattern

## Inspiration
* [ECMAScript modules in browsers](https://jakearchibald.com/2017/es-modules-in-browsers/#nomodule-for-backwards-compatibility)
* [Deploying ES2015+ Code in Production Today](https://philipwalton.com/articles/deploying-es2015-code-in-production-today/)
* [Modern Script Loading](https://jasonformat.com/modern-script-loading/)
* [Serve modern code to modern browsers for faster page loads](https://web.dev/serve-modern-code-to-modern-browsers/)
 
 
 ## Results on my code
 * `.mjs` is the file generated for browsers which support `module` while `.js` is for others.
 ![esmodule bundle vs non-esmodule bundle difference](https://github.com/uzumaki-narut0/modulenomodulepattern/blob/master/module-nomodule-js-snapshot.PNG)

## Problems
* On UC Browser, both resources are fetched.(Mentioning here, because the support shows unknown on [CanIUse](https://www.caniuse.com/#search=nomodule))
