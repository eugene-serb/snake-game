(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var r=0;r<n.length;r++){var a=n[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,(void 0,i=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,"string");if("object"!==t(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(a.key),"symbol"===t(i)?i:String(i)),a)}var i}function n(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}const r=n((function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.getRandomInteger=function(t,e){return Math.floor(Math.random()*(e-t)+t)}}));function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,s(r.key),r)}}function o(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function c(t,e,n){return(e=s(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t){var e=function(t,e){if("object"!==a(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===a(e)?e:String(e)}const u=o((function t(e){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),c(this,"increase",(function(t){n.balance+=t,n.draw()})),c(this,"draw",(function(){n.$container.innerText="Score: ".concat(n.balance)})),this.$container=e,this.balance=0}));function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,h(r.key),r)}}function y(t,e,n){return e&&f(t.prototype,e),n&&f(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function p(t,e,n){return(e=h(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function h(t){var e=function(t,e){if("object"!==l(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===l(e)?e:String(e)}var d=y((function t(e,n){var a=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),p(this,"draw",(function(){var t=a.support.getRandomInteger(0,a.splashes.length);a.$container.innerText=a.splashes[t]})),p(this,"end",(function(t){t>=a.winScore?a.$container.innerText="Game Over! You won!":a.$container.innerText="Game Over! You lose!"})),this.$container=e,this.winScore=n,this.support=new r,this.splashes=["Eat all","Big snake","Just out of the oven","We are in the matrix!","Open-world alpha sandbox!","Apples or mice?","Hurry up!","What does this food allow itself?","Beware the tail","Hmmmrmm.","Is it poisonous?","Keep it up!","Ha-ha, nice","Home-made!","Contains simulated food","This splash text is now available","Quite Indie!"],this.draw()}));const m=d;function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function v(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,g(r.key),r)}}function w(t,e,n){return e&&v(t.prototype,e),n&&v(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function g(t){var e=function(t,e){if("object"!==b(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==b(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===b(e)?e:String(e)}const k=w((function t(e,n,r){var a,i,o,c=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,o=function(){c.$container.innerHTML="";var t=document.createElement("div");t.classList.add("map"),c.$container.appendChild(t);for(var e=c.height;e>=1;e--)for(var n=1;n<=c.width;n++){var r=document.createElement("div");r.classList.add("cell"),r.setAttribute("x",n),r.setAttribute("y",e),t.appendChild(r)}},(i=g(i="draw"))in a?Object.defineProperty(a,i,{value:o,enumerable:!0,configurable:!0,writable:!0}):a[i]=o,this.$container=e,this.width=n,this.height=r,this.draw()}));function S(t){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},S(t)}function x(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,T(r.key),r)}}function P(t,e,n){return e&&x(t.prototype,e),n&&x(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function E(t,e,n){!function(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}(t,e),e.set(t,n)}function R(t,e,n){return(e=T(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function T(t){var e=function(t,e){if("object"!==S(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==S(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===S(e)?e:String(e)}function _(t,e){var n=function(t,e,n){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return e.get(t)}(t,e);return function(t,e){return e.get?e.get.call(t):e.value}(t,n)}var j=new WeakMap,O=new WeakMap;const A=P((function t(e,n){var a=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),R(this,"update",(function(){a.x+=a.dx,a.y+=a.dy,_(a,j).call(a),a.tails.unshift({x:a.x,y:a.y}),a.tails.length>a.maxTails&&a.tails.pop(),a.canRotate=!0})),R(this,"draw",(function(){a.tails.forEach((function(t,e){0===e?document.querySelector('[x = "'.concat(t.x,'"][y = "').concat(t.y,'"]')).classList.add("snakeHead"):document.querySelector('[x = "'.concat(t.x,'"][y = "').concat(t.y,'"]')).classList.add("snakeTail")}))})),E(this,j,{writable:!0,value:function(){a.x>a.map_width?a.x=1:a.x<1&&(a.x=a.map_width),a.y>a.map_height?a.y=1:a.y<1&&(a.y=a.map_height)}}),E(this,O,{writable:!0,value:function(){var t=0,e=0,n=0,r=0;switch(a.support.getRandomInteger(1,5)){case 1:a.dx=0,a.dy=1,a.direction="Up",t=1,e=a.map_width,n=3,r=a.map_height;break;case 2:a.dx=1,a.dy=0,a.direction="Right",t=3,e=a.map_width,n=1,r=a.map_height;break;case 3:a.dx=0,a.dy=-1,a.direction="Down",t=1,e=a.map_width,n=1,r=a.map_height-2;break;default:a.dx=-1,a.dy=0,a.direction="Left",t=1,e=a.map_width-2,n=1,r=a.map_height}a.x=a.support.getRandomInteger(t,e),a.y=a.support.getRandomInteger(n,r),a.tails=[{x:a.x,y:a.y},{x:a.x-a.dx,y:a.y-a.dy},{x:a.x-(a.dx+a.dx),y:a.y-(a.dy+a.dy)}]}}),this.map_width=e,this.map_height=n,this.support=new r,this.x=0,this.y=0,this.dx=0,this.dy=1,this.direction="Up",this.canRotate=!1,this.canGrow=!1,this.isAlive=!0,this.isPaused=!1,this.tails=[],this.maxTails=3,_(this,O).call(this),this.draw()}));function M(t){return M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},M(t)}function I(t,e,n){return(e=N(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function W(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&L(t,e)}function L(t,e){return L=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},L(t,e)}function D(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=H(t);if(e){var a=H(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return C(this,n)}}function C(t,e){if(e&&("object"===M(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return $(t)}function $(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function H(t){return H=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},H(t)}function q(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,N(r.key),r)}}function G(t,e,n){return e&&q(t.prototype,e),n&&q(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function N(t){var e=function(t,e){if("object"!==M(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==M(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===M(e)?e:String(e)}function U(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var K=G((function t(){U(this,t),this.createThing=function(){}})),B=function(t){W(n,t);var e=D(n);function n(){var t;return U(this,n),(t=e.call(this)).createThing=function(){return new V},t}return G(n)}(K),Y=function(t){W(n,t);var e=D(n);function n(){var t;return U(this,n),(t=e.call(this)).createThing=function(){return new Z},t}return G(n)}(K),z=function(t){W(n,t);var e=D(n);function n(){var t;return U(this,n),(t=e.call(this)).createThing=function(){return new tt},t}return G(n)}(K),X=function(t){W(n,t);var e=D(n);function n(){var t;return U(this,n),(t=e.call(this)).createThing=function(){return new et},t}return G(n)}(K),J=function(t){W(n,t);var e=D(n);function n(){var t;return U(this,n),(t=e.call(this)).createThing=function(){return new nt},t}return G(n)}(K),Q=function(t){W(n,t);var e=D(n);function n(){var t;return U(this,n),(t=e.call(this)).createThing=function(){return new rt},t}return G(n)}(K),F=G((function t(){var e=this;U(this,t),I(this,"update",(function(){e.rottingStage++})),I(this,"generate",(function(){var t=document.querySelectorAll(".cell"),n=[];t.forEach((function(t){t.classList.contains("snakeTail")||t.classList.contains("snakeHead")||t.classList.contains("thing")||n.push(t)}));var r=e.support.getRandomInteger(1,n.length);e.x=+n[r].getAttribute("x"),e.y=+n[r].getAttribute("y")})),I(this,"draw",(function(){document.querySelector('[x = "'.concat(e.x,'"][y = "').concat(e.y,'"]')).classList.add("thing",e.className)})),this.support=new r,this.x=0,this.y=0,this.rottingStage=0,this.maxRottingStage=0,this.className=""})),V=function(t){W(n,t);var e=D(n);function n(){var t;return U(this,n),I($(t=e.call(this)),"update",(function(){})),t.maxRottingStage=0,t.className="border",t.generate(),t.draw(),t}return G(n)}(F),Z=function(t){W(n,t);var e=D(n);function n(){var t;return U(this,n),(t=e.call(this)).maxRottingStage=50,t.className="apple",t.generate(),t.draw(),t}return G(n)}(F),tt=function(t){W(n,t);var e=D(n);function n(){var t;return U(this,n),(t=e.call(this)).maxRottingStage=25,t.className="mouse",t.generate(),t.draw(),t}return G(n)}(F),et=function(t){W(n,t);var e=D(n);function n(){var t;return U(this,n),(t=e.call(this)).maxRottingStage=25,t.className="holywater",t.generate(),t.draw(),t}return G(n)}(F),nt=function(t){W(n,t);var e=D(n);function n(){var t;return U(this,n),(t=e.call(this)).maxRottingStage=100,t.className="crap",t.generate(),t.draw(),t}return G(n)}(F),rt=function(t){W(n,t);var e=D(n);function n(){var t;return U(this,n),(t=e.call(this)).maxRottingStage=100,t.className="bomb",t.generate(),t.draw(),t}return G(n)}(F);function at(t){return at="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},at(t)}function it(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,a=function(t,e){if("object"!==at(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==at(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===at(a)?a:String(a)),r)}var a}function ot(t,e){!function(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}(t,e),e.add(t)}function ct(t,e,n){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return n}var st=new WeakSet,ut=new WeakSet;function lt(){this._timeStart=Date.now(),this._timeNow=this._timeStart,this._value="00:00"}function ft(){this._timeNow=Date.now();var t=this._timeNow-this._timeStart,e=Math.floor(t/1e3),n=0;e>=60&&(e-=60*(n=Math.floor(e/60))),n=n<10?"0".concat(n):"".concat(n),e=e<10?"0".concat(e):"".concat(e),this._value="".concat(n,":").concat(e)}const yt=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),ot(this,ut),ot(this,st),ct(this,st,lt).call(this)}var e,n;return e=t,(n=[{key:"value",get:function(){return ct(this,ut,ft).call(this),this._value}},{key:"reset",value:function(){ct(this,st,lt).call(this)}}])&&it(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function pt(t){return pt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},pt(t)}function ht(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,a=function(t,e){if("object"!==pt(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==pt(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===pt(a)?a:String(a)),r)}var a}function dt(t,e,n){return e&&ht(t.prototype,e),n&&ht(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function mt(t,e,n){!function(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}(t,e),e.set(t,n)}function bt(t,e){var n=function(t,e,n){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return e.get(t)}(t,e);return function(t,e){return e.get?e.get.call(t):e.value}(t,n)}var vt=new WeakMap,wt=new WeakMap,gt=new WeakMap,kt=new WeakMap,St=new WeakMap,xt=new WeakMap,Pt=new WeakMap,Et=new WeakMap,Rt=new WeakMap,Tt=new WeakMap,_t=new WeakMap;new(dt((function t(){var e=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),mt(this,vt,{writable:!0,value:function(){e.map=new k(e.$MAP_WRAPPER,e.MAP_WIDTH,e.MAP_HEIGHT),e.score=new u(e.$SCORE_WRAPPER),e.timer=new yt,e.dialog=new m(e.$DIALOG_WRAPPER,e.WIN_SCORE),e.snake=new A(e.MAP_WIDTH,e.MAP_HEIGHT),e.factories=[new B,new Y,new z,new X,new J,new Q],e.things=[],e.borders=[];for(var t=0;t<5;t++)e.borders.push(e.factories[0].createThing());for(var n=0;n<2;n++)e.things.push(e.factories[1].createThing());e.interval=setInterval(bt(e,wt),e.SPEED_RATE)}}),mt(this,wt,{writable:!0,value:function(){bt(e,gt).call(e),bt(e,kt).call(e),bt(e,St).call(e)}}),mt(this,gt,{writable:!0,value:function(){e.snake.update(),e.things.forEach((function(t){t.update()}))}}),mt(this,kt,{writable:!0,value:function(){e.map.draw(),e.score.draw(),e.snake.draw(),e.things.forEach((function(t){t.draw()})),e.borders.forEach((function(t){t.draw()})),e.$TIMER.innerText="Time: ".concat(e.timer.value)}}),mt(this,St,{writable:!0,value:function(){if(e.score.balance>=3?e.snake.canGrow=!0:e.snake.canGrow=!1,e.things.forEach((function(t,n){t.rottingStage>t.maxRottingStage&&e.things.splice(n,1),e.snake.x===t.x&&e.snake.y===t.y&&(document.querySelector('[x = "'.concat(t.x,'"][y = "').concat(t.y,'"]')).classList.contains("apple")&&(e.snake.canGrow&&e.snake.maxTails++,e.score.increase(1),e.map.draw(),e.snake.draw(),e.borders.forEach((function(t){t.draw()})),e.things.splice(n,1)),document.querySelector('[x = "'.concat(t.x,'"][y = "').concat(t.y,'"]')).classList.contains("mouse")&&(e.snake.canGrow&&e.snake.maxTails++,e.score.increase(5),e.map.draw(),e.snake.draw(),e.borders.forEach((function(t){t.draw()})),e.things.splice(n,1)),document.querySelector('[x = "'.concat(t.x,'"][y = "').concat(t.y,'"]')).classList.contains("holywater")&&(e.snake.maxTails>=5&&(e.snake.maxTails-=2,e.snake.tails.pop(),e.snake.tails.pop()),e.map.draw(),e.snake.draw(),e.borders.forEach((function(t){t.draw()})),e.things.splice(n,1)),document.querySelector('[x = "'.concat(t.x,'"][y = "').concat(t.y,'"]')).classList.contains("crap")&&(e.snake.maxTails>=5&&(e.snake.maxTails-=2,e.snake.tails.pop(),e.snake.tails.pop()),e.score.increase(-10),e.map.draw(),e.snake.draw(),e.borders.forEach((function(t){t.draw()})),e.score.balance<0&&(e.snake.isAlive=!1,e.dialog.end(e.score.balance),clearInterval(e.interval))),document.querySelector('[x = "'.concat(t.x,'"][y = "').concat(t.y,'"]')).classList.contains("bomb")&&(e.snake.isAlive=!1,e.dialog.end(e.score.balance),clearInterval(e.interval)))})),e.things.length<2){var t=e.support.getRandomInteger(1,100),n=0;t<=80?n=1:t>80&&t<=85?n=2:t>85&&t<=90?n=3:t>90&&t<=95?n=4:t>95&&(n=5),e.things.push(e.factories[n].createThing()),e.things.forEach((function(t){t.draw()}))}(document.querySelector(".snakeHead").classList.contains("snakeTail")||document.querySelector(".snakeHead").classList.contains("border")||e.score.balance>=e.WIN_SCORE)&&(e.snake.isAlive=!1,e.dialog.end(e.score.balance),clearInterval(e.interval))}}),mt(this,xt,{writable:!0,value:function(){window.addEventListener("keydown",(function(t){!0===e.snake.canRotate&&("ArrowLeft"!==t.code&&"KeyA"!==t.code||"Right"===e.snake.direction?"ArrowUp"!==t.code&&"KeyW"!==t.code||"Down"===e.snake.direction?"ArrowRight"!==t.code&&"KeyD"!==t.code||"Left"===e.snake.direction?"ArrowDown"!==t.code&&"KeyS"!==t.code||"Up"===e.snake.direction||(e.snake.dx=0,e.snake.dy=-1,e.snake.direction="Down",e.snake.canRotate=!1):(e.snake.dx=1,e.snake.dy=0,e.snake.direction="Right",e.snake.canRotate=!1):(e.snake.dx=0,e.snake.dy=1,e.snake.direction="Up",e.snake.canRotate=!1):(e.snake.dx=-1,e.snake.dy=0,e.snake.direction="Left",e.snake.canRotate=!1)),"KeyR"===t.code&&(clearInterval(e.interval),bt(e,vt).call(e)),!0===e.snake.isAlive&&"KeyP"===t.code&&(!0===e.snake.isPaused?(e.interval=setInterval(bt(e,wt),e.SPEED_RATE),e.snake.isPaused=!1):(clearInterval(e.interval),e.snake.isPaused=!0))}))}}),mt(this,Pt,{writable:!0,value:function(){var t=0;"getGamepads"in window.navigator&&window.addEventListener("gamepadconnected",(function(){setInterval((function(){t+=10;var n,r=navigator.getGamepads(),a=!1;r[0].buttons.forEach((function(t,e){1===t.value&&(n=e,a=!0)})),a&&function(n){!0===e.snake.canRotate&&(12===n&&"Down"!==e.snake.direction?(e.snake.dx=0,e.snake.dy=1,e.snake.direction="Up",e.snake.canRotate=!1):13===n&&"Up"!==e.snake.direction?(e.snake.dx=0,e.snake.dy=-1,e.snake.direction="Down",e.snake.canRotate=!1):14===n&&"Right"!==e.snake.direction?(e.snake.dx=-1,e.snake.dy=0,e.snake.direction="Left",e.snake.canRotate=!1):15===n&&"Left"!==e.snake.direction&&(e.snake.dx=1,e.snake.dy=0,e.snake.direction="Right",e.snake.canRotate=!1)),t>=500&&(!0===e.snake.isAlive&&8===n&&(!0===e.snake.isPaused?(e.interval=setInterval(bt(e,wt),e.SPEED_RATE),e.snake.isPaused=!1,t=0):(clearInterval(e.interval),e.snake.isPaused=!0,t=0)),9===n&&(clearInterval(e.interval),bt(e,vt).call(e),t=0))}(n)}),10)}))}}),mt(this,Et,{writable:!0,value:function(){var t=0,n=0,r=0,a=0;e.$MAP_WRAPPER.addEventListener("touchstart",(function(e){t=e.touches[0].pageX,n=e.touches[0].pageY})),e.$MAP_WRAPPER.addEventListener("touchend",(function(i){r=i.changedTouches[0].pageX,a=i.changedTouches[0].pageY;var o=r-t,c=a-n,s=Math.abs(o)>Math.abs(c),u=Math.abs(c)>Math.abs(o);!0===e.snake.canRotate&&(o>0&&s&&"Left"!==e.snake.direction?(e.snake.dx=1,e.snake.dy=0,e.snake.direction="Right",e.snake.canRotate=!1):o<0&&s&&"Right"!==e.snake.direction?(e.snake.dx=-1,e.snake.dy=0,e.snake.direction="Left",e.snake.canRotate=!1):c>0&&u&&"Up"!==e.snake.direction?(e.snake.dx=0,e.snake.dy=-1,e.snake.direction="Down",e.snake.canRotate=!1):c<0&&u&&"Down"!==e.snake.direction&&(e.snake.dx=0,e.snake.dy=1,e.snake.direction="Up",e.snake.canRotate=!1))}))}}),mt(this,Rt,{writable:!0,value:function(){e.MAP_WIDTH=15,e.MAP_HEIGHT=15,e.WIN_SCORE=100,e.SPEED_RATE=200}}),mt(this,Tt,{writable:!0,value:function(){e.$MAP_WRAPPER=document.querySelector("#map"),e.$SCORE_WRAPPER=document.querySelector("#score"),e.$TIMER=document.querySelector("#timer"),e.$DIALOG_WRAPPER=document.querySelector("#dialog")}}),mt(this,_t,{writable:!0,value:function(){bt(e,xt).call(e),bt(e,Pt).call(e),bt(e,Et).call(e)}}),bt(this,Rt).call(this),bt(this,Tt).call(this),bt(this,_t).call(this),this.support=new r,bt(this,vt).call(this)})))})();