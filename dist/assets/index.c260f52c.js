const oe=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const o of c.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerpolicy&&(c.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?c.credentials="include":s.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(s){if(s.ep)return;s.ep=!0;const c=n(s);fetch(s.href,c)}};oe();function d(){}function Y(t){return t()}function K(){return Object.create(null)}function j(t){t.forEach(Y)}function le(t){return typeof t=="function"}function v(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function ue(t){return Object.keys(t).length===0}function g(t,e){t.appendChild(e)}function L(t,e,n){t.insertBefore(e,n||null)}function C(t){t.parentNode.removeChild(t)}function ae(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function h(t){return document.createElement(t)}function D(t){return document.createTextNode(t)}function q(){return D(" ")}function fe(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function f(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function de(t){return Array.from(t.childNodes)}function me(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function R(t,e,n){t.classList[n?"add":"remove"](e)}let O;function N(t){O=t}function pe(){if(!O)throw new Error("Function called outside component initialization");return O}function Z(t){pe().$$.on_destroy.push(t)}const M=[],X=[],T=[],G=[],ge=Promise.resolve();let H=!1;function he(){H||(H=!0,ge.then(ee))}function I(t){T.push(t)}const B=new Set;let z=0;function ee(){const t=O;do{for(;z<M.length;){const e=M[z];z++,N(e),_e(e.$$)}for(N(null),M.length=0,z=0;X.length;)X.pop()();for(let e=0;e<T.length;e+=1){const n=T[e];B.has(n)||(B.add(n),n())}T.length=0}while(M.length);for(;G.length;)G.pop()();H=!1,B.clear(),N(t)}function _e(t){if(t.fragment!==null){t.update(),j(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(I)}}const P=new Set;let b;function te(){b={r:0,c:[],p:b}}function ne(){b.r||j(b.c),b=b.p}function m(t,e){t&&t.i&&(P.delete(t),t.i(e))}function _(t,e,n,r){if(t&&t.o){if(P.has(t))return;P.add(t),b.c.push(()=>{P.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}function S(t){t&&t.c()}function y(t,e,n,r){const{fragment:s,on_mount:c,on_destroy:o,after_update:l}=t.$$;s&&s.m(e,n),r||I(()=>{const i=c.map(Y).filter(le);o?o.push(...i):j(i),t.$$.on_mount=[]}),l.forEach(I)}function w(t,e){const n=t.$$;n.fragment!==null&&(j(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function $e(t,e){t.$$.dirty[0]===-1&&(M.push(t),he(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function x(t,e,n,r,s,c,o,l=[-1]){const i=O;N(t);const u=t.$$={fragment:null,ctx:null,props:c,update:d,not_equal:s,bound:K(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(i?i.$$.context:[])),callbacks:K(),dirty:l,skip_bound:!1,root:e.target||i.$$.root};o&&o(u.root);let p=!1;if(u.ctx=n?n(t,e.props||{},(a,$,...F)=>{const W=F.length?F[0]:$;return u.ctx&&s(u.ctx[a],u.ctx[a]=W)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](W),p&&$e(t,a)),$}):[],u.update(),p=!0,j(u.before_update),u.fragment=r?r(u.ctx):!1,e.target){if(e.hydrate){const a=de(e.target);u.fragment&&u.fragment.l(a),a.forEach(C)}else u.fragment&&u.fragment.c();e.intro&&m(t.$$.fragment),y(t,e.target,e.anchor,e.customElement),ee()}N(i)}class k{$destroy(){w(this,1),this.$destroy=d}$on(e,n){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}$set(e){this.$$set&&!ue(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const ve={getAudioElement(t){return null}},E=[];function be(t,e){return{subscribe:re(t,e).subscribe}}function re(t,e=d){let n;const r=new Set;function s(l){if(v(t,l)&&(t=l,n)){const i=!E.length;for(const u of r)u[1](),E.push(u,t);if(i){for(let u=0;u<E.length;u+=2)E[u][0](E[u+1]);E.length=0}}}function c(l){s(l(t))}function o(l,i=d){const u=[l,i];return r.add(u),r.size===1&&(n=e(s)||d),l(t),()=>{r.delete(u),r.size===0&&(n(),n=null)}}return{set:s,update:c,subscribe:o}}const se=[{color:"green",content:"car-keys",name:"car keys",id:1,icon:"\u{1F697}"},{color:"red",content:"laughing-kid",name:"laugh",id:2,icon:"\u{1F602}"},{color:"blue",content:"applause_1",name:"scream",id:3,icon:"\u{1F631}"},{color:"blue",content:"clapping",name:"clapping",id:4,icon:"\u{1F44F}"},{color:"green",content:"psycho",name:"psycho",id:5,icon:"\u{1F52A}"},{color:"red",content:"toilet-flushing",name:"toilet",id:6,icon:"\u{1F6BD}"},{color:"blue",content:"winning",name:"winning",id:7,icon:"\u{1F3C6}"},{color:"blue",content:"reverse",name:"reverse",id:8,icon:"\u{1F69A}"},{color:"blue",content:"joke-drums",name:"joke",id:9,icon:"\u{1F941}"}];se.map(t=>({...t,audioElement:ve.getAudioElement(t)}));const ie=be(se),ye=2e3,we={user:"",currentCard:0,currentCardContent:null};let ce,A;ie.subscribe(t=>ce=t);const Ce=()=>{const{subscribe:t,set:e,update:n}=re(we);let r;return{subscribe:t,cardChosen:c=>{n(o=>{o.currentCard=c||0;const l=ce.find(u=>u.id===c),i=(l==null?void 0:l.content)||"car_remote";return A||(A=new Audio,A.addEventListener("ended",u=>{n(p=>(p.currentCard=0,p))})),A.setAttribute("src",`/audio/${i}.mp3`),A.load(),A.play(),o}),clearTimeout(r),r=setTimeout(()=>{},ye)}}},U=Ce(),xe={toStandardCase(t){return t.replace(/\w\S*/g,e=>e.charAt(0).toUpperCase()+e.substring(1).toLowerCase())}};function ke(t){let e,n,r,s=t[0].icon+"",c,o,l,i,u,p;return{c(){e=h("div"),n=h("div"),r=h("span"),c=D(s),o=q(),l=D(t[2]),f(r,"class","card-icon svelte-1cdgpz4"),f(n,"data-testid",i="single-card-"+t[0].id),f(n,"class","card-body svelte-1cdgpz4"),R(n,"isCurrent",t[1]),f(e,"class","card-wrapper svelte-1cdgpz4")},m(a,$){L(a,e,$),g(e,n),g(n,r),g(r,c),g(n,o),g(n,l),u||(p=fe(e,"click",t[3]),u=!0)},p(a,[$]){$&1&&s!==(s=a[0].icon+"")&&me(c,s),$&1&&i!==(i="single-card-"+a[0].id)&&f(n,"data-testid",i),$&2&&R(n,"isCurrent",a[1])},i:d,o:d,d(a){a&&C(e),u=!1,p()}}}function Ee(t,e,n){let{cardContent:r}=e,{isCurrent:s}=e;const c=xe.toStandardCase(r.name),o=l=>{U.cardChosen(r.id)};return t.$$set=l=>{"cardContent"in l&&n(0,r=l.cardContent),"isCurrent"in l&&n(1,s=l.isCurrent)},[r,s,c,o]}class Ae extends k{constructor(e){super(),x(this,e,Ee,ke,v,{cardContent:0,isCurrent:1})}}function J(t,e,n){const r=t.slice();return r[4]=e[n],r}function Q(t){let e,n;return e=new Ae({props:{isCurrent:t[4].id===t[0],cardContent:{...t[4]}}}),{c(){S(e.$$.fragment)},m(r,s){y(e,r,s),n=!0},p(r,s){const c={};s&3&&(c.isCurrent=r[4].id===r[0]),s&2&&(c.cardContent={...r[4]}),e.$set(c)},i(r){n||(m(e.$$.fragment,r),n=!0)},o(r){_(e.$$.fragment,r),n=!1},d(r){w(e,r)}}}function Se(t){let e,n,r=t[1],s=[];for(let o=0;o<r.length;o+=1)s[o]=Q(J(t,r,o));const c=o=>_(s[o],1,1,()=>{s[o]=null});return{c(){e=h("div");for(let o=0;o<s.length;o+=1)s[o].c();f(e,"class","cards-pannel-flex svelte-1bmphtj")},m(o,l){L(o,e,l);for(let i=0;i<s.length;i+=1)s[i].m(e,null);n=!0},p(o,[l]){if(l&3){r=o[1];let i;for(i=0;i<r.length;i+=1){const u=J(o,r,i);s[i]?(s[i].p(u,l),m(s[i],1)):(s[i]=Q(u),s[i].c(),m(s[i],1),s[i].m(e,null))}for(te(),i=r.length;i<s.length;i+=1)c(i);ne()}},i(o){if(!n){for(let l=0;l<r.length;l+=1)m(s[l]);n=!0}},o(o){s=s.filter(Boolean);for(let l=0;l<s.length;l+=1)_(s[l]);n=!1},d(o){o&&C(e),ae(s,o)}}}function Le(t,e,n){let r;U.subscribe(o=>n(0,r=o.currentCard));let s=[];const c=ie.subscribe(o=>n(1,s=o));return Z(c),[r,s]}class Me extends k{constructor(e){super(),x(this,e,Le,Se,v,{})}}function Ne(t){let e,n;return{c(){e=h("div"),f(e,"class","divider"),f(e,"style",n="width: "+(t[0]+"px")+"; height : "+(t[1]+"px"))},m(r,s){L(r,e,s)},p(r,[s]){s&3&&n!==(n="width: "+(r[0]+"px")+"; height : "+(r[1]+"px"))&&f(e,"style",n)},i:d,o:d,d(r){r&&C(e)}}}function Oe(t,e,n){let{w:r=20}=e,{h:s=20}=e;return t.$$set=c=>{"w"in c&&n(0,r=c.w),"h"in c&&n(1,s=c.h)},[r,s]}class je extends k{constructor(e){super(),x(this,e,Oe,Ne,v,{w:0,h:1})}}function ze(t){let e;return{c(){e=h("div"),e.innerHTML=`<div class="container svelte-1uua4ew"><span class="svelte-1uua4ew"></span> 
		<span class="svelte-1uua4ew"></span> 
		<span class="svelte-1uua4ew"></span> 
		<span class="svelte-1uua4ew"></span> 
		<span class="svelte-1uua4ew"></span></div>`,f(e,"class","wrapper svelte-1uua4ew")},m(n,r){L(n,e,r)},p:d,i:d,o:d,d(n){n&&C(e)}}}class Te extends k{constructor(e){super(),x(this,e,null,ze,v,{})}}function V(t){let e,n;return e=new Te({}),{c(){S(e.$$.fragment)},m(r,s){y(e,r,s),n=!0},i(r){n||(m(e.$$.fragment,r),n=!0)},o(r){_(e.$$.fragment,r),n=!1},d(r){w(e,r)}}}function Pe(t){let e,n,r,s,c,o,l;c=new je({props:{w:15}});let i=t[0]>0&&V();return{c(){e=h("header"),n=h("div"),r=h("h1"),r.textContent="Effects",s=q(),S(c.$$.fragment),o=q(),i&&i.c(),f(r,"class","svelte-1l4kydd"),f(n,"class","header-wrapper svelte-1l4kydd"),f(e,"class","svelte-1l4kydd")},m(u,p){L(u,e,p),g(e,n),g(n,r),g(n,s),y(c,n,null),g(n,o),i&&i.m(n,null),l=!0},p(u,[p]){u[0]>0?i?p&1&&m(i,1):(i=V(),i.c(),m(i,1),i.m(n,null)):i&&(te(),_(i,1,1,()=>{i=null}),ne())},i(u){l||(m(c.$$.fragment,u),m(i),l=!0)},o(u){_(c.$$.fragment,u),_(i),l=!1},d(u){u&&C(e),w(c),i&&i.d()}}}function qe(t,e,n){let r;const s=U.subscribe(c=>n(0,r=c.currentCard));return Z(s),[r]}class Be extends k{constructor(e){super(),x(this,e,qe,Pe,v,{})}}function De(t){let e,n,r,s,c,o;return n=new Be({}),c=new Me({}),{c(){e=h("div"),S(n.$$.fragment),r=q(),s=h("main"),S(c.$$.fragment),f(e,"class","app-wrapper svelte-k7ozvs")},m(l,i){L(l,e,i),y(n,e,null),g(e,r),g(e,s),y(c,s,null),o=!0},p:d,i(l){o||(m(n.$$.fragment,l),m(c.$$.fragment,l),o=!0)},o(l){_(n.$$.fragment,l),_(c.$$.fragment,l),o=!1},d(l){l&&C(e),w(n),w(c)}}}class He extends k{constructor(e){super(),x(this,e,null,De,v,{})}}function Ie(t){let e,n;return e=new He({}),{c(){S(e.$$.fragment)},m(r,s){y(e,r,s),n=!0},p:d,i(r){n||(m(e.$$.fragment,r),n=!0)},o(r){_(e.$$.fragment,r),n=!1},d(r){w(e,r)}}}class Ue extends k{constructor(e){super(),x(this,e,null,Ie,v,{})}}new Ue({target:document.getElementById("app")});
