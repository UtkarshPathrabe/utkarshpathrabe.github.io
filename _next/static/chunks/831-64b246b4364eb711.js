(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[831],{7942:function(e,t,r){"use strict";var n=r(5696);t.default=void 0;var o,a=(o=r(7294))&&o.__esModule?o:{default:o},c=r(4957),u=r(9898),i=r(639);var s={};function l(e,t,r,n){if(e&&c.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;s[t+"%"+r+(o?"%"+o:"")]=!0}}var f=function(e){var t,r=!1!==e.prefetch,o=u.useRouter(),f=a.default.useMemo((function(){var t=c.resolveHref(o,e.href,!0),r=n(t,2),a=r[0],u=r[1];return{href:a,as:e.as?c.resolveHref(o,e.as):u||a}}),[o,e.href,e.as]),p=f.href,d=f.as,v=e.children,h=e.replace,y=e.shallow,m=e.scroll,g=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var b=(t=a.default.Children.only(v))&&"object"===typeof t&&t.ref,O=i.useIntersection({rootMargin:"200px"}),w=n(O,2),M=w[0],j=w[1],C=a.default.useCallback((function(e){M(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,M]);a.default.useEffect((function(){var e=j&&r&&c.isLocalURL(p),t="undefined"!==typeof g?g:o&&o.locale,n=s[p+"%"+d+(t?"%"+t:"")];e&&!n&&l(o,p,d,{locale:t})}),[d,p,j,g,r,o]);var P={ref:C,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,a,u,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(r))&&(e.preventDefault(),null==u&&n.indexOf("#")>=0&&(u=!1),t[o?"replace":"push"](r,n,{shallow:a,locale:i,scroll:u}))}(e,o,p,d,h,y,m,g)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),c.isLocalURL(p)&&l(o,p,d,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var _="undefined"!==typeof g?g:o&&o.locale,k=o&&o.isLocaleDomain&&c.getDomainLocale(d,_,o&&o.locales,o&&o.domainLocales);P.href=k||c.addBasePath(c.addLocale(d,_,o&&o.defaultLocale))}return a.default.cloneElement(t,P)};t.default=f},639:function(e,t,r){"use strict";var n=r(5696);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,i=e.disabled||!c,s=o.useRef(),l=o.useState(!1),f=n(l,2),p=f[0],d=f[1],v=o.useState(t?t.current:null),h=n(v,2),y=h[0],m=h[1],g=o.useCallback((function(e){s.current&&(s.current(),s.current=void 0),i||p||e&&e.tagName&&(s.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=u.get(t);if(r)return r;var n=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return u.set(t,r={id:t,observer:o,elements:n}),r}(r),o=n.id,a=n.observer,c=n.elements;return c.set(e,t),a.observe(e),function(){c.delete(e),a.unobserve(e),0===c.size&&(a.disconnect(),u.delete(o))}}(e,(function(e){return e&&d(e)}),{root:y,rootMargin:r}))}),[i,y,r,p]);return o.useEffect((function(){if(!c&&!p){var e=a.requestIdleCallback((function(){return d(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[p]),o.useEffect((function(){t&&m(t.current)}),[t]),[g,p]};var o=r(7294),a=r(6286),c="undefined"!==typeof IntersectionObserver;var u=new Map},8e3:function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.AmpStateContext=void 0;var o=((n=r(7294))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=o},5646:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isInAmpMode=c,t.useAmp=function(){return c(o.default.useContext(a.AmpStateContext))};var n,o=(n=r(7294))&&n.__esModule?n:{default:n},a=r(8e3);function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,n=e.hybrid,o=void 0!==n&&n,a=e.hasQuery,c=void 0!==a&&a;return r||o&&c}},2717:function(e,t,r){"use strict";var n=r(930);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=f,t.default=void 0;var a,c=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(7294)),u=(a=r(1585))&&a.__esModule?a:{default:a},i=r(8e3),s=r(5850),l=r(5646);function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[c.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(c.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===c.default.Fragment?e.concat(c.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function v(e,t){return e.reduce((function(e,t){var r=c.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(p,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,n={};return function(o){var a=!0,c=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){c=!0;var u=o.key.slice(o.key.indexOf("$")+1);e.has(u)?a=!1:e.add(u)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var i=0,s=d.length;i<s;i++){var l=d[i];if(o.props.hasOwnProperty(l))if("charSet"===l)r.has(l)?a=!1:r.add(l);else{var f=o.props[l],p=n[l]||new Set;"name"===l&&c||!p.has(f)?(p.add(f),n[l]=p):a=!1}}}return a}}()).reverse().map((function(e,r){var a=e.key||r;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var u=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.props||{});return u["data-href"]=u.href,u.href=void 0,u["data-optimized-fonts"]=!0,c.default.cloneElement(e,u)}return c.default.cloneElement(e,{key:a})}))}var h=function(e){var t=e.children,r=c.useContext(i.AmpStateContext),n=c.useContext(s.HeadManagerContext);return c.default.createElement(u.default,{reduceComponentsToState:v,headManager:n,inAmpMode:l.isInAmpMode(r)},t)};t.default=h},1585:function(e,t,r){"use strict";var n=r(7980),o=r(3227),a=r(8361),c=(r(2191),r(5971)),u=r(2715),i=r(1193);function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=i(e);if(t){var o=i(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return u(this,r)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(7294));var f=function(e){c(r,e);var t=s(r);function r(e){var a;return o(this,r),(a=t.call(this,e)).emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(n(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(r,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),r}(l.Component);t.default=f},9008:function(e,t,r){e.exports=r(2717)},1664:function(e,t,r){e.exports=r(7942)},8357:function(e,t,r){"use strict";r.d(t,{w_:function(){return s}});var n=r(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=n.createContext&&n.createContext(o),c=function(){return(c=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},u=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};function i(e){return e&&e.map((function(e,t){return n.createElement(e.tag,c({key:t},e.attr),i(e.child))}))}function s(e){return function(t){return n.createElement(l,c({attr:c({},e.attr)},t),i(e.child))}}function l(e){var t=function(t){var r,o=e.attr,a=e.size,i=e.title,s=u(e,["attr","size","title"]),l=a||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,s,{className:r,style:c(c({color:e.color||t.color},t.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),i&&n.createElement("title",null,i),e.children)};return void 0!==a?n.createElement(a.Consumer,null,(function(e){return t(e)})):t(o)}}}]);