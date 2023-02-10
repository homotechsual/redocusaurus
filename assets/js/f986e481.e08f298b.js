/*! For license information please see f986e481.e08f298b.js.LICENSE.txt */
(self.webpackChunkredocusaurus_website=self.webpackChunkredocusaurus_website||[]).push([[256,612],{9949:function(e,t,n){"use strict";n(161).default.canUseDOM&&(window.Prism=window.Prism||{},window.Prism.manual=!0)},5110:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var r=n(5773),o=n(7378),s=n(4034),u=n(1550);var c=function(e){var t,n,c,i,a=e.layoutProps,l=e.specProps,d=(null==(t=l.spec)||null==(n=t.info)?void 0:n.title)||"API Docs",f=(null==(c=l.spec)||null==(i=c.info)?void 0:i.description)||"Open API Reference Docs for the API";return o.createElement(s.Z,(0,r.Z)({title:d,description:f},a),o.createElement(u.Z,l))}},1550:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(5773),o=n(7378),s=n(8944),u=(n(9949),n(7725)),c=n(6216),i=n(808),a=n(3542);function l(e){return o.createElement("div",{className:"redocusaurus-styles"})}var d=["className","optionsOverrides"];var f=function(e){var t=e.className,n=e.optionsOverrides,r=(0,i.Z)(e,d),c=(0,a.U)(r,n),f=c.store,p=c.darkThemeOptions,m=c.lightThemeOptions,v=c.hasLogo;return o.createElement(o.Fragment,null,o.createElement(l,{specProps:r,lightThemeOptions:m,darkThemeOptions:p}),o.createElement("div",{className:(0,s.Z)(["redocusaurus",v&&"redocusaurus-has-logo",t])},o.createElement(u.Redoc,{store:f})))};var p=function(e){var t=e.className,n=e.optionsOverrides,i=e.spec,a=e.url,l=e.themeId,d=(e.isSpecFile,(0,c.N)(l,n).options);return i?o.createElement(f,(0,r.Z)({},e,{spec:i})):o.createElement("div",{className:(0,s.Z)(["redocusaurus",t])},o.createElement(u.RedocStandalone,{specUrl:a,options:d}))}},2035:function(e,t,n){"use strict";n.d(t,{u:function(){return o}});var r=n(1869);function o(e){var t,n=(0,r.OD)("docusaurus-plugin-redoc");return e?null==n?void 0:n[e]:null==(t=Object.values(null!=n?n:{}))?void 0:t[0]}t.Z=o},3542:function(e,t,n){"use strict";n.d(t,{U:function(){return l}});var r=n(7378),o=n(8948),s=n(6457),u=n(5421),c=(n(9949),n(7725)),i=n(6216),a=null;function l(e,t){var n=e.spec,l=e.url,d=e.themeId,f=(0,i.N)(d,t),p=(0,o.Z)(l,{absolute:!0}),m=(0,s.Z)(),v="dark"===(0,u.I)().colorMode,h=(0,r.useMemo)((function(){var e;return null!==a&&m&&a.dispose(),a=new c.AppStore(n,p,f.options),Object.assign({},f,{hasLogo:!(null==(e=n.info)||!e["x-logo"]),store:a})}),[m,n,p,f]);return(0,r.useEffect)((function(){h.store.onDidMount()}),[h,m,v]),h}},6216:function(e,t,n){"use strict";n.d(t,{N:function(){return a}});var r=n(7378),o=n(6457),s=n(1869),u=n(5421),c=n(5409),i=n.n(c);n(9949);function a(e,t){void 0===e&&(e="theme-redoc");var n=(0,o.Z)(),c="dark"===(0,u.I)().colorMode,a=(0,s.OD)("docusaurus-theme-redoc",{failfast:!0}),l=(0,s.eZ)("docusaurus-theme-redoc",e)||Object.values(a)[0];return(0,r.useMemo)((function(){var e=l.lightTheme,r=l.darkTheme,o=l.options,s={scrollYOffset:n||"string"!=typeof o.scrollYOffset?o.scrollYOffset:0},u=i()(Object.assign({},o,s,{theme:e}),t),a=i()(Object.assign({},o,s,{theme:r}),t);return{options:n&&c?a:u,darkThemeOptions:a,lightThemeOptions:u}}),[n,c,l,t])}},3231:function(e,t,n){"use strict";n.r(t);var r=n(7378),o=n(5110),s=n(2035);t.default=function(){var e,t=(0,s.Z)("using-custom-page");return r.createElement(o.default,{layoutProps:{title:"Custom page for : "+(null==(e=t.spec.info)?void 0:e.title),description:"Example showcasing custom page"},specProps:t})}},9184:function(){},6016:function(){},3715:function(){},259:function(){},3421:function(){},8002:function(){},7622:function(){}}]);