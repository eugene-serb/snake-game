(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,n(i.key),i)}}function n(e){var n=function(e,n){if("object"!=t(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,"string");if("object"!=t(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==t(n)?n:n+""}const r=function(){return t=function t(e,n,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$container=e,this.width=n,this.height=r,this.draw()},(n=[{key:"draw",value:function(){this.$container.innerHTML="";var t=document.createElement("div");t.classList.add("map"),this.$container.appendChild(t);for(var e=this.height;e>=1;e--)for(var n=1;n<=this.width;n++){var r=document.createElement("div");r.classList.add("cell"),r.setAttribute("x",n),r.setAttribute("y",e),t.appendChild(r)}}}])&&e(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,n}();function i(t,e){var n=t&&"number"==typeof t?t:0,r=e&&"number"==typeof e?e:0;return Math.floor(Math.random()*(r-n)+n)}function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,s(r.key),r)}}function s(t){var e=function(t,e){if("object"!=o(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!=o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==o(e)?e:e+""}function c(t,e,n){if("function"==typeof t?t===e:t.has(e))return arguments.length<3?e:n;throw new TypeError("Private element is not present on this object")}var u=new WeakSet;function l(){this.x>this.map_width?this.x=1:this.x<1&&(this.x=this.map_width),this.y>this.map_height?this.y=1:this.y<1&&(this.y=this.map_height)}function f(){var t=0,e=0,n=0,r=0;switch(i(1,5)){case 1:this.dx=0,this.dy=1,this.direction="Up",t=1,e=this.map_width,n=3,r=this.map_height;break;case 2:this.dx=1,this.dy=0,this.direction="Right",t=3,e=this.map_width,n=1,r=this.map_height;break;case 3:this.dx=0,this.dy=-1,this.direction="Down",t=1,e=this.map_width,n=1,r=this.map_height-2;break;default:this.dx=-1,this.dy=0,this.direction="Left",t=1,e=this.map_width-2,n=1,r=this.map_height}this.x=i(t,e),this.y=i(n,r),this.tails=[{x:this.x,y:this.y},{x:this.x-this.dx,y:this.y-this.dy},{x:this.x-(this.dx+this.dx),y:this.y-(this.dy+this.dy)}]}const h=function(){return t=function t(e,n){var r,i;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),function(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}(r=this,i=u),i.add(r),this.map_width=e,this.map_height=n,this.x=0,this.y=0,this.dx=0,this.dy=1,this.direction="Up",this.canRotate=!1,this.canGrow=!1,this.isAlive=!0,this.isPaused=!1,this.tails=[],this.maxTails=3,c(u,this,f).call(this),this.draw()},(e=[{key:"update",value:function(){this.x+=this.dx,this.y+=this.dy,c(u,this,l).call(this),this.tails.unshift({x:this.x,y:this.y}),this.tails.length>this.maxTails&&this.tails.pop(),this.canRotate=!0}},{key:"draw",value:function(){this.tails.forEach((function(t,e){0===e?document.querySelector('[x = "'.concat(t.x,'"][y = "').concat(t.y,'"]')).classList.add("snakeHead"):document.querySelector('[x = "'.concat(t.x,'"][y = "').concat(t.y,'"]')).classList.add("snakeTail")}))}}])&&a(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,e}();function y(t){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function p(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,m(r.key),r)}}function m(t){var e=function(t,e){if("object"!=y(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!=y(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==y(e)?e:e+""}var v=function(){return t=function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$container=e,this.winScore=n,this.splashes=["Eat all","Big snake","Just out of the oven","We are in the matrix!","Open-world alpha sandbox!","Apples or mice?","Hurry up!","What does this food allow itself?","Beware the tail","Hmmmrmm.","Is it poisonous?","Keep it up!","Ha-ha, nice","Home-made!","Contains simulated food","This splash text is now available","Quite Indie!"],this.draw()},e=[{key:"draw",value:function(){var t=i(0,this.splashes.length);this.$container.innerText=this.splashes[t]}},{key:"end",value:function(t){t>=this.winScore?this.$container.innerText="Game Over! You won!":this.$container.innerText="Game Over! You lose!"}}],e&&p(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,e}();const d=v;function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function w(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,g(r.key),r)}}function g(t){var e=function(t,e){if("object"!=b(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!=b(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==b(e)?e:e+""}function S(t,e,n){if("function"==typeof t?t===e:t.has(e))return arguments.length<3?e:n;throw new TypeError("Private element is not present on this object")}var _=new WeakSet;function k(){this._timeStart=Date.now(),this._timeNow=this._timeStart,this._value="00:00"}function T(){this._timeNow=Date.now();var t=this._timeNow-this._timeStart,e=Math.floor(t/1e3),n=0;e>=60&&(e-=60*(n=Math.floor(e/60))),n=n<10?"0".concat(n):"".concat(n),e=e<10?"0".concat(e):"".concat(e),this._value="".concat(n,":").concat(e)}const E=function(){return t=function t(){var e,n;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),function(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e=this,n=_),n.add(e),S(_,this,k).call(this)},(e=[{key:"value",get:function(){return S(_,this,T).call(this),this._value}},{key:"reset",value:function(){S(_,this,k).call(this)}}])&&w(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,e}();function x(t){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},x(t)}function P(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,j(r.key),r)}}function j(t){var e=function(t,e){if("object"!=x(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!=x(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==x(e)?e:e+""}const R=function(){return t=function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._value=e&&"number"==typeof e?e:0},(e=[{key:"value",get:function(){return this._value},set:function(t){t&&"number"==typeof t&&(this._value=t)}},{key:"increase",value:function(t){this._value+=t&&"number"==typeof t?t:1}},{key:"decrease",value:function(t){this._value-=t&&"number"==typeof t?t:1}},{key:"reset",value:function(){this._value=0}}])&&P(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,e}();function O(t){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},O(t)}function A(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,C(r.key),r)}}function C(t){var e=function(t,e){if("object"!=O(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!=O(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==O(e)?e:e+""}function I(t,e,n){if("function"==typeof t?t===e:t.has(e))return arguments.length<3?e:n;throw new TypeError("Private element is not present on this object")}var L=new WeakSet,G=function(){return t=function t(e){var n,r;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),function(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}(n=this,r=L),r.add(n),this._key=e,this._value=[],I(L,this,D).call(this)},e=[{key:"value",get:function(){return I(L,this,D).call(this),this._value}},{key:"add",value:function(t,e){if(t&&"number"==typeof t&&e&&"string"==typeof e){var n={date:Date.now(),score:t,time:e};this._value.push(n),I(L,this,N).call(this),I(L,this,M).call(this)}}},{key:"clean",value:function(){this._value=[],I(L,this,M).call(this)}}],e&&A(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,e}();function N(){this._value.sort((function(t,e){return t.score<e.score?1:t.score>e.score?-1:void 0}))}function M(){localStorage.setItem(this._key,JSON.stringify(this._value))}function D(){localStorage[this._key]?this._value=JSON.parse(localStorage[this._key]):this._value=[],I(L,this,N).call(this)}const W=G;function $(t){return $="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},$(t)}function H(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,q(r.key),r)}}function q(t){var e=function(t,e){if("object"!=$(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!=$(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==$(e)?e:e+""}function U(t,e,n){if("function"==typeof t?t===e:t.has(e))return arguments.length<3?e:n;throw new TypeError("Private element is not present on this object")}var K=new WeakSet;function z(){this.interval=null,this.isGameOver=!1,this.isPaused=!1,this.canMove=!0}const Y=function(){return t=function t(){var e,n;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),function(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e=this,n=K),n.add(e),U(K,this,z).call(this)},(e=[{key:"start",value:function(){this.isGameOver&&this.clear(),this.isPaused=!1,this.canMove=!0}},{key:"stop",value:function(){this.isPaused=!0,this.canMove=!1,clearTimeout(this.interval)}},{key:"setGameOver",value:function(){this.isGameOver=!0,this.stop()}},{key:"clear",value:function(){this.stop(),U(K,this,z).call(this)}}])&&H(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,e}();function B(t){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},B(t)}function J(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,Q(r.key),r)}}function X(t,e,n){return e&&J(t.prototype,e),n&&J(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function Q(t){var e=function(t,e){if("object"!=B(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!=B(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==B(e)?e:e+""}var F=new WeakSet;function V(){var t=this;window.addEventListener("keydown",(function(e){t._context.isGameOver||("ArrowLeft"===e.code||"KeyA"===e.code?t._context.moveToLeft():"ArrowUp"===e.code||"KeyW"===e.code?t._context.moveToUp():"ArrowRight"===e.code||"KeyD"===e.code?t._context.moveToRight():"ArrowDown"!==e.code&&"KeyS"!==e.code||t._context.moveToDown()),"KeyR"===e.code&&(t._context.clear(),t._context.start()),"KeyP"===e.code&&(t._context.isGameOver||(t._context.isPaused?t._context.start():t._context.stop()))}))}const Z=X((function t(e){var n,r;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),function(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}(n=this,r=F),r.add(n),this._context=e,function(t,e,n){if("function"==typeof t?t===e:t.has(e))return arguments.length<3?e:n;throw new TypeError("Private element is not present on this object")}(F,this,V).call(this)}));function tt(t){return tt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},tt(t)}function et(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function nt(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,it(r.key),r)}}function rt(t,e,n){return e&&nt(t.prototype,e),n&&nt(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function it(t){var e=function(t,e){if("object"!=tt(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!=tt(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==tt(e)?e:e+""}function ot(t,e,n){if("function"==typeof t?t===e:t.has(e))return arguments.length<3?e:n;throw new TypeError("Private element is not present on this object")}var at=new WeakSet;function st(){ot(at,this,lt).call(this)&&(this.LISTENER_INTERRUPT=10,this.KEYPRESS_INTERRUPT=500,this._gamepadInterval=null,this._keypressCooldown=0,ot(at,this,ct).call(this))}function ct(){var t=this;window.addEventListener("gamepadconnected",(function(){t._gamepadInterval=setInterval((function(){t._keypressCooldown+=t.LISTENER_INTERRUPT;var e,n,r=(e=navigator.getGamepads(),n=1,function(t){if(Array.isArray(t))return t}(e)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,i,o,a,s=[],c=!0,u=!1;try{if(o=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=o.call(n)).done)&&(s.push(r.value),s.length!==e);c=!0);}catch(t){u=!0,i=t}finally{try{if(!c&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw i}}return s}}(e,n)||function(t,e){if(t){if("string"==typeof t)return et(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?et(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0],i=!1,o=null;r.buttons.forEach((function(t,e){1===t.value&&(o=e,i=!0)})),i&&ot(at,t,ut).call(t,o)}),t.LISTENER_INTERRUPT)}))}function ut(t){12===t&&(this._context.moveToUp(),this._keypressCooldown=0),13===t&&(this._context.moveToDown(),this._keypressCooldown=0),14===t&&(this._context.moveToLeft(),this._keypressCooldown=0),15===t&&(this._context.moveToRight(),this._keypressCooldown=0),this._keypressCooldown>=this.KEYPRESS_INTERRUPT&&(8===t&&(this._context.isPaused?(this._context.start(),this._keypressCooldown=0):(this._context.stop(),this._keypressCooldown=0)),9===t&&(this._context.clear(),this._context.start(),this._keypressCooldown=0))}function lt(){return"getGamepads"in window.navigator}const ft=rt((function t(e){var n,r;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),function(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}(n=this,r=at),r.add(n),this._context=e,ot(at,this,st).call(this)}));function ht(t){return ht="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ht(t)}function yt(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,mt(r.key),r)}}function pt(t,e,n){return e&&yt(t.prototype,e),n&&yt(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function mt(t){var e=function(t,e){if("object"!=ht(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!=ht(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==ht(e)?e:e+""}var vt=new WeakSet;function dt(){var t=this,e=0,n=0;this._container.addEventListener("touchstart",(function(t){e=t.touches[0].pageX,n=t.touches[0].pageY})),this._container.addEventListener("touchend",(function(r){var i=r.changedTouches[0].pageX,o=r.changedTouches[0].pageY,a=i-e,s=o-n,c=Math.abs(a)>Math.abs(s),u=Math.abs(s)>Math.abs(a);a>0&&c?t._context.moveToRight():a<0&&c?t._context.moveToLeft():s>0&&u?t._context.moveToDown():s<0&&u&&t._context.moveToUp()}))}const bt=pt((function t(e,n){var r,i;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),function(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}(r=this,i=vt),i.add(r),this._context=e,this._container=n,function(t,e,n){if("function"==typeof t?t===e:t.has(e))return arguments.length<3?e:n;throw new TypeError("Private element is not present on this object")}(vt,this,dt).call(this)}));function wt(t){return wt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},wt(t)}function gt(t,e,n){return(e=jt(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function St(t,e,n){return e=kt(e),function(t,e){if(e&&("object"===wt(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,_t()?Reflect.construct(e,n||[],kt(t).constructor):e.apply(t,n))}function _t(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(_t=function(){return!!t})()}function kt(t){return kt=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},kt(t)}function Tt(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Et(t,e)}function Et(t,e){return Et=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},Et(t,e)}function xt(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,jt(r.key),r)}}function Pt(t,e,n){return e&&xt(t.prototype,e),n&&xt(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function jt(t){var e=function(t,e){if("object"!=wt(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!=wt(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==wt(e)?e:e+""}function Rt(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var Ot=Pt((function t(){Rt(this,t),this.createThing=function(){}})),At=function(t){function e(){var t;return Rt(this,e),(t=St(this,e)).createThing=function(){return new Dt},t}return Tt(e,t),Pt(e)}(Ot),Ct=function(t){function e(){var t;return Rt(this,e),(t=St(this,e)).createThing=function(){return new Wt},t}return Tt(e,t),Pt(e)}(Ot),It=function(t){function e(){var t;return Rt(this,e),(t=St(this,e)).createThing=function(){return new $t},t}return Tt(e,t),Pt(e)}(Ot),Lt=function(t){function e(){var t;return Rt(this,e),(t=St(this,e)).createThing=function(){return new Ht},t}return Tt(e,t),Pt(e)}(Ot),Gt=function(t){function e(){var t;return Rt(this,e),(t=St(this,e)).createThing=function(){return new qt},t}return Tt(e,t),Pt(e)}(Ot),Nt=function(t){function e(){var t;return Rt(this,e),(t=St(this,e)).createThing=function(){return new Ut},t}return Tt(e,t),Pt(e)}(Ot),Mt=Pt((function t(){var e=this;Rt(this,t),gt(this,"update",(function(){e.rottingStage++})),gt(this,"generate",(function(){var t=document.querySelectorAll(".cell"),n=[];t.forEach((function(t){t.classList.contains("snakeTail")||t.classList.contains("snakeHead")||t.classList.contains("thing")||n.push(t)}));var r=i(1,n.length);e.x=+n[r].getAttribute("x"),e.y=+n[r].getAttribute("y")})),gt(this,"draw",(function(){document.querySelector('[x = "'.concat(e.x,'"][y = "').concat(e.y,'"]')).classList.add("thing",e.className)})),this.x=0,this.y=0,this.rottingStage=0,this.maxRottingStage=0,this.className=""})),Dt=function(t){function e(){var t;return Rt(this,e),gt(t=St(this,e),"update",(function(){})),t.maxRottingStage=0,t.className="border",t.generate(),t.draw(),t}return Tt(e,t),Pt(e)}(Mt),Wt=function(t){function e(){var t;return Rt(this,e),(t=St(this,e)).maxRottingStage=50,t.className="apple",t.generate(),t.draw(),t}return Tt(e,t),Pt(e)}(Mt),$t=function(t){function e(){var t;return Rt(this,e),(t=St(this,e)).maxRottingStage=25,t.className="mouse",t.generate(),t.draw(),t}return Tt(e,t),Pt(e)}(Mt),Ht=function(t){function e(){var t;return Rt(this,e),(t=St(this,e)).maxRottingStage=25,t.className="holywater",t.generate(),t.draw(),t}return Tt(e,t),Pt(e)}(Mt),qt=function(t){function e(){var t;return Rt(this,e),(t=St(this,e)).maxRottingStage=100,t.className="crap",t.generate(),t.draw(),t}return Tt(e,t),Pt(e)}(Mt),Ut=function(t){function e(){var t;return Rt(this,e),(t=St(this,e)).maxRottingStage=100,t.className="bomb",t.generate(),t.draw(),t}return Tt(e,t),Pt(e)}(Mt);function Kt(t){return Kt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Kt(t)}function zt(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,Yt(r.key),r)}}function Yt(t){var e=function(t,e){if("object"!=Kt(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!=Kt(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==Kt(e)?e:e+""}function Bt(t,e,n){return e=Qt(e),function(t,e){if(e&&("object"===Kt(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,Jt()?Reflect.construct(e,n||[],Qt(t).constructor):e.apply(t,n))}function Jt(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(Jt=function(){return!!t})()}function Xt(){return Xt="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=Qt(t)););return t}(t,e);if(r){var i=Object.getOwnPropertyDescriptor(r,e);return i.get?i.get.call(arguments.length<3?t:n):i.value}},Xt.apply(this,arguments)}function Qt(t){return Qt=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Qt(t)}function Ft(t,e){return Ft=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},Ft(t,e)}function Vt(t,e,n){if("function"==typeof t?t===e:t.has(e))return arguments.length<3?e:n;throw new TypeError("Private element is not present on this object")}var Zt=new WeakSet,te=function(t){function e(t){var n,r,i,o,a,s,c,u,l;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}(u=c=Bt(this,e),l=Zt),l.add(u),c._params=t,c.SPEED_RATE=null!==(n=c._params)&&void 0!==n&&n.speedRate&&"number"==typeof(null===(r=c._params)||void 0===r?void 0:r.speedRate)?null===(i=c._params)||void 0===i?void 0:i.speedRate:250,c.KEY_RATING=null!==(o=c._params)&&void 0!==o&&o.keyRating&&"string"==typeof(null===(a=c._params)||void 0===a?void 0:a.keyRating)?null===(s=c._params)||void 0===s?void 0:s.keyRating:"es:snake",Vt(Zt,c,se).call(c),Vt(Zt,c,ae).call(c),Vt(Zt,c,ce).call(c),Vt(Zt,c,ee).call(c),c}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Ft(t,e)}(e,t),n=e,r=[{key:"moveToLeft",value:function(){!0===this.snake.canRotate&&"Right"!==this.snake.direction&&(this.snake.dx=-1,this.snake.dy=0,this.snake.direction="Left",this.snake.canRotate=!1)}},{key:"moveToUp",value:function(){!0===this.snake.canRotate&&"Down"!==this.snake.direction&&(this.snake.dx=0,this.snake.dy=1,this.snake.direction="Up",this.snake.canRotate=!1)}},{key:"moveToRight",value:function(){!0===this.snake.canRotate&&"Left"!==this.snake.direction&&(this.snake.dx=1,this.snake.dy=0,this.snake.direction="Right",this.snake.canRotate=!1)}},{key:"moveToDown",value:function(){!0===this.snake.canRotate&&"Up"!==this.snake.direction&&(this.snake.dx=0,this.snake.dy=-1,this.snake.direction="Down",this.snake.canRotate=!1)}},{key:"start",value:function(){Xt(Qt(e.prototype),"start",this).call(this),this.interval=setInterval(Vt(Zt,this,ne).bind(this),this.SPEED_RATE)}},{key:"setGameOver",value:function(){Xt(Qt(e.prototype),"setGameOver",this).call(this);var t=this.score.value,n=this.timer.value;this.rating.add(t,n),this.drawRating()}},{key:"clear",value:function(){Xt(Qt(e.prototype),"clear",this).call(this),Vt(Zt,this,ee).call(this)}},{key:"drawRating",value:function(){this.$RATING.innerHTML="";for(var t=this.rating.value,e=0;e<t.length&&e<10;e++){var n=document.createElement("tr"),r=document.createElement("td"),i=document.createElement("td"),o=document.createElement("td"),a=document.createElement("td"),s=new Date(t[e].date);r.innerText=e+1,i.innerText=t[e].score,o.innerText=t[e].time,a.innerText=s.toLocaleDateString(),n.append(r,i,o,a),this.$RATING.appendChild(n)}}}],r&&zt(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,r}(Y);function ee(){this.rating=new W(this.KEY_RATING),this.drawRating(),this.drawer=new r(this.$MAP_WRAPPER,this.MAP_WIDTH,this.MAP_HEIGHT),this.dialog=new d(this.$DIALOG_WRAPPER,this.WIN_SCORE),this.snake=new h(this.MAP_WIDTH,this.MAP_HEIGHT),this.timer=new E,this.score=new R,this.factories=[new At,new Ct,new It,new Lt,new Gt,new Nt],this.things=[],this.borders=[];for(var t=0;t<5;t++)this.borders.push(this.factories[0].createThing());for(var e=0;e<2;e++)this.things.push(this.factories[1].createThing())}function ne(){Vt(Zt,this,re).call(this),Vt(Zt,this,ie).call(this),Vt(Zt,this,oe).call(this)}function re(){this.snake.update(),this.things.forEach((function(t){t.update()}))}function ie(){this.drawer.draw(),this.snake.draw(),this.things.forEach((function(t){t.draw()})),this.borders.forEach((function(t){t.draw()})),this.$TIMER.innerText="Time: ".concat(this.timer.value),this.$SCORE.innerText="Score: ".concat(this.score.value)}function oe(){var t=this;if(this.score.value>=3?this.snake.canGrow=!0:this.snake.canGrow=!1,this.things.forEach((function(e,n){e.rottingStage>e.maxRottingStage&&t.things.splice(n,1),t.snake.x===e.x&&t.snake.y===e.y&&(document.querySelector('[x = "'.concat(e.x,'"][y = "').concat(e.y,'"]')).classList.contains("apple")&&(t.snake.canGrow&&t.snake.maxTails++,t.score.increase(1),t.drawer.draw(),t.snake.draw(),t.borders.forEach((function(t){t.draw()})),t.things.splice(n,1)),document.querySelector('[x = "'.concat(e.x,'"][y = "').concat(e.y,'"]')).classList.contains("mouse")&&(t.snake.canGrow&&t.snake.maxTails++,t.score.increase(5),t.drawer.draw(),t.snake.draw(),t.borders.forEach((function(t){t.draw()})),t.things.splice(n,1)),document.querySelector('[x = "'.concat(e.x,'"][y = "').concat(e.y,'"]')).classList.contains("holywater")&&(t.snake.maxTails>=5&&(t.snake.maxTails-=2,t.snake.tails.pop(),t.snake.tails.pop()),t.drawer.draw(),t.snake.draw(),t.borders.forEach((function(t){t.draw()})),t.things.splice(n,1)),document.querySelector('[x = "'.concat(e.x,'"][y = "').concat(e.y,'"]')).classList.contains("crap")&&(t.snake.maxTails>=5&&(t.snake.maxTails-=2,t.snake.tails.pop(),t.snake.tails.pop()),t.score.decrease(10),t.drawer.draw(),t.snake.draw(),t.borders.forEach((function(t){t.draw()})),t.score.value<0&&(t.snake.isAlive=!1,t.dialog.end(t.score.value),t.setGameOver())),document.querySelector('[x = "'.concat(e.x,'"][y = "').concat(e.y,'"]')).classList.contains("bomb")&&(t.snake.isAlive=!1,t.dialog.end(t.score.value),t.setGameOver()))})),this.things.length<2){var e=i(1,100),n=0;e<=80?n=1:e>80&&e<=85?n=2:e>85&&e<=90?n=3:e>90&&e<=95?n=4:e>95&&(n=5),this.things.push(this.factories[n].createThing()),this.things.forEach((function(t){t.draw()}))}(document.querySelector(".snakeHead").classList.contains("snakeTail")||document.querySelector(".snakeHead").classList.contains("border")||this.score.value>=this.WIN_SCORE)&&(this.snake.isAlive=!1,this.dialog.end(this.score.value),this.setGameOver())}function ae(){this.MAP_WIDTH=15,this.MAP_HEIGHT=15,this.WIN_SCORE=100}function se(){this.$MAP_WRAPPER=document.querySelector("#map"),this.$DIALOG_WRAPPER=document.querySelector("#dialog"),this.$TIMER=document.querySelector("#timer"),this.$SCORE=document.querySelector("#score"),this.$RATING=document.querySelector("#rating")}function ce(){this._keyboard=new Z(this),this._gamepads=new ft(this),this._touchscreen=new bt(this,this.$MAP_WRAPPER)}new te({speedRate:200,keyRating:"es:snake"}).start()})();