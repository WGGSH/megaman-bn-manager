if(!self.define){let n,e={};const r=(r,l)=>(r=new URL(r+".js",l).href,e[r]||new Promise((e=>{if("document"in self){const n=document.createElement("script");n.src=r,n.onload=e,document.head.appendChild(n)}else n=r,importScripts(r),e()})).then((()=>{let n=e[r];if(!n)throw new Error(`Module ${r} didn’t register its module`);return n})));self.define=(l,i)=>{const u=n||("document"in self?document.currentScript.src:"")||location.href;if(e[u])return;let s={};const t=n=>r(n,u),o={module:{uri:u},exports:s,require:t};e[u]=Promise.all(l.map((n=>o[n]||t(n)))).then((n=>(i(...n),s)))}}define(["./workbox-6db16f92"],(function(n){"use strict";self.skipWaiting(),n.clientsClaim(),n.precacheAndRoute([{url:"_nuxt/abstract.f9a2368b.js",revision:null},{url:"_nuxt/accept.20c03ca9.js",revision:null},{url:"_nuxt/entry.5c6953ce.js",revision:null},{url:"_nuxt/entry.63698405.css",revision:null},{url:"_nuxt/error-404.23f2309d.css",revision:null},{url:"_nuxt/error-404.3ba6df41.js",revision:null},{url:"_nuxt/error-500.aa16ed4d.css",revision:null},{url:"_nuxt/error-500.f65205f6.js",revision:null},{url:"_nuxt/error-component.c476a306.js",revision:null},{url:"_nuxt/folder.a73814a4.css",revision:null},{url:"_nuxt/folder.f0017cb4.js",revision:null},{url:"_nuxt/index.4733d9d5.js",revision:null},{url:"_nuxt/megaman-status.55511e13.js",revision:null},{url:"_nuxt/navi.46c3cf20.css",revision:null},{url:"_nuxt/navi.93ed7bbd.js",revision:null},{url:"_nuxt/patch-card.2dad50ab.js",revision:null},{url:"_nuxt/setting.a3160548.js",revision:null},{url:"_nuxt/subtitle.37a41f5a.js",revision:null},{url:"_nuxt/VDataTable.1617ad9e.js",revision:null},{url:"_nuxt/VDataTable.618282d6.css",revision:null},{url:"_nuxt/workbox-window.prod.es5.a7b12eab.js",revision:null},{url:"200",revision:"e6979ebd316d49ace528b724470a29f9"},{url:"404",revision:"e6979ebd316d49ace528b724470a29f9"},{url:"/megaman-bn-manager",revision:"e6979ebd316d49ace528b724470a29f9"},{url:"setting",revision:"e6979ebd316d49ace528b724470a29f9"},{url:"favicon.ico",revision:"5c1028350a39fb9e5a9bfbe280326e28"},{url:"manifest.webmanifest",revision:"f92f24991f057dbcd849094918ef09f6"}],{}),n.cleanupOutdatedCaches()}));
