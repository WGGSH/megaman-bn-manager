if(!self.define){let n,r={};const e=(e,l)=>(e=new URL(e+".js",l).href,r[e]||new Promise((r=>{if("document"in self){const n=document.createElement("script");n.src=e,n.onload=r,document.head.appendChild(n)}else n=e,importScripts(e),r()})).then((()=>{let n=r[e];if(!n)throw new Error(`Module ${e} didn’t register its module`);return n})));self.define=(l,u)=>{const i=n||("document"in self?document.currentScript.src:"")||location.href;if(r[i])return;let s={};const t=n=>e(n,i),o={module:{uri:i},exports:s,require:t};r[i]=Promise.all(l.map((n=>o[n]||t(n)))).then((n=>(u(...n),s)))}}define(["./workbox-6db16f92"],(function(n){"use strict";self.skipWaiting(),n.clientsClaim(),n.precacheAndRoute([{url:"_nuxt/abstract.a7002ba1.js",revision:null},{url:"_nuxt/accept.872311fb.js",revision:null},{url:"_nuxt/chip-folder.17157554.js",revision:null},{url:"_nuxt/chip-folder.4bac0f29.css",revision:null},{url:"_nuxt/color-text.7f7618c2.css",revision:null},{url:"_nuxt/color-text.e38147eb.js",revision:null},{url:"_nuxt/entry.63698405.css",revision:null},{url:"_nuxt/entry.c56beb5c.js",revision:null},{url:"_nuxt/error-404.23f2309d.css",revision:null},{url:"_nuxt/error-404.5589a194.js",revision:null},{url:"_nuxt/error-500.aa16ed4d.css",revision:null},{url:"_nuxt/error-500.cab47a16.js",revision:null},{url:"_nuxt/error-component.0302091a.js",revision:null},{url:"_nuxt/folder.2264cfdf.css",revision:null},{url:"_nuxt/folder.2ca8b1c7.js",revision:null},{url:"_nuxt/index.2ea677a9.js",revision:null},{url:"_nuxt/master-patch-card.7171fd5d.js",revision:null},{url:"_nuxt/megaman-status.bbd57e89.js",revision:null},{url:"_nuxt/navi.3d62b866.js",revision:null},{url:"_nuxt/navi.940a34b5.css",revision:null},{url:"_nuxt/patch-card.a45a00b7.js",revision:null},{url:"_nuxt/setting.d33c7479.js",revision:null},{url:"_nuxt/subtitle.c9b4825a.js",revision:null},{url:"_nuxt/VDataTable.618282d6.css",revision:null},{url:"_nuxt/VDataTable.9d55f6aa.js",revision:null},{url:"_nuxt/workbox-window.prod.es5.a7b12eab.js",revision:null},{url:"200",revision:"f4454c2bc23f6c192be8597c954d7a16"},{url:"404",revision:"f4454c2bc23f6c192be8597c954d7a16"},{url:"/megaman-bn-manager/",revision:"f4454c2bc23f6c192be8597c954d7a16"},{url:"setting",revision:"f4454c2bc23f6c192be8597c954d7a16"},{url:"favicon.ico",revision:"5c1028350a39fb9e5a9bfbe280326e28"},{url:"manifest.webmanifest",revision:"1512ba870bc82d4c4d66975369e48a60"}],{}),n.cleanupOutdatedCaches()}));
