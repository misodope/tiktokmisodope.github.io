import{S as F,i as J,s as G,L as Q,M as W,a as g,d,b as c,N as te,g as b,H as v,l as me,n as y,e as p,k as E,t as T,x as V,c as w,m as k,h as L,y as R,O as re,z as Y,r as A,p as S,C as j,o as pe,q as we,F as be,f as ie,w as De}from"../chunks/index-a73ffe39.js";import{b as ne}from"../chunks/paths-396f020f.js";const ae=parseFloat;function le(a,e=";"){let t;if(Array.isArray(a))t=a.filter(i=>i);else{t=[];for(const i in a)a[i]&&t.push(`${i}:${a[i]}`)}return t.join(e)}function Ne(a,e,t,i){let r,s;const l="1em";let o,f,m,_="-.125em";const n="visible";return i&&(m="center",s="1.25em"),t&&(r=t),e&&(e=="lg"?(f="1.33333em",o=".75em",_="-.225em"):e=="xs"?f=".75em":e=="sm"?f=".875em":f=e.replace("x","em")),le([le({float:r,width:s,height:l,"line-height":o,"font-size":f,"text-align":m,"vertical-align":_,"transform-origin":"center",overflow:n}),a])}function Oe(a,e,t,i,r,s=1,l="",o=""){let f=1,m=1;return r&&(r=="horizontal"?f=-1:r=="vertical"?m=-1:f=m=-1),le([`translate(${ae(e)*s}${l},${ae(t)*s}${l})`,`scale(${f*ae(a)},${m*ae(a)})`,i&&`rotate(${i}${o})`]," ")}function he(a){let e,t,i,r,s,l,o;function f(n,u){return typeof n[10][4]=="string"?ze:Pe}let m=f(a),_=m(a);return{c(){e=Q("svg"),t=Q("g"),i=Q("g"),_.c(),this.h()},l(n){e=W(n,"svg",{id:!0,class:!0,style:!0,viewBox:!0,"aria-hidden":!0,role:!0,xmlns:!0});var u=g(e);t=W(u,"g",{transform:!0,"transform-origin":!0});var C=g(t);i=W(C,"g",{transform:!0});var I=g(i);_.l(I),I.forEach(d),C.forEach(d),u.forEach(d),this.h()},h(){c(i,"transform",a[12]),c(t,"transform",r="translate("+a[10][0]/2+" "+a[10][1]/2+")"),c(t,"transform-origin",s=a[10][0]/4+" 0"),c(e,"id",a[1]),c(e,"class",l="svelte-fa "+a[0]+" svelte-1w3t65e"),c(e,"style",a[11]),c(e,"viewBox",o="0 0 "+a[10][0]+" "+a[10][1]),c(e,"aria-hidden","true"),c(e,"role","img"),c(e,"xmlns","http://www.w3.org/2000/svg"),te(e,"pulse",a[4]),te(e,"spin",a[3])},m(n,u){b(n,e,u),v(e,t),v(t,i),_.m(i,null)},p(n,u){m===(m=f(n))&&_?_.p(n,u):(_.d(1),_=m(n),_&&(_.c(),_.m(i,null))),u&4096&&c(i,"transform",n[12]),u&1024&&r!==(r="translate("+n[10][0]/2+" "+n[10][1]/2+")")&&c(t,"transform",r),u&1024&&s!==(s=n[10][0]/4+" 0")&&c(t,"transform-origin",s),u&2&&c(e,"id",n[1]),u&1&&l!==(l="svelte-fa "+n[0]+" svelte-1w3t65e")&&c(e,"class",l),u&2048&&c(e,"style",n[11]),u&1024&&o!==(o="0 0 "+n[10][0]+" "+n[10][1])&&c(e,"viewBox",o),u&17&&te(e,"pulse",n[4]),u&9&&te(e,"spin",n[3])},d(n){n&&d(e),_.d()}}}function Pe(a){let e,t,i,r,s,l,o,f,m,_;return{c(){e=Q("path"),l=Q("path"),this.h()},l(n){e=W(n,"path",{d:!0,fill:!0,"fill-opacity":!0,transform:!0}),g(e).forEach(d),l=W(n,"path",{d:!0,fill:!0,"fill-opacity":!0,transform:!0}),g(l).forEach(d),this.h()},h(){c(e,"d",t=a[10][4][0]),c(e,"fill",i=a[6]||a[2]||"currentColor"),c(e,"fill-opacity",r=a[9]!=!1?a[7]:a[8]),c(e,"transform",s="translate("+a[10][0]/-2+" "+a[10][1]/-2+")"),c(l,"d",o=a[10][4][1]),c(l,"fill",f=a[5]||a[2]||"currentColor"),c(l,"fill-opacity",m=a[9]!=!1?a[8]:a[7]),c(l,"transform",_="translate("+a[10][0]/-2+" "+a[10][1]/-2+")")},m(n,u){b(n,e,u),b(n,l,u)},p(n,u){u&1024&&t!==(t=n[10][4][0])&&c(e,"d",t),u&68&&i!==(i=n[6]||n[2]||"currentColor")&&c(e,"fill",i),u&896&&r!==(r=n[9]!=!1?n[7]:n[8])&&c(e,"fill-opacity",r),u&1024&&s!==(s="translate("+n[10][0]/-2+" "+n[10][1]/-2+")")&&c(e,"transform",s),u&1024&&o!==(o=n[10][4][1])&&c(l,"d",o),u&36&&f!==(f=n[5]||n[2]||"currentColor")&&c(l,"fill",f),u&896&&m!==(m=n[9]!=!1?n[8]:n[7])&&c(l,"fill-opacity",m),u&1024&&_!==(_="translate("+n[10][0]/-2+" "+n[10][1]/-2+")")&&c(l,"transform",_)},d(n){n&&d(e),n&&d(l)}}}function ze(a){let e,t,i,r;return{c(){e=Q("path"),this.h()},l(s){e=W(s,"path",{d:!0,fill:!0,transform:!0}),g(e).forEach(d),this.h()},h(){c(e,"d",t=a[10][4]),c(e,"fill",i=a[2]||a[5]||"currentColor"),c(e,"transform",r="translate("+a[10][0]/-2+" "+a[10][1]/-2+")")},m(s,l){b(s,e,l)},p(s,l){l&1024&&t!==(t=s[10][4])&&c(e,"d",t),l&36&&i!==(i=s[2]||s[5]||"currentColor")&&c(e,"fill",i),l&1024&&r!==(r="translate("+s[10][0]/-2+" "+s[10][1]/-2+")")&&c(e,"transform",r)},d(s){s&&d(e)}}}function Me(a){let e,t=a[10][4]&&he(a);return{c(){t&&t.c(),e=me()},l(i){t&&t.l(i),e=me()},m(i,r){t&&t.m(i,r),b(i,e,r)},p(i,[r]){i[10][4]?t?t.p(i,r):(t=he(i),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:y,o:y,d(i){t&&t.d(i),i&&d(e)}}}function Te(a,e,t){let{class:i=""}=e,{id:r=""}=e,{style:s=""}=e,{icon:l}=e,{size:o=""}=e,{color:f=""}=e,{fw:m=!1}=e,{pull:_=""}=e,{scale:n=1}=e,{translateX:u=0}=e,{translateY:C=0}=e,{rotate:I=""}=e,{flip:H=!1}=e,{spin:D=!1}=e,{pulse:z=!1}=e,{primaryColor:B=""}=e,{secondaryColor:U=""}=e,{primaryOpacity:N=1}=e,{secondaryOpacity:O=.4}=e,{swapOpacity:X=!1}=e,P,K,q;return a.$$set=h=>{"class"in h&&t(0,i=h.class),"id"in h&&t(1,r=h.id),"style"in h&&t(13,s=h.style),"icon"in h&&t(14,l=h.icon),"size"in h&&t(15,o=h.size),"color"in h&&t(2,f=h.color),"fw"in h&&t(16,m=h.fw),"pull"in h&&t(17,_=h.pull),"scale"in h&&t(18,n=h.scale),"translateX"in h&&t(19,u=h.translateX),"translateY"in h&&t(20,C=h.translateY),"rotate"in h&&t(21,I=h.rotate),"flip"in h&&t(22,H=h.flip),"spin"in h&&t(3,D=h.spin),"pulse"in h&&t(4,z=h.pulse),"primaryColor"in h&&t(5,B=h.primaryColor),"secondaryColor"in h&&t(6,U=h.secondaryColor),"primaryOpacity"in h&&t(7,N=h.primaryOpacity),"secondaryOpacity"in h&&t(8,O=h.secondaryOpacity),"swapOpacity"in h&&t(9,X=h.swapOpacity)},a.$$.update=()=>{a.$$.dirty&16384&&t(10,P=l&&l.icon||[0,0,"",[],""]),a.$$.dirty&237568&&t(11,K=Ne(s,o,_,m)),a.$$.dirty&8126464&&t(12,q=Oe(n,u,C,I,H,512))},[i,r,f,D,z,B,U,N,O,X,P,K,q,s,l,o,m,_,n,u,C,I,H]}class ye extends F{constructor(e){super(),J(this,e,Te,Me,G,{class:0,id:1,style:13,icon:14,size:15,color:2,fw:16,pull:17,scale:18,translateX:19,translateY:20,rotate:21,flip:22,spin:3,pulse:4,primaryColor:5,secondaryColor:6,primaryOpacity:7,secondaryOpacity:8,swapOpacity:9})}}var Ee={};(function(a){Object.defineProperty(a,"__esModule",{value:!0});var e="fas",t="envelope",i=512,r=512,s=[128386,61443,9993],l="f0e0",o="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z";a.definition={prefix:e,iconName:t,icon:[i,r,s,l,o]},a.faEnvelope=a.definition,a.prefix=e,a.iconName=t,a.width=i,a.height=r,a.ligatures=s,a.unicode=l,a.svgPathData=o,a.aliases=s})(Ee);function Ve(a){let e,t,i,r,s,l,o,f,m,_,n,u,C,I,H,D,z,B,U,N,O,X,P,K,q;return O=new ye({props:{icon:Ee.faEnvelope,class:"mx-2 text-base"}}),{c(){e=p("div"),t=p("div"),i=p("img"),s=E(),l=p("p"),o=T("@MisoDope"),f=E(),m=p("div"),_=p("p"),n=T("Digital Creator"),u=E(),C=p("p"),I=T("Full Stack Engineer"),H=E(),D=p("div"),z=p("p"),B=T("E-mail for all business inquiries"),U=E(),N=p("div"),V(O.$$.fragment),X=E(),P=p("p"),K=T("jerry@misodope.com"),this.h()},l(h){e=w(h,"DIV",{class:!0});var Z=g(e);t=w(Z,"DIV",{class:!0});var M=g(t);i=w(M,"IMG",{class:!0,src:!0,alt:!0}),s=k(M),l=w(M,"P",{class:!0});var se=g(l);o=L(se,"@MisoDope"),se.forEach(d),f=k(M),m=w(M,"DIV",{class:!0});var x=g(m);_=w(x,"P",{});var oe=g(_);n=L(oe,"Digital Creator"),oe.forEach(d),u=k(x),C=w(x,"P",{});var fe=g(C);I=L(fe,"Full Stack Engineer"),fe.forEach(d),x.forEach(d),H=k(M),D=w(M,"DIV",{class:!0});var $=g(D);z=w($,"P",{});var ce=g(z);B=L(ce,"E-mail for all business inquiries"),ce.forEach(d),U=k($),N=w($,"DIV",{class:!0});var ee=g(N);R(O.$$.fragment,ee),X=k(ee),P=w(ee,"P",{class:!0});var ue=g(P);K=L(ue,"jerry@misodope.com"),ue.forEach(d),ee.forEach(d),$.forEach(d),M.forEach(d),Z.forEach(d),this.h()},h(){c(i,"class","w-32 h-32 mb-5"),re(i.src,r=ne+"/Head2022.png")||c(i,"src",r),c(i,"alt","profile"),c(l,"class","text-xl tracking-wider flex justify-center items-center"),c(m,"class","text-sm flex flex-col items-center"),c(P,"class","font-bold"),c(N,"class","flex items-center"),c(D,"class","flex flex-col items-center text-sm my-4"),c(t,"class","flex flex-col items-center"),c(e,"class","flex flex-col items-center justify-center mt-8")},m(h,Z){b(h,e,Z),v(e,t),v(t,i),v(t,s),v(t,l),v(l,o),v(t,f),v(t,m),v(m,_),v(_,n),v(m,u),v(m,C),v(C,I),v(t,H),v(t,D),v(D,z),v(z,B),v(D,U),v(D,N),Y(O,N,null),v(N,X),v(N,P),v(P,K),q=!0},p:y,i(h){q||(A(O.$$.fragment,h),q=!0)},o(h){S(O.$$.fragment,h),q=!1},d(h){h&&d(e),j(O)}}}class Le extends F{constructor(e){super(),J(this,e,null,Ve,G,{})}}var ke={};(function(a){Object.defineProperty(a,"__esModule",{value:!0});var e="fab",t="tiktok",i=448,r=512,s=[],l="e07b",o="M448 209.9a210.1 210.1 0 0 1 -122.8-39.25V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.62 74.62 0 1 0 52.23 71.18V0l88 0a121.2 121.2 0 0 0 1.86 22.17h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.14z";a.definition={prefix:e,iconName:t,icon:[i,r,s,l,o]},a.faTiktok=a.definition,a.prefix=e,a.iconName=t,a.width=i,a.height=r,a.ligatures=s,a.unicode=l,a.svgPathData=o,a.aliases=s})(ke);var Ce={};(function(a){Object.defineProperty(a,"__esModule",{value:!0});var e="fab",t="youtube",i=576,r=512,s=[61802],l="f167",o="M549.7 124.1c-6.281-23.65-24.79-42.28-48.28-48.6C458.8 64 288 64 288 64S117.2 64 74.63 75.49c-23.5 6.322-42 24.95-48.28 48.6-11.41 42.87-11.41 132.3-11.41 132.3s0 89.44 11.41 132.3c6.281 23.65 24.79 41.5 48.28 47.82C117.2 448 288 448 288 448s170.8 0 213.4-11.49c23.5-6.321 42-24.17 48.28-47.82 11.41-42.87 11.41-132.3 11.41-132.3s0-89.44-11.41-132.3zm-317.5 213.5V175.2l142.7 81.21-142.7 81.2z";a.definition={prefix:e,iconName:t,icon:[i,r,s,l,o]},a.faYoutube=a.definition,a.prefix=e,a.iconName=t,a.width=i,a.height=r,a.ligatures=s,a.unicode=l,a.svgPathData=o,a.aliases=s})(Ce);var Ae={};(function(a){Object.defineProperty(a,"__esModule",{value:!0});var e="fab",t="discord",i=640,r=512,s=[],l="f392",o="M524.5 69.84a1.5 1.5 0 0 0 -.764-.7A485.1 485.1 0 0 0 404.1 32.03a1.816 1.816 0 0 0 -1.923 .91 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.14-30.6 1.89 1.89 0 0 0 -1.924-.91A483.7 483.7 0 0 0 116.1 69.14a1.712 1.712 0 0 0 -.788 .676C39.07 183.7 18.19 294.7 28.43 404.4a2.016 2.016 0 0 0 .765 1.375A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.063-.676A348.2 348.2 0 0 0 208.1 430.4a1.86 1.86 0 0 0 -1.019-2.588 321.2 321.2 0 0 1 -45.87-21.85 1.885 1.885 0 0 1 -.185-3.126c3.082-2.309 6.166-4.711 9.109-7.137a1.819 1.819 0 0 1 1.9-.256c96.23 43.92 200.4 43.92 295.5 0a1.812 1.812 0 0 1 1.924 .233c2.944 2.426 6.027 4.851 9.132 7.16a1.884 1.884 0 0 1 -.162 3.126 301.4 301.4 0 0 1 -45.89 21.83 1.875 1.875 0 0 0 -1 2.611 391.1 391.1 0 0 0 30.01 48.81 1.864 1.864 0 0 0 2.063 .7A486 486 0 0 0 610.7 405.7a1.882 1.882 0 0 0 .765-1.352C623.7 277.6 590.9 167.5 524.5 69.84zM222.5 337.6c-28.97 0-52.84-26.59-52.84-59.24S193.1 219.1 222.5 219.1c29.67 0 53.31 26.82 52.84 59.24C275.3 310.1 251.9 337.6 222.5 337.6zm195.4 0c-28.97 0-52.84-26.59-52.84-59.24S388.4 219.1 417.9 219.1c29.67 0 53.31 26.82 52.84 59.24C470.7 310.1 447.5 337.6 417.9 337.6z";a.definition={prefix:e,iconName:t,icon:[i,r,s,l,o]},a.faDiscord=a.definition,a.prefix=e,a.iconName=t,a.width=i,a.height=r,a.ligatures=s,a.unicode=l,a.svgPathData=o,a.aliases=s})(Ae);var Ie={};(function(a){Object.defineProperty(a,"__esModule",{value:!0});var e="fab",t="github",i=496,r=512,s=[],l="f09b",o="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z";a.definition={prefix:e,iconName:t,icon:[i,r,s,l,o]},a.faGithub=a.definition,a.prefix=e,a.iconName=t,a.width=i,a.height=r,a.ligatures=s,a.unicode=l,a.svgPathData=o,a.aliases=s})(Ie);var Se={};(function(a){Object.defineProperty(a,"__esModule",{value:!0});var e="fab",t="instagram",i=448,r=512,s=[],l="f16d",o="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z";a.definition={prefix:e,iconName:t,icon:[i,r,s,l,o]},a.faInstagram=a.definition,a.prefix=e,a.iconName=t,a.width=i,a.height=r,a.ligatures=s,a.unicode=l,a.svgPathData=o,a.aliases=s})(Se);function _e(a,e,t){const i=a.slice();return i[1]=e[t].icon,i[2]=e[t].link,i}function de(a){let e,t,i,r,s;return t=new ye({props:{icon:a[1],class:"!h-10 !w-10"}}),{c(){e=p("a"),V(t.$$.fragment),i=E(),this.h()},l(l){e=w(l,"A",{href:!0,class:!0});var o=g(e);R(t.$$.fragment,o),i=k(o),o.forEach(d),this.h()},h(){c(e,"href",r=a[2]),c(e,"class","mx-3")},m(l,o){b(l,e,o),Y(t,e,null),v(e,i),s=!0},p:y,i(l){s||(A(t.$$.fragment,l),s=!0)},o(l){S(t.$$.fragment,l),s=!1},d(l){l&&d(e),j(t)}}}function Re(a){let e,t,i=a[0],r=[];for(let l=0;l<i.length;l+=1)r[l]=de(_e(a,i,l));const s=l=>S(r[l],1,1,()=>{r[l]=null});return{c(){e=p("div");for(let l=0;l<r.length;l+=1)r[l].c();this.h()},l(l){e=w(l,"DIV",{class:!0});var o=g(e);for(let f=0;f<r.length;f+=1)r[f].l(o);o.forEach(d),this.h()},h(){c(e,"class","flex justify-center items-center mb-6 mt-2")},m(l,o){b(l,e,o);for(let f=0;f<r.length;f+=1)r[f].m(e,null);t=!0},p(l,[o]){if(o&1){i=l[0];let f;for(f=0;f<i.length;f+=1){const m=_e(l,i,f);r[f]?(r[f].p(m,o),A(r[f],1)):(r[f]=de(m),r[f].c(),A(r[f],1),r[f].m(e,null))}for(pe(),f=i.length;f<r.length;f+=1)s(f);we()}},i(l){if(!t){for(let o=0;o<i.length;o+=1)A(r[o]);t=!0}},o(l){r=r.filter(Boolean);for(let o=0;o<r.length;o+=1)S(r[o]);t=!1},d(l){l&&d(e),be(r,l)}}}function Ye(a){return[[{icon:ke.faTiktok,link:"https://www.tiktok.com/@misodope/"},{icon:Se.faInstagram,link:"https://www.instagram.com/miso.dope/"},{icon:Ce.faYoutube,link:"https://www.youtube.com/misodope/"},{icon:Ie.faGithub,link:"https://github.com/misodope"},{icon:Ae.faDiscord,link:"https://discord.gg/2FS5rsM"}]]}class je extends F{constructor(e){super(),J(this,e,Ye,Re,G,{})}}function ve(a,e,t){const i=a.slice();return i[1]=e[t],i}function ge(a){let e,t,i,r,s,l,o=a[1].title+"",f,m,_;return{c(){e=p("a"),t=p("img"),l=E(),f=T(o),m=E(),this.h()},l(n){e=w(n,"A",{class:!0,href:!0});var u=g(e);t=w(u,"IMG",{src:!0,class:!0,alt:!0}),l=k(u),f=L(u,o),m=k(u),u.forEach(d),this.h()},h(){var n;re(t.src,i=ne+a[1].icon)||c(t,"src",i),c(t,"class",r=`rounded-full mr-5 w-8 h-8 ${(n=a[1].className)!=null?n:""}`),c(t,"alt",s=a[1].icon),c(e,"class","transition-colors duration-500 flex items-center p-2.5 my-2.5 rounded-md cursor-pointer text-left bg-amber-300 text-black hover:text-amber-300 hover:bg-black"),c(e,"href",_=a[1].url)},m(n,u){b(n,e,u),v(e,t),v(e,l),v(e,f),v(e,m)},p:y,d(n){n&&d(e)}}}function Fe(a){let e,t=a[0],i=[];for(let r=0;r<t.length;r+=1)i[r]=ge(ve(a,t,r));return{c(){e=p("div");for(let r=0;r<i.length;r+=1)i[r].c();this.h()},l(r){e=w(r,"DIV",{class:!0});var s=g(e);for(let l=0;l<i.length;l+=1)i[l].l(s);s.forEach(d),this.h()},h(){c(e,"class","flex flex-col w-full md:w-[450px] lg:w-[450px] text-sm")},m(r,s){b(r,e,s);for(let l=0;l<i.length;l+=1)i[l].m(e,null)},p(r,[s]){if(s&1){t=r[0];let l;for(l=0;l<t.length;l+=1){const o=ve(r,t,l);i[l]?i[l].p(o,s):(i[l]=ge(o),i[l].c(),i[l].m(e,null))}for(;l<i.length;l+=1)i[l].d(1);i.length=t.length}},i:y,o:y,d(r){r&&d(e),be(i,r)}}}function Je(a){return[[{icon:"/aws.png",title:"Amazon Web Services - Architecture Center",url:"https://viraln.link/JC_AWS_TT2",className:"w-10 h-10 mr-2"},{icon:"/aws.png",title:"Amazon Web Services - Observability",url:"https://viraln.link/JC_AWS_TT1",className:"w-10 h-10 mr-2"},{icon:"/Blind.png",title:"Download Blind - An open space for professionals to talk about ANYTHING",url:"https://teamblind.onelink.me/enIS/misodope"},{icon:"/ReplitLogo.png",title:"Try Replit the best free online code editor",link:"https://repl.it/@misodope/"},{icon:"/excellogo.jpeg",title:"Job Search Template",url:"https://docs.google.com/spreadsheets/d/1ipEvKRYzXIS3ERa9FE5Iw7appsNLAfJpelDEE4r9nus"}]]}class Ge extends F{constructor(e){super(),J(this,e,Je,Fe,G,{})}}function He(a){let e,t,i,r,s,l;return{c(){e=p("footer"),t=p("img"),r=E(),s=p("div"),l=T("Code, Careers, Cringe."),this.h()},l(o){e=w(o,"FOOTER",{class:!0});var f=g(e);t=w(f,"IMG",{class:!0,src:!0,alt:!0}),r=k(f),s=w(f,"DIV",{class:!0});var m=g(s);l=L(m,"Code, Careers, Cringe."),m.forEach(d),f.forEach(d),this.h()},h(){c(t,"class","w-12 h-12"),re(t.src,i=ne+"/misodopeLogo.png")||c(t,"src",i),c(t,"alt","logo"),c(s,"class","text-amber-300 text-sm tracking-wider"),c(e,"class","p-5 flex items-center justify-center")},m(o,f){b(o,e,f),v(e,t),v(e,r),v(e,s),v(s,l)},p:y,i:y,o:y,d(o){o&&d(e)}}}class qe extends F{constructor(e){super(),J(this,e,null,He,G,{})}}function Be(a){let e;return{c(){e=p("div"),this.h()},l(t){e=w(t,"DIV",{class:!0,style:!0}),g(e).forEach(d),this.h()},h(){c(e,"class","circle svelte-10roc01"),ie(e,"--size",Qe+Xe),ie(e,"--color",Ue),ie(e,"--duration",Ke)},m(t,i){b(t,e,i)},p:y,i:y,o:y,d(t){t&&d(e)}}}const Ue="#000",Xe="px",Ke="0.75s",Qe="50";class We extends F{constructor(e){super(),J(this,e,null,Be,G,{})}}function Ze(a){let e,t,i,r;return{c(){e=p("p"),t=T("Enter to win Jackpot - $1 to play!"),i=E(),r=p("div"),this.h()},l(s){e=w(s,"P",{class:!0});var l=g(e);t=L(l,"Enter to win Jackpot - $1 to play!"),l.forEach(d),i=k(s),r=w(s,"DIV",{id:!0}),g(r).forEach(d),this.h()},h(){c(e,"class","text-black text-base font-bold mb-[10px]"),c(r,"id","cash-app-pay")},m(s,l){b(s,e,l),v(e,t),b(s,i,l),b(s,r,l)},i:y,o:y,d(s){s&&d(e),s&&d(i),s&&d(r)}}}function xe(a){let e,t;return e=new We({}),{c(){V(e.$$.fragment)},l(i){R(e.$$.fragment,i)},m(i,r){Y(e,i,r),t=!0},i(i){t||(A(e.$$.fragment,i),t=!0)},o(i){S(e.$$.fragment,i),t=!1},d(i){j(e,i)}}}function $e(a){let e,t,i,r;const s=[xe,Ze],l=[];function o(f,m){return f[0]?0:1}return t=o(a),i=l[t]=s[t](a),{c(){e=p("div"),i.c(),this.h()},l(f){e=w(f,"DIV",{class:!0});var m=g(e);i.l(m),m.forEach(d),this.h()},h(){c(e,"class","flex flex-col items-center w-full md:w-[450px] lg:w-[450px] text-sm p-2.5 my-2.5 rounded-md text-left bg-amber-300 text-black")},m(f,m){b(f,e,m),l[t].m(e,null),r=!0},p(f,[m]){let _=t;t=o(f),t!==_&&(pe(),S(l[_],1,1,()=>{l[_]=null}),we(),i=l[t],i||(i=l[t]=s[t](f),i.c()),A(i,1),i.m(e,null))},i(f){r||(A(i),r=!0)},o(f){S(i),r=!1},d(f){f&&d(e),l[t].d()}}}function et(a,e,t){console.log({VITE_SVELTEKIT_APP_VERSION:"1659065885583",VITE_SVELTEKIT_APP_VERSION_FILE:"_app/version.json",VITE_SVELTEKIT_APP_VERSION_POLL_INTERVAL:"0",VITE_SQUARE_SANDBOX_APP_ID:"sandbox-sq0idb-XFLt2H0LlG1dels5ZgE0IQ",VITE_SQUARE_SANDBOX_ACCESS_TOKEN:"EAAAEAn91T6LrsGtPSyU-kdIJAjk9h-gviWEHHrxoJboGf-JVMp0Ri93abnGm936",VITE_SQUARE_LOCATION_ID:"L85N31DNS0ECT",VITE_SQUARE_P_LOCATION_ID:"JZY0DSKZMNQXR",VITE_SQUARE_P_APP_ID:"sq0idp-9OoZj_GY78sY86McFNHuWA",VITE_SQUARE_P_ACCESS_TOKEN:"EAAAEFOBRFsUzmo7Ke_mwTCu0o7JQRnrqJw15JgcOFyyOrEOdGBjId3H5WCPN_JY",BASE_URL:"/_app/immutable/",MODE:"production",DEV:!1,PROD:!0});const i="sq0idp-9OoZj_GY78sY86McFNHuWA",r="JZY0DSKZMNQXR";let s=!0;const l=()=>{const o=window.Square.payments(i,r),f=o.paymentRequest({countryCode:"US",currencyCode:"USD",total:{amount:"1.00",label:"Total"}}),m={redirectURL:window.location.href,referenceId:"misodope-cash-app-pay"};o.cashAppPay(f,m).then(_=>(_.addEventListener("ontokenization",n=>{const{tokenResult:u}=n.detail;if(u.status==="OK"){const I=u.token;console.log("When does this happen",I)}}),t(0,s=!1),_)).then(_=>(_.attach("#cash-app-pay"),_))};return De(()=>{l()}),[s]}class tt extends F{constructor(e){super(),J(this,e,et,$e,G,{})}}function at(a){let e,t,i,r,s,l,o,f,m,_;return e=new Le({}),i=new je({}),s=new tt({}),o=new Ge({}),m=new qe({}),{c(){V(e.$$.fragment),t=E(),V(i.$$.fragment),r=E(),V(s.$$.fragment),l=E(),V(o.$$.fragment),f=E(),V(m.$$.fragment)},l(n){R(e.$$.fragment,n),t=k(n),R(i.$$.fragment,n),r=k(n),R(s.$$.fragment,n),l=k(n),R(o.$$.fragment,n),f=k(n),R(m.$$.fragment,n)},m(n,u){Y(e,n,u),b(n,t,u),Y(i,n,u),b(n,r,u),Y(s,n,u),b(n,l,u),Y(o,n,u),b(n,f,u),Y(m,n,u),_=!0},p:y,i(n){_||(A(e.$$.fragment,n),A(i.$$.fragment,n),A(s.$$.fragment,n),A(o.$$.fragment,n),A(m.$$.fragment,n),_=!0)},o(n){S(e.$$.fragment,n),S(i.$$.fragment,n),S(s.$$.fragment,n),S(o.$$.fragment,n),S(m.$$.fragment,n),_=!1},d(n){j(e,n),n&&d(t),j(i,n),n&&d(r),j(s,n),n&&d(l),j(o,n),n&&d(f),j(m,n)}}}class rt extends F{constructor(e){super(),J(this,e,null,at,G,{})}}export{rt as default};
