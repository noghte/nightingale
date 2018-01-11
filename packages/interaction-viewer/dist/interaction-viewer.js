(function(){'use strict';function e(e){return function(){var t=this.ownerDocument,a=this.namespaceURI;return a===hn&&t.documentElement.namespaceURI===hn?t.createElement(e):t.createElementNS(a,e)}}function t(e){return function(){return this.ownerDocument.createElementNS(e.space,e.local)}}function a(e,t,a){return e=n(e,t,a),function(t){var a=t.relatedTarget;a&&(a===this||8&a.compareDocumentPosition(this))||e.call(this,t)}}function n(e,t,a){return function(n){var i=Cn;// Events can be reentrant (e.g., focus).
Cn=n;try{e.call(this,this.__data__,t,a)}finally{Cn=i}}}function r(e){return e.trim().split(/^|\s+/).map(function(e){var a='',n=e.indexOf('.');return 0<=n&&(a=e.slice(n+1),e=e.slice(0,n)),{type:e,name:a}})}function d(e){return function(){var t=this.__on;if(t){for(var a,n=0,r=-1,i=t.length;n<i;++n)(a=t[n],(!e.type||a.type===e.type)&&a.name===e.name)?this.removeEventListener(a.type,a.listener,a.capture):t[++r]=a;++r?t.length=r:delete this.__on}}}function o(e,t,r){var c=Tn.hasOwnProperty(e.type)?a:n;return function(a,n,i){var d,o=this.__on,l=c(t,n,i);if(o)for(var s=0,f=o.length;s<f;++s)if((d=o[s]).type===e.type&&d.name===e.name)return this.removeEventListener(d.type,d.listener,d.capture),this.addEventListener(d.type,d.listener=l,d.capture=r),void(d.value=t);this.addEventListener(e.type,l,r),d={type:e.type,name:e.name,value:t,listener:l,capture:r},o?o.push(d):this.__on=[d]}}function i(){}function c(){return[]}function l(e,t){this.ownerDocument=e.ownerDocument,this.namespaceURI=e.namespaceURI,this._next=null,this._parent=e,this.__data__=t}// Protect against keys like “__proto__”.
function s(e,t,a,n,r,d){// Put any non-null nodes that fit into update.
// Put any null nodes into enter.
// Put any remaining data into enter.
for(var o,c=0,i=t.length,s=d.length;c<s;++c)(o=t[c])?(o.__data__=d[c],n[c]=o):a[c]=new l(e,d[c]);// Put any non-null nodes that don’t fit into exit.
for(;c<i;++c)(o=t[c])&&(r[c]=o)}function f(e,t,a,n,r,d,o){var c,i,s,f={},p=t.length,u=d.length,b=Array(p);// Compute the key for each node.
// If multiple nodes have the same key, the duplicates are added to exit.
for(c=0;c<p;++c)(i=t[c])&&(b[c]=s=Hn+o.call(i,i.__data__,c,t),s in f?r[c]=i:f[s]=i);// Compute the key for each datum.
// If there a node associated with this key, join and add it to update.
// If there is not (or the key is a duplicate), add it to enter.
for(c=0;c<u;++c)s=Hn+o.call(e,d[c],c,d),(i=f[s])?(n[c]=i,i.__data__=d[c],f[s]=null):a[c]=new l(e,d[c]);// Add any remaining nodes that were not bound to data to exit.
for(c=0;c<p;++c)(i=t[c])&&f[b[c]]===i&&(r[c]=i)}function p(e,t){return e<t?-1:e>t?1:e>=t?0:NaN}function u(e){return function(){this.removeAttribute(e)}}function b(e){return function(){this.removeAttributeNS(e.space,e.local)}}function g(e,t){return function(){this.setAttribute(e,t)}}function h(e,t){return function(){this.setAttributeNS(e.space,e.local,t)}}function m(e,t){return function(){var a=t.apply(this,arguments);null==a?this.removeAttribute(e):this.setAttribute(e,a)}}function y(e,t){return function(){var a=t.apply(this,arguments);null==a?this.removeAttributeNS(e.space,e.local):this.setAttributeNS(e.space,e.local,a)}}function _(e){return function(){this.style.removeProperty(e)}}function w(e,t,a){return function(){this.style.setProperty(e,t,a)}}function v(e,t,a){return function(){var n=t.apply(this,arguments);null==n?this.style.removeProperty(e):this.style.setProperty(e,n,a)}}function x(e,t){return e.style.getPropertyValue(t)||En(e).getComputedStyle(e,null).getPropertyValue(t)}function k(e){return function(){delete this[e]}}function T(e,t){return function(){this[e]=t}}function S(e,t){return function(){var a=t.apply(this,arguments);null==a?delete this[e]:this[e]=a}}function U(e){return e.trim().split(/^|\s+/)}function M(e){return e.classList||new j(e)}function j(e){this._node=e,this._names=U(e.getAttribute('class')||'')}function F(e,t){for(var a=M(e),r=-1,i=t.length;++r<i;)a.add(t[r])}function L(e,t){for(var a=M(e),r=-1,i=t.length;++r<i;)a.remove(t[r])}function H(e){return function(){F(this,e)}}function Y(e){return function(){L(this,e)}}function P(e,t){return function(){(t.apply(this,arguments)?F:L)(this,e)}}function O(){this.textContent=''}function I(e){return function(){this.textContent=e}}function z(e){return function(){var t=e.apply(this,arguments);this.textContent=null==t?'':t}}function N(){this.innerHTML=''}function q(e){return function(){this.innerHTML=e}}function $(e){return function(){var t=e.apply(this,arguments);this.innerHTML=null==t?'':t}}function Z(){this.nextSibling&&this.parentNode.appendChild(this)}function R(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function W(){return null}function V(){var e=this.parentNode;e&&e.removeChild(this)}function X(e,t,a){var n=En(e),i=n.CustomEvent;'function'==typeof i?i=new i(t,a):(i=n.document.createEvent('Event'),a?(i.initEvent(t,a.bubbles,a.cancelable),i.detail=a.detail):i.initEvent(t,!1,!1)),e.dispatchEvent(i)}function J(e,t){return function(){return X(this,e,t)}}function G(e,t){return function(){return X(this,e,t.apply(this,arguments))}}function K(e,t){this._groups=e,this._parents=t}function Q(e){return function(t,a){return zn(e(t),a)}}function ee(e,t,a){var n=(t-e)/un(0,a),i=pn(fn(n)/sn),r=n/ln(10,i);return 0<=i?(r>=Rn?10:r>=Bn?5:r>=Wn?2:1)*ln(10,i):-ln(10,-i)/(r>=Rn?10:r>=Bn?5:r>=Wn?2:1)}function te(e,t,a){var n=cn(t-e)/un(0,a),i=ln(10,pn(fn(n)/sn)),r=n/i;return r>=Rn?i*=10:r>=Bn?i*=5:r>=Wn&&(i*=2),t<e?-i:i}function ae(){}function ne(e,t){var a=new ae;// Copy constructor.
if(e instanceof ae)e.each(function(e,t){a.set(t,e)});// Index array by numeric index or specified key function.
else if(Array.isArray(e)){var r,d=-1,i=e.length;if(null==t)for(;++d<i;)a.set(d,e[d]);else for(;++d<i;)a.set(t(r=e[d],d,e),r)}// Convert object to map.
else if(e)for(var n in e)a.set(n,e[n]);return a}function ie(e){function t(t){var d=t+'',o=a.get(d);if(!o){if(n!==ti)return n;a.set(d,o=r.push(t))}return e[(o-1)%e.length]}var a=ne(),r=[],n=ti;return e=null==e?[]:ei.call(e),t.domain=function(e){if(!arguments.length)return r.slice();r=[],a=ne();for(var o,d,c=-1,i=e.length;++c<i;)a.has(d=(o=e[c])+'')||a.set(d,r.push(o));return t},t.range=function(a){return arguments.length?(e=ei.call(a),t):e.slice()},t.unknown=function(e){return arguments.length?(n=e,t):n},t.copy=function(){return ie().domain(r).range(e).unknown(n)},t}function de(){function e(){var e=i().length,n=d[1]<d[0],f=d[n-0],p=d[1-n];t=(p-f)/un(1,e-c+2*l),o&&(t=pn(t)),f+=(p-f-t*(e-c))*s,a=t*(1-c),o&&(f=on(f),a=on(a));var u=$n(e).map(function(e){return f+t*e});return r(n?u.reverse():u)}var t,a,n=ie().unknown(void 0),i=n.domain,r=n.range,d=[0,1],o=!1,c=0,l=0,s=0.5;return delete n.unknown,n.domain=function(t){return arguments.length?(i(t),e()):i()},n.range=function(t){return arguments.length?(d=[+t[0],+t[1]],e()):d.slice()},n.rangeRound=function(t){return d=[+t[0],+t[1]],o=!0,e()},n.bandwidth=function(){return a},n.step=function(){return t},n.round=function(t){return arguments.length?(o=!!t,e()):o},n.padding=function(t){return arguments.length?(c=l=un(0,gn(1,t)),e()):c},n.paddingInner=function(t){return arguments.length?(c=un(0,gn(1,t)),e()):c},n.paddingOuter=function(t){return arguments.length?(l=un(0,gn(1,t)),e()):l},n.align=function(t){return arguments.length?(s=un(0,gn(1,t)),e()):s},n.copy=function(){return de().domain(i()).range(d).round(o).paddingInner(c).paddingOuter(l).align(s)},e()}function oe(e,t){var a=Object.create(e.prototype);for(var n in t)a[n]=t[n];return a}function ce(){}function le(e){var t;return e=(e+'').trim().toLowerCase(),(t=ri.exec(e))?(t=parseInt(t[1],16),new be(15&t>>8|240&t>>4,15&t>>4|240&t,(15&t)<<4|15&t,1)// #f00
):(t=di.exec(e))?se(parseInt(t[1],16))// #ff0000
:(t=oi.exec(e))?new be(t[1],t[2],t[3],1)// rgb(255, 0, 0)
:(t=ci.exec(e))?new be(255*t[1]/100,255*t[2]/100,255*t[3]/100,1)// rgb(100%, 0%, 0%)
:(t=li.exec(e))?fe(t[1],t[2],t[3],t[4])// rgba(255, 0, 0, 1)
:(t=si.exec(e))?fe(255*t[1]/100,255*t[2]/100,255*t[3]/100,t[4])// rgb(100%, 0%, 0%, 1)
:(t=fi.exec(e))?ge(t[1],t[2]/100,t[3]/100,1)// hsl(120, 50%, 50%)
:(t=pi.exec(e))?ge(t[1],t[2]/100,t[3]/100,t[4])// hsla(120, 50%, 50%, 1)
:ui.hasOwnProperty(e)?se(ui[e]):'transparent'===e?new be(NaN,NaN,NaN,0):null}function se(e){return new be(255&e>>16,255&e>>8,255&e,1)}function fe(e,t,n,i){return 0>=i&&(e=t=n=NaN),new be(e,t,n,i)}function pe(e){return(e instanceof ce||(e=le(e)),!e)?new be:(e=e.rgb(),new be(e.r,e.g,e.b,e.opacity))}function ue(e,t,a,n){return 1===arguments.length?pe(e):new be(e,t,a,null==n?1:n)}function be(e,t,a,n){this.r=+e,this.g=+t,this.b=+a,this.opacity=+n}function ge(e,t,n,i){return 0>=i?e=t=n=NaN:0>=n||1<=n?e=t=NaN:0>=t&&(e=NaN),new me(e,t,n,i)}function he(e){if(e instanceof me)return new me(e.h,e.s,e.l,e.opacity);if(e instanceof ce||(e=le(e)),!e)return new me;if(e instanceof me)return e;e=e.rgb();var t=e.r/255,a=e.g/255,n=e.b/255,i=gn(t,a,n),r=un(t,a,n),d=NaN,c=r-i,s=(r+i)/2;return c?(d=t===r?(a-n)/c+6*(a<n):a===r?(n-t)/c+2:(t-a)/c+4,c/=0.5>s?r+i:2-r-i,d*=60):c=0<s&&1>s?0:d,new me(d,c,s,e.opacity)}function me(e,t,a,n){this.h=+e,this.s=+t,this.l=+a,this.opacity=+n}/* From FvD 13.37, CSS Color Module Level 3 */function ye(e,t,a){return 255*(60>e?t+(a-t)*e/60:180>e?a:240>e?t+(a-t)*(240-e)/60:t)}function _e(e){if(e instanceof we)return new we(e.l,e.a,e.b,e.opacity);if(e instanceof Se){var t=e.h*bi;return new we(e.l,rn(t)*e.c,nn(t)*e.c,e.opacity)}e instanceof be||(e=pe(e));var n=Te(e.r),i=Te(e.g),a=Te(e.b),r=ve((0.4124564*n+0.3575761*i+0.1804375*a)/Kn),d=ve((0.2126729*n+0.7151522*i+0.072175*a)/Xn),o=ve((0.0193339*n+0.119192*i+0.9503041*a)/Yn);return new we(116*d-16,500*(r-d),200*(d-o),e.opacity)}function we(e,t,n,i){this.l=+e,this.a=+t,this.b=+n,this.opacity=+i}function ve(e){return e>_i?ln(e,1/3):e/yi+Zn}function xe(e){return e>mi?e*e*e:yi*(e-Zn)}function ke(e){return 255*(0.0031308>=e?12.92*e:1.055*ln(e,1/2.4)-0.055)}function Te(e){return 0.04045>=(e/=255)?e/12.92:ln((e+0.055)/1.055,2.4)}function Ce(e){if(e instanceof Se)return new Se(e.h,e.c,e.l,e.opacity);e instanceof we||(e=_e(e));var t=an(e.b,e.a)*gi;return new Se(0>t?t+360:t,tn(e.a*e.a+e.b*e.b),e.l,e.opacity)}function Se(e,t,a,n){this.h=+e,this.c=+t,this.l=+a,this.opacity=+n}function Ue(e){if(e instanceof je)return new je(e.h,e.s,e.l,e.opacity);e instanceof be||(e=pe(e));var t=e.r/255,a=e.g/255,n=e.b/255,i=(xi*n+E*t-vi*a)/(xi+E-vi),r=n-i,d=(D*(a-i)-B*r)/C,o=tn(d*d+r*r)/(D*i*(1-i)),// NaN if l=0 or l=1
c=o?an(d,r)*gi-120:NaN;return new je(0>c?c+360:c,o,i,e.opacity)}function Me(e,t,a,n){return 1===arguments.length?Ue(e):new je(e,t,a,null==n?1:n)}function je(e,t,a,n){this.h=+e,this.s=+t,this.l=+a,this.opacity=+n}function Ae(e,a){return function(n){return e+n*a}}function Fe(e,a,n){return e=ln(e,n),a=ln(a,n)-e,n=1/n,function(i){return ln(e+i*a,n)}}function De(e){return 1==(e=+e)?Le:function(t,a){return a-t?Fe(t,a,e):ki(isNaN(t)?a:t)}}function Le(e,t){var a=t-e;return a?Ae(e,a):ki(isNaN(e)?t:e)}function He(e){return function(){return e}}function Ye(e){return function(a){return e(a)+''}}function Ee(e){return function t(a){function n(n,t){var i=e((n=Me(n)).h,(t=Me(t)).h),r=Le(n.s,t.s),d=Le(n.l,t.l),o=Le(n.opacity,t.opacity);return function(e){return n.h=i(e),n.s=r(e),n.l=d(ln(e,a)),n.opacity=o(e),n+''}}return a=+a,n.gamma=t,n}(1)}function Pe(e,t){return(t-=e=+e)?function(a){return(a-e)/t}:Ei(t)}function Oe(e){return function(t,n){var i=e(t=+t,n=+n);return function(e){return e<=t?0:e>=n?1:i(e)}}}function Ie(e){return function(n,i){var d=e(n=+n,i=+i);return function(e){return 0>=e?n:1<=e?i:d(e)}}}function ze(e,t,a,n){var i=e[0],r=e[1],d=t[0],o=t[1];return r<i?(i=a(r,i),d=n(o,d)):(i=a(i,r),d=n(d,o)),function(e){return d(i(e))}}function Ne(e,t,a,n){var o=gn(e.length,t.length)-1,c=Array(o),d=Array(o),r=-1;// Reverse descending domains.
for(e[o]<e[0]&&(e=e.slice().reverse(),t=t.slice().reverse());++r<o;)c[r]=a(e[r],e[r+1]),d[r]=n(t[r],t[r+1]);return function(t){var a=qn(e,t,1,o)-1;return d[a](c[a](t))}}function qe(e,t){return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp())}// deinterpolate(a, b)(x) takes a domain value x in [a,b] and returns the corresponding parameter t in [0,1].
// reinterpolate(a, b)(t) takes a parameter t in [0,1] and returns the corresponding domain value x in [a,b].
function $e(e,t){function a(){return i=2<gn(o.length,c.length)?Ne:ze,r=d=null,n}function n(t){return(r||(r=i(o,c,s?Oe(e):e,l)))(+t)}var i,r,d,o=Oi,c=Oi,l=Di,s=!1;return n.invert=function(e){return(d||(d=i(c,o,Pe,s?Ie(t):t)))(+e)},n.domain=function(e){return arguments.length?(o=Qn.call(e,Pi),a()):o.slice()},n.range=function(e){return arguments.length?(c=ei.call(e),a()):c.slice()},n.rangeRound=function(e){return c=ei.call(e),l=Li,a()},n.clamp=function(e){return arguments.length?(s=!!e,a()):s},n.interpolate=function(e){return arguments.length?(l=e,a()):l},a()}// Computes the decimal coefficient and exponent of the specified number x with
// significant digits p, where x is positive and p is in [1, 21] or undefined.
// For example, formatDecimal(1.23) returns ["123", 0].
function Ze(e){return new Re(e)}// instanceof
function Re(e){if(!(t=Ri.exec(e)))throw new Error('invalid format: '+e);var t,a=t[1]||' ',n=t[2]||'>',i=t[3]||'-',r=t[4]||'',d=!!t[5],o=t[6]&&+t[6],c=!!t[7],l=t[8]&&+t[8].slice(1),s=t[9]||'';// The "n" type is an alias for ",g".
'n'===s?(c=!0,s='g'):!Zi[s]&&(s=''),(d||'0'===a&&'='===n)&&(d=!0,a='0',n='='),this.fill=a,this.align=n,this.sign=i,this.symbol=r,this.zero=d,this.width=o,this.comma=c,this.precision=l,this.type=s}function Be(e){var t=e.domain;return e.ticks=function(e){var a=t();return Vn(a[0],a[a.length-1],null==e?10:e)},e.tickFormat=function(e,a){return er(t(),e,a)},e.nice=function(a){null==a&&(a=10);var n,i=t(),r=0,d=i.length-1,o=i[r],c=i[d];return c<o&&(n=o,o=c,c=n,n=r,r=d,d=n),n=ee(o,c,a),0<n?(o=pn(o/n)*n,c=bn(c/n)*n,n=ee(o,c,a)):0>n&&(o=bn(o*n)/n,c=pn(c*n)/n,n=ee(o,c,a)),0<n?(i[r]=pn(o/n)*n,i[d]=bn(c/n)*n,t(i)):0>n&&(i[r]=bn(o*n)/n,i[d]=pn(c*n)/n,t(i)),e},e}function We(){var e=$e(Pe,Ui);return e.copy=function(){return qe(e,We())},Be(e)}function Ve(e,t,a,n){function i(t){return e(t=new Date(+t)),t}return i.floor=i,i.ceil=function(a){return e(a=new Date(a-1)),t(a,1),e(a),a},i.round=function(e){var t=i(e),a=i.ceil(e);return e-t<a-e?t:a},i.offset=function(e,a){return t(e=new Date(+e),null==a?1:pn(a)),e},i.range=function(a,n,r){var d=[];if(a=i.ceil(a),r=null==r?1:pn(r),!(a<n)||!(0<r))return d;// also handles Invalid Date
do d.push(new Date(+a));while((t(a,r),e(a),a<n));return d},i.filter=function(a){return Ve(function(t){if(t>=t)for(;e(t),!a(t);)t.setTime(t-1)},function(e,n){if(e>=e)if(0>n)for(;0>=++n;)for(;t(e,-1),!a(e););// eslint-disable-line no-empty
else for(;0<=--n;)for(;t(e,1),!a(e););// eslint-disable-line no-empty
})},a&&(i.count=function(t,n){return tr.setTime(+t),ar.setTime(+n),e(tr),e(ar),pn(a(tr,ar))},i.every=function(e){return e=pn(e),isFinite(e)&&0<e?1<e?i.filter(n?function(t){return 0==n(t)%e}:function(t){return 0==i.count(0,t)%e}):i:null}),i}function Xe(e){return Ve(function(t){t.setDate(t.getDate()-(t.getDay()+7-e)%7),t.setHours(0,0,0,0)},function(e,t){e.setDate(e.getDate()+7*t)},function(e,t){return(t-e-(t.getTimezoneOffset()-e.getTimezoneOffset())*rr)/cr})}function Je(e){return Ve(function(t){t.setUTCDate(t.getUTCDate()-(t.getUTCDay()+7-e)%7),t.setUTCHours(0,0,0,0)},function(e,t){e.setUTCDate(e.getUTCDate()+7*t)},function(e,t){return(t-e)/cr})}function Ge(e){if(0<=e.y&&100>e.y){var t=new Date(-1,e.m,e.d,e.H,e.M,e.S,e.L);return t.setFullYear(e.y),t}return new Date(e.y,e.m,e.d,e.H,e.M,e.S,e.L)}function Ke(e){if(0<=e.y&&100>e.y){var t=new Date(Date.UTC(-1,e.m,e.d,e.H,e.M,e.S,e.L));return t.setUTCFullYear(e.y),t}return new Date(Date.UTC(e.y,e.m,e.d,e.H,e.M,e.S,e.L))}function Qe(e){return{y:e,m:0,d:1,H:0,M:0,S:0,L:0}}function et(e){function t(e,t){return function(a){var r,d,o,c=[],l=-1,i=0,s=e.length;for(a instanceof Date||(a=new Date(+a));++l<s;)37===e.charCodeAt(l)&&(c.push(e.slice(i,l)),null==(d=Pr[r=e.charAt(++l)])?d='e'===r?' ':'0':r=e.charAt(++l),(o=t[r])&&(r=o(a,d)),c.push(r),i=l+1);return c.push(e.slice(i,l)),c.join('')}}function a(e,t){return function(a){var r=Qe(1900),d=n(r,e,a+='',0);if(d!=a.length)return null;// The am-pm flag is 0 for AM, and 1 for PM.
// Convert day-of-week and week-of-year to day-of-year.
if('p'in r&&(r.H=r.H%12+12*r.p),'W'in r||'U'in r){'w'in r||(r.w='W'in r?1:0);var i='Z'in r?Ke(Qe(r.y)).getUTCDay():t(Qe(r.y)).getDay();r.m=0,r.d='W'in r?(r.w+6)%7+7*r.W-(i+5)%7:r.w+7*r.U-(i+6)%7}// If a time zone is specified, all fields are interpreted as UTC and then
// offset according to the specified time zone.
return'Z'in r?(r.H+=0|r.Z/100,r.M+=r.Z%100,Ke(r)):t(r);// Otherwise, all fields are in local time.
}}function n(e,t,a,r){for(var d,o,c=0,i=t.length,n=a.length;c<i;){if(r>=n)return-1;if(d=t.charCodeAt(c++),37===d){if(d=t.charAt(c++),o=T[d in Pr?t.charAt(c++):d],!o||0>(r=o(e,a,r)))return-1;}else if(d!=a.charCodeAt(r++))return-1}return r}var r=e.dateTime,o=e.date,c=e.time,i=e.periods,l=e.days,s=e.shortDays,f=e.months,p=e.shortMonths,u=nt(i),b=it(i),g=nt(l),h=it(l),m=nt(s),y=it(s),_=nt(f),w=it(f),v=nt(p),x=it(p),d={a:function(e){return s[e.getDay()]},A:function(e){return l[e.getDay()]},b:function(e){return p[e.getMonth()]},B:function(e){return f[e.getMonth()]},c:null,d:_t,e:_t,H:wt,I:vt,j:xt,L:kt,m:Tt,M:Ct,p:function(e){return i[+(12<=e.getHours())]},S:St,U:Ut,w:Mt,W:jt,x:null,X:null,y:At,Y:Ft,Z:Dt,"%":Wt},k={a:function(e){return s[e.getUTCDay()]},A:function(e){return l[e.getUTCDay()]},b:function(e){return p[e.getUTCMonth()]},B:function(e){return f[e.getUTCMonth()]},c:null,d:Lt,e:Lt,H:Ht,I:Yt,j:Et,L:Pt,m:Ot,M:It,p:function(e){return i[+(12<=e.getUTCHours())]},S:zt,U:Nt,w:qt,W:$t,x:null,X:null,y:Zt,Y:Rt,Z:Bt,"%":Wt},T={a:function(e,t,a){var i=m.exec(t.slice(a));return i?(e.w=y[i[0].toLowerCase()],a+i[0].length):-1},A:function(e,t,a){var i=g.exec(t.slice(a));return i?(e.w=h[i[0].toLowerCase()],a+i[0].length):-1},b:function(e,t,a){var i=v.exec(t.slice(a));return i?(e.m=x[i[0].toLowerCase()],a+i[0].length):-1},B:function(e,t,a){var i=_.exec(t.slice(a));return i?(e.m=w[i[0].toLowerCase()],a+i[0].length):-1},c:function(e,t,a){return n(e,r,t,a)},d:pt,e:pt,H:bt,I:bt,j:ut,L:mt,m:ft,M:gt,p:function(e,t,a){var i=u.exec(t.slice(a));return i?(e.p=b[i[0].toLowerCase()],a+i[0].length):-1},S:ht,U:dt,w:rt,W:ot,x:function(e,t,a){return n(e,o,t,a)},X:function(e,t,a){return n(e,c,t,a)},y:lt,Y:ct,Z:st,"%":yt};// These recursive directive definitions must be deferred.
return d.x=t(o,d),d.X=t(c,d),d.c=t(r,d),k.x=t(o,k),k.X=t(c,k),k.c=t(r,k),{format:function(e){var a=t(e+='',d);return a.toString=function(){return e},a},parse:function(e){var t=a(e+='',Ge);return t.toString=function(){return e},t},utcFormat:function(e){var a=t(e+='',k);return a.toString=function(){return e},a},utcParse:function(e){var t=a(e,Ke);return t.toString=function(){return e},t}}}function tt(e,t,a){var n=0>e?'-':'',i=(n?-e:e)+'',r=i.length;return n+(r<a?Array(a-r+1).join(t)+i:i)}function at(e){return e.replace(zr,'\\$&')}function nt(e){return new RegExp('^(?:'+e.map(at).join('|')+')','i')}function it(e){for(var t={},a=-1,i=e.length;++a<i;)t[e[a].toLowerCase()]=a;return t}function rt(e,t,a){var i=Or.exec(t.slice(a,a+1));return i?(e.w=+i[0],a+i[0].length):-1}function dt(e,t,a){var i=Or.exec(t.slice(a));return i?(e.U=+i[0],a+i[0].length):-1}function ot(e,t,a){var i=Or.exec(t.slice(a));return i?(e.W=+i[0],a+i[0].length):-1}function ct(e,t,a){var i=Or.exec(t.slice(a,a+4));return i?(e.y=+i[0],a+i[0].length):-1}function lt(e,t,a){var i=Or.exec(t.slice(a,a+2));return i?(e.y=+i[0]+(68<+i[0]?1900:2e3),a+i[0].length):-1}function st(e,t,a){var i=/^(Z)|([+-]\d\d)(?:\:?(\d\d))?/.exec(t.slice(a,a+6));return i?(e.Z=i[1]?0:-(i[2]+(i[3]||'00')),a+i[0].length):-1}function ft(e,t,a){var i=Or.exec(t.slice(a,a+2));return i?(e.m=i[0]-1,a+i[0].length):-1}function pt(e,t,a){var i=Or.exec(t.slice(a,a+2));return i?(e.d=+i[0],a+i[0].length):-1}function ut(e,t,a){var i=Or.exec(t.slice(a,a+3));return i?(e.m=0,e.d=+i[0],a+i[0].length):-1}function bt(e,t,a){var i=Or.exec(t.slice(a,a+2));return i?(e.H=+i[0],a+i[0].length):-1}function gt(e,t,a){var i=Or.exec(t.slice(a,a+2));return i?(e.M=+i[0],a+i[0].length):-1}function ht(e,t,a){var i=Or.exec(t.slice(a,a+2));return i?(e.S=+i[0],a+i[0].length):-1}function mt(e,t,a){var i=Or.exec(t.slice(a,a+3));return i?(e.L=+i[0],a+i[0].length):-1}function yt(e,t,a){var i=Ir.exec(t.slice(a,a+1));return i?a+i[0].length:-1}function _t(e,t){return tt(e.getDate(),t,2)}function wt(e,t){return tt(e.getHours(),t,2)}function vt(e,t){return tt(e.getHours()%12||12,t,2)}function xt(e,t){return tt(1+pr.count(vr(e),e),t,3)}function kt(e,t){return tt(e.getMilliseconds(),t,3)}function Tt(e,t){return tt(e.getMonth()+1,t,2)}function Ct(e,t){return tt(e.getMinutes(),t,2)}function St(e,t){return tt(e.getSeconds(),t,2)}function Ut(e,t){return tt(ur.count(vr(e),e),t,2)}function Mt(e){return e.getDay()}function jt(e,t){return tt(br.count(vr(e),e),t,2)}function At(e,t){return tt(e.getFullYear()%100,t,2)}function Ft(e,t){return tt(e.getFullYear()%1e4,t,4)}function Dt(e){var t=e.getTimezoneOffset();return(0<t?'-':(t*=-1,'+'))+tt(0|t/60,'0',2)+tt(t%60,'0',2)}function Lt(e,t){return tt(e.getUTCDate(),t,2)}function Ht(e,t){return tt(e.getUTCHours(),t,2)}function Yt(e,t){return tt(e.getUTCHours()%12||12,t,2)}function Et(e,t){return tt(1+Tr.count(Lr(e),e),t,3)}function Pt(e,t){return tt(e.getUTCMilliseconds(),t,3)}function Ot(e,t){return tt(e.getUTCMonth()+1,t,2)}function It(e,t){return tt(e.getUTCMinutes(),t,2)}function zt(e,t){return tt(e.getUTCSeconds(),t,2)}function Nt(e,t){return tt(Cr.count(Lr(e),e),t,2)}function qt(e){return e.getUTCDay()}function $t(e,t){return tt(Sr.count(Lr(e),e),t,2)}function Zt(e,t){return tt(e.getUTCFullYear()%100,t,2)}function Rt(e,t){return tt(e.getUTCFullYear()%1e4,t,4)}function Bt(){return'+0000'}function Wt(){return'%'}function Vt(e){var a=e.length;return function(n){return e[un(0,gn(a-1,pn(n*a)))]}}/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */function Xt(e,t){for(var a=-1,n=null==e?0:e.length,i=Array(n);++a<n;)i[a]=t(e[a],a,e);return i}/** Detect free variable `global` from Node.js. *//**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */function Jt(e){var t=ad.call(e,id),a=e[id];try{e[id]=void 0}catch(t){}var n=nd.call(e);return t?e[id]=a:delete e[id],n}/** Used for built-in method references. *//**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */function Gt(e){return dd.call(e)}/** `Object#toString` result references. *//**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */function Kt(e){return null==e?void 0===e?cd:od:ld&&ld in Object(e)?Jt(e):Gt(e)}/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */function Qt(e){var t=typeof e;return null!=e&&('object'==t||'function'==t)}/** `Object#toString` result references. *//**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */function ea(e){if(!Qt(e))return!1;// The use of `Object#toString` avoids issues with the `typeof` operator
// in Safari 9 which returns 'object' for typed arrays and other constructors.
var t=Kt(e);return t==fd||t==pd||t==sd||t==ud}/** Used to detect overreaching core-js shims. *//**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */function ta(e){return!!gd&&gd in e}/** Used for built-in method references. *//**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */function aa(e){if(null!=e){try{return md.call(e)}catch(t){}try{return e+''}catch(t){}}return''}/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 *//**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */function na(e){if(!Qt(e)||ta(e))return!1;var t=ea(e)?Td:_d;return t.test(aa(e))}/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */function ia(e,t){return null==e?void 0:e[t]}/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */function ra(e,t){var a=ia(e,t);return na(a)?a:void 0}/* Built-in method references that are verified to be native. *//**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 *//**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 *//**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 *//** Used to stand-in for `undefined` hash values. *//**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 *//** Used for built-in method references. *//**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 *//** Used to stand-in for `undefined` hash values. *//**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function da(e){var t=-1,a=null==e?0:e.length;for(this.clear();++t<a;){var n=e[t];this.set(n[0],n[1])}}// Add methods to `Hash`.
/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 *//**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */function oa(e,t){return e===t||e!==e&&t!==t}/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */function ca(e,t){for(var a=e.length;a--;)if(oa(e[a][0],t))return a;return-1}/** Used for built-in method references. *//**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 *//**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 *//**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 *//**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 *//**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function la(e){var t=-1,a=null==e?0:e.length;for(this.clear();++t<a;){var n=e[t];this.set(n[0],n[1])}}// Add methods to `ListCache`.
/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 *//**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */function sa(e){var t=typeof e;return'string'==t||'number'==t||'symbol'==t||'boolean'==t?'__proto__'!==e:null===e}/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */function fa(e,t){var a=e.__data__;return sa(t)?a['string'==typeof t?'string':'hash']:a.map}/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 *//**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 *//**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 *//**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 *//**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function pa(e){var t=-1,a=null==e?0:e.length;for(this.clear();++t<a;){var n=e[t];this.set(n[0],n[1])}}// Add methods to `MapCache`.
/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 *//**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 *//**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */function ua(e){var t=-1,a=null==e?0:e.length;for(this.__data__=new pa;++t<a;)this.add(e[t])}// Add methods to `SetCache`.
/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */function ba(e,t,a,n){for(var i=e.length,r=a+(n?1:-1);n?r--:++r<i;)if(t(e[r],r,e))return r;return-1}/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */function ga(e){return e!==e}/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */function ha(e,t,a){for(var n=a-1,i=e.length;++n<i;)if(e[n]===t)return n;return-1}/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */function ma(e,t,a){return t===t?ha(e,t,a):ba(e,ga,a)}/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */function ya(e,t){var a=null==e?0:e.length;return!!a&&-1<ma(e,t,0)}/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */function _a(e,t,a){for(var n=-1,i=null==e?0:e.length;++n<i;)if(a(t,e[n]))return!0;return!1}/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */function wa(e){return function(t){return e(t)}}/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function va(e,t){return e.has(t)}/* Built-in method references for those with the same name as other `lodash` methods. *//**
 * The base implementation of methods like `_.intersection`, without support
 * for iteratee shorthands, that accepts an array of arrays to inspect.
 *
 * @private
 * @param {Array} arrays The arrays to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of shared values.
 */function xa(e,t,a){for(var n=a?_a:ya,i=e[0].length,r=e.length,d=r,o=Array(r),c=Infinity,l=[];d--;){var s=e[d];d&&t&&(s=Xt(s,wa(t))),c=Ld(s.length,c),o[d]=!a&&(t||120<=i&&120<=s.length)?new ua(d&&s):void 0}s=e[0];var f=-1,p=o[0];outer:for(;++f<i&&l.length<c;){var u=s[f],b=t?t(u):u;if(u=a||0!==u?u:0,p?!va(p,b):!n(l,b,a)){for(d=r;--d;){var g=o[d];if(g?!va(g,b):!n(e[d],b,a))continue outer}p&&p.push(b),l.push(u)}}return l}/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */function ka(e){return e}/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */function Ta(e,t,a){switch(a.length){case 0:return e.call(t);case 1:return e.call(t,a[0]);case 2:return e.call(t,a[0],a[1]);case 3:return e.call(t,a[0],a[1],a[2]);}return e.apply(t,a)}/* Built-in method references for those with the same name as other `lodash` methods. *//**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */function Ca(e,t,a){return t=Hd(void 0===t?e.length-1:t,0),function(){for(var n=arguments,i=-1,r=Hd(n.length-t,0),d=Array(r);++i<r;)d[i]=n[t+i];i=-1;for(var o=Array(t+1);++i<t;)o[i]=n[i];return o[t]=a(d),Ta(e,this,o)}}/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */function Sa(e){return function(){return e}}/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 *//**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 *//**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 *//**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 *//** Used as references for various `Number` constants. */function Ua(e){return'number'==typeof e&&-1<e&&0==e%1&&e<=Id}/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */function Ma(e){return null!=e&&Ua(e.length)&&!ea(e)}/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */function ja(e){return null!=e&&'object'==typeof e}/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */function Aa(e){return ja(e)&&Ma(e)}/**
 * Casts `value` to an empty array if it's not an array like object.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array|Object} Returns the cast array-like object.
 */function Fa(e){return Aa(e)?e:[]}/**
 * Creates an array of unique values that are included in all given arrays
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons. The order and references of result values are
 * determined by the first array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @returns {Array} Returns the new array of intersecting values.
 * @example
 *
 * _.intersection([2, 1], [2, 3]);
 * // => [2]
 */function Da(e,t){var a=e.split(', ');Nd(t,a)}function La(e,t,a){'number'==typeof a?a++:a=1;var n,i=!0,r=!1;try{for(var d,o,c=e[Symbol.iterator]();!(i=(d=c.next()).done);i=!0)o=d.value,o.depth=a,t(o),0<o.children.length&&La(o.children,t,a)}catch(e){r=!0,n=e}finally{try{!i&&c.return&&c.return()}finally{if(r)throw n}}}function Ha(e){return fetch('https://www.ebi.ac.uk/proteins/api/proteins/interaction/'+e+'.json').then(function(e){return e.json().then(function(e){return Ya(e)})})}function Ya(e){// remove interactions which are not part of current set
var t,a=!0,n=!1;try{for(var i,r=e[Symbol.iterator]();!(a=(i=r.next()).done);a=!0){var d=i.value,o=[];// we need this until production fixes data as it's not symetrical
if(d.filterTerms=[],!!d.interactions){d.accession.includes('-')&&(d.isoform=d.accession,d.accession=d.accession.split('-')[0]);// Add source  to the nodes
var c=function(t){t.id&&t.id.includes('-')&&(t.isoform=t.id,t.id=t.id.split('-')[0]),'SELF'===t.interactionType?(t.source=d.accession,t.id=d.accession,Ea(t,o)):e.some(function(e){//Check that interactor is in the data
return e.accession===t.id})&&(t.source=d.accession.split('-')[0],Ea(t,o))},l=!0,s=!1,f=void 0;try{for(var p,u,b=d.interactions[Symbol.iterator]();!(l=(p=b.next()).done);l=!0)u=p.value,c(u)}catch(e){s=!0,f=e}finally{try{!l&&b.return&&b.return()}finally{if(s)throw f}}if(d.interactions=o,d.subcellularLocations){var g=!0,h=!1,m=void 0;try{for(var y,_=d.subcellularLocations[Symbol.iterator]();!(g=(y=_.next()).done);g=!0){var w=y.value,v=!0,x=!1,k=void 0;try{for(var T,C,S=w.locations[Symbol.iterator]();!(v=(T=S.next()).done);v=!0){C=T.value,Da(C.location.value,Vd);var U=C.location.value.split(', ');d.filterTerms=d.filterTerms.concat(U)}}catch(e){x=!0,k=e}finally{try{!v&&S.return&&S.return()}finally{if(x)throw k}}}}catch(e){h=!0,m=e}finally{try{!g&&_.return&&_.return()}finally{if(h)throw m}}}if(d.diseases){var M=!0,j=!1,A=void 0;try{for(var F,D,L=d.diseases[Symbol.iterator]();!(M=(F=L.next()).done);M=!0)D=F.value,D.diseaseId&&(Xd[D.diseaseId]={name:D.diseaseId,selected:!1},d.filterTerms.push(D.diseaseId))}catch(e){j=!0,A=e}finally{try{!M&&L.return&&L.return()}finally{if(j)throw A}}}}}}catch(e){n=!0,t=e}finally{try{!a&&r.return&&r.return()}finally{if(n)throw t}}return e}function Ea(e,t){var a=t.find(function(t){return e.id===t.id});a?e.isoform&&(a.isoform=e.isoform):t.push(e)}function Pa(e){var t,a=[],n=!0,i=!1;try{for(var r,d=Object.entries(e)[Symbol.iterator]();!(n=(r=d.next()).done);n=!0){var o=r.value,c=Wd(o,2),l=c[1];a.push(l)}}catch(e){i=!0,t=e}finally{try{!n&&d.return&&d.return()}finally{if(i)throw t}}return a}function Oa(){return[{name:'subcellularLocations',label:'Subcellular location',type:'tree',items:Vd},{name:'diseases',label:'Diseases',items:Pa(Xd)}]}function Ia(e){var t=e.el,a=t===void 0?en('el'):t,n=e.accession,i=n===void 0?'P05067':n;a.style.display='block',a.style.minHeight='6em',On(a).select('.interaction-title').remove(),On(a).select('svg').remove(),On(a).select('.interaction-tooltip').remove(),On(a).append('div').attr('class','loader'),Ha(i).then(function(e){qa(a,i,e)})}function za(e,t){if(e){var a,n='',i=!0,r=!1;try{for(var d,o,c=e[Symbol.iterator]();!(i=(d=c.next()).done);i=!0)o=d.value,o.dbReference&&(n+='<p><a href="//www.uniprot.org/uniprot/'+t+'#'+o.acronym+'" target="_blank">'+o.diseaseId+'</a></p>')}catch(e){r=!0,a=e}finally{try{!i&&c.return&&c.return()}finally{if(r)throw a}}return n}return'N/A'}function Na(e){if(e){var t,a='<ul class="tree-list">',n=[],i=!0,r=!1;try{for(var d,o=e[Symbol.iterator]();!(i=(d=o.next()).done);i=!0){var c=d.value,l=!0,s=!1,f=void 0;try{for(var p,u,b=c.locations[Symbol.iterator]();!(l=(p=b.next()).done);l=!0)u=p.value,Da(u.location.value,n)}catch(e){s=!0,f=e}finally{try{!l&&b.return&&b.return()}finally{if(s)throw f}}}}catch(e){r=!0,t=e}finally{try{!i&&o.return&&o.return()}finally{if(r)throw t}}return La(n,function(e){return a+='<li style="margin-left:'+e.depth+'em">'+e.name+'</li>'}),a+'</ul>'}return'N/A'}function qa(e,t,a){function n(e){On(this).classed('active-cell',!0),In('.interaction-row').classed('active',function(t){return t.accession===e.id}),In('.interaction-viewer-group').append('line').attr('class','active-row').attr('style','opacity:0').attr('x1',0).attr('y1',f(e.source)+f.bandwidth()/2).attr('x2',f(e.id)).attr('y2',f(e.source)+f.bandwidth()/2),In('.interaction-viewer-group').append('line').attr('class','active-row').attr('style','opacity:0').attr('x1',f(e.id)+f.bandwidth()/2).attr('y1',0).attr('x2',f(e.id)+f.bandwidth()/2).attr('y2',f(e.source))}function i(t){r(In('.tooltip-content'),t),c.style('opacity',0.9).style('display','inline').style('left',jn(e)[0]+10+'px').style('top',jn(e)[1]-15+'px')}function r(e,t){e.html('');var a=Jd.find(function(e){return e.accession===t.source}),n=Jd.find(function(e){return e.accession===t.id});e.append('h3').text('Interaction'),e.append('p').append('a').attr('href',d(t.interactor1,t.interactor2)).attr('target','_blank').text('Confirmed by '+t.experiments+' experiment(s)');var i=e.append('table').attr('class','interaction-viewer-table'),r=i.append('tr');r.append('th'),r.append('th').text('Interactor 1'),r.append('th').text('Interactor 2');var o=i.append('tr');o.append('td').text('Name').attr('class','interaction-viewer-table_row-header'),o.append('td').text(''+a.name),o.append('td').text(''+n.name);var c=i.append('tr');c.append('td').text('UniProtKB').attr('class','interaction-viewer-table_row-header'),c.append('td').append('a').attr('href','//uniprot.org/uniprot/'+a.accession).text(''+a.accession),c.append('td').append('a').attr('href','//uniprot.org/uniprot/'+n.accession).text(''+n.accession),console.log(t);var l=i.append('tr');l.append('td').text('Pathology').attr('class','interaction-viewer-table_row-header'),l.append('td').html(za(a.diseases,a.accession)),l.append('td').html(za(n.diseases,n.accession));var s=i.append('tr');s.append('td').text('Subcellular location').attr('class','interaction-viewer-table_row-header'),s.append('td').html(Na(a.subcellularLocations)),s.append('td').html(Na(n.subcellularLocations));var f=i.append('tr');f.append('td').text('IntAct').attr('class','interaction-viewer-table_row-header'),f.append('td').attr('colspan',2).append('a').attr('href',d(t.interactor1,t.interactor2)).attr('target','_blank').text(t.interactor1+';'+t.interactor2)}function d(e,t){return'//www.ebi.ac.uk/intact/query/id:'+e+' AND id:'+t}function o(){In('g').classed('active',!1),In('circle').classed('active-cell',!1),In('.active-row').remove()}On(e).select('.loader').remove(),Jd=a;var c=On(e).append('div').attr('class','interaction-tooltip').attr('display','none').style('opacity',0);c.append('span').attr('class','close-interaction-tooltip').text('Close \u2716').on('click',function(){In('.interaction-tooltip').style('opacity',0).style('display','none')}),c.append('div').attr('class','tooltip-content'),On(e).append('p').attr('class','interaction-title').text(t+' has binary interactions with '+(Jd.length-1)+' proteins'),Qa(e,Oa());var l={top:100,right:0,bottom:10,left:100},s=18*Jd.length,f=de().rangeRound([0,s]),p=We().range([0.2,1]),u=On(e).append('svg').attr('width',s+l.left+l.right).attr('height',s+l.top+l.bottom).attr('class','interaction-viewer').append('g').attr('class','interaction-viewer-group').attr('transform','translate('+l.left+','+l.top+')');f.domain(Jd.map(function(e){return e.accession})),p.domain([0,10]);// x.domain(nodes.map(entry => entry.accession)); intensity.domain([0,
// d3.max(nodes.map(link => link.experiments))]);
var b=u.selectAll('.interaction-row').data(Jd).enter().append('g').attr('class','interaction-row').attr('transform',function(e){return'translate(0,'+f(e.accession)+')'}).each(function(e){if(e.interactions){var t=On(this).selectAll('.cell').data(e.interactions),a=t.enter().append('circle');a.attr('class','cell').attr('cx',function(e){return f(e.id)+f.bandwidth()/2}).attr('cy',function(){return f.bandwidth()/2}).attr('r',f.bandwidth()/3).style('fill-opacity',function(e){return p(e.experiments)}).style('display',function(t){//Only show left half of graph
return f(e.accession)<f(t.id)?'none':''}).on('click',i).on('mouseover',n).on('mouseout',o),t.exit().remove()}});b.append('rect').attr('x',-l.left).attr('width',l.left).attr('height',f.bandwidth()).attr('class','text-highlight'),b.append('text').attr('y',f.bandwidth()/2).attr('dy','.32em').attr('text-anchor','end').text(function(e,t){return Jd[t].name}).attr('class',function(e,a){return Jd[a].accession===t?'main-accession':''});var g=u.selectAll('.column').data(Jd).enter().append('g').attr('class','column').attr('transform',function(e){return'translate('+f(e.accession)+', 0)rotate(-90)'});g.append('rect').attr('x',6).attr('width',l.top).attr('height',f.bandwidth()).attr('class','text-highlight'),g.append('text').attr('x',6).attr('y',f.bandwidth()/2).attr('dy','.32em').attr('text-anchor','start').text(function(e,t){return Jd[t].name}).attr('class',function(e,a){return Jd[a].accession===t?'main-accession':''});var h=f(Jd[1].accession)+' 0,'+f(Jd[Jd.length-1].accession)+' 0,'+f(Jd[Jd.length-1].accession)+' '+f(Jd[Jd.length-1].accession)+','+f(Jd[0].accession)+' 0';u.append('polyline').attr('points',h).attr('class','hidden-side').attr('transform',function(){return'translate('+f(Jd[1].accession)+', 0)'})}function $a(e){return Jd.find(function(t){return t.accession===e})}// Check if either the source or the target contain one of the specified
// filters. returns true if no filters selected
function Za(e,t,a){return!!(0>=a.length)||0<zd(e.filterTerms,a.map(function(e){return e.name})).length||0<zd(t.filterTerms,a.map(function(e){return e.name})).length}// Hide nodes and labels which don't belong to a visible filter
function Ra(){var e=Gd.filter(function(e){return e.selected}),t=[];In('.cell').attr('opacity',function(a){var n=$a(a.source),i=$a(a.id),r=Za(n,i,e);return r&&(t.push(n.accession),t.push(i.accession)),r?1:0.1}),In('.interaction-viewer text').attr('fill-opacity',function(e){return t.includes(e.accession)?1:0.1})}function Ba(){var e,t=!0,a=!1;try{for(var n,i=Gd[Symbol.iterator]();!(t=(n=i.next()).done);t=!0){var r=n.value,d=On('#'+Wa(r.name));d.classed('active',r.selected)}}catch(t){a=!0,e=t}finally{try{!t&&i.return&&i.return()}finally{if(a)throw e}}Ra()}function Wa(e){return e.toLowerCase().replace(/\s|,|^\d/g,'_')}function Va(e){var t=25;return e.length>t?e.substr(0,t-1)+'...':e}function Xa(e,t){In('.dropdown-pane').style('visibility','hidden'),Gd.filter(function(e){return e.type===t}).forEach(function(e){return e.selected=!1}),e.selected=!e.selected,On('[data-toggle=iv_'+t+']').text(Va(e.name)),Ba()}function Ja(e,t){In('.dropdown-pane').style('visibility','hidden'),Gd.filter(function(t){return t.type===e}).forEach(function(e){return e.selected=!1}),On('[data-toggle=iv_'+e+']').text(t),Ba()}function Ga(){Gd.filter(function(e){return e.selected}).forEach(function(e){return e.selected=!1}),Oa().forEach(function(e){On('[data-toggle=iv_'+e.name+']').text(e.label)}),Ba()}function Ka(){var e='#'+On(this).attr('data-toggle'),t=On(e).style('visibility');On('.dropdown-pane').style('visibility','hidden'),On(e).style('visibility','hidden'===t?'visible':'hidden')}// Add a filter to the interface
function Qa(e,t){On(e).selectAll('.interaction-filter-container').remove();var a,n=On(e).append('div').attr('class','interaction-filter-container'),i=function(e){if(0<e.items.length)if(l=n.append('div').attr('class','interaction-filter'),l.append('a').text(e.label).attr('class','button dropdown').attr('data-toggle','iv_'+e.name).on('click',Ka),s=l.append('ul').attr('id','iv_'+e.name).attr('class','dropdown-pane'),s.append('li').text('None').on('click',function(){return Ja(e.name,e.label)}),'tree'===e.type)La(e.items,function(t){t.type=e.name,Gd.push(t),s.datum(t).append('li').style('padding-left',t.depth+'em').attr('id',function(e){return Wa(e.name)}).text(function(e){return e.name}).on('click',function(t){return Xa(t,e.name)})});else{var t,a=!0,i=!1;try{for(var r,o,d=e.items[Symbol.iterator]();!(a=(r=d.next()).done);a=!0)o=r.value,o.type=e.name,Gd.push(o)}catch(e){i=!0,t=e}finally{try{!a&&d.return&&d.return()}finally{if(i)throw t}}s.selectAll('li').data(e.items).enter().append('li').attr('id',function(e){return Wa(e.name)}).text(function(e){return e.name.toLowerCase()}).on('click',function(t){Xa(t,e.name)})}},r=!0,d=!1;// container.append("div").text('Show only interactions where one or both
// interactors have:');
try{for(var o,c=t[Symbol.iterator]();!(r=(o=c.next()).done);r=!0){var l,s,f=o.value;i(f)}}catch(e){d=!0,a=e}finally{try{!r&&c.return&&c.return()}finally{if(d)throw a}}n.append('button').attr('class','iv_reset').text('Reset filters').on('click',function(){return Ga(),!1})}function en(e){throw Error('missing option: '+e)}var tn=Math.sqrt,an=Math.atan2,nn=Math.sin,rn=Math.cos,dn=Math.PI,on=Math.round,cn=Math.abs,ln=Math.pow,sn=Math.LN10,fn=Math.log,pn=Math.floor,un=Math.max,bn=Math.ceil,gn=Math.min,hn='http://www.w3.org/1999/xhtml',mn={svg:'http://www.w3.org/2000/svg',xhtml:hn,xlink:'http://www.w3.org/1999/xlink',xml:'http://www.w3.org/XML/1998/namespace',xmlns:'http://www.w3.org/2000/xmlns/'},yn=function(e){var t=e+='',a=t.indexOf(':');return 0<=a&&'xmlns'!==(t=e.slice(0,a))&&(e=e.slice(a+1)),mn.hasOwnProperty(t)?{space:mn[t],local:e}:e},_n=function(a){var n=yn(a);return(n.local?t:e)(n)},wn=function(e){return function(){return this.matches(e)}};if('undefined'!=typeof document){var vn=document.documentElement;if(!vn.matches){var xn=vn.webkitMatchesSelector||vn.msMatchesSelector||vn.mozMatchesSelector||vn.oMatchesSelector;wn=function(e){return function(){return xn.call(this,e)}}}}var kn=wn,Tn={},Cn=null;if('undefined'!=typeof document){var Sn=document.documentElement;'onmouseenter'in Sn||(Tn={mouseenter:'mouseover',mouseleave:'mouseout'})}var Un=function(){for(var e,t=Cn;e=t.sourceEvent;)t=e;return t},Mn=function(e,t){var a=e.ownerSVGElement||e;if(a.createSVGPoint){var n=a.createSVGPoint();return n.x=t.clientX,n.y=t.clientY,n=n.matrixTransform(e.getScreenCTM().inverse()),[n.x,n.y]}var i=e.getBoundingClientRect();return[t.clientX-i.left-e.clientLeft,t.clientY-i.top-e.clientTop]},jn=function(e){var t=Un();return t.changedTouches&&(t=t.changedTouches[0]),Mn(e,t)},An=function(e){return null==e?i:function(){return this.querySelector(e)}},Fn=function(e){return null==e?c:function(){return this.querySelectorAll(e)}},Dn=function(e){return Array(e.length)};l.prototype={constructor:l,appendChild:function(e){return this._parent.insertBefore(e,this._next)},insertBefore:function(e,t){return this._parent.insertBefore(e,t)},querySelector:function(e){return this._parent.querySelector(e)},querySelectorAll:function(e){return this._parent.querySelectorAll(e)}};var Ln=function(e){return function(){return e}},Hn='$',En=function(e){return e.ownerDocument&&e.ownerDocument.defaultView||// node is a Node
e.document&&e// node is a Window
||e.defaultView;// node is a Document
};j.prototype={add:function(e){var t=this._names.indexOf(e);0>t&&(this._names.push(e),this._node.setAttribute('class',this._names.join(' ')))},remove:function(e){var t=this._names.indexOf(e);0<=t&&(this._names.splice(t,1),this._node.setAttribute('class',this._names.join(' ')))},contains:function(e){return 0<=this._names.indexOf(e)}};var Pn=[null];K.prototype=function(){return new K([[document.documentElement]],Pn)}.prototype={constructor:K,select:function(e){'function'!=typeof e&&(e=An(e));for(var t=this._groups,a=t.length,r=Array(a),d=0;d<a;++d)for(var o,c,l=t[d],s=l.length,n=r[d]=Array(s),f=0;f<s;++f)(o=l[f])&&(c=e.call(o,o.__data__,f,l))&&('__data__'in o&&(c.__data__=o.__data__),n[f]=c);return new K(r,this._parents)},selectAll:function(e){'function'!=typeof e&&(e=Fn(e));for(var t=this._groups,a=t.length,r=[],d=[],o=0;o<a;++o)for(var c,l=t[o],s=l.length,n=0;n<s;++n)(c=l[n])&&(r.push(e.call(c,c.__data__,n,l)),d.push(c));return new K(r,d)},filter:function(e){'function'!=typeof e&&(e=kn(e));for(var t=this._groups,a=t.length,r=Array(a),d=0;d<a;++d)for(var o,c=t[d],l=c.length,n=r[d]=[],s=0;s<l;++s)(o=c[s])&&e.call(o,o.__data__,s,c)&&n.push(o);return new K(r,this._parents)},data:function(e,t){if(!e)return g=Array(this.size()),l=-1,this.each(function(e){g[++l]=e}),g;var a=t?f:s,n=this._parents,i=this._groups;'function'!=typeof e&&(e=Ln(e));for(var r=i.length,d=Array(r),o=Array(r),c=Array(r),l=0;l<r;++l){var p=n[l],u=i[l],b=u.length,g=e.call(p,p&&p.__data__,l,n),h=g.length,m=o[l]=Array(h),y=d[l]=Array(h),_=c[l]=Array(b);a(p,u,m,y,_,g,t);// Now connect the enter nodes to their following update node, such that
// appendChild can insert the materialized enter node before this node,
// rather than at the end of the parent node.
for(var w,v,x=0,k=0;x<h;++x)if(w=m[x]){for(x>=k&&(k=x+1);!(v=y[k])&&++k<h;);w._next=v||null}}return d=new K(d,n),d._enter=o,d._exit=c,d},enter:function(){return new K(this._enter||this._groups.map(Dn),this._parents)},exit:function(){return new K(this._exit||this._groups.map(Dn),this._parents)},merge:function(e){for(var t=this._groups,a=e._groups,r=t.length,d=a.length,o=gn(r,d),c=Array(r),l=0;l<o;++l)for(var s,f=t[l],p=a[l],u=f.length,n=c[l]=Array(u),b=0;b<u;++b)(s=f[b]||p[b])&&(n[b]=s);for(;l<r;++l)c[l]=t[l];return new K(c,this._parents)},order:function(){for(var e=this._groups,t=-1,a=e.length;++t<a;)for(var n,r=e[t],d=r.length-1,i=r[d];0<=--d;)(n=r[d])&&(i&&i!==n.nextSibling&&i.parentNode.insertBefore(n,i),i=n);return this},sort:function(e){function t(t,n){return t&&n?e(t.__data__,n.__data__):!t-!n}e||(e=p);for(var a=this._groups,r=a.length,d=Array(r),o=0;o<r;++o){for(var c,l=a[o],s=l.length,n=d[o]=Array(s),f=0;f<s;++f)(c=l[f])&&(n[f]=c);n.sort(t)}return new K(d,this._parents).order()},call:function(){var e=arguments[0];return arguments[0]=this,e.apply(null,arguments),this},nodes:function(){var e=Array(this.size()),t=-1;return this.each(function(){e[++t]=this}),e},node:function(){for(var e=this._groups,t=0,a=e.length;t<a;++t)for(var r,d=e[t],o=0,i=d.length;o<i;++o)if(r=d[o],r)return r;return null},size:function(){var e=0;return this.each(function(){++e}),e},empty:function(){return!this.node()},each:function(e){for(var t=this._groups,a=0,r=t.length;a<r;++a)for(var d,o=t[a],c=0,i=o.length;c<i;++c)(d=o[c])&&e.call(d,d.__data__,c,o);return this},attr:function(e,t){var a=yn(e);if(2>arguments.length){var n=this.node();return a.local?n.getAttributeNS(a.space,a.local):n.getAttribute(a)}return this.each((null==t?a.local?b:u:'function'==typeof t?a.local?y:m:a.local?h:g)(a,t))},style:function(e,t,a){return 1<arguments.length?this.each((null==t?_:'function'==typeof t?v:w)(e,t,null==a?'':a)):x(this.node(),e)},property:function(e,t){return 1<arguments.length?this.each((null==t?k:'function'==typeof t?S:T)(e,t)):this.node()[e]},classed:function(e,t){var a=U(e+'');if(2>arguments.length){for(var r=M(this.node()),d=-1,i=a.length;++d<i;)if(!r.contains(a[d]))return!1;return!0}return this.each(('function'==typeof t?P:t?H:Y)(a,t))},text:function(e){return arguments.length?this.each(null==e?O:('function'==typeof e?z:I)(e)):this.node().textContent},html:function(e){return arguments.length?this.each(null==e?N:('function'==typeof e?$:q)(e)):this.node().innerHTML},raise:function(){return this.each(Z)},lower:function(){return this.each(R)},append:function(e){var t='function'==typeof e?e:_n(e);return this.select(function(){return this.appendChild(t.apply(this,arguments))})},insert:function(e,t){var a='function'==typeof e?e:_n(e),n=null==t?W:'function'==typeof t?t:An(t);return this.select(function(){return this.insertBefore(a.apply(this,arguments),n.apply(this,arguments)||null)})},remove:function(){return this.each(V)},datum:function(e){return arguments.length?this.property('__data__',e):this.node().__data__},on:function(e,a,c){var l,i,t=r(e+''),s=t.length;if(2>arguments.length){var n=this.node().__on;if(n)for(var f,p=0,u=n.length;p<u;++p)for(l=0,f=n[p];l<s;++l)if((i=t[l]).type===f.type&&i.name===f.name)return f.value;return}for(n=a?o:d,null==c&&(c=!1),l=0;l<s;++l)this.each(n(t[l],a,c));return this},dispatch:function(e,t){return this.each(('function'==typeof t?G:J)(e,t))}};var On=function(e){return'string'==typeof e?new K([[document.querySelector(e)]],[document.documentElement]):new K([[e]],Pn)},In=function(e){return'string'==typeof e?new K([document.querySelectorAll(e)],[document.documentElement]):new K([null==e?[]:e],Pn)},zn=function(e,t){return e<t?-1:e>t?1:e>=t?0:NaN},Nn=function(e){return 1===e.length&&(e=Q(e)),{left:function(t,a,n,i){for(null==n&&(n=0),null==i&&(i=t.length);n<i;){var r=n+i>>>1;0>e(t[r],a)?n=r+1:i=r}return n},right:function(t,a,n,i){for(null==n&&(n=0),null==i&&(i=t.length);n<i;){var r=n+i>>>1;0<e(t[r],a)?i=r:n=r+1}return n}}}(zn),qn=Nn.right,$n=function(e,t,a){e=+e,t=+t,a=2>(i=arguments.length)?(t=e,e=0,1):3>i?1:+a;for(var r=-1,i=0|un(0,bn((t-e)/a)),n=Array(i);++r<i;)n[r]=e+r*a;return n},Rn=7.0710678118654755,Bn=3.1622776601683795,Wn=1.4142135623730951,Vn=function(e,t,a){var r,d,n,o,c=-1;if(t=+t,e=+e,a=+a,e===t&&0<a)return[e];if((r=t<e)&&(d=e,e=t,t=d),0===(o=ee(e,t,a))||!isFinite(o))return[];if(0<o)for(e=bn(e/o),t=pn(t/o),n=Array(d=bn(t-e+1));++c<d;)n[c]=(e+c)*o;else for(e=pn(e*o),t=bn(t*o),n=Array(d=bn(e-t+1));++c<d;)n[c]=(e-c)/o;return r&&n.reverse(),n},Jn='$';ae.prototype=ne.prototype={constructor:ae,has:function(e){return Jn+e in this},get:function(e){return this[Jn+e]},set:function(e,t){return this[Jn+e]=t,this},remove:function(e){var t=Jn+e;return t in this&&delete this[t]},clear:function(){for(var e in this)e[0]===Jn&&delete this[e]},keys:function(){var e=[];for(var t in this)t[0]===Jn&&e.push(t.slice(1));return e},values:function(){var e=[];for(var t in this)t[0]===Jn&&e.push(this[t]);return e},entries:function(){var e=[];for(var t in this)t[0]===Jn&&e.push({key:t.slice(1),value:this[t]});return e},size:function(){var e=0;for(var t in this)t[0]===Jn&&++e;return e},empty:function(){for(var e in this)if(e[0]===Jn)return!1;return!0},each:function(e){for(var t in this)t[0]===Jn&&e(this[t],t.slice(1),this)}};var Gn=Array.prototype,Qn=Gn.map,ei=Gn.slice,ti={name:'implicit'},ai=function(e,t,a){e.prototype=t.prototype=a,a.constructor=e},ni=0.7,ii=1/ni,ri=/^#([0-9a-f]{3})$/,di=/^#([0-9a-f]{6})$/,oi=/^rgb\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*\)$/,ci=/^rgb\(\s*([+-]?\d*\.?\d+(?:[eE][+-]?\d+)?)%\s*,\s*([+-]?\d*\.?\d+(?:[eE][+-]?\d+)?)%\s*,\s*([+-]?\d*\.?\d+(?:[eE][+-]?\d+)?)%\s*\)$/,li=/^rgba\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d*\.?\d+(?:[eE][+-]?\d+)?)\s*\)$/,si=/^rgba\(\s*([+-]?\d*\.?\d+(?:[eE][+-]?\d+)?)%\s*,\s*([+-]?\d*\.?\d+(?:[eE][+-]?\d+)?)%\s*,\s*([+-]?\d*\.?\d+(?:[eE][+-]?\d+)?)%\s*,\s*([+-]?\d*\.?\d+(?:[eE][+-]?\d+)?)\s*\)$/,fi=/^hsl\(\s*([+-]?\d*\.?\d+(?:[eE][+-]?\d+)?)\s*,\s*([+-]?\d*\.?\d+(?:[eE][+-]?\d+)?)%\s*,\s*([+-]?\d*\.?\d+(?:[eE][+-]?\d+)?)%\s*\)$/,pi=/^hsla\(\s*([+-]?\d*\.?\d+(?:[eE][+-]?\d+)?)\s*,\s*([+-]?\d*\.?\d+(?:[eE][+-]?\d+)?)%\s*,\s*([+-]?\d*\.?\d+(?:[eE][+-]?\d+)?)%\s*,\s*([+-]?\d*\.?\d+(?:[eE][+-]?\d+)?)\s*\)$/,ui={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};ai(ce,le,{displayable:function(){return this.rgb().displayable()},toString:function(){return this.rgb()+''}}),ai(be,ue,oe(ce,{brighter:function(e){return e=null==e?ii:ln(ii,e),new be(this.r*e,this.g*e,this.b*e,this.opacity)},darker:function(e){return e=null==e?ni:ln(ni,e),new be(this.r*e,this.g*e,this.b*e,this.opacity)},rgb:function(){return this},displayable:function(){return 0<=this.r&&255>=this.r&&0<=this.g&&255>=this.g&&0<=this.b&&255>=this.b&&0<=this.opacity&&1>=this.opacity},toString:function(){var e=this.opacity;return e=isNaN(e)?1:un(0,gn(1,e)),(1===e?'rgb(':'rgba(')+un(0,gn(255,on(this.r)||0))+', '+un(0,gn(255,on(this.g)||0))+', '+un(0,gn(255,on(this.b)||0))+(1===e?')':', '+e+')')}})),ai(me,function(e,t,a,n){return 1===arguments.length?he(e):new me(e,t,a,null==n?1:n)},oe(ce,{brighter:function(e){return e=null==e?ii:ln(ii,e),new me(this.h,this.s,this.l*e,this.opacity)},darker:function(e){return e=null==e?ni:ln(ni,e),new me(this.h,this.s,this.l*e,this.opacity)},rgb:function(){var e=this.h%360+360*(0>this.h),t=isNaN(e)||isNaN(this.s)?0:this.s,a=this.l,n=a+(0.5>a?a:1-a)*t,i=2*a-n;return new be(ye(240<=e?e-240:e+120,i,n),ye(e,i,n),ye(120>e?e+240:e-120,i,n),this.opacity)},displayable:function(){return(0<=this.s&&1>=this.s||isNaN(this.s))&&0<=this.l&&1>=this.l&&0<=this.opacity&&1>=this.opacity}}));var bi=dn/180,gi=180/dn,hi=18,Kn=0.95047,Xn=1,Yn=1.08883,Zn=4/29,mi=6/29,yi=3*mi*mi,_i=mi*mi*mi;ai(we,function(e,t,a,n){return 1===arguments.length?_e(e):new we(e,t,a,null==n?1:n)},oe(ce,{brighter:function(e){return new we(this.l+hi*(null==e?1:e),this.a,this.b,this.opacity)},darker:function(e){return new we(this.l-hi*(null==e?1:e),this.a,this.b,this.opacity)},rgb:function(){var e=(this.l+16)/116,t=isNaN(this.a)?e:e+this.a/500,a=isNaN(this.b)?e:e-this.b/200;return e=Xn*xe(e),t=Kn*xe(t),a=Yn*xe(a),new be(ke(3.2404542*t-1.5371385*e-0.4985314*a),// D65 -> sRGB
ke(-0.969266*t+1.8760108*e+0.041556*a),ke(0.0556434*t-0.2040259*e+1.0572252*a),this.opacity)}})),ai(Se,function(e,t,a,n){return 1===arguments.length?Ce(e):new Se(e,t,a,null==n?1:n)},oe(ce,{brighter:function(e){return new Se(this.h,this.c,this.l+hi*(null==e?1:e),this.opacity)},darker:function(e){return new Se(this.h,this.c,this.l-hi*(null==e?1:e),this.opacity)},rgb:function(){return _e(this).rgb()}}));var wi=-0.14861,A=+1.78277,B=-0.29227,C=-0.90649,D=+1.97294,E=D*C,vi=D*A,xi=A*B-C*wi;ai(je,Me,oe(ce,{brighter:function(e){return e=null==e?ii:ln(ii,e),new je(this.h,this.s,this.l*e,this.opacity)},darker:function(e){return e=null==e?ni:ln(ni,e),new je(this.h,this.s,this.l*e,this.opacity)},rgb:function(){var e=isNaN(this.h)?0:(this.h+120)*bi,t=+this.l,n=isNaN(this.s)?0:this.s*t*(1-t),a=rn(e),i=nn(e);return new be(255*(t+n*(wi*a+A*i)),255*(t+n*(B*a+C*i)),255*(t+n*(D*a)),this.opacity)}}));var ki=function(e){return function(){return e}},Ti=function e(t){function a(e,t){var a=n((e=ue(e)).r,(t=ue(t)).r),i=n(e.g,t.g),r=n(e.b,t.b),d=Le(e.opacity,t.opacity);return function(n){return e.r=a(n),e.g=i(n),e.b=r(n),e.opacity=d(n),e+''}}var n=De(t);return a.gamma=e,a}(1),Ci=function(e,t){var a,n=t?t.length:0,i=e?gn(n,e.length):0,r=Array(n),d=Array(n);for(a=0;a<i;++a)r[a]=Di(e[a],t[a]);for(;a<n;++a)d[a]=t[a];return function(e){for(a=0;a<i;++a)d[a]=r[a](e);return d}},Si=function(e,n){var i=new Date;return e=+e,n-=e,function(a){return i.setTime(e+n*a),i}},Ui=function(e,n){return e=+e,n-=e,function(a){return e+n*a}},Mi=function(e,t){var n,r={},i={};for(n in(null===e||'object'!=typeof e)&&(e={}),(null===t||'object'!=typeof t)&&(t={}),t)n in e?r[n]=Di(e[n],t[n]):i[n]=t[n];return function(e){for(n in r)i[n]=r[n](e);return i}},ji=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Ai=new RegExp(ji.source,'g'),Fi=function(e,a){var// scan index for next number in b
t,// current match in a
n,// current match in b
r,d=ji.lastIndex=Ai.lastIndex=0,// string preceding current number in b, if any
o=-1,// index in s
c=[],// string constants and placeholders
l=[];// number interpolators
// Coerce inputs to strings.
// Interpolate pairs of numbers in a & b.
for(e+='',a+='';(t=ji.exec(e))&&(n=Ai.exec(a));)(r=n.index)>d&&(r=a.slice(d,r),c[o]?c[o]+=r:c[++o]=r),(t=t[0])===(n=n[0])?c[o]?c[o]+=n:c[++o]=n:(c[++o]=null,l.push({i:o,x:Ui(t,n)})),d=Ai.lastIndex;// Add remains of b.
// Special optimization for only a single match.
// Otherwise, interpolate each of the numbers and rejoin the string.
return d<a.length&&(r=a.slice(d),c[o]?c[o]+=r:c[++o]=r),2>c.length?l[0]?Ye(l[0].x):He(a):(a=l.length,function(e){for(var t,n=0;n<a;++n)c[(t=l[n]).i]=t.x(e);return c.join('')})},Di=function(e,a){var n,i=typeof a;return null==a||'boolean'==i?ki(a):('number'==i?Ui:'string'==i?(n=le(a))?(a=n,Ti):Fi:a instanceof le?Ti:a instanceof Date?Si:Array.isArray(a)?Ci:'function'!=typeof a.valueOf&&'function'!=typeof a.toString||isNaN(a)?Mi:Ui)(e,a)},Li=function(e,n){return e=+e,n-=e,function(a){return on(e+n*a)}};Ee(function(e,t){var a=t-e;return a?Ae(e,180<a||-180>a?a-360*on(a/360):a):ki(isNaN(e)?t:e)});var Hi,Yi=Ee(Le),Ei=function(e){return function(){return e}},Pi=function(e){return+e},Oi=[0,1],Ii=function(e,t){if(0>(a=(e=t?e.toExponential(t-1):e.toExponential()).indexOf('e')))return null;// NaN, ±Infinity
var a,n=e.slice(0,a);// The string returned by toExponential either has the form \d\.\d+e[-+]\d+
// (e.g., 1.2e+3) or the form \de[-+]\d+ (e.g., 1e+3).
return[1<n.length?n[0]+n.slice(2):n,+e.slice(a+1)]},zi=function(e){return e=Ii(cn(e)),e?e[1]:NaN},Ni=function(e,a){return function(n,r){for(var d=n.length,i=[],t=0,o=e[0],c=0;0<d&&0<o&&(c+o+1>r&&(o=un(1,r-c)),i.push(n.substring(d-=o,d+o)),!((c+=o+1)>r));)o=e[t=(t+1)%e.length];return i.reverse().join(a)}},qi=function(e){return function(t){return t.replace(/[0-9]/g,function(t){return e[+t]})}},$i=function(e,t){var a=Ii(e,t);if(!a)return e+'';var n=a[0],i=a[1];return 0>i?'0.'+Array(-i).join('0')+n:n.length>i+1?n.slice(0,i+1)+'.'+n.slice(i+1):n+Array(i-n.length+2).join('0')},Zi={"":function(e,t){e=e.toPrecision(t);out:for(var a,r=e.length,n=1,i=-1;n<r;++n)switch(e[n]){case'.':i=a=n;break;case'0':0===i&&(i=n),a=n;break;case'e':break out;default:0<i&&(i=0);}return 0<i?e.slice(0,i)+e.slice(a+1):e},"%":function(e,t){return(100*e).toFixed(t)},b:function(e){return on(e).toString(2)},c:function(e){return e+''},d:function(e){return on(e).toString(10)},e:function(e,t){return e.toExponential(t)},f:function(e,t){return e.toFixed(t)},g:function(e,t){return e.toPrecision(t)},o:function(e){return on(e).toString(8)},p:function(e,t){return $i(100*e,t)},r:$i,s:function(e,t){var a=Ii(e,t);if(!a)return e+'';var r=a[0],o=a[1],c=o-(Hi=3*un(-8,gn(8,pn(o/3))))+1,i=r.length;return c===i?r:c>i?r+Array(c-i+1).join('0'):0<c?r.slice(0,c)+'.'+r.slice(c):'0.'+Array(1-c).join('0')+Ii(e,un(0,t+c-1))[0];// less than 1y!
},X:function(e){return on(e).toString(16).toUpperCase()},x:function(e){return on(e).toString(16)}},Ri=/^(?:(.)?([<>=^]))?([+\-\( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?([a-z%])?$/i;// [[fill]align][sign][symbol][0][width][,][.precision][type]
Ze.prototype=Re.prototype,Re.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?'0':'')+(null==this.width?'':un(1,0|this.width))+(this.comma?',':'')+(null==this.precision?'':'.'+un(0,0|this.precision))+this.type};var re,Bi,Wi,Vi=function(e){return e},Xi=['y','z','a','f','p','n','\xB5','m','','k','M','G','T','P','E','Z','Y'],Ji=function(e){function t(e){function t(e){var t,i,n,s=h,w=m;if('c'===g)w=y(e)+w,e='';else{e=+e;// Perform the initial formatting.
var v=0>e;// Break the formatted value into the integer “value” part that can be
// grouped, and fractional or exponential “suffix” part that is not.
if(e=y(cn(e),b),v&&0==+e&&(v=!1),s=(v?'('===l?l:'-':'-'===l||'('===l?'':l)+s,w=w+('s'===g?Xi[8+Hi/3]:'')+(v&&'('===l?')':''),_)for(t=-1,i=e.length;++t<i;)if(n=e.charCodeAt(t),48>n||57<n){w=(46===n?r+e.slice(t+1):e.slice(t))+w,e=e.slice(0,t);break}}// If the fill character is not "0", grouping is applied before padding.
u&&!f&&(e=a(e,Infinity));// Compute the padding.
var x=s.length+e.length+w.length,k=x<p?Array(p-x+1).join(o):'';// If the fill character is "0", grouping is applied after padding.
// Reconstruct the final output based on the desired alignment.
switch(u&&f&&(e=a(k+e,k.length?p-w.length:Infinity),k=''),c){case'<':e=s+e+w+k;break;case'=':e=s+k+e+w;break;case'^':e=k.slice(0,x=k.length>>1)+s+e+w+k.slice(x);break;default:e=k+s+e+w;}return d(e)}e=Ze(e);var o=e.fill,c=e.align,l=e.sign,s=e.symbol,f=e.zero,p=e.width,u=e.comma,b=e.precision,g=e.type,h='$'===s?n[0]:'#'===s&&/[boxX]/.test(g)?'0'+g.toLowerCase():'',m='$'===s?n[1]:/[%p]/.test(g)?i:'',y=Zi[g],_=!g||/[defgprs%]/.test(g);// Compute the prefix and suffix.
// For SI-prefix, the suffix is lazily computed.
// What format function should we use?
// Is this an integer type?
// Can this type generate exponential notation?
// Set the default precision if not specified,
// or clamp the specified precision to the supported range.
// For significant precision, it must be in [1, 21].
// For fixed precision, it must be in [0, 20].
return b=null==b?g?6:12:/[gprs]/.test(g)?un(1,gn(21,b)):un(0,gn(20,b)),t.toString=function(){return e+''},t}var a=e.grouping&&e.thousands?Ni(e.grouping,e.thousands):Vi,n=e.currency,r=e.decimal,d=e.numerals?qi(e.numerals):Vi,i=e.percent||'%';return{format:t,formatPrefix:function(a,n){var i=t((a=Ze(a),a.type='f',a)),r=3*un(-8,gn(8,pn(zi(n)/3))),d=ln(10,-r),o=Xi[8+r/3];return function(e){return i(d*e)+o}}}};(function(e){return re=Ji(e),Bi=re.format,Wi=re.formatPrefix,re})({decimal:'.',thousands:',',grouping:[3],currency:['$','']});var Gi=function(e){return un(0,-zi(cn(e)))},Ki=function(e,t){return un(0,3*un(-8,gn(8,pn(zi(t)/3)))-zi(cn(e)))},Qi=function(e,t){return e=cn(e),t=cn(t)-e,un(0,zi(t)-zi(e))+1},er=function(e,t,a){var n,i=e[0],r=e[e.length-1],d=te(i,r,null==t?10:t);switch(a=Ze(null==a?',f':a),a.type){case's':{var o=un(cn(i),cn(r));return null!=a.precision||isNaN(n=Ki(d,o))||(a.precision=n),Wi(a,o)}case'':case'e':case'g':case'p':case'r':{null!=a.precision||isNaN(n=Qi(d,un(cn(i),cn(r))))||(a.precision=n-('e'===a.type));break}case'f':case'%':{null!=a.precision||isNaN(n=Gi(d))||(a.precision=n-2*('%'===a.type));break}}return Bi(a)},tr=new Date,ar=new Date,nr=Ve(function(){// noop
},function(e,t){e.setTime(+e+t)},function(e,t){return t-e});// An optimized implementation for this simple case.
nr.every=function(e){return e=pn(e),isFinite(e)&&0<e?1<e?Ve(function(t){t.setTime(pn(t/e)*e)},function(t,a){t.setTime(+t+a*e)},function(t,a){return(a-t)/e}):nr:null};var ir=1e3,rr=6e4,dr=36e5,or=864e5,cr=6048e5,lr=Ve(function(e){e.setTime(pn(e/ir)*ir)},function(e,t){e.setTime(+e+t*ir)},function(e,t){return(t-e)/ir},function(e){return e.getUTCSeconds()}),sr=Ve(function(e){e.setTime(pn(e/rr)*rr)},function(e,t){e.setTime(+e+t*rr)},function(e,t){return(t-e)/rr},function(e){return e.getMinutes()}),fr=Ve(function(e){var t=e.getTimezoneOffset()*rr%dr;0>t&&(t+=dr),e.setTime(pn((+e-t)/dr)*dr+t)},function(e,t){e.setTime(+e+t*dr)},function(e,t){return(t-e)/dr},function(e){return e.getHours()}),pr=Ve(function(e){e.setHours(0,0,0,0)},function(e,t){e.setDate(e.getDate()+t)},function(e,t){return(t-e-(t.getTimezoneOffset()-e.getTimezoneOffset())*rr)/or},function(e){return e.getDate()-1}),ur=Xe(0),br=Xe(1),gr=Xe(2),hr=Xe(3),mr=Xe(4),yr=Xe(5),_r=Xe(6),wr=Ve(function(e){e.setDate(1),e.setHours(0,0,0,0)},function(e,t){e.setMonth(e.getMonth()+t)},function(e,t){return t.getMonth()-e.getMonth()+12*(t.getFullYear()-e.getFullYear())},function(e){return e.getMonth()}),vr=Ve(function(e){e.setMonth(0,1),e.setHours(0,0,0,0)},function(e,t){e.setFullYear(e.getFullYear()+t)},function(e,t){return t.getFullYear()-e.getFullYear()},function(e){return e.getFullYear()});// An optimized implementation for this simple case.
vr.every=function(e){return isFinite(e=pn(e))&&0<e?Ve(function(t){t.setFullYear(pn(t.getFullYear()/e)*e),t.setMonth(0,1),t.setHours(0,0,0,0)},function(t,a){t.setFullYear(t.getFullYear()+a*e)}):null};var xr=Ve(function(e){e.setUTCSeconds(0,0)},function(e,t){e.setTime(+e+t*rr)},function(e,t){return(t-e)/rr},function(e){return e.getUTCMinutes()}),kr=Ve(function(e){e.setUTCMinutes(0,0,0)},function(e,t){e.setTime(+e+t*dr)},function(e,t){return(t-e)/dr},function(e){return e.getUTCHours()}),Tr=Ve(function(e){e.setUTCHours(0,0,0,0)},function(e,t){e.setUTCDate(e.getUTCDate()+t)},function(e,t){return(t-e)/or},function(e){return e.getUTCDate()-1}),Cr=Je(0),Sr=Je(1),Ur=Je(2),Mr=Je(3),jr=Je(4),Ar=Je(5),Fr=Je(6),Dr=Ve(function(e){e.setUTCDate(1),e.setUTCHours(0,0,0,0)},function(e,t){e.setUTCMonth(e.getUTCMonth()+t)},function(e,t){return t.getUTCMonth()-e.getUTCMonth()+12*(t.getUTCFullYear()-e.getUTCFullYear())},function(e){return e.getUTCMonth()}),Lr=Ve(function(e){e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0)},function(e,t){e.setUTCFullYear(e.getUTCFullYear()+t)},function(e,t){return t.getUTCFullYear()-e.getUTCFullYear()},function(e){return e.getUTCFullYear()});// An optimized implementation for this simple case.
Lr.every=function(e){return isFinite(e=pn(e))&&0<e?Ve(function(t){t.setUTCFullYear(pn(t.getUTCFullYear()/e)*e),t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0)},function(t,a){t.setUTCFullYear(t.getUTCFullYear()+a*e)}):null};var Hr,Yr,Er,Pr={0:'0',"-":'',_:' '},Or=/^\s*\d+/,Ir=/^%/,zr=/[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;(function(e){return Hr=et(e),Yr=Hr.utcFormat,Er=Hr.utcParse,Hr})({dateTime:'%x, %X',date:'%-m/%-d/%Y',time:'%-I:%M:%S %p',periods:['AM','PM'],days:['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],shortDays:['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],months:['January','February','March','April','May','June','July','August','September','October','November','December'],shortMonths:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']});var Nr='%Y-%m-%dT%H:%M:%S.%LZ',qr=Date.prototype.toISOString?function(e){return e.toISOString()}:Yr(Nr),$r=+new Date('2000-01-01T00:00:00.000Z')?function(e){var t=new Date(e);return isNaN(t)?null:t}:Er(Nr),Zr=function(e){return e.match(/.{6}/g).map(function(e){return'#'+e})};Zr('1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf'),Zr('393b795254a36b6ecf9c9ede6379398ca252b5cf6bcedb9c8c6d31bd9e39e7ba52e7cb94843c39ad494ad6616be7969c7b4173a55194ce6dbdde9ed6'),Zr('3182bd6baed69ecae1c6dbefe6550dfd8d3cfdae6bfdd0a231a35474c476a1d99bc7e9c0756bb19e9ac8bcbddcdadaeb636363969696bdbdbdd9d9d9'),Zr('1f77b4aec7e8ff7f0effbb782ca02c98df8ad62728ff98969467bdc5b0d58c564bc49c94e377c2f7b6d27f7f7fc7c7c7bcbd22dbdb8d17becf9edae5'),Yi(Me(300,0.5,0),Me(-240,0.5,1));var Rr=Yi(Me(-100,0.75,0.35),Me(80,1.5,0.8)),Br=Yi(Me(260,0.75,0.35),Me(80,1.5,0.8)),Wr=Me();Vt(Zr('44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725'));var Vr=Vt(Zr('00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf')),Xr=Vt(Zr('00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4')),Jr=Vt(Zr('0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921')),Gr='object'==typeof global&&global&&global.Object===Object&&global,Kr='object'==typeof self&&self&&self.Object===Object&&self,Qr=Gr||Kr||Function('return this')(),ed=Qr.Symbol,td=Object.prototype,ad=td.hasOwnProperty,nd=td.toString,id=ed?ed.toStringTag:void 0,rd=Object.prototype,dd=rd.toString,od='[object Null]',cd='[object Undefined]',ld=ed?ed.toStringTag:void 0,sd='[object AsyncFunction]',fd='[object Function]',pd='[object GeneratorFunction]',ud='[object Proxy]',bd=Qr['__core-js_shared__'],gd=function(){var e=/[^.]+$/.exec(bd&&bd.keys&&bd.keys.IE_PROTO||'');return e?'Symbol(src)_1.'+e:''}(),hd=Function.prototype,md=hd.toString,yd=/[\\^$.*+?()[\]{}|]/g,_d=/^\[object .+?Constructor\]$/,wd=Function.prototype,vd=Object.prototype,xd=wd.toString,kd=vd.hasOwnProperty,Td=RegExp('^'+xd.call(kd).replace(yd,'\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,'$1.*?')+'$'),Cd=ra(Object,'create'),Sd=Object.prototype,Ud=Sd.hasOwnProperty,Md=Object.prototype,jd=Md.hasOwnProperty;/** Detect free variable `self`. *//** Used as a reference to the global object. *//** Built-in value references. *//** Used for built-in method references. *//** Used to check objects for own properties. *//**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 *//** Built-in value references. *//**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 *//** Built-in value references. *//** Used to detect methods masquerading as native. *//** Used to resolve the decompiled source of functions. *//** Used to detect host constructors (Safari). *//** Used for built-in method references. *//** Used to resolve the decompiled source of functions. *//** Used to check objects for own properties. *//** Used to detect if a method is native. *//** Used for built-in method references. *//** Used to check objects for own properties. *//** Used to check objects for own properties. */da.prototype.clear=function(){this.__data__=Cd?Cd(null):{},this.size=0},da.prototype['delete']=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},da.prototype.get=function(e){var t=this.__data__;if(Cd){var a=t[e];return a==='__lodash_hash_undefined__'?void 0:a}return Ud.call(t,e)?t[e]:void 0},da.prototype.has=function(e){var t=this.__data__;return Cd?t[e]!==void 0:jd.call(t,e)},da.prototype.set=function(e,t){var a=this.__data__;return this.size+=this.has(e)?0:1,a[e]=Cd&&void 0===t?'__lodash_hash_undefined__':t,this};var Ad=Array.prototype,Fd=Ad.splice;/** Built-in value references. */la.prototype.clear=function(){this.__data__=[],this.size=0},la.prototype['delete']=function(e){var t=this.__data__,a=ca(t,e);if(0>a)return!1;var n=t.length-1;return a==n?t.pop():Fd.call(t,a,1),--this.size,!0},la.prototype.get=function(e){var t=this.__data__,a=ca(t,e);return 0>a?void 0:t[a][1]},la.prototype.has=function(e){return-1<ca(this.__data__,e)},la.prototype.set=function(e,t){var a=this.__data__,n=ca(a,e);return 0>n?(++this.size,a.push([e,t])):a[n][1]=t,this};/* Built-in method references that are verified to be native. */var Dd=ra(Qr,'Map');pa.prototype.clear=function(){this.size=0,this.__data__={hash:new da,map:new(Dd||la),string:new da}},pa.prototype['delete']=function(e){var t=fa(this,e)['delete'](e);return this.size-=t?1:0,t},pa.prototype.get=function(e){return fa(this,e).get(e)},pa.prototype.has=function(e){return fa(this,e).has(e)},pa.prototype.set=function(e,t){var a=fa(this,e),n=a.size;return a.set(e,t),this.size+=a.size==n?0:1,this};/** Used to stand-in for `undefined` hash values. */ua.prototype.add=ua.prototype.push=function(e){return this.__data__.set(e,'__lodash_hash_undefined__'),this},ua.prototype.has=function(e){return this.__data__.has(e)};var Ld=gn,Hd=un,Yd=function(){try{var e=ra(Object,'defineProperty');return e({},'',{}),e}catch(t){}}(),Ed=Yd?function(e,t){return Yd(e,'toString',{configurable:!0,enumerable:!1,value:Sa(t),writable:!0})}:ka,Pd=Date.now,Od=function(e){var t=0,a=0;return function(){var n=Pd(),i=16-(n-a);if(a=n,!(0<i))t=0;else if(++t>=800)return arguments[0];return e.apply(void 0,arguments)}}(Ed),Id=9007199254740991,zd=function(e,t){return Od(Ca(e,t,ka),e+'')}(function(e){var t=Xt(e,Fa);return t.length&&t[0]===e[0]?xa(t):[]}),Nd=function e(t,a,n){if(!(0>=a.length)){var i,r=!0,d=!1;try{for(var o,c,l=t[Symbol.iterator]();!(r=(o=l.next()).done);r=!0)if(c=o.value,c.name===a[0])return void e(c.children,a.slice(1),c)}catch(e){d=!0,i=e}finally{try{!r&&l.return&&l.return()}finally{if(d)throw i}}var s={name:a[0],selected:!1,parent:n,children:[]};t.push(s),e(s.children,a.slice(1),s)}},qd=function(){function e(e){this.value=e}function t(t){function a(i,r){try{var d=t[i](r),o=d.value;o instanceof e?Promise.resolve(o.value).then(function(e){a('next',e)},function(e){a('throw',e)}):n(d.done?'return':'normal',d.value)}catch(e){n('throw',e)}}function n(e,t){'return'===e?i.resolve({value:t,done:!0}):'throw'===e?i.reject(t):i.resolve({value:t,done:!1});i=i.next,i?a(i.key,i.arg):r=null}var i,r;this._invoke=function(e,t){return new Promise(function(n,d){var o={key:e,arg:t,resolve:n,reject:d,next:null};r?r=r.next=o:(i=r=o,a(e,t))})},'function'!=typeof t.return&&(this.return=void 0)}return'function'==typeof Symbol&&Symbol.asyncIterator&&(t.prototype[Symbol.asyncIterator]=function(){return this}),t.prototype.next=function(e){return this._invoke('next',e)},t.prototype.throw=function(e){return this._invoke('throw',e)},t.prototype.return=function(e){return this._invoke('return',e)},{wrap:function(e){return function(){return new t(e.apply(this,arguments))}},await:function(t){return new e(t)}}}(),$d=function(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')},Zd=function(){function e(e,t){for(var a,n=0;n<t.length;n++)a=t[n],a.enumerable=a.enumerable||!1,a.configurable=!0,'value'in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),Rd=function(e,t){if('function'!=typeof t&&null!==t)throw new TypeError('Super expression must either be null or a function, not '+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},Bd=function(e,t){if(!e)throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return t&&('object'==typeof t||'function'==typeof t)?t:e},Wd=function(){function e(e,t){var a,n=[],i=!0,r=!1;try{for(var d,o=e[Symbol.iterator]();!(i=(d=o.next()).done)&&(n.push(d.value),!(t&&n.length===t));i=!0);}catch(e){r=!0,a=e}finally{try{!i&&o['return']&&o['return']()}finally{if(r)throw a}}return n}return function(t,a){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,a);throw new TypeError('Invalid attempt to destructure non-iterable instance')}}(),Vd=[],Xd={};/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 *//** Used to detect hot functions by number of calls within a span of milliseconds. *//* Built-in method references for those with the same name as other `lodash` methods. */(function(e,t){if('undefined'==typeof document)return t;e=e||'';var a=document.head||document.getElementsByTagName('head')[0],n=document.createElement('style');return n.type='text/css',a.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e)),t})('@charset "UTF-8";interaction-viewer{position:relative}interaction-viewer text{font-family:Open Sans,sans-serif;fill:#000;opacity:.75;font-size:12px}interaction-viewer .active text{opacity:1}interaction-viewer .active-row{stroke:#4a90e2}interaction-viewer .interaction-tooltip{z-index:2;position:absolute;background:#fff;padding:.5em 1em;border:1px solid #979797;box-shadow:2px 2px 2px #333;transition:all .25s;min-width:36em}interaction-viewer .interaction-tooltip .close-interaction-tooltip{cursor:pointer;float:right;margin-bottom:.8em}interaction-viewer .interaction-tooltip .tooltip-content{clear:both}interaction-viewer .interaction-filter-container{text-align:left}interaction-viewer .interaction-filter-container #filter-display .filter-selected{margin:.2em .5em;padding:.3em .1em;background-color:#f2f2f2;border:1px solid #e8e8e8;cursor:pointer;white-space:nowrap;display:inline-block}interaction-viewer .interaction-filter-container #filter-display .filter-selected:after{content:"\u2716";margin:0 .3em}interaction-viewer .interaction-filter-container .interaction-filter{vertical-align:top;margin-bottom:.5em;display:inline-block}interaction-viewer .interaction-filter-container .interaction-filter ul{border:1px solid #e8e8e8;max-height:15em;overflow-y:auto;list-style:none;padding:0;margin:0}interaction-viewer .interaction-filter-container .interaction-filter ul li{cursor:pointer;padding:.5em;border-bottom:1px solid #e8e8e8}interaction-viewer .interaction-filter-container .interaction-filter ul li:hover{background-color:#f2f2f2}interaction-viewer .interaction-filter-container .interaction-filter ul li.active{font-weight:700}interaction-viewer .interaction-viewer .cell{fill:#4a90e2}interaction-viewer .interaction-viewer .cell.active-cell{r:.8em;transition:all .5s}interaction-viewer .interaction-viewer .hidden-side{fill:#e8e8e8}interaction-viewer .interaction-viewer .main-accession{font-weight:700}interaction-viewer .interaction-viewer .text-highlight{fill:#fff;opacity:0;transition:all .5s}interaction-viewer .interaction-viewer-table tr:nth-child(2n){background:#f2f2f2}interaction-viewer .interaction-viewer-table td,interaction-viewer .interaction-viewer-table th{padding:.5em;text-align:center}interaction-viewer .interaction-viewer-table th{background-color:#e8e8e8;white-space:nowrap}interaction-viewer .interaction-viewer-table .interaction-viewer-table_row-header{font-weight:700;text-align:right}interaction-viewer .button{display:inline-block;vertical-align:middle;margin:0 1em 0 0;padding:.85em 1em;-webkit-appearance:none;border:1px solid transparent;border-radius:0;transition:background-color .25s ease-out,color .25s ease-out;line-height:1;text-align:center;cursor:pointer;background-color:#f2f2f2!important;color:#3a343a;border:1px solid #e8e8e8}interaction-viewer .iv_reset{display:block}interaction-viewer .button:hover{color:#3a343a}interaction-viewer .button.dropdown:after{display:block;width:0;height:0;border:.4em inset;content:"";border-bottom-width:0;border-top-style:solid;border-color:#3a343a transparent transparent;position:relative;top:.4em;display:inline-block;float:right;margin-left:1em}interaction-viewer .dropdown-pane{position:absolute;z-index:1;display:block;width:300px;padding:1rem;visibility:hidden;border:1px solid #cacaca;border-radius:0;background-color:#fefefe}interaction-viewer .tree-list{text-align:left;list-style:none}interaction-viewer .tree-list li{margin:.5em 0}.loader,.loader:after,.loader:before{background:#cbcbcb;-webkit-animation:a 1s infinite ease-in-out;animation:a 1s infinite ease-in-out;width:1em;height:4em}.loader{color:#cbcbcb;text-indent:-9999em;margin:88px auto;position:relative;font-size:11px;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-animation-delay:-.16s;animation-delay:-.16s}.loader:after,.loader:before{position:absolute;top:0;content:""}.loader:before{left:-1.5em;-webkit-animation-delay:-.32s;animation-delay:-.32s}.loader:after{left:1.5em}@-webkit-keyframes a{0%,80%,to{box-shadow:0 0;height:4em}40%{box-shadow:0 -2em;height:5em}}@keyframes a{0%,80%,to{box-shadow:0 0;height:4em}40%{box-shadow:0 -2em;height:5em}}',void 0);var Jd,Gd=[],Kd=function(){var e=function(e){function t(){$d(this,t);var e=Bd(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e._accession=e.getAttribute('accession'),e}return Rd(t,e),Zd(t,[{key:'connectedCallback',value:function(){this._render()}},{key:'attributeChangedCallback',value:function(e,t,a){'accession'===e&&null!=t&&t!=a&&(this._accession=a,this._render())}},{key:'_render',value:function(){Ia({el:this,accession:this._accession})}},{key:'accession',set:function(e){this._accession=e},get:function(){return this._accession}}],[{key:'observedAttributes',get:function(){return['accession']}}]),t}(HTMLElement);customElements.define('interaction-viewer',e)};// Conditional loading of polyfill
window.customElements?Kd():document.addEventListener('WebComponentsReady',function(){console.log('Loaded with polyfill.'),Kd()})})();
//# sourceMappingURL=interaction-viewer.js.map
