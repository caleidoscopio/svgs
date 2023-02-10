![CDATA[/*
 KeyshapeJS v1.2.1 (c) 2018-2022 Pixofield Ltd | pixofield.com/keyshapejs/mit-license */
window.KeyshapeJS=function(){function r(a){return"undefined"!==typeof a}function u(a,b){return a&&0===a.indexOf(b)}function X(a){var b={},c;for(c in a)b[c]=a[c];return b}function F(a){if(!isFinite(a))throw Error("Non-finite value");}function Y(a){if(14>=a)return 16;var b=Z[a];b||(b=r(ka[a])?0|(a.toLowerCase().indexOf("color")===a.length-5?48:0):1);return b}function N(a){return 0<=a?Math.pow(a,1/3):-Math.pow(-a,1/3)}function la(a,b,c,d){if(0===a)return 0===b?b=-d/c:(a=Math.sqrt(c*c-4*b*d),d=(-c+a)/
(2*b),0<=d&&1>=d?b=d:(d=(-c-a)/(2*b),b=0<=d&&1>=d?d:0)),b;var e=c/a-b*b/(a*a)/3;c=b*b*b/(a*a*a)/13.5-b*c/(a*a)/3+d/a;var f=c*c/4+e*e*e/27;b=-b/(3*a);if(0>=f){if(0===e&&0===c)return-N(d/a);a=Math.sqrt(c*c/4-f);d=Math.acos(-c/2/a);c=Math.cos(d/3);d=Math.sqrt(3)*Math.sin(d/3);a=N(a);e=2*a*c+b;if(0<=e&&1>=e)return e;e=-a*(c+d)+b;if(0<=e&&1>=e)return e;e=a*(d-c)+b;if(0<=e&&1>=e)return e}else{a=N(-c/2+Math.sqrt(f));c=N(-c/2-Math.sqrt(f));d=a+c+b;if(0<=d&&1>=d)return d;d=-(a+c)/2+b;if(0<=d&&1>=d)return d}return 0}
function ma(a,b){if(48===a&&"number"===typeof b)return"rgba("+(b>>>24)+","+(b>>>16&255)+","+(b>>>8&255)+","+(b&255)/255+")";if(64===a)return b=b.map(function(f){return f+"px"}),b.join(",");if(96===a){for(var c="",d=b.length,e=0;e<d;e+=2)c+=b[e],c+=b[e+1].join(",");return c}if(80===a){if(0===b[0])return"none";c="";d=b.length;for(e=0;e<d;)c+=aa[b[e]],1===b[e]?c+="("+b[e+1]+") ":5===b[e]?(c+="("+b[e+1]+"px "+b[e+2]+"px "+b[e+3]+"px rgba("+(b[e+4]>>>24)+","+(b[e+4]>>16&255)+","+(b[e+4]>>8&255)+","+(b[e+
4]&255)/255+")) ",e+=3):c=2===b[e]?c+("("+b[e+1]+"px) "):7===b[e]?c+("("+b[e+1]+"deg) "):c+("("+(0>b[e+1]?0:b[e+1])+") "),e+=2;return c}return 32===a?b+"px":b}function B(a){return 0>=a?0:255<=a?255:a}function na(a,b,c,d){if(16===a||32===a)return(c-b)*d+b;if(0===a)return.5>d?b:c;if(112===a)return 0>=d?b:1<=d?c:"visible";if(48===a){if("number"===typeof b&&"number"===typeof c){a=1-d;var e=a*(b>>>16&255)+d*(c>>>16&255),f=a*(b>>>8&255)+d*(c>>>8&255),m=a*(b&255)+d*(c&255);return B(a*(b>>>24)+d*(c>>>24))<<
24|B(e)<<16|B(f)<<8|B(m)}return.5>d?b:c}if(64===a){0===b.length&&(b=[0]);0===c.length&&(c=[0]);a=b.length;b.length!==c.length&&(a=b.length*c.length);e=[];for(f=0;f<a;++f)m=b[f%b.length],m=(c[f%c.length]-m)*d+m,0>m&&(m=0),e.push(m);return e}if(96===a){if(b.length!==c.length)return.5>d?b:c;a=b.length;e=[];for(f=0;f<a;f+=2){if(b[f]!==c[f])return.5>d?b:c;e[f]=b[f];e[f+1]=[];for(m=0;m<b[f+1].length;++m)e[f+1].push((c[f+1][m]-b[f+1][m])*d+b[f+1][m])}return e}if(80===a){a=b.length;if(a!==c.length)return.5>
d?b:c;e=[];for(f=0;f<a;){if(b[f]!==c[f]||1===b[f])return.5>d?b:c;e[f]=b[f];e[f+1]=(c[f+1]-b[f+1])*d+b[f+1];if(5===b[f]){e[f+2]=(c[f+2]-b[f+2])*d+b[f+2];e[f+3]=(c[f+3]-b[f+3])*d+b[f+3];m=1-d;var k=b[f+4],h=c[f+4],g=m*(k>>>24)+d*(h>>>24),n=m*(k>>8&255)+d*(h>>8&255),p=m*(k&255)+d*(h&255);e[f+4]=(B(m*(k>>16&255)+d*(h>>16&255))<<16|B(n)<<8|B(p))+16777216*(B(g)|0);f+=3}f+=2}return e}return 0}function ba(a,b){a:{var c=a+b[2];for(var d=b[4].length,e=0;e<d;++e)if(c<b[4][e]){c=e;break a}c=d-1}d=b[2];e=b[4][c-
1]-d;d=(a-e)/(b[4][c]-d-e);if(b[6]&&b[6].length>c-1)if(e=b[6][c-1],1===e[0])if(0>=d)d=0;else if(1<=d)d=1;else{var f=e[1],m=e[3];d=la(3*f-3*m+1,-6*f+3*m,3*f,-d);d=3*d*(1-d)*(1-d)*e[2]+3*d*d*(1-d)*e[4]+d*d*d}else 2===e[0]?(e=e[1],d=Math.ceil(d*e)/e):3===e[0]&&(e=e[1],d=Math.floor(d*e)/e);return na(b[1]&240,b[5][c-1],b[5][c],d)}function O(){C||(z=(new Date).getTime()+ca)}function U(a){if(a||!J){for(var b=!1,c=0;c<D.length;++c)D[c].O(a)&&(b=!0);if(a)for(;0<K.length;)if(a=K.shift(),c=a[0],1===a[1])c.onfinish&&
(c.onfinish(),b=!0),c.N();else if(2===a[1]&&c.onloop)c.onloop();return b}}function da(){O();U(!0)&&!C?(J=!0,P(da)):J=!1}function Q(){J||(J=!0,P(da))}function ea(a,b){var c=[];a.split(b).forEach(function(d){c.push(parseFloat(d))});return c}function G(a){-1===a.indexOf(",")&&(a=a.replace(" ",","));return ea(a,",")}function fa(a){a._ks||(a._ks={});if(!a._ks.transform){for(var b=a._ks.transform=[],c=0;14>=c;++c)b[c]=0;b[10]=1;b[11]=1;if(a=a.getAttribute("transform")){a=a.trim().split(") ");for(c=a.length-
2;0<=c;--c)if(u(a[c],"translate(")){for(var d=0;d<c;d++)a.shift();break}c=a.shift();u(c,"translate(")&&(c=G(c.substring(10)),b[1]=c[0],b[2]=r(c[1])?c[1]:0,c=a.shift());u(c,"rotate(")&&(c=G(c.substring(7)),b[6]=c[0],c=a.shift());u(c,"skewX(")&&(c=G(c.substring(6)),b[7]=c[0],c=a.shift());u(c,"skewY(")&&(c=G(c.substring(6)),b[8]=c[0],c=a.shift());u(c,"scale(")&&(c=G(c.substring(6)),b[10]=c[0],b[11]=r(c[1])?c[1]:c[0],c=a.shift());u(c,"translate(")&&(c=G(c.substring(10)),b[13]=c[0],b[14]=r(c[1])?c[1]:
0)}}}function ha(a){this.m=a;this.I=[];this.G=[];this.D=0;this.B=this.g=this.i=null;this.o=this.j=this.l=0;this.h=1;this.s=this.K=this.A=!1}function H(a,b,c){b=a[b];void 0===b&&(b=a[c]);return b}function oa(a){return Array.isArray(a)?a:u(a,"cubic-bezier(")?(a=a.substring(13,a.length-1).split(","),[1,parseFloat(a[0]),parseFloat(a[1]),parseFloat(a[2]),parseFloat(a[3])]):u(a,"steps(")?(a=a.substring(6,a.length-1).split(","),[a[1]&&"start"===a[1].trim()?2:3,parseFloat(a[0])]):[0]}function pa(a){a=a.trim();
return u(a,"#")?(parseInt(a.substring(1),16)<<8)+255:u(a,"rgba(")?(a=a.substring(5,a.length-1),a=a.split(","),(parseInt(a[0],10)<<24)+(parseInt(a[1],10)<<16)+(parseInt(a[2],10)<<8)+255*parseFloat(a[3])<<0):a}function ia(a){!1===a.s&&(D.push(a),a.s=!0,!1!==a.m.autoplay&&a.play());return this}function V(a){if(!0===a.s){a._cancel();var b=D.indexOf(a);-1<b&&D.splice(b,1);b=K.indexOf(a);-1<b&&K.splice(b,1);a.s=!1}return this}var W=Error("Not in timeline list"),ja="mpath posX posY    rotate skewX skewY  scaleX scaleY  anchorX anchorY".split(" "),
qa=" translate translate    rotate skewX skewY  scale scale  translate translate".split(" "),aa="none url blur brightness contrast drop-shadow grayscale hue-rotate invert opacity saturate sepia".split(" "),P=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||null;P||(P=function(a){window.setTimeout(a,16)});var ra=/apple/i.test(navigator.vendor),Z={d:97,fill:48,fillOpacity:16,filter:80,height:33,
opacity:16,offsetDistance:33,stroke:48,strokeDasharray:64,strokeDashoffset:32,strokeOpacity:16,strokeWidth:32,transform:1,visibility:113,width:33},ka=window.getComputedStyle(document.documentElement),J=!1,z=(new Date).getTime(),C,ca=0,D=[],K=[];ha.prototype={J:function(a){var b=0;if(null!==this.i){var c=this.u();0<this.h&&null!==c&&c>=this.j?this.o?(this.i=z-this.l/this.h,this.o--,b=2):(b=1,a?this.g=c:this.g=this.B?Math.max(this.B,this.j):this.j):0>this.h&&null!==c&&c<=this.l?this.o&&Infinity!==this.j?
(this.i=z-this.j/this.h,this.o--,b=2):(this.o=0,b=1,a?this.g=c:this.g=this.B?Math.min(this.B,this.l):this.l):null!==c&&0!==this.h&&(a&&null!==this.g&&(this.i=z-this.g/this.h),this.g=null)}this.B=this.u();return b},O:function(a){a&&(this.A&&(this.A=!1,null===this.i&&(0!==this.h&&null!==this.g?(this.i=z-this.g/this.h,this.g=null):this.i=z)),null===this.g&&null!==this.i&&(a=this.J(!1),0!==a&&K.push([this,a])));a=this.u();if(null===a)return!1;for(var b=this.I,c=this.G,d=0;d<b.length;++d){for(var e=b[d],
f=!1,m=0;m<c[d].length;++m){var k=c[d][m],h=k[0];if(null!==h){var g=k[2];var n=k[4].length,p=k[4][n-1]-g;g=0===p?k[5][n-1]:a<g?!k[9]||k[9][0]&1?k[5][0]:k[9][1]:a>=g+k[3]?!k[9]||k[9][0]&2?0===k[3]%p?k[5][n-1]:ba(k[3]%p,k):k[9][1]:ba((a-g)%p,k);0===h?(e._ks.mpath=k[8],e._ks.transform[h]=g,f=!0):14>=h?(e._ks.transform[h]=g,f=!0):(g=ma(k[1]&240,g),k[1]&1?e.setAttribute(h,g):e.style[h]=g)}}if(f){f=e;fa(f);m=f._ks.transform;k="";if(h=f._ks.mpath)n=m[0],0>n&&(n=0),100<n&&(n=100),n=n*h[2]/100,g=h[1].getPointAtLength(n),
k="translate("+g.x+","+g.y+") ",h[0]&&(.5>n?(n=g,g=h[1].getPointAtLength(.5)):n=h[1].getPointAtLength(n-.5),k+="rotate("+180*Math.atan2(g.y-n.y,g.x-n.x)/Math.PI+") ");for(h=1;h<m.length;++h)g=m[h],g!==(10===h||11===h?1:0)&&(k+=" "+qa[h]+"(",k=2>=h?k+(1===h?g+",0":"0,"+g):13<=h?k+(13===h?g+",0":"0,"+g):10<=h?k+(10===h?g+",1":"1,"+g):k+g,k+=")");f.setAttribute("transform",k)}ra&&e.setAttribute("opacity",e.getAttribute("opacity"))}return"running"===this.v()},N:function(){!1!==this.m.autoremove&&"finished"===
this.v()&&V(this)},H:function(){if(!this.K){this.K=!0;for(var a=this.I,b=this.G,c=0;c<a.length;++c)for(var d=a[c],e=0;e<b[c].length;++e)14>=b[c][e][0]&&fa(d)}},C:function(a){if("number"===typeof a)return[a,0];if(!r(this.m.markers)||!r(this.m.markers[a]))throw Error("Invalid marker: "+a);a=this.m.markers[a];return r(a.time)?[+a.time,+(a.dur||0)]:[+a,0]},play:function(a){r(a)&&null!==a&&(a=this.C(a)[0],F(a),0>this.h&&a<this.l&&(a=this.l),0<this.h&&a>this.j&&(a=this.j),this.F(a,!0));if(!this.s)throw W;
a=this.u();if(0<this.h&&(null===a||a>=this.j||a<this.l))this.g=this.l;else if(0>this.h&&(null===a||a<=this.l||a>this.j)){if(Infinity===this.j)throw Error("Cannot seek to Infinity");this.g=this.j}else 0===this.h&&null===a&&(this.g=this.l);if(null===this.g)return this;this.i=null;this.A=!0;this.H();Q();return this},pause:function(a){if(!this.s)throw W;r(a)&&(a=this.C(a)[0],F(a));if("paused"!==this.v()){O();var b=this.u();if(null===b)if(0<=this.h)this.g=this.l;else{if(Infinity===this.j)throw Error("Cannot seek to Infinity");
this.g=this.j}null!==this.i&&null===this.g&&(this.g=b);this.i=null;this.A=!1;this.J(!1);this.H();Q()}r(a)&&this.F(a,!0);return this},range:function(a,b){if(0===arguments.length)return{"in":this.l,out:this.j};var c=this.C(a)[0],d=this.D;r(b)&&(d=this.C(b)[0]);F(c);if(0>c||0>d||c>=d||isNaN(d))throw Error("Invalid range");var e=this.v();this.l=c;this.j=d;"finished"===e&&"running"===this.v()&&this.play();return this},loop:function(a){if(!r(a))return{count:this.o};this.o=!0===a?Infinity:Math.floor(a);
if(0>this.o||isNaN(this.o))this.o=0;return this},u:function(){return null!==this.g?this.g:null===this.i?null:(z-this.i)*this.h},F:function(a,b){b&&O();null!==a&&(this.H(),null!==this.g||null===this.i||0===this.h?(this.g=a,U(!1)):this.i=z-a/this.h,this.s||(this.i=null),this.B=null,this.J(!0),Q())},L:function(){return this.u()},time:function(a){if(r(a)){if(!this.s)throw W;a=this.C(a)[0];F(a);this.F(a,!0);return this}return this.L()},v:function(){var a=this.u();return this.A?"running":null===a?"idle":
null===this.i?"paused":0<this.h&&a>=this.j||0>this.h&&a<=this.l?"finished":"running"},state:function(){return this.v()},duration:function(){return this.D},M:function(a){F(a);O();var b=this.u();this.h=a;null!==b&&this.F(b,!1)},rate:function(a){return r(a)?(this.M(a),this):this.h},markers:function(a){return r(a)?(this.m.markers=X(a),this):r(this.m.markers)?this.m.markers:{}},marker:function(a){return r(this.m.markers)?this.m.markers[a]:void 0},_cancel:function(){if(!this.s||"idle"===this.v())return this;
this.i=this.g=null;this.A=!1;return this}};return{version:"1.2.1",animate:function(){var a={};1===arguments.length%2&&(a=X(arguments[arguments.length-1]));a=new ha(a);for(var b=arguments,c=0,d=0;d<b.length-1;d+=2){var e=b[d];var f=e instanceof Element?e:document.getElementById(e.substring(1));if(!f)throw Error("Invalid target: "+e);e=f;f=b[d+1];e._ks||(e._ks={});for(var m=[],k=0;k<f.length;++k){var h=f[k],g=H(h,"p","property");if("string"!==typeof g||-1!==g.indexOf("-")||""===g||!(0<Z[g]||0<=ja.indexOf(g)))throw Error("Invalid property: "+
g);var n=ja.indexOf(g);""!==g&&0<=n&&(g=n);n=Y(g);var p=H(h,"t","times");if(!p||2>p.length)throw Error("Not enough times");p=p.slice();if(!isFinite(p[0])||0>p[0])throw Error("Invalid time: "+p[0]);for(var w=1;w<p.length;++w)if(!isFinite(p[w])||0>p[w]||p[w]<p[w-1])throw Error("Invalid time: "+p[w]);w=p[0];var R=p[p.length-1]-w,S=h.iterations||0;1>S&&(S=1);R*=S;c<R+w&&(c=R+w);var I=H(h,"v","values");if(!I||I.length!==p.length)throw Error("Values do not match times");I=I.slice();for(var x=g,l=I,L=Y(x)&
240,q=0;q<l.length;++q)if(96===L){for(var E=l[q].substring(6,l[q].length-2).match(/[A-DF-Za-df-z][-+0-9eE., ]*/ig),M=[],t=0;t<E.length;++t){M.push(E[t][0]);for(var v=1<E[t].trim().length?E[t].substring(1).split(","):[],A=0;A<v.length;++A)v[A]=parseFloat(v[A]);M.push(v)}l[q]=M}else if(48===L)u(l[q],"#")?(E=9===l[q].length,l[q]=parseInt(l[q].substring(1),16),E||(l[q]=256*l[q]|255)):u(l[q],"url(")||"none"===l[q]||(console.warn("unsupported color: "+l[q]),l[q]=0);else if(80===L){E=l;M=q;t=l[q];if("none"===
t)t=[0];else{v=[];for(var y=t.indexOf("(");0<y;)if(A=aa.indexOf(t.substring(0,y)),0<=A){v.push(A);var T=t.indexOf(") ");0>T&&(T=t.length-1);y=t.substring(y+1,T).split(" ");5===A?(v.push(parseFloat(y[0])),v.push(parseFloat(y[1])),v.push(parseFloat(y[2])),v.push(pa(y[3]))):1===A?v.push(y[0]):v.push(parseFloat(y[0]));t=t.substring(T+1).trim();y=t.indexOf("(")}else break;t=v}E[M]=t}else 64===L?"none"!==l[q]?/^[0-9 .]*$/.test(l[q])?l[q]=ea(l[q]," "):(console.warn("unsupported value: "+l[q]),l[q]=[0]):
l[q]=[0]:32===L?(F(l[q]),l[q]=parseFloat(l[q])):0===x&&(l[q]=parseFloat(l[q]));x=H(h,"e","easing");l=p.length;for(x||(x=[]);x.length<l;)x.push([1,0,0,.58,1]);for(l=0;l<x.length;++l)x[l]=oa(x[l]);n=[g,n,w,R,p,I,x,S];p=H(h,"mp","motionPath");r(p)&&0===g&&(n[8]=[],n[8][0]=h.motionRotate,g=document.createElementNS("http://www.w3.org/2000/svg","path"),p||(p="M0,0"),g.setAttribute("d",p),n[8][1]=g,n[8][2]=g.getTotalLength());h=H(h,"f","fill");r(h)&&(n[9]=h.slice());m.push(n)}0<m.length&&(a.I.push(e),a.G.push(m))}a.D=
c;a.l=0;a.j=a.D;ia(a);return a},add:ia,remove:V,removeAll:function(){for(var a=D.length-1;0<=a;--a)V(D[a]);return this},timelines:function(){return D.slice()},globalPlay:function(){C&&(ca=C-(new Date).getTime(),C=void 0,Q());return this},globalPause:function(){C||(C=z,U(!1));return this},globalState:function(){return C?"paused":"running"}}}();
]]