(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8621],{47756:function(e,t,r){Promise.resolve().then(r.bind(r,80415))},65625:function(e,t,r){"use strict";r.d(t,{V:function(){return i}});var a=r(28399),n=r(37520);function i(e){return(0,n.ZP)("MuiDivider",e)}let s=(0,a.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);t.Z=s},82112:function(e,t,r){"use strict";r.d(t,{f:function(){return i}});var a=r(28399),n=r(37520);function i(e){return(0,n.ZP)("MuiListItemIcon",e)}let s=(0,a.Z)("MuiListItemIcon",["root","alignItemsFlexStart"]);t.Z=s},48817:function(e,t,r){"use strict";r.d(t,{L:function(){return i}});var a=r(28399),n=r(37520);function i(e){return(0,n.ZP)("MuiListItemText",e)}let s=(0,a.Z)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]);t.Z=s},19038:function(e,t,r){"use strict";r.d(t,{Z:function(){return w}});var a=r(70444),n=r(14749),i=r(2265),s=r(75504),o=r(76860),c=r(41869),l=r(58836),d=r(93043),u=r(82602),m=r(52219),p=r(65735),h=r(43758),f=r(65625),g=r(82112),_=r(48817),x=r(28399),y=r(37520);function b(e){return(0,y.ZP)("MuiMenuItem",e)}let v=(0,x.Z)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]);var j=r(57437);let Z=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],$=e=>{let{disabled:t,dense:r,divider:a,disableGutters:i,selected:s,classes:c}=e,l=(0,o.Z)({root:["root",r&&"dense",t&&"disabled",!i&&"gutters",a&&"divider",s&&"selected"]},b,c);return(0,n.Z)({},c,l)},k=(0,l.ZP)(m.Z,{shouldForwardProp:e=>(0,l.FO)(e)||"classes"===e,name:"MuiMenuItem",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,r.dense&&t.dense,r.divider&&t.divider,!r.disableGutters&&t.gutters]}})(e=>{let{theme:t,ownerState:r}=e;return(0,n.Z)({},t.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!r.disableGutters&&{paddingLeft:16,paddingRight:16},r.divider&&{borderBottom:"1px solid ".concat((t.vars||t).palette.divider),backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},["&.".concat(v.selected)]:{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / ").concat(t.vars.palette.action.selectedOpacity,")"):(0,c.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity),["&.".concat(v.focusVisible)]:{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / calc(").concat(t.vars.palette.action.selectedOpacity," + ").concat(t.vars.palette.action.focusOpacity,"))"):(0,c.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},["&.".concat(v.selected,":hover")]:{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / calc(").concat(t.vars.palette.action.selectedOpacity," + ").concat(t.vars.palette.action.hoverOpacity,"))"):(0,c.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / ").concat(t.vars.palette.action.selectedOpacity,")"):(0,c.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity)}},["&.".concat(v.focusVisible)]:{backgroundColor:(t.vars||t).palette.action.focus},["&.".concat(v.disabled)]:{opacity:(t.vars||t).palette.action.disabledOpacity},["& + .".concat(f.Z.root)]:{marginTop:t.spacing(1),marginBottom:t.spacing(1)},["& + .".concat(f.Z.inset)]:{marginLeft:52},["& .".concat(_.Z.root)]:{marginTop:0,marginBottom:0},["& .".concat(_.Z.inset)]:{paddingLeft:36},["& .".concat(g.Z.root)]:{minWidth:36}},!r.dense&&{[t.breakpoints.up("sm")]:{minHeight:"auto"}},r.dense&&(0,n.Z)({minHeight:32,paddingTop:4,paddingBottom:4},t.typography.body2,{["& .".concat(g.Z.root," svg")]:{fontSize:"1.25rem"}}))});var w=i.forwardRef(function(e,t){let r;let o=(0,d.Z)({props:e,name:"MuiMenuItem"}),{autoFocus:c=!1,component:l="li",dense:m=!1,divider:f=!1,disableGutters:g=!1,focusVisibleClassName:_,role:x="menuitem",tabIndex:y,className:b}=o,v=(0,a.Z)(o,Z),w=i.useContext(u.Z),S=i.useMemo(()=>({dense:m||w.dense||!1,disableGutters:g}),[w.dense,m,g]),M=i.useRef(null);(0,p.Z)(()=>{c&&M.current&&M.current.focus()},[c]);let C=(0,n.Z)({},o,{dense:S.dense,divider:f,disableGutters:g}),D=$(o),O=(0,h.Z)(M,t);return o.disabled||(r=void 0!==y?y:-1),(0,j.jsx)(u.Z.Provider,{value:S,children:(0,j.jsx)(k,(0,n.Z)({ref:O,role:x,tabIndex:r,component:l,focusVisibleClassName:(0,s.Z)(D.focusVisible,_),className:(0,s.Z)(D.root,b)},v,{ownerState:C,classes:D}))})})},89539:function(e){var t,r,a,n,i,s,o,c,l,d,u,m,p,h,f,g,_,x,y,b,v,j;e.exports=(t="millisecond",r="second",a="minute",n="hour",i="week",s="month",o="quarter",c="year",l="date",d="Invalid Date",u=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p=function(e,t,r){var a=String(e);return!a||a.length>=t?e:""+Array(t+1-a.length).join(r)+e},(f={})[h="en"]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||"th")+"]"}},g="$isDayjsObject",_=function(e){return e instanceof v||!(!e||!e[g])},x=function e(t,r,a){var n;if(!t)return h;if("string"==typeof t){var i=t.toLowerCase();f[i]&&(n=i),r&&(f[i]=r,n=i);var s=t.split("-");if(!n&&s.length>1)return e(s[0])}else{var o=t.name;f[o]=t,n=o}return!a&&n&&(h=n),n||!a&&h},y=function(e,t){if(_(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new v(r)},(b={s:p,z:function(e){var t=-e.utcOffset(),r=Math.abs(t);return(t<=0?"+":"-")+p(Math.floor(r/60),2,"0")+":"+p(r%60,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var a=12*(r.year()-t.year())+(r.month()-t.month()),n=t.clone().add(a,s),i=r-n<0,o=t.clone().add(a+(i?-1:1),s);return+(-(a+(r-n)/(i?n-o:o-n))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return({M:s,y:c,w:i,d:"day",D:l,h:n,m:a,s:r,ms:t,Q:o})[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}}).l=x,b.i=_,b.w=function(e,t){return y(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})},j=(v=function(){function e(e){this.$L=x(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[g]=!0}var p=e.prototype;return p.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(b.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var a=t.match(u);if(a){var n=a[2]-1||0,i=(a[7]||"0").substring(0,3);return r?new Date(Date.UTC(a[1],n,a[3]||1,a[4]||0,a[5]||0,a[6]||0,i)):new Date(a[1],n,a[3]||1,a[4]||0,a[5]||0,a[6]||0,i)}}return new Date(t)}(e),this.init()},p.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},p.$utils=function(){return b},p.isValid=function(){return this.$d.toString()!==d},p.isSame=function(e,t){var r=y(e);return this.startOf(t)<=r&&r<=this.endOf(t)},p.isAfter=function(e,t){return y(e)<this.startOf(t)},p.isBefore=function(e,t){return this.endOf(t)<y(e)},p.$g=function(e,t,r){return b.u(e)?this[t]:this.set(r,e)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(e,t){var o=this,d=!!b.u(t)||t,u=b.p(e),m=function(e,t){var r=b.w(o.$u?Date.UTC(o.$y,t,e):new Date(o.$y,t,e),o);return d?r:r.endOf("day")},p=function(e,t){return b.w(o.toDate()[e].apply(o.toDate("s"),(d?[0,0,0,0]:[23,59,59,999]).slice(t)),o)},h=this.$W,f=this.$M,g=this.$D,_="set"+(this.$u?"UTC":"");switch(u){case c:return d?m(1,0):m(31,11);case s:return d?m(1,f):m(0,f+1);case i:var x=this.$locale().weekStart||0,y=(h<x?h+7:h)-x;return m(d?g-y:g+(6-y),f);case"day":case l:return p(_+"Hours",0);case n:return p(_+"Minutes",1);case a:return p(_+"Seconds",2);case r:return p(_+"Milliseconds",3);default:return this.clone()}},p.endOf=function(e){return this.startOf(e,!1)},p.$set=function(e,i){var o,d=b.p(e),u="set"+(this.$u?"UTC":""),m=((o={}).day=u+"Date",o[l]=u+"Date",o[s]=u+"Month",o[c]=u+"FullYear",o[n]=u+"Hours",o[a]=u+"Minutes",o[r]=u+"Seconds",o[t]=u+"Milliseconds",o)[d],p="day"===d?this.$D+(i-this.$W):i;if(d===s||d===c){var h=this.clone().set(l,1);h.$d[m](p),h.init(),this.$d=h.set(l,Math.min(this.$D,h.daysInMonth())).$d}else m&&this.$d[m](p);return this.init(),this},p.set=function(e,t){return this.clone().$set(e,t)},p.get=function(e){return this[b.p(e)]()},p.add=function(e,t){var o,l=this;e=Number(e);var d=b.p(t),u=function(t){var r=y(l);return b.w(r.date(r.date()+Math.round(t*e)),l)};if(d===s)return this.set(s,this.$M+e);if(d===c)return this.set(c,this.$y+e);if("day"===d)return u(1);if(d===i)return u(7);var m=((o={})[a]=6e4,o[n]=36e5,o[r]=1e3,o)[d]||1,p=this.$d.getTime()+e*m;return b.w(p,this)},p.subtract=function(e,t){return this.add(-1*e,t)},p.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||d;var a=e||"YYYY-MM-DDTHH:mm:ssZ",n=b.z(this),i=this.$H,s=this.$m,o=this.$M,c=r.weekdays,l=r.months,u=r.meridiem,p=function(e,r,n,i){return e&&(e[r]||e(t,a))||n[r].slice(0,i)},h=function(e){return b.s(i%12||12,e,"0")},f=u||function(e,t,r){var a=e<12?"AM":"PM";return r?a.toLowerCase():a};return a.replace(m,function(e,a){return a||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return b.s(t.$y,4,"0");case"M":return o+1;case"MM":return b.s(o+1,2,"0");case"MMM":return p(r.monthsShort,o,l,3);case"MMMM":return p(l,o);case"D":return t.$D;case"DD":return b.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return p(r.weekdaysMin,t.$W,c,2);case"ddd":return p(r.weekdaysShort,t.$W,c,3);case"dddd":return c[t.$W];case"H":return String(i);case"HH":return b.s(i,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return f(i,s,!0);case"A":return f(i,s,!1);case"m":return String(s);case"mm":return b.s(s,2,"0");case"s":return String(t.$s);case"ss":return b.s(t.$s,2,"0");case"SSS":return b.s(t.$ms,3,"0");case"Z":return n}return null}(e)||n.replace(":","")})},p.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},p.diff=function(e,t,l){var d,u=this,m=b.p(t),p=y(e),h=(p.utcOffset()-this.utcOffset())*6e4,f=this-p,g=function(){return b.m(u,p)};switch(m){case c:d=g()/12;break;case s:d=g();break;case o:d=g()/3;break;case i:d=(f-h)/6048e5;break;case"day":d=(f-h)/864e5;break;case n:d=f/36e5;break;case a:d=f/6e4;break;case r:d=f/1e3;break;default:d=f}return l?d:b.a(d)},p.daysInMonth=function(){return this.endOf(s).$D},p.$locale=function(){return f[this.$L]},p.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),a=x(e,t,!0);return a&&(r.$L=a),r},p.clone=function(){return b.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},e}()).prototype,y.prototype=j,[["$ms",t],["$s",r],["$m",a],["$H",n],["$W","day"],["$M",s],["$y",c],["$D",l]].forEach(function(e){j[e[1]]=function(t){return this.$g(t,e[0],e[1])}}),y.extend=function(e,t){return e.$i||(e(t,v,y),e.$i=!0),y},y.locale=x,y.isDayjs=_,y.unix=function(e){return y(1e3*e)},y.en=f[h],y.Ls=f,y.p={},y)},80415:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return C}});var a=r(57437),n=r(2265),i=r(41991),s=r(87957),o=r(82670),c=r(29835),l=r(41848),d=r(952),u=r(10571),m=r(87640),p=r(68148),h=r(10470),f=r(77298),g=r(82794),_=r(98322),x=r(19038),y=r(18645),b=r(34111),v=r(6285),j=r(52380),Z=r(30828),$=r(81302),k=r(58121),w=r(99354),S=r(89539),M=r.n(S);function C(){let[e,t]=(0,n.useState)("dom"),[r,S]=(0,n.useState)(""),[C,D]=n.useState(""),[O,T]=n.useState(M()(new Date)),N=(0,Z.I0)(),I=(0,n.useRef)(!0),P=(0,Z.v9)(e=>e.root_data.DATA),W=(0,Z.v9)(e=>e.root_data.loading),q=(0,Z.v9)(e=>e.root_data.USERDATA),E=i.Ry({s_name:i.Z_().required("Enter Sender name"),s_address:i.Z_().required("Enter Sender Address"),s_mobile:i.Z_().required("Enter Sender Mobile Number"),r_name:i.Z_().required("Enter Reciver name"),r_address:i.Z_().required("Enter Reciver Address"),r_mobile:i.Z_().required("Enter Reciver Mobile Number"),rate:i.Rx().positive().required("Enter Delivery Rate").moreThan(0),package_price:i.Rx().required("Enter COD Package Price").moreThan(-1).default(0),weight:i.Rx().positive().required("Enter Package Weight"),rate_cod:i.Xg().default(!1),rate_monthly_pay:i.Xg().default(!1),country:"dom"===e?i.Z_():i.Z_().required("Enter Country"),city:"dom"===e?i.Z_():i.Z_().required("Enter City"),tracking_id:"dom"===e?i.Z_():i.Z_().required("Enter Package Tracking Number"),zip_code:"dom"===e?i.Z_():i.Z_().required("Enter Zip Code")}),{register:R,handleSubmit:A,setValue:V,setError:F,reset:L,watch:Q,unregister:z,control:H,formState:{errors:Y}}=(0,o.cI)({resolver:(0,s.X)(E)}),B=async t=>{if(r&&C){let a={date:(0,k.Bt)(),sender:{name:t.s_name,address:t.s_address,mobile:t.s_mobile},reciver:{name:t.r_name,address:t.r_address,mobile:t.r_mobile,country:t.country,city:t.city,zip_code:t.zip_code},tracking_id:t.tracking_id,date:(0,k.Bt)(),delivery_type:e,rate:t.rate,rate_cod:t.rate_cod,rate_monthly_pay:t.rate_monthly_pay,cop_id:r,package_price:t.package_price,weight:t.weight,cod:!0===t.rate_cod||t.package_price>0,state:"pending",branch_area:q.area,tracking:{[q.id]:{name:q.name,area:q.area,date:(0,k.Bt)(),job_role:"rider"===q.job_role?"Rider":"branch"===q.job_role?"Branch":"admin"===q.job_role?"Manager":""}}},n={date:(0,k.Bt)(),sender:{name:t.s_name,address:t.s_address,mobile:t.s_mobile},reciver:{name:t.r_name,address:t.r_address,mobile:t.r_mobile},date:(0,k.Bt)(),delivery_type:e,rate:t.rate,rate_cod:t.rate_cod,rate_monthly_pay:t.rate_monthly_pay,cop_id:r,package_price:t.package_price,weight:t.weight,cod:!0===t.rate_cod||t.package_price>0,state:"pending",branch_area:q.area,tracking:{[q.id]:{name:q.name,area:q.area,date:(0,k.Bt)(),job_role:"rider"===q.job_role?"Rider":"branch"===q.job_role?"Branch":"admin"===q.job_role?"Manager":""}}};try{let i=(0,k.JU)((0,k.ad)(),"package","".concat(C.toString()));(await (0,k.QT)(i)).exists()?N((0,$.mX)({open:!0,type:"error",msg:"Package ID Already Exist"})):(await (0,k.pl)((0,k.JU)((0,k.ad)(),"package","".concat(C.toString())),"dom"===e?n:a).then(async()=>{let e=M()(new Date),a=(0,k.JU)((0,k.ad)(),"coporate",r,e.$y.toString(),(e.$M+1).toString());(await (0,k.QT)(a)).exists()?await (0,k.r7)(a,{total_rate:(0,k.nP)(t.rate_monthly_pay?t.rate:0),on_cash_sale:(0,k.nP)(t.rate_monthly_pay?0:t.rate)}):await (0,k.pl)(a,{total_rate:t.rate_monthly_pay?t.rate:0})}).then(()=>{"int"===e?L({s_name:"",s_address:"",s_mobile:"",r_name:"",r_address:"",r_mobile:"",rate:"",package_price:"",weight:"",rate_cod:!1,rate_monthly_pay:!1,country:"",city:"",tracking_id:"",zip_code:""}):L({s_name:"",s_address:"",s_mobile:"",r_name:"",r_address:"",r_mobile:"",rate:"",package_price:"",weight:"",rate_cod:!1,rate_monthly_pay:!1})}),L(),D(""),S(""),N((0,$.mX)({open:!0,type:"success",msg:"Package Added"})))}catch(e){N((0,$.mX)({open:!0,type:"error",msg:e.message}))}}else N((0,$.mX)({open:!0,type:"error",msg:"Enter Package ID & Select Company"}))};return(0,n.useEffect)(()=>{"dom"!==e||I.current||z(["country","city","zip_code","tracking_id"])},[z,e,I.current]),(0,a.jsx)("div",{children:(0,a.jsxs)("form",{onSubmit:A(B),children:[(0,a.jsx)(w.Z,{getPackageID:e=>{D(e)}}),(0,a.jsxs)(c.Z,{variant:"h6",children:["Package ID: ",C||"---"]}),(0,a.jsx)("div",{className:"flex justify-center text-center",children:(0,a.jsxs)(l.Z,{children:[(0,a.jsx)(d.Z,{id:"demo-row-radio-buttons-group-label",children:"Delivery Type"}),(0,a.jsxs)(u.Z,{row:!0,"aria-labelledby":"demo-row-radio-buttons-group-label",name:"row-radio-buttons-group",value:e,onChange:e=>{t(e.target.value)},children:[(0,a.jsx)(m.Z,{value:"dom",control:(0,a.jsx)(p.Z,{}),label:"Domestic",defaultChecked:!0}),(0,a.jsx)(m.Z,{value:"int",control:(0,a.jsx)(p.Z,{}),label:"International"})]})]})}),(0,a.jsxs)("div",{className:"flex md:flex-row flex-col justify-around p-2 gap-4",children:[(0,a.jsxs)(h.Z,{className:"md:w-input-max ",variant:"elevation",elevation:2,children:[(0,a.jsx)(c.Z,{align:"center",color:"GrayText",variant:"h6",fontWeight:600,m:1,children:"Sender Details"}),(0,a.jsxs)("div",{className:"flex flex-col gap-4 m-2",children:[(0,a.jsx)(o.Qr,{name:"s_name",control:H,render:e=>{let{field:t}=e;return(0,a.jsx)(f.Z,{...t,label:"Name",type:"text",fullWidth:!0,error:!!Y.s_name,helperText:Y.s_name&&Y.s_name.message})}}),(0,a.jsx)(o.Qr,{name:"s_address",control:H,render:e=>{let{field:t}=e;return(0,a.jsx)(f.Z,{...t,defaultValue:"",label:"Address",fullWidth:!0,type:"text",error:!!Y.s_address,helperText:Y.s_address&&Y.s_address.message})}}),(0,a.jsx)(o.Qr,{name:"s_mobile",control:H,render:e=>{let{field:t}=e;return(0,a.jsx)(f.Z,{...t,defaultValue:"",label:"Mobile",fullWidth:!0,type:"number",error:!!Y.s_mobile,helperText:Y.s_mobile&&Y.s_mobile.message})}})]})]}),(0,a.jsxs)(h.Z,{className:"md:w-input-max p-2",variant:"elevation",elevation:2,children:[(0,a.jsx)(c.Z,{align:"center",color:"GrayText",variant:"h6",fontWeight:600,m:1,children:"Reciver Details"}),(0,a.jsxs)("div",{className:"flex flex-col gap-4 ",children:[(0,a.jsx)(o.Qr,{name:"r_name",control:H,render:e=>{let{field:t}=e;return(0,a.jsx)(f.Z,{...t,defaultValue:"",label:"Name",fullWidth:!0,type:"text",error:!!Y.r_name,helperText:Y.r_name&&Y.r_name.message})}}),(0,a.jsx)(o.Qr,{name:"r_address",control:H,render:e=>{let{field:t}=e;return(0,a.jsx)(f.Z,{...t,defaultValue:"",label:"Address",fullWidth:!0,type:"text",error:!!Y.r_address,helperText:Y.r_address&&Y.r_address.message})}}),(0,a.jsx)(o.Qr,{name:"r_mobile",control:H,render:e=>{let{field:t}=e;return(0,a.jsx)(f.Z,{...t,defaultValue:"",label:"Mobile",fullWidth:!0,type:"number",error:!!Y.r_mobile,helperText:Y.r_mobile&&Y.r_mobile.message})}}),(0,a.jsx)("div",{className:"flex flex-col gap-4",children:"int"===e?(0,a.jsx)("div",{ref:I,children:(0,a.jsx)(j.Z,{control:H,errors:Y})}):(0,a.jsx)(a.Fragment,{})})]})]})]}),(0,a.jsxs)(h.Z,{className:"p-2 m-4 ",variant:"elevation",elevation:2,children:[(0,a.jsx)(c.Z,{align:"center",color:"GrayText",variant:"h6",fontWeight:600,m:1,children:"Package Details"}),(0,a.jsx)("div",{className:"w-screen md:w-input-max m-auto my-2"}),(0,a.jsxs)("div",{className:"grid md:grid-cols-2 md:grid-rows-2 gap-4 grid-rows-4  ",children:[(0,a.jsxs)(l.Z,{fullWidth:!0,children:[(0,a.jsx)(g.Z,{children:"Select Company"}),(0,a.jsx)(_.Z,{value:r||"",label:"Select Company",onChange:e=>{S(e.target.value)},children:W?null:P.map(e=>(0,a.jsx)(x.Z,{value:e.cop_id,children:e.name},e.cop_id))})]}),(0,a.jsxs)("div",{className:" gap-2",children:[(0,a.jsx)(o.Qr,{name:"rate",control:H,render:e=>{let{field:t}=e;return(0,a.jsx)(f.Z,{...t,type:"number",defaultValue:"",label:"Delivery Rate",InputLabelProps:{shrink:!0},fullWidth:!0,error:!!Y.rate,helperText:Y.rate&&Y.rate.message})}}),(0,a.jsx)(o.Qr,{name:"rate_cod",control:H,render:e=>{let{field:t}=e;return(0,a.jsx)(m.Z,{control:(0,a.jsx)(y.Z,{...t}),label:"Delivery Rate COD"})}}),(0,a.jsx)(o.Qr,{name:"rate_monthly_pay",control:H,render:e=>{let{field:t}=e;return(0,a.jsx)(m.Z,{control:(0,a.jsx)(y.Z,{...t}),label:"Pay Monthly"})}})]}),(0,a.jsx)(o.Qr,{name:"package_price",control:H,render:e=>{let{field:t}=e;return(0,a.jsx)(f.Z,{...t,type:"number",defaultValue:0,label:"COD Package Price",fullWidth:!0,InputProps:{startAdornment:(0,a.jsx)(b.Z,{position:"start",children:"Rs"})},error:!!Y.package_price,helperText:Y.package_price&&Y.package_price.message})}}),(0,a.jsx)(o.Qr,{name:"weight",control:H,render:e=>{let{field:t}=e;return(0,a.jsx)(f.Z,{...t,type:"number",defaultValue:"",label:"Package Weight",fullWidth:!0,InputProps:{endAdornment:(0,a.jsx)(b.Z,{position:"start",children:"kg"})},error:!!Y.rate,helperText:Y.rate&&Y.rate.message})}})]})]}),(0,a.jsx)("div",{className:"flex justify-center",children:(0,a.jsx)(v.Z,{className:"md:w-input-max w-full",variant:"contained",type:"submit",children:"Submit"})})]})})}},52380:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var a=r(57437),n=r(77298);r(2265);var i=r(82670);function s(e){let{control:t,errors:r}=e;return(0,a.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,a.jsx)(i.Qr,{name:"tracking_id",control:t,render:e=>{let{field:t}=e;return(0,a.jsx)(n.Z,{...t,type:"text",defaultValue:"",label:"Tracking Number",fullWidth:!0,error:!!r.tracking_id,helperText:r.tracking_id&&r.tracking_id.message})}}),(0,a.jsx)(i.Qr,{name:"zip_code",control:t,render:e=>{let{field:t}=e;return(0,a.jsx)(n.Z,{...t,type:"number",defaultValue:"",label:"Zip Code",fullWidth:!0,error:!!r.zip_code,helperText:r.zip_code&&r.zip_code.message})}}),(0,a.jsx)(i.Qr,{name:"country",control:t,render:e=>{let{field:t}=e;return(0,a.jsx)(n.Z,{...t,type:"text",defaultValue:"",label:"Country",fullWidth:!0,error:!!r.country,helperText:r.country&&r.country.message})}}),(0,a.jsx)(i.Qr,{name:"city",control:t,render:e=>{let{field:t}=e;return(0,a.jsx)(n.Z,{...t,type:"text",defaultValue:"",label:"City",fullWidth:!0,error:!!r.city,helperText:r.city&&r.city.message})}})]})}},99354:function(e,t,r){"use strict";r.d(t,{Z:function(){return $}});var a=r(57437),n=r(2265),i=r(6285),s=r(16492),o=r(43206),c=r(79309),l=r(79221),d=r(40512),u=r(67147),m=r(77298),p=r(14359);let h="html5qr-code-full-region",f=e=>{let t={};return e.fps&&(t.fps=e.fps),e.qrbox&&(t.qrbox=e.qrbox),e.aspectRatio&&(t.aspectRatio=e.aspectRatio),void 0!==e.disableFlip&&(t.disableFlip=e.disableFlip),t};var g=e=>((0,n.useEffect)(()=>{let t=f(e),r=!0===e.verbose;if(!e.qrCodeSuccessCallback)throw"qrCodeSuccessCallback is required callback.";let a=new p.wF(h,t,r);return a.render(e.qrCodeSuccessCallback,e.qrCodeErrorCallback),()=>{a.clear().catch(e=>{console.error("Failed to clear html5QrcodeScanner. ",e)})}},[]),(0,a.jsx)("div",{id:h})),_=r(68148),x=r(10571),y=r(87640),b=r(41848),v=r(952),j=r(61975);let Z=n.forwardRef(function(e,t){return(0,a.jsx)(l.Z,{direction:"up",ref:t,...e})});function $(e){let{getPackageID:t}=e,[r,l]=n.useState(!1),[p,h]=n.useState("camera"),[f,$]=n.useState(""),w=()=>{l(!1)},S={color:"primary",sx:k,icon:(0,a.jsx)(j.Ijt,{size:30}),label:"Add"};return(0,a.jsxs)(n.Fragment,{children:[(0,a.jsxs)(i.Z,{variant:"contained","aria-label":S.label,color:"primary",onClick:()=>{l(!0)},children:["Open Scan ",(0,a.jsx)(j.Ijt,{sx:{m:1},size:30})]}),(0,a.jsxs)(s.Z,{open:r,onClose:w,TransitionComponent:Z,children:[(0,a.jsx)(d.Z,{children:(0,a.jsx)(o.Z,{edge:"start",color:"inherit",onClick:w,"aria-label":"close",children:(0,a.jsx)(c.Z,{})})}),(0,a.jsxs)(u.Z,{children:[(0,a.jsx)("div",{children:(0,a.jsxs)(b.Z,{children:[(0,a.jsx)(v.Z,{id:"demo-controlled-radio-buttons-group",children:"Scan Option"}),(0,a.jsxs)(x.Z,{row:!0,"aria-labelledby":"demo-controlled-radio-buttons-group",name:"controlled-radio-buttons-group",value:p,onChange:e=>{h(e.target.value)},children:[(0,a.jsx)(y.Z,{value:"camera",control:(0,a.jsx)(_.Z,{}),label:"Camera"}),(0,a.jsx)(y.Z,{value:"search",control:(0,a.jsx)(_.Z,{}),label:"Manual Input"})]})]})}),"camera"===p?(0,a.jsx)(g,{fps:10,qrbox:250,disableFlip:!1,qrCodeSuccessCallback:(e,r)=>{t(e),l(!1)}}):(0,a.jsxs)("div",{className:"flex",children:[(0,a.jsx)(m.Z,{onChange:e=>$(e.target.value),size:"small",label:"Package Number"}),(0,a.jsx)(i.Z,{sx:{mx:1},variant:"contained",onClick:()=>{f&&(t(f),l(!1))},children:"Add Package Id"})]})]})]})]})}let k={position:"absolute",bottom:16,right:16}},81302:function(e,t,r){"use strict";r.d(t,{At:function(){return i},mX:function(){return n}});let a=(0,r(35972).oM)({name:"snack_bar",initialState:{OPEN:!1,TYPE:"sucess",MSG:""},reducers:{openScackbar:(e,t)=>{let{open:r,type:a,msg:n}=t.payload;e.OPEN=r,e.TYPE=a,e.MSG=n},closeScackbar:e=>{e.OPEN=!1}}}),{openScackbar:n,closeScackbar:i}=a.actions;t.ZP=a.reducer}},function(e){e.O(0,[4358,1779,52,1472,5698,4583,7397,9271,2940,6859,472,2971,8069,1744],function(){return e(e.s=47756)}),_N_E=e.O()}]);