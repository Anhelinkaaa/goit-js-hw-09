function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var l=r("7Y9D8");const i=document.querySelector(".form");i.elements.delay,i.elements.step,i.elements.amound;document.querySelector("button");function u(t,n){const o=Math.random()>.3;new Promise(((e,r)=>{setInterval((()=>{o?e({position:t,delay:n}):r({position:t,delay:n})}),n)})).then((({position:t,delay:n})=>{e(l).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`)})).catch((({position:t,delay:n})=>{e(l).Notify.failure(`❌ Rejected promise ${t} in ${n}ms`)}))}i.addEventListener("submit",(function(e){e.preventDefault();const t=Number(e.currentTarget.elements.delay.value),n=Number(e.currentTarget.elements.step.value),o=Number(e.currentTarget.elements.amound.value);for(let e=1;e<=o;e+=1)u(e,t),t+=n}));
//# sourceMappingURL=03-promises.984f5903.js.map
