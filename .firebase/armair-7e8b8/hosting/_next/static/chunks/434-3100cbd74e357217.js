"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[434],{47907:function(e,r,n){var t=n(15313);n.o(t,"redirect")&&n.d(r,{redirect:function(){return t.redirect}}),n.o(t,"usePathname")&&n.d(r,{usePathname:function(){return t.usePathname}}),n.o(t,"useRouter")&&n.d(r,{useRouter:function(){return t.useRouter}}),n.o(t,"useServerInsertedHTML")&&n.d(r,{useServerInsertedHTML:function(){return t.useServerInsertedHTML}})},15486:function(e,r,n){n.d(r,{Cp:function(){return f},F_:function(){return l}});var t=n(92730),u=n(2265);/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function o(e,r,n,t){return new(n||(n=Promise))(function(u,o){function a(e){try{i(t.next(e))}catch(e){o(e)}}function c(e){try{i(t.throw(e))}catch(e){o(e)}}function i(e){var r;e.done?u(e.value):((r=e.value)instanceof n?r:new n(function(e){e(r)})).then(a,c)}i((t=t.apply(e,r||[])).next())})}function a(e,r){var n,t,u,o,a={label:0,sent:function(){if(1&u[0])throw u[1];return u[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(n)throw TypeError("Generator is already executing.");for(;a;)try{if(n=1,t&&(u=2&o[0]?t.return:o[0]?t.throw||((u=t.return)&&u.call(t),0):t.next)&&!(u=u.call(t,o[1])).done)return u;switch(t=0,u&&(o=[2&o[0],u.value]),o[0]){case 0:case 1:u=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,t=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(u=(u=a.trys).length>0&&u[u.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!u||o[1]>u[0]&&o[1]<u[3])){a.label=o[1];break}if(6===o[0]&&a.label<u[1]){a.label=u[1],u=o;break}if(u&&a.label<u[2]){a.label=u[2],a.ops.push(o);break}u[2]&&a.ops.pop(),a.trys.pop();continue}o=r.call(e,a)}catch(e){o=[6,e],t=0}finally{n=u=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var c=function(){return(c=Object.assign||function(e){for(var r,n=1,t=arguments.length;n<t;n++)for(var u in r=arguments[n])Object.prototype.hasOwnProperty.call(r,u)&&(e[u]=r[u]);return e}).apply(this,arguments)},i=function(e){return{loading:null==e,value:e}},s=function(e){var r=e?e():void 0,n=(0,u.useReducer)(function(e,r){switch(r.type){case"error":return c(c({},e),{error:r.error,loading:!1,value:void 0});case"reset":return i(r.defaultValue);case"value":return c(c({},e),{error:void 0,loading:!1,value:r.value});default:return e}},i(r)),t=n[0],o=n[1],a=(0,u.useCallback)(function(){o({type:"reset",defaultValue:e?e():void 0})},[e]),s=(0,u.useCallback)(function(e){o({type:"error",error:e})},[]),l=(0,u.useCallback)(function(e){o({type:"value",value:e})},[]);return(0,u.useMemo)(function(){return{error:t.error,loading:t.loading,reset:a,setError:s,setValue:l,value:t.value}},[t.error,t.loading,a,s,l,t.value])},l=function(e,r){var n=s(function(){return e.currentUser}),c=n.error,i=n.loading,l=n.setError,f=n.setValue,v=n.value;return(0,u.useEffect)(function(){var n=(0,t.Aj)(e,function(e){return o(void 0,void 0,void 0,function(){return a(this,function(n){switch(n.label){case 0:if(!(null==r?void 0:r.onUserChanged))return[3,4];n.label=1;case 1:return n.trys.push([1,3,,4]),[4,r.onUserChanged(e)];case 2:return n.sent(),[3,4];case 3:return l(n.sent()),[3,4];case 4:return f(e),[2]}})})},l);return function(){n()}},[e]),[v,i,c]},f=function(e){var r=(0,u.useState)(),n=r[0],c=r[1],i=(0,u.useState)(),s=i[0],l=i[1],f=(0,u.useState)(!1),v=f[0],d=f[1];return[(0,u.useCallback)(function(r,n){return o(void 0,void 0,void 0,function(){var u;return a(this,function(o){switch(o.label){case 0:d(!0),c(void 0),o.label=1;case 1:return o.trys.push([1,3,4,5]),[4,(0,t.e5)(e,r,n)];case 2:return l(u=o.sent()),[2,u];case 3:return c(o.sent()),[3,5];case 4:return d(!1),[7];case 5:return[2]}})})},[e]),s,v,n]}}}]);