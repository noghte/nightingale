(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{576:function(t,e,i){"use strict";var n=i(562),r=i(578),o=i(595);function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var i=[],n=!0,r=!1,o=void 0;try{for(var s,a=t[Symbol.iterator]();!(n=(s=a.next()).done)&&(i.push(s.value),!e||i.length!==e);n=!0);}catch(t){r=!0,o=t}finally{try{n||null==a.return||a.return()}finally{if(r)throw o}}return i}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function h(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function c(t){var e="function"==typeof Map?new Map:void 0;return(c=function(t){if(null===t||(i=t,-1===Function.toString.call(i).indexOf("[native code]")))return t;var i;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return u(t,arguments,f(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),g(n,t)})(t)}function u(t,e,i){return(u=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()?Reflect.construct:function(t,e,i){var n=[null];n.push.apply(n,e);var r=new(Function.bind.apply(t,n));return i&&g(r,i.prototype),r}).apply(null,arguments)}function g(t,e){return(g=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var p=function(t){function e(){var t,i,n;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),i=this,n=f(e).call(this),t=!n||"object"!==s(n)&&"function"!=typeof n?l(i):n,e._polyfillElementClosest(),t._updateScaleDomain=t._updateScaleDomain.bind(l(t)),t._initZoom=t._initZoom.bind(l(t)),t.zoomed=t.zoomed.bind(l(t)),t._applyZoomTranslation=t.applyZoomTranslation.bind(l(t)),t._resetEventHandler=t._resetEventHandler.bind(l(t));var o=!1;return t.applyZoomTranslation=function(){o||(o=!0,requestAnimationFrame(function(){o=!1,t._applyZoomTranslation()}))},t._onResize=t._onResize.bind(l(t)),t._listenForResize=t._listenForResize.bind(l(t)),t.trackHighlighter=new r.c({element:l(t),min:1}),t}var i,u,p;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&g(t,e)}(e,c(HTMLElement)),i=e,p=[{key:"_getClickCoords",value:function(){return n.e?[n.e.pageX,n.e.pageY]:null}},{key:"_polyfillElementClosest",value:function(){var t=this;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(e){var i=t;do{if(i.matches(e))return i;i=i.parentElement||i.parentNode}while(null!==i&&1===i.nodeType);return null})}},{key:"observedAttributes",get:function(){return["displaystart","displayend","length","highlight"]}}],(u=[{key:"connectedCallback",value:function(){this.style.display="block",this.style.width="100%",this.width=this.offsetWidth,this.closest("protvista-manager")&&(this.manager=this.closest("protvista-manager"),this.manager.register(this)),this._length=this.getAttribute("length")?parseFloat(this.getAttribute("length")):0,this._displaystart=this.getAttribute("displaystart")?parseFloat(this.getAttribute("displaystart")):1,this._displayend=this.getAttribute("displayend")?parseFloat(this.getAttribute("displayend")):this.width,this._height=this.getAttribute("height")?Number(this.getAttribute("height")):44,this._highlightEvent=this.getAttribute("highlight-event")?this.getAttribute("highlight-event"):"onclick",this.trackHighlighter.setAttributesInElement(this),this._updateScaleDomain(),this._originXScale=this.xScale.copy(),this._initZoom(),this._listenForResize(),this.addEventListener("error",function(t){console.error(t)}),this.addEventListener("click",this._resetEventHandler)}},{key:"disconnectedCallback",value:function(){this.manager&&this.manager.unregister(this),this._ro?this._ro.unobserve(this):window.removeEventListener("resize",this._onResize),this.removeEventListener("click",this._resetEventHandler)}},{key:"getWidthWithMargins",value:function(){return this.width?this.width-this.margin.left-this.margin.right:0}},{key:"_updateScaleDomain",value:function(){this.xScale=Object(n.i)().domain([1,this._length+1]).range([0,this.getWidthWithMargins()])}},{key:"_initZoom",value:function(){var t=this;this._zoom=Object(n.m)().scaleExtent([1,1/0]).translateExtent([[0,0],[this.getWidthWithMargins(),0]]).extent([[0,0],[this.getWidthWithMargins(),0]]).filter(function(){return!t.hasAttribute("use-ctrl-to-zoom")||n.e.ctrlKey}).on("zoom",this.zoomed)}},{key:"setFloatAttribute",value:function(t,e){var i=parseFloat(e);this["_".concat(t)]=Number.isNaN(i)?e:i}},{key:"attributeChangedCallback",value:function(t,e,i){if("null"===i&&(i=null),e!==i){if(t.startsWith("highlight"))return void this.trackHighlighter.changedCallBack(t,i);this.setFloatAttribute(t,i),"length"===t&&(this._updateScaleDomain(),this._originXScale=this.xScale.copy()),this.applyZoomTranslation()}}},{key:"zoomed",value:function(){if(this.xScale=n.e.transform.rescaleX(this._originXScale),!this.dontDispatch){var t=a(this.xScale.domain(),2),e=t[0],i=t[1];this.dispatchEvent(new CustomEvent("change",{detail:{displaystart:Math.max(1,e),displayend:Math.min(this.length,Math.max(i-1,e+1))},bubbles:!0,cancelable:!0}))}}},{key:"applyZoomTranslation",value:function(){if(this.svg&&this._originXScale){var t=Math.max(1,this.length/(1+this._displayend-this._displaystart)),e=-this._originXScale(this._displaystart);this.dontDispatch=!0,this.svg.call(this.zoom.transform,n.n.scale(t).translate(e,0)),this.dontDispatch=!1,this.refresh()}}},{key:"_onResize",value:function(){this.width=this.offsetWidth,this._updateScaleDomain(),this._originXScale=this.xScale.copy(),this.svg&&this.svg.attr("width",this.width),this._zoom.scaleExtent([1,1/0]).translateExtent([[0,0],[this.getWidthWithMargins(),0]]),this.applyZoomTranslation()}},{key:"_listenForResize",value:function(){this._ro=new o.a(this._onResize),this._ro.observe(this)}},{key:"_resetEventHandler",value:function(t){t.target.closest(".feature")||this.dispatchEvent(this.createEvent("reset",null,!0))}},{key:"getXFromSeqPosition",value:function(t){return this.margin.left+this.xScale(t)}},{key:"getSingleBaseWidth",value:function(){return this.xScale(2)-this.xScale(1)}},{key:"createEvent",value:function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3?arguments[3]:void 0,o=arguments.length>4?arguments[4]:void 0,s=arguments.length>5?arguments[5]:void 0;i&&(i=i.feature?i.feature:i);var a={eventtype:t,coords:e._getClickCoords(),feature:i,target:s};return n&&(i&&i.fragments?a.highlight=i.fragments.map(function(t){return"".concat(t.start,":").concat(t.end)}).join(","):a.highlight=r&&o?"".concat(r,":").concat(o):null),new CustomEvent("change",{detail:a,bubbles:!0,cancelable:!0})}},{key:"bindEvents",value:function(t,e){t.on("mouseover",function(t,i,n){e.dispatchEvent(e.createEvent("mouseover",t,"onmouseover"===e._highlightEvent,t.start,t.end,n[i]))}).on("mouseout",function(){e.dispatchEvent(e.createEvent("mouseout",null,"onmouseover"===e._highlightEvent))}).on("click",function(t,i,n){e.dispatchEvent(e.createEvent("click",t,"onclick"===e._highlightEvent,t.start,t.end,n[i]))})}},{key:"width",get:function(){return this._width},set:function(t){this._width=t}},{key:"height",set:function(t){this._height=t},get:function(){return this._height}},{key:"length",set:function(t){this._length=t,this.trackHighlighter.max=t},get:function(){return this._length}},{key:"xScale",get:function(){return this._xScale},set:function(t){this._xScale=t}},{key:"zoom",get:function(){return this._zoom}},{key:"svg",set:function(t){this._svg=t,t.call(this._zoom),this.applyZoomTranslation()},get:function(){return this._svg}},{key:"margin",get:function(){return{top:10,right:10,bottom:10,left:10}}},{key:"fixedHighlight",set:function(t){this.trackHighlighter.setFixedHighlight(t)}}])&&h(i.prototype,u),p&&h(i,p),e}();e.a=p},578:function(t,e,i){"use strict";function n(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var i=[],n=!0,r=!1,o=void 0;try{for(var s,a=t[Symbol.iterator]();!(n=(s=a.next()).done)&&(i.push(s.value),!e||i.length!==e);n=!0);}catch(t){r=!0,o=t}finally{try{n||null==a.return||a.return()}finally{if(r)throw o}}return i}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function r(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var o=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=e.min,n=void 0===i?-1/0:i,r=e.max,o=void 0===r?1/0:r;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.segments=[],this.max=o,this.min=n,this.regionString=null}var e,i,o;return e=t,(i=[{key:"encode",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return this.segments.map(function(i){var n=i.start,r=i.end;if(e)return"".concat(n,":").concat(r);var o=n===t.min?"":n,s=r===t.max?"":r;return"".concat(o,":").concat(s)}).join(",")}},{key:"decode",value:function(t){var e=this;void 0!==t&&(this.regionString=t),this.regionString?this.segments=this.regionString.split(",").map(function(t){var i=n(t.split(":"),3),r=i[0],o=i[1];if(void 0!==i[2])throw new Error("there should be at most 1 ':' per region. Region: ".concat(t));var s=r?Number(r):e.min,a=o?Number(o):e.max;if(s>a){var h=[a,s];s=h[0],a=h[1]}if(s<e.min&&(s=e.min),a>e.max&&(a=e.max),Number.isNaN(s))throw new Error("The parsed value of ".concat(r," is NaN. Region: ").concat(t));if(Number.isNaN(a))throw new Error("The parsed value of ".concat(o," is NaN. Region: ").concat(t));return{start:s,end:a}}):this.segments=[]}}])&&r(e.prototype,i),o&&r(e,o),t}();function s(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var a=function(t,e){return t?e?"".concat(t,",").concat(e):t:e},h=function(){function t(e){var i=e.element,n=e.min,r=e.max;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.element=i,this.region=new o({min:n,max:r}),this.fixedHighlight=null}var e,i,n;return e=t,(i=[{key:"setAttributesInElement",value:function(){this.region.decode(this.element.getAttribute("highlight")),0===this.region.segments.length&&(this.element._highlightstart=Number(this.element.getAttribute("highlightstart")),this.element._highlightend=Number(this.element.getAttribute("highlightend")),null!==this.element._highlightstart&&null!==this.element._highlightend&&"number"==typeof this.element._highlightstart&&"number"==typeof this.element._highlightend&&(this.element._highlight="".concat(this.element._highlightstart,":").concat(this.element._highlightend),this.region.decode(a(this.fixedHighlight,this.element._highlight))))}},{key:"setFloatAttribute",value:function(t,e){var i=parseFloat(e);this.element["_".concat(t)]=Number.isNaN(i)?e:i}},{key:"changedCallBack",value:function(t,e){switch(t){case"highlightstart":case"highlightend":this.setFloatAttribute(t,e),this.element._highlight=Number.isNaN(this.element._highlightstart)||Number.isNaN(this.element._highlightend)||void 0===this.element._highlightstart||void 0===this.element._highlightend||null===this.element._highlightstart||null===this.element._highlightend?"":"".concat(Math.max(this.region.min,this.element._highlightstart),":").concat(Math.min(this.region.max,this.element._highlightend));break;default:this.element._highlight=e}this.region.decode(a(this.fixedHighlight,this.element._highlight)),this.element.refresh()}},{key:"setFixedHighlight",value:function(t){this.fixedHighlight=t,this.region.decode(a(t,this.element._highlight)),this.element.refresh()}},{key:"appendHighlightTo",value:function(t){this.highlighted=t.append("g").attr("class","highlighted")}},{key:"updateHighlight",value:function(){var t=this,e=this.highlighted.selectAll("rect").data(this.region.segments);e.enter().append("rect").style("opacity",.5).attr("fill","rgba(255, 235, 59, 0.8)").style("pointer-events","none").merge(e).attr("height",this.element._height).attr("x",function(e){return t.element.getXFromSeqPosition(e.start)}).attr("width",function(e){return t.element.getSingleBaseWidth()*(e.end-e.start+1)}),e.exit().remove()}},{key:"max",set:function(t){this.region.max=t}}])&&s(e.prototype,i),n&&s(e,n),t}();function l(t){var e=document.createElement("div");return e.style.borderColor="",e.style.borderColor=t,""!==e.style.borderColor}var c=function(t){return t};i.d(e,"c",function(){return u}),i.d(e,"a",function(){return g}),i.d(e,"b",function(){return f});var u=h,g=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=[],i=[];if(null!==t&&"string"!=typeof t)throw new Error("The attribute text has to be of type string");if(t&&""!==t.trim()){var n=t.split(",").map(function(t){return t.split(":")});if(n.length<2)throw new Error("There should be at least 2 points to create a scale");e=n.map(function(t){var e=t[0].trim().toUpperCase();if(!l(e))throw new Error("The color '".concat(e," is not valid'"));return e}),i=n.map(function(t,e){var i=parseFloat(t[1]);if(Number.isNaN(i))throw new Error("The second part of every point should be a number. Error in point ".concat(e,": ").concat(t));return i})}return{range:e,domain:i}},f=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=e.keyFormatter,n=void 0===i?c:i,r=e.valueFormatter,o=void 0===r?c:r;if(null!==t&&"string"!=typeof t)throw new Error("The attribute text has to be of type string");if(t&&""!==t.trim()){var s=t.split(",").map(function(t){return t.split(":")}),a={};return s.forEach(function(t){if(2!==t.length)throw new Error("Bad block: ".concat(t.join(":"),"\n The blocks of the string should follow the format KEY:VALUE"));a[n(t[0])]=o(t[1])}),a}return{}}},604:function(t,e,i){"use strict";var n=i(562),r=i(576);function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function a(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function h(t,e,i,n){return(h="undefined"!=typeof Reflect&&Reflect.set?Reflect.set:function(t,e,i,n){var r,o=c(t,e);if(o){if((r=Object.getOwnPropertyDescriptor(o,e)).set)return r.set.call(n,i),!0;if(!r.writable)return!1}if(r=Object.getOwnPropertyDescriptor(n,e)){if(!r.writable)return!1;r.value=i,Object.defineProperty(n,e,r)}else!function(t,e,i){e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i}(n,e,i);return!0})(t,e,i,n)}function l(t,e,i){return(l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,i){var n=c(t,e);if(n){var r=Object.getOwnPropertyDescriptor(n,e);return r.get?r.get.call(i):r.value}})(t,e,i||t)}function c(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=u(t)););return t}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function g(t,e){return(g=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var f=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),a(this,u(e).apply(this,arguments))}var i,o,c;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&g(t,e)}(e,r["a"]),i=e,c=[{key:"observedAttributes",get:function(){return r.a.observedAttributes.concat("highlightstart","highlightend")}}],(o=[{key:"connectedCallback",value:function(){var t=this;l(u(e.prototype),"connectedCallback",this).call(this),this.sequence=this.getAttribute("sequence"),this.sequence&&this._createSequence(),this.addEventListener("load",function(e){t.data=e.detail.payload})}},{key:"_getCharWidth",value:function(){this.seq_g.append("text").attr("class","base").text("T"),this.chWidth=.8*this.seq_g.select("text.base").node().getBBox().width,this.seq_g.select("text.base").remove()}},{key:"_createSequence",value:function(){!function(t,e,i,n,r){if(!h(t,e,i,n||t)&&r)throw new Error("failed to set property")}(u(e.prototype),"svg",Object(n.l)(this).append("div").attr("class","").append("svg").attr("id","").attr("width",this.width).attr("height",this._height),this,!0),this.seq_bg=l(u(e.prototype),"svg",this).append("g").attr("class","background"),this.axis=l(u(e.prototype),"svg",this).append("g").attr("class","x axis"),this.seq_g=l(u(e.prototype),"svg",this).append("g").attr("class","sequence").attr("transform","translate(0,".concat(.75*this._height,")")),this._getCharWidth(),this.trackHighlighter.appendHighlightTo(this.svg),this.refresh()}},{key:"refresh",value:function(){var t=this;if(this.axis){var e=this.getSingleBaseWidth(),i=e-this.chWidth,r=e/2,o=Math.round(Math.max(0,this._displaystart-2)),s=Math.round(Math.min(this.sequence.length,this._displayend+1)),a=i<0?[]:this.sequence.slice(o,s).split("").map(function(t,e){return{start:1+o+e,end:1+o+e,aa:t}});this.xAxis=Object(n.a)(this.xScale).tickFormat(function(t){return Number.isInteger(t)?t:""}).ticks(3,"s"),this.axis.call(this.xAxis),this.axis.attr("transform","translate(".concat(this.margin.left+r,",0)")),this.axis.select(".domain").remove(),this.axis.selectAll(".tick line").remove(),this.bases=this.seq_g.selectAll("text.base").data(a,function(t){return t.start}),this.bases.enter().append("text").attr("class","base").attr("text-anchor","middle").attr("x",function(e){return t.getXFromSeqPosition(e.start)+r}).text(function(t){return t.aa}).style("pointer-events","none").style("font-family","monospace"),this.bases.exit().remove(),this.bases.attr("x",function(e){return t.getXFromSeqPosition(e.start)+r}),this.background=this.seq_bg.selectAll("rect.base_bg").data(a,function(t){return t.start}),this.background.enter().append("rect").attr("class","base_bg feature").attr("height",this._height).merge(this.background).attr("width",e).attr("fill",function(t){return Math.round(t.start)%2?"#ccc":"#eee"}).attr("x",function(e){return t.getXFromSeqPosition(e.start)}).call(this.bindEvents,this),this.background.exit().remove(),this.seq_g.style("opacity",Math.min(1,i)),this.background.style("opacity",Math.min(1,i)),this._updateHighlight()}}},{key:"_updateHighlight",value:function(){this.trackHighlighter.updateHighlight()}},{key:"data",get:function(){return this.sequence},set:function(t){"string"==typeof t?this.sequence=t:"sequence"in t&&(this.sequence=t.sequence),this.sequence&&!l(u(e.prototype),"svg",this)?this._createSequence():this.refresh()}}])&&s(i.prototype,o),c&&s(i,c),e}();e.a=f}}]);