if(!self.define){let n,r={};const e=(e,l)=>(e=new URL(e+".js",l).href,r[e]||new Promise((r=>{if("document"in self){const n=document.createElement("script");n.src=e,n.onload=r,document.head.appendChild(n)}else n=e,importScripts(e),r()})).then((()=>{let n=r[e];if(!n)throw new Error(`Module ${e} didn’t register its module`);return n})));self.define=(l,u)=>{const i=n||("document"in self?document.currentScript.src:"")||location.href;if(r[i])return;let s={};const o=n=>e(n,i),t={module:{uri:i},exports:s,require:o};r[i]=Promise.all(l.map((n=>t[n]||o(n)))).then((n=>(u(...n),s)))}}define(["./workbox-6db16f92"],(function(n){"use strict";self.skipWaiting(),n.clientsClaim(),n.precacheAndRoute([{url:"_nuxt/abstract.870d3a62.css",revision:null},{url:"_nuxt/abstract.d4025719.js",revision:null},{url:"_nuxt/accept.4c401071.js",revision:null},{url:"_nuxt/base64.39981dcf.js",revision:null},{url:"_nuxt/chip-folder.6c5b289b.css",revision:null},{url:"_nuxt/chip-folder.cc4f2b2f.js",revision:null},{url:"_nuxt/color-text.9c49a2c1.css",revision:null},{url:"_nuxt/color-text.f829fdc1.js",revision:null},{url:"_nuxt/entry.2aacb420.js",revision:null},{url:"_nuxt/entry.63698405.css",revision:null},{url:"_nuxt/error-404.23f2309d.css",revision:null},{url:"_nuxt/error-404.e521908f.js",revision:null},{url:"_nuxt/error-500.7fb9bb8a.js",revision:null},{url:"_nuxt/error-500.aa16ed4d.css",revision:null},{url:"_nuxt/error-component.c3afde6e.js",revision:null},{url:"_nuxt/folder.1ea79510.js",revision:null},{url:"_nuxt/folder.623b2039.css",revision:null},{url:"_nuxt/index.1feb8923.js",revision:null},{url:"_nuxt/information.6cadcc42.js",revision:null},{url:"_nuxt/master-patch-card.ebead487.js",revision:null},{url:"_nuxt/megaman-status.1f33a995.js",revision:null},{url:"_nuxt/navi.00fd6092.js",revision:null},{url:"_nuxt/navi.ab867b69.css",revision:null},{url:"_nuxt/patch-card.85cb793d.js",revision:null},{url:"_nuxt/setting.98341995.js",revision:null},{url:"_nuxt/share.2cf9c26b.js",revision:null},{url:"_nuxt/subtitle.e3c1a556.js",revision:null},{url:"_nuxt/VDataTable.121a0de6.js",revision:null},{url:"_nuxt/VDataTable.618282d6.css",revision:null},{url:"_nuxt/workbox-window.prod.es5.a7b12eab.js",revision:null},{url:"200",revision:"ac0c3031182acb2e044a7dd5dfbb5e25"},{url:"404",revision:"ac0c3031182acb2e044a7dd5dfbb5e25"},{url:"/megaman-bn-manager/",revision:"ac0c3031182acb2e044a7dd5dfbb5e25"},{url:"information",revision:"ac0c3031182acb2e044a7dd5dfbb5e25"},{url:"setting",revision:"ac0c3031182acb2e044a7dd5dfbb5e25"},{url:"share",revision:"ac0c3031182acb2e044a7dd5dfbb5e25"},{url:"favicon.ico",revision:"5c1028350a39fb9e5a9bfbe280326e28"},{url:"manifest.webmanifest",revision:"1512ba870bc82d4c4d66975369e48a60"}],{}),n.cleanupOutdatedCaches()}));
