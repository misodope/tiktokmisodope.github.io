import{S as K,i as Z,s as Q,K as q,L as W,a as _,d as g,b as u,M as te,g as y,J as v,l as ue,n as D,e as w,k as b,t as T,x as G,c as p,m as k,h as F,y as H,N as le,z as J,r as O,p as I,C as X,o as ze,q as De,O as _e}from"../chunks/index-f0a7086e.js";import{b as ne}from"../chunks/paths-396f020f.js";const ie=parseFloat;function ae(t,e=";"){let i;if(Array.isArray(t))i=t.filter(l=>l);else{i=[];for(const l in t)t[l]&&i.push(`${l}:${t[l]}`)}return i.join(e)}function Me(t,e,i,l){let n,r;const a="1em";let s,c,f,d="-.125em";const o="visible";return l&&(f="center",r="1.25em"),i&&(n=i),e&&(e=="lg"?(c="1.33333em",s=".75em",d="-.225em"):e=="xs"?c=".75em":e=="sm"?c=".875em":c=e.replace("x","em")),ae([ae({float:n,width:r,height:a,"line-height":s,"font-size":c,"text-align":f,"vertical-align":d,"transform-origin":"center",overflow:o}),t])}function Ne(t,e,i,l,n,r=1,a="",s=""){let c=1,f=1;return n&&(n=="horizontal"?c=-1:n=="vertical"?f=-1:c=f=-1),ae([`translate(${ie(e)*r}${a},${ie(i)*r}${a})`,`scale(${c*ie(t)},${f*ie(t)})`,l&&`rotate(${l}${s})`]," ")}function me(t){let e,i,l,n,r,a,s;function c(o,h){return typeof o[10][4]=="string"?Oe:Ae}let f=c(t),d=f(t);return{c(){e=q("svg"),i=q("g"),l=q("g"),d.c(),this.h()},l(o){e=W(o,"svg",{id:!0,class:!0,style:!0,viewBox:!0,"aria-hidden":!0,role:!0,xmlns:!0});var h=_(e);i=W(h,"g",{transform:!0,"transform-origin":!0});var C=_(i);l=W(C,"g",{transform:!0});var M=_(l);d.l(M),M.forEach(g),C.forEach(g),h.forEach(g),this.h()},h(){u(l,"transform",t[12]),u(i,"transform",n="translate("+t[10][0]/2+" "+t[10][1]/2+")"),u(i,"transform-origin",r=t[10][0]/4+" 0"),u(e,"id",t[1]),u(e,"class",a="svelte-fa "+t[0]+" svelte-1w3t65e"),u(e,"style",t[11]),u(e,"viewBox",s="0 0 "+t[10][0]+" "+t[10][1]),u(e,"aria-hidden","true"),u(e,"role","img"),u(e,"xmlns","http://www.w3.org/2000/svg"),te(e,"pulse",t[4]),te(e,"spin",t[3])},m(o,h){y(o,e,h),v(e,i),v(i,l),d.m(l,null)},p(o,h){f===(f=c(o))&&d?d.p(o,h):(d.d(1),d=f(o),d&&(d.c(),d.m(l,null))),h&4096&&u(l,"transform",o[12]),h&1024&&n!==(n="translate("+o[10][0]/2+" "+o[10][1]/2+")")&&u(i,"transform",n),h&1024&&r!==(r=o[10][0]/4+" 0")&&u(i,"transform-origin",r),h&2&&u(e,"id",o[1]),h&1&&a!==(a="svelte-fa "+o[0]+" svelte-1w3t65e")&&u(e,"class",a),h&2048&&u(e,"style",o[11]),h&1024&&s!==(s="0 0 "+o[10][0]+" "+o[10][1])&&u(e,"viewBox",s),h&17&&te(e,"pulse",o[4]),h&9&&te(e,"spin",o[3])},d(o){o&&g(e),d.d()}}}function Ae(t){let e,i,l,n,r,a,s,c,f,d;return{c(){e=q("path"),a=q("path"),this.h()},l(o){e=W(o,"path",{d:!0,fill:!0,"fill-opacity":!0,transform:!0}),_(e).forEach(g),a=W(o,"path",{d:!0,fill:!0,"fill-opacity":!0,transform:!0}),_(a).forEach(g),this.h()},h(){u(e,"d",i=t[10][4][0]),u(e,"fill",l=t[6]||t[2]||"currentColor"),u(e,"fill-opacity",n=t[9]!=!1?t[7]:t[8]),u(e,"transform",r="translate("+t[10][0]/-2+" "+t[10][1]/-2+")"),u(a,"d",s=t[10][4][1]),u(a,"fill",c=t[5]||t[2]||"currentColor"),u(a,"fill-opacity",f=t[9]!=!1?t[8]:t[7]),u(a,"transform",d="translate("+t[10][0]/-2+" "+t[10][1]/-2+")")},m(o,h){y(o,e,h),y(o,a,h)},p(o,h){h&1024&&i!==(i=o[10][4][0])&&u(e,"d",i),h&68&&l!==(l=o[6]||o[2]||"currentColor")&&u(e,"fill",l),h&896&&n!==(n=o[9]!=!1?o[7]:o[8])&&u(e,"fill-opacity",n),h&1024&&r!==(r="translate("+o[10][0]/-2+" "+o[10][1]/-2+")")&&u(e,"transform",r),h&1024&&s!==(s=o[10][4][1])&&u(a,"d",s),h&36&&c!==(c=o[5]||o[2]||"currentColor")&&u(a,"fill",c),h&896&&f!==(f=o[9]!=!1?o[8]:o[7])&&u(a,"fill-opacity",f),h&1024&&d!==(d="translate("+o[10][0]/-2+" "+o[10][1]/-2+")")&&u(a,"transform",d)},d(o){o&&g(e),o&&g(a)}}}function Oe(t){let e,i,l,n;return{c(){e=q("path"),this.h()},l(r){e=W(r,"path",{d:!0,fill:!0,transform:!0}),_(e).forEach(g),this.h()},h(){u(e,"d",i=t[10][4]),u(e,"fill",l=t[2]||t[5]||"currentColor"),u(e,"transform",n="translate("+t[10][0]/-2+" "+t[10][1]/-2+")")},m(r,a){y(r,e,a)},p(r,a){a&1024&&i!==(i=r[10][4])&&u(e,"d",i),a&36&&l!==(l=r[2]||r[5]||"currentColor")&&u(e,"fill",l),a&1024&&n!==(n="translate("+r[10][0]/-2+" "+r[10][1]/-2+")")&&u(e,"transform",n)},d(r){r&&g(e)}}}function Pe(t){let e,i=t[10][4]&&me(t);return{c(){i&&i.c(),e=ue()},l(l){i&&i.l(l),e=ue()},m(l,n){i&&i.m(l,n),y(l,e,n)},p(l,[n]){l[10][4]?i?i.p(l,n):(i=me(l),i.c(),i.m(e.parentNode,e)):i&&(i.d(1),i=null)},i:D,o:D,d(l){i&&i.d(l),l&&g(e)}}}function Se(t,e,i){let{class:l=""}=e,{id:n=""}=e,{style:r=""}=e,{icon:a}=e,{size:s=""}=e,{color:c=""}=e,{fw:f=!1}=e,{pull:d=""}=e,{scale:o=1}=e,{translateX:h=0}=e,{translateY:C=0}=e,{rotate:M=""}=e,{flip:V=!1}=e,{spin:E=!1}=e,{pulse:P=!1}=e,{primaryColor:Y=""}=e,{secondaryColor:L=""}=e,{primaryOpacity:z=1}=e,{secondaryOpacity:N=.4}=e,{swapOpacity:R=!1}=e,A,B,j;return t.$$set=m=>{"class"in m&&i(0,l=m.class),"id"in m&&i(1,n=m.id),"style"in m&&i(13,r=m.style),"icon"in m&&i(14,a=m.icon),"size"in m&&i(15,s=m.size),"color"in m&&i(2,c=m.color),"fw"in m&&i(16,f=m.fw),"pull"in m&&i(17,d=m.pull),"scale"in m&&i(18,o=m.scale),"translateX"in m&&i(19,h=m.translateX),"translateY"in m&&i(20,C=m.translateY),"rotate"in m&&i(21,M=m.rotate),"flip"in m&&i(22,V=m.flip),"spin"in m&&i(3,E=m.spin),"pulse"in m&&i(4,P=m.pulse),"primaryColor"in m&&i(5,Y=m.primaryColor),"secondaryColor"in m&&i(6,L=m.secondaryColor),"primaryOpacity"in m&&i(7,z=m.primaryOpacity),"secondaryOpacity"in m&&i(8,N=m.secondaryOpacity),"swapOpacity"in m&&i(9,R=m.swapOpacity)},t.$$.update=()=>{t.$$.dirty&16384&&i(10,A=a&&a.icon||[0,0,"",[],""]),t.$$.dirty&237568&&i(11,B=Me(r,s,d,f)),t.$$.dirty&8126464&&i(12,j=Ne(o,h,C,M,V,512))},[l,n,c,E,P,Y,L,z,N,R,A,B,j,r,a,s,f,d,o,h,C,M,V]}class we extends K{constructor(e){super(),Z(this,e,Se,Pe,Q,{class:0,id:1,style:13,icon:14,size:15,color:2,fw:16,pull:17,scale:18,translateX:19,translateY:20,rotate:21,flip:22,spin:3,pulse:4,primaryColor:5,secondaryColor:6,primaryOpacity:7,secondaryOpacity:8,swapOpacity:9})}}var pe={};(function(t){Object.defineProperty(t,"__esModule",{value:!0});var e="fas",i="envelope",l=512,n=512,r=[128386,61443,9993],a="f0e0",s="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z";t.definition={prefix:e,iconName:i,icon:[l,n,r,a,s]},t.faEnvelope=t.definition,t.prefix=e,t.iconName=i,t.width=l,t.height=n,t.ligatures=r,t.unicode=a,t.svgPathData=s,t.aliases=r})(pe);function Ie(t){let e,i,l,n,r,a,s,c,f,d,o,h,C,M,V,E,P,Y,L,z,N,R,A,B,j;return N=new we({props:{icon:pe.faEnvelope,class:"mx-2 text-base"}}),{c(){e=w("div"),i=w("div"),l=w("img"),r=b(),a=w("p"),s=T("@MisoDope"),c=b(),f=w("div"),d=w("p"),o=T("Digital Creator"),h=b(),C=w("p"),M=T("Full Stack Engineer"),V=b(),E=w("div"),P=w("p"),Y=T("E-mail for all business inquiries"),L=b(),z=w("div"),G(N.$$.fragment),R=b(),A=w("p"),B=T("jerry@misodope.com"),this.h()},l(m){e=p(m,"DIV",{class:!0});var U=_(e);i=p(U,"DIV",{class:!0});var S=_(i);l=p(S,"IMG",{class:!0,src:!0,alt:!0}),r=k(S),a=p(S,"P",{class:!0});var re=_(a);s=F(re,"@MisoDope"),re.forEach(g),c=k(S),f=p(S,"DIV",{class:!0});var x=_(f);d=p(x,"P",{});var se=_(d);o=F(se,"Digital Creator"),se.forEach(g),h=k(x),C=p(x,"P",{});var fe=_(C);M=F(fe,"Full Stack Engineer"),fe.forEach(g),x.forEach(g),V=k(S),E=p(S,"DIV",{class:!0});var $=_(E);P=p($,"P",{});var oe=_(P);Y=F(oe,"E-mail for all business inquiries"),oe.forEach(g),L=k($),z=p($,"DIV",{class:!0});var ee=_(z);H(N.$$.fragment,ee),R=k(ee),A=p(ee,"P",{class:!0});var ce=_(A);B=F(ce,"jerry@misodope.com"),ce.forEach(g),ee.forEach(g),$.forEach(g),S.forEach(g),U.forEach(g),this.h()},h(){u(l,"class","w-32 h-32 mb-5"),le(l.src,n=ne+"/Head2022.png")||u(l,"src",n),u(l,"alt","profile"),u(a,"class","text-xl tracking-wider flex justify-center items-center"),u(f,"class","text-sm flex flex-col items-center"),u(A,"class","font-bold"),u(z,"class","flex items-center"),u(E,"class","flex flex-col items-center text-sm my-4"),u(i,"class","flex flex-col items-center"),u(e,"class","flex flex-col items-center justify-center mt-8")},m(m,U){y(m,e,U),v(e,i),v(i,l),v(i,r),v(i,a),v(a,s),v(i,c),v(i,f),v(f,d),v(d,o),v(f,h),v(f,C),v(C,M),v(i,V),v(i,E),v(E,P),v(P,Y),v(E,L),v(E,z),J(N,z,null),v(z,R),v(z,A),v(A,B),j=!0},p:D,i(m){j||(O(N.$$.fragment,m),j=!0)},o(m){I(N.$$.fragment,m),j=!1},d(m){m&&g(e),X(N)}}}class Ve extends K{constructor(e){super(),Z(this,e,null,Ie,Q,{})}}var ye={};(function(t){Object.defineProperty(t,"__esModule",{value:!0});var e="fab",i="tiktok",l=448,n=512,r=[],a="e07b",s="M448 209.9a210.1 210.1 0 0 1 -122.8-39.25V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.62 74.62 0 1 0 52.23 71.18V0l88 0a121.2 121.2 0 0 0 1.86 22.17h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.14z";t.definition={prefix:e,iconName:i,icon:[l,n,r,a,s]},t.faTiktok=t.definition,t.prefix=e,t.iconName=i,t.width=l,t.height=n,t.ligatures=r,t.unicode=a,t.svgPathData=s,t.aliases=r})(ye);var be={};(function(t){Object.defineProperty(t,"__esModule",{value:!0});var e="fab",i="youtube",l=576,n=512,r=[61802],a="f167",s="M549.7 124.1c-6.281-23.65-24.79-42.28-48.28-48.6C458.8 64 288 64 288 64S117.2 64 74.63 75.49c-23.5 6.322-42 24.95-48.28 48.6-11.41 42.87-11.41 132.3-11.41 132.3s0 89.44 11.41 132.3c6.281 23.65 24.79 41.5 48.28 47.82C117.2 448 288 448 288 448s170.8 0 213.4-11.49c23.5-6.321 42-24.17 48.28-47.82 11.41-42.87 11.41-132.3 11.41-132.3s0-89.44-11.41-132.3zm-317.5 213.5V175.2l142.7 81.21-142.7 81.2z";t.definition={prefix:e,iconName:i,icon:[l,n,r,a,s]},t.faYoutube=t.definition,t.prefix=e,t.iconName=i,t.width=l,t.height=n,t.ligatures=r,t.unicode=a,t.svgPathData=s,t.aliases=r})(be);var ke={};(function(t){Object.defineProperty(t,"__esModule",{value:!0});var e="fab",i="discord",l=640,n=512,r=[],a="f392",s="M524.5 69.84a1.5 1.5 0 0 0 -.764-.7A485.1 485.1 0 0 0 404.1 32.03a1.816 1.816 0 0 0 -1.923 .91 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.14-30.6 1.89 1.89 0 0 0 -1.924-.91A483.7 483.7 0 0 0 116.1 69.14a1.712 1.712 0 0 0 -.788 .676C39.07 183.7 18.19 294.7 28.43 404.4a2.016 2.016 0 0 0 .765 1.375A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.063-.676A348.2 348.2 0 0 0 208.1 430.4a1.86 1.86 0 0 0 -1.019-2.588 321.2 321.2 0 0 1 -45.87-21.85 1.885 1.885 0 0 1 -.185-3.126c3.082-2.309 6.166-4.711 9.109-7.137a1.819 1.819 0 0 1 1.9-.256c96.23 43.92 200.4 43.92 295.5 0a1.812 1.812 0 0 1 1.924 .233c2.944 2.426 6.027 4.851 9.132 7.16a1.884 1.884 0 0 1 -.162 3.126 301.4 301.4 0 0 1 -45.89 21.83 1.875 1.875 0 0 0 -1 2.611 391.1 391.1 0 0 0 30.01 48.81 1.864 1.864 0 0 0 2.063 .7A486 486 0 0 0 610.7 405.7a1.882 1.882 0 0 0 .765-1.352C623.7 277.6 590.9 167.5 524.5 69.84zM222.5 337.6c-28.97 0-52.84-26.59-52.84-59.24S193.1 219.1 222.5 219.1c29.67 0 53.31 26.82 52.84 59.24C275.3 310.1 251.9 337.6 222.5 337.6zm195.4 0c-28.97 0-52.84-26.59-52.84-59.24S388.4 219.1 417.9 219.1c29.67 0 53.31 26.82 52.84 59.24C470.7 310.1 447.5 337.6 417.9 337.6z";t.definition={prefix:e,iconName:i,icon:[l,n,r,a,s]},t.faDiscord=t.definition,t.prefix=e,t.iconName=i,t.width=l,t.height=n,t.ligatures=r,t.unicode=a,t.svgPathData=s,t.aliases=r})(ke);var Ce={};(function(t){Object.defineProperty(t,"__esModule",{value:!0});var e="fab",i="github",l=496,n=512,r=[],a="f09b",s="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z";t.definition={prefix:e,iconName:i,icon:[l,n,r,a,s]},t.faGithub=t.definition,t.prefix=e,t.iconName=i,t.width=l,t.height=n,t.ligatures=r,t.unicode=a,t.svgPathData=s,t.aliases=r})(Ce);var Ee={};(function(t){Object.defineProperty(t,"__esModule",{value:!0});var e="fab",i="instagram",l=448,n=512,r=[],a="f16d",s="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z";t.definition={prefix:e,iconName:i,icon:[l,n,r,a,s]},t.faInstagram=t.definition,t.prefix=e,t.iconName=i,t.width=l,t.height=n,t.ligatures=r,t.unicode=a,t.svgPathData=s,t.aliases=r})(Ee);function he(t,e,i){const l=t.slice();return l[1]=e[i].icon,l[2]=e[i].link,l}function de(t){let e,i,l,n,r;return i=new we({props:{icon:t[1],class:"!h-10 !w-10"}}),{c(){e=w("a"),G(i.$$.fragment),l=b(),this.h()},l(a){e=p(a,"A",{href:!0,class:!0});var s=_(e);H(i.$$.fragment,s),l=k(s),s.forEach(g),this.h()},h(){u(e,"href",n=t[2]),u(e,"class","mx-3")},m(a,s){y(a,e,s),J(i,e,null),v(e,l),r=!0},p:D,i(a){r||(O(i.$$.fragment,a),r=!0)},o(a){I(i.$$.fragment,a),r=!1},d(a){a&&g(e),X(i)}}}function je(t){let e,i,l=t[0],n=[];for(let a=0;a<l.length;a+=1)n[a]=de(he(t,l,a));const r=a=>I(n[a],1,1,()=>{n[a]=null});return{c(){e=w("div");for(let a=0;a<n.length;a+=1)n[a].c();this.h()},l(a){e=p(a,"DIV",{class:!0});var s=_(e);for(let c=0;c<n.length;c+=1)n[c].l(s);s.forEach(g),this.h()},h(){u(e,"class","flex justify-center items-center mb-6 mt-2")},m(a,s){y(a,e,s);for(let c=0;c<n.length;c+=1)n[c].m(e,null);i=!0},p(a,[s]){if(s&1){l=a[0];let c;for(c=0;c<l.length;c+=1){const f=he(a,l,c);n[c]?(n[c].p(f,s),O(n[c],1)):(n[c]=de(f),n[c].c(),O(n[c],1),n[c].m(e,null))}for(ze(),c=l.length;c<n.length;c+=1)r(c);De()}},i(a){if(!i){for(let s=0;s<l.length;s+=1)O(n[s]);i=!0}},o(a){n=n.filter(Boolean);for(let s=0;s<n.length;s+=1)I(n[s]);i=!1},d(a){a&&g(e),_e(n,a)}}}function Te(t){return[[{icon:ye.faTiktok,link:"https://www.tiktok.com/@misodope/"},{icon:Ee.faInstagram,link:"https://www.instagram.com/miso.dope/"},{icon:be.faYoutube,link:"https://www.youtube.com/misodope/"},{icon:Ce.faGithub,link:"https://github.com/misodope"},{icon:ke.faDiscord,link:"https://discord.gg/2FS5rsM"}]]}class Fe extends K{constructor(e){super(),Z(this,e,Te,je,Q,{})}}function ge(t,e,i){const l=t.slice();return l[1]=e[i],l}function ve(t){let e,i,l,n,r,a,s=t[1].title+"",c,f,d;return{c(){e=w("a"),i=w("img"),a=b(),c=T(s),f=b(),this.h()},l(o){e=p(o,"A",{class:!0,href:!0});var h=_(e);i=p(h,"IMG",{src:!0,class:!0,alt:!0}),a=k(h),c=F(h,s),f=k(h),h.forEach(g),this.h()},h(){var o;le(i.src,l=ne+t[1].icon)||u(i,"src",l),u(i,"class",n=`rounded-full mr-5 w-8 h-8 ${(o=t[1].className)!=null?o:""}`),u(i,"alt",r=t[1].icon),u(e,"class","transition-colors duration-500 flex items-center p-2.5 my-2.5 rounded-md cursor-pointer text-left bg-amber-300 text-black hover:text-amber-300 hover:bg-black"),u(e,"href",d=t[1].url)},m(o,h){y(o,e,h),v(e,i),v(e,a),v(e,c),v(e,f)},p:D,d(o){o&&g(e)}}}function Ye(t){let e,i=t[0],l=[];for(let n=0;n<i.length;n+=1)l[n]=ve(ge(t,i,n));return{c(){e=w("div");for(let n=0;n<l.length;n+=1)l[n].c();this.h()},l(n){e=p(n,"DIV",{class:!0});var r=_(e);for(let a=0;a<l.length;a+=1)l[a].l(r);r.forEach(g),this.h()},h(){u(e,"class","flex flex-col w-full md:w-[450px] lg:w-[450px] text-sm")},m(n,r){y(n,e,r);for(let a=0;a<l.length;a+=1)l[a].m(e,null)},p(n,[r]){if(r&1){i=n[0];let a;for(a=0;a<i.length;a+=1){const s=ge(n,i,a);l[a]?l[a].p(s,r):(l[a]=ve(s),l[a].c(),l[a].m(e,null))}for(;a<l.length;a+=1)l[a].d(1);l.length=i.length}},i:D,o:D,d(n){n&&g(e),_e(l,n)}}}function Le(t){return[[{icon:"/aws.png",title:"Amazon Web Services - Architecture Center",url:"https://viraln.link/JC_AWS_TT2",className:"w-10 h-10 mr-2"},{icon:"/aws.png",title:"Amazon Web Services - Observability",url:"https://viraln.link/JC_AWS_TT1",className:"w-10 h-10 mr-2"},{icon:"/Blind.png",title:"Download Blind - An open space for professionals to talk about ANYTHING",url:"https://teamblind.onelink.me/enIS/misodope"},{icon:"/ReplitLogo.png",title:"Try Replit the best free online code editor",link:"https://repl.it/@misodope/"},{icon:"/excellogo.jpeg",title:"Job Search Template",url:"https://docs.google.com/spreadsheets/d/1ipEvKRYzXIS3ERa9FE5Iw7appsNLAfJpelDEE4r9nus"},{icon:"/ZipRecruiter.png",title:"Join ZipRecruiter and get employed",url:"https://www.ziprecruiter.com/misodope"},{icon:"/AppAcademy.png",title:"App Academy Open to learn code",url:"https://open.appacademy.io/signup/free?utm_source=partner&utm_medium=tiktok&utm_campaign=miso-dope&utm_content=open"},{icon:"/FlexiSpot.png",title:"FlexiSpot Standing Desks",url:"http://flexispot.refr.cc/misodope"}]]}class Re extends K{constructor(e){super(),Z(this,e,Le,Ye,Q,{})}}function Be(t){let e,i,l,n,r,a;return{c(){e=w("footer"),i=w("img"),n=b(),r=w("div"),a=T("Code, Careers, Cringe."),this.h()},l(s){e=p(s,"FOOTER",{class:!0});var c=_(e);i=p(c,"IMG",{class:!0,src:!0,alt:!0}),n=k(c),r=p(c,"DIV",{class:!0});var f=_(r);a=F(f,"Code, Careers, Cringe."),f.forEach(g),c.forEach(g),this.h()},h(){u(i,"class","w-12 h-12"),le(i.src,l=ne+"/misodopeLogo.png")||u(i,"src",l),u(i,"alt","logo"),u(r,"class","text-amber-300 text-sm tracking-wider"),u(e,"class","p-5 flex items-center justify-center")},m(s,c){y(s,e,c),v(e,i),v(e,n),v(e,r),v(r,a)},p:D,i:D,o:D,d(s){s&&g(e)}}}class Ge extends K{constructor(e){super(),Z(this,e,null,Be,Q,{})}}function He(t){let e,i,l,n,r,a,s,c;return e=new Ve({}),l=new Fe({}),r=new Re({}),s=new Ge({}),{c(){G(e.$$.fragment),i=b(),G(l.$$.fragment),n=b(),G(r.$$.fragment),a=b(),G(s.$$.fragment)},l(f){H(e.$$.fragment,f),i=k(f),H(l.$$.fragment,f),n=k(f),H(r.$$.fragment,f),a=k(f),H(s.$$.fragment,f)},m(f,d){J(e,f,d),y(f,i,d),J(l,f,d),y(f,n,d),J(r,f,d),y(f,a,d),J(s,f,d),c=!0},p:D,i(f){c||(O(e.$$.fragment,f),O(l.$$.fragment,f),O(r.$$.fragment,f),O(s.$$.fragment,f),c=!0)},o(f){I(e.$$.fragment,f),I(l.$$.fragment,f),I(r.$$.fragment,f),I(s.$$.fragment,f),c=!1},d(f){X(e,f),f&&g(i),X(l,f),f&&g(n),X(r,f),f&&g(a),X(s,f)}}}class qe extends K{constructor(e){super(),Z(this,e,null,He,Q,{})}}export{qe as default};
