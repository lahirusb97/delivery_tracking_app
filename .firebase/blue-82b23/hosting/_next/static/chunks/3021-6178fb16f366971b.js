 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */var i=n(675),r=n(783),o="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;function a(t){if(t>2147483647)throw RangeError('The value "'+t+'" is invalid for option "size"');var e=new Uint8Array(t);return Object.setPrototypeOf(e,s.prototype),e}function s(t,e,n){if("number"==typeof t){if("string"==typeof e)throw TypeError('The "string" argument must be of type string. Received type number');return h(t)}return l(t,e,n)}function l(t,e,n){if("string"==typeof t)return function(t,e){if(("string"!=typeof e||""===e)&&(e="utf8"),!s.isEncoding(e))throw TypeError("Unknown encoding: "+e);var n=0|d(t,e),i=a(n),r=i.write(t,e);return r!==n&&(i=i.slice(0,r)),i}(t,e);if(ArrayBuffer.isView(t))return c(t);if(null==t)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(A(t,ArrayBuffer)||t&&A(t.buffer,ArrayBuffer)||"undefined"!=typeof SharedArrayBuffer&&(A(t,SharedArrayBuffer)||t&&A(t.buffer,SharedArrayBuffer)))return function(t,e,n){var i;if(e<0||t.byteLength<e)throw RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(n||0))throw RangeError('"length" is outside of buffer bounds');return Object.setPrototypeOf(i=void 0===e&&void 0===n?new Uint8Array(t):void 0===n?new Uint8Array(t,e):new Uint8Array(t,e,n),s.prototype),i}(t,e,n);if("number"==typeof t)throw TypeError('The "value" argument must not be of type number. Received type number');var i=t.valueOf&&t.valueOf();if(null!=i&&i!==t)return s.from(i,e,n);var r=function(t){if(s.isBuffer(t)){var e,n=0|p(t.length),i=a(n);return 0===i.length||t.copy(i,0,0,n),i}return void 0!==t.length?"number"!=typeof t.length||(e=t.length)!=e?a(0):c(t):"Buffer"===t.type&&Array.isArray(t.data)?c(t.data):void 0}(t);if(r)return r;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof t[Symbol.toPrimitive])return s.from(t[Symbol.toPrimitive]("string"),e,n);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}function u(t){if("number"!=typeof t)throw TypeError('"size" argument must be of type number');if(t<0)throw RangeError('The value "'+t+'" is invalid for option "size"')}function h(t){return u(t),a(t<0?0:0|p(t))}function c(t){for(var e=t.length<0?0:0|p(t.length),n=a(e),i=0;i<e;i+=1)n[i]=255&t[i];return n}function p(t){if(t>=2147483647)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");return 0|t}function d(t,e){if(s.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||A(t,ArrayBuffer))return t.byteLength;if("string"!=typeof t)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);var n=t.length,i=arguments.length>2&&!0===arguments[2];if(!i&&0===n)return 0;for(var r=!1;;)switch(e){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return I(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return C(t).length;default:if(r)return i?-1:I(t).length;e=(""+e).toLowerCase(),r=!0}}function f(t,e,n){var r,o,a=!1;if((void 0===e||e<0)&&(e=0),e>this.length||((void 0===n||n>this.length)&&(n=this.length),n<=0||(n>>>=0)<=(e>>>=0)))return"";for(t||(t="utf8");;)switch(t){case"hex":return function(t,e,n){var i=t.length;(!e||e<0)&&(e=0),(!n||n<0||n>i)&&(n=i);for(var r="",o=e;o<n;++o)r+=L[t[o]];return r}(this,e,n);case"utf8":case"utf-8":return m(this,e,n);case"ascii":return function(t,e,n){var i="";n=Math.min(t.length,n);for(var r=e;r<n;++r)i+=String.fromCharCode(127&t[r]);return i}(this,e,n);case"latin1":case"binary":return function(t,e,n){var i="";n=Math.min(t.length,n);for(var r=e;r<n;++r)i+=String.fromCharCode(t[r]);return i}(this,e,n);case"base64":return r=e,o=n,0===r&&o===this.length?i.fromByteArray(this):i.fromByteArray(this.slice(r,o));case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(t,e,n){for(var i=t.slice(e,n),r="",o=0;o<i.length;o+=2)r+=String.fromCharCode(i[o]+256*i[o+1]);return r}(this,e,n);default:if(a)throw TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),a=!0}}function g(t,e,n){var i=t[e];t[e]=t[n],t[n]=i}function y(t,e,n,i,r){var o;if(0===t.length)return -1;if("string"==typeof n?(i=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),(o=n=+n)!=o&&(n=r?0:t.length-1),n<0&&(n=t.length+n),n>=t.length){if(r)return -1;n=t.length-1}else if(n<0){if(!r)return -1;n=0}if("string"==typeof e&&(e=s.from(e,i)),s.isBuffer(e))return 0===e.length?-1:v(t,e,n,i,r);if("number"==typeof e)return(e&=255,"function"==typeof Uint8Array.prototype.indexOf)?r?Uint8Array.prototype.indexOf.call(t,e,n):Uint8Array.prototype.lastIndexOf.call(t,e,n):v(t,[e],n,i,r);throw TypeError("val must be string, number or Buffer")}function v(t,e,n,i,r){var o,a=1,s=t.length,l=e.length;if(void 0!==i&&("ucs2"===(i=String(i).toLowerCase())||"ucs-2"===i||"utf16le"===i||"utf-16le"===i)){if(t.length<2||e.length<2)return -1;a=2,s/=2,l/=2,n/=2}function u(t,e){return 1===a?t[e]:t.readUInt16BE(e*a)}if(r){var h=-1;for(o=n;o<s;o++)if(u(t,o)===u(e,-1===h?0:o-h)){if(-1===h&&(h=o),o-h+1===l)return h*a}else -1!==h&&(o-=o-h),h=-1}else for(n+l>s&&(n=s-l),o=n;o>=0;o--){for(var c=!0,p=0;p<l;p++)if(u(t,o+p)!==u(e,p)){c=!1;break}if(c)return o}return -1}function m(t,e,n){n=Math.min(t.length,n);for(var i=[],r=e;r<n;){var o,a,s,l,u=t[r],h=null,c=u>239?4:u>223?3:u>191?2:1;if(r+c<=n)switch(c){case 1:u<128&&(h=u);break;case 2:(192&(o=t[r+1]))==128&&(l=(31&u)<<6|63&o)>127&&(h=l);break;case 3:o=t[r+1],a=t[r+2],(192&o)==128&&(192&a)==128&&(l=(15&u)<<12|(63&o)<<6|63&a)>2047&&(l<55296||l>57343)&&(h=l);break;case 4:o=t[r+1],a=t[r+2],s=t[r+3],(192&o)==128&&(192&a)==128&&(192&s)==128&&(l=(15&u)<<18|(63&o)<<12|(63&a)<<6|63&s)>65535&&l<1114112&&(h=l)}null===h?(h=65533,c=1):h>65535&&(h-=65536,i.push(h>>>10&1023|55296),h=56320|1023&h),i.push(h),r+=c}return function(t){var e=t.length;if(e<=4096)return String.fromCharCode.apply(String,t);for(var n="",i=0;i<e;)n+=String.fromCharCode.apply(String,t.slice(i,i+=4096));return n}(i)}function x(t,e,n){if(t%1!=0||t<0)throw RangeError("offset is not uint");if(t+e>n)throw RangeError("Trying to access beyond buffer length")}function _(t,e,n,i,r,o){if(!s.isBuffer(t))throw TypeError('"buffer" argument must be a Buffer instance');if(e>r||e<o)throw RangeError('"value" argument is out of bounds');if(n+i>t.length)throw RangeError("Index out of range")}function b(t,e,n,i,r,o){if(n+i>t.length||n<0)throw RangeError("Index out of range")}function w(t,e,n,i,o){return e=+e,n>>>=0,o||b(t,e,n,4,34028234663852886e22,-34028234663852886e22),r.write(t,e,n,i,23,4),n+4}function S(t,e,n,i,o){return e=+e,n>>>=0,o||b(t,e,n,8,17976931348623157e292,-17976931348623157e292),r.write(t,e,n,i,52,8),n+8}e.Buffer=s,e.SlowBuffer=function(t){return+t!=t&&(t=0),s.alloc(+t)},e.INSPECT_MAX_BYTES=50,e.kMaxLength=2147483647,s.TYPED_ARRAY_SUPPORT=function(){try{var t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),42===t.foo()}catch(t){return!1}}(),s.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(s.prototype,"parent",{enumerable:!0,get:function(){if(s.isBuffer(this))return this.buffer}}),Object.defineProperty(s.prototype,"offset",{enumerable:!0,get:function(){if(s.isBuffer(this))return this.byteOffset}}),s.poolSize=8192,s.from=function(t,e,n){return l(t,e,n)},Object.setPrototypeOf(s.prototype,Uint8Array.prototype),Object.setPrototypeOf(s,Uint8Array),s.alloc=function(t,e,n){return(u(t),t<=0)?a(t):void 0!==e?"string"==typeof n?a(t).fill(e,n):a(t).fill(e):a(t)},s.allocUnsafe=function(t){return h(t)},s.allocUnsafeSlow=function(t){return h(t)},s.isBuffer=function(t){return null!=t&&!0===t._isBuffer&&t!==s.prototype},s.compare=function(t,e){if(A(t,Uint8Array)&&(t=s.from(t,t.offset,t.byteLength)),A(e,Uint8Array)&&(e=s.from(e,e.offset,e.byteLength)),!s.isBuffer(t)||!s.isBuffer(e))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===e)return 0;for(var n=t.length,i=e.length,r=0,o=Math.min(n,i);r<o;++r)if(t[r]!==e[r]){n=t[r],i=e[r];break}return n<i?-1:i<n?1:0},s.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},s.concat=function(t,e){if(!Array.isArray(t))throw TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return s.alloc(0);if(void 0===e)for(n=0,e=0;n<t.length;++n)e+=t[n].length;var n,i=s.allocUnsafe(e),r=0;for(n=0;n<t.length;++n){var o=t[n];if(A(o,Uint8Array)&&(o=s.from(o)),!s.isBuffer(o))throw TypeError('"list" argument must be an Array of Buffers');o.copy(i,r),r+=o.length}return i},s.byteLength=d,s.prototype._isBuffer=!0,s.prototype.swap16=function(){var t=this.length;if(t%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(var e=0;e<t;e+=2)g(this,e,e+1);return this},s.prototype.swap32=function(){var t=this.length;if(t%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(var e=0;e<t;e+=4)g(this,e,e+3),g(this,e+1,e+2);return this},s.prototype.swap64=function(){var t=this.length;if(t%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(var e=0;e<t;e+=8)g(this,e,e+7),g(this,e+1,e+6),g(this,e+2,e+5),g(this,e+3,e+4);return this},s.prototype.toString=function(){var t=this.length;return 0===t?"":0==arguments.length?m(this,0,t):f.apply(this,arguments)},s.prototype.toLocaleString=s.prototype.toString,s.prototype.equals=function(t){if(!s.isBuffer(t))throw TypeError("Argument must be a Buffer");return this===t||0===s.compare(this,t)},s.prototype.inspect=function(){var t="",n=e.INSPECT_MAX_BYTES;return t=this.toString("hex",0,n).replace(/(.{2})/g,"$1 ").trim(),this.length>n&&(t+=" ... "),"<Buffer "+t+">"},o&&(s.prototype[o]=s.prototype.inspect),s.prototype.compare=function(t,e,n,i,r){if(A(t,Uint8Array)&&(t=s.from(t,t.offset,t.byteLength)),!s.isBuffer(t))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(void 0===e&&(e=0),void 0===n&&(n=t?t.length:0),void 0===i&&(i=0),void 0===r&&(r=this.length),e<0||n>t.length||i<0||r>this.length)throw RangeError("out of range index");if(i>=r&&e>=n)return 0;if(i>=r)return -1;if(e>=n)return 1;if(e>>>=0,n>>>=0,i>>>=0,r>>>=0,this===t)return 0;for(var o=r-i,a=n-e,l=Math.min(o,a),u=this.slice(i,r),h=t.slice(e,n),c=0;c<l;++c)if(u[c]!==h[c]){o=u[c],a=h[c];break}return o<a?-1:a<o?1:0},s.prototype.includes=function(t,e,n){return -1!==this.indexOf(t,e,n)},s.prototype.indexOf=function(t,e,n){return y(this,t,e,n,!0)},s.prototype.lastIndexOf=function(t,e,n){return y(this,t,e,n,!1)},s.prototype.write=function(t,e,n,i){if(void 0===e)i="utf8",n=this.length,e=0;else if(void 0===n&&"string"==typeof e)i=e,n=this.length,e=0;else if(isFinite(e))e>>>=0,isFinite(n)?(n>>>=0,void 0===i&&(i="utf8")):(i=n,n=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var r,o,a,s,l,u,h,c,p,d,f,g,y=this.length-e;if((void 0===n||n>y)&&(n=y),t.length>0&&(n<0||e<0)||e>this.length)throw RangeError("Attempt to write outside buffer bounds");i||(i="utf8");for(var v=!1;;)switch(i){case"hex":return function(t,e,n,i){n=Number(n)||0;var r=t.length-n;i?(i=Number(i))>r&&(i=r):i=r;var o=e.length;i>o/2&&(i=o/2);for(var a=0;a<i;++a){var s=parseInt(e.substr(2*a,2),16);if(s!=s)break;t[n+a]=s}return a}(this,t,e,n);case"utf8":case"utf-8":return l=e,u=n,D(I(t,this.length-l),this,l,u);case"ascii":return h=e,c=n,D(T(t),this,h,c);case"latin1":case"binary":return r=this,o=t,a=e,s=n,D(T(o),r,a,s);case"base64":return p=e,d=n,D(C(t),this,p,d);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return f=e,g=n,D(function(t,e){for(var n,i,r=[],o=0;o<t.length&&!((e-=2)<0);++o)i=(n=t.charCodeAt(o))>>8,r.push(n%256),r.push(i);return r}(t,this.length-f),this,f,g);default:if(v)throw TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase(),v=!0}},s.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},s.prototype.slice=function(t,e){var n=this.length;t=~~t,e=void 0===e?n:~~e,t<0?(t+=n)<0&&(t=0):t>n&&(t=n),e<0?(e+=n)<0&&(e=0):e>n&&(e=n),e<t&&(e=t);var i=this.subarray(t,e);return Object.setPrototypeOf(i,s.prototype),i},s.prototype.readUIntLE=function(t,e,n){t>>>=0,e>>>=0,n||x(t,e,this.length);for(var i=this[t],r=1,o=0;++o<e&&(r*=256);)i+=this[t+o]*r;return i},s.prototype.readUIntBE=function(t,e,n){t>>>=0,e>>>=0,n||x(t,e,this.length);for(var i=this[t+--e],r=1;e>0&&(r*=256);)i+=this[t+--e]*r;return i},s.prototype.readUInt8=function(t,e){return t>>>=0,e||x(t,1,this.length),this[t]},s.prototype.readUInt16LE=function(t,e){return t>>>=0,e||x(t,2,this.length),this[t]|this[t+1]<<8},s.prototype.readUInt16BE=function(t,e){return t>>>=0,e||x(t,2,this.length),this[t]<<8|this[t+1]},s.prototype.readUInt32LE=function(t,e){return t>>>=0,e||x(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},s.prototype.readUInt32BE=function(t,e){return t>>>=0,e||x(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},s.prototype.readIntLE=function(t,e,n){t>>>=0,e>>>=0,n||x(t,e,this.length);for(var i=this[t],r=1,o=0;++o<e&&(r*=256);)i+=this[t+o]*r;return i>=(r*=128)&&(i-=Math.pow(2,8*e)),i},s.prototype.readIntBE=function(t,e,n){t>>>=0,e>>>=0,n||x(t,e,this.length);for(var i=e,r=1,o=this[t+--i];i>0&&(r*=256);)o+=this[t+--i]*r;return o>=(r*=128)&&(o-=Math.pow(2,8*e)),o},s.prototype.readInt8=function(t,e){return(t>>>=0,e||x(t,1,this.length),128&this[t])?-((255-this[t]+1)*1):this[t]},s.prototype.readInt16LE=function(t,e){t>>>=0,e||x(t,2,this.length);var n=this[t]|this[t+1]<<8;return 32768&n?4294901760|n:n},s.prototype.readInt16BE=function(t,e){t>>>=0,e||x(t,2,this.length);var n=this[t+1]|this[t]<<8;return 32768&n?4294901760|n:n},s.prototype.readInt32LE=function(t,e){return t>>>=0,e||x(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},s.prototype.readInt32BE=function(t,e){return t>>>=0,e||x(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},s.prototype.readFloatLE=function(t,e){return t>>>=0,e||x(t,4,this.length),r.read(this,t,!0,23,4)},s.prototype.readFloatBE=function(t,e){return t>>>=0,e||x(t,4,this.length),r.read(this,t,!1,23,4)},s.prototype.readDoubleLE=function(t,e){return t>>>=0,e||x(t,8,this.length),r.read(this,t,!0,52,8)},s.prototype.readDoubleBE=function(t,e){return t>>>=0,e||x(t,8,this.length),r.read(this,t,!1,52,8)},s.prototype.writeUIntLE=function(t,e,n,i){if(t=+t,e>>>=0,n>>>=0,!i){var r=Math.pow(2,8*n)-1;_(this,t,e,n,r,0)}var o=1,a=0;for(this[e]=255&t;++a<n&&(o*=256);)this[e+a]=t/o&255;return e+n},s.prototype.writeUIntBE=function(t,e,n,i){if(t=+t,e>>>=0,n>>>=0,!i){var r=Math.pow(2,8*n)-1;_(this,t,e,n,r,0)}var o=n-1,a=1;for(this[e+o]=255&t;--o>=0&&(a*=256);)this[e+o]=t/a&255;return e+n},s.prototype.writeUInt8=function(t,e,n){return t=+t,e>>>=0,n||_(this,t,e,1,255,0),this[e]=255&t,e+1},s.prototype.writeUInt16LE=function(t,e,n){return t=+t,e>>>=0,n||_(this,t,e,2,65535,0),this[e]=255&t,this[e+1]=t>>>8,e+2},s.prototype.writeUInt16BE=function(t,e,n){return t=+t,e>>>=0,n||_(this,t,e,2,65535,0),this[e]=t>>>8,this[e+1]=255&t,e+2},s.prototype.writeUInt32LE=function(t,e,n){return t=+t,e>>>=0,n||_(this,t,e,4,4294967295,0),this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t,e+4},s.prototype.writeUInt32BE=function(t,e,n){return t=+t,e>>>=0,n||_(this,t,e,4,4294967295,0),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},s.prototype.writeIntLE=function(t,e,n,i){if(t=+t,e>>>=0,!i){var r=Math.pow(2,8*n-1);_(this,t,e,n,r-1,-r)}var o=0,a=1,s=0;for(this[e]=255&t;++o<n&&(a*=256);)t<0&&0===s&&0!==this[e+o-1]&&(s=1),this[e+o]=(t/a>>0)-s&255;return e+n},s.prototype.writeIntBE=function(t,e,n,i){if(t=+t,e>>>=0,!i){var r=Math.pow(2,8*n-1);_(this,t,e,n,r-1,-r)}var o=n-1,a=1,s=0;for(this[e+o]=255&t;--o>=0&&(a*=256);)t<0&&0===s&&0!==this[e+o+1]&&(s=1),this[e+o]=(t/a>>0)-s&255;return e+n},s.prototype.writeInt8=function(t,e,n){return t=+t,e>>>=0,n||_(this,t,e,1,127,-128),t<0&&(t=255+t+1),this[e]=255&t,e+1},s.prototype.writeInt16LE=function(t,e,n){return t=+t,e>>>=0,n||_(this,t,e,2,32767,-32768),this[e]=255&t,this[e+1]=t>>>8,e+2},s.prototype.writeInt16BE=function(t,e,n){return t=+t,e>>>=0,n||_(this,t,e,2,32767,-32768),this[e]=t>>>8,this[e+1]=255&t,e+2},s.prototype.writeInt32LE=function(t,e,n){return t=+t,e>>>=0,n||_(this,t,e,4,2147483647,-2147483648),this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24,e+4},s.prototype.writeInt32BE=function(t,e,n){return t=+t,e>>>=0,n||_(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},s.prototype.writeFloatLE=function(t,e,n){return w(this,t,e,!0,n)},s.prototype.writeFloatBE=function(t,e,n){return w(this,t,e,!1,n)},s.prototype.writeDoubleLE=function(t,e,n){return S(this,t,e,!0,n)},s.prototype.writeDoubleBE=function(t,e,n){return S(this,t,e,!1,n)},s.prototype.copy=function(t,e,n,i){if(!s.isBuffer(t))throw TypeError("argument should be a Buffer");if(n||(n=0),i||0===i||(i=this.length),e>=t.length&&(e=t.length),e||(e=0),i>0&&i<n&&(i=n),i===n||0===t.length||0===this.length)return 0;if(e<0)throw RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw RangeError("Index out of range");if(i<0)throw RangeError("sourceEnd out of bounds");i>this.length&&(i=this.length),t.length-e<i-n&&(i=t.length-e+n);var r=i-n;if(this===t&&"function"==typeof Uint8Array.prototype.copyWithin)this.copyWithin(e,n,i);else if(this===t&&n<e&&e<i)for(var o=r-1;o>=0;--o)t[o+e]=this[o+n];else Uint8Array.prototype.set.call(t,this.subarray(n,i),e);return r},s.prototype.fill=function(t,e,n,i){if("string"==typeof t){if("string"==typeof e?(i=e,e=0,n=this.length):"string"==typeof n&&(i=n,n=this.length),void 0!==i&&"string"!=typeof i)throw TypeError("encoding must be a string");if("string"==typeof i&&!s.isEncoding(i))throw TypeError("Unknown encoding: "+i);if(1===t.length){var r,o=t.charCodeAt(0);("utf8"===i&&o<128||"latin1"===i)&&(t=o)}}else"number"==typeof t?t&=255:"boolean"==typeof t&&(t=Number(t));if(e<0||this.length<e||this.length<n)throw RangeError("Out of range index");if(n<=e)return this;if(e>>>=0,n=void 0===n?this.length:n>>>0,t||(t=0),"number"==typeof t)for(r=e;r<n;++r)this[r]=t;else{var a=s.isBuffer(t)?t:s.from(t,i),l=a.length;if(0===l)throw TypeError('The value "'+t+'" is invalid for argument "value"');for(r=0;r<n-e;++r)this[r+e]=a[r%l]}return this};var M=/[^+/0-9A-Za-z-_]/g;function I(t,e){e=e||1/0;for(var n,i=t.length,r=null,o=[],a=0;a<i;++a){if((n=t.charCodeAt(a))>55295&&n<57344){if(!r){if(n>56319||a+1===i){(e-=3)>-1&&o.push(239,191,189);continue}r=n;continue}if(n<56320){(e-=3)>-1&&o.push(239,191,189),r=n;continue}n=(r-55296<<10|n-56320)+65536}else r&&(e-=3)>-1&&o.push(239,191,189);if(r=null,n<128){if((e-=1)<0)break;o.push(n)}else if(n<2048){if((e-=2)<0)break;o.push(n>>6|192,63&n|128)}else if(n<65536){if((e-=3)<0)break;o.push(n>>12|224,n>>6&63|128,63&n|128)}else if(n<1114112){if((e-=4)<0)break;o.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}else throw Error("Invalid code point")}return o}function T(t){for(var e=[],n=0;n<t.length;++n)e.push(255&t.charCodeAt(n));return e}function C(t){return i.toByteArray(function(t){if((t=(t=t.split("=")[0]).trim().replace(M,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function D(t,e,n,i){for(var r=0;r<i&&!(r+n>=e.length)&&!(r>=t.length);++r)e[r+n]=t[r];return r}function A(t,e){return t instanceof e||null!=t&&null!=t.constructor&&null!=t.constructor.name&&t.constructor.name===e.name}var L=function(){for(var t="0123456789abcdef",e=Array(256),n=0;n<16;++n)for(var i=16*n,r=0;r<16;++r)e[i+r]=t[n]+t[r];return e}()},783:function(t,e){/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */e.read=function(t,e,n,i,r){var o,a,s=8*r-i-1,l=(1<<s)-1,u=l>>1,h=-7,c=n?r-1:0,p=n?-1:1,d=t[e+c];for(c+=p,o=d&(1<<-h)-1,d>>=-h,h+=s;h>0;o=256*o+t[e+c],c+=p,h-=8);for(a=o&(1<<-h)-1,o>>=-h,h+=i;h>0;a=256*a+t[e+c],c+=p,h-=8);if(0===o)o=1-u;else{if(o===l)return a?NaN:1/0*(d?-1:1);a+=Math.pow(2,i),o-=u}return(d?-1:1)*a*Math.pow(2,o-i)},e.write=function(t,e,n,i,r,o){var a,s,l,u=8*o-r-1,h=(1<<u)-1,c=h>>1,p=23===r?5960464477539062e-23:0,d=i?0:o-1,f=i?1:-1,g=e<0||0===e&&1/e<0?1:0;for(isNaN(e=Math.abs(e))||e===1/0?(s=isNaN(e)?1:0,a=h):(a=Math.floor(Math.log(e)/Math.LN2),e*(l=Math.pow(2,-a))<1&&(a--,l*=2),a+c>=1?e+=p/l:e+=p*Math.pow(2,1-c),e*l>=2&&(a++,l/=2),a+c>=h?(s=0,a=h):a+c>=1?(s=(e*l-1)*Math.pow(2,r),a+=c):(s=e*Math.pow(2,c-1)*Math.pow(2,r),a=0));r>=8;t[n+d]=255&s,d+=f,s/=256,r-=8);for(a=a<<r|s,u+=r;u>0;t[n+d]=255&a,d+=f,a/=256,u-=8);t[n+d-f]|=128*g}}},n={};function i(t){var r=n[t];if(void 0!==r)return r.exports;var o=n[t]={exports:{}},a=!0;try{e[t](o,o.exports,i),a=!1}finally{a&&delete n[t]}return o.exports}i.ab="//";var r=i(72);t.exports=r}()},62157:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.SizeSensorId=e.SensorTabIndex=e.SensorClassName=void 0,e.SizeSensorId="size-sensor-id",e.SensorClassName="size-sensor-object",e.SensorTabIndex="-1"},80145:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,e.default=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:60,n=null;return function(){for(var i=this,r=arguments.length,o=Array(r),a=0;a<r;a++)o[a]=arguments[a];clearTimeout(n),n=setTimeout(function(){t.apply(i,o)},e)}}},52881:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=1;e.default=function(){return"".concat(n++)}},30477:function(t,e,n){"use strict";e.ZH=e.ak=void 0;var i=n(70429);e.ak=function(t,e){var n=(0,i.getSensor)(t);return n.bind(e),function(){n.unbind(e)}},e.ZH=function(t){var e=(0,i.getSensor)(t);(0,i.removeSensor)(e)}},70429:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.removeSensor=e.getSensor=e.Sensors=void 0;var i,r=(i=n(52881))&&i.__esModule?i:{default:i},o=n(87118),a=n(62157),s={};function l(t){t&&s[t]&&delete s[t]}e.Sensors=s,e.getSensor=function(t){var e=t.getAttribute(a.SizeSensorId);if(e&&s[e])return s[e];var n=(0,r.default)();t.setAttribute(a.SizeSensorId,n);var i=(0,o.createSensor)(t,function(){return l(n)});return s[n]=i,i},e.removeSensor=function(t){var e=t.element.getAttribute(a.SizeSensorId);t.destroy(),l(e)}},87118:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.createSensor=void 0;var i=n(87366),r=n(17086),o="undefined"!=typeof ResizeObserver?r.createSensor:i.createSensor;e.createSensor=o},87366:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.createSensor=void 0;var i,r=(i=n(80145))&&i.__esModule?i:{default:i},o=n(62157);e.createSensor=function(t,e){var n=void 0,i=[],a=function(){"static"===getComputedStyle(t).position&&(t.style.position="relative");var e=document.createElement("object");return e.onload=function(){e.contentDocument.defaultView.addEventListener("resize",s),s()},e.style.display="block",e.style.position="absolute",e.style.top="0",e.style.left="0",e.style.height="100%",e.style.width="100%",e.style.overflow="hidden",e.style.pointerEvents="none",e.style.zIndex="-1",e.style.opacity="0",e.setAttribute("class",o.SensorClassName),e.setAttribute("tabindex",o.SensorTabIndex),e.type="text/html",t.appendChild(e),e.data="about:blank",e},s=(0,r.default)(function(){i.forEach(function(e){e(t)})}),l=function(){n&&n.parentNode&&(n.contentDocument&&n.contentDocument.defaultView.removeEventListener("resize",s),n.parentNode.removeChild(n),t.removeAttribute(o.SizeSensorId),n=void 0,i=[],e&&e())};return{element:t,bind:function(t){n||(n=a()),-1===i.indexOf(t)&&i.push(t)},destroy:l,unbind:function(t){var e=i.indexOf(t);-1!==e&&i.splice(e,1),0===i.length&&n&&l()}}}},17086:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.createSensor=void 0;var i,r=n(62157),o=(i=n(80145))&&i.__esModule?i:{default:i};e.createSensor=function(t,e){var n=void 0,i=[],a=(0,o.default)(function(){i.forEach(function(e){e(t)})}),s=function(){var e=new ResizeObserver(a);return e.observe(t),a(),e},l=function(){n.disconnect(),i=[],n=void 0,t.removeAttribute(r.SizeSensorId),e&&e()};return{element:t,bind:function(t){n||(n=s()),-1===i.indexOf(t)&&i.push(t)},destroy:l,unbind:function(t){var e=i.indexOf(t);-1!==e&&i.splice(e,1),0===i.length&&n&&l()}}}}}]);