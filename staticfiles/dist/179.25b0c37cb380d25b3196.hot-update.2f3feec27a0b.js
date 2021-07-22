self.webpackHotUpdatecompare_spotify(179,{5268:(e,t,n)=>{"use strict";var r=n(7294),o=n(3935),s=n(9669),a=n.n(s),l=n(4184),c=n.n(l),i=n(5893);const u=r.createContext({prefixes:{}}),{Consumer:f,Provider:d}=u;function p(e,t){const{prefixes:n}=(0,r.useContext)(u);return e||n[t]||t}const m=function(...e){return e.filter((e=>null!=e)).reduce(((e,t)=>{if("function"!=typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(...n){e.apply(this,n),t.apply(this,n)}}),null)};function y(e){return!e||"#"===e.trim()}const h=r.forwardRef((({as:e="a",disabled:t,onKeyDown:n,...r},o)=>{const s=e=>{const{href:n,onClick:o}=r;(t||y(n))&&e.preventDefault(),t?e.stopPropagation():null==o||o(e)};return y(r.href)&&(r.role=r.role||"button",r.href=r.href||"#"),t&&(r.tabIndex=-1,r["aria-disabled"]=!0),(0,i.jsx)(e,{ref:o,...r,onClick:s,onKeyDown:m((e=>{" "===e.key&&(e.preventDefault(),s(e))}),n)})}));h.displayName="SafeAnchor";const v=h,b=r.forwardRef((({bsPrefix:e,variant:t,size:n,active:r,className:o,type:s,as:a,...l},u)=>{const f=p(e,"btn"),d=c()(o,f,r&&"active",t&&`${f}-${t}`,n&&`${f}-${n}`);if(l.href)return(0,i.jsx)(v,{...l,as:a,ref:u,className:c()(d,l.disabled&&"disabled")});s||a||(s="button");const m=a||"button";return(0,i.jsx)(m,{...l,ref:u,type:s,className:d})}));b.displayName="Button",b.defaultProps={variant:"primary",active:!1,disabled:!1};const x=b,$=r.forwardRef((({bsPrefix:e,fluid:t,as:n="div",className:r,...o},s)=>{const a=p(e,"container"),l="string"==typeof t?`-${t}`:"-fluid";return(0,i.jsx)(n,{ref:s,...o,className:c()(r,t?`${a}${l}`:a)})}));$.displayName="Container",$.defaultProps={fluid:!1};const g=$,w=["xxl","xl","lg","md","sm","xs"],E=r.forwardRef((({bsPrefix:e,className:t,as:n="div",...r},o)=>{const s=p(e,"row"),a=`${s}-cols`,l=[];return w.forEach((e=>{const t=r[e];let n;delete r[e],null!=t&&"object"==typeof t?({cols:n}=t):n=t;const o="xs"!==e?`-${e}`:"";null!=n&&l.push(`${a}${o}-${n}`)})),(0,i.jsx)(n,{ref:o,...r,className:c()(t,s,...l)})}));E.displayName="Row";const N=E,j=["xxl","xl","lg","md","sm","xs"],C=r.forwardRef((({bsPrefix:e,className:t,as:n="div",...r},o)=>{const s=p(e,"col"),a=[],l=[];return j.forEach((e=>{const t=r[e];let n,o,c;delete r[e],"object"==typeof t&&null!=t?({span:n=!0,offset:o,order:c}=t):n=t;const i="xs"!==e?`-${e}`:"";n&&a.push(!0===n?`${s}${i}`:`${s}${i}-${n}`),null!=c&&l.push(`order${i}-${c}`),null!=o&&l.push(`offset${i}-${o}`)})),a.length||a.push(s),(0,i.jsx)(n,{...r,ref:o,className:c()(t,...a,...l)})}));C.displayName="Col";const A=C;function P(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var S=0;const I=function(){(0,r.useEffect)((function(){}));var e,t,n=(e=(0,r.useState)(""),t=2,function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,s=[],a=!0,l=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(s.push(r.value),!t||s.length!==t);a=!0);}catch(e){l=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(l)throw o}}return s}}(e,t)||function(e,t){if(e){if("string"==typeof e)return P(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?P(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],s=n[1];return r.createElement(g,null,r.createElement("div",null,r.createElement(N,null,r.createElement(A,null,r.createElement(x,{onClick:function(){a().get("/app/",{params:{count:S}}).then((function(e){console.log(e.data),s(e.data.text)})).catch((function(e){e.response?(console.log(e.response.data),console.log(e.response.status),console.log(e.response.headers)):e.request?console.log(e.request):console.log("Error",e.message)})),S++},variant:"primary"},"button")),r.createElement(A,null,r.createElement("p",{class:"text-center"},o)))))};n(5373),n(9079),o.render(r.createElement(I,null),document.getElementById("react-app"))},5373:(e,t,n)=>{"use strict";var r=n(4783)(e.id,{locals:!1});e.hot.dispose(r),e.hot.accept(void 0,r)},9079:(e,t,n)=>{"use strict";var r=n(4783)(e.id,{locals:!1});e.hot.dispose(r),e.hot.accept(void 0,r)}},(function(e){"use strict";e.h=()=>"e141853f22934d564be6"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb21wYXJlLXNwb3RpZnkvLi9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2VzbS9UaGVtZVByb3ZpZGVyLmpzIiwid2VicGFjazovL2NvbXBhcmUtc3BvdGlmeS8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvZXNtL2NyZWF0ZUNoYWluZWRGdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly9jb21wYXJlLXNwb3RpZnkvLi9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2VzbS9TYWZlQW5jaG9yLmpzIiwid2VicGFjazovL2NvbXBhcmUtc3BvdGlmeS8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvZXNtL0J1dHRvbi5qcyIsIndlYnBhY2s6Ly9jb21wYXJlLXNwb3RpZnkvLi9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2VzbS9Db250YWluZXIuanMiLCJ3ZWJwYWNrOi8vY29tcGFyZS1zcG90aWZ5Ly4vbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9lc20vUm93LmpzIiwid2VicGFjazovL2NvbXBhcmUtc3BvdGlmeS8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvZXNtL0NvbC5qcyIsIndlYnBhY2s6Ly9jb21wYXJlLXNwb3RpZnkvLi9hc3NldHMvQXBwLmpzIiwid2VicGFjazovL2NvbXBhcmUtc3BvdGlmeS8uL2Fzc2V0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9jb21wYXJlLXNwb3RpZnkvLi9hc3NldHMvaW5kZXguY3NzIiwid2VicGFjazovL2NvbXBhcmUtc3BvdGlmeS8uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3M/ZTNkNyIsIndlYnBhY2s6Ly9jb21wYXJlLXNwb3RpZnkvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sIm5hbWVzIjpbIlRoZW1lQ29udGV4dCIsInByZWZpeGVzIiwiQ29uc3VtZXIiLCJQcm92aWRlciIsInVzZUJvb3RzdHJhcFByZWZpeCIsInByZWZpeCIsImRlZmF1bHRQcmVmaXgiLCJ1c2VDb250ZXh0IiwiZnVuY3MiLCJmaWx0ZXIiLCJmIiwicmVkdWNlIiwiYWNjIiwiRXJyb3IiLCJhcmdzIiwiYXBwbHkiLCJ0aGlzIiwiaXNUcml2aWFsSHJlZiIsImhyZWYiLCJ0cmltIiwiU2FmZUFuY2hvciIsImFzIiwiQ29tcG9uZW50IiwiZGlzYWJsZWQiLCJvbktleURvd24iLCJwcm9wcyIsInJlZiIsImhhbmRsZUNsaWNrIiwiZXZlbnQiLCJvbkNsaWNrIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJyb2xlIiwidGFiSW5kZXgiLCJrZXkiLCJkaXNwbGF5TmFtZSIsIkJ1dHRvbiIsImJzUHJlZml4IiwidmFyaWFudCIsInNpemUiLCJhY3RpdmUiLCJjbGFzc05hbWUiLCJ0eXBlIiwiY2xhc3NlcyIsImRlZmF1bHRQcm9wcyIsIkNvbnRhaW5lciIsImZsdWlkIiwic3VmZml4IiwiREVWSUNFX1NJWkVTIiwiUm93IiwiZGVjb3JhdGVkQnNQcmVmaXgiLCJzaXplUHJlZml4IiwiZm9yRWFjaCIsImJya1BvaW50IiwicHJvcFZhbHVlIiwiY29scyIsImluZml4IiwicHVzaCIsIkNvbCIsInNwYW5zIiwic3BhbiIsIm9mZnNldCIsIm9yZGVyIiwibGVuZ3RoIiwiY291bnQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInRleHQiLCJzZXRUZXh0IiwiYXhpb3MiLCJwYXJhbXMiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImVycm9yIiwic3RhdHVzIiwiaGVhZGVycyIsInJlcXVlc3QiLCJtZXNzYWdlIiwiY2xhc3MiLCJSZWFjdERPTSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjc3NSZWxvYWQiLCJtb2R1bGUiLCJpZCIsImhvdCIsImRpc3Bvc2UiLCJhY2NlcHQiLCJ1bmRlZmluZWQiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJtYXBwaW5ncyI6IjhJ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bkNPLEVBQW9CQyxFQUFJLElBQU0iLCJmaWxlIjoiMTc5LjI1YjBjMzdjYjM4MGQyNWIzMTk2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmNvbnN0IFRoZW1lQ29udGV4dCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVDb250ZXh0KHtcbiAgcHJlZml4ZXM6IHt9XG59KTtcbmNvbnN0IHtcbiAgQ29uc3VtZXIsXG4gIFByb3ZpZGVyXG59ID0gVGhlbWVDb250ZXh0O1xuXG5mdW5jdGlvbiBUaGVtZVByb3ZpZGVyKHtcbiAgcHJlZml4ZXMgPSB7fSxcbiAgZGlyLFxuICBjaGlsZHJlblxufSkge1xuICBjb25zdCBjb250ZXh0VmFsdWUgPSB1c2VNZW1vKCgpID0+ICh7XG4gICAgcHJlZml4ZXM6IHsgLi4ucHJlZml4ZXNcbiAgICB9LFxuICAgIGRpclxuICB9KSwgW3ByZWZpeGVzLCBkaXJdKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9fanN4KFByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IGNvbnRleHRWYWx1ZSxcbiAgICBjaGlsZHJlbjogY2hpbGRyZW5cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VCb290c3RyYXBQcmVmaXgocHJlZml4LCBkZWZhdWx0UHJlZml4KSB7XG4gIGNvbnN0IHtcbiAgICBwcmVmaXhlc1xuICB9ID0gdXNlQ29udGV4dChUaGVtZUNvbnRleHQpO1xuICByZXR1cm4gcHJlZml4IHx8IHByZWZpeGVzW2RlZmF1bHRQcmVmaXhdIHx8IGRlZmF1bHRQcmVmaXg7XG59XG5leHBvcnQgZnVuY3Rpb24gdXNlSXNSVEwoKSB7XG4gIGNvbnN0IHtcbiAgICBkaXJcbiAgfSA9IHVzZUNvbnRleHQoVGhlbWVDb250ZXh0KTtcbiAgcmV0dXJuIGRpciA9PT0gJ3J0bCc7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJvb3RzdHJhcENvbXBvbmVudChDb21wb25lbnQsIG9wdHMpIHtcbiAgaWYgKHR5cGVvZiBvcHRzID09PSAnc3RyaW5nJykgb3B0cyA9IHtcbiAgICBwcmVmaXg6IG9wdHNcbiAgfTtcbiAgY29uc3QgaXNDbGFzc3kgPSBDb21wb25lbnQucHJvdG90eXBlICYmIENvbXBvbmVudC5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudDsgLy8gSWYgaXQncyBhIGZ1bmN0aW9uYWwgY29tcG9uZW50IG1ha2Ugc3VyZSB3ZSBkb24ndCBicmVhayBpdCB3aXRoIGEgcmVmXG5cbiAgY29uc3Qge1xuICAgIHByZWZpeCxcbiAgICBmb3J3YXJkUmVmQXMgPSBpc0NsYXNzeSA/ICdyZWYnIDogJ2lubmVyUmVmJ1xuICB9ID0gb3B0cztcbiAgY29uc3QgV3JhcHBlZCA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKCh7IC4uLnByb3BzXG4gIH0sIHJlZikgPT4ge1xuICAgIHByb3BzW2ZvcndhcmRSZWZBc10gPSByZWY7XG4gICAgY29uc3QgYnNQcmVmaXggPSB1c2VCb290c3RyYXBQcmVmaXgocHJvcHMuYnNQcmVmaXgsIHByZWZpeCk7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9fanN4KENvbXBvbmVudCwgeyAuLi5wcm9wcyxcbiAgICAgIGJzUHJlZml4OiBic1ByZWZpeFxuICAgIH0pO1xuICB9KTtcbiAgV3JhcHBlZC5kaXNwbGF5TmFtZSA9IGBCb290c3RyYXAoJHtDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWV9KWA7XG4gIHJldHVybiBXcmFwcGVkO1xufVxuXG5leHBvcnQgeyBjcmVhdGVCb290c3RyYXBDb21wb25lbnQsIENvbnN1bWVyIGFzIFRoZW1lQ29uc3VtZXIgfTtcbmV4cG9ydCBkZWZhdWx0IFRoZW1lUHJvdmlkZXI7IiwiLyoqXG4gKiBTYWZlIGNoYWluZWQgZnVuY3Rpb25cbiAqXG4gKiBXaWxsIG9ubHkgY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIGlmIG5lZWRlZCxcbiAqIG90aGVyd2lzZSB3aWxsIHBhc3MgYmFjayBleGlzdGluZyBmdW5jdGlvbnMgb3IgbnVsbC5cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmdW5jdGlvbnMgdG8gY2hhaW5cbiAqIEByZXR1cm5zIHtmdW5jdGlvbnxudWxsfVxuICovXG5mdW5jdGlvbiBjcmVhdGVDaGFpbmVkRnVuY3Rpb24oLi4uZnVuY3MpIHtcbiAgcmV0dXJuIGZ1bmNzLmZpbHRlcihmID0+IGYgIT0gbnVsbCkucmVkdWNlKChhY2MsIGYpID0+IHtcbiAgICBpZiAodHlwZW9mIGYgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBBcmd1bWVudCBUeXBlLCBtdXN0IG9ubHkgcHJvdmlkZSBmdW5jdGlvbnMsIHVuZGVmaW5lZCwgb3IgbnVsbC4nKTtcbiAgICB9XG5cbiAgICBpZiAoYWNjID09PSBudWxsKSByZXR1cm4gZjtcbiAgICByZXR1cm4gZnVuY3Rpb24gY2hhaW5lZEZ1bmN0aW9uKC4uLmFyZ3MpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIGFjYy5hcHBseSh0aGlzLCBhcmdzKTsgLy8gQHRzLWlnbm9yZVxuXG4gICAgICBmLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH07XG4gIH0sIG51bGwpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDaGFpbmVkRnVuY3Rpb247IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNyZWF0ZUNoYWluZWRGdW5jdGlvbiBmcm9tICcuL2NyZWF0ZUNoYWluZWRGdW5jdGlvbic7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuXG5mdW5jdGlvbiBpc1RyaXZpYWxIcmVmKGhyZWYpIHtcbiAgcmV0dXJuICFocmVmIHx8IGhyZWYudHJpbSgpID09PSAnIyc7XG59XG4vKipcbiAqIFRoZXJlIGFyZSBzaXR1YXRpb25zIGR1ZSB0byBicm93c2VyIHF1aXJrcyBvciBCb290c3RyYXAgQ1NTIHdoZXJlXG4gKiBhbiBhbmNob3IgdGFnIGlzIG5lZWRlZCwgd2hlbiBzZW1hbnRpY2FsbHkgYSBidXR0b24gdGFnIGlzIHRoZVxuICogYmV0dGVyIGNob2ljZS4gU2FmZUFuY2hvciBlbnN1cmVzIHRoYXQgd2hlbiBhbiBhbmNob3IgaXMgdXNlZCBsaWtlIGFcbiAqIGJ1dHRvbiBpdHMgYWNjZXNzaWJsZS4gSXQgYWxzbyBlbXVsYXRlcyBpbnB1dCBgZGlzYWJsZWRgIGJlaGF2aW9yIGZvclxuICogbGlua3MsIHdoaWNoIGlzIHVzdWFsbHkgZGVzaXJhYmxlIGZvciBCdXR0b25zLCBOYXZJdGVtcywgRHJvcGRvd25JdGVtcywgZXRjLlxuICovXG5cblxuY29uc3QgU2FmZUFuY2hvciA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKCh7XG4gIC8vIE5lZWQgdG8gZGVmaW5lIHRoZSBkZWZhdWx0IFwiYXNcIiBkdXJpbmcgcHJvcCBkZXN0cnVjdHVyaW5nIHRvIGJlIGNvbXBhdGlibGUgd2l0aCBzdHlsZWQtY29tcG9uZW50cyBnaXRodWIuY29tL3JlYWN0LWJvb3RzdHJhcC9yZWFjdC1ib290c3RyYXAvaXNzdWVzLzM1OTVcbiAgYXM6IENvbXBvbmVudCA9ICdhJyxcbiAgZGlzYWJsZWQsXG4gIG9uS2V5RG93bixcbiAgLi4ucHJvcHNcbn0sIHJlZikgPT4ge1xuICBjb25zdCBoYW5kbGVDbGljayA9IGV2ZW50ID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBocmVmLFxuICAgICAgb25DbGlja1xuICAgIH0gPSBwcm9wcztcblxuICAgIGlmIChkaXNhYmxlZCB8fCBpc1RyaXZpYWxIcmVmKGhyZWYpKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgb25DbGljayA9PSBudWxsID8gdm9pZCAwIDogb25DbGljayhldmVudCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlS2V5RG93biA9IGV2ZW50ID0+IHtcbiAgICBpZiAoZXZlbnQua2V5ID09PSAnICcpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBoYW5kbGVDbGljayhldmVudCk7XG4gICAgfVxuICB9O1xuXG4gIGlmIChpc1RyaXZpYWxIcmVmKHByb3BzLmhyZWYpKSB7XG4gICAgcHJvcHMucm9sZSA9IHByb3BzLnJvbGUgfHwgJ2J1dHRvbic7IC8vIHdlIHdhbnQgdG8gbWFrZSBzdXJlIHRoZXJlIGlzIGEgaHJlZiBhdHRyaWJ1dGUgb24gdGhlIG5vZGVcbiAgICAvLyBvdGhlcndpc2UsIHRoZSBjdXJzb3IgaW5jb3JyZWN0bHkgc3R5bGVkIChleGNlcHQgd2l0aCByb2xlPSdidXR0b24nKVxuXG4gICAgcHJvcHMuaHJlZiA9IHByb3BzLmhyZWYgfHwgJyMnO1xuICB9XG5cbiAgaWYgKGRpc2FibGVkKSB7XG4gICAgcHJvcHMudGFiSW5kZXggPSAtMTtcbiAgICBwcm9wc1snYXJpYS1kaXNhYmxlZCddID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovX2pzeChDb21wb25lbnQsIHtcbiAgICByZWY6IHJlZixcbiAgICAuLi5wcm9wcyxcbiAgICBvbkNsaWNrOiBoYW5kbGVDbGljayxcbiAgICBvbktleURvd246IGNyZWF0ZUNoYWluZWRGdW5jdGlvbihoYW5kbGVLZXlEb3duLCBvbktleURvd24pXG4gIH0pO1xufSk7XG5TYWZlQW5jaG9yLmRpc3BsYXlOYW1lID0gJ1NhZmVBbmNob3InO1xuZXhwb3J0IGRlZmF1bHQgU2FmZUFuY2hvcjsiLCJpbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUJvb3RzdHJhcFByZWZpeCB9IGZyb20gJy4vVGhlbWVQcm92aWRlcic7XG5pbXBvcnQgU2FmZUFuY2hvciBmcm9tICcuL1NhZmVBbmNob3InO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmNvbnN0IGRlZmF1bHRQcm9wcyA9IHtcbiAgdmFyaWFudDogJ3ByaW1hcnknLFxuICBhY3RpdmU6IGZhbHNlLFxuICBkaXNhYmxlZDogZmFsc2Vcbn07XG5jb25zdCBCdXR0b24gPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZigoe1xuICBic1ByZWZpeCxcbiAgdmFyaWFudCxcbiAgc2l6ZSxcbiAgYWN0aXZlLFxuICBjbGFzc05hbWUsXG4gIHR5cGUsXG4gIGFzLFxuICAuLi5wcm9wc1xufSwgcmVmKSA9PiB7XG4gIGNvbnN0IHByZWZpeCA9IHVzZUJvb3RzdHJhcFByZWZpeChic1ByZWZpeCwgJ2J0bicpO1xuICBjb25zdCBjbGFzc2VzID0gY2xhc3NOYW1lcyhjbGFzc05hbWUsIHByZWZpeCwgYWN0aXZlICYmICdhY3RpdmUnLCB2YXJpYW50ICYmIGAke3ByZWZpeH0tJHt2YXJpYW50fWAsIHNpemUgJiYgYCR7cHJlZml4fS0ke3NpemV9YCk7XG5cbiAgaWYgKHByb3BzLmhyZWYpIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL19qc3goU2FmZUFuY2hvciwgeyAuLi5wcm9wcyxcbiAgICAgIGFzOiBhcyxcbiAgICAgIHJlZjogcmVmLFxuICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWVzKGNsYXNzZXMsIHByb3BzLmRpc2FibGVkICYmICdkaXNhYmxlZCcpXG4gICAgfSk7XG4gIH1cblxuICBpZiAoIXR5cGUgJiYgIWFzKSB7XG4gICAgdHlwZSA9ICdidXR0b24nO1xuICB9XG5cbiAgY29uc3QgQ29tcG9uZW50ID0gYXMgfHwgJ2J1dHRvbic7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovX2pzeChDb21wb25lbnQsIHsgLi4ucHJvcHMsXG4gICAgcmVmOiByZWYsXG4gICAgdHlwZTogdHlwZSxcbiAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgfSk7XG59KTtcbkJ1dHRvbi5kaXNwbGF5TmFtZSA9ICdCdXR0b24nO1xuQnV0dG9uLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjsiLCJpbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUJvb3RzdHJhcFByZWZpeCB9IGZyb20gJy4vVGhlbWVQcm92aWRlcic7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuY29uc3QgZGVmYXVsdFByb3BzID0ge1xuICBmbHVpZDogZmFsc2Vcbn07XG5jb25zdCBDb250YWluZXIgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZigoe1xuICBic1ByZWZpeCxcbiAgZmx1aWQsXG4gIC8vIE5lZWQgdG8gZGVmaW5lIHRoZSBkZWZhdWx0IFwiYXNcIiBkdXJpbmcgcHJvcCBkZXN0cnVjdHVyaW5nIHRvIGJlIGNvbXBhdGlibGUgd2l0aCBzdHlsZWQtY29tcG9uZW50cyBnaXRodWIuY29tL3JlYWN0LWJvb3RzdHJhcC9yZWFjdC1ib290c3RyYXAvaXNzdWVzLzM1OTVcbiAgYXM6IENvbXBvbmVudCA9ICdkaXYnLFxuICBjbGFzc05hbWUsXG4gIC4uLnByb3BzXG59LCByZWYpID0+IHtcbiAgY29uc3QgcHJlZml4ID0gdXNlQm9vdHN0cmFwUHJlZml4KGJzUHJlZml4LCAnY29udGFpbmVyJyk7XG4gIGNvbnN0IHN1ZmZpeCA9IHR5cGVvZiBmbHVpZCA9PT0gJ3N0cmluZycgPyBgLSR7Zmx1aWR9YCA6ICctZmx1aWQnO1xuICByZXR1cm4gLyojX19QVVJFX18qL19qc3goQ29tcG9uZW50LCB7XG4gICAgcmVmOiByZWYsXG4gICAgLi4ucHJvcHMsXG4gICAgY2xhc3NOYW1lOiBjbGFzc05hbWVzKGNsYXNzTmFtZSwgZmx1aWQgPyBgJHtwcmVmaXh9JHtzdWZmaXh9YCA6IHByZWZpeClcbiAgfSk7XG59KTtcbkNvbnRhaW5lci5kaXNwbGF5TmFtZSA9ICdDb250YWluZXInO1xuQ29udGFpbmVyLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcbmV4cG9ydCBkZWZhdWx0IENvbnRhaW5lcjsiLCJpbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUJvb3RzdHJhcFByZWZpeCB9IGZyb20gJy4vVGhlbWVQcm92aWRlcic7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuY29uc3QgREVWSUNFX1NJWkVTID0gWyd4eGwnLCAneGwnLCAnbGcnLCAnbWQnLCAnc20nLCAneHMnXTtcbmNvbnN0IFJvdyA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKCh7XG4gIGJzUHJlZml4LFxuICBjbGFzc05hbWUsXG4gIC8vIE5lZWQgdG8gZGVmaW5lIHRoZSBkZWZhdWx0IFwiYXNcIiBkdXJpbmcgcHJvcCBkZXN0cnVjdHVyaW5nIHRvIGJlIGNvbXBhdGlibGUgd2l0aCBzdHlsZWQtY29tcG9uZW50cyBnaXRodWIuY29tL3JlYWN0LWJvb3RzdHJhcC9yZWFjdC1ib290c3RyYXAvaXNzdWVzLzM1OTVcbiAgYXM6IENvbXBvbmVudCA9ICdkaXYnLFxuICAuLi5wcm9wc1xufSwgcmVmKSA9PiB7XG4gIGNvbnN0IGRlY29yYXRlZEJzUHJlZml4ID0gdXNlQm9vdHN0cmFwUHJlZml4KGJzUHJlZml4LCAncm93Jyk7XG4gIGNvbnN0IHNpemVQcmVmaXggPSBgJHtkZWNvcmF0ZWRCc1ByZWZpeH0tY29sc2A7XG4gIGNvbnN0IGNsYXNzZXMgPSBbXTtcbiAgREVWSUNFX1NJWkVTLmZvckVhY2goYnJrUG9pbnQgPT4ge1xuICAgIGNvbnN0IHByb3BWYWx1ZSA9IHByb3BzW2Jya1BvaW50XTtcbiAgICBkZWxldGUgcHJvcHNbYnJrUG9pbnRdO1xuICAgIGxldCBjb2xzO1xuXG4gICAgaWYgKHByb3BWYWx1ZSAhPSBudWxsICYmIHR5cGVvZiBwcm9wVmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICAoe1xuICAgICAgICBjb2xzXG4gICAgICB9ID0gcHJvcFZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29scyA9IHByb3BWYWx1ZTtcbiAgICB9XG5cbiAgICBjb25zdCBpbmZpeCA9IGJya1BvaW50ICE9PSAneHMnID8gYC0ke2Jya1BvaW50fWAgOiAnJztcbiAgICBpZiAoY29scyAhPSBudWxsKSBjbGFzc2VzLnB1c2goYCR7c2l6ZVByZWZpeH0ke2luZml4fS0ke2NvbHN9YCk7XG4gIH0pO1xuICByZXR1cm4gLyojX19QVVJFX18qL19qc3goQ29tcG9uZW50LCB7XG4gICAgcmVmOiByZWYsXG4gICAgLi4ucHJvcHMsXG4gICAgY2xhc3NOYW1lOiBjbGFzc05hbWVzKGNsYXNzTmFtZSwgZGVjb3JhdGVkQnNQcmVmaXgsIC4uLmNsYXNzZXMpXG4gIH0pO1xufSk7XG5Sb3cuZGlzcGxheU5hbWUgPSAnUm93JztcbmV4cG9ydCBkZWZhdWx0IFJvdzsiLCJpbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUJvb3RzdHJhcFByZWZpeCB9IGZyb20gJy4vVGhlbWVQcm92aWRlcic7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuY29uc3QgREVWSUNFX1NJWkVTID0gWyd4eGwnLCAneGwnLCAnbGcnLCAnbWQnLCAnc20nLCAneHMnXTtcbmNvbnN0IENvbCA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKCAvLyBOZWVkIHRvIGRlZmluZSB0aGUgZGVmYXVsdCBcImFzXCIgZHVyaW5nIHByb3AgZGVzdHJ1Y3R1cmluZyB0byBiZSBjb21wYXRpYmxlIHdpdGggc3R5bGVkLWNvbXBvbmVudHMgZ2l0aHViLmNvbS9yZWFjdC1ib290c3RyYXAvcmVhY3QtYm9vdHN0cmFwL2lzc3Vlcy8zNTk1XG4oe1xuICBic1ByZWZpeCxcbiAgY2xhc3NOYW1lLFxuICBhczogQ29tcG9uZW50ID0gJ2RpdicsXG4gIC4uLnByb3BzXG59LCByZWYpID0+IHtcbiAgY29uc3QgcHJlZml4ID0gdXNlQm9vdHN0cmFwUHJlZml4KGJzUHJlZml4LCAnY29sJyk7XG4gIGNvbnN0IHNwYW5zID0gW107XG4gIGNvbnN0IGNsYXNzZXMgPSBbXTtcbiAgREVWSUNFX1NJWkVTLmZvckVhY2goYnJrUG9pbnQgPT4ge1xuICAgIGNvbnN0IHByb3BWYWx1ZSA9IHByb3BzW2Jya1BvaW50XTtcbiAgICBkZWxldGUgcHJvcHNbYnJrUG9pbnRdO1xuICAgIGxldCBzcGFuO1xuICAgIGxldCBvZmZzZXQ7XG4gICAgbGV0IG9yZGVyO1xuXG4gICAgaWYgKHR5cGVvZiBwcm9wVmFsdWUgPT09ICdvYmplY3QnICYmIHByb3BWYWx1ZSAhPSBudWxsKSB7XG4gICAgICAoe1xuICAgICAgICBzcGFuID0gdHJ1ZSxcbiAgICAgICAgb2Zmc2V0LFxuICAgICAgICBvcmRlclxuICAgICAgfSA9IHByb3BWYWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNwYW4gPSBwcm9wVmFsdWU7XG4gICAgfVxuXG4gICAgY29uc3QgaW5maXggPSBicmtQb2ludCAhPT0gJ3hzJyA/IGAtJHticmtQb2ludH1gIDogJyc7XG4gICAgaWYgKHNwYW4pIHNwYW5zLnB1c2goc3BhbiA9PT0gdHJ1ZSA/IGAke3ByZWZpeH0ke2luZml4fWAgOiBgJHtwcmVmaXh9JHtpbmZpeH0tJHtzcGFufWApO1xuICAgIGlmIChvcmRlciAhPSBudWxsKSBjbGFzc2VzLnB1c2goYG9yZGVyJHtpbmZpeH0tJHtvcmRlcn1gKTtcbiAgICBpZiAob2Zmc2V0ICE9IG51bGwpIGNsYXNzZXMucHVzaChgb2Zmc2V0JHtpbmZpeH0tJHtvZmZzZXR9YCk7XG4gIH0pO1xuXG4gIGlmICghc3BhbnMubGVuZ3RoKSB7XG4gICAgc3BhbnMucHVzaChwcmVmaXgpOyAvLyBwbGFpbiAnY29sJ1xuICB9XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9fanN4KENvbXBvbmVudCwgeyAuLi5wcm9wcyxcbiAgICByZWY6IHJlZixcbiAgICBjbGFzc05hbWU6IGNsYXNzTmFtZXMoY2xhc3NOYW1lLCAuLi5zcGFucywgLi4uY2xhc3NlcylcbiAgfSk7XG59KTtcbkNvbC5kaXNwbGF5TmFtZSA9ICdDb2wnO1xuZXhwb3J0IGRlZmF1bHQgQ29sOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29udGFpbmVyJztcclxuaW1wb3J0IFJvdyBmcm9tICdyZWFjdC1ib290c3RyYXAvUm93JztcclxuaW1wb3J0IENvbCBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29sJztcclxuXHJcbnZhciBjb3VudCA9IDBcclxuXHJcbmZ1bmN0aW9uIEFwcCgpIHtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHt9KTtcclxuXHJcbiAgY29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGUoJycpO1xyXG4gIFxyXG4gIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdCgpIHtcclxuICAgIGF4aW9zLmdldCgnL2FwcC8nLCB7XHJcbiAgICAgIHBhcmFtczoge1xyXG4gICAgICAgIGNvdW50OiBjb3VudFxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKVxyXG4gICAgICBzZXRUZXh0KHJlc3BvbnNlLmRhdGEudGV4dClcclxuICAgIH0pLmNhdGNoKCBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgaWYgKGVycm9yLnJlc3BvbnNlKSB7XHJcbiAgICAgICAgLy8gUmVxdWVzdCBtYWRlIGFuZCBzZXJ2ZXIgcmVzcG9uZGVkXHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2Uuc3RhdHVzKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZS5oZWFkZXJzKTtcclxuICAgICAgfSBlbHNlIGlmIChlcnJvci5yZXF1ZXN0KSB7XHJcbiAgICAgICAgLy8gVGhlIHJlcXVlc3Qgd2FzIG1hZGUgYnV0IG5vIHJlc3BvbnNlIHdhcyByZWNlaXZlZFxyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnJlcXVlc3QpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIFNvbWV0aGluZyBoYXBwZW5lZCBpbiBzZXR0aW5nIHVwIHRoZSByZXF1ZXN0IHRoYXQgdHJpZ2dlcmVkIGFuIGVycm9yXHJcbiAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yJywgZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICBjb3VudCsrO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXI+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPFJvdz5cclxuICAgICAgICAgIDxDb2w+PEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9IHZhcmlhbnQ9XCJwcmltYXJ5XCI+YnV0dG9uPC9CdXR0b24+PC9Db2w+XHJcbiAgICAgICAgICA8Q29sPjxwIGNsYXNzPVwidGV4dC1jZW50ZXJcIj57dGV4dH08L3A+PC9Db2w+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgQXBwIGZyb20gJy4vQXBwJztcclxuXHJcbmltcG9ydCAnLi9pbmRleC5jc3MnO1xyXG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XHJcblxyXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlYWN0LWFwcCcpKTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNjI2OTI4Njg3MzgxXG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIkM6L1VzZXJzL0toZW1yaW5kL3Byb2plY3QvY29tcGFyZS1zcG90aWZ5L25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE2MjY5Mjg2ODc0MDhcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiQzovVXNlcnMvS2hlbXJpbmQvcHJvamVjdC9jb21wYXJlLXNwb3RpZnkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZTE0MTg1M2YyMjkzNGQ1NjRiZTZcIikiXSwic291cmNlUm9vdCI6IiJ9