var df=Object.defineProperty;var ff=(n,e,t)=>e in n?df(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var vi=(n,e,t)=>ff(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Hl="170",pf=0,hc=1,mf=2,Ch=1,Ph=2,Hn=3,_i=0,Bt=1,_n=2,Xn=0,_r=1,Fi=2,dc=3,fc=4,gf=5,Pi=100,_f=101,vf=102,yf=103,wf=104,xf=200,Sf=201,bf=202,Ef=203,Ho=204,Go=205,Mf=206,Tf=207,Af=208,Rf=209,Cf=210,Pf=211,If=212,Lf=213,Df=214,Vo=0,Wo=1,jo=2,Ar=3,$o=4,qo=5,Xo=6,Ko=7,Ih=0,Uf=1,Nf=2,pi=0,Lh=1,Dh=2,Uh=3,Gl=4,Of=5,Nh=6,Oh=7,kh=300,Rr=301,Cr=302,Yo=303,Jo=304,ka=306,Jn=1e3,Di=1001,Zo=1002,rn=1003,kf=1004,Ts=1005,Rn=1006,Xa=1007,Ui=1008,Zn=1009,Fh=1010,Bh=1011,ds=1012,Vl=1013,zi=1014,Cn=1015,Kn=1016,Wl=1017,jl=1018,Pr=1020,zh=35902,Hh=1021,Gh=1022,wn=1023,Vh=1024,Wh=1025,vr=1026,Ir=1027,$l=1028,ql=1029,jh=1030,Xl=1031,Kl=1033,ha=33776,da=33777,fa=33778,pa=33779,Qo=35840,el=35841,tl=35842,nl=35843,il=36196,rl=37492,sl=37496,al=37808,ol=37809,ll=37810,cl=37811,ul=37812,hl=37813,dl=37814,fl=37815,pl=37816,ml=37817,gl=37818,_l=37819,vl=37820,yl=37821,ma=36492,wl=36494,xl=36495,$h=36283,Sl=36284,bl=36285,El=36286,Ff=3200,Bf=3201,qh=0,zf=1,ui="",vt="srgb",Or="srgb-linear",Fa="linear",at="srgb",ji=7680,pc=519,Hf=512,Gf=513,Vf=514,Xh=515,Wf=516,jf=517,$f=518,qf=519,mc=35044,Ka=35048,gc="300 es",qn=2e3,ba=2001;class kr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ya=Math.PI/180,Ml=180/Math.PI;function bs(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ut[n&255]+Ut[n>>8&255]+Ut[n>>16&255]+Ut[n>>24&255]+"-"+Ut[e&255]+Ut[e>>8&255]+"-"+Ut[e>>16&15|64]+Ut[e>>24&255]+"-"+Ut[t&63|128]+Ut[t>>8&255]+"-"+Ut[t>>16&255]+Ut[t>>24&255]+Ut[i&255]+Ut[i>>8&255]+Ut[i>>16&255]+Ut[i>>24&255]).toLowerCase()}function jt(n,e,t){return Math.max(e,Math.min(t,n))}function Xf(n,e){return(n%e+e)%e}function Ja(n,e,t){return(1-t)*n+t*e}function $r(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Vt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class ze{constructor(e=0,t=0){ze.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(jt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ye{constructor(e,t,i,r,s,a,o,l,c){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],f=i[5],g=i[8],_=r[0],m=r[3],p=r[6],y=r[1],v=r[4],w=r[7],L=r[2],A=r[5],R=r[8];return s[0]=a*_+o*y+l*L,s[3]=a*m+o*v+l*A,s[6]=a*p+o*w+l*R,s[1]=c*_+u*y+h*L,s[4]=c*m+u*v+h*A,s[7]=c*p+u*w+h*R,s[2]=d*_+f*y+g*L,s[5]=d*m+f*v+g*A,s[8]=d*p+f*w+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*s,f=c*s-a*l,g=t*h+i*d+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(r*c-u*i)*_,e[2]=(o*i-r*a)*_,e[3]=d*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-o*t)*_,e[6]=f*_,e[7]=(i*l-c*t)*_,e[8]=(a*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Za.makeScale(e,t)),this}rotate(e){return this.premultiply(Za.makeRotation(-e)),this}translate(e,t){return this.premultiply(Za.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Za=new Ye;function Kh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ea(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Kf(){const n=Ea("canvas");return n.style.display="block",n}const _c={};function ns(n){n in _c||(_c[n]=!0,console.warn(n))}function Yf(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function Jf(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Zf(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const tt={enabled:!0,workingColorSpace:Or,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===at&&(n.r=Yn(n.r),n.g=Yn(n.g),n.b=Yn(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===at&&(n.r=yr(n.r),n.g=yr(n.g),n.b=yr(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===ui?Fa:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Yn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function yr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const vc=[.64,.33,.3,.6,.15,.06],yc=[.2126,.7152,.0722],wc=[.3127,.329],xc=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Sc=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);tt.define({[Or]:{primaries:vc,whitePoint:wc,transfer:Fa,toXYZ:xc,fromXYZ:Sc,luminanceCoefficients:yc,workingColorSpaceConfig:{unpackColorSpace:vt},outputColorSpaceConfig:{drawingBufferColorSpace:vt}},[vt]:{primaries:vc,whitePoint:wc,transfer:at,toXYZ:xc,fromXYZ:Sc,luminanceCoefficients:yc,outputColorSpaceConfig:{drawingBufferColorSpace:vt}}});let $i;class Qf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{$i===void 0&&($i=Ea("canvas")),$i.width=e.width,$i.height=e.height;const i=$i.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=$i}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ea("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Yn(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Yn(t[i]/255)*255):t[i]=Yn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ep=0;class Yh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ep++}),this.uuid=bs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Qa(r[a].image)):s.push(Qa(r[a]))}else s=Qa(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Qa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Qf.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let tp=0;class kt extends kr{constructor(e=kt.DEFAULT_IMAGE,t=kt.DEFAULT_MAPPING,i=Di,r=Di,s=Rn,a=Ui,o=wn,l=Zn,c=kt.DEFAULT_ANISOTROPY,u=ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tp++}),this.uuid=bs(),this.name="",this.source=new Yh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==kh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Jn:e.x=e.x-Math.floor(e.x);break;case Di:e.x=e.x<0?0:1;break;case Zo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Jn:e.y=e.y-Math.floor(e.y);break;case Di:e.y=e.y<0?0:1;break;case Zo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}kt.DEFAULT_IMAGE=null;kt.DEFAULT_MAPPING=kh;kt.DEFAULT_ANISOTROPY=1;class ct{constructor(e=0,t=0,i=0,r=1){ct.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,w=(f+1)/2,L=(p+1)/2,A=(u+d)/4,R=(h+_)/4,P=(g+m)/4;return v>w&&v>L?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=A/i,s=R/i):w>L?w<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(w),i=A/r,s=P/r):L<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),i=R/s,r=P/s),this.set(i,r,s,t),this}let y=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(h-_)/y,this.z=(d-u)/y,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class np extends kr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ct(0,0,e,t),this.scissorTest=!1,this.viewport=new ct(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new kt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Yh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Sn extends np{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Jh extends kt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=rn,this.minFilter=rn,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ip extends kt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=rn,this.minFilter=rn,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const d=s[a+0],f=s[a+1],g=s[a+2],_=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==d||c!==f||u!==g){let m=1-o;const p=l*d+c*f+u*g+h*_,y=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const L=Math.sqrt(v),A=Math.atan2(L,p*y);m=Math.sin(m*A)/L,o=Math.sin(o*A)/L}const w=o*y;if(l=l*m+d*w,c=c*m+f*w,u=u*m+g*w,h=h*m+_*w,m===1-o){const L=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=L,c*=L,u*=L,h*=L}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[a],d=s[a+1],f=s[a+2],g=s[a+3];return e[t]=o*g+u*h+l*f-c*d,e[t+1]=l*g+u*d+c*h-o*f,e[t+2]=c*g+u*f+o*d-l*h,e[t+3]=u*g-o*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),h=o(s/2),d=l(i/2),f=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"YZX":this._x=d*u*h+c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h-d*f*g;break;case"XZY":this._x=d*u*h-c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=i+o+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(a-r)*f}else if(i>o&&i>h){const f=2*Math.sqrt(1+i-o-h);this._w=(u-l)/f,this._x=.25*f,this._y=(r+a)/f,this._z=(s+c)/f}else if(o>h){const f=2*Math.sqrt(1+o-i-h);this._w=(s-c)/f,this._x=(r+a)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-i-o);this._w=(a-r)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(jt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*i+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,i=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(bc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(bc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*t-s*r),h=2*(s*i-a*t);return this.x=t+l*c+a*h-o*u,this.y=i+l*u+o*c-s*h,this.z=r+l*h+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return eo.copy(this).projectOnVector(e),this.sub(eo)}reflect(e){return this.sub(eo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(jt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const eo=new N,bc=new Fr;class Gi{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,dn):dn.fromBufferAttribute(s,a),dn.applyMatrix4(e.matrixWorld),this.expandByPoint(dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),As.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),As.copy(i.boundingBox)),As.applyMatrix4(e.matrixWorld),this.union(As)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,dn),dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qr),Rs.subVectors(this.max,qr),qi.subVectors(e.a,qr),Xi.subVectors(e.b,qr),Ki.subVectors(e.c,qr),ni.subVectors(Xi,qi),ii.subVectors(Ki,Xi),yi.subVectors(qi,Ki);let t=[0,-ni.z,ni.y,0,-ii.z,ii.y,0,-yi.z,yi.y,ni.z,0,-ni.x,ii.z,0,-ii.x,yi.z,0,-yi.x,-ni.y,ni.x,0,-ii.y,ii.x,0,-yi.y,yi.x,0];return!to(t,qi,Xi,Ki,Rs)||(t=[1,0,0,0,1,0,0,0,1],!to(t,qi,Xi,Ki,Rs))?!1:(Cs.crossVectors(ni,ii),t=[Cs.x,Cs.y,Cs.z],to(t,qi,Xi,Ki,Rs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Nn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Nn=[new N,new N,new N,new N,new N,new N,new N,new N],dn=new N,As=new Gi,qi=new N,Xi=new N,Ki=new N,ni=new N,ii=new N,yi=new N,qr=new N,Rs=new N,Cs=new N,wi=new N;function to(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){wi.fromArray(n,s);const o=r.x*Math.abs(wi.x)+r.y*Math.abs(wi.y)+r.z*Math.abs(wi.z),l=e.dot(wi),c=t.dot(wi),u=i.dot(wi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const rp=new Gi,Xr=new N,no=new N;class Br{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):rp.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xr.subVectors(e,this.center);const t=Xr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Xr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(no.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xr.copy(e.center).add(no)),this.expandByPoint(Xr.copy(e.center).sub(no))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const On=new N,io=new N,Ps=new N,ri=new N,ro=new N,Is=new N,so=new N;class Zh{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,On)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=On.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(On.copy(this.origin).addScaledVector(this.direction,t),On.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){io.copy(e).add(t).multiplyScalar(.5),Ps.copy(t).sub(e).normalize(),ri.copy(this.origin).sub(io);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Ps),o=ri.dot(this.direction),l=-ri.dot(Ps),c=ri.lengthSq(),u=Math.abs(1-a*a);let h,d,f,g;if(u>0)if(h=a*l-o,d=a*o-l,g=s*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,f=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(io).addScaledVector(Ps,d),f}intersectSphere(e,t){On.subVectors(e.center,this.origin);const i=On.dot(this.direction),r=On.dot(On)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,On)!==null}intersectTriangle(e,t,i,r,s){ro.subVectors(t,e),Is.subVectors(i,e),so.crossVectors(ro,Is);let a=this.direction.dot(so),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ri.subVectors(this.origin,e);const l=o*this.direction.dot(Is.crossVectors(ri,Is));if(l<0)return null;const c=o*this.direction.dot(ro.cross(ri));if(c<0||l+c>a)return null;const u=-o*ri.dot(so);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ut{constructor(e,t,i,r,s,a,o,l,c,u,h,d,f,g,_,m){ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,h,d,f,g,_,m)}set(e,t,i,r,s,a,o,l,c,u,h,d,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ut().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Yi.setFromMatrixColumn(e,0).length(),s=1/Yi.setFromMatrixColumn(e,1).length(),a=1/Yi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*u,f=a*h,g=o*u,_=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+g*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,g=c*u,_=c*h;t[0]=d+_*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=f*o-g,t[6]=_+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,g=c*u,_=c*h;t[0]=d-_*o,t[4]=-a*h,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*u,t[9]=_-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,f=a*h,g=o*u,_=o*h;t[0]=l*u,t[4]=g*c-f,t[8]=d*c+_,t[1]=l*h,t[5]=_*c+d,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=_-d*h,t[8]=g*h+f,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*h+g,t[10]=d-_*h}else if(e.order==="XZY"){const d=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+_,t[5]=a*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=o*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sp,e,ap)}lookAt(e,t,i){const r=this.elements;return Qt.subVectors(e,t),Qt.lengthSq()===0&&(Qt.z=1),Qt.normalize(),si.crossVectors(i,Qt),si.lengthSq()===0&&(Math.abs(i.z)===1?Qt.x+=1e-4:Qt.z+=1e-4,Qt.normalize(),si.crossVectors(i,Qt)),si.normalize(),Ls.crossVectors(Qt,si),r[0]=si.x,r[4]=Ls.x,r[8]=Qt.x,r[1]=si.y,r[5]=Ls.y,r[9]=Qt.y,r[2]=si.z,r[6]=Ls.z,r[10]=Qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],f=i[13],g=i[2],_=i[6],m=i[10],p=i[14],y=i[3],v=i[7],w=i[11],L=i[15],A=r[0],R=r[4],P=r[8],x=r[12],S=r[1],C=r[5],z=r[9],H=r[13],$=r[2],ee=r[6],Y=r[10],te=r[14],q=r[3],le=r[7],pe=r[11],_e=r[15];return s[0]=a*A+o*S+l*$+c*q,s[4]=a*R+o*C+l*ee+c*le,s[8]=a*P+o*z+l*Y+c*pe,s[12]=a*x+o*H+l*te+c*_e,s[1]=u*A+h*S+d*$+f*q,s[5]=u*R+h*C+d*ee+f*le,s[9]=u*P+h*z+d*Y+f*pe,s[13]=u*x+h*H+d*te+f*_e,s[2]=g*A+_*S+m*$+p*q,s[6]=g*R+_*C+m*ee+p*le,s[10]=g*P+_*z+m*Y+p*pe,s[14]=g*x+_*H+m*te+p*_e,s[3]=y*A+v*S+w*$+L*q,s[7]=y*R+v*C+w*ee+L*le,s[11]=y*P+v*z+w*Y+L*pe,s[15]=y*x+v*H+w*te+L*_e,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*l*h-r*c*h-s*o*d+i*c*d+r*o*f-i*l*f)+_*(+t*l*f-t*c*d+s*a*d-r*a*f+r*c*u-s*l*u)+m*(+t*c*h-t*o*f-s*a*h+i*a*f+s*o*u-i*c*u)+p*(-r*o*u-t*l*h+t*o*d+r*a*h-i*a*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],y=h*m*c-_*d*c+_*l*f-o*m*f-h*l*p+o*d*p,v=g*d*c-u*m*c-g*l*f+a*m*f+u*l*p-a*d*p,w=u*_*c-g*h*c+g*o*f-a*_*f-u*o*p+a*h*p,L=g*h*l-u*_*l-g*o*d+a*_*d+u*o*m-a*h*m,A=t*y+i*v+r*w+s*L;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return e[0]=y*R,e[1]=(_*d*s-h*m*s-_*r*f+i*m*f+h*r*p-i*d*p)*R,e[2]=(o*m*s-_*l*s+_*r*c-i*m*c-o*r*p+i*l*p)*R,e[3]=(h*l*s-o*d*s-h*r*c+i*d*c+o*r*f-i*l*f)*R,e[4]=v*R,e[5]=(u*m*s-g*d*s+g*r*f-t*m*f-u*r*p+t*d*p)*R,e[6]=(g*l*s-a*m*s-g*r*c+t*m*c+a*r*p-t*l*p)*R,e[7]=(a*d*s-u*l*s+u*r*c-t*d*c-a*r*f+t*l*f)*R,e[8]=w*R,e[9]=(g*h*s-u*_*s-g*i*f+t*_*f+u*i*p-t*h*p)*R,e[10]=(a*_*s-g*o*s+g*i*c-t*_*c-a*i*p+t*o*p)*R,e[11]=(u*o*s-a*h*s-u*i*c+t*h*c+a*i*f-t*o*f)*R,e[12]=L*R,e[13]=(u*_*r-g*h*r+g*i*d-t*_*d-u*i*m+t*h*m)*R,e[14]=(g*o*r-a*_*r-g*i*l+t*_*l+a*i*m-t*o*m)*R,e[15]=(a*h*r-u*o*r+u*i*l-t*h*l-a*i*d+t*o*d)*R,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,h=o+o,d=s*c,f=s*u,g=s*h,_=a*u,m=a*h,p=o*h,y=l*c,v=l*u,w=l*h,L=i.x,A=i.y,R=i.z;return r[0]=(1-(_+p))*L,r[1]=(f+w)*L,r[2]=(g-v)*L,r[3]=0,r[4]=(f-w)*A,r[5]=(1-(d+p))*A,r[6]=(m+y)*A,r[7]=0,r[8]=(g+v)*R,r[9]=(m-y)*R,r[10]=(1-(d+_))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Yi.set(r[0],r[1],r[2]).length();const a=Yi.set(r[4],r[5],r[6]).length(),o=Yi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],fn.copy(this);const c=1/s,u=1/a,h=1/o;return fn.elements[0]*=c,fn.elements[1]*=c,fn.elements[2]*=c,fn.elements[4]*=u,fn.elements[5]*=u,fn.elements[6]*=u,fn.elements[8]*=h,fn.elements[9]*=h,fn.elements[10]*=h,t.setFromRotationMatrix(fn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=qn){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),h=(t+e)/(t-e),d=(i+r)/(i-r);let f,g;if(o===qn)f=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===ba)f=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=qn){const l=this.elements,c=1/(t-e),u=1/(i-r),h=1/(a-s),d=(t+e)*c,f=(i+r)*u;let g,_;if(o===qn)g=(a+s)*h,_=-2*h;else if(o===ba)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Yi=new N,fn=new ut,sp=new N(0,0,0),ap=new N(1,1,1),si=new N,Ls=new N,Qt=new N,Ec=new ut,Mc=new Fr;class In{constructor(e=0,t=0,i=0,r=In.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],h=r[2],d=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(jt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-jt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ec.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ec,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Mc.setFromEuler(this),this.setFromQuaternion(Mc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}In.DEFAULT_ORDER="XYZ";class Qh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let op=0;const Tc=new N,Ji=new Fr,kn=new ut,Ds=new N,Kr=new N,lp=new N,cp=new Fr,Ac=new N(1,0,0),Rc=new N(0,1,0),Cc=new N(0,0,1),Pc={type:"added"},up={type:"removed"},Zi={type:"childadded",child:null},ao={type:"childremoved",child:null};class St extends kr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:op++}),this.uuid=bs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=St.DEFAULT_UP.clone();const e=new N,t=new In,i=new Fr,r=new N(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ut},normalMatrix:{value:new Ye}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=St.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ji.setFromAxisAngle(e,t),this.quaternion.multiply(Ji),this}rotateOnWorldAxis(e,t){return Ji.setFromAxisAngle(e,t),this.quaternion.premultiply(Ji),this}rotateX(e){return this.rotateOnAxis(Ac,e)}rotateY(e){return this.rotateOnAxis(Rc,e)}rotateZ(e){return this.rotateOnAxis(Cc,e)}translateOnAxis(e,t){return Tc.copy(e).applyQuaternion(this.quaternion),this.position.add(Tc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ac,e)}translateY(e){return this.translateOnAxis(Rc,e)}translateZ(e){return this.translateOnAxis(Cc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(kn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ds.copy(e):Ds.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Kr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kn.lookAt(Kr,Ds,this.up):kn.lookAt(Ds,Kr,this.up),this.quaternion.setFromRotationMatrix(kn),r&&(kn.extractRotation(r.matrixWorld),Ji.setFromRotationMatrix(kn),this.quaternion.premultiply(Ji.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Pc),Zi.child=e,this.dispatchEvent(Zi),Zi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(up),ao.child=e,this.dispatchEvent(ao),ao.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(kn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Pc),Zi.child=e,this.dispatchEvent(Zi),Zi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kr,e,lp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kr,cp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}St.DEFAULT_UP=new N(0,1,0);St.DEFAULT_MATRIX_AUTO_UPDATE=!0;St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pn=new N,Fn=new N,oo=new N,Bn=new N,Qi=new N,er=new N,Ic=new N,lo=new N,co=new N,uo=new N,ho=new ct,fo=new ct,po=new ct;class vn{constructor(e=new N,t=new N,i=new N){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),pn.subVectors(e,t),r.cross(pn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){pn.subVectors(r,t),Fn.subVectors(i,t),oo.subVectors(e,t);const a=pn.dot(pn),o=pn.dot(Fn),l=pn.dot(oo),c=Fn.dot(Fn),u=Fn.dot(oo),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,f=(c*l-o*u)*d,g=(a*u-o*l)*d;return s.set(1-f-g,g,f)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Bn)===null?!1:Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,Bn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Bn.x),l.addScaledVector(a,Bn.y),l.addScaledVector(o,Bn.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return ho.setScalar(0),fo.setScalar(0),po.setScalar(0),ho.fromBufferAttribute(e,t),fo.fromBufferAttribute(e,i),po.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(ho,s.x),a.addScaledVector(fo,s.y),a.addScaledVector(po,s.z),a}static isFrontFacing(e,t,i,r){return pn.subVectors(i,t),Fn.subVectors(e,t),pn.cross(Fn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pn.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),pn.cross(Fn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return vn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return vn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return vn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Qi.subVectors(r,i),er.subVectors(s,i),lo.subVectors(e,i);const l=Qi.dot(lo),c=er.dot(lo);if(l<=0&&c<=0)return t.copy(i);co.subVectors(e,r);const u=Qi.dot(co),h=er.dot(co);if(u>=0&&h<=u)return t.copy(r);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(Qi,a);uo.subVectors(e,s);const f=Qi.dot(uo),g=er.dot(uo);if(g>=0&&f<=g)return t.copy(s);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(er,o);const m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return Ic.subVectors(s,r),o=(h-u)/(h-u+(f-g)),t.copy(r).addScaledVector(Ic,o);const p=1/(m+_+d);return a=_*p,o=d*p,t.copy(i).addScaledVector(Qi,a).addScaledVector(er,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ed={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ai={h:0,s:0,l:0},Us={h:0,s:0,l:0};function mo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Te{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=tt.workingColorSpace){return this.r=e,this.g=t,this.b=i,tt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=tt.workingColorSpace){if(e=Xf(e,1),t=jt(t,0,1),i=jt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=mo(a,s,e+1/3),this.g=mo(a,s,e),this.b=mo(a,s,e-1/3)}return tt.toWorkingColorSpace(this,r),this}setStyle(e,t=vt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vt){const i=ed[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yn(e.r),this.g=Yn(e.g),this.b=Yn(e.b),this}copyLinearToSRGB(e){return this.r=yr(e.r),this.g=yr(e.g),this.b=yr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vt){return tt.fromWorkingColorSpace(Nt.copy(this),e),Math.round(jt(Nt.r*255,0,255))*65536+Math.round(jt(Nt.g*255,0,255))*256+Math.round(jt(Nt.b*255,0,255))}getHexString(e=vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.fromWorkingColorSpace(Nt.copy(this),t);const i=Nt.r,r=Nt.g,s=Nt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=tt.workingColorSpace){return tt.fromWorkingColorSpace(Nt.copy(this),t),e.r=Nt.r,e.g=Nt.g,e.b=Nt.b,e}getStyle(e=vt){tt.fromWorkingColorSpace(Nt.copy(this),e);const t=Nt.r,i=Nt.g,r=Nt.b;return e!==vt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ai),this.setHSL(ai.h+e,ai.s+t,ai.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ai),e.getHSL(Us);const i=Ja(ai.h,Us.h,t),r=Ja(ai.s,Us.s,t),s=Ja(ai.l,Us.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nt=new Te;Te.NAMES=ed;let hp=0;class zr extends kr{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=bs(),this.name="",this.blending=_r,this.side=_i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ho,this.blendDst=Go,this.blendEquation=Pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Te(0,0,0),this.blendAlpha=0,this.depthFunc=Ar,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ji,this.stencilZFail=ji,this.stencilZPass=ji,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==_r&&(i.blending=this.blending),this.side!==_i&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ho&&(i.blendSrc=this.blendSrc),this.blendDst!==Go&&(i.blendDst=this.blendDst),this.blendEquation!==Pi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ar&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==pc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ji&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ji&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ji&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ht extends zr{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.combine=Ih,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bt=new N,Ns=new ze;class zt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=mc,this.updateRanges=[],this.gpuType=Cn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ns.fromBufferAttribute(this,t),Ns.applyMatrix3(e),this.setXY(t,Ns.x,Ns.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=$r(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Vt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=$r(t,this.array)),t}setX(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=$r(t,this.array)),t}setY(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=$r(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=$r(t,this.array)),t}setW(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),i=Vt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),i=Vt(i,this.array),r=Vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),i=Vt(i,this.array),r=Vt(r,this.array),s=Vt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==mc&&(e.usage=this.usage),e}}class td extends zt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class nd extends zt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class It extends zt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let dp=0;const cn=new ut,go=new St,tr=new N,en=new Gi,Yr=new Gi,Ct=new N;class Kt extends kr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dp++}),this.uuid=bs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Kh(e)?nd:td)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ye().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return cn.makeRotationFromQuaternion(e),this.applyMatrix4(cn),this}rotateX(e){return cn.makeRotationX(e),this.applyMatrix4(cn),this}rotateY(e){return cn.makeRotationY(e),this.applyMatrix4(cn),this}rotateZ(e){return cn.makeRotationZ(e),this.applyMatrix4(cn),this}translate(e,t,i){return cn.makeTranslation(e,t,i),this.applyMatrix4(cn),this}scale(e,t,i){return cn.makeScale(e,t,i),this.applyMatrix4(cn),this}lookAt(e){return go.lookAt(e),go.updateMatrix(),this.applyMatrix4(go.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(tr).negate(),this.translate(tr.x,tr.y,tr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new It(i,3))}else{for(let i=0,r=t.count;i<r;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];en.setFromBufferAttribute(s),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Br);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(en.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Yr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ct.addVectors(en.min,Yr.min),en.expandByPoint(Ct),Ct.addVectors(en.max,Yr.max),en.expandByPoint(Ct)):(en.expandByPoint(Yr.min),en.expandByPoint(Yr.max))}en.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Ct.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ct));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ct.fromBufferAttribute(o,c),l&&(tr.fromBufferAttribute(e,c),Ct.add(tr)),r=Math.max(r,i.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zt(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<i.count;P++)o[P]=new N,l[P]=new N;const c=new N,u=new N,h=new N,d=new ze,f=new ze,g=new ze,_=new N,m=new N;function p(P,x,S){c.fromBufferAttribute(i,P),u.fromBufferAttribute(i,x),h.fromBufferAttribute(i,S),d.fromBufferAttribute(s,P),f.fromBufferAttribute(s,x),g.fromBufferAttribute(s,S),u.sub(c),h.sub(c),f.sub(d),g.sub(d);const C=1/(f.x*g.y-g.x*f.y);isFinite(C)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(C),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(C),o[P].add(_),o[x].add(_),o[S].add(_),l[P].add(m),l[x].add(m),l[S].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let P=0,x=y.length;P<x;++P){const S=y[P],C=S.start,z=S.count;for(let H=C,$=C+z;H<$;H+=3)p(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const v=new N,w=new N,L=new N,A=new N;function R(P){L.fromBufferAttribute(r,P),A.copy(L);const x=o[P];v.copy(x),v.sub(L.multiplyScalar(L.dot(x))).normalize(),w.crossVectors(A,x);const C=w.dot(l[P])<0?-1:1;a.setXYZW(P,v.x,v.y,v.z,C)}for(let P=0,x=y.length;P<x;++P){const S=y[P],C=S.start,z=S.count;for(let H=C,$=C+z;H<$;H+=3)R(e.getX(H+0)),R(e.getX(H+1)),R(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new zt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const r=new N,s=new N,a=new N,o=new N,l=new N,c=new N,u=new N,h=new N;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ct.fromBufferAttribute(e,t),Ct.normalize(),e.setXYZ(t,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*u;for(let p=0;p<u;p++)d[g++]=c[f++]}return new zt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Kt,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Lc=new ut,xi=new Zh,Os=new Br,Dc=new N,ks=new N,Fs=new N,Bs=new N,_o=new N,zs=new N,Uc=new N,Hs=new N;class fe extends St{constructor(e=new Kt,t=new ht){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){zs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(_o.fromBufferAttribute(h,e),a?zs.addScaledVector(_o,u):zs.addScaledVector(_o.sub(t),u))}t.add(zs)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Os.copy(i.boundingSphere),Os.applyMatrix4(s),xi.copy(e.ray).recast(e.near),!(Os.containsPoint(xi.origin)===!1&&(xi.intersectSphere(Os,Dc)===null||xi.origin.distanceToSquared(Dc)>(e.far-e.near)**2))&&(Lc.copy(s).invert(),xi.copy(e.ray).applyMatrix4(Lc),!(i.boundingBox!==null&&xi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,xi)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),v=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let w=y,L=v;w<L;w+=3){const A=o.getX(w),R=o.getX(w+1),P=o.getX(w+2);r=Gs(this,p,e,i,c,u,h,A,R,P),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const y=o.getX(m),v=o.getX(m+1),w=o.getX(m+2);r=Gs(this,a,e,i,c,u,h,y,v,w),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),v=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let w=y,L=v;w<L;w+=3){const A=w,R=w+1,P=w+2;r=Gs(this,p,e,i,c,u,h,A,R,P),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const y=m,v=m+1,w=m+2;r=Gs(this,a,e,i,c,u,h,y,v,w),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function fp(n,e,t,i,r,s,a,o){let l;if(e.side===Bt?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===_i,o),l===null)return null;Hs.copy(o),Hs.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Hs);return c<t.near||c>t.far?null:{distance:c,point:Hs.clone(),object:n}}function Gs(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,ks),n.getVertexPosition(l,Fs),n.getVertexPosition(c,Bs);const u=fp(n,e,t,i,ks,Fs,Bs,Uc);if(u){const h=new N;vn.getBarycoord(Uc,ks,Fs,Bs,h),r&&(u.uv=vn.getInterpolatedAttribute(r,o,l,c,h,new ze)),s&&(u.uv1=vn.getInterpolatedAttribute(s,o,l,c,h,new ze)),a&&(u.normal=vn.getInterpolatedAttribute(a,o,l,c,h,new N),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new N,materialIndex:0};vn.getNormal(ks,Fs,Bs,d.normal),u.face=d,u.barycoord=h}return u}class $e extends Kt{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new It(c,3)),this.setAttribute("normal",new It(u,3)),this.setAttribute("uv",new It(h,2));function g(_,m,p,y,v,w,L,A,R,P,x){const S=w/R,C=L/P,z=w/2,H=L/2,$=A/2,ee=R+1,Y=P+1;let te=0,q=0;const le=new N;for(let pe=0;pe<Y;pe++){const _e=pe*C-H;for(let ke=0;ke<ee;ke++){const Je=ke*S-z;le[_]=Je*y,le[m]=_e*v,le[p]=$,c.push(le.x,le.y,le.z),le[_]=0,le[m]=0,le[p]=A>0?1:-1,u.push(le.x,le.y,le.z),h.push(ke/R),h.push(1-pe/P),te+=1}}for(let pe=0;pe<P;pe++)for(let _e=0;_e<R;_e++){const ke=d+_e+ee*pe,Je=d+_e+ee*(pe+1),Z=d+(_e+1)+ee*(pe+1),ae=d+(_e+1)+ee*pe;l.push(ke,Je,ae),l.push(Je,Z,ae),q+=6}o.addGroup(f,q,x),f+=q,d+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $e(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Lr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Ft(n){const e={};for(let t=0;t<n.length;t++){const i=Lr(n[t]);for(const r in i)e[r]=i[r]}return e}function pp(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function id(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const fs={clone:Lr,merge:Ft};var mp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Dt extends zr{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mp,this.fragmentShader=gp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Lr(e.uniforms),this.uniformsGroups=pp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class rd extends St{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=qn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const oi=new N,Nc=new ze,Oc=new ze;class $t extends rd{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ml*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ya*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ml*2*Math.atan(Math.tan(Ya*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(oi.x,oi.y).multiplyScalar(-e/oi.z),oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(oi.x,oi.y).multiplyScalar(-e/oi.z)}getViewSize(e,t){return this.getViewBounds(e,Nc,Oc),t.subVectors(Oc,Nc)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ya*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const nr=-90,ir=1;class _p extends St{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new $t(nr,ir,e,t);r.layers=this.layers,this.add(r);const s=new $t(nr,ir,e,t);s.layers=this.layers,this.add(s);const a=new $t(nr,ir,e,t);a.layers=this.layers,this.add(a);const o=new $t(nr,ir,e,t);o.layers=this.layers,this.add(o);const l=new $t(nr,ir,e,t);l.layers=this.layers,this.add(l);const c=new $t(nr,ir,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===qn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ba)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class sd extends kt{constructor(e,t,i,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Rr,super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class vp extends Sn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new sd(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Rn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new $e(5,5,5),s=new Dt({name:"CubemapFromEquirect",uniforms:Lr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Bt,blending:Xn});s.uniforms.tEquirect.value=t;const a=new fe(r,s),o=t.minFilter;return t.minFilter===Ui&&(t.minFilter=Rn),new _p(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const vo=new N,yp=new N,wp=new Ye;class Ai{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=vo.subVectors(i,t).cross(yp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(vo),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||wp.getNormalMatrix(e),r=this.coplanarPoint(vo).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Si=new Br,Vs=new N;class Yl{constructor(e=new Ai,t=new Ai,i=new Ai,r=new Ai,s=new Ai,a=new Ai){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=qn){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],h=r[6],d=r[7],f=r[8],g=r[9],_=r[10],m=r[11],p=r[12],y=r[13],v=r[14],w=r[15];if(i[0].setComponents(l-s,d-c,m-f,w-p).normalize(),i[1].setComponents(l+s,d+c,m+f,w+p).normalize(),i[2].setComponents(l+a,d+u,m+g,w+y).normalize(),i[3].setComponents(l-a,d-u,m-g,w-y).normalize(),i[4].setComponents(l-o,d-h,m-_,w-v).normalize(),t===qn)i[5].setComponents(l+o,d+h,m+_,w+v).normalize();else if(t===ba)i[5].setComponents(o,h,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Si.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Si.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Si)}intersectsSprite(e){return Si.center.set(0,0,0),Si.radius=.7071067811865476,Si.applyMatrix4(e.matrixWorld),this.intersectsSphere(Si)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Vs.x=r.normal.x>0?e.max.x:e.min.x,Vs.y=r.normal.y>0?e.max.y:e.min.y,Vs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Vs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ad(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function xp(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,o),h.length===0)n.bufferSubData(c,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){const g=h[d],_=h[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,h[d]=_)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){const _=h[f];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class mt extends Kt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,h=e/o,d=t/l,f=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const y=p*d-a;for(let v=0;v<c;v++){const w=v*h-s;g.push(w,-y,0),_.push(0,0,1),m.push(v/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){const v=y+c*p,w=y+c*(p+1),L=y+1+c*(p+1),A=y+1+c*p;f.push(v,w,A),f.push(w,L,A)}this.setIndex(f),this.setAttribute("position",new It(g,3)),this.setAttribute("normal",new It(_,3)),this.setAttribute("uv",new It(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mt(e.width,e.height,e.widthSegments,e.heightSegments)}}var Sp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ep=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ap=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Cp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Ip=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Lp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Dp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Up=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Np=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Op=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,kp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Fp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Bp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Gp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Vp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Wp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,jp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,$p=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,qp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Xp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Kp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Yp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,em=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,tm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,im=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,sm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,am=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,om=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,um=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,pm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,mm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_m=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ym=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,wm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,xm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Sm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,bm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Em=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Mm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Am=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Rm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Im=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Um=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Nm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Om=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,km=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Fm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,zm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Hm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,jm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$m=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Km=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ym=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Jm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,eg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ng=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ig=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,rg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,sg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ag=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,og=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,cg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ug=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,hg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,mg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,gg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,_g=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,wg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const xg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Sg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Eg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ag=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Rg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Cg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Pg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ig=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Lg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ug=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ng=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Og=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,zg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Gg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Vg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,$g=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Yg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Jg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,e_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qe={alphahash_fragment:Sp,alphahash_pars_fragment:bp,alphamap_fragment:Ep,alphamap_pars_fragment:Mp,alphatest_fragment:Tp,alphatest_pars_fragment:Ap,aomap_fragment:Rp,aomap_pars_fragment:Cp,batching_pars_vertex:Pp,batching_vertex:Ip,begin_vertex:Lp,beginnormal_vertex:Dp,bsdfs:Up,iridescence_fragment:Np,bumpmap_pars_fragment:Op,clipping_planes_fragment:kp,clipping_planes_pars_fragment:Fp,clipping_planes_pars_vertex:Bp,clipping_planes_vertex:zp,color_fragment:Hp,color_pars_fragment:Gp,color_pars_vertex:Vp,color_vertex:Wp,common:jp,cube_uv_reflection_fragment:$p,defaultnormal_vertex:qp,displacementmap_pars_vertex:Xp,displacementmap_vertex:Kp,emissivemap_fragment:Yp,emissivemap_pars_fragment:Jp,colorspace_fragment:Zp,colorspace_pars_fragment:Qp,envmap_fragment:em,envmap_common_pars_fragment:tm,envmap_pars_fragment:nm,envmap_pars_vertex:im,envmap_physical_pars_fragment:pm,envmap_vertex:rm,fog_vertex:sm,fog_pars_vertex:am,fog_fragment:om,fog_pars_fragment:lm,gradientmap_pars_fragment:cm,lightmap_pars_fragment:um,lights_lambert_fragment:hm,lights_lambert_pars_fragment:dm,lights_pars_begin:fm,lights_toon_fragment:mm,lights_toon_pars_fragment:gm,lights_phong_fragment:_m,lights_phong_pars_fragment:vm,lights_physical_fragment:ym,lights_physical_pars_fragment:wm,lights_fragment_begin:xm,lights_fragment_maps:Sm,lights_fragment_end:bm,logdepthbuf_fragment:Em,logdepthbuf_pars_fragment:Mm,logdepthbuf_pars_vertex:Tm,logdepthbuf_vertex:Am,map_fragment:Rm,map_pars_fragment:Cm,map_particle_fragment:Pm,map_particle_pars_fragment:Im,metalnessmap_fragment:Lm,metalnessmap_pars_fragment:Dm,morphinstance_vertex:Um,morphcolor_vertex:Nm,morphnormal_vertex:Om,morphtarget_pars_vertex:km,morphtarget_vertex:Fm,normal_fragment_begin:Bm,normal_fragment_maps:zm,normal_pars_fragment:Hm,normal_pars_vertex:Gm,normal_vertex:Vm,normalmap_pars_fragment:Wm,clearcoat_normal_fragment_begin:jm,clearcoat_normal_fragment_maps:$m,clearcoat_pars_fragment:qm,iridescence_pars_fragment:Xm,opaque_fragment:Km,packing:Ym,premultiplied_alpha_fragment:Jm,project_vertex:Zm,dithering_fragment:Qm,dithering_pars_fragment:eg,roughnessmap_fragment:tg,roughnessmap_pars_fragment:ng,shadowmap_pars_fragment:ig,shadowmap_pars_vertex:rg,shadowmap_vertex:sg,shadowmask_pars_fragment:ag,skinbase_vertex:og,skinning_pars_vertex:lg,skinning_vertex:cg,skinnormal_vertex:ug,specularmap_fragment:hg,specularmap_pars_fragment:dg,tonemapping_fragment:fg,tonemapping_pars_fragment:pg,transmission_fragment:mg,transmission_pars_fragment:gg,uv_pars_fragment:_g,uv_pars_vertex:vg,uv_vertex:yg,worldpos_vertex:wg,background_vert:xg,background_frag:Sg,backgroundCube_vert:bg,backgroundCube_frag:Eg,cube_vert:Mg,cube_frag:Tg,depth_vert:Ag,depth_frag:Rg,distanceRGBA_vert:Cg,distanceRGBA_frag:Pg,equirect_vert:Ig,equirect_frag:Lg,linedashed_vert:Dg,linedashed_frag:Ug,meshbasic_vert:Ng,meshbasic_frag:Og,meshlambert_vert:kg,meshlambert_frag:Fg,meshmatcap_vert:Bg,meshmatcap_frag:zg,meshnormal_vert:Hg,meshnormal_frag:Gg,meshphong_vert:Vg,meshphong_frag:Wg,meshphysical_vert:jg,meshphysical_frag:$g,meshtoon_vert:qg,meshtoon_frag:Xg,points_vert:Kg,points_frag:Yg,shadow_vert:Jg,shadow_frag:Zg,sprite_vert:Qg,sprite_frag:e_},me={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},Tn={basic:{uniforms:Ft([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:Ft([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Te(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:Ft([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:Ft([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:Ft([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Te(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:Ft([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:Ft([me.points,me.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:Ft([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:Ft([me.common,me.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:Ft([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:Ft([me.sprite,me.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:Ft([me.common,me.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:Ft([me.lights,me.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};Tn.physical={uniforms:Ft([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const Ws={r:0,b:0,g:0},bi=new In,t_=new ut;function n_(n,e,t,i,r,s,a){const o=new Te(0);let l=s===!0?0:1,c,u,h=null,d=0,f=null;function g(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?t:e).get(v)),v}function _(y){let v=!1;const w=g(y);w===null?p(o,l):w&&w.isColor&&(p(w,1),v=!0);const L=n.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(y,v){const w=g(v);w&&(w.isCubeTexture||w.mapping===ka)?(u===void 0&&(u=new fe(new $e(1,1,1),new Dt({name:"BackgroundCubeMaterial",uniforms:Lr(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:Bt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),bi.copy(v.backgroundRotation),bi.x*=-1,bi.y*=-1,bi.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(bi.y*=-1,bi.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(t_.makeRotationFromEuler(bi)),u.material.toneMapped=tt.getTransfer(w.colorSpace)!==at,(h!==w||d!==w.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,h=w,d=w.version,f=n.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new fe(new mt(2,2),new Dt({name:"BackgroundMaterial",uniforms:Lr(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=tt.getTransfer(w.colorSpace)!==at,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(h!==w||d!==w.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,h=w,d=w.version,f=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,v){y.getRGB(Ws,id(n)),i.buffers.color.setClear(Ws.r,Ws.g,Ws.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(y,v=1){o.set(y),l=v,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(o,l)},render:_,addToRenderList:m}}function i_(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(S,C,z,H,$){let ee=!1;const Y=h(H,z,C);s!==Y&&(s=Y,c(s.object)),ee=f(S,H,z,$),ee&&g(S,H,z,$),$!==null&&e.update($,n.ELEMENT_ARRAY_BUFFER),(ee||a)&&(a=!1,w(S,C,z,H),$!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function l(){return n.createVertexArray()}function c(S){return n.bindVertexArray(S)}function u(S){return n.deleteVertexArray(S)}function h(S,C,z){const H=z.wireframe===!0;let $=i[S.id];$===void 0&&($={},i[S.id]=$);let ee=$[C.id];ee===void 0&&(ee={},$[C.id]=ee);let Y=ee[H];return Y===void 0&&(Y=d(l()),ee[H]=Y),Y}function d(S){const C=[],z=[],H=[];for(let $=0;$<t;$++)C[$]=0,z[$]=0,H[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:z,attributeDivisors:H,object:S,attributes:{},index:null}}function f(S,C,z,H){const $=s.attributes,ee=C.attributes;let Y=0;const te=z.getAttributes();for(const q in te)if(te[q].location>=0){const pe=$[q];let _e=ee[q];if(_e===void 0&&(q==="instanceMatrix"&&S.instanceMatrix&&(_e=S.instanceMatrix),q==="instanceColor"&&S.instanceColor&&(_e=S.instanceColor)),pe===void 0||pe.attribute!==_e||_e&&pe.data!==_e.data)return!0;Y++}return s.attributesNum!==Y||s.index!==H}function g(S,C,z,H){const $={},ee=C.attributes;let Y=0;const te=z.getAttributes();for(const q in te)if(te[q].location>=0){let pe=ee[q];pe===void 0&&(q==="instanceMatrix"&&S.instanceMatrix&&(pe=S.instanceMatrix),q==="instanceColor"&&S.instanceColor&&(pe=S.instanceColor));const _e={};_e.attribute=pe,pe&&pe.data&&(_e.data=pe.data),$[q]=_e,Y++}s.attributes=$,s.attributesNum=Y,s.index=H}function _(){const S=s.newAttributes;for(let C=0,z=S.length;C<z;C++)S[C]=0}function m(S){p(S,0)}function p(S,C){const z=s.newAttributes,H=s.enabledAttributes,$=s.attributeDivisors;z[S]=1,H[S]===0&&(n.enableVertexAttribArray(S),H[S]=1),$[S]!==C&&(n.vertexAttribDivisor(S,C),$[S]=C)}function y(){const S=s.newAttributes,C=s.enabledAttributes;for(let z=0,H=C.length;z<H;z++)C[z]!==S[z]&&(n.disableVertexAttribArray(z),C[z]=0)}function v(S,C,z,H,$,ee,Y){Y===!0?n.vertexAttribIPointer(S,C,z,$,ee):n.vertexAttribPointer(S,C,z,H,$,ee)}function w(S,C,z,H){_();const $=H.attributes,ee=z.getAttributes(),Y=C.defaultAttributeValues;for(const te in ee){const q=ee[te];if(q.location>=0){let le=$[te];if(le===void 0&&(te==="instanceMatrix"&&S.instanceMatrix&&(le=S.instanceMatrix),te==="instanceColor"&&S.instanceColor&&(le=S.instanceColor)),le!==void 0){const pe=le.normalized,_e=le.itemSize,ke=e.get(le);if(ke===void 0)continue;const Je=ke.buffer,Z=ke.type,ae=ke.bytesPerElement,Se=Z===n.INT||Z===n.UNSIGNED_INT||le.gpuType===Vl;if(le.isInterleavedBufferAttribute){const ue=le.data,Re=ue.stride,Fe=le.offset;if(ue.isInstancedInterleavedBuffer){for(let be=0;be<q.locationSize;be++)p(q.location+be,ue.meshPerAttribute);S.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let be=0;be<q.locationSize;be++)m(q.location+be);n.bindBuffer(n.ARRAY_BUFFER,Je);for(let be=0;be<q.locationSize;be++)v(q.location+be,_e/q.locationSize,Z,pe,Re*ae,(Fe+_e/q.locationSize*be)*ae,Se)}else{if(le.isInstancedBufferAttribute){for(let ue=0;ue<q.locationSize;ue++)p(q.location+ue,le.meshPerAttribute);S.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ue=0;ue<q.locationSize;ue++)m(q.location+ue);n.bindBuffer(n.ARRAY_BUFFER,Je);for(let ue=0;ue<q.locationSize;ue++)v(q.location+ue,_e/q.locationSize,Z,pe,_e*ae,_e/q.locationSize*ue*ae,Se)}}else if(Y!==void 0){const pe=Y[te];if(pe!==void 0)switch(pe.length){case 2:n.vertexAttrib2fv(q.location,pe);break;case 3:n.vertexAttrib3fv(q.location,pe);break;case 4:n.vertexAttrib4fv(q.location,pe);break;default:n.vertexAttrib1fv(q.location,pe)}}}}y()}function L(){P();for(const S in i){const C=i[S];for(const z in C){const H=C[z];for(const $ in H)u(H[$].object),delete H[$];delete C[z]}delete i[S]}}function A(S){if(i[S.id]===void 0)return;const C=i[S.id];for(const z in C){const H=C[z];for(const $ in H)u(H[$].object),delete H[$];delete C[z]}delete i[S.id]}function R(S){for(const C in i){const z=i[C];if(z[S.id]===void 0)continue;const H=z[S.id];for(const $ in H)u(H[$].object),delete H[$];delete z[S.id]}}function P(){x(),a=!0,s!==r&&(s=r,c(s.object))}function x(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:P,resetDefaultState:x,dispose:L,releaseStatesOfGeometry:A,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function r_(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function a(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];t.update(f,i,1)}function l(c,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*d[_];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function s_(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(R){return!(R!==wn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const P=R===Kn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Zn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Cn&&!P)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),w=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:w,vertexTextures:L,maxSamples:A}}function a_(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Ai,o=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||i!==0||r;return r=d,i=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const y=s?0:i,v=y*4;let w=p.clippingState||null;l.value=w,w=u(g,d,v,f);for(let L=0;L!==v;++L)w[L]=t[L];p.clippingState=w,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,f,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,w=f;v!==_;++v,w+=4)a.copy(h[v]).applyMatrix4(y,o),a.normal.toArray(m,w),m[w+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function o_(n){let e=new WeakMap;function t(a,o){return o===Yo?a.mapping=Rr:o===Jo&&(a.mapping=Cr),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Yo||o===Jo)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new vp(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Jl extends rd{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const gr=4,kc=[.125,.215,.35,.446,.526,.582],Ii=20,yo=new Jl,Fc=new Te;let wo=null,xo=0,So=0,bo=!1;const Ri=(1+Math.sqrt(5))/2,rr=1/Ri,Bc=[new N(-Ri,rr,0),new N(Ri,rr,0),new N(-rr,0,Ri),new N(rr,0,Ri),new N(0,Ri,-rr),new N(0,Ri,rr),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class zc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){wo=this._renderer.getRenderTarget(),xo=this._renderer.getActiveCubeFace(),So=this._renderer.getActiveMipmapLevel(),bo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(wo,xo,So),this._renderer.xr.enabled=bo,e.scissorTest=!1,js(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Rr||e.mapping===Cr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wo=this._renderer.getRenderTarget(),xo=this._renderer.getActiveCubeFace(),So=this._renderer.getActiveMipmapLevel(),bo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Rn,minFilter:Rn,generateMipmaps:!1,type:Kn,format:wn,colorSpace:Or,depthBuffer:!1},r=Hc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hc(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=l_(s)),this._blurMaterial=c_(s,e,t)}return r}_compileMaterial(e){const t=new fe(this._lodPlanes[0],e);this._renderer.compile(t,yo)}_sceneToCubeUV(e,t,i,r){const o=new $t(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Fc),u.toneMapping=pi,u.autoClear=!1;const f=new ht({name:"PMREM.Background",side:Bt,depthWrite:!1,depthTest:!1}),g=new fe(new $e,f);let _=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,_=!0):(f.color.copy(Fc),_=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):y===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const v=this._cubeSize;js(r,y*v,p>2?v:0,v,v),u.setRenderTarget(r),_&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Rr||e.mapping===Cr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gc());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new fe(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;js(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,yo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Bc[(r-s-1)%Bc.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new fe(this._lodPlanes[r],c),d=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Ii-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):Ii;m>Ii&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ii}`);const p=[];let y=0;for(let R=0;R<Ii;++R){const P=R/_,x=Math.exp(-P*P/2);p.push(x),R===0?y+=x:R<m&&(y+=2*x)}for(let R=0;R<p.length;R++)p[R]=p[R]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-i;const w=this._sizeLods[r],L=3*w*(r>v-gr?r-v+gr:0),A=4*(this._cubeSize-w);js(t,L,A,3*w,2*w),l.setRenderTarget(t),l.render(h,yo)}}function l_(n){const e=[],t=[],i=[];let r=n;const s=n-gr+1+kc.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-gr?l=kc[a-n+gr-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,_=3,m=2,p=1,y=new Float32Array(_*g*f),v=new Float32Array(m*g*f),w=new Float32Array(p*g*f);for(let A=0;A<f;A++){const R=A%3*2/3-1,P=A>2?0:-1,x=[R,P,0,R+2/3,P,0,R+2/3,P+1,0,R,P,0,R+2/3,P+1,0,R,P+1,0];y.set(x,_*g*A),v.set(d,m*g*A);const S=[A,A,A,A,A,A];w.set(S,p*g*A)}const L=new Kt;L.setAttribute("position",new zt(y,_)),L.setAttribute("uv",new zt(v,m)),L.setAttribute("faceIndex",new zt(w,p)),e.push(L),r>gr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Hc(n,e,t){const i=new Sn(n,e,t);return i.texture.mapping=ka,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function js(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function c_(n,e,t){const i=new Float32Array(Ii),r=new N(0,1,0);return new Dt({name:"SphericalGaussianBlur",defines:{n:Ii,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Zl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Gc(){return new Dt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Vc(){return new Dt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Zl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function u_(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Yo||l===Jo,u=l===Rr||l===Cr;if(c||u){let h=e.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new zc(n)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const f=o.image;return c&&f&&f.height>0||u&&f&&r(f)?(t===null&&(t=new zc(n)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function h_(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&ns("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function d_(n,e,t,i){const r={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}d.removeEventListener("dispose",a),delete r[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)e.update(d[g],n.ARRAY_BUFFER);const f=h.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],n.ARRAY_BUFFER)}}function c(h){const d=[],f=h.index,g=h.attributes.position;let _=0;if(f!==null){const y=f.array;_=f.version;for(let v=0,w=y.length;v<w;v+=3){const L=y[v+0],A=y[v+1],R=y[v+2];d.push(L,A,A,R,R,L)}}else if(g!==void 0){const y=g.array;_=g.version;for(let v=0,w=y.length/3-1;v<w;v+=3){const L=v+0,A=v+1,R=v+2;d.push(L,A,A,R,R,L)}}else return;const m=new(Kh(d)?nd:td)(d,1);m.version=_;const p=s.get(h);p&&e.remove(p),s.set(h,m)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function f_(n,e,t){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,f){n.drawElements(i,f,s,d*a),t.update(f,i,1)}function c(d,f,g){g!==0&&(n.drawElementsInstanced(i,f,s,d*a,g),t.update(f,i,g))}function u(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,i,1)}function h(d,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,s,d,0,_,0,g);let p=0;for(let y=0;y<g;y++)p+=f[y]*_[y];t.update(p,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function p_(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function m_(n,e,t){const i=new WeakMap,r=new ct;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==h){let S=function(){P.dispose(),i.delete(o),o.removeEventListener("dispose",S)};var f=S;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let w=0;g===!0&&(w=1),_===!0&&(w=2),m===!0&&(w=3);let L=o.attributes.position.count*w,A=1;L>e.maxTextureSize&&(A=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const R=new Float32Array(L*A*4*h),P=new Jh(R,L,A,h);P.type=Cn,P.needsUpdate=!0;const x=w*4;for(let C=0;C<h;C++){const z=p[C],H=y[C],$=v[C],ee=L*A*4*C;for(let Y=0;Y<z.count;Y++){const te=Y*x;g===!0&&(r.fromBufferAttribute(z,Y),R[ee+te+0]=r.x,R[ee+te+1]=r.y,R[ee+te+2]=r.z,R[ee+te+3]=0),_===!0&&(r.fromBufferAttribute(H,Y),R[ee+te+4]=r.x,R[ee+te+5]=r.y,R[ee+te+6]=r.z,R[ee+te+7]=0),m===!0&&(r.fromBufferAttribute($,Y),R[ee+te+8]=r.x,R[ee+te+9]=r.y,R[ee+te+10]=r.z,R[ee+te+11]=$.itemSize===4?r.w:1)}}d={count:h,texture:P,size:new ze(L,A)},i.set(o,d),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function g_(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return h}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class od extends kt{constructor(e,t,i,r,s,a,o,l,c,u=vr){if(u!==vr&&u!==Ir)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===vr&&(i=zi),i===void 0&&u===Ir&&(i=Pr),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:rn,this.minFilter=l!==void 0?l:rn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const ld=new kt,Wc=new od(1,1),cd=new Jh,ud=new ip,hd=new sd,jc=[],$c=[],qc=new Float32Array(16),Xc=new Float32Array(9),Kc=new Float32Array(4);function Hr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=jc[r];if(s===void 0&&(s=new Float32Array(r),jc[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Tt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function At(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ba(n,e){let t=$c[e];t===void 0&&(t=new Int32Array(e),$c[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function __(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function v_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;n.uniform2fv(this.addr,e),At(t,e)}}function y_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tt(t,e))return;n.uniform3fv(this.addr,e),At(t,e)}}function w_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;n.uniform4fv(this.addr,e),At(t,e)}}function x_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,i))return;Kc.set(i),n.uniformMatrix2fv(this.addr,!1,Kc),At(t,i)}}function S_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,i))return;Xc.set(i),n.uniformMatrix3fv(this.addr,!1,Xc),At(t,i)}}function b_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,i))return;qc.set(i),n.uniformMatrix4fv(this.addr,!1,qc),At(t,i)}}function E_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function M_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;n.uniform2iv(this.addr,e),At(t,e)}}function T_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;n.uniform3iv(this.addr,e),At(t,e)}}function A_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;n.uniform4iv(this.addr,e),At(t,e)}}function R_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function C_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;n.uniform2uiv(this.addr,e),At(t,e)}}function P_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;n.uniform3uiv(this.addr,e),At(t,e)}}function I_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;n.uniform4uiv(this.addr,e),At(t,e)}}function L_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Wc.compareFunction=Xh,s=Wc):s=ld,t.setTexture2D(e||s,r)}function D_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||ud,r)}function U_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||hd,r)}function N_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||cd,r)}function O_(n){switch(n){case 5126:return __;case 35664:return v_;case 35665:return y_;case 35666:return w_;case 35674:return x_;case 35675:return S_;case 35676:return b_;case 5124:case 35670:return E_;case 35667:case 35671:return M_;case 35668:case 35672:return T_;case 35669:case 35673:return A_;case 5125:return R_;case 36294:return C_;case 36295:return P_;case 36296:return I_;case 35678:case 36198:case 36298:case 36306:case 35682:return L_;case 35679:case 36299:case 36307:return D_;case 35680:case 36300:case 36308:case 36293:return U_;case 36289:case 36303:case 36311:case 36292:return N_}}function k_(n,e){n.uniform1fv(this.addr,e)}function F_(n,e){const t=Hr(e,this.size,2);n.uniform2fv(this.addr,t)}function B_(n,e){const t=Hr(e,this.size,3);n.uniform3fv(this.addr,t)}function z_(n,e){const t=Hr(e,this.size,4);n.uniform4fv(this.addr,t)}function H_(n,e){const t=Hr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function G_(n,e){const t=Hr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function V_(n,e){const t=Hr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function W_(n,e){n.uniform1iv(this.addr,e)}function j_(n,e){n.uniform2iv(this.addr,e)}function $_(n,e){n.uniform3iv(this.addr,e)}function q_(n,e){n.uniform4iv(this.addr,e)}function X_(n,e){n.uniform1uiv(this.addr,e)}function K_(n,e){n.uniform2uiv(this.addr,e)}function Y_(n,e){n.uniform3uiv(this.addr,e)}function J_(n,e){n.uniform4uiv(this.addr,e)}function Z_(n,e,t){const i=this.cache,r=e.length,s=Ba(t,r);Tt(i,s)||(n.uniform1iv(this.addr,s),At(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||ld,s[a])}function Q_(n,e,t){const i=this.cache,r=e.length,s=Ba(t,r);Tt(i,s)||(n.uniform1iv(this.addr,s),At(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||ud,s[a])}function e0(n,e,t){const i=this.cache,r=e.length,s=Ba(t,r);Tt(i,s)||(n.uniform1iv(this.addr,s),At(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||hd,s[a])}function t0(n,e,t){const i=this.cache,r=e.length,s=Ba(t,r);Tt(i,s)||(n.uniform1iv(this.addr,s),At(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||cd,s[a])}function n0(n){switch(n){case 5126:return k_;case 35664:return F_;case 35665:return B_;case 35666:return z_;case 35674:return H_;case 35675:return G_;case 35676:return V_;case 5124:case 35670:return W_;case 35667:case 35671:return j_;case 35668:case 35672:return $_;case 35669:case 35673:return q_;case 5125:return X_;case 36294:return K_;case 36295:return Y_;case 36296:return J_;case 35678:case 36198:case 36298:case 36306:case 35682:return Z_;case 35679:case 36299:case 36307:return Q_;case 35680:case 36300:case 36308:case 36293:return e0;case 36289:case 36303:case 36311:case 36292:return t0}}class i0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=O_(t.type)}}class r0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=n0(t.type)}}class s0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Eo=/(\w+)(\])?(\[|\.)?/g;function Yc(n,e){n.seq.push(e),n.map[e.id]=e}function a0(n,e,t){const i=n.name,r=i.length;for(Eo.lastIndex=0;;){const s=Eo.exec(i),a=Eo.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Yc(t,c===void 0?new i0(o,n,e):new r0(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new s0(o),Yc(t,h)),t=h}}}class ga{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);a0(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Jc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const o0=37297;let l0=0;function c0(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Zc=new Ye;function u0(n){tt._getMatrix(Zc,tt.workingColorSpace,n);const e=`mat3( ${Zc.elements.map(t=>t.toFixed(4))} )`;switch(tt.getTransfer(n)){case Fa:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Qc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+c0(n.getShaderSource(e),a)}else return r}function h0(n,e){const t=u0(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function d0(n,e){let t;switch(e){case Lh:t="Linear";break;case Dh:t="Reinhard";break;case Uh:t="Cineon";break;case Gl:t="ACESFilmic";break;case Nh:t="AgX";break;case Oh:t="Neutral";break;case Of:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const $s=new N;function f0(){tt.getLuminanceCoefficients($s);const n=$s.x.toFixed(4),e=$s.y.toFixed(4),t=$s.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function p0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(is).join(`
`)}function m0(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function g0(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function is(n){return n!==""}function eu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function tu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const _0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tl(n){return n.replace(_0,y0)}const v0=new Map;function y0(n,e){let t=Qe[e];if(t===void 0){const i=v0.get(e);if(i!==void 0)t=Qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Tl(t)}const w0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nu(n){return n.replace(w0,x0)}function x0(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function iu(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function S0(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Ch?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Ph?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Hn&&(e="SHADOWMAP_TYPE_VSM"),e}function b0(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Rr:case Cr:e="ENVMAP_TYPE_CUBE";break;case ka:e="ENVMAP_TYPE_CUBE_UV";break}return e}function E0(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Cr:e="ENVMAP_MODE_REFRACTION";break}return e}function M0(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ih:e="ENVMAP_BLENDING_MULTIPLY";break;case Uf:e="ENVMAP_BLENDING_MIX";break;case Nf:e="ENVMAP_BLENDING_ADD";break}return e}function T0(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function A0(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=S0(t),c=b0(t),u=E0(t),h=M0(t),d=T0(t),f=p0(t),g=m0(s),_=r.createProgram();let m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(is).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(is).join(`
`),p.length>0&&(p+=`
`)):(m=[iu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(is).join(`
`),p=[iu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==pi?"#define TONE_MAPPING":"",t.toneMapping!==pi?Qe.tonemapping_pars_fragment:"",t.toneMapping!==pi?d0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,h0("linearToOutputTexel",t.outputColorSpace),f0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(is).join(`
`)),a=Tl(a),a=eu(a,t),a=tu(a,t),o=Tl(o),o=eu(o,t),o=tu(o,t),a=nu(a),o=nu(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===gc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===gc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=y+m+a,w=y+p+o,L=Jc(r,r.VERTEX_SHADER,v),A=Jc(r,r.FRAGMENT_SHADER,w);r.attachShader(_,L),r.attachShader(_,A),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function R(C){if(n.debug.checkShaderErrors){const z=r.getProgramInfoLog(_).trim(),H=r.getShaderInfoLog(L).trim(),$=r.getShaderInfoLog(A).trim();let ee=!0,Y=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(ee=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,L,A);else{const te=Qc(r,L,"vertex"),q=Qc(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+z+`
`+te+`
`+q)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(H===""||$==="")&&(Y=!1);Y&&(C.diagnostics={runnable:ee,programLog:z,vertexShader:{log:H,prefix:m},fragmentShader:{log:$,prefix:p}})}r.deleteShader(L),r.deleteShader(A),P=new ga(r,_),x=g0(r,_)}let P;this.getUniforms=function(){return P===void 0&&R(this),P};let x;this.getAttributes=function(){return x===void 0&&R(this),x};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(_,o0)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=l0++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=A,this}let R0=0;class C0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new P0(e),t.set(e,i)),i}}class P0{constructor(e){this.id=R0++,this.code=e,this.usedTimes=0}}function I0(n,e,t,i,r,s,a){const o=new Qh,l=new C0,c=new Set,u=[],h=r.logarithmicDepthBuffer,d=r.vertexTextures;let f=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return c.add(x),x===0?"uv":`uv${x}`}function m(x,S,C,z,H){const $=z.fog,ee=H.geometry,Y=x.isMeshStandardMaterial?z.environment:null,te=(x.isMeshStandardMaterial?t:e).get(x.envMap||Y),q=te&&te.mapping===ka?te.image.height:null,le=g[x.type];x.precision!==null&&(f=r.getMaxPrecision(x.precision),f!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));const pe=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,_e=pe!==void 0?pe.length:0;let ke=0;ee.morphAttributes.position!==void 0&&(ke=1),ee.morphAttributes.normal!==void 0&&(ke=2),ee.morphAttributes.color!==void 0&&(ke=3);let Je,Z,ae,Se;if(le){const He=Tn[le];Je=He.vertexShader,Z=He.fragmentShader}else Je=x.vertexShader,Z=x.fragmentShader,l.update(x),ae=l.getVertexShaderID(x),Se=l.getFragmentShaderID(x);const ue=n.getRenderTarget(),Re=n.state.buffers.depth.getReversed(),Fe=H.isInstancedMesh===!0,be=H.isBatchedMesh===!0,ye=!!x.map,Ae=!!x.matcap,qe=!!te,U=!!x.aoMap,yt=!!x.lightMap,Ge=!!x.bumpMap,Xe=!!x.normalMap,Oe=!!x.displacementMap,ot=!!x.emissiveMap,Ue=!!x.metalnessMap,T=!!x.roughnessMap,b=x.anisotropy>0,V=x.clearcoat>0,ne=x.dispersion>0,re=x.iridescence>0,Q=x.sheen>0,Ee=x.transmission>0,he=b&&!!x.anisotropyMap,ge=V&&!!x.clearcoatMap,Ze=V&&!!x.clearcoatNormalMap,oe=V&&!!x.clearcoatRoughnessMap,ve=re&&!!x.iridescenceMap,Ce=re&&!!x.iridescenceThicknessMap,Be=Q&&!!x.sheenColorMap,F=Q&&!!x.sheenRoughnessMap,ie=!!x.specularMap,I=!!x.specularColorMap,X=!!x.specularIntensityMap,M=Ee&&!!x.transmissionMap,G=Ee&&!!x.thicknessMap,D=!!x.gradientMap,B=!!x.alphaMap,J=x.alphaTest>0,K=!!x.alphaHash,se=!!x.extensions;let Me=pi;x.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(Me=n.toneMapping);const We={shaderID:le,shaderType:x.type,shaderName:x.name,vertexShader:Je,fragmentShader:Z,defines:x.defines,customVertexShaderID:ae,customFragmentShaderID:Se,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,batching:be,batchingColor:be&&H._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&H.instanceColor!==null,instancingMorph:Fe&&H.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ue===null?n.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:Or,alphaToCoverage:!!x.alphaToCoverage,map:ye,matcap:Ae,envMap:qe,envMapMode:qe&&te.mapping,envMapCubeUVHeight:q,aoMap:U,lightMap:yt,bumpMap:Ge,normalMap:Xe,displacementMap:d&&Oe,emissiveMap:ot,normalMapObjectSpace:Xe&&x.normalMapType===zf,normalMapTangentSpace:Xe&&x.normalMapType===qh,metalnessMap:Ue,roughnessMap:T,anisotropy:b,anisotropyMap:he,clearcoat:V,clearcoatMap:ge,clearcoatNormalMap:Ze,clearcoatRoughnessMap:oe,dispersion:ne,iridescence:re,iridescenceMap:ve,iridescenceThicknessMap:Ce,sheen:Q,sheenColorMap:Be,sheenRoughnessMap:F,specularMap:ie,specularColorMap:I,specularIntensityMap:X,transmission:Ee,transmissionMap:M,thicknessMap:G,gradientMap:D,opaque:x.transparent===!1&&x.blending===_r&&x.alphaToCoverage===!1,alphaMap:B,alphaTest:J,alphaHash:K,combine:x.combine,mapUv:ye&&_(x.map.channel),aoMapUv:U&&_(x.aoMap.channel),lightMapUv:yt&&_(x.lightMap.channel),bumpMapUv:Ge&&_(x.bumpMap.channel),normalMapUv:Xe&&_(x.normalMap.channel),displacementMapUv:Oe&&_(x.displacementMap.channel),emissiveMapUv:ot&&_(x.emissiveMap.channel),metalnessMapUv:Ue&&_(x.metalnessMap.channel),roughnessMapUv:T&&_(x.roughnessMap.channel),anisotropyMapUv:he&&_(x.anisotropyMap.channel),clearcoatMapUv:ge&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:Ze&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:F&&_(x.sheenRoughnessMap.channel),specularMapUv:ie&&_(x.specularMap.channel),specularColorMapUv:I&&_(x.specularColorMap.channel),specularIntensityMapUv:X&&_(x.specularIntensityMap.channel),transmissionMapUv:M&&_(x.transmissionMap.channel),thicknessMapUv:G&&_(x.thicknessMap.channel),alphaMapUv:B&&_(x.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(Xe||b),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!ee.attributes.uv&&(ye||B),fog:!!$,useFog:x.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Re,skinning:H.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:ke,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:Me,decodeVideoTexture:ye&&x.map.isVideoTexture===!0&&tt.getTransfer(x.map.colorSpace)===at,decodeVideoTextureEmissive:ot&&x.emissiveMap.isVideoTexture===!0&&tt.getTransfer(x.emissiveMap.colorSpace)===at,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===_n,flipSided:x.side===Bt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:se&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(se&&x.extensions.multiDraw===!0||be)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return We.vertexUv1s=c.has(1),We.vertexUv2s=c.has(2),We.vertexUv3s=c.has(3),c.clear(),We}function p(x){const S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(const C in x.defines)S.push(C),S.push(x.defines[C]);return x.isRawShaderMaterial===!1&&(y(S,x),v(S,x),S.push(n.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function y(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapCubeUVHeight),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.morphAttributeCount),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function v(x,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),x.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),x.push(o.mask)}function w(x){const S=g[x.type];let C;if(S){const z=Tn[S];C=fs.clone(z.uniforms)}else C=x.uniforms;return C}function L(x,S){let C;for(let z=0,H=u.length;z<H;z++){const $=u[z];if($.cacheKey===S){C=$,++C.usedTimes;break}}return C===void 0&&(C=new A0(n,S,x,s),u.push(C)),C}function A(x){if(--x.usedTimes===0){const S=u.indexOf(x);u[S]=u[u.length-1],u.pop(),x.destroy()}}function R(x){l.remove(x)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:w,acquireProgram:L,releaseProgram:A,releaseShaderCache:R,programs:u,dispose:P}}function L0(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function D0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function ru(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function su(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(h,d,f,g,_,m){let p=n[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},n[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function o(h,d,f,g,_,m){const p=a(h,d,f,g,_,m);f.transmission>0?i.push(p):f.transparent===!0?r.push(p):t.push(p)}function l(h,d,f,g,_,m){const p=a(h,d,f,g,_,m);f.transmission>0?i.unshift(p):f.transparent===!0?r.unshift(p):t.unshift(p)}function c(h,d){t.length>1&&t.sort(h||D0),i.length>1&&i.sort(d||ru),r.length>1&&r.sort(d||ru)}function u(){for(let h=e,d=n.length;h<d;h++){const f=n[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function U0(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new su,n.set(i,[a])):r>=s.length?(a=new su,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function N0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Te};break;case"SpotLight":t={position:new N,direction:new N,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Te,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":t={color:new Te,position:new N,halfWidth:new N,halfHeight:new N};break}return n[e.id]=t,t}}}function O0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let k0=0;function F0(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function B0(n){const e=new N0,t=O0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new N);const r=new N,s=new ut,a=new ut;function o(c){let u=0,h=0,d=0;for(let x=0;x<9;x++)i.probe[x].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,y=0,v=0,w=0,L=0,A=0,R=0;c.sort(F0);for(let x=0,S=c.length;x<S;x++){const C=c[x],z=C.color,H=C.intensity,$=C.distance,ee=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=z.r*H,h+=z.g*H,d+=z.b*H;else if(C.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(C.sh.coefficients[Y],H);R++}else if(C.isDirectionalLight){const Y=e.get(C);if(Y.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const te=C.shadow,q=t.get(C);q.shadowIntensity=te.intensity,q.shadowBias=te.bias,q.shadowNormalBias=te.normalBias,q.shadowRadius=te.radius,q.shadowMapSize=te.mapSize,i.directionalShadow[f]=q,i.directionalShadowMap[f]=ee,i.directionalShadowMatrix[f]=C.shadow.matrix,y++}i.directional[f]=Y,f++}else if(C.isSpotLight){const Y=e.get(C);Y.position.setFromMatrixPosition(C.matrixWorld),Y.color.copy(z).multiplyScalar(H),Y.distance=$,Y.coneCos=Math.cos(C.angle),Y.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),Y.decay=C.decay,i.spot[_]=Y;const te=C.shadow;if(C.map&&(i.spotLightMap[L]=C.map,L++,te.updateMatrices(C),C.castShadow&&A++),i.spotLightMatrix[_]=te.matrix,C.castShadow){const q=t.get(C);q.shadowIntensity=te.intensity,q.shadowBias=te.bias,q.shadowNormalBias=te.normalBias,q.shadowRadius=te.radius,q.shadowMapSize=te.mapSize,i.spotShadow[_]=q,i.spotShadowMap[_]=ee,w++}_++}else if(C.isRectAreaLight){const Y=e.get(C);Y.color.copy(z).multiplyScalar(H),Y.halfWidth.set(C.width*.5,0,0),Y.halfHeight.set(0,C.height*.5,0),i.rectArea[m]=Y,m++}else if(C.isPointLight){const Y=e.get(C);if(Y.color.copy(C.color).multiplyScalar(C.intensity),Y.distance=C.distance,Y.decay=C.decay,C.castShadow){const te=C.shadow,q=t.get(C);q.shadowIntensity=te.intensity,q.shadowBias=te.bias,q.shadowNormalBias=te.normalBias,q.shadowRadius=te.radius,q.shadowMapSize=te.mapSize,q.shadowCameraNear=te.camera.near,q.shadowCameraFar=te.camera.far,i.pointShadow[g]=q,i.pointShadowMap[g]=ee,i.pointShadowMatrix[g]=C.shadow.matrix,v++}i.point[g]=Y,g++}else if(C.isHemisphereLight){const Y=e.get(C);Y.skyColor.copy(C.color).multiplyScalar(H),Y.groundColor.copy(C.groundColor).multiplyScalar(H),i.hemi[p]=Y,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const P=i.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==y||P.numPointShadows!==v||P.numSpotShadows!==w||P.numSpotMaps!==L||P.numLightProbes!==R)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=w+L-A,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=R,P.directionalLength=f,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=y,P.numPointShadows=v,P.numSpotShadows=w,P.numSpotMaps=L,P.numLightProbes=R,i.version=k0++)}function l(c,u){let h=0,d=0,f=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const v=c[p];if(v.isDirectionalLight){const w=i.directional[h];w.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(m),h++}else if(v.isSpotLight){const w=i.spot[f];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(m),f++}else if(v.isRectAreaLight){const w=i.rectArea[g];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(m),a.identity(),s.copy(v.matrixWorld),s.premultiply(m),a.extractRotation(s),w.halfWidth.set(v.width*.5,0,0),w.halfHeight.set(0,v.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),g++}else if(v.isPointLight){const w=i.point[d];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){const w=i.hemi[_];w.direction.setFromMatrixPosition(v.matrixWorld),w.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:i}}function au(n){const e=new B0(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function z0(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new au(n),e.set(r,[o])):s>=a.length?(o=new au(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}class H0 extends zr{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Ff,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class G0 extends zr{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const V0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,W0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function j0(n,e,t){let i=new Yl;const r=new ze,s=new ze,a=new ct,o=new H0({depthPacking:Bf}),l=new G0,c={},u=t.maxTextureSize,h={[_i]:Bt,[Bt]:_i,[_n]:_n},d=new Dt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:V0,fragmentShader:W0}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Kt;g.setAttribute("position",new zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new fe(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ch;let p=this.type;this.render=function(A,R,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const x=n.getRenderTarget(),S=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),z=n.state;z.setBlending(Xn),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const H=p!==Hn&&this.type===Hn,$=p===Hn&&this.type!==Hn;for(let ee=0,Y=A.length;ee<Y;ee++){const te=A[ee],q=te.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);const le=q.getFrameExtents();if(r.multiply(le),s.copy(q.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/le.x),r.x=s.x*le.x,q.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/le.y),r.y=s.y*le.y,q.mapSize.y=s.y)),q.map===null||H===!0||$===!0){const _e=this.type!==Hn?{minFilter:rn,magFilter:rn}:{};q.map!==null&&q.map.dispose(),q.map=new Sn(r.x,r.y,_e),q.map.texture.name=te.name+".shadowMap",q.camera.updateProjectionMatrix()}n.setRenderTarget(q.map),n.clear();const pe=q.getViewportCount();for(let _e=0;_e<pe;_e++){const ke=q.getViewport(_e);a.set(s.x*ke.x,s.y*ke.y,s.x*ke.z,s.y*ke.w),z.viewport(a),q.updateMatrices(te,_e),i=q.getFrustum(),w(R,P,q.camera,te,this.type)}q.isPointLightShadow!==!0&&this.type===Hn&&y(q,P),q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(x,S,C)};function y(A,R){const P=e.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Sn(r.x,r.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(R,null,P,d,_,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(R,null,P,f,_,null)}function v(A,R,P,x){let S=null;const C=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(C!==void 0)S=C;else if(S=P.isPointLight===!0?l:o,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const z=S.uuid,H=R.uuid;let $=c[z];$===void 0&&($={},c[z]=$);let ee=$[H];ee===void 0&&(ee=S.clone(),$[H]=ee,R.addEventListener("dispose",L)),S=ee}if(S.visible=R.visible,S.wireframe=R.wireframe,x===Hn?S.side=R.shadowSide!==null?R.shadowSide:R.side:S.side=R.shadowSide!==null?R.shadowSide:h[R.side],S.alphaMap=R.alphaMap,S.alphaTest=R.alphaTest,S.map=R.map,S.clipShadows=R.clipShadows,S.clippingPlanes=R.clippingPlanes,S.clipIntersection=R.clipIntersection,S.displacementMap=R.displacementMap,S.displacementScale=R.displacementScale,S.displacementBias=R.displacementBias,S.wireframeLinewidth=R.wireframeLinewidth,S.linewidth=R.linewidth,P.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const z=n.properties.get(S);z.light=P}return S}function w(A,R,P,x,S){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===Hn)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const H=e.update(A),$=A.material;if(Array.isArray($)){const ee=H.groups;for(let Y=0,te=ee.length;Y<te;Y++){const q=ee[Y],le=$[q.materialIndex];if(le&&le.visible){const pe=v(A,le,x,S);A.onBeforeShadow(n,A,R,P,H,pe,q),n.renderBufferDirect(P,null,H,pe,A,q),A.onAfterShadow(n,A,R,P,H,pe,q)}}}else if($.visible){const ee=v(A,$,x,S);A.onBeforeShadow(n,A,R,P,H,ee,null),n.renderBufferDirect(P,null,H,ee,A,null),A.onAfterShadow(n,A,R,P,H,ee,null)}}const z=A.children;for(let H=0,$=z.length;H<$;H++)w(z[H],R,P,x,S)}function L(A){A.target.removeEventListener("dispose",L);for(const P in c){const x=c[P],S=A.target.uuid;S in x&&(x[S].dispose(),delete x[S])}}}const $0={[Vo]:Wo,[jo]:Xo,[$o]:Ko,[Ar]:qo,[Wo]:Vo,[Xo]:jo,[Ko]:$o,[qo]:Ar};function q0(n,e){function t(){let M=!1;const G=new ct;let D=null;const B=new ct(0,0,0,0);return{setMask:function(J){D!==J&&!M&&(n.colorMask(J,J,J,J),D=J)},setLocked:function(J){M=J},setClear:function(J,K,se,Me,We){We===!0&&(J*=Me,K*=Me,se*=Me),G.set(J,K,se,Me),B.equals(G)===!1&&(n.clearColor(J,K,se,Me),B.copy(G))},reset:function(){M=!1,D=null,B.set(-1,0,0,0)}}}function i(){let M=!1,G=!1,D=null,B=null,J=null;return{setReversed:function(K){if(G!==K){const se=e.get("EXT_clip_control");G?se.clipControlEXT(se.LOWER_LEFT_EXT,se.ZERO_TO_ONE_EXT):se.clipControlEXT(se.LOWER_LEFT_EXT,se.NEGATIVE_ONE_TO_ONE_EXT);const Me=J;J=null,this.setClear(Me)}G=K},getReversed:function(){return G},setTest:function(K){K?ue(n.DEPTH_TEST):Re(n.DEPTH_TEST)},setMask:function(K){D!==K&&!M&&(n.depthMask(K),D=K)},setFunc:function(K){if(G&&(K=$0[K]),B!==K){switch(K){case Vo:n.depthFunc(n.NEVER);break;case Wo:n.depthFunc(n.ALWAYS);break;case jo:n.depthFunc(n.LESS);break;case Ar:n.depthFunc(n.LEQUAL);break;case $o:n.depthFunc(n.EQUAL);break;case qo:n.depthFunc(n.GEQUAL);break;case Xo:n.depthFunc(n.GREATER);break;case Ko:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}B=K}},setLocked:function(K){M=K},setClear:function(K){J!==K&&(G&&(K=1-K),n.clearDepth(K),J=K)},reset:function(){M=!1,D=null,B=null,J=null,G=!1}}}function r(){let M=!1,G=null,D=null,B=null,J=null,K=null,se=null,Me=null,We=null;return{setTest:function(He){M||(He?ue(n.STENCIL_TEST):Re(n.STENCIL_TEST))},setMask:function(He){G!==He&&!M&&(n.stencilMask(He),G=He)},setFunc:function(He,je,lt){(D!==He||B!==je||J!==lt)&&(n.stencilFunc(He,je,lt),D=He,B=je,J=lt)},setOp:function(He,je,lt){(K!==He||se!==je||Me!==lt)&&(n.stencilOp(He,je,lt),K=He,se=je,Me=lt)},setLocked:function(He){M=He},setClear:function(He){We!==He&&(n.clearStencil(He),We=He)},reset:function(){M=!1,G=null,D=null,B=null,J=null,K=null,se=null,Me=null,We=null}}}const s=new t,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,y=null,v=null,w=null,L=null,A=null,R=new Te(0,0,0),P=0,x=!1,S=null,C=null,z=null,H=null,$=null;const ee=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,te=0;const q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(q)[1]),Y=te>=1):q.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),Y=te>=2);let le=null,pe={};const _e=n.getParameter(n.SCISSOR_BOX),ke=n.getParameter(n.VIEWPORT),Je=new ct().fromArray(_e),Z=new ct().fromArray(ke);function ae(M,G,D,B){const J=new Uint8Array(4),K=n.createTexture();n.bindTexture(M,K),n.texParameteri(M,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(M,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let se=0;se<D;se++)M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY?n.texImage3D(G,0,n.RGBA,1,1,B,0,n.RGBA,n.UNSIGNED_BYTE,J):n.texImage2D(G+se,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,J);return K}const Se={};Se[n.TEXTURE_2D]=ae(n.TEXTURE_2D,n.TEXTURE_2D,1),Se[n.TEXTURE_CUBE_MAP]=ae(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[n.TEXTURE_2D_ARRAY]=ae(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Se[n.TEXTURE_3D]=ae(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ue(n.DEPTH_TEST),a.setFunc(Ar),Ge(!1),Xe(hc),ue(n.CULL_FACE),U(Xn);function ue(M){u[M]!==!0&&(n.enable(M),u[M]=!0)}function Re(M){u[M]!==!1&&(n.disable(M),u[M]=!1)}function Fe(M,G){return h[M]!==G?(n.bindFramebuffer(M,G),h[M]=G,M===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=G),M===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=G),!0):!1}function be(M,G){let D=f,B=!1;if(M){D=d.get(G),D===void 0&&(D=[],d.set(G,D));const J=M.textures;if(D.length!==J.length||D[0]!==n.COLOR_ATTACHMENT0){for(let K=0,se=J.length;K<se;K++)D[K]=n.COLOR_ATTACHMENT0+K;D.length=J.length,B=!0}}else D[0]!==n.BACK&&(D[0]=n.BACK,B=!0);B&&n.drawBuffers(D)}function ye(M){return g!==M?(n.useProgram(M),g=M,!0):!1}const Ae={[Pi]:n.FUNC_ADD,[_f]:n.FUNC_SUBTRACT,[vf]:n.FUNC_REVERSE_SUBTRACT};Ae[yf]=n.MIN,Ae[wf]=n.MAX;const qe={[xf]:n.ZERO,[Sf]:n.ONE,[bf]:n.SRC_COLOR,[Ho]:n.SRC_ALPHA,[Cf]:n.SRC_ALPHA_SATURATE,[Af]:n.DST_COLOR,[Mf]:n.DST_ALPHA,[Ef]:n.ONE_MINUS_SRC_COLOR,[Go]:n.ONE_MINUS_SRC_ALPHA,[Rf]:n.ONE_MINUS_DST_COLOR,[Tf]:n.ONE_MINUS_DST_ALPHA,[Pf]:n.CONSTANT_COLOR,[If]:n.ONE_MINUS_CONSTANT_COLOR,[Lf]:n.CONSTANT_ALPHA,[Df]:n.ONE_MINUS_CONSTANT_ALPHA};function U(M,G,D,B,J,K,se,Me,We,He){if(M===Xn){_===!0&&(Re(n.BLEND),_=!1);return}if(_===!1&&(ue(n.BLEND),_=!0),M!==gf){if(M!==m||He!==x){if((p!==Pi||w!==Pi)&&(n.blendEquation(n.FUNC_ADD),p=Pi,w=Pi),He)switch(M){case _r:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Fi:n.blendFunc(n.ONE,n.ONE);break;case dc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case fc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",M);break}else switch(M){case _r:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Fi:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case dc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case fc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",M);break}y=null,v=null,L=null,A=null,R.set(0,0,0),P=0,m=M,x=He}return}J=J||G,K=K||D,se=se||B,(G!==p||J!==w)&&(n.blendEquationSeparate(Ae[G],Ae[J]),p=G,w=J),(D!==y||B!==v||K!==L||se!==A)&&(n.blendFuncSeparate(qe[D],qe[B],qe[K],qe[se]),y=D,v=B,L=K,A=se),(Me.equals(R)===!1||We!==P)&&(n.blendColor(Me.r,Me.g,Me.b,We),R.copy(Me),P=We),m=M,x=!1}function yt(M,G){M.side===_n?Re(n.CULL_FACE):ue(n.CULL_FACE);let D=M.side===Bt;G&&(D=!D),Ge(D),M.blending===_r&&M.transparent===!1?U(Xn):U(M.blending,M.blendEquation,M.blendSrc,M.blendDst,M.blendEquationAlpha,M.blendSrcAlpha,M.blendDstAlpha,M.blendColor,M.blendAlpha,M.premultipliedAlpha),a.setFunc(M.depthFunc),a.setTest(M.depthTest),a.setMask(M.depthWrite),s.setMask(M.colorWrite);const B=M.stencilWrite;o.setTest(B),B&&(o.setMask(M.stencilWriteMask),o.setFunc(M.stencilFunc,M.stencilRef,M.stencilFuncMask),o.setOp(M.stencilFail,M.stencilZFail,M.stencilZPass)),ot(M.polygonOffset,M.polygonOffsetFactor,M.polygonOffsetUnits),M.alphaToCoverage===!0?ue(n.SAMPLE_ALPHA_TO_COVERAGE):Re(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(M){S!==M&&(M?n.frontFace(n.CW):n.frontFace(n.CCW),S=M)}function Xe(M){M!==pf?(ue(n.CULL_FACE),M!==C&&(M===hc?n.cullFace(n.BACK):M===mf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Re(n.CULL_FACE),C=M}function Oe(M){M!==z&&(Y&&n.lineWidth(M),z=M)}function ot(M,G,D){M?(ue(n.POLYGON_OFFSET_FILL),(H!==G||$!==D)&&(n.polygonOffset(G,D),H=G,$=D)):Re(n.POLYGON_OFFSET_FILL)}function Ue(M){M?ue(n.SCISSOR_TEST):Re(n.SCISSOR_TEST)}function T(M){M===void 0&&(M=n.TEXTURE0+ee-1),le!==M&&(n.activeTexture(M),le=M)}function b(M,G,D){D===void 0&&(le===null?D=n.TEXTURE0+ee-1:D=le);let B=pe[D];B===void 0&&(B={type:void 0,texture:void 0},pe[D]=B),(B.type!==M||B.texture!==G)&&(le!==D&&(n.activeTexture(D),le=D),n.bindTexture(M,G||Se[M]),B.type=M,B.texture=G)}function V(){const M=pe[le];M!==void 0&&M.type!==void 0&&(n.bindTexture(M.type,null),M.type=void 0,M.texture=void 0)}function ne(){try{n.compressedTexImage2D.apply(n,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function re(){try{n.compressedTexImage3D.apply(n,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function Q(){try{n.texSubImage2D.apply(n,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function Ee(){try{n.texSubImage3D.apply(n,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function he(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function ge(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function Ze(){try{n.texStorage2D.apply(n,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function oe(){try{n.texStorage3D.apply(n,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function ve(){try{n.texImage2D.apply(n,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function Ce(){try{n.texImage3D.apply(n,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function Be(M){Je.equals(M)===!1&&(n.scissor(M.x,M.y,M.z,M.w),Je.copy(M))}function F(M){Z.equals(M)===!1&&(n.viewport(M.x,M.y,M.z,M.w),Z.copy(M))}function ie(M,G){let D=c.get(G);D===void 0&&(D=new WeakMap,c.set(G,D));let B=D.get(M);B===void 0&&(B=n.getUniformBlockIndex(G,M.name),D.set(M,B))}function I(M,G){const B=c.get(G).get(M);l.get(G)!==B&&(n.uniformBlockBinding(G,B,M.__bindingPointIndex),l.set(G,B))}function X(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},le=null,pe={},h={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,y=null,v=null,w=null,L=null,A=null,R=new Te(0,0,0),P=0,x=!1,S=null,C=null,z=null,H=null,$=null,Je.set(0,0,n.canvas.width,n.canvas.height),Z.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ue,disable:Re,bindFramebuffer:Fe,drawBuffers:be,useProgram:ye,setBlending:U,setMaterial:yt,setFlipSided:Ge,setCullFace:Xe,setLineWidth:Oe,setPolygonOffset:ot,setScissorTest:Ue,activeTexture:T,bindTexture:b,unbindTexture:V,compressedTexImage2D:ne,compressedTexImage3D:re,texImage2D:ve,texImage3D:Ce,updateUBOMapping:ie,uniformBlockBinding:I,texStorage2D:Ze,texStorage3D:oe,texSubImage2D:Q,texSubImage3D:Ee,compressedTexSubImage2D:he,compressedTexSubImage3D:ge,scissor:Be,viewport:F,reset:X}}function ou(n,e,t,i){const r=X0(i);switch(t){case Hh:return n*e;case Vh:return n*e;case Wh:return n*e*2;case $l:return n*e/r.components*r.byteLength;case ql:return n*e/r.components*r.byteLength;case jh:return n*e*2/r.components*r.byteLength;case Xl:return n*e*2/r.components*r.byteLength;case Gh:return n*e*3/r.components*r.byteLength;case wn:return n*e*4/r.components*r.byteLength;case Kl:return n*e*4/r.components*r.byteLength;case ha:case da:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case fa:case pa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case el:case nl:return Math.max(n,16)*Math.max(e,8)/4;case Qo:case tl:return Math.max(n,8)*Math.max(e,8)/2;case il:case rl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case sl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case al:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ol:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case ll:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case cl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case ul:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case hl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case dl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case fl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case pl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case ml:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case gl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case _l:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case vl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case yl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ma:case wl:case xl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case $h:case Sl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case bl:case El:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function X0(n){switch(n){case Zn:case Fh:return{byteLength:1,components:1};case ds:case Bh:case Kn:return{byteLength:2,components:1};case Wl:case jl:return{byteLength:2,components:4};case zi:case Vl:case Cn:return{byteLength:4,components:1};case zh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function K0(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ze,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,b){return f?new OffscreenCanvas(T,b):Ea("canvas")}function _(T,b,V){let ne=1;const re=Ue(T);if((re.width>V||re.height>V)&&(ne=V/Math.max(re.width,re.height)),ne<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const Q=Math.floor(ne*re.width),Ee=Math.floor(ne*re.height);h===void 0&&(h=g(Q,Ee));const he=b?g(Q,Ee):h;return he.width=Q,he.height=Ee,he.getContext("2d").drawImage(T,0,0,Q,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+Q+"x"+Ee+")."),he}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){n.generateMipmap(T)}function y(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function v(T,b,V,ne,re=!1){if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Q=b;if(b===n.RED&&(V===n.FLOAT&&(Q=n.R32F),V===n.HALF_FLOAT&&(Q=n.R16F),V===n.UNSIGNED_BYTE&&(Q=n.R8)),b===n.RED_INTEGER&&(V===n.UNSIGNED_BYTE&&(Q=n.R8UI),V===n.UNSIGNED_SHORT&&(Q=n.R16UI),V===n.UNSIGNED_INT&&(Q=n.R32UI),V===n.BYTE&&(Q=n.R8I),V===n.SHORT&&(Q=n.R16I),V===n.INT&&(Q=n.R32I)),b===n.RG&&(V===n.FLOAT&&(Q=n.RG32F),V===n.HALF_FLOAT&&(Q=n.RG16F),V===n.UNSIGNED_BYTE&&(Q=n.RG8)),b===n.RG_INTEGER&&(V===n.UNSIGNED_BYTE&&(Q=n.RG8UI),V===n.UNSIGNED_SHORT&&(Q=n.RG16UI),V===n.UNSIGNED_INT&&(Q=n.RG32UI),V===n.BYTE&&(Q=n.RG8I),V===n.SHORT&&(Q=n.RG16I),V===n.INT&&(Q=n.RG32I)),b===n.RGB_INTEGER&&(V===n.UNSIGNED_BYTE&&(Q=n.RGB8UI),V===n.UNSIGNED_SHORT&&(Q=n.RGB16UI),V===n.UNSIGNED_INT&&(Q=n.RGB32UI),V===n.BYTE&&(Q=n.RGB8I),V===n.SHORT&&(Q=n.RGB16I),V===n.INT&&(Q=n.RGB32I)),b===n.RGBA_INTEGER&&(V===n.UNSIGNED_BYTE&&(Q=n.RGBA8UI),V===n.UNSIGNED_SHORT&&(Q=n.RGBA16UI),V===n.UNSIGNED_INT&&(Q=n.RGBA32UI),V===n.BYTE&&(Q=n.RGBA8I),V===n.SHORT&&(Q=n.RGBA16I),V===n.INT&&(Q=n.RGBA32I)),b===n.RGB&&V===n.UNSIGNED_INT_5_9_9_9_REV&&(Q=n.RGB9_E5),b===n.RGBA){const Ee=re?Fa:tt.getTransfer(ne);V===n.FLOAT&&(Q=n.RGBA32F),V===n.HALF_FLOAT&&(Q=n.RGBA16F),V===n.UNSIGNED_BYTE&&(Q=Ee===at?n.SRGB8_ALPHA8:n.RGBA8),V===n.UNSIGNED_SHORT_4_4_4_4&&(Q=n.RGBA4),V===n.UNSIGNED_SHORT_5_5_5_1&&(Q=n.RGB5_A1)}return(Q===n.R16F||Q===n.R32F||Q===n.RG16F||Q===n.RG32F||Q===n.RGBA16F||Q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function w(T,b){let V;return T?b===null||b===zi||b===Pr?V=n.DEPTH24_STENCIL8:b===Cn?V=n.DEPTH32F_STENCIL8:b===ds&&(V=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===zi||b===Pr?V=n.DEPTH_COMPONENT24:b===Cn?V=n.DEPTH_COMPONENT32F:b===ds&&(V=n.DEPTH_COMPONENT16),V}function L(T,b){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==rn&&T.minFilter!==Rn?Math.log2(Math.max(b.width,b.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?b.mipmaps.length:1}function A(T){const b=T.target;b.removeEventListener("dispose",A),P(b),b.isVideoTexture&&u.delete(b)}function R(T){const b=T.target;b.removeEventListener("dispose",R),S(b)}function P(T){const b=i.get(T);if(b.__webglInit===void 0)return;const V=T.source,ne=d.get(V);if(ne){const re=ne[b.__cacheKey];re.usedTimes--,re.usedTimes===0&&x(T),Object.keys(ne).length===0&&d.delete(V)}i.remove(T)}function x(T){const b=i.get(T);n.deleteTexture(b.__webglTexture);const V=T.source,ne=d.get(V);delete ne[b.__cacheKey],a.memory.textures--}function S(T){const b=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(b.__webglFramebuffer[ne]))for(let re=0;re<b.__webglFramebuffer[ne].length;re++)n.deleteFramebuffer(b.__webglFramebuffer[ne][re]);else n.deleteFramebuffer(b.__webglFramebuffer[ne]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[ne])}else{if(Array.isArray(b.__webglFramebuffer))for(let ne=0;ne<b.__webglFramebuffer.length;ne++)n.deleteFramebuffer(b.__webglFramebuffer[ne]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ne=0;ne<b.__webglColorRenderbuffer.length;ne++)b.__webglColorRenderbuffer[ne]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[ne]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const V=T.textures;for(let ne=0,re=V.length;ne<re;ne++){const Q=i.get(V[ne]);Q.__webglTexture&&(n.deleteTexture(Q.__webglTexture),a.memory.textures--),i.remove(V[ne])}i.remove(T)}let C=0;function z(){C=0}function H(){const T=C;return T>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),C+=1,T}function $(T){const b=[];return b.push(T.wrapS),b.push(T.wrapT),b.push(T.wrapR||0),b.push(T.magFilter),b.push(T.minFilter),b.push(T.anisotropy),b.push(T.internalFormat),b.push(T.format),b.push(T.type),b.push(T.generateMipmaps),b.push(T.premultiplyAlpha),b.push(T.flipY),b.push(T.unpackAlignment),b.push(T.colorSpace),b.join()}function ee(T,b){const V=i.get(T);if(T.isVideoTexture&&Oe(T),T.isRenderTargetTexture===!1&&T.version>0&&V.__version!==T.version){const ne=T.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(V,T,b);return}}t.bindTexture(n.TEXTURE_2D,V.__webglTexture,n.TEXTURE0+b)}function Y(T,b){const V=i.get(T);if(T.version>0&&V.__version!==T.version){Z(V,T,b);return}t.bindTexture(n.TEXTURE_2D_ARRAY,V.__webglTexture,n.TEXTURE0+b)}function te(T,b){const V=i.get(T);if(T.version>0&&V.__version!==T.version){Z(V,T,b);return}t.bindTexture(n.TEXTURE_3D,V.__webglTexture,n.TEXTURE0+b)}function q(T,b){const V=i.get(T);if(T.version>0&&V.__version!==T.version){ae(V,T,b);return}t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+b)}const le={[Jn]:n.REPEAT,[Di]:n.CLAMP_TO_EDGE,[Zo]:n.MIRRORED_REPEAT},pe={[rn]:n.NEAREST,[kf]:n.NEAREST_MIPMAP_NEAREST,[Ts]:n.NEAREST_MIPMAP_LINEAR,[Rn]:n.LINEAR,[Xa]:n.LINEAR_MIPMAP_NEAREST,[Ui]:n.LINEAR_MIPMAP_LINEAR},_e={[Hf]:n.NEVER,[qf]:n.ALWAYS,[Gf]:n.LESS,[Xh]:n.LEQUAL,[Vf]:n.EQUAL,[$f]:n.GEQUAL,[Wf]:n.GREATER,[jf]:n.NOTEQUAL};function ke(T,b){if(b.type===Cn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Rn||b.magFilter===Xa||b.magFilter===Ts||b.magFilter===Ui||b.minFilter===Rn||b.minFilter===Xa||b.minFilter===Ts||b.minFilter===Ui)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,le[b.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,le[b.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,le[b.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,pe[b.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,pe[b.minFilter]),b.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,_e[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===rn||b.minFilter!==Ts&&b.minFilter!==Ui||b.type===Cn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");n.texParameterf(T,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function Je(T,b){let V=!1;T.__webglInit===void 0&&(T.__webglInit=!0,b.addEventListener("dispose",A));const ne=b.source;let re=d.get(ne);re===void 0&&(re={},d.set(ne,re));const Q=$(b);if(Q!==T.__cacheKey){re[Q]===void 0&&(re[Q]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,V=!0),re[Q].usedTimes++;const Ee=re[T.__cacheKey];Ee!==void 0&&(re[T.__cacheKey].usedTimes--,Ee.usedTimes===0&&x(b)),T.__cacheKey=Q,T.__webglTexture=re[Q].texture}return V}function Z(T,b,V){let ne=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ne=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ne=n.TEXTURE_3D);const re=Je(T,b),Q=b.source;t.bindTexture(ne,T.__webglTexture,n.TEXTURE0+V);const Ee=i.get(Q);if(Q.version!==Ee.__version||re===!0){t.activeTexture(n.TEXTURE0+V);const he=tt.getPrimaries(tt.workingColorSpace),ge=b.colorSpace===ui?null:tt.getPrimaries(b.colorSpace),Ze=b.colorSpace===ui||he===ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);let oe=_(b.image,!1,r.maxTextureSize);oe=ot(b,oe);const ve=s.convert(b.format,b.colorSpace),Ce=s.convert(b.type);let Be=v(b.internalFormat,ve,Ce,b.colorSpace,b.isVideoTexture);ke(ne,b);let F;const ie=b.mipmaps,I=b.isVideoTexture!==!0,X=Ee.__version===void 0||re===!0,M=Q.dataReady,G=L(b,oe);if(b.isDepthTexture)Be=w(b.format===Ir,b.type),X&&(I?t.texStorage2D(n.TEXTURE_2D,1,Be,oe.width,oe.height):t.texImage2D(n.TEXTURE_2D,0,Be,oe.width,oe.height,0,ve,Ce,null));else if(b.isDataTexture)if(ie.length>0){I&&X&&t.texStorage2D(n.TEXTURE_2D,G,Be,ie[0].width,ie[0].height);for(let D=0,B=ie.length;D<B;D++)F=ie[D],I?M&&t.texSubImage2D(n.TEXTURE_2D,D,0,0,F.width,F.height,ve,Ce,F.data):t.texImage2D(n.TEXTURE_2D,D,Be,F.width,F.height,0,ve,Ce,F.data);b.generateMipmaps=!1}else I?(X&&t.texStorage2D(n.TEXTURE_2D,G,Be,oe.width,oe.height),M&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,oe.width,oe.height,ve,Ce,oe.data)):t.texImage2D(n.TEXTURE_2D,0,Be,oe.width,oe.height,0,ve,Ce,oe.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){I&&X&&t.texStorage3D(n.TEXTURE_2D_ARRAY,G,Be,ie[0].width,ie[0].height,oe.depth);for(let D=0,B=ie.length;D<B;D++)if(F=ie[D],b.format!==wn)if(ve!==null)if(I){if(M)if(b.layerUpdates.size>0){const J=ou(F.width,F.height,b.format,b.type);for(const K of b.layerUpdates){const se=F.data.subarray(K*J/F.data.BYTES_PER_ELEMENT,(K+1)*J/F.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,D,0,0,K,F.width,F.height,1,ve,se)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,D,0,0,0,F.width,F.height,oe.depth,ve,F.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,D,Be,F.width,F.height,oe.depth,0,F.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?M&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,D,0,0,0,F.width,F.height,oe.depth,ve,Ce,F.data):t.texImage3D(n.TEXTURE_2D_ARRAY,D,Be,F.width,F.height,oe.depth,0,ve,Ce,F.data)}else{I&&X&&t.texStorage2D(n.TEXTURE_2D,G,Be,ie[0].width,ie[0].height);for(let D=0,B=ie.length;D<B;D++)F=ie[D],b.format!==wn?ve!==null?I?M&&t.compressedTexSubImage2D(n.TEXTURE_2D,D,0,0,F.width,F.height,ve,F.data):t.compressedTexImage2D(n.TEXTURE_2D,D,Be,F.width,F.height,0,F.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?M&&t.texSubImage2D(n.TEXTURE_2D,D,0,0,F.width,F.height,ve,Ce,F.data):t.texImage2D(n.TEXTURE_2D,D,Be,F.width,F.height,0,ve,Ce,F.data)}else if(b.isDataArrayTexture)if(I){if(X&&t.texStorage3D(n.TEXTURE_2D_ARRAY,G,Be,oe.width,oe.height,oe.depth),M)if(b.layerUpdates.size>0){const D=ou(oe.width,oe.height,b.format,b.type);for(const B of b.layerUpdates){const J=oe.data.subarray(B*D/oe.data.BYTES_PER_ELEMENT,(B+1)*D/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,B,oe.width,oe.height,1,ve,Ce,J)}b.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,ve,Ce,oe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Be,oe.width,oe.height,oe.depth,0,ve,Ce,oe.data);else if(b.isData3DTexture)I?(X&&t.texStorage3D(n.TEXTURE_3D,G,Be,oe.width,oe.height,oe.depth),M&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,ve,Ce,oe.data)):t.texImage3D(n.TEXTURE_3D,0,Be,oe.width,oe.height,oe.depth,0,ve,Ce,oe.data);else if(b.isFramebufferTexture){if(X)if(I)t.texStorage2D(n.TEXTURE_2D,G,Be,oe.width,oe.height);else{let D=oe.width,B=oe.height;for(let J=0;J<G;J++)t.texImage2D(n.TEXTURE_2D,J,Be,D,B,0,ve,Ce,null),D>>=1,B>>=1}}else if(ie.length>0){if(I&&X){const D=Ue(ie[0]);t.texStorage2D(n.TEXTURE_2D,G,Be,D.width,D.height)}for(let D=0,B=ie.length;D<B;D++)F=ie[D],I?M&&t.texSubImage2D(n.TEXTURE_2D,D,0,0,ve,Ce,F):t.texImage2D(n.TEXTURE_2D,D,Be,ve,Ce,F);b.generateMipmaps=!1}else if(I){if(X){const D=Ue(oe);t.texStorage2D(n.TEXTURE_2D,G,Be,D.width,D.height)}M&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ve,Ce,oe)}else t.texImage2D(n.TEXTURE_2D,0,Be,ve,Ce,oe);m(b)&&p(ne),Ee.__version=Q.version,b.onUpdate&&b.onUpdate(b)}T.__version=b.version}function ae(T,b,V){if(b.image.length!==6)return;const ne=Je(T,b),re=b.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+V);const Q=i.get(re);if(re.version!==Q.__version||ne===!0){t.activeTexture(n.TEXTURE0+V);const Ee=tt.getPrimaries(tt.workingColorSpace),he=b.colorSpace===ui?null:tt.getPrimaries(b.colorSpace),ge=b.colorSpace===ui||Ee===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Ze=b.isCompressedTexture||b.image[0].isCompressedTexture,oe=b.image[0]&&b.image[0].isDataTexture,ve=[];for(let B=0;B<6;B++)!Ze&&!oe?ve[B]=_(b.image[B],!0,r.maxCubemapSize):ve[B]=oe?b.image[B].image:b.image[B],ve[B]=ot(b,ve[B]);const Ce=ve[0],Be=s.convert(b.format,b.colorSpace),F=s.convert(b.type),ie=v(b.internalFormat,Be,F,b.colorSpace),I=b.isVideoTexture!==!0,X=Q.__version===void 0||ne===!0,M=re.dataReady;let G=L(b,Ce);ke(n.TEXTURE_CUBE_MAP,b);let D;if(Ze){I&&X&&t.texStorage2D(n.TEXTURE_CUBE_MAP,G,ie,Ce.width,Ce.height);for(let B=0;B<6;B++){D=ve[B].mipmaps;for(let J=0;J<D.length;J++){const K=D[J];b.format!==wn?Be!==null?I?M&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+B,J,0,0,K.width,K.height,Be,K.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+B,J,ie,K.width,K.height,0,K.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?M&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+B,J,0,0,K.width,K.height,Be,F,K.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+B,J,ie,K.width,K.height,0,Be,F,K.data)}}}else{if(D=b.mipmaps,I&&X){D.length>0&&G++;const B=Ue(ve[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,G,ie,B.width,B.height)}for(let B=0;B<6;B++)if(oe){I?M&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,0,0,ve[B].width,ve[B].height,Be,F,ve[B].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,ie,ve[B].width,ve[B].height,0,Be,F,ve[B].data);for(let J=0;J<D.length;J++){const se=D[J].image[B].image;I?M&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+B,J+1,0,0,se.width,se.height,Be,F,se.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+B,J+1,ie,se.width,se.height,0,Be,F,se.data)}}else{I?M&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,0,0,Be,F,ve[B]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,ie,Be,F,ve[B]);for(let J=0;J<D.length;J++){const K=D[J];I?M&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+B,J+1,0,0,Be,F,K.image[B]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+B,J+1,ie,Be,F,K.image[B])}}}m(b)&&p(n.TEXTURE_CUBE_MAP),Q.__version=re.version,b.onUpdate&&b.onUpdate(b)}T.__version=b.version}function Se(T,b,V,ne,re,Q){const Ee=s.convert(V.format,V.colorSpace),he=s.convert(V.type),ge=v(V.internalFormat,Ee,he,V.colorSpace),Ze=i.get(b),oe=i.get(V);if(oe.__renderTarget=b,!Ze.__hasExternalTextures){const ve=Math.max(1,b.width>>Q),Ce=Math.max(1,b.height>>Q);re===n.TEXTURE_3D||re===n.TEXTURE_2D_ARRAY?t.texImage3D(re,Q,ge,ve,Ce,b.depth,0,Ee,he,null):t.texImage2D(re,Q,ge,ve,Ce,0,Ee,he,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),Xe(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ne,re,oe.__webglTexture,0,Ge(b)):(re===n.TEXTURE_2D||re>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ne,re,oe.__webglTexture,Q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ue(T,b,V){if(n.bindRenderbuffer(n.RENDERBUFFER,T),b.depthBuffer){const ne=b.depthTexture,re=ne&&ne.isDepthTexture?ne.type:null,Q=w(b.stencilBuffer,re),Ee=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=Ge(b);Xe(b)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,he,Q,b.width,b.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,he,Q,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,Q,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ee,n.RENDERBUFFER,T)}else{const ne=b.textures;for(let re=0;re<ne.length;re++){const Q=ne[re],Ee=s.convert(Q.format,Q.colorSpace),he=s.convert(Q.type),ge=v(Q.internalFormat,Ee,he,Q.colorSpace),Ze=Ge(b);V&&Xe(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ze,ge,b.width,b.height):Xe(b)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ze,ge,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,ge,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Re(T,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ne=i.get(b.depthTexture);ne.__renderTarget=b,(!ne.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ee(b.depthTexture,0);const re=ne.__webglTexture,Q=Ge(b);if(b.depthTexture.format===vr)Xe(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,re,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,re,0);else if(b.depthTexture.format===Ir)Xe(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,re,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function Fe(T){const b=i.get(T),V=T.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==T.depthTexture){const ne=T.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ne){const re=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ne.removeEventListener("dispose",re)};ne.addEventListener("dispose",re),b.__depthDisposeCallback=re}b.__boundDepthTexture=ne}if(T.depthTexture&&!b.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Re(b.__webglFramebuffer,T)}else if(V){b.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[ne]),b.__webglDepthbuffer[ne]===void 0)b.__webglDepthbuffer[ne]=n.createRenderbuffer(),ue(b.__webglDepthbuffer[ne],T,!1);else{const re=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=b.__webglDepthbuffer[ne];n.bindRenderbuffer(n.RENDERBUFFER,Q),n.framebufferRenderbuffer(n.FRAMEBUFFER,re,n.RENDERBUFFER,Q)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),ue(b.__webglDepthbuffer,T,!1);else{const ne=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,re=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,re),n.framebufferRenderbuffer(n.FRAMEBUFFER,ne,n.RENDERBUFFER,re)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function be(T,b,V){const ne=i.get(T);b!==void 0&&Se(ne.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),V!==void 0&&Fe(T)}function ye(T){const b=T.texture,V=i.get(T),ne=i.get(b);T.addEventListener("dispose",R);const re=T.textures,Q=T.isWebGLCubeRenderTarget===!0,Ee=re.length>1;if(Ee||(ne.__webglTexture===void 0&&(ne.__webglTexture=n.createTexture()),ne.__version=b.version,a.memory.textures++),Q){V.__webglFramebuffer=[];for(let he=0;he<6;he++)if(b.mipmaps&&b.mipmaps.length>0){V.__webglFramebuffer[he]=[];for(let ge=0;ge<b.mipmaps.length;ge++)V.__webglFramebuffer[he][ge]=n.createFramebuffer()}else V.__webglFramebuffer[he]=n.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){V.__webglFramebuffer=[];for(let he=0;he<b.mipmaps.length;he++)V.__webglFramebuffer[he]=n.createFramebuffer()}else V.__webglFramebuffer=n.createFramebuffer();if(Ee)for(let he=0,ge=re.length;he<ge;he++){const Ze=i.get(re[he]);Ze.__webglTexture===void 0&&(Ze.__webglTexture=n.createTexture(),a.memory.textures++)}if(T.samples>0&&Xe(T)===!1){V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let he=0;he<re.length;he++){const ge=re[he];V.__webglColorRenderbuffer[he]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,V.__webglColorRenderbuffer[he]);const Ze=s.convert(ge.format,ge.colorSpace),oe=s.convert(ge.type),ve=v(ge.internalFormat,Ze,oe,ge.colorSpace,T.isXRRenderTarget===!0),Ce=Ge(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ce,ve,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,V.__webglColorRenderbuffer[he])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),ue(V.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Q){t.bindTexture(n.TEXTURE_CUBE_MAP,ne.__webglTexture),ke(n.TEXTURE_CUBE_MAP,b);for(let he=0;he<6;he++)if(b.mipmaps&&b.mipmaps.length>0)for(let ge=0;ge<b.mipmaps.length;ge++)Se(V.__webglFramebuffer[he][ge],T,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,ge);else Se(V.__webglFramebuffer[he],T,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);m(b)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let he=0,ge=re.length;he<ge;he++){const Ze=re[he],oe=i.get(Ze);t.bindTexture(n.TEXTURE_2D,oe.__webglTexture),ke(n.TEXTURE_2D,Ze),Se(V.__webglFramebuffer,T,Ze,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,0),m(Ze)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let he=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(he=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(he,ne.__webglTexture),ke(he,b),b.mipmaps&&b.mipmaps.length>0)for(let ge=0;ge<b.mipmaps.length;ge++)Se(V.__webglFramebuffer[ge],T,b,n.COLOR_ATTACHMENT0,he,ge);else Se(V.__webglFramebuffer,T,b,n.COLOR_ATTACHMENT0,he,0);m(b)&&p(he),t.unbindTexture()}T.depthBuffer&&Fe(T)}function Ae(T){const b=T.textures;for(let V=0,ne=b.length;V<ne;V++){const re=b[V];if(m(re)){const Q=y(T),Ee=i.get(re).__webglTexture;t.bindTexture(Q,Ee),p(Q),t.unbindTexture()}}}const qe=[],U=[];function yt(T){if(T.samples>0){if(Xe(T)===!1){const b=T.textures,V=T.width,ne=T.height;let re=n.COLOR_BUFFER_BIT;const Q=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ee=i.get(T),he=b.length>1;if(he)for(let ge=0;ge<b.length;ge++)t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let ge=0;ge<b.length;ge++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(re|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(re|=n.STENCIL_BUFFER_BIT)),he){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ee.__webglColorRenderbuffer[ge]);const Ze=i.get(b[ge]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ze,0)}n.blitFramebuffer(0,0,V,ne,0,0,V,ne,re,n.NEAREST),l===!0&&(qe.length=0,U.length=0,qe.push(n.COLOR_ATTACHMENT0+ge),T.depthBuffer&&T.resolveDepthBuffer===!1&&(qe.push(Q),U.push(Q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,U)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,qe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),he)for(let ge=0;ge<b.length;ge++){t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,Ee.__webglColorRenderbuffer[ge]);const Ze=i.get(b[ge]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,Ze,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const b=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function Ge(T){return Math.min(r.maxSamples,T.samples)}function Xe(T){const b=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Oe(T){const b=a.render.frame;u.get(T)!==b&&(u.set(T,b),T.update())}function ot(T,b){const V=T.colorSpace,ne=T.format,re=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||V!==Or&&V!==ui&&(tt.getTransfer(V)===at?(ne!==wn||re!==Zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),b}function Ue(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=z,this.setTexture2D=ee,this.setTexture2DArray=Y,this.setTexture3D=te,this.setTextureCube=q,this.rebindTextures=be,this.setupRenderTarget=ye,this.updateRenderTargetMipmap=Ae,this.updateMultisampleRenderTarget=yt,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=Xe}function Y0(n,e){function t(i,r=ui){let s;const a=tt.getTransfer(r);if(i===Zn)return n.UNSIGNED_BYTE;if(i===Wl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===jl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===zh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Fh)return n.BYTE;if(i===Bh)return n.SHORT;if(i===ds)return n.UNSIGNED_SHORT;if(i===Vl)return n.INT;if(i===zi)return n.UNSIGNED_INT;if(i===Cn)return n.FLOAT;if(i===Kn)return n.HALF_FLOAT;if(i===Hh)return n.ALPHA;if(i===Gh)return n.RGB;if(i===wn)return n.RGBA;if(i===Vh)return n.LUMINANCE;if(i===Wh)return n.LUMINANCE_ALPHA;if(i===vr)return n.DEPTH_COMPONENT;if(i===Ir)return n.DEPTH_STENCIL;if(i===$l)return n.RED;if(i===ql)return n.RED_INTEGER;if(i===jh)return n.RG;if(i===Xl)return n.RG_INTEGER;if(i===Kl)return n.RGBA_INTEGER;if(i===ha||i===da||i===fa||i===pa)if(a===at)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ha)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===da)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===fa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===pa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ha)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===da)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===fa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===pa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Qo||i===el||i===tl||i===nl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Qo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===el)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===tl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===nl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===il||i===rl||i===sl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===il||i===rl)return a===at?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===sl)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===al||i===ol||i===ll||i===cl||i===ul||i===hl||i===dl||i===fl||i===pl||i===ml||i===gl||i===_l||i===vl||i===yl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===al)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ol)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ll)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===cl)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ul)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===hl)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===dl)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===fl)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===pl)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ml)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===gl)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===_l)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===vl)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===yl)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ma||i===wl||i===xl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===ma)return a===at?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===wl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===xl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===$h||i===Sl||i===bl||i===El)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===ma)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Sl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===bl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===El)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Pr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class J0 extends $t{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class xn extends St{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Z0={type:"move"};class Mo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Z0)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new xn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Q0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ev=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class tv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new kt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Dt({vertexShader:Q0,fragmentShader:ev,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new fe(new mt(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class nv extends kr{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,g=null;const _=new tv,m=t.getContextAttributes();let p=null,y=null;const v=[],w=[],L=new ze;let A=null;const R=new $t;R.viewport=new ct;const P=new $t;P.viewport=new ct;const x=[R,P],S=new J0;let C=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ae=v[Z];return ae===void 0&&(ae=new Mo,v[Z]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(Z){let ae=v[Z];return ae===void 0&&(ae=new Mo,v[Z]=ae),ae.getGripSpace()},this.getHand=function(Z){let ae=v[Z];return ae===void 0&&(ae=new Mo,v[Z]=ae),ae.getHandSpace()};function H(Z){const ae=w.indexOf(Z.inputSource);if(ae===-1)return;const Se=v[ae];Se!==void 0&&(Se.update(Z.inputSource,Z.frame,c||a),Se.dispatchEvent({type:Z.type,data:Z.inputSource}))}function $(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",ee);for(let Z=0;Z<v.length;Z++){const ae=w[Z];ae!==null&&(w[Z]=null,v[Z].disconnect(ae))}C=null,z=null,_.reset(),e.setRenderTarget(p),f=null,d=null,h=null,r=null,y=null,Je.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",$),r.addEventListener("inputsourceschange",ee),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(L),r.renderState.layers===void 0){const ae={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,ae),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Sn(f.framebufferWidth,f.framebufferHeight,{format:wn,type:Zn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ae=null,Se=null,ue=null;m.depth&&(ue=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=m.stencil?Ir:vr,Se=m.stencil?Pr:zi);const Re={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:s};h=new XRWebGLBinding(r,t),d=h.createProjectionLayer(Re),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Sn(d.textureWidth,d.textureHeight,{format:wn,type:Zn,depthTexture:new od(d.textureWidth,d.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Je.setContext(r),Je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function ee(Z){for(let ae=0;ae<Z.removed.length;ae++){const Se=Z.removed[ae],ue=w.indexOf(Se);ue>=0&&(w[ue]=null,v[ue].disconnect(Se))}for(let ae=0;ae<Z.added.length;ae++){const Se=Z.added[ae];let ue=w.indexOf(Se);if(ue===-1){for(let Fe=0;Fe<v.length;Fe++)if(Fe>=w.length){w.push(Se),ue=Fe;break}else if(w[Fe]===null){w[Fe]=Se,ue=Fe;break}if(ue===-1)break}const Re=v[ue];Re&&Re.connect(Se)}}const Y=new N,te=new N;function q(Z,ae,Se){Y.setFromMatrixPosition(ae.matrixWorld),te.setFromMatrixPosition(Se.matrixWorld);const ue=Y.distanceTo(te),Re=ae.projectionMatrix.elements,Fe=Se.projectionMatrix.elements,be=Re[14]/(Re[10]-1),ye=Re[14]/(Re[10]+1),Ae=(Re[9]+1)/Re[5],qe=(Re[9]-1)/Re[5],U=(Re[8]-1)/Re[0],yt=(Fe[8]+1)/Fe[0],Ge=be*U,Xe=be*yt,Oe=ue/(-U+yt),ot=Oe*-U;if(ae.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(ot),Z.translateZ(Oe),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Re[10]===-1)Z.projectionMatrix.copy(ae.projectionMatrix),Z.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const Ue=be+Oe,T=ye+Oe,b=Ge-ot,V=Xe+(ue-ot),ne=Ae*ye/T*Ue,re=qe*ye/T*Ue;Z.projectionMatrix.makePerspective(b,V,ne,re,Ue,T),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function le(Z,ae){ae===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ae.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let ae=Z.near,Se=Z.far;_.texture!==null&&(_.depthNear>0&&(ae=_.depthNear),_.depthFar>0&&(Se=_.depthFar)),S.near=P.near=R.near=ae,S.far=P.far=R.far=Se,(C!==S.near||z!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),C=S.near,z=S.far),R.layers.mask=Z.layers.mask|2,P.layers.mask=Z.layers.mask|4,S.layers.mask=R.layers.mask|P.layers.mask;const ue=Z.parent,Re=S.cameras;le(S,ue);for(let Fe=0;Fe<Re.length;Fe++)le(Re[Fe],ue);Re.length===2?q(S,R,P):S.projectionMatrix.copy(R.projectionMatrix),pe(Z,S,ue)};function pe(Z,ae,Se){Se===null?Z.matrix.copy(ae.matrixWorld):(Z.matrix.copy(Se.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ae.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ae.projectionMatrix),Z.projectionMatrixInverse.copy(ae.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Ml*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let _e=null;function ke(Z,ae){if(u=ae.getViewerPose(c||a),g=ae,u!==null){const Se=u.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let ue=!1;Se.length!==S.cameras.length&&(S.cameras.length=0,ue=!0);for(let Fe=0;Fe<Se.length;Fe++){const be=Se[Fe];let ye=null;if(f!==null)ye=f.getViewport(be);else{const qe=h.getViewSubImage(d,be);ye=qe.viewport,Fe===0&&(e.setRenderTargetTextures(y,qe.colorTexture,d.ignoreDepthValues?void 0:qe.depthStencilTexture),e.setRenderTarget(y))}let Ae=x[Fe];Ae===void 0&&(Ae=new $t,Ae.layers.enable(Fe),Ae.viewport=new ct,x[Fe]=Ae),Ae.matrix.fromArray(be.transform.matrix),Ae.matrix.decompose(Ae.position,Ae.quaternion,Ae.scale),Ae.projectionMatrix.fromArray(be.projectionMatrix),Ae.projectionMatrixInverse.copy(Ae.projectionMatrix).invert(),Ae.viewport.set(ye.x,ye.y,ye.width,ye.height),Fe===0&&(S.matrix.copy(Ae.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ue===!0&&S.cameras.push(Ae)}const Re=r.enabledFeatures;if(Re&&Re.includes("depth-sensing")){const Fe=h.getDepthInformation(Se[0]);Fe&&Fe.isValid&&Fe.texture&&_.init(e,Fe,r.renderState)}}for(let Se=0;Se<v.length;Se++){const ue=w[Se],Re=v[Se];ue!==null&&Re!==void 0&&Re.update(ue,ae,c||a)}_e&&_e(Z,ae),ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ae}),g=null}const Je=new ad;Je.setAnimationLoop(ke),this.setAnimationLoop=function(Z){_e=Z},this.dispose=function(){}}}const Ei=new In,iv=new ut;function rv(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,id(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,y,v,w){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,w)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,y,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Bt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Bt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p),v=y.envMap,w=y.envMapRotation;v&&(m.envMap.value=v,Ei.copy(w),Ei.x*=-1,Ei.y*=-1,Ei.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ei.y*=-1,Ei.z*=-1),m.envMapRotation.value.setFromMatrix4(iv.makeRotationFromEuler(Ei)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=v*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Bt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function sv(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,v){const w=v.program;i.uniformBlockBinding(y,w)}function c(y,v){let w=r[y.id];w===void 0&&(g(y),w=u(y),r[y.id]=w,y.addEventListener("dispose",m));const L=v.program;i.updateUBOMapping(y,L);const A=e.render.frame;s[y.id]!==A&&(d(y),s[y.id]=A)}function u(y){const v=h();y.__bindingPointIndex=v;const w=n.createBuffer(),L=y.__size,A=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,L,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,w),w}function h(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const v=r[y.id],w=y.uniforms,L=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let A=0,R=w.length;A<R;A++){const P=Array.isArray(w[A])?w[A]:[w[A]];for(let x=0,S=P.length;x<S;x++){const C=P[x];if(f(C,A,x,L)===!0){const z=C.__offset,H=Array.isArray(C.value)?C.value:[C.value];let $=0;for(let ee=0;ee<H.length;ee++){const Y=H[ee],te=_(Y);typeof Y=="number"||typeof Y=="boolean"?(C.__data[0]=Y,n.bufferSubData(n.UNIFORM_BUFFER,z+$,C.__data)):Y.isMatrix3?(C.__data[0]=Y.elements[0],C.__data[1]=Y.elements[1],C.__data[2]=Y.elements[2],C.__data[3]=0,C.__data[4]=Y.elements[3],C.__data[5]=Y.elements[4],C.__data[6]=Y.elements[5],C.__data[7]=0,C.__data[8]=Y.elements[6],C.__data[9]=Y.elements[7],C.__data[10]=Y.elements[8],C.__data[11]=0):(Y.toArray(C.__data,$),$+=te.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,z,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(y,v,w,L){const A=y.value,R=v+"_"+w;if(L[R]===void 0)return typeof A=="number"||typeof A=="boolean"?L[R]=A:L[R]=A.clone(),!0;{const P=L[R];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return L[R]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function g(y){const v=y.uniforms;let w=0;const L=16;for(let R=0,P=v.length;R<P;R++){const x=Array.isArray(v[R])?v[R]:[v[R]];for(let S=0,C=x.length;S<C;S++){const z=x[S],H=Array.isArray(z.value)?z.value:[z.value];for(let $=0,ee=H.length;$<ee;$++){const Y=H[$],te=_(Y),q=w%L,le=q%te.boundary,pe=q+le;w+=le,pe!==0&&L-pe<te.storage&&(w+=L-pe),z.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=w,w+=te.storage}}}const A=w%L;return A>0&&(w+=L-A),y.__size=w,y.__cache={},this}function _(y){const v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function m(y){const v=y.target;v.removeEventListener("dispose",m);const w=a.indexOf(v.__bindingPointIndex);a.splice(w,1),n.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function p(){for(const y in r)n.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:l,update:c,dispose:p}}class av{constructor(e={}){const{canvas:t=Kf(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const y=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=vt,this.toneMapping=pi,this.toneMappingExposure=1;const w=this;let L=!1,A=0,R=0,P=null,x=-1,S=null;const C=new ct,z=new ct;let H=null;const $=new Te(0);let ee=0,Y=t.width,te=t.height,q=1,le=null,pe=null;const _e=new ct(0,0,Y,te),ke=new ct(0,0,Y,te);let Je=!1;const Z=new Yl;let ae=!1,Se=!1;const ue=new ut,Re=new ut,Fe=new N,be=new ct,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ae=!1;function qe(){return P===null?q:1}let U=i;function yt(E,O){return t.getContext(E,O)}try{const E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Hl}`),t.addEventListener("webglcontextlost",B,!1),t.addEventListener("webglcontextrestored",J,!1),t.addEventListener("webglcontextcreationerror",K,!1),U===null){const O="webgl2";if(U=yt(O,E),U===null)throw yt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Ge,Xe,Oe,ot,Ue,T,b,V,ne,re,Q,Ee,he,ge,Ze,oe,ve,Ce,Be,F,ie,I,X,M;function G(){Ge=new h_(U),Ge.init(),I=new Y0(U,Ge),Xe=new s_(U,Ge,e,I),Oe=new q0(U,Ge),Xe.reverseDepthBuffer&&d&&Oe.buffers.depth.setReversed(!0),ot=new p_(U),Ue=new L0,T=new K0(U,Ge,Oe,Ue,Xe,I,ot),b=new o_(w),V=new u_(w),ne=new xp(U),X=new i_(U,ne),re=new d_(U,ne,ot,X),Q=new g_(U,re,ne,ot),Be=new m_(U,Xe,T),oe=new a_(Ue),Ee=new I0(w,b,V,Ge,Xe,X,oe),he=new rv(w,Ue),ge=new U0,Ze=new z0(Ge),Ce=new n_(w,b,V,Oe,Q,f,l),ve=new j0(w,Q,Xe),M=new sv(U,ot,Xe,Oe),F=new r_(U,Ge,ot),ie=new f_(U,Ge,ot),ot.programs=Ee.programs,w.capabilities=Xe,w.extensions=Ge,w.properties=Ue,w.renderLists=ge,w.shadowMap=ve,w.state=Oe,w.info=ot}G();const D=new nv(w,U);this.xr=D,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const E=Ge.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Ge.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(E){E!==void 0&&(q=E,this.setSize(Y,te,!1))},this.getSize=function(E){return E.set(Y,te)},this.setSize=function(E,O,W=!0){if(D.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=E,te=O,t.width=Math.floor(E*q),t.height=Math.floor(O*q),W===!0&&(t.style.width=E+"px",t.style.height=O+"px"),this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set(Y*q,te*q).floor()},this.setDrawingBufferSize=function(E,O,W){Y=E,te=O,q=W,t.width=Math.floor(E*W),t.height=Math.floor(O*W),this.setViewport(0,0,E,O)},this.getCurrentViewport=function(E){return E.copy(C)},this.getViewport=function(E){return E.copy(_e)},this.setViewport=function(E,O,W,j){E.isVector4?_e.set(E.x,E.y,E.z,E.w):_e.set(E,O,W,j),Oe.viewport(C.copy(_e).multiplyScalar(q).round())},this.getScissor=function(E){return E.copy(ke)},this.setScissor=function(E,O,W,j){E.isVector4?ke.set(E.x,E.y,E.z,E.w):ke.set(E,O,W,j),Oe.scissor(z.copy(ke).multiplyScalar(q).round())},this.getScissorTest=function(){return Je},this.setScissorTest=function(E){Oe.setScissorTest(Je=E)},this.setOpaqueSort=function(E){le=E},this.setTransparentSort=function(E){pe=E},this.getClearColor=function(E){return E.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor.apply(Ce,arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha.apply(Ce,arguments)},this.clear=function(E=!0,O=!0,W=!0){let j=0;if(E){let k=!1;if(P!==null){const ce=P.texture.format;k=ce===Kl||ce===Xl||ce===ql}if(k){const ce=P.texture.type,we=ce===Zn||ce===zi||ce===ds||ce===Pr||ce===Wl||ce===jl,Pe=Ce.getClearColor(),Ie=Ce.getClearAlpha(),Ve=Pe.r,Ke=Pe.g,Le=Pe.b;we?(g[0]=Ve,g[1]=Ke,g[2]=Le,g[3]=Ie,U.clearBufferuiv(U.COLOR,0,g)):(_[0]=Ve,_[1]=Ke,_[2]=Le,_[3]=Ie,U.clearBufferiv(U.COLOR,0,_))}else j|=U.COLOR_BUFFER_BIT}O&&(j|=U.DEPTH_BUFFER_BIT),W&&(j|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",B,!1),t.removeEventListener("webglcontextrestored",J,!1),t.removeEventListener("webglcontextcreationerror",K,!1),ge.dispose(),Ze.dispose(),Ue.dispose(),b.dispose(),V.dispose(),Q.dispose(),X.dispose(),M.dispose(),Ee.dispose(),D.dispose(),D.removeEventListener("sessionstart",Rt),D.removeEventListener("sessionend",Ht),an.stop()};function B(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function J(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const E=ot.autoReset,O=ve.enabled,W=ve.autoUpdate,j=ve.needsUpdate,k=ve.type;G(),ot.autoReset=E,ve.enabled=O,ve.autoUpdate=W,ve.needsUpdate=j,ve.type=k}function K(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function se(E){const O=E.target;O.removeEventListener("dispose",se),Me(O)}function Me(E){We(E),Ue.remove(E)}function We(E){const O=Ue.get(E).programs;O!==void 0&&(O.forEach(function(W){Ee.releaseProgram(W)}),E.isShaderMaterial&&Ee.releaseShaderCache(E))}this.renderBufferDirect=function(E,O,W,j,k,ce){O===null&&(O=ye);const we=k.isMesh&&k.matrixWorld.determinant()<0,Pe=cf(E,O,W,j,k);Oe.setMaterial(j,we);let Ie=W.index,Ve=1;if(j.wireframe===!0){if(Ie=re.getWireframeAttribute(W),Ie===void 0)return;Ve=2}const Ke=W.drawRange,Le=W.attributes.position;let nt=Ke.start*Ve,dt=(Ke.start+Ke.count)*Ve;ce!==null&&(nt=Math.max(nt,ce.start*Ve),dt=Math.min(dt,(ce.start+ce.count)*Ve)),Ie!==null?(nt=Math.max(nt,0),dt=Math.min(dt,Ie.count)):Le!=null&&(nt=Math.max(nt,0),dt=Math.min(dt,Le.count));const gt=dt-nt;if(gt<0||gt===1/0)return;X.setup(k,j,Pe,W,Ie);let Gt,rt=F;if(Ie!==null&&(Gt=ne.get(Ie),rt=ie,rt.setIndex(Gt)),k.isMesh)j.wireframe===!0?(Oe.setLineWidth(j.wireframeLinewidth*qe()),rt.setMode(U.LINES)):rt.setMode(U.TRIANGLES);else if(k.isLine){let De=j.linewidth;De===void 0&&(De=1),Oe.setLineWidth(De*qe()),k.isLineSegments?rt.setMode(U.LINES):k.isLineLoop?rt.setMode(U.LINE_LOOP):rt.setMode(U.LINE_STRIP)}else k.isPoints?rt.setMode(U.POINTS):k.isSprite&&rt.setMode(U.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)rt.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(Ge.get("WEBGL_multi_draw"))rt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const De=k._multiDrawStarts,Un=k._multiDrawCounts,st=k._multiDrawCount,hn=Ie?ne.get(Ie).bytesPerElement:1,Wi=Ue.get(j).currentProgram.getUniforms();for(let Zt=0;Zt<st;Zt++)Wi.setValue(U,"_gl_DrawID",Zt),rt.render(De[Zt]/hn,Un[Zt])}else if(k.isInstancedMesh)rt.renderInstances(nt,gt,k.count);else if(W.isInstancedBufferGeometry){const De=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Un=Math.min(W.instanceCount,De);rt.renderInstances(nt,gt,Un)}else rt.render(nt,gt)};function He(E,O,W){E.transparent===!0&&E.side===_n&&E.forceSinglePass===!1?(E.side=Bt,E.needsUpdate=!0,Ms(E,O,W),E.side=_i,E.needsUpdate=!0,Ms(E,O,W),E.side=_n):Ms(E,O,W)}this.compile=function(E,O,W=null){W===null&&(W=E),p=Ze.get(W),p.init(O),v.push(p),W.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),E!==W&&E.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();const j=new Set;return E.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const ce=k.material;if(ce)if(Array.isArray(ce))for(let we=0;we<ce.length;we++){const Pe=ce[we];He(Pe,W,k),j.add(Pe)}else He(ce,W,k),j.add(ce)}),v.pop(),p=null,j},this.compileAsync=function(E,O,W=null){const j=this.compile(E,O,W);return new Promise(k=>{function ce(){if(j.forEach(function(we){Ue.get(we).currentProgram.isReady()&&j.delete(we)}),j.size===0){k(E);return}setTimeout(ce,10)}Ge.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let je=null;function lt(E){je&&je(E)}function Rt(){an.stop()}function Ht(){an.start()}const an=new ad;an.setAnimationLoop(lt),typeof self<"u"&&an.setContext(self),this.setAnimationLoop=function(E){je=E,D.setAnimationLoop(E),E===null?an.stop():an.start()},D.addEventListener("sessionstart",Rt),D.addEventListener("sessionend",Ht),this.render=function(E,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),D.enabled===!0&&D.isPresenting===!0&&(D.cameraAutoUpdate===!0&&D.updateCamera(O),O=D.getCamera()),E.isScene===!0&&E.onBeforeRender(w,E,O,P),p=Ze.get(E,v.length),p.init(O),v.push(p),Re.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Z.setFromProjectionMatrix(Re),Se=this.localClippingEnabled,ae=oe.init(this.clippingPlanes,Se),m=ge.get(E,y.length),m.init(),y.push(m),D.enabled===!0&&D.isPresenting===!0){const ce=w.xr.getDepthSensingMesh();ce!==null&&on(ce,O,-1/0,w.sortObjects)}on(E,O,0,w.sortObjects),m.finish(),w.sortObjects===!0&&m.sort(le,pe),Ae=D.enabled===!1||D.isPresenting===!1||D.hasDepthSensing()===!1,Ae&&Ce.addToRenderList(m,E),this.info.render.frame++,ae===!0&&oe.beginShadows();const W=p.state.shadowsArray;ve.render(W,E,O),ae===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=m.opaque,k=m.transmissive;if(p.setupLights(),O.isArrayCamera){const ce=O.cameras;if(k.length>0)for(let we=0,Pe=ce.length;we<Pe;we++){const Ie=ce[we];Jt(j,k,E,Ie)}Ae&&Ce.render(E);for(let we=0,Pe=ce.length;we<Pe;we++){const Ie=ce[we];Yt(m,E,Ie,Ie.viewport)}}else k.length>0&&Jt(j,k,E,O),Ae&&Ce.render(E),Yt(m,E,O);P!==null&&(T.updateMultisampleRenderTarget(P),T.updateRenderTargetMipmap(P)),E.isScene===!0&&E.onAfterRender(w,E,O),X.resetDefaultState(),x=-1,S=null,v.pop(),v.length>0?(p=v[v.length-1],ae===!0&&oe.setGlobalState(w.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function on(E,O,W,j){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)W=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(O);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Z.intersectsSprite(E)){j&&be.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Re);const we=Q.update(E),Pe=E.material;Pe.visible&&m.push(E,we,Pe,W,be.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Z.intersectsObject(E))){const we=Q.update(E),Pe=E.material;if(j&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),be.copy(E.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),be.copy(we.boundingSphere.center)),be.applyMatrix4(E.matrixWorld).applyMatrix4(Re)),Array.isArray(Pe)){const Ie=we.groups;for(let Ve=0,Ke=Ie.length;Ve<Ke;Ve++){const Le=Ie[Ve],nt=Pe[Le.materialIndex];nt&&nt.visible&&m.push(E,we,nt,W,be.z,Le)}}else Pe.visible&&m.push(E,we,Pe,W,be.z,null)}}const ce=E.children;for(let we=0,Pe=ce.length;we<Pe;we++)on(ce[we],O,W,j)}function Yt(E,O,W,j){const k=E.opaque,ce=E.transmissive,we=E.transparent;p.setupLightsView(W),ae===!0&&oe.setGlobalState(w.clippingPlanes,W),j&&Oe.viewport(C.copy(j)),k.length>0&&Qn(k,O,W),ce.length>0&&Qn(ce,O,W),we.length>0&&Qn(we,O,W),Oe.buffers.depth.setTest(!0),Oe.buffers.depth.setMask(!0),Oe.buffers.color.setMask(!0),Oe.setPolygonOffset(!1)}function Jt(E,O,W,j){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[j.id]===void 0&&(p.state.transmissionRenderTarget[j.id]=new Sn(1,1,{generateMipmaps:!0,type:Ge.has("EXT_color_buffer_half_float")||Ge.has("EXT_color_buffer_float")?Kn:Zn,minFilter:Ui,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace}));const ce=p.state.transmissionRenderTarget[j.id],we=j.viewport||C;ce.setSize(we.z,we.w);const Pe=w.getRenderTarget();w.setRenderTarget(ce),w.getClearColor($),ee=w.getClearAlpha(),ee<1&&w.setClearColor(16777215,.5),w.clear(),Ae&&Ce.render(W);const Ie=w.toneMapping;w.toneMapping=pi;const Ve=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),p.setupLightsView(j),ae===!0&&oe.setGlobalState(w.clippingPlanes,j),Qn(E,W,j),T.updateMultisampleRenderTarget(ce),T.updateRenderTargetMipmap(ce),Ge.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let Le=0,nt=O.length;Le<nt;Le++){const dt=O[Le],gt=dt.object,Gt=dt.geometry,rt=dt.material,De=dt.group;if(rt.side===_n&&gt.layers.test(j.layers)){const Un=rt.side;rt.side=Bt,rt.needsUpdate=!0,Vi(gt,W,j,Gt,rt,De),rt.side=Un,rt.needsUpdate=!0,Ke=!0}}Ke===!0&&(T.updateMultisampleRenderTarget(ce),T.updateRenderTargetMipmap(ce))}w.setRenderTarget(Pe),w.setClearColor($,ee),Ve!==void 0&&(j.viewport=Ve),w.toneMapping=Ie}function Qn(E,O,W){const j=O.isScene===!0?O.overrideMaterial:null;for(let k=0,ce=E.length;k<ce;k++){const we=E[k],Pe=we.object,Ie=we.geometry,Ve=j===null?we.material:j,Ke=we.group;Pe.layers.test(W.layers)&&Vi(Pe,O,W,Ie,Ve,Ke)}}function Vi(E,O,W,j,k,ce){E.onBeforeRender(w,O,W,j,k,ce),E.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),k.onBeforeRender(w,O,W,j,E,ce),k.transparent===!0&&k.side===_n&&k.forceSinglePass===!1?(k.side=Bt,k.needsUpdate=!0,w.renderBufferDirect(W,O,j,k,E,ce),k.side=_i,k.needsUpdate=!0,w.renderBufferDirect(W,O,j,k,E,ce),k.side=_n):w.renderBufferDirect(W,O,j,k,E,ce),E.onAfterRender(w,O,W,j,k,ce)}function Ms(E,O,W){O.isScene!==!0&&(O=ye);const j=Ue.get(E),k=p.state.lights,ce=p.state.shadowsArray,we=k.state.version,Pe=Ee.getParameters(E,k.state,ce,O,W),Ie=Ee.getProgramCacheKey(Pe);let Ve=j.programs;j.environment=E.isMeshStandardMaterial?O.environment:null,j.fog=O.fog,j.envMap=(E.isMeshStandardMaterial?V:b).get(E.envMap||j.environment),j.envMapRotation=j.environment!==null&&E.envMap===null?O.environmentRotation:E.envMapRotation,Ve===void 0&&(E.addEventListener("dispose",se),Ve=new Map,j.programs=Ve);let Ke=Ve.get(Ie);if(Ke!==void 0){if(j.currentProgram===Ke&&j.lightsStateVersion===we)return cc(E,Pe),Ke}else Pe.uniforms=Ee.getUniforms(E),E.onBeforeCompile(Pe,w),Ke=Ee.acquireProgram(Pe,Ie),Ve.set(Ie,Ke),j.uniforms=Pe.uniforms;const Le=j.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Le.clippingPlanes=oe.uniform),cc(E,Pe),j.needsLights=hf(E),j.lightsStateVersion=we,j.needsLights&&(Le.ambientLightColor.value=k.state.ambient,Le.lightProbe.value=k.state.probe,Le.directionalLights.value=k.state.directional,Le.directionalLightShadows.value=k.state.directionalShadow,Le.spotLights.value=k.state.spot,Le.spotLightShadows.value=k.state.spotShadow,Le.rectAreaLights.value=k.state.rectArea,Le.ltc_1.value=k.state.rectAreaLTC1,Le.ltc_2.value=k.state.rectAreaLTC2,Le.pointLights.value=k.state.point,Le.pointLightShadows.value=k.state.pointShadow,Le.hemisphereLights.value=k.state.hemi,Le.directionalShadowMap.value=k.state.directionalShadowMap,Le.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Le.spotShadowMap.value=k.state.spotShadowMap,Le.spotLightMatrix.value=k.state.spotLightMatrix,Le.spotLightMap.value=k.state.spotLightMap,Le.pointShadowMap.value=k.state.pointShadowMap,Le.pointShadowMatrix.value=k.state.pointShadowMatrix),j.currentProgram=Ke,j.uniformsList=null,Ke}function lc(E){if(E.uniformsList===null){const O=E.currentProgram.getUniforms();E.uniformsList=ga.seqWithValue(O.seq,E.uniforms)}return E.uniformsList}function cc(E,O){const W=Ue.get(E);W.outputColorSpace=O.outputColorSpace,W.batching=O.batching,W.batchingColor=O.batchingColor,W.instancing=O.instancing,W.instancingColor=O.instancingColor,W.instancingMorph=O.instancingMorph,W.skinning=O.skinning,W.morphTargets=O.morphTargets,W.morphNormals=O.morphNormals,W.morphColors=O.morphColors,W.morphTargetsCount=O.morphTargetsCount,W.numClippingPlanes=O.numClippingPlanes,W.numIntersection=O.numClipIntersection,W.vertexAlphas=O.vertexAlphas,W.vertexTangents=O.vertexTangents,W.toneMapping=O.toneMapping}function cf(E,O,W,j,k){O.isScene!==!0&&(O=ye),T.resetTextureUnits();const ce=O.fog,we=j.isMeshStandardMaterial?O.environment:null,Pe=P===null?w.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Or,Ie=(j.isMeshStandardMaterial?V:b).get(j.envMap||we),Ve=j.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ke=!!W.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Le=!!W.morphAttributes.position,nt=!!W.morphAttributes.normal,dt=!!W.morphAttributes.color;let gt=pi;j.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(gt=w.toneMapping);const Gt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,rt=Gt!==void 0?Gt.length:0,De=Ue.get(j),Un=p.state.lights;if(ae===!0&&(Se===!0||E!==S)){const ln=E===S&&j.id===x;oe.setState(j,E,ln)}let st=!1;j.version===De.__version?(De.needsLights&&De.lightsStateVersion!==Un.state.version||De.outputColorSpace!==Pe||k.isBatchedMesh&&De.batching===!1||!k.isBatchedMesh&&De.batching===!0||k.isBatchedMesh&&De.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&De.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&De.instancing===!1||!k.isInstancedMesh&&De.instancing===!0||k.isSkinnedMesh&&De.skinning===!1||!k.isSkinnedMesh&&De.skinning===!0||k.isInstancedMesh&&De.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&De.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&De.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&De.instancingMorph===!1&&k.morphTexture!==null||De.envMap!==Ie||j.fog===!0&&De.fog!==ce||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==oe.numPlanes||De.numIntersection!==oe.numIntersection)||De.vertexAlphas!==Ve||De.vertexTangents!==Ke||De.morphTargets!==Le||De.morphNormals!==nt||De.morphColors!==dt||De.toneMapping!==gt||De.morphTargetsCount!==rt)&&(st=!0):(st=!0,De.__version=j.version);let hn=De.currentProgram;st===!0&&(hn=Ms(j,O,k));let Wi=!1,Zt=!1,Wr=!1;const _t=hn.getUniforms(),En=De.uniforms;if(Oe.useProgram(hn.program)&&(Wi=!0,Zt=!0,Wr=!0),j.id!==x&&(x=j.id,Zt=!0),Wi||S!==E){Oe.buffers.depth.getReversed()?(ue.copy(E.projectionMatrix),Jf(ue),Zf(ue),_t.setValue(U,"projectionMatrix",ue)):_t.setValue(U,"projectionMatrix",E.projectionMatrix),_t.setValue(U,"viewMatrix",E.matrixWorldInverse);const ei=_t.map.cameraPosition;ei!==void 0&&ei.setValue(U,Fe.setFromMatrixPosition(E.matrixWorld)),Xe.logarithmicDepthBuffer&&_t.setValue(U,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&_t.setValue(U,"isOrthographic",E.isOrthographicCamera===!0),S!==E&&(S=E,Zt=!0,Wr=!0)}if(k.isSkinnedMesh){_t.setOptional(U,k,"bindMatrix"),_t.setOptional(U,k,"bindMatrixInverse");const ln=k.skeleton;ln&&(ln.boneTexture===null&&ln.computeBoneTexture(),_t.setValue(U,"boneTexture",ln.boneTexture,T))}k.isBatchedMesh&&(_t.setOptional(U,k,"batchingTexture"),_t.setValue(U,"batchingTexture",k._matricesTexture,T),_t.setOptional(U,k,"batchingIdTexture"),_t.setValue(U,"batchingIdTexture",k._indirectTexture,T),_t.setOptional(U,k,"batchingColorTexture"),k._colorsTexture!==null&&_t.setValue(U,"batchingColorTexture",k._colorsTexture,T));const jr=W.morphAttributes;if((jr.position!==void 0||jr.normal!==void 0||jr.color!==void 0)&&Be.update(k,W,hn),(Zt||De.receiveShadow!==k.receiveShadow)&&(De.receiveShadow=k.receiveShadow,_t.setValue(U,"receiveShadow",k.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(En.envMap.value=Ie,En.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&O.environment!==null&&(En.envMapIntensity.value=O.environmentIntensity),Zt&&(_t.setValue(U,"toneMappingExposure",w.toneMappingExposure),De.needsLights&&uf(En,Wr),ce&&j.fog===!0&&he.refreshFogUniforms(En,ce),he.refreshMaterialUniforms(En,j,q,te,p.state.transmissionRenderTarget[E.id]),ga.upload(U,lc(De),En,T)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(ga.upload(U,lc(De),En,T),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&_t.setValue(U,"center",k.center),_t.setValue(U,"modelViewMatrix",k.modelViewMatrix),_t.setValue(U,"normalMatrix",k.normalMatrix),_t.setValue(U,"modelMatrix",k.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const ln=j.uniformsGroups;for(let ei=0,ti=ln.length;ei<ti;ei++){const uc=ln[ei];M.update(uc,hn),M.bind(uc,hn)}}return hn}function uf(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function hf(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(E,O,W){Ue.get(E.texture).__webglTexture=O,Ue.get(E.depthTexture).__webglTexture=W;const j=Ue.get(E);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=W===void 0,j.__autoAllocateDepthBuffer||Ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,O){const W=Ue.get(E);W.__webglFramebuffer=O,W.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(E,O=0,W=0){P=E,A=O,R=W;let j=!0,k=null,ce=!1,we=!1;if(E){const Ie=Ue.get(E);if(Ie.__useDefaultFramebuffer!==void 0)Oe.bindFramebuffer(U.FRAMEBUFFER,null),j=!1;else if(Ie.__webglFramebuffer===void 0)T.setupRenderTarget(E);else if(Ie.__hasExternalTextures)T.rebindTextures(E,Ue.get(E.texture).__webglTexture,Ue.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Le=E.depthTexture;if(Ie.__boundDepthTexture!==Le){if(Le!==null&&Ue.has(Le)&&(E.width!==Le.image.width||E.height!==Le.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(E)}}const Ve=E.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(we=!0);const Ke=Ue.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ke[O])?k=Ke[O][W]:k=Ke[O],ce=!0):E.samples>0&&T.useMultisampledRTT(E)===!1?k=Ue.get(E).__webglMultisampledFramebuffer:Array.isArray(Ke)?k=Ke[W]:k=Ke,C.copy(E.viewport),z.copy(E.scissor),H=E.scissorTest}else C.copy(_e).multiplyScalar(q).floor(),z.copy(ke).multiplyScalar(q).floor(),H=Je;if(Oe.bindFramebuffer(U.FRAMEBUFFER,k)&&j&&Oe.drawBuffers(E,k),Oe.viewport(C),Oe.scissor(z),Oe.setScissorTest(H),ce){const Ie=Ue.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ie.__webglTexture,W)}else if(we){const Ie=Ue.get(E.texture),Ve=O||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ie.__webglTexture,W||0,Ve)}x=-1},this.readRenderTargetPixels=function(E,O,W,j,k,ce,we){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=Ue.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&we!==void 0&&(Pe=Pe[we]),Pe){Oe.bindFramebuffer(U.FRAMEBUFFER,Pe);try{const Ie=E.texture,Ve=Ie.format,Ke=Ie.type;if(!Xe.textureFormatReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xe.textureTypeReadable(Ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=E.width-j&&W>=0&&W<=E.height-k&&U.readPixels(O,W,j,k,I.convert(Ve),I.convert(Ke),ce)}finally{const Ie=P!==null?Ue.get(P).__webglFramebuffer:null;Oe.bindFramebuffer(U.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(E,O,W,j,k,ce,we){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=Ue.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&we!==void 0&&(Pe=Pe[we]),Pe){const Ie=E.texture,Ve=Ie.format,Ke=Ie.type;if(!Xe.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xe.textureTypeReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=E.width-j&&W>=0&&W<=E.height-k){Oe.bindFramebuffer(U.FRAMEBUFFER,Pe);const Le=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Le),U.bufferData(U.PIXEL_PACK_BUFFER,ce.byteLength,U.STREAM_READ),U.readPixels(O,W,j,k,I.convert(Ve),I.convert(Ke),0);const nt=P!==null?Ue.get(P).__webglFramebuffer:null;Oe.bindFramebuffer(U.FRAMEBUFFER,nt);const dt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Yf(U,dt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Le),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ce),U.deleteBuffer(Le),U.deleteSync(dt),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,O=null,W=0){E.isTexture!==!0&&(ns("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,E=arguments[1]);const j=Math.pow(2,-W),k=Math.floor(E.image.width*j),ce=Math.floor(E.image.height*j),we=O!==null?O.x:0,Pe=O!==null?O.y:0;T.setTexture2D(E,0),U.copyTexSubImage2D(U.TEXTURE_2D,W,0,0,we,Pe,k,ce),Oe.unbindTexture()},this.copyTextureToTexture=function(E,O,W=null,j=null,k=0){E.isTexture!==!0&&(ns("WebGLRenderer: copyTextureToTexture function signature has changed."),j=arguments[0]||null,E=arguments[1],O=arguments[2],k=arguments[3]||0,W=null);let ce,we,Pe,Ie,Ve,Ke,Le,nt,dt;const gt=E.isCompressedTexture?E.mipmaps[k]:E.image;W!==null?(ce=W.max.x-W.min.x,we=W.max.y-W.min.y,Pe=W.isBox3?W.max.z-W.min.z:1,Ie=W.min.x,Ve=W.min.y,Ke=W.isBox3?W.min.z:0):(ce=gt.width,we=gt.height,Pe=gt.depth||1,Ie=0,Ve=0,Ke=0),j!==null?(Le=j.x,nt=j.y,dt=j.z):(Le=0,nt=0,dt=0);const Gt=I.convert(O.format),rt=I.convert(O.type);let De;O.isData3DTexture?(T.setTexture3D(O,0),De=U.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(T.setTexture2DArray(O,0),De=U.TEXTURE_2D_ARRAY):(T.setTexture2D(O,0),De=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,O.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,O.unpackAlignment);const Un=U.getParameter(U.UNPACK_ROW_LENGTH),st=U.getParameter(U.UNPACK_IMAGE_HEIGHT),hn=U.getParameter(U.UNPACK_SKIP_PIXELS),Wi=U.getParameter(U.UNPACK_SKIP_ROWS),Zt=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,gt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,gt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ie),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ve),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ke);const Wr=E.isDataArrayTexture||E.isData3DTexture,_t=O.isDataArrayTexture||O.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const En=Ue.get(E),jr=Ue.get(O),ln=Ue.get(En.__renderTarget),ei=Ue.get(jr.__renderTarget);Oe.bindFramebuffer(U.READ_FRAMEBUFFER,ln.__webglFramebuffer),Oe.bindFramebuffer(U.DRAW_FRAMEBUFFER,ei.__webglFramebuffer);for(let ti=0;ti<Pe;ti++)Wr&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ue.get(E).__webglTexture,k,Ke+ti),E.isDepthTexture?(_t&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ue.get(O).__webglTexture,k,dt+ti),U.blitFramebuffer(Ie,Ve,ce,we,Le,nt,ce,we,U.DEPTH_BUFFER_BIT,U.NEAREST)):_t?U.copyTexSubImage3D(De,k,Le,nt,dt+ti,Ie,Ve,ce,we):U.copyTexSubImage2D(De,k,Le,nt,dt+ti,Ie,Ve,ce,we);Oe.bindFramebuffer(U.READ_FRAMEBUFFER,null),Oe.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else _t?E.isDataTexture||E.isData3DTexture?U.texSubImage3D(De,k,Le,nt,dt,ce,we,Pe,Gt,rt,gt.data):O.isCompressedArrayTexture?U.compressedTexSubImage3D(De,k,Le,nt,dt,ce,we,Pe,Gt,gt.data):U.texSubImage3D(De,k,Le,nt,dt,ce,we,Pe,Gt,rt,gt):E.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,k,Le,nt,ce,we,Gt,rt,gt.data):E.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,k,Le,nt,gt.width,gt.height,Gt,gt.data):U.texSubImage2D(U.TEXTURE_2D,k,Le,nt,ce,we,Gt,rt,gt);U.pixelStorei(U.UNPACK_ROW_LENGTH,Un),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,st),U.pixelStorei(U.UNPACK_SKIP_PIXELS,hn),U.pixelStorei(U.UNPACK_SKIP_ROWS,Wi),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Zt),k===0&&O.generateMipmaps&&U.generateMipmap(De),Oe.unbindTexture()},this.copyTextureToTexture3D=function(E,O,W=null,j=null,k=0){return E.isTexture!==!0&&(ns("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,j=arguments[1]||null,E=arguments[2],O=arguments[3],k=arguments[4]||0),ns('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,O,W,j,k)},this.initRenderTarget=function(E){Ue.get(E).__webglFramebuffer===void 0&&T.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?T.setTextureCube(E,0):E.isData3DTexture?T.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?T.setTexture2DArray(E,0):T.setTexture2D(E,0),Oe.unbindTexture()},this.resetState=function(){A=0,R=0,P=null,Oe.reset(),X.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=tt._getUnpackColorSpace()}}class mi{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Te(e),this.density=t}clone(){return new mi(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class dd extends St{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new In,this.environmentIntensity=1,this.environmentRotation=new In,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class ov extends kt{constructor(e=null,t=1,i=1,r,s,a,o,l,c=rn,u=rn,h,d){super(null,a,o,l,c,u,r,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class lu extends zt{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const sr=new ut,cu=new ut,qs=[],uu=new Gi,lv=new ut,Jr=new fe,Zr=new Br;class li extends fe{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new lu(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,lv)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Gi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,sr),uu.copy(e.boundingBox).applyMatrix4(sr),this.boundingBox.union(uu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Br),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,sr),Zr.copy(e.boundingSphere).applyMatrix4(sr),this.boundingSphere.union(Zr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,a=e*s+1;for(let o=0;o<i.length;o++)i[o]=r[a+o]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(Jr.geometry=this.geometry,Jr.material=this.material,Jr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Zr.copy(this.boundingSphere),Zr.applyMatrix4(i),e.ray.intersectsSphere(Zr)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,sr),cu.multiplyMatrices(i,sr),Jr.matrixWorld=cu,Jr.raycast(e,qs);for(let a=0,o=qs.length;a<o;a++){const l=qs[a];l.instanceId=s,l.object=this,t.push(l)}qs.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new lu(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new ov(new Float32Array(r*this.count),r,this.count,$l,Cn));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=r*e;s[l]=o,s.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class cv extends zr{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const hu=new ut,Al=new Zh,Xs=new Br,Ks=new N;class uv extends St{constructor(e=new Kt,t=new cv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Xs.copy(i.boundingSphere),Xs.applyMatrix4(r),Xs.radius+=s,e.ray.intersectsSphere(Xs)===!1)return;hu.copy(r).invert(),Al.copy(e.ray).applyMatrix4(hu);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,_=f;g<_;g++){const m=c.getX(g);Ks.fromBufferAttribute(h,m),du(Ks,m,l,r,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let g=d,_=f;g<_;g++)Ks.fromBufferAttribute(h,g),du(Ks,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function du(n,e,t,i,r,s,a){const o=Al.distanceSqToPoint(n);if(o<t){const l=new N;Al.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class sn extends kt{constructor(e,t,i,r,s,a,o,l,c){super(e,t,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class wr extends Kt{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],d=[],f=[];let g=0;const _=[],m=i/2;let p=0;y(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new It(h,3)),this.setAttribute("normal",new It(d,3)),this.setAttribute("uv",new It(f,2));function y(){const w=new N,L=new N;let A=0;const R=(t-e)/i;for(let P=0;P<=s;P++){const x=[],S=P/s,C=S*(t-e)+e;for(let z=0;z<=r;z++){const H=z/r,$=H*l+o,ee=Math.sin($),Y=Math.cos($);L.x=C*ee,L.y=-S*i+m,L.z=C*Y,h.push(L.x,L.y,L.z),w.set(ee,R,Y).normalize(),d.push(w.x,w.y,w.z),f.push(H,1-S),x.push(g++)}_.push(x)}for(let P=0;P<r;P++)for(let x=0;x<s;x++){const S=_[x][P],C=_[x+1][P],z=_[x+1][P+1],H=_[x][P+1];(e>0||x!==0)&&(u.push(S,C,H),A+=3),(t>0||x!==s-1)&&(u.push(C,z,H),A+=3)}c.addGroup(p,A,0),p+=A}function v(w){const L=g,A=new ze,R=new N;let P=0;const x=w===!0?e:t,S=w===!0?1:-1;for(let z=1;z<=r;z++)h.push(0,m*S,0),d.push(0,S,0),f.push(.5,.5),g++;const C=g;for(let z=0;z<=r;z++){const $=z/r*l+o,ee=Math.cos($),Y=Math.sin($);R.x=x*Y,R.y=m*S,R.z=x*ee,h.push(R.x,R.y,R.z),d.push(0,S,0),A.x=ee*.5+.5,A.y=Y*.5*S+.5,f.push(A.x,A.y),g++}for(let z=0;z<r;z++){const H=L+z,$=C+z;w===!0?u.push($,$+1,H):u.push($+1,$,H),P+=3}c.addGroup(p,P,w===!0?1:2),p+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ql extends Kt{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],a=[];o(r),c(i),u(),this.setAttribute("position",new It(s,3)),this.setAttribute("normal",new It(s.slice(),3)),this.setAttribute("uv",new It(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const v=new N,w=new N,L=new N;for(let A=0;A<t.length;A+=3)f(t[A+0],v),f(t[A+1],w),f(t[A+2],L),l(v,w,L,y)}function l(y,v,w,L){const A=L+1,R=[];for(let P=0;P<=A;P++){R[P]=[];const x=y.clone().lerp(w,P/A),S=v.clone().lerp(w,P/A),C=A-P;for(let z=0;z<=C;z++)z===0&&P===A?R[P][z]=x:R[P][z]=x.clone().lerp(S,z/C)}for(let P=0;P<A;P++)for(let x=0;x<2*(A-P)-1;x++){const S=Math.floor(x/2);x%2===0?(d(R[P][S+1]),d(R[P+1][S]),d(R[P][S])):(d(R[P][S+1]),d(R[P+1][S+1]),d(R[P+1][S]))}}function c(y){const v=new N;for(let w=0;w<s.length;w+=3)v.x=s[w+0],v.y=s[w+1],v.z=s[w+2],v.normalize().multiplyScalar(y),s[w+0]=v.x,s[w+1]=v.y,s[w+2]=v.z}function u(){const y=new N;for(let v=0;v<s.length;v+=3){y.x=s[v+0],y.y=s[v+1],y.z=s[v+2];const w=m(y)/2/Math.PI+.5,L=p(y)/Math.PI+.5;a.push(w,1-L)}g(),h()}function h(){for(let y=0;y<a.length;y+=6){const v=a[y+0],w=a[y+2],L=a[y+4],A=Math.max(v,w,L),R=Math.min(v,w,L);A>.9&&R<.1&&(v<.2&&(a[y+0]+=1),w<.2&&(a[y+2]+=1),L<.2&&(a[y+4]+=1))}}function d(y){s.push(y.x,y.y,y.z)}function f(y,v){const w=y*3;v.x=e[w+0],v.y=e[w+1],v.z=e[w+2]}function g(){const y=new N,v=new N,w=new N,L=new N,A=new ze,R=new ze,P=new ze;for(let x=0,S=0;x<s.length;x+=9,S+=6){y.set(s[x+0],s[x+1],s[x+2]),v.set(s[x+3],s[x+4],s[x+5]),w.set(s[x+6],s[x+7],s[x+8]),A.set(a[S+0],a[S+1]),R.set(a[S+2],a[S+3]),P.set(a[S+4],a[S+5]),L.copy(y).add(v).add(w).divideScalar(3);const C=m(L);_(A,S+0,y,C),_(R,S+2,v,C),_(P,S+4,w,C)}}function _(y,v,w,L){L<0&&y.x===1&&(a[v]=y.x-1),w.x===0&&w.z===0&&(a[v]=L/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ql(e.vertices,e.indices,e.radius,e.details)}}class ec extends Ql{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ec(e.radius,e.detail)}}class Pn extends Kt{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new N,d=new N,f=[],g=[],_=[],m=[];for(let p=0;p<=i;p++){const y=[],v=p/i;let w=0;p===0&&a===0?w=.5/t:p===i&&l===Math.PI&&(w=-.5/t);for(let L=0;L<=t;L++){const A=L/t;h.x=-e*Math.cos(r+A*s)*Math.sin(a+v*o),h.y=e*Math.cos(a+v*o),h.z=e*Math.sin(r+A*s)*Math.sin(a+v*o),g.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),m.push(A+w,1-v),y.push(c++)}u.push(y)}for(let p=0;p<i;p++)for(let y=0;y<t;y++){const v=u[p][y+1],w=u[p][y],L=u[p+1][y],A=u[p+1][y+1];(p!==0||a>0)&&f.push(v,w,A),(p!==i-1||l<Math.PI)&&f.push(w,L,A)}this.setIndex(f),this.setAttribute("position",new It(g,3)),this.setAttribute("normal",new It(_,3)),this.setAttribute("uv",new It(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class hv extends Dt{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}}class et extends zr{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qh,this.normalScale=new ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class za extends St{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class fd extends za{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Te(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const To=new ut,fu=new N,pu=new N;class pd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ze(512,512),this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yl,this._frameExtents=new ze(1,1),this._viewportCount=1,this._viewports=[new ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;fu.setFromMatrixPosition(e.matrixWorld),t.position.copy(fu),pu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(pu),t.updateMatrixWorld(),To.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(To),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(To)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const mu=new ut,Qr=new N,Ao=new N;class dv extends pd{constructor(){super(new $t(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ze(4,2),this._viewportCount=6,this._viewports=[new ct(2,1,1,1),new ct(0,1,1,1),new ct(3,1,1,1),new ct(1,1,1,1),new ct(3,0,1,1),new ct(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Qr.setFromMatrixPosition(e.matrixWorld),i.position.copy(Qr),Ao.copy(i.position),Ao.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Ao),i.updateMatrixWorld(),r.makeTranslation(-Qr.x,-Qr.y,-Qr.z),mu.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mu)}}class fv extends za{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new dv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class pv extends pd{constructor(){super(new Jl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class md extends za{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.shadow=new pv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class gd extends za{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class tc{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=gu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=gu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function gu(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hl);function Mt(n,e=!1){const t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),r=new Set(Object.keys(n[0].morphAttributes)),s={},a={},o=n[0].morphTargetsRelative,l=new Kt;let c=0;for(let u=0;u<n.length;++u){const h=n[u];let d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in h.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(h.attributes[f]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in h.morphAttributes){if(!r.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(h.morphAttributes[f])}if(e){let f;if(t)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,u),c+=f}}if(t){let u=0;const h=[];for(let d=0;d<n.length;++d){const f=n[d].index;for(let g=0;g<f.count;++g)h.push(f.getX(g)+u);u+=n[d].attributes.position.count}l.setIndex(h)}for(const u in s){const h=_u(s[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(const u in a){const h=a[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<h;++d){const f=[];for(let _=0;_<a[u].length;++_)f.push(a[u][_][d]);const g=_u(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function _u(n){let e,t,i,r=-1,s=0;for(let c=0;c<n.length;++c){const u=n[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*t}const a=new e(s),o=new zt(a,t,i);let l=0;for(let c=0;c<n.length;++c){const u=n[c];if(u.isInterleavedBufferAttribute){const h=l/t;for(let d=0,f=u.count;d<f;d++)for(let g=0;g<t;g++){const _=u.getComponent(d,g);o.setComponent(d+h,g,_)}}else a.set(u.array,l);l+=u.count*t}return r!==void 0&&(o.gpuType=r),o}const ci=["#3ae9ff","#ff2f92","#ffa32f","#8b5cff","#5cff9d","#ff4949"],vu=["渋谷","カラオケ","ラーメン","居酒屋","東京","ネオン","24H","BAR","GAME","寿司","薬","酒場"],Ys=["渋谷","SHIBUYA","呪術","TOKYO","NEON","東京"],yu=[["#e63b2e","#ffd24a"],["#1f66c9","#ffffff"],["#f3c623","#1c1c1c"],["#f4f1ea","#d8232a"],["#0f8b5f","#f7f4ec"],["#16181f","#ff5b8a"]];function Ha(n){return()=>{n|=0,n=n+1831565813|0;let e=Math.imul(n^n>>>15,1|n);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}const _a=[{base:"#8d9299",lit:["#e8e4d8","#dde6ee","#f1eadb"],ratio:.34},{base:"#9aa0a4",lit:["#e2e6e9","#f0e8da"],ratio:.26},{base:"#7f858c",lit:["#dfe5ea","#eae2d2"],ratio:.4},{base:"#a8a49b",lit:["#f2ecdf","#e3e8ec"],ratio:.24},{base:"#b2aca1",lit:["#f4efe3","#e8eced"],ratio:.22},{base:"#8f9198",lit:["#e6e9ec","#efe6d6"],ratio:.3}];function va(n,e){const a=document.createElement("canvas");a.width=128,a.height=256;const o=a.getContext("2d"),l=document.createElement("canvas");l.width=128,l.height=256;const c=l.getContext("2d"),u=new Te(n.base);o.fillStyle=`rgb(${Math.round(u.r*255)}, ${Math.round(u.g*255)}, ${Math.round(u.b*255)})`,o.fillRect(0,0,128,256);const h=o.createLinearGradient(0,0,0,256);h.addColorStop(0,"rgba(255,255,255,0.06)"),h.addColorStop(.55,"rgba(0,0,0,0.12)"),h.addColorStop(1,"rgba(0,0,0,0.5)"),o.fillStyle=h,o.fillRect(0,0,128,256),o.fillStyle="rgba(0,0,0,0.55)";for(let y=0;y<=16;y++)o.fillRect(0,Math.round(y*256/16),128,1.6);c.fillStyle="#000",c.fillRect(0,0,128,256);const d=128*.07,f=256*.045,g=(128-d*2)/7,_=(256-f*2)/16;for(let y=0;y<16;y++)for(let v=0;v<7;v++){const w=d+v*g,L=f+y*_,A=g*.72,R=_*.52;if(e()<n.ratio){const x=n.lit[Math.floor(e()*n.lit.length)];o.fillStyle=x,o.globalAlpha=.85,o.fillRect(w,L,A,R),o.globalAlpha=1,c.fillStyle=`rgba(255,255,255,${(.45+e()*.55).toFixed(3)})`,c.fillRect(w,L,A,R)}else o.fillStyle="#3c434b",o.fillRect(w,L,A,R)}const m=new sn(a),p=new sn(l);for(const y of[m,p])y.colorSpace=vt,y.wrapS=Jn,y.wrapT=Jn,y.anisotropy=4;return{map:m,emissive:p}}function _d(n,e){const r=document.createElement("canvas");r.width=128,r.height=512;const s=r.getContext("2d");s.fillStyle="rgba(4,6,11,0.9)",s.fillRect(0,0,128,512),s.globalAlpha=.16,s.fillStyle=e,s.fillRect(0,0,128,512),s.globalAlpha=1,s.strokeStyle=e,s.lineWidth=7,s.strokeRect(8,8,112,496),s.font='bold 80px "Noto Sans JP", "Noto Sans CJK JP", "PingFang SC", "Microsoft YaHei", sans-serif',s.textAlign="center",s.textBaseline="middle",s.shadowColor=e,s.shadowBlur=26,s.fillStyle=e;const a=[...n],o=440/a.length;a.forEach((c,u)=>{s.fillText(c,128/2,38+o*(u+.5))});const l=new sn(r);return l.colorSpace=vt,l.anisotropy=4,l}function wu(n){const e=parseInt(n.replace("#",""),16),t=e>>16&255,i=e>>8&255,r=e&255;return(t*.299+i*.587+r*.114)/255}function cs(n,e,t,i){const a=document.createElement("canvas");a.width=512,a.height=256;const o=a.getContext("2d");o.fillStyle=e,o.fillRect(0,0,512,256),o.save(),o.translate(512*.5,256*.5),o.rotate(-.2),o.globalAlpha=.22,o.fillStyle=t,o.fillRect(-512*.8,-256*.9,512*1.6,256*.55),o.restore(),o.globalAlpha=.16,o.fillStyle=t,o.beginPath(),o.arc(512*.82,256*.24,54,0,Math.PI*2),o.fill(),o.globalAlpha=1,o.strokeStyle="rgba(255,255,255,0.82)",o.lineWidth=5,o.strokeRect(9,9,494,238);const l=wu(e)>.58?"#14161b":"#f9f6ee",c=wu(t)>.62?"#14161b":t;o.font='900 104px "Noto Sans JP", "Noto Sans CJK JP", "PingFang SC", "Microsoft YaHei", sans-serif',o.textAlign="left",o.textBaseline="middle",o.fillStyle=l,o.fillText(n,34,256*.47,444),o.font='600 24px "Noto Sans JP", sans-serif',o.fillStyle=c,o.fillText("SHIBUYA — TOKYO",38,218),o.globalAlpha=.08,o.fillStyle="#000";for(let h=0;h<120;h++)o.fillRect(i()*512,i()*256,1.4,1.4);o.globalAlpha=1;const u=new sn(a);return u.colorSpace=vt,u.anisotropy=4,u}function mv(n){const s=document.createElement("canvas");s.width=256,s.height=512;const a=s.getContext("2d"),o=document.createElement("canvas");o.width=256,o.height=512;const l=o.getContext("2d");a.fillStyle="#3a4a5e",a.fillRect(0,0,256,512),l.fillStyle="#000",l.fillRect(0,0,256,512);const c=256/20,u=512/36;for(let f=0;f<36;f++)for(let g=0;g<20;g++){const _=n()<.16,m=n()<.35;a.fillStyle=_?m?"#c8b591":"#a9c2d8":n()<.5?"#41526a":"#38485c",a.fillRect(g*c+1,f*u+1,c-2,u-2.5),_&&(l.fillStyle=`rgba(255,255,255,${(.35+n()*.55).toFixed(3)})`,l.fillRect(g*c+1,f*u+1,c-2,u-2.5))}a.fillStyle="rgba(18,26,36,0.75)";for(let f=0;f<=20;f++)a.fillRect(f*c,0,2,512);a.fillStyle="rgba(140,160,180,0.22)";for(let f=0;f<=36;f++)a.fillRect(0,f*u,256,1.5);const h=new sn(s),d=new sn(o);for(const f of[h,d])f.colorSpace=vt,f.wrapS=Jn,f.wrapT=Jn,f.anisotropy=8;return{map:h,emissive:d}}function vd(){const t=document.createElement("canvas");t.width=512,t.height=256;const i=t.getContext("2d");i.fillStyle="#dcd8cc",i.fillRect(0,0,512,256);const r=4,s=256/(r+1);for(let o=0;o<r;o++){const l=26+o*s;i.fillStyle="#46586a",i.fillRect(18,l,476,s*.62),i.fillStyle="rgba(198,214,228,0.45)",i.fillRect(18,l+3,476,s*.18),i.fillStyle="#cfcabd";for(let c=18;c<494;c+=42)i.fillRect(c,l,3,s*.62)}i.fillStyle="rgba(255,255,255,0.55)",i.fillRect(0,0,512,10);const a=new sn(t);return a.colorSpace=vt,a.wrapS=Jn,a.wrapT=Jn,a.repeat.set(3,1),a.anisotropy=4,a}function yd(){const t=document.createElement("canvas");t.width=1024,t.height=160;const i=t.getContext("2d");i.fillStyle="#101a16",i.fillRect(0,0,1024,160),i.fillStyle="#3f8f4a",i.fillRect(0,144,1024,16),i.font='900 88px "Noto Sans JP", "Noto Sans CJK JP", "PingFang SC", "Microsoft YaHei", sans-serif',i.textAlign="center",i.textBaseline="middle",i.fillStyle="#f5f2e9",i.fillText("渋谷駅",1024*.32,160*.5),i.font='600 42px "Noto Sans JP", sans-serif',i.fillStyle="#bfe3c2",i.fillText("SHIBUYA STATION",1024*.72,160*.5);const r=new sn(t);return r.colorSpace=vt,r.anisotropy=8,r}function wd(){const r=c=>c*6.4,s=document.createElement("canvas");s.width=1024,s.height=1024;const a=s.getContext("2d");a.fillStyle="#33373d",a.fillRect(0,0,1024,1024);const o=Ha(77);for(let c=0;c<5200;c++)a.fillStyle=`rgba(255,255,255,${(o()*.03).toFixed(3)})`,a.fillRect(o()*1024,o()*1024,1.5,1.5);a.fillStyle="rgba(0,0,0,0.28)",a.fillRect(512-r(19),0,r(38),1024),a.fillRect(0,512-r(19),1024,r(38)),a.fillStyle="rgba(224,232,232,0.32)";for(let c=-78;c<=78;c+=8)Math.abs(c)<22||a.fillRect(512+r(c),512-r(.16),r(3.6),r(.32));for(let c=-78;c<=78;c+=8)Math.abs(c)<22||a.fillRect(512-r(.16),512+r(c),r(.32),r(3.6));a.fillStyle="rgba(222,230,230,0.78)";for(const c of[-1,1]){for(let u=-17;u<=17;u+=2.5)a.fillRect(512+r(c*13-4.5),512+r(u),r(9),r(1.15));for(let u=-17;u<=17;u+=2.5)a.fillRect(512+r(u),512+r(c*13-4.5),r(1.15),r(9))}a.save(),a.beginPath(),a.rect(512-r(19),512-r(19),r(38),r(38)),a.clip(),a.globalAlpha=.74;for(const c of[Math.PI/4,-Math.PI/4]){a.save(),a.translate(512,512),a.rotate(c);for(let u=-18;u<=18;u+=2.7)a.fillRect(-r(18),r(u),r(36),r(1.1));a.restore()}a.restore(),a.globalAlpha=1,a.strokeStyle="rgba(182,194,206,0.5)",a.lineWidth=r(.35),a.beginPath(),a.moveTo(512+r(19),0),a.lineTo(512+r(19),512-r(19)),a.moveTo(512+r(19),512+r(19)),a.lineTo(512+r(19),1024),a.moveTo(512-r(19),0),a.lineTo(512-r(19),512-r(19)),a.moveTo(512-r(19),512+r(19)),a.lineTo(512-r(19),1024),a.moveTo(0,512+r(19)),a.lineTo(512-r(19),512+r(19)),a.moveTo(512+r(19),512+r(19)),a.lineTo(1024,512+r(19)),a.moveTo(0,512-r(19)),a.lineTo(512-r(19),512-r(19)),a.moveTo(512+r(19),512-r(19)),a.lineTo(1024,512-r(19)),a.stroke(),a.globalAlpha=.12,a.fillStyle="#000",a.fillRect(512-r(18),512-r(18),r(36),r(36)),a.globalAlpha=1;const l=new sn(s);return l.colorSpace=vt,l.anisotropy=8,l}function gv(){const e=document.createElement("canvas");e.width=256,e.height=256;const t=e.getContext("2d"),i=t.createRadialGradient(256/2,256/2,0,256/2,256/2,256/2);i.addColorStop(0,"rgba(255,255,255,0.9)"),i.addColorStop(.45,"rgba(255,255,255,0.35)"),i.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=i,t.fillRect(0,0,256,256);const r=new sn(e);return r.colorSpace=vt,r}function _v(){const n=new xn,e=Ha(20261021),t=_a.map(F=>va(F,e)),i=[],r=[],s=[],a=[],o=new fe(new mt(1e3,1e3),new et({color:"#343940",roughness:.95,metalness:.05}));o.rotation.x=-Math.PI/2,n.add(o);const l=new fe(new mt(160,160),new et({map:wd(),roughness:.82,metalness:.15}));l.rotation.x=-Math.PI/2,l.position.y=.02,n.add(l);const c=new et({color:"#4d525a",roughness:.9,metalness:.1}),u=new $e(1,1,1),h=[],d=new $e(1,1,1),f=new et({color:"#5a6068",roughness:.85,metalness:.2}),g=[],_=64,m=40,p=[[-10.5,-10.5],[10.5,-10.5],[-10.5,10.5],[10.5,10.5]],y=(F,ie)=>e()<.3?{axis:"x",sign:F<0?1:-1}:{axis:"z",sign:1},v=(F,ie,I,X,M)=>{const G=y(F),D=_d(vu[Math.floor(e()*vu.length)],ci[Math.floor(e()*ci.length)]),B=Math.min(20,Math.max(10,M*.6)),J=3.5,K=new ht({map:D,transparent:!0,toneMapped:!1});r.push(K);const se=new fe(new mt(J,B),K),Me=6+e()*Math.max(1,M-B-8);G.axis==="x"?(se.position.set(F+G.sign*(I/2+.22),Me,ie+(e()-.5)*X*.4),se.rotation.y=G.sign*(Math.PI/2)):(se.position.set(F+(e()-.5)*I*.4,Me,ie+G.sign*(X/2+.22)),se.rotation.y=G.sign===1?0:Math.PI),n.add(se)},w=(F,ie,I,X,M)=>{const G=y(F),D=ci[Math.floor(e()*ci.length)],B=ci[Math.floor(e()*ci.length)],J=cs(Ys[Math.floor(e()*Ys.length)],D,B,e),K=new ht({map:J,toneMapped:!1});r.push(K);const se=Math.min(16,I*.9),Me=se*.5,We=new fe(new mt(se,Me),K),He=Math.min(M-Me*.6,M*.65+2);G.axis==="x"?(We.position.set(F+G.sign*(I/2+.26),He,ie),We.rotation.y=G.sign*(Math.PI/2)):(We.position.set(F,He,ie+G.sign*(X/2+.26)),We.rotation.y=G.sign===1?0:Math.PI),n.add(We)},L=new et({color:"#171a20",roughness:.7,metalness:.5}),A=new $e(.34,2.6,.34),R=(F,ie,I,X,M)=>{const{axis:G,sign:D}=y(F),[B,J]=yu[Math.floor(e()*yu.length)],K=cs(Ys[Math.floor(e()*Ys.length)],B,J,e),se=new ht({map:K,toneMapped:!1}),Me=Math.min(22,Math.max(11,(G==="z"?I:X)*1.15)),We=Me*.5,He=new fe(new mt(Me,We),se),je=M+2.6+We/2,lt=Me*.38;for(const Rt of[-1,1]){const Ht=new fe(A,L);G==="z"?Ht.position.set(F+Rt*lt,M+1.3,ie+D*(X/2-1.4)):Ht.position.set(F+D*(I/2-1.4),M+1.3,ie+Rt*lt),n.add(Ht)}G==="z"?(He.position.set(F,je,ie+D*(X/2-1.4)),He.rotation.y=D===1?0:Math.PI):(He.position.set(F+D*(I/2-1.4),je,ie),He.rotation.y=D*(Math.PI/2)),n.add(He)},P=[],x=[];let S=0;const C=new Map,z=new ut,H=new Fr,$=new N,ee=new N;for(const F of[-1,1])for(const ie of[-1,1])for(let I=0;I<3;I++)for(let X=0;X<3;X++){const M=F*(40+I*_),G=ie*(40+X*_),D=Math.hypot(M,G);if(h.push({x:M,z:G}),!(M===40&&G===-104||M===-40&&G===-104||M===168&&G===-40))for(const[B,J]of p){if(e()<.16)continue;const K=13+e()*6.5,se=13+e()*6.5,Me=M+B+(e()-.5)*1.6,We=G+J+(e()-.5)*1.6;if(Me>-74&&Me<-20&&We>12&&We<126)continue;const He=16+Math.min(D*.16,38)+e()*26;let je=Math.round(He);e()<.08&&(je+=28);const lt=Math.floor(e()*t.length),Rt=Math.max(1,Math.round(K/16)),Ht=Math.max(1,Math.round(je/32)),an=`${lt}|${Rt}|${Ht}`;let on=C.get(an);if(on||(on={facade:lt,repeatX:Rt,repeatY:Ht,matrices:[]},C.set(an,on)),$.set(Me,je/2+.3,We),ee.set(K,je,se),z.compose($,H,ee),on.matrices.push(z.clone()),g.push({x:Me,y:je+.75,z:We,w:K+.6,d:se+.6}),je>52&&P.push({x:Me,y:je+1.8,z:We}),D<170&&(e()<.85&&v(Me,We,K,se,je),e()<.38&&v(Me,We,K,se,je),e()<.4&&w(Me,We,K,se,je),S<16&&je<76&&D<230&&e()<.34&&(S++,R(Me,We,K,se,je)),e()<.55)){const Yt=e()<.5?"z":"x",Jt=e()<.5?1:-1;x.push({x:Me+(Yt==="x"?Jt*K/2:0),y:je-2-e()*8,z:We+(Yt==="z"?Jt*se/2:0),length:Yt==="x"?se*.72:K*.72,axis:Yt,color:ci[Math.floor(e()*ci.length)]})}}}for(const F of C.values()){const ie=t[F.facade],I=ie.map.clone(),X=ie.emissive.clone();I.repeat.set(F.repeatX,F.repeatY),X.repeat.set(F.repeatX,F.repeatY),I.needsUpdate=!0,X.needsUpdate=!0;const M=new et({map:I,emissiveMap:X,emissive:new Te("#ffffff"),emissiveIntensity:.1,roughness:.86,metalness:.06});i.push(M);const G=F.matrices.map(B=>d.clone().applyMatrix4(B)),D=Mt(G,!1);for(const B of G)B.dispose();D&&n.add(new fe(D,M))}const Y=[{x:40,z:-104,h:108,w:24,d:24},{x:-40,z:-104,h:86,w:21,d:21},{x:168,z:-40,h:128,w:27,d:25}],te=mv(e);Y.forEach(F=>{const ie=new et({map:te.map,emissiveMap:te.emissive,emissive:new Te("#ffffff"),emissiveIntensity:.1,roughness:.34,metalness:.14});i.push(ie);const I=new fe(d,ie);I.scale.set(F.w,F.h,F.d),I.position.set(F.x,F.h/2+.3,F.z),n.add(I);const X=new fe(d,f);X.scale.set(F.w*.7,2.6,F.d*.7),X.position.set(F.x,F.h+1.6,F.z),n.add(X),P.push({x:F.x,y:F.h+4.2,z:F.z})});const q=new et({map:vd(),roughness:.55,metalness:.25}),le=new fe(new $e(38,13,46),q);le.position.set(-46,6.8,42),n.add(le);const pe=new fe(new $e(42,1.2,50),f);pe.position.set(-46,13.5,42),n.add(pe);const _e=new ht({map:yd(),toneMapped:!1,side:_n}),ke=new fe(new mt(26,4.1),_e);ke.position.set(-26.7,10.2,42),ke.rotation.y=Math.PI/2,n.add(ke);const Je=new fe(new mt(26,4.1),_e);Je.position.set(-46,10.2,65.2),n.add(Je);const Z=new et({color:"#4b4f56",roughness:.9,metalness:.05}),ae=new fe(new $e(13,1.3,380),Z);ae.position.set(-72,12.4,-10),n.add(ae);const Se=new et({color:"#9aa0a8",roughness:.35,metalness:.8});for(const F of[-3.6,3.6]){const ie=new fe(new $e(.34,.3,380),Se);ie.position.set(-72+F,13.2,-10),n.add(ie)}for(let F=-190;F<=190;F+=38){if(Math.abs(F)<30)continue;const ie=new fe(new $e(3.2,12,2.6),Z);ie.position.set(-72,6,F),n.add(ie)}const ue=new et({color:"#6fa54d",roughness:.45,metalness:.3}),Re=new ht({color:"#ffeec2",toneMapped:!1});for(let F=0;F<4;F++){const ie=18+F*18,I=new fe(new $e(3.2,3.2,17),ue);I.position.set(-72,14.75,ie),n.add(I);const X=new fe(new $e(3.26,.95,13),Re);X.position.set(-72,15.4,ie),n.add(X)}const Fe=new li(u,c,h.length),be=new St;h.forEach((F,ie)=>{be.position.set(F.x,.14,F.z),be.scale.set(m,.28,m),be.updateMatrix(),Fe.setMatrixAt(ie,be.matrix)}),Fe.instanceMatrix.needsUpdate=!0,n.add(Fe);const ye=new li(d,f,g.length);g.forEach((F,ie)=>{be.position.set(F.x,F.y,F.z),be.scale.set(F.w,1.1,F.d),be.updateMatrix(),ye.setMatrixAt(ie,be.matrix)}),ye.instanceMatrix.needsUpdate=!0,n.add(ye);const Ae=new Pn(.36,8,6),qe=new ht({color:"#ff2222",toneMapped:!1}),U=new li(Ae,qe,P.length);P.forEach((F,ie)=>{be.position.set(F.x,F.y,F.z),be.scale.setScalar(1),be.updateMatrix(),U.setMatrixAt(ie,be.matrix)}),U.instanceMatrix.needsUpdate=!0,n.add(U);const yt=new ht({color:"#ffffff",toneMapped:!1}),Ge=new li(d,yt,x.length);x.forEach((F,ie)=>{be.position.set(F.x,F.y,F.z),be.rotation.set(0,F.axis==="z"?Math.PI/2:0,0),be.scale.set(.32,.32,F.length),be.updateMatrix(),Ge.setMatrixAt(ie,be.matrix),Ge.setColorAt(ie,new Te(F.color).multiplyScalar(1.4))}),be.rotation.set(0,0,0),Ge.instanceMatrix.needsUpdate=!0,Ge.instanceColor&&(Ge.instanceColor.needsUpdate=!0),n.add(Ge),r.push(yt);const Xe=gv();[{x:-72,z:-72,size:44,color:"#ffe0b0"},{x:72,z:-72,size:44,color:"#ffcf92"},{x:-72,z:72,size:44,color:"#ffd8a8"},{x:72,z:72,size:44,color:"#ffc07a"}].forEach(F=>{const ie=new Te(F.color),I=new ht({map:Xe,color:ie,transparent:!0,opacity:.5,blending:Fi,depthWrite:!1,toneMapped:!1});a.push({material:I,base:ie});const X=new fe(new mt(F.size,F.size),I);X.rotation.x=-Math.PI/2,X.position.set(F.x,.07,F.z),X.renderOrder=2,n.add(X)}),[{x:-27,z:-27,color:"#ff2d95"},{x:27,z:-27,color:"#2ee6ff"},{x:-27,z:27,color:"#ffa32f"},{x:27,z:27,color:"#8b5cff"}].forEach(F=>{const ie=new Te(F.color),I=new ht({map:Xe,color:ie,transparent:!0,opacity:.34,blending:Fi,depthWrite:!1,toneMapped:!1});a.push({material:I,base:ie});const X=new fe(new mt(15,15),I);X.rotation.x=-Math.PI/2,X.position.set(F.x,.06,F.z),X.renderOrder=2,n.add(X)});const Ue=new et({color:"#0a0e16",roughness:.9,metalness:.15}),T=170,b=new li(d,Ue,T);for(let F=0;F<T;F++){const ie=e()*Math.PI*2,I=240+e()*220,X=Math.cos(ie)*I,M=Math.sin(ie)*I,G=20+e()*85,D=18+e()*26;be.position.set(X,G/2,M),be.scale.set(D,G,18+e()*26),be.rotation.y=e()*Math.PI,be.updateMatrix(),b.setMatrixAt(F,be.matrix)}be.rotation.y=0,b.instanceMatrix.needsUpdate=!0,n.add(b);const V=new et({color:"#22262e",roughness:.6,metalness:.6}),ne=new ht({color:"#ffd9a0",toneMapped:!1});[[-24,-24],[24,-24],[-24,24],[24,24],[-24,-72],[24,72],[-72,24],[72,-24]].forEach(([F,ie],I)=>{const X=new fe(new wr(.09,.12,6,6),V);X.position.set(F,3,ie),n.add(X);const M=new fe(new Pn(.3,8,6),ne);if(M.position.set(F,6.1,ie),n.add(M),I<6){const G=new Te("#ffd2a0"),D=new ht({map:Xe,color:G,transparent:!0,opacity:.5,blending:Fi,depthWrite:!1,toneMapped:!1});a.push({material:D,base:G});const B=new fe(new mt(12,12),D);B.rotation.x=-Math.PI/2,B.position.set(F,.05,ie),B.renderOrder=2,n.add(B)}}),s.push(ne);const Q=18,Ee=new li(new $e(1.85,.95,4.1),new et({color:"#ffffff",roughness:.45,metalness:.6}),Q),he=new li(new Pn(.17,6,4),new ht({color:"#fff3cf",toneMapped:!1}),Q*2),ge=new li(new Pn(.15,6,4),new ht({color:"#ff2436",toneMapped:!1}),Q*2),Ze=["#232833","#2c3140","#3b1f2b","#1e2c3a","#3a3a3a","#161a22"];Ee.instanceMatrix.setUsage(Ka),he.instanceMatrix.setUsage(Ka),ge.instanceMatrix.setUsage(Ka);const oe=[];for(let F=0;F<Q;F++){const ie=F%2===0?"x":"z",I=ie==="x"?[6.5,13.5,-6.5,-13.5]:[6.5,13.5,-6.5,-13.5],X=I[Math.floor(e()*I.length)],M=e()<.5?1:-1;oe.push({axis:ie,lane:X,dir:M,speed:16+e()*20,pos:(e()-.5)*460}),Ee.setColorAt(F,new Te(Ze[Math.floor(e()*Ze.length)]))}Ee.instanceColor&&(Ee.instanceColor.needsUpdate=!0),n.add(Ee,he,ge);const ve=new St,Ce=new St,Be=F=>{oe.forEach((ie,I)=>{ie.pos+=ie.speed*ie.dir*F,ie.pos>240&&(ie.pos=-240),ie.pos<-240&&(ie.pos=240);const X=ie.axis==="x"?ie.pos:ie.lane,M=ie.axis==="x"?ie.lane:ie.pos;ve.position.set(X,.75,M),ve.rotation.set(0,ie.axis==="x"?Math.PI/2:0,0),ve.scale.setScalar(1),ve.updateMatrix(),Ee.setMatrixAt(I,ve.matrix);const G=ie.axis==="x"?ie.dir*2.1:0,D=ie.axis==="z"?ie.dir*2.1:0,B=ie.axis==="x"?0:.55,J=ie.axis==="x"?.55:0;for(let K=0;K<2;K++){const se=K===0?1:-1;Ce.position.set(X+G+B*se,.72,M+D+J*se),Ce.scale.setScalar(1),Ce.updateMatrix(),he.setMatrixAt(I*2+K,Ce.matrix),Ce.position.set(X-G+B*se,.72,M-D+J*se),Ce.updateMatrix(),ge.setMatrixAt(I*2+K,Ce.matrix)}}),Ee.instanceMatrix.needsUpdate=!0,he.instanceMatrix.needsUpdate=!0,ge.instanceMatrix.needsUpdate=!0};return{object:n,update(F,ie,I){const X=.02+I.window*.95;for(const J of i)J.emissiveIntensity=X;const M=.45+I.neon*1.75;for(const J of r)J.color.setScalar(M);const G=.06+I.neon*.62;for(const{material:J,base:K}of a)J.color.copy(K).multiplyScalar(G),J.opacity=.12+I.neon*.26;const D=.25+I.window*1.7;for(const J of s)J.color.setScalar(D);const B=.55+.45*Math.sin(ie*2.2);qe.color.setRGB(1.4+B*2.2,.08,.1),Be(F)}}}const xd={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Gr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const vv=new Jl(-1,1,1,-1,0,1);class yv extends Kt{constructor(){super(),this.setAttribute("position",new It([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new It([0,2,0,0,2,0],2))}}const wv=new yv;class nc{constructor(e){this._mesh=new fe(wv,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,vv)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class xv extends Gr{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Dt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=fs.clone(e.uniforms),this.material=new Dt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new nc(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class xu extends Gr{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class Sv extends Gr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class bv{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new ze);this._width=i.width,this._height=i.height,t=new Sn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Kn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new xv(xd),this.copyPass.material.blending=Xn,this.clock=new tc}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const a=this.passes[r];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}xu!==void 0&&(a instanceof xu?i=!0:a instanceof Sv&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new ze);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}const Ev={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class Mv extends Gr{constructor(){super();const e=Ev;this.uniforms=fs.clone(e.uniforms),this.material=new hv({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new nc(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},tt.getTransfer(this._outputColorSpace)===at&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Lh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Dh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Uh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Gl?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Nh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Oh&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Tv extends Gr{constructor(e,t,i=null,r=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Te}render(e,t,i){const r=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}}const Av={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Te(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Dr extends Gr{constructor(e,t,i,r){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new ze(e.x,e.y):new ze(256,256),this.clearColor=new Te(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Sn(s,a,{type:Kn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new Sn(s,a,{type:Kn});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new Sn(s,a,{type:Kn});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),a=Math.round(a/2)}const o=Av;this.highPassUniforms=fs.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Dt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new ze(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=xd;this.copyUniforms=fs.clone(u.uniforms),this.blendMaterial=new Dt({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Fi,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Te,this.oldClearAlpha=1,this.basic=new ht,this.fsQuad=new nc(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(i,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,r),this.renderTargetsVertical[s].setSize(i,r),this.separableBlurMaterials[s].uniforms.invSize.value=new ze(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2)}render(e,t,i,r,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Dr.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Dr.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){const t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new Dt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ze(.5,.5)},direction:{value:new ze(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new Dt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Dr.BlurDirectionX=new ze(1,0);Dr.BlurDirectionY=new ze(0,1);function Sd(n,e,t){const i=new av({antialias:!0,powerPreference:"high-performance"});i.setPixelRatio(Math.min(window.devicePixelRatio,2)),i.setSize(window.innerWidth,window.innerHeight),i.outputColorSpace=vt,i.toneMapping=Gl,i.toneMappingExposure=1,n.appendChild(i.domElement);const r=new bv(i);r.addPass(new Tv(e,t));const s=new Dr(new ze(window.innerWidth,window.innerHeight),.9,.62,.6);r.addPass(s),r.addPass(new Mv);const a=()=>{t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix(),i.setSize(window.innerWidth,window.innerHeight),r.setSize(window.innerWidth,window.innerHeight),s.resolution.set(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",a),{renderer:i,composer:r,bloom:s,render(){r.render()},dispose(){window.removeEventListener("resize",a),r.dispose(),i.dispose()}}}const Rv=`
  varying vec3 vDir;
  void main() {
    vec4 world = modelMatrix * vec4(position, 1.0);
    vDir = world.xyz - cameraPosition;
    gl_Position = projectionMatrix * viewMatrix * world;
  }
`,Cv=`
  uniform vec3 uTop;
  uniform vec3 uBottom;
  uniform vec3 uSun;
  uniform vec3 uSunDir;
  uniform float uGlow;
  uniform float uDisc;
  varying vec3 vDir;

  void main() {
    vec3 dir = normalize(vDir);
    float h = dir.y;
    float t = smoothstep(-0.06, 0.14, h);
    vec3 col = mix(uBottom, uTop, t);

    float horizon = pow(1.0 - clamp(abs(h), 0.0, 1.0), 6.0);
    col += uBottom * horizon * 0.18;

    float sun = max(dot(dir, normalize(uSunDir)), 0.0);
    col += uSun * pow(sun, 900.0) * uDisc * 9.0;
    col += uSun * pow(sun, 26.0) * 0.34 * uGlow;
    col += uSun * pow(sun, 4.0) * 0.09 * uGlow;

    gl_FragColor = vec4(col, 1.0);
  }
`;function Pv(){const e=new Float32Array(4200),t=new Float32Array(1400),i=(()=>{let o=20261021;return()=>(o=(o*1664525+1013904223)%4294967296,o/4294967296)})();for(let o=0;o<1400;o++){const l=i()*Math.PI*2,c=.06+i()*.94,u=Math.sqrt(Math.max(0,1-c*c));e[o*3]=Math.cos(l)*u*560,e[o*3+1]=c*560,e[o*3+2]=Math.sin(l)*u*560,t[o]=.6+i()*1.8}const r=new Kt;r.setAttribute("position",new zt(e,3)),r.setAttribute("aSize",new zt(t,1));const s=new Dt({transparent:!0,depthTest:!1,depthWrite:!1,blending:Fi,uniforms:{uOpacity:{value:0},uPixelRatio:{value:Math.min(window.devicePixelRatio,2)}},vertexShader:`
      attribute float aSize;
      uniform float uPixelRatio;
      void main() {
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = aSize * uPixelRatio;
        gl_Position = projectionMatrix * mv;
      }
    `,fragmentShader:`
      uniform float uOpacity;
      void main() {
        float d = length(gl_PointCoord - vec2(0.5));
        float alpha = smoothstep(0.5, 0.1, d);
        gl_FragColor = vec4(vec3(0.83, 0.9, 1.0), alpha * uOpacity);
      }
    `}),a=new uv(r,s);return a.renderOrder=-9,a.frustumCulled=!1,a}function bd(){const n=new xn,e={uTop:{value:new Te("#02040c")},uBottom:{value:new Te("#0c1830")},uSun:{value:new Te("#bdd5ff")},uSunDir:{value:new N(.3,.7,-.6)},uGlow:{value:.7},uDisc:{value:1.2}},t=new fe(new Pn(600,48,32),new Dt({uniforms:e,vertexShader:Rv,fragmentShader:Cv,side:Bt,depthTest:!1,depthWrite:!1}));t.renderOrder=-10,t.frustumCulled=!1,n.add(t);const i=Pv();return n.add(i),{object:n,update(r,s){t.position.copy(s),i.position.copy(s),e.uTop.value.copy(r.top),e.uBottom.value.copy(r.bottom),e.uSun.value.copy(r.sun),e.uSunDir.value.copy(r.sunDir),e.uGlow.value=r.sunGlow,e.uDisc.value=r.sunDisc,i.material.uniforms.uOpacity.value=r.star}}}const rs={dawn:{top:"#243b68",bottom:"#ffb27c",sun:"#ffd8a8",sunDir:[-.62,.09,-.78],sunGlow:1.9,sunDisc:2.4,sunIntensity:2.4,ambient:.55,hemiSky:"#a3bae0",hemiGround:"#3a2f26",hemiIntensity:1.7,fog:"#4b4560",fogDensity:.00135,window:.42,neon:.6,star:.28,bloom:.6,exposure:1.02},day:{top:"#1668d4",bottom:"#eef8ff",sun:"#fff6de",sunDir:[.3,.8,.52],sunGlow:.45,sunDisc:1.4,sunIntensity:5.6,ambient:1.35,hemiSky:"#eaf4ff",hemiGround:"#7b828c",hemiIntensity:4,fog:"#cfe0ee",fogDensity:26e-5,window:.03,neon:.12,star:0,bloom:.2,exposure:1.18},dusk:{top:"#3a2a63",bottom:"#ff7043",sun:"#ff9c5c",sunDir:[.78,.07,-.62],sunGlow:2.4,sunDisc:2.5,sunIntensity:2.8,ambient:.56,hemiSky:"#c47a8c",hemiGround:"#31232c",hemiIntensity:1.6,fog:"#57384a",fogDensity:.00105,window:.78,neon:1,star:.18,bloom:.9,exposure:1.08},night:{top:"#02040c",bottom:"#0c1830",sun:"#bdd5ff",sunDir:[.28,.74,-.62],sunGlow:.65,sunDisc:1.1,sunIntensity:.38,ambient:.2,hemiSky:"#33456e",hemiGround:"#0c0e14",hemiIntensity:.42,fog:"#060a14",fogDensity:.0019,window:1.18,neon:1.3,star:1,bloom:1.05,exposure:1.1}};function ss(n){return{top:new Te(n.top),bottom:new Te(n.bottom),sun:new Te(n.sun),sunDir:new N(...n.sunDir).normalize(),sunGlow:n.sunGlow,sunDisc:n.sunDisc,sunIntensity:n.sunIntensity,ambient:n.ambient,hemiSky:new Te(n.hemiSky),hemiGround:new Te(n.hemiGround),hemiIntensity:n.hemiIntensity,fog:new Te(n.fog),fogDensity:n.fogDensity,window:n.window,neon:n.neon,star:n.star,bloom:n.bloom,exposure:n.exposure}}const Ro={dawn:ss(rs.dawn),day:ss(rs.day),dusk:ss(rs.dusk),night:ss(rs.night)};function Su(n=new Date){var r,s;const e=new Intl.DateTimeFormat("en-GB",{timeZone:"Asia/Shanghai",hour:"2-digit",minute:"2-digit",hour12:!1}).formatToParts(n),t=Number(((r=e.find(a=>a.type==="hour"))==null?void 0:r.value)??"0"),i=Number(((s=e.find(a=>a.type==="minute"))==null?void 0:s.value)??"0");return t%24+i/60}function bu(n){return n>=5&&n<7?"dawn":n>=7&&n<17?"day":n>=17&&n<19?"dusk":"night"}class Ed{constructor(e){vi(this,"env");vi(this,"hourOverride");vi(this,"hour",0);vi(this,"phase","night");vi(this,"target",Ro.night);vi(this,"timer",0);this.hourOverride=e;const t=e??Su();this.hour=t,this.phase=bu(t),this.target=Ro[this.phase],this.env=ss(rs[this.phase])}update(e){if(this.timer+=e,this.timer>=1){this.timer=0,this.hour=this.hourOverride??Su();const s=bu(this.hour);s!==this.phase&&(this.phase=s,this.target=Ro[s])}const t=1-Math.exp(-e*.9),i=this.env,r=this.target;i.top.lerp(r.top,t),i.bottom.lerp(r.bottom,t),i.sun.lerp(r.sun,t),i.hemiSky.lerp(r.hemiSky,t),i.hemiGround.lerp(r.hemiGround,t),i.fog.lerp(r.fog,t),i.sunDir.lerp(r.sunDir,t).normalize(),i.sunGlow+=(r.sunGlow-i.sunGlow)*t,i.sunDisc+=(r.sunDisc-i.sunDisc)*t,i.sunIntensity+=(r.sunIntensity-i.sunIntensity)*t,i.ambient+=(r.ambient-i.ambient)*t,i.hemiIntensity+=(r.hemiIntensity-i.hemiIntensity)*t,i.fogDensity+=(r.fogDensity-i.fogDensity)*t,i.window+=(r.window-i.window)*t,i.neon+=(r.neon-i.neon)*t,i.star+=(r.star-i.star)*t,i.bloom+=(r.bloom-i.bloom)*t,i.exposure+=(r.exposure-i.exposure)*t}}const Eu="0.4.1",Iv=[{version:"0.4.1",date:"2026-10-22",title:"摇杆方向彻底修复 + 移动丝滑滤波",notes:["摇杆方向彻底修复：手指推向上=向前（之前 dy>0=forward 反了）","input.state 新增连续向量 moveX/moveZ（-1..1），替代离散 4 boolean","touchControls 每帧直接写归一化向量 + 钳死区 ±18%，平滑输入","player 加输入低通滤波（τ≈45ms）+ 速度跟随滤波（τ≈70ms），消除抖动顿挫","小死区 0.02 防止手指微抖导致角色原地踏步"]},{version:"0.4.0",date:"2026-10-22",title:"移动端横屏强制与触控修复",notes:["修复摇杆方向：角色面朝行走方向（第三人称朝向对齐相机反方向）","新增竖屏遮罩：手机竖持时黑色遮罩 + 旋转手机图标强制横屏游玩","移动端自动尝试调用 screen.orientation.lock('landscape') 强制锁方向","横屏下 HUD / 摇杆 / 按钮自动缩小适配窄视口","所有场景切换统一 loading 过渡：菜单↔游戏、暂停→返回菜单","PWA manifest orientation 改为 landscape，手机'添加到主屏幕'默认横屏","补充游戏 dispose 完整资源释放：WebGL loop / 事件监听 / 场景几何体材质"]},{version:"0.3.0",date:"2026-10-21",title:"公告系统与性能优化",notes:["新增右上角公告按钮，可查看当前版本与往期更新内容","左下角常驻显示当前版本号","主界面 UI 与字体重制，加入「渋谷事変」标识与咒术红印章","渲染优化：建筑网格按材质合批，绘制调用大幅下降","移除场景点光源，改用地面辉光贴片，光影观感不变"]},{version:"0.2.0",date:"2026-10-21",title:"参考图场景重建",notes:["按参考图重建涩谷：三座地标塔楼、涩谷站、高架铁路与列车","新增楼顶实体广告牌与竖向霓虹招牌，优先朝向中心路口","建筑立面改为浅灰与暖米色系，细化窗格","修复白天画面偏暗，重新匹配四个时段的天空与光照"]},{version:"0.1.0",date:"2026-10-21",title:"涩谷主界面",notes:["完成东京涩谷上空 3D 主界面场景","按北京时间自动切换黎明、白天、黄昏、夜晚四种画面","「咒术回战」标题与「进入游戏」按钮上线"]}];function Lv(){const n=document.querySelector("#notice-modal"),e=document.querySelector("#notice-list"),t=document.querySelector("#version-tag"),i=document.querySelector("#notice-open"),r=document.querySelector(".modal__close");if(!n||!e||!t||!i||!r)return;t.textContent=`v${Eu}`;for(const l of Iv){const c=document.createElement("article");c.className="log";const u=document.createElement("div");u.className="log__head";const h=document.createElement("span");h.className="log__version",h.textContent=l.version;const d=document.createElement("h3");if(d.className="log__title",d.textContent=l.title,u.append(h,d),l.version===Eu){const _=document.createElement("span");_.className="log__badge",_.textContent="当前版本",u.append(_)}const f=document.createElement("p");f.className="log__date",f.textContent=l.date;const g=document.createElement("ul");g.className="log__notes";for(const _ of l.notes){const m=document.createElement("li");m.textContent=_,g.append(m)}c.append(u,f,g),e.append(c)}let s=null;const a=()=>{s=document.activeElement,n.hidden=!1,document.documentElement.classList.add("modal-open"),r.focus()},o=()=>{n.hidden=!0,document.documentElement.classList.remove("modal-open"),s==null||s.focus()};i.addEventListener("click",a),r.addEventListener("click",o),n.querySelectorAll("[data-close]").forEach(l=>{l.addEventListener("click",o)}),window.addEventListener("keydown",l=>{l.key==="Escape"&&!n.hidden&&o()})}const Dv=Symbol.for("@supabase/supabase-js.traceContextExtractor");function Uv(){return globalThis[Dv]}function Ga(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(n);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(n,i[r])&&(t[i[r]]=n[i[r]]);return t}function Nv(n,e,t,i){function r(s){return s instanceof t?s:new t(function(a){a(s)})}return new(t||(t=Promise))(function(s,a){function o(u){try{c(i.next(u))}catch(h){a(h)}}function l(u){try{c(i.throw(u))}catch(h){a(h)}}function c(u){u.done?s(u.value):r(u.value).then(o,l)}c((i=i.apply(n,e||[])).next())})}const Ov=n=>n?(...e)=>n(...e):(...e)=>fetch(...e);class ic extends Error{constructor(e,t="FunctionsError",i){super(e),this.name=t,this.context=i}toJSON(){return{name:this.name,message:this.message,context:this.context}}}class kv extends ic{constructor(e){super("Failed to send a request to the Edge Function","FunctionsFetchError",e)}}class Mu extends ic{constructor(e){super("Relay Error invoking the Edge Function","FunctionsRelayError",e)}}class Tu extends ic{constructor(e){super("Edge Function returned a non-2xx status code","FunctionsHttpError",e)}}var Rl;(function(n){n.Any="any",n.ApNortheast1="ap-northeast-1",n.ApNortheast2="ap-northeast-2",n.ApSouth1="ap-south-1",n.ApSoutheast1="ap-southeast-1",n.ApSoutheast2="ap-southeast-2",n.CaCentral1="ca-central-1",n.EuCentral1="eu-central-1",n.EuWest1="eu-west-1",n.EuWest2="eu-west-2",n.EuWest3="eu-west-3",n.SaEast1="sa-east-1",n.UsEast1="us-east-1",n.UsWest1="us-west-1",n.UsWest2="us-west-2"})(Rl||(Rl={}));class Fv{constructor(e,{headers:t={},customFetch:i,region:r=Rl.Any}={}){this.url=e,this.headers=t,this.region=r,this.fetch=Ov(i)}setAuth(e){this.headers.Authorization=`Bearer ${e}`}invoke(e){return Nv(this,arguments,void 0,function*(t,i={}){var r,s;let a,o,l;try{const{headers:c,method:u,body:h,signal:d,timeout:f}=i;let g={},{region:_}=i;_||(_=this.region);const m=new URL(`${this.url}/${t}`);_&&_!=="any"&&(g["x-region"]=_,m.searchParams.set("forceFunctionRegion",_));let p;const y=!!c&&Object.keys(c).some(P=>P.toLowerCase()==="content-type");h&&!y?typeof Blob<"u"&&h instanceof Blob||h instanceof ArrayBuffer?(g["Content-Type"]=h.type||"application/octet-stream",p=h):typeof h=="string"?(g["Content-Type"]="text/plain",p=h):typeof FormData<"u"&&h instanceof FormData?p=h:(g["Content-Type"]="application/json",p=JSON.stringify(h)):h&&typeof h!="string"&&!(typeof Blob<"u"&&h instanceof Blob)&&!(h instanceof ArrayBuffer)&&!(typeof FormData<"u"&&h instanceof FormData)?p=JSON.stringify(h):p=h;let v=d;f&&(o=new AbortController,a=setTimeout(()=>o.abort(),f),d?(v=o.signal,l=()=>o.abort(),d.addEventListener("abort",l)):v=o.signal);const w=yield this.fetch(m.toString(),{method:u||"POST",headers:Object.assign(Object.assign(Object.assign({},g),this.headers),c),body:p,signal:v}).catch(P=>{throw new kv(P)}),L=w.headers.get("x-relay-error");if(L&&L==="true")throw new Mu(w);if(!w.ok)throw new Tu(w);let A=((r=w.headers.get("Content-Type"))!==null&&r!==void 0?r:"text/plain").split(";")[0].trim().toLowerCase(),R;return A==="application/json"?R=yield w.json():A==="application/octet-stream"||A==="application/pdf"?R=yield w.blob():A==="text/event-stream"?R=w:A==="multipart/form-data"?R=yield w.formData():R=yield w.text(),{data:R,error:null,response:w}}catch(c){return{data:null,error:c,response:c instanceof Tu||c instanceof Mu?c.context:void 0}}finally{a&&clearTimeout(a),l&&((s=i.signal)===null||s===void 0||s.removeEventListener("abort",l))}})}}var xr=class extends Error{constructor(n){super(n.message),this.name="PostgrestError",this.details=n.details,this.hint=n.hint,this.code=n.code}toJSON(){return{name:this.name,message:this.message,details:this.details,hint:this.hint,code:this.code}}};const Md=3,Au=n=>Math.min(1e3*2**n,3e4),Bv=[520,503],Td=["GET","HEAD","OPTIONS"];function ps(n){"@babel/helpers - typeof";return ps=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ps(n)}function zv(n,e){if(ps(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e);if(ps(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function Hv(n){var e=zv(n,"string");return ps(e)=="symbol"?e:e+""}function Gv(n,e,t){return(e=Hv(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Ru(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function Ni(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Ru(Object(t),!0).forEach(function(i){Gv(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Ru(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function Cu(n,e){return new Promise(t=>{if(e!=null&&e.aborted){t();return}const i=setTimeout(()=>{e==null||e.removeEventListener("abort",r),t()},n);function r(){clearTimeout(i),t()}e==null||e.addEventListener("abort",r)})}function Vv(n,e,t,i){return!(!i||t>=Md||!Td.includes(n)||!Bv.includes(e))}async function Ad(n,e,t,i){let r=0;for(;;){const l=Ni({},t.headers);r>0&&(l["X-Retry-Count"]=String(r));let c;try{c=await n(e,{method:t.method,headers:l,body:t.body,signal:t.signal})}catch(u){var s;if((u==null?void 0:u.name)==="AbortError"||(u==null?void 0:u.code)==="ABORT_ERR"||(u==null?void 0:u.name)==="TimeoutError"&&(!((s=t.signal)===null||s===void 0)&&s.aborted)||!Td.includes(t.method))throw u;if(i&&r<Md){const h=Au(r);r++,await Cu(h,t.signal);continue}throw u}if(Vv(t.method,c.status,r,i)){var a,o;const u=(a=(o=c.headers)===null||o===void 0?void 0:o.get("Retry-After"))!==null&&a!==void 0?a:null,h=u!==null?Math.max(0,parseInt(u,10)||0)*1e3:Au(r);await c.text(),r++,await Cu(h,t.signal);continue}return c}}var Wv=class{constructor(n){var e,t,i,r,s;this.shouldThrowOnError=!1,this.retryEnabled=!0,this.method=n.method,this.url=n.url,this.headers=new Headers(n.headers),this.schema=n.schema,this.body=n.body,this.shouldThrowOnError=(e=n.shouldThrowOnError)!==null&&e!==void 0?e:!1,this.signal=n.signal,this.isMaybeSingle=(t=n.isMaybeSingle)!==null&&t!==void 0?t:!1,this.shouldStripNulls=(i=n.shouldStripNulls)!==null&&i!==void 0?i:!1,this.urlLengthLimit=(r=n.urlLengthLimit)!==null&&r!==void 0?r:8e3,this.retryEnabled=(s=n.retry)!==null&&s!==void 0?s:!0,n.fetch?this.fetch=n.fetch:this.fetch=fetch}throwOnError(){return this.shouldThrowOnError=!0,this}stripNulls(){if(this.headers.get("Accept")==="text/csv")throw new Error("stripNulls() cannot be used with csv()");return this.shouldStripNulls=!0,this}setHeader(n,e){return this.headers=new Headers(this.headers),this.headers.set(n,e),this}retry(n){return this.retryEnabled=n,this}then(n,e){var t=this;if(this.schema===void 0||(["GET","HEAD"].includes(this.method)?this.headers.set("Accept-Profile",this.schema):this.headers.set("Content-Profile",this.schema)),this.method!=="GET"&&this.method!=="HEAD"&&this.headers.set("Content-Type","application/json"),this.shouldStripNulls){const a=this.headers.get("Accept");a==="application/vnd.pgrst.object+json"?this.headers.set("Accept","application/vnd.pgrst.object+json;nulls=stripped"):(!a||a==="application/json")&&this.headers.set("Accept","application/vnd.pgrst.array+json;nulls=stripped")}const i=this.fetch;let s=(async()=>{const a={};t.headers.forEach((l,c)=>{a[c]=l});const o=await Ad(i,t.url.toString(),{method:t.method,headers:a,body:JSON.stringify(t.body,(l,c)=>typeof c=="bigint"?c.toString():c),signal:t.signal},t.retryEnabled);return await t.processResponse(o)})();return this.shouldThrowOnError||(s=s.catch(a=>{var o;let l="",c="",u="";const h=a==null?void 0:a.cause;if(h){var d,f,g,_;const y=(d=h==null?void 0:h.message)!==null&&d!==void 0?d:"",v=(f=h==null?void 0:h.code)!==null&&f!==void 0?f:"";l=`${(g=a==null?void 0:a.name)!==null&&g!==void 0?g:"FetchError"}: ${a==null?void 0:a.message}`,l+=`

Caused by: ${(_=h==null?void 0:h.name)!==null&&_!==void 0?_:"Error"}: ${y}`,v&&(l+=` (${v})`),h!=null&&h.stack&&(l+=`
${h.stack}`)}else{var m;l=(m=a==null?void 0:a.stack)!==null&&m!==void 0?m:""}const p=this.url.toString().length;return(a==null?void 0:a.name)==="AbortError"||(a==null?void 0:a.code)==="ABORT_ERR"?(u="",c="Request was aborted (timeout or manual cancellation)",p>this.urlLengthLimit&&(c+=`. Note: Your request URL is ${p} characters, which may exceed server limits. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [many IDs])), consider using an RPC function to pass values server-side.`)):((h==null?void 0:h.name)==="HeadersOverflowError"||(h==null?void 0:h.code)==="UND_ERR_HEADERS_OVERFLOW")&&(u="",c="HTTP headers exceeded server limits (typically 16KB)",p>this.urlLengthLimit&&(c+=`. Your request URL is ${p} characters. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [200+ IDs])), consider using an RPC function instead.`)),{success:!1,error:{message:`${(o=a==null?void 0:a.name)!==null&&o!==void 0?o:"FetchError"}: ${a==null?void 0:a.message}`,details:l,hint:c,code:u},data:null,count:null,status:0,statusText:""}})),s.then(n,e)}async processResponse(n){var e=this;let t=null,i=null,r=null,s=n.status,a=n.statusText;if(n.ok){var o,l;if(e.method!=="HEAD"){var c;const f=await n.text();if(f!=="")if(e.headers.get("Accept")==="text/csv")i=f;else if(e.headers.get("Accept")&&(!((c=e.headers.get("Accept"))===null||c===void 0)&&c.includes("application/vnd.pgrst.plan+text")))i=f;else try{i=JSON.parse(f)}catch{if(t={message:f},i=null,e.shouldThrowOnError)throw new xr({message:f,details:"",hint:"",code:""})}}const h=(o=e.headers.get("Prefer"))===null||o===void 0?void 0:o.match(/count=(exact|planned|estimated)/),d=(l=n.headers.get("content-range"))===null||l===void 0?void 0:l.split("/");if(h&&d&&d.length>1&&(r=parseInt(d[1])),e.isMaybeSingle&&Array.isArray(i))if(i.length>1){if(t={code:"PGRST116",details:`Results contain ${i.length} rows, application/vnd.pgrst.object+json requires 1 row`,hint:null,message:"JSON object requested, multiple (or no) rows returned"},i=null,r=null,s=406,a="Not Acceptable",e.shouldThrowOnError){var u;throw new xr(Ni(Ni({},t),{},{hint:(u=t.hint)!==null&&u!==void 0?u:""}))}}else i.length===1?i=i[0]:i=null}else{const h=await n.text();try{t=JSON.parse(h),Array.isArray(t)&&n.status===404&&(i=[],t=null,s=200,a="OK")}catch{n.status===404&&h===""?(s=204,a="No Content"):t={message:h}}if(t&&e.shouldThrowOnError)throw new xr(t)}return{success:t===null,error:t,data:i,count:r,status:s,statusText:a}}returns(){return this}overrideTypes(){return this}},jv=class extends Wv{throwOnError(){return super.throwOnError()}select(n){let e=!1;const t=(n??"*").split("").map(i=>/\s/.test(i)&&!e?"":(i==='"'&&(e=!e),i)).join("");return this.url.searchParams.set("select",t),this.headers.append("Prefer","return=representation"),this}order(n,{ascending:e=!0,nullsFirst:t,foreignTable:i,referencedTable:r=i}={}){const s=r?`${r}.order`:"order",a=this.url.searchParams.get(s);return this.url.searchParams.set(s,`${a?`${a},`:""}${n}.${e?"asc":"desc"}${t===void 0?"":t?".nullsfirst":".nullslast"}`),this}limit(n,{foreignTable:e,referencedTable:t=e}={}){const i=typeof t>"u"?"limit":`${t}.limit`;return this.url.searchParams.set(i,`${n}`),this}range(n,e,{foreignTable:t,referencedTable:i=t}={}){const r=typeof i>"u"?"offset":`${i}.offset`,s=typeof i>"u"?"limit":`${i}.limit`;return this.url.searchParams.set(r,`${n}`),this.url.searchParams.set(s,`${e-n+1}`),this}abortSignal(n){return this.signal=n,this}single(){return this.headers.set("Accept","application/vnd.pgrst.object+json"),this}maybeSingle(){return this.isMaybeSingle=!0,this}csv(){return this.headers.set("Accept","text/csv"),this}geojson(){return this.headers.set("Accept","application/geo+json"),this}explain({analyze:n=!1,verbose:e=!1,settings:t=!1,buffers:i=!1,wal:r=!1,format:s="text"}={}){var a;const o=[n?"analyze":null,e?"verbose":null,t?"settings":null,i?"buffers":null,r?"wal":null].filter(Boolean).join("|"),l=(a=this.headers.get("Accept"))!==null&&a!==void 0?a:"application/json";return this.headers.set("Accept",`application/vnd.pgrst.plan+${s}; for="${l}"; options=${o};`),s==="json"?this:this}rollback(){return this.headers.append("Prefer","tx=rollback"),this}returns(){return this}maxAffected(n){return this.headers.append("Prefer","handling=strict"),this.headers.append("Prefer",`max-affected=${n}`),this}};const Pu=new RegExp("[,()]");var pr=class extends jv{throwOnError(){return super.throwOnError()}eq(n,e){return this.url.searchParams.append(n,`eq.${e}`),this}neq(n,e){return this.url.searchParams.append(n,`neq.${e}`),this}gt(n,e){return this.url.searchParams.append(n,`gt.${e}`),this}gte(n,e){return this.url.searchParams.append(n,`gte.${e}`),this}lt(n,e){return this.url.searchParams.append(n,`lt.${e}`),this}lte(n,e){return this.url.searchParams.append(n,`lte.${e}`),this}like(n,e){return this.url.searchParams.append(n,`like.${e}`),this}likeAllOf(n,e){return this.url.searchParams.append(n,`like(all).{${e.join(",")}}`),this}likeAnyOf(n,e){return this.url.searchParams.append(n,`like(any).{${e.join(",")}}`),this}ilike(n,e){return this.url.searchParams.append(n,`ilike.${e}`),this}ilikeAllOf(n,e){return this.url.searchParams.append(n,`ilike(all).{${e.join(",")}}`),this}ilikeAnyOf(n,e){return this.url.searchParams.append(n,`ilike(any).{${e.join(",")}}`),this}regexMatch(n,e){return this.url.searchParams.append(n,`match.${e}`),this}regexIMatch(n,e){return this.url.searchParams.append(n,`imatch.${e}`),this}is(n,e){return this.url.searchParams.append(n,`is.${e}`),this}isDistinct(n,e){return this.url.searchParams.append(n,`isdistinct.${e}`),this}in(n,e){const t=Array.from(new Set(e)).map(i=>typeof i=="string"&&Pu.test(i)?`"${i}"`:`${i}`).join(",");return this.url.searchParams.append(n,`in.(${t})`),this}notIn(n,e){const t=Array.from(new Set(e)).map(i=>typeof i=="string"&&Pu.test(i)?`"${i}"`:`${i}`).join(",");return this.url.searchParams.append(n,`not.in.(${t})`),this}contains(n,e){return typeof e=="string"?this.url.searchParams.append(n,`cs.${e}`):Array.isArray(e)?this.url.searchParams.append(n,`cs.{${e.join(",")}}`):this.url.searchParams.append(n,`cs.${JSON.stringify(e)}`),this}containedBy(n,e){return typeof e=="string"?this.url.searchParams.append(n,`cd.${e}`):Array.isArray(e)?this.url.searchParams.append(n,`cd.{${e.join(",")}}`):this.url.searchParams.append(n,`cd.${JSON.stringify(e)}`),this}rangeGt(n,e){return this.url.searchParams.append(n,`sr.${e}`),this}rangeGte(n,e){return this.url.searchParams.append(n,`nxl.${e}`),this}rangeLt(n,e){return this.url.searchParams.append(n,`sl.${e}`),this}rangeLte(n,e){return this.url.searchParams.append(n,`nxr.${e}`),this}rangeAdjacent(n,e){return this.url.searchParams.append(n,`adj.${e}`),this}overlaps(n,e){return typeof e=="string"?this.url.searchParams.append(n,`ov.${e}`):this.url.searchParams.append(n,`ov.{${e.join(",")}}`),this}textSearch(n,e,{config:t,type:i}={}){let r="";i==="plain"?r="pl":i==="phrase"?r="ph":i==="websearch"&&(r="w");const s=t===void 0?"":`(${t})`;return this.url.searchParams.append(n,`${r}fts${s}.${e}`),this}match(n){return Object.entries(n).filter(([e,t])=>t!==void 0).forEach(([e,t])=>{this.url.searchParams.append(e,`eq.${t}`)}),this}not(n,e,t){return this.url.searchParams.append(n,`not.${e}.${t}`),this}or(n,{foreignTable:e,referencedTable:t=e}={}){const i=t?`${t}.or`:"or";return this.url.searchParams.append(i,`(${n})`),this}filter(n,e,t){return this.url.searchParams.append(n,`${e}.${t}`),this}},$v=class{constructor(n,{headers:e={},schema:t,fetch:i,urlLengthLimit:r=8e3,retry:s}){this.url=n,this.headers=new Headers(e),this.schema=t,this.fetch=i,this.urlLengthLimit=r,this.retry=s}cloneRequestState(){return{url:new URL(this.url.toString()),headers:new Headers(this.headers)}}select(n,e){const{head:t=!1,count:i}=e??{},r=t?"HEAD":"GET";let s=!1;const a=(n??"*").split("").map(c=>/\s/.test(c)&&!s?"":(c==='"'&&(s=!s),c)).join(""),{url:o,headers:l}=this.cloneRequestState();return o.searchParams.set("select",a),i&&l.append("Prefer",`count=${i}`),new pr({method:r,url:o,headers:l,schema:this.schema,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}insert(n,{count:e,defaultToNull:t=!0}={}){var i;const r="POST",{url:s,headers:a}=this.cloneRequestState();if(e&&a.append("Prefer",`count=${e}`),t||a.append("Prefer","missing=default"),Array.isArray(n)){const o=n.reduce((l,c)=>l.concat(Object.keys(c)),[]);if(o.length>0){const l=[...new Set(o)].map(c=>`"${c}"`);s.searchParams.set("columns",l.join(","))}}return new pr({method:r,url:s,headers:a,schema:this.schema,body:n,fetch:(i=this.fetch)!==null&&i!==void 0?i:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}upsert(n,{onConflict:e,ignoreDuplicates:t=!1,count:i,defaultToNull:r=!0}={}){var s;const a="POST",{url:o,headers:l}=this.cloneRequestState();if(l.append("Prefer",`resolution=${t?"ignore":"merge"}-duplicates`),e!==void 0&&o.searchParams.set("on_conflict",e),i&&l.append("Prefer",`count=${i}`),r||l.append("Prefer","missing=default"),Array.isArray(n)){const c=n.reduce((u,h)=>u.concat(Object.keys(h)),[]);if(c.length>0){const u=[...new Set(c)].map(h=>`"${h}"`);o.searchParams.set("columns",u.join(","))}}return new pr({method:a,url:o,headers:l,schema:this.schema,body:n,fetch:(s=this.fetch)!==null&&s!==void 0?s:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}update(n,{count:e}={}){var t;const i="PATCH",{url:r,headers:s}=this.cloneRequestState();return e&&s.append("Prefer",`count=${e}`),new pr({method:i,url:r,headers:s,schema:this.schema,body:n,fetch:(t=this.fetch)!==null&&t!==void 0?t:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}delete({count:n}={}){var e;const t="DELETE",{url:i,headers:r}=this.cloneRequestState();return n&&r.append("Prefer",`count=${n}`),new pr({method:t,url:i,headers:r,schema:this.schema,fetch:(e=this.fetch)!==null&&e!==void 0?e:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}};function qv(n,e){try{const a=JSON.parse(n);if(a&&typeof a=="object"&&!Array.isArray(a)){var t,i,r,s;return new xr({message:String((t=a.message)!==null&&t!==void 0?t:n),details:(i=a.details)!==null&&i!==void 0?i:"",hint:(r=a.hint)!==null&&r!==void 0?r:"",code:(s=a.code)!==null&&s!==void 0?s:""})}}catch{}return new xr({message:n||e,details:"",hint:"",code:""})}function Iu(n,e,t){var i;const r=n;return{success:!1,error:new xr({message:`${(i=r==null?void 0:r.name)!==null&&i!==void 0?i:"FetchError"}: ${r==null?void 0:r.message}`,details:"",hint:"",code:""}),data:null,count:null,status:e,statusText:t}}var Xv=class Rd{constructor(e,{headers:t={},schema:i,fetch:r,timeout:s,urlLengthLimit:a=8e3,retry:o}={}){this.url=e,this.headers=new Headers(t),this.schemaName=i,this.urlLengthLimit=a;const l=r??globalThis.fetch;s!==void 0&&s>0?this.fetch=(c,u)=>{const h=new AbortController,d=setTimeout(()=>h.abort(),s),f=u==null?void 0:u.signal;if(f){if(f.aborted)return clearTimeout(d),l(c,u);const g=()=>{clearTimeout(d),h.abort()};return f.addEventListener("abort",g,{once:!0}),l(c,Ni(Ni({},u),{},{signal:h.signal})).finally(()=>{clearTimeout(d),f.removeEventListener("abort",g)})}return l(c,Ni(Ni({},u),{},{signal:h.signal})).finally(()=>clearTimeout(d))}:this.fetch=l,this.retry=o}from(e){if(!e||typeof e!="string"||e.trim()==="")throw new Error("Invalid relation name: relation must be a non-empty string.");return new $v(new URL(`${this.url}/${e}`),{headers:new Headers(this.headers),schema:this.schemaName,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}schema(e){return new Rd(this.url,{headers:this.headers,schema:e,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}async getOpenApiSpec(){var e=this,t;const i=new Headers(e.headers);i.set("Accept","application/openapi+json"),e.schemaName&&i.set("Accept-Profile",e.schemaName);const r={};i.forEach((c,u)=>{r[u]=c});const s=(t=e.fetch)!==null&&t!==void 0?t:globalThis.fetch;let a;try{var o;a=await Ad(s,`${e.url}/`,{method:"GET",headers:r},(o=e.retry)!==null&&o!==void 0?o:!0)}catch(c){return Iu(c,0,"")}let l;try{l=await a.text()}catch(c){return Iu(c,a.status,a.statusText)}if(a.ok)try{return{success:!0,error:null,data:JSON.parse(l),count:null,status:a.status,statusText:a.statusText}}catch{}return{success:!1,error:qv(l,a.statusText),data:null,count:null,status:a.status,statusText:a.statusText}}rpc(e,t={},{head:i=!1,get:r=!1,count:s}={}){var a;let o;const l=new URL(`${this.url}/rpc/${e}`);let c;const u=f=>f!==null&&typeof f=="object"&&(!Array.isArray(f)||f.some(u)),h=i&&Object.values(t).some(u);h?(o="POST",c=t):i||r?(o=i?"HEAD":"GET",Object.entries(t).filter(([f,g])=>g!==void 0).map(([f,g])=>[f,Array.isArray(g)?`{${g.join(",")}}`:`${g}`]).forEach(([f,g])=>{l.searchParams.append(f,g)})):(o="POST",c=t);const d=new Headers(this.headers);return h?d.set("Prefer",s?`count=${s},return=minimal`:"return=minimal"):s&&d.set("Prefer",`count=${s}`),new pr({method:o,url:l,headers:d,schema:this.schemaName,body:c,fetch:(a=this.fetch)!==null&&a!==void 0?a:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}};class Kv{constructor(){}static detectEnvironment(){var e;if(typeof WebSocket<"u")return{type:"native",wsConstructor:WebSocket};const t=globalThis;if(typeof globalThis<"u"&&typeof t.WebSocket<"u")return{type:"native",wsConstructor:t.WebSocket};const i=typeof global<"u"?global:void 0;if(i&&typeof i.WebSocket<"u")return{type:"native",wsConstructor:i.WebSocket};if(typeof globalThis<"u"&&typeof t.WebSocketPair<"u"&&typeof globalThis.WebSocket>"u")return{type:"cloudflare",error:"Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.",workaround:"Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime."};if(typeof globalThis<"u"&&t.EdgeRuntime||typeof navigator<"u"&&(!((e=navigator.userAgent)===null||e===void 0)&&e.includes("Vercel-Edge")))return{type:"unsupported",error:"Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.",workaround:"Use serverless functions or a different deployment target for WebSocket functionality."};const r=globalThis.process;if(r){const s=r.versions;if(s&&s.node)return{type:"unsupported",error:"Node.js detected but native WebSocket not found.",workaround:"Ensure you are running Node.js 22+ or provide a WebSocket implementation via the transport option."}}return{type:"unsupported",error:"Unknown JavaScript runtime without WebSocket support.",workaround:"Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation."}}static getWebSocketConstructor(){const e=this.detectEnvironment();if(e.wsConstructor)return e.wsConstructor;let t=e.error||"WebSocket not supported in this environment.";throw e.workaround&&(t+=`

Suggested solution: ${e.workaround}`),new Error(t)}static isWebSocketSupported(){try{return this.detectEnvironment().type==="native"}catch{return!1}}}const Yv="2.118.0",Jv=`realtime-js/${Yv}`,Zv="1.0.0",Cd="2.0.0",Qv=Cd,ey=1e4,ty=15e3,ny=1e4,iy=100,hi={closed:"closed",errored:"errored",joined:"joined",joining:"joining",leaving:"leaving"},Pd={close:"phx_close",error:"phx_error",join:"phx_join",leave:"phx_leave",access_token:"access_token"},Cl={connecting:"connecting",closing:"closing",closed:"closed"};class ry{constructor(e){this.HEADER_LENGTH=1,this.USER_BROADCAST_PUSH_META_LENGTH=6,this.KINDS={userBroadcastPush:3,userBroadcast:4},this.BINARY_ENCODING=0,this.JSON_ENCODING=1,this.BROADCAST_EVENT="broadcast",this.allowedMetadataKeys=[],this.allowedMetadataKeys=e??[]}encode(e,t){if(e.event===this.BROADCAST_EVENT&&!(e.payload instanceof ArrayBuffer)&&typeof e.payload.event=="string")return t(this._binaryEncodeUserBroadcastPush(e));let i=[e.join_ref,e.ref,e.topic,e.event,e.payload];return t(JSON.stringify(i))}_binaryEncodeUserBroadcastPush(e){var t;return this._isArrayBuffer((t=e.payload)===null||t===void 0?void 0:t.payload)?this._encodeBinaryUserBroadcastPush(e):this._encodeJsonUserBroadcastPush(e)}_encodeBinaryUserBroadcastPush(e){var t,i;const r=(i=(t=e.payload)===null||t===void 0?void 0:t.payload)!==null&&i!==void 0?i:new ArrayBuffer(0);return this._encodeUserBroadcastPush(e,this.BINARY_ENCODING,r)}_encodeJsonUserBroadcastPush(e){var t,i;const r=(i=(t=e.payload)===null||t===void 0?void 0:t.payload)!==null&&i!==void 0?i:{},a=new TextEncoder().encode(JSON.stringify(r)).buffer;return this._encodeUserBroadcastPush(e,this.JSON_ENCODING,a)}_encodeUserBroadcastPush(e,t,i){var r,s;const a=new TextEncoder,o=a.encode(e.topic),l=a.encode((r=e.ref)!==null&&r!==void 0?r:""),c=a.encode((s=e.join_ref)!==null&&s!==void 0?s:""),u=a.encode(e.payload.event),h=this.allowedMetadataKeys?this._pick(e.payload,this.allowedMetadataKeys):{},d=a.encode(Object.keys(h).length===0?"":JSON.stringify(h));if(c.length>255)throw new Error(`joinRef length ${c.length} exceeds maximum of 255`);if(l.length>255)throw new Error(`ref length ${l.length} exceeds maximum of 255`);if(o.length>255)throw new Error(`topic length ${o.length} exceeds maximum of 255`);if(u.length>255)throw new Error(`userEvent length ${u.length} exceeds maximum of 255`);if(d.length>255)throw new Error(`metadata length ${d.length} exceeds maximum of 255`);const f=this.USER_BROADCAST_PUSH_META_LENGTH+c.length+l.length+o.length+u.length+d.length,g=new ArrayBuffer(this.HEADER_LENGTH+f),_=new DataView(g),m=new Uint8Array(g);let p=0;_.setUint8(p++,this.KINDS.userBroadcastPush),_.setUint8(p++,c.length),_.setUint8(p++,l.length),_.setUint8(p++,o.length),_.setUint8(p++,u.length),_.setUint8(p++,d.length),_.setUint8(p++,t),m.set(c,p),p+=c.length,m.set(l,p),p+=l.length,m.set(o,p),p+=o.length,m.set(u,p),p+=u.length,m.set(d,p),p+=d.length;var y=new Uint8Array(g.byteLength+i.byteLength);return y.set(new Uint8Array(g),0),y.set(new Uint8Array(i),g.byteLength),y.buffer}decode(e,t){if(this._isArrayBuffer(e)){let i=this._binaryDecode(e);return t(i)}if(typeof e=="string"){const i=JSON.parse(e),[r,s,a,o,l]=i;return t({join_ref:r,ref:s,topic:a,event:o,payload:l})}return t({})}_binaryDecode(e){const t=new DataView(e),i=t.getUint8(0),r=new TextDecoder;switch(i){case this.KINDS.userBroadcast:return this._decodeUserBroadcast(e,t,r)}}_decodeUserBroadcast(e,t,i){const r=t.getUint8(1),s=t.getUint8(2),a=t.getUint8(3),o=t.getUint8(4);let l=this.HEADER_LENGTH+4;const c=i.decode(e.slice(l,l+r));l=l+r;const u=i.decode(e.slice(l,l+s));l=l+s;const h=i.decode(e.slice(l,l+a));l=l+a;const d=e.slice(l,e.byteLength),f=o===this.JSON_ENCODING?JSON.parse(i.decode(d)):d,g={type:this.BROADCAST_EVENT,event:u,payload:f};return a>0&&(g.meta=JSON.parse(h)),{join_ref:null,ref:null,topic:c,event:this.BROADCAST_EVENT,payload:g}}_isArrayBuffer(e){var t;return e instanceof ArrayBuffer||((t=e==null?void 0:e.constructor)===null||t===void 0?void 0:t.name)==="ArrayBuffer"}_pick(e,t){return!e||typeof e!="object"?{}:Object.fromEntries(Object.entries(e).filter(([i])=>t.includes(i)))}}var ft;(function(n){n.abstime="abstime",n.bool="bool",n.date="date",n.daterange="daterange",n.float4="float4",n.float8="float8",n.int2="int2",n.int4="int4",n.int4range="int4range",n.int8="int8",n.int8range="int8range",n.json="json",n.jsonb="jsonb",n.money="money",n.numeric="numeric",n.oid="oid",n.reltime="reltime",n.text="text",n.time="time",n.timestamp="timestamp",n.timestamptz="timestamptz",n.timetz="timetz",n.tsrange="tsrange",n.tstzrange="tstzrange"})(ft||(ft={}));const Lu=(n,e,t={})=>{var i;const r=(i=t.skipTypes)!==null&&i!==void 0?i:[];return e?Object.keys(e).reduce((s,a)=>(s[a]=sy(a,n,e,r),s),{}):{}},sy=(n,e,t,i)=>{const r=e.find(o=>o.name===n),s=r==null?void 0:r.type,a=t[n];return s&&!i.includes(s)?Id(s,a):Pl(a)},Id=(n,e)=>{if(n.charAt(0)==="_"){const t=n.slice(1,n.length);return cy(e,t)}switch(n){case ft.bool:return ay(e);case ft.float4:case ft.float8:case ft.int2:case ft.int4:case ft.int8:case ft.numeric:case ft.oid:return oy(e);case ft.json:case ft.jsonb:return ly(e);case ft.timestamp:return uy(e);case ft.abstime:case ft.date:case ft.daterange:case ft.int4range:case ft.int8range:case ft.money:case ft.reltime:case ft.text:case ft.time:case ft.timestamptz:case ft.timetz:case ft.tsrange:case ft.tstzrange:return Pl(e);default:return Pl(e)}},Pl=n=>n,ay=n=>{switch(n){case"t":return!0;case"f":return!1;default:return n}},oy=n=>{if(typeof n=="string"){const e=parseFloat(n);if(!Number.isNaN(e))return e}return n},ly=n=>{if(typeof n=="string")try{return JSON.parse(n)}catch{return n}return n},cy=(n,e)=>{if(typeof n!="string")return n;const t=n.length-1,i=n[t];if(n[0]==="{"&&i==="}"){let s;const a=n.slice(1,t);try{s=JSON.parse("["+a+"]")}catch{s=a?a.split(","):[]}return s.map(o=>Id(e,o))}return n},uy=n=>typeof n=="string"?n.replace(" ","T"):n,Ld=n=>{const e=new URL(n);return e.protocol=e.protocol.replace(/^ws/i,"http"),e.pathname=e.pathname.replace(/\/+$/,"").replace(/\/socket\/websocket$/i,"").replace(/\/socket$/i,"").replace(/\/websocket$/i,""),e.pathname===""||e.pathname==="/"?e.pathname="/api/broadcast":e.pathname=e.pathname+"/api/broadcast",e.href};var Sr=n=>typeof n=="function"?n:function(){return n},hy=typeof self<"u"?self:null,mr=typeof window<"u"?window:null,Mn=hy||mr||globalThis,dy="2.0.0",fy=1e4,py=1e3,my=100,An={connecting:0,open:1,closing:2,closed:3},Wt={closed:"closed",errored:"errored",joined:"joined",joining:"joining",leaving:"leaving"},Gn={close:"phx_close",error:"phx_error",join:"phx_join",reply:"phx_reply",leave:"phx_leave"},Il={longpoll:"longpoll",websocket:"websocket"},gy={complete:4},Ll="base64url.bearer.phx.",Js=class{constructor(n,e,t,i){this.channel=n,this.event=e,this.payload=t||function(){return{}},this.receivedResp=null,this.timeout=i,this.timeoutTimer=null,this.recHooks=[],this.sent=!1,this.ref=void 0}resend(n){this.timeout=n,this.reset(),this.send()}send(){this.hasReceived("timeout")||(this.startTimeout(),this.sent=!0,this.channel.socket.push({topic:this.channel.topic,event:this.event,payload:this.payload(),ref:this.ref,join_ref:this.channel.joinRef()}))}receive(n,e){return this.hasReceived(n)&&e(this.receivedResp.response),this.recHooks.push({status:n,callback:e}),this}reset(){this.cancelRefEvent(),this.ref=null,this.refEvent=null,this.receivedResp=null,this.sent=!1}destroy(){this.cancelRefEvent(),this.cancelTimeout()}matchReceive({status:n,response:e,_ref:t}){this.recHooks.filter(i=>i.status===n).forEach(i=>i.callback(e))}cancelRefEvent(){this.refEvent&&this.channel.off(this.refEvent)}cancelTimeout(){clearTimeout(this.timeoutTimer),this.timeoutTimer=null}startTimeout(){this.timeoutTimer&&this.cancelTimeout(),this.ref=this.channel.socket.makeRef(),this.refEvent=this.channel.replyEventName(this.ref),this.channel.on(this.refEvent,n=>{this.cancelRefEvent(),this.cancelTimeout(),this.receivedResp=n,this.matchReceive(n)}),this.timeoutTimer=setTimeout(()=>{this.trigger("timeout",{})},this.timeout)}hasReceived(n){return this.receivedResp&&this.receivedResp.status===n}trigger(n,e){this.channel.trigger(this.refEvent,{status:n,response:e})}},Dd=class{constructor(n,e){this.callback=n,this.timerCalc=e,this.timer=void 0,this.tries=0}reset(){this.tries=0,clearTimeout(this.timer)}scheduleTimeout(){clearTimeout(this.timer),this.timer=setTimeout(()=>{this.tries=this.tries+1,this.callback()},this.timerCalc(this.tries+1))}},_y=class{constructor(n,e,t){this.state=Wt.closed,this.topic=n,this.params=Sr(e||{}),this.socket=t,this.bindings=[],this.bindingRef=0,this.timeout=this.socket.timeout,this.joinedOnce=!1,this.joinPush=new Js(this,Gn.join,this.params,this.timeout),this.pushBuffer=[],this.stateChangeRefs=[],this.rejoinTimer=new Dd(()=>{this.socket.isConnected()&&this.rejoin()},this.socket.rejoinAfterMs),this.stateChangeRefs.push(this.socket.onError(()=>this.rejoinTimer.reset())),this.stateChangeRefs.push(this.socket.onOpen(()=>{this.rejoinTimer.reset(),this.isErrored()&&this.rejoin()})),this.joinPush.receive("ok",()=>{this.state=Wt.joined,this.rejoinTimer.reset(),this.pushBuffer.forEach(i=>i.send()),this.pushBuffer=[]}),this.joinPush.receive("error",i=>{this.state=Wt.errored,this.socket.hasLogger()&&this.socket.log("channel",`error ${this.topic}`,i),this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.onClose(()=>{this.rejoinTimer.reset(),this.socket.hasLogger()&&this.socket.log("channel",`close ${this.topic}`),this.state=Wt.closed,this.socket.remove(this)}),this.onError(i=>{this.socket.hasLogger()&&this.socket.log("channel",`error ${this.topic}`,i),this.isJoining()&&this.joinPush.reset(),this.state=Wt.errored,this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.joinPush.receive("timeout",()=>{this.socket.hasLogger()&&this.socket.log("channel",`timeout ${this.topic}`,this.joinPush.timeout),new Js(this,Gn.leave,Sr({}),this.timeout).send(),this.state=Wt.errored,this.joinPush.reset(),this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.on(Gn.reply,(i,r)=>{this.trigger(this.replyEventName(r),i)})}join(n=this.timeout){if(this.joinedOnce)throw new Error("tried to join multiple times. 'join' can only be called a single time per channel instance");return this.timeout=n,this.joinedOnce=!0,this.rejoin(),this.joinPush}teardown(){this.pushBuffer.forEach(n=>n.destroy()),this.pushBuffer=[],this.rejoinTimer.reset(),this.joinPush.destroy(),this.state=Wt.closed,this.bindings=[]}onClose(n){this.on(Gn.close,n)}onError(n){return this.on(Gn.error,e=>n(e))}on(n,e){let t=this.bindingRef++;return this.bindings.push({event:n,ref:t,callback:e}),t}off(n,e){this.bindings=this.bindings.filter(t=>!(t.event===n&&(typeof e>"u"||e===t.ref)))}canPush(){return this.socket.isConnected()&&this.isJoined()}push(n,e,t=this.timeout){if(e=e||{},!this.joinedOnce)throw new Error(`tried to push '${n}' to '${this.topic}' before joining. Use channel.join() before pushing events`);let i=new Js(this,n,function(){return e},t);return this.canPush()?i.send():(i.startTimeout(),this.pushBuffer.push(i)),i}leave(n=this.timeout){this.rejoinTimer.reset(),this.joinPush.cancelTimeout(),this.state=Wt.leaving;let e=()=>{this.socket.hasLogger()&&this.socket.log("channel",`leave ${this.topic}`),this.trigger(Gn.close,"leave")},t=new Js(this,Gn.leave,Sr({}),n);return t.receive("ok",()=>e()).receive("timeout",()=>e()),t.send(),this.canPush()||t.trigger("ok",{}),t}onMessage(n,e,t){return e}filterBindings(n,e,t){return!0}isMember(n,e,t,i){return this.topic!==n?!1:i&&i!==this.joinRef()?(this.socket.hasLogger()&&this.socket.log("channel","dropping outdated message",{topic:n,event:e,payload:t,joinRef:i}),!1):!0}joinRef(){return this.joinPush.ref}rejoin(n=this.timeout){this.isLeaving()||(this.socket.leaveOpenTopic(this.topic),this.state=Wt.joining,this.joinPush.resend(n))}trigger(n,e,t,i){let r=this.onMessage(n,e,t,i);if(e&&!r)throw new Error("channel onMessage callbacks must return the payload, modified or unmodified");let s=this.bindings.filter(a=>a.event===n&&this.filterBindings(a,e,t));for(let a=0;a<s.length;a++)s[a].callback(r,t,i||this.joinRef())}replyEventName(n){return`chan_reply_${n}`}isClosed(){return this.state===Wt.closed}isErrored(){return this.state===Wt.errored}isJoined(){return this.state===Wt.joined}isJoining(){return this.state===Wt.joining}isLeaving(){return this.state===Wt.leaving}},Ma=class{static request(n,e,t,i,r,s,a){if(Mn.XDomainRequest){let o=new Mn.XDomainRequest;return this.xdomainRequest(o,n,e,i,r,s,a)}else if(Mn.XMLHttpRequest){let o=new Mn.XMLHttpRequest;return this.xhrRequest(o,n,e,t,i,r,s,a)}else{if(Mn.fetch&&Mn.AbortController)return this.fetchRequest(n,e,t,i,r,s,a);throw new Error("No suitable XMLHttpRequest implementation found")}}static fetchRequest(n,e,t,i,r,s,a){let o={method:n,headers:t,body:i},l=null;return r&&(l=new AbortController,setTimeout(()=>l.abort(),r),o.signal=l.signal),Mn.fetch(e,o).then(c=>c.text()).then(c=>this.parseJSON(c)).then(c=>a&&a(c)).catch(c=>{c.name==="AbortError"&&s?s():a&&a(null)}),l}static xdomainRequest(n,e,t,i,r,s,a){return n.timeout=r,n.open(e,t),n.onload=()=>{let o=this.parseJSON(n.responseText);a&&a(o)},s&&(n.ontimeout=s),n.onprogress=()=>{},n.send(i),n}static xhrRequest(n,e,t,i,r,s,a,o){n.open(e,t,!0),n.timeout=s;for(let[l,c]of Object.entries(i))n.setRequestHeader(l,c);return n.onerror=()=>o&&o(null),n.onreadystatechange=()=>{if(n.readyState===gy.complete&&o){let l=this.parseJSON(n.responseText);o(l)}},a&&(n.ontimeout=a),n.send(r),n}static parseJSON(n){if(!n||n==="")return null;try{return JSON.parse(n)}catch{return console&&console.log("failed to parse JSON response",n),null}}static serialize(n,e){let t=[];for(var i in n){if(!Object.prototype.hasOwnProperty.call(n,i))continue;let r=e?`${e}[${i}]`:i,s=n[i];typeof s=="object"?t.push(this.serialize(s,r)):t.push(encodeURIComponent(r)+"="+encodeURIComponent(s))}return t.join("&")}static appendParams(n,e){if(Object.keys(e).length===0)return n;let t=n.match(/\?/)?"&":"?";return`${n}${t}${this.serialize(e)}`}},vy=n=>{let e="",t=new Uint8Array(n),i=t.byteLength;for(let r=0;r<i;r++)e+=String.fromCharCode(t[r]);return btoa(e)},ar=class{constructor(n,e){e&&e.length===2&&e[1].startsWith(Ll)&&(this.authToken=atob(e[1].slice(Ll.length))),this.endPoint=null,this.token=null,this.skipHeartbeat=!0,this.reqs=new Set,this.awaitingBatchAck=!1,this.currentBatch=null,this.currentBatchTimer=null,this.batchBuffer=[],this.onopen=function(){},this.onerror=function(){},this.onmessage=function(){},this.onclose=function(){},this.pollEndpoint=this.normalizeEndpoint(n),this.readyState=An.connecting,setTimeout(()=>this.poll(),0)}normalizeEndpoint(n){return n.replace("ws://","http://").replace("wss://","https://").replace(new RegExp("(.*)/"+Il.websocket),"$1/"+Il.longpoll)}endpointURL(){return Ma.appendParams(this.pollEndpoint,{token:this.token})}closeAndRetry(n,e,t){this.close(n,e,t),this.readyState=An.connecting}ontimeout(){this.onerror("timeout"),this.closeAndRetry(1005,"timeout",!1)}isActive(){return this.readyState===An.open||this.readyState===An.connecting}poll(){const n={Accept:"application/json"};this.authToken&&(n["X-Phoenix-AuthToken"]=this.authToken),this.ajax("GET",n,null,()=>this.ontimeout(),e=>{if(e){var{status:t,token:i,messages:r}=e;if(t===410&&this.token!==null){this.onerror(410),this.closeAndRetry(3410,"session_gone",!1);return}this.token=i}else t=0;switch(t){case 200:r.forEach(s=>{setTimeout(()=>this.onmessage({data:s}),0)}),this.poll();break;case 204:this.poll();break;case 410:this.readyState=An.open,this.onopen({}),this.poll();break;case 403:this.onerror(403),this.close(1008,"forbidden",!1);break;case 0:case 500:this.onerror(500),this.closeAndRetry(1011,"internal server error",500);break;default:throw new Error(`unhandled poll status ${t}`)}})}send(n){typeof n!="string"&&(n=vy(n)),this.currentBatch?this.currentBatch.push(n):this.awaitingBatchAck?this.batchBuffer.push(n):(this.currentBatch=[n],this.currentBatchTimer=setTimeout(()=>{this.batchSend(this.currentBatch),this.currentBatch=null},0))}batchSend(n,e=0){this.awaitingBatchAck=!0;const t=e+my,i=n.slice(e,t);this.ajax("POST",{"Content-Type":"application/x-ndjson"},i.join(`
`),()=>this.onerror("timeout"),r=>{!r||r.status!==200?(this.awaitingBatchAck=!1,this.onerror(r&&r.status),this.closeAndRetry(1011,"internal server error",!1)):t<n.length?this.batchSend(n,t):this.batchBuffer.length>0?(this.batchSend(this.batchBuffer),this.batchBuffer=[]):this.awaitingBatchAck=!1})}close(n,e,t){for(let r of this.reqs)r.abort();this.readyState=An.closed;let i=Object.assign({code:1e3,reason:void 0,wasClean:!0},{code:n,reason:e,wasClean:t});this.batchBuffer=[],clearTimeout(this.currentBatchTimer),this.currentBatchTimer=null,typeof CloseEvent<"u"?this.onclose(new CloseEvent("close",i)):this.onclose(i)}ajax(n,e,t,i,r){let s,a=()=>{this.reqs.delete(s),i()};s=Ma.request(n,this.endpointURL(),e,t,this.timeout,a,o=>{this.reqs.delete(s),this.isActive()&&r(o)}),this.reqs.add(s)}},yy=class as{constructor(e,t={}){let i=t.events||{state:"presence_state",diff:"presence_diff"};this.state=Object.create(null),this.pendingDiffs=[],this.channel=e,this.joinRef=null,this.caller={onJoin:function(){},onLeave:function(){},onSync:function(){}},this.channel.on(i.state,r=>{let{onJoin:s,onLeave:a,onSync:o}=this.caller;this.joinRef=this.channel.joinRef(),this.state=as.syncState(this.state,r,s,a),this.pendingDiffs.forEach(l=>{this.state=as.syncDiff(this.state,l,s,a)}),this.pendingDiffs=[],o()}),this.channel.on(i.diff,r=>{let{onJoin:s,onLeave:a,onSync:o}=this.caller;this.inPendingSyncState()?this.pendingDiffs.push(r):(this.state=as.syncDiff(this.state,r,s,a),o())})}onJoin(e){this.caller.onJoin=e}onLeave(e){this.caller.onLeave=e}onSync(e){this.caller.onSync=e}list(e){return as.list(this.state,e)}inPendingSyncState(){return!this.joinRef||this.joinRef!==this.channel.joinRef()}static syncState(e,t,i,r){let s=this.toNullProtoObj(this.clone(e));t=this.toNullProtoObj(t);let a=Object.create(null),o=Object.create(null);return this.map(s,(l,c)=>{t[l]||(o[l]=c)}),this.map(t,(l,c)=>{let u=s[l];if(u){let h=c.metas.map(_=>_.phx_ref),d=u.metas.map(_=>_.phx_ref),f=c.metas.filter(_=>d.indexOf(_.phx_ref)<0),g=u.metas.filter(_=>h.indexOf(_.phx_ref)<0);f.length>0&&(a[l]=c,a[l].metas=f),g.length>0&&(o[l]=this.clone(u),o[l].metas=g)}else a[l]=c}),this.syncDiff(s,{joins:a,leaves:o},i,r)}static syncDiff(e,t,i,r){e=this.toNullProtoObj(e);let{joins:s,leaves:a}=this.clone(t);return i||(i=function(){}),r||(r=function(){}),this.map(s,(o,l)=>{let c=e[o];if(e[o]=this.clone(l),c){let u=e[o].metas.map(d=>d.phx_ref),h=c.metas.filter(d=>u.indexOf(d.phx_ref)<0);e[o].metas.unshift(...h)}i(o,c,l)}),this.map(a,(o,l)=>{let c=e[o];if(!c)return;let u=l.metas.map(h=>h.phx_ref);c.metas=c.metas.filter(h=>u.indexOf(h.phx_ref)<0),r(o,c,l),c.metas.length===0&&delete e[o]}),e}static list(e,t){return t||(t=function(i,r){return r}),this.map(e,(i,r)=>t(i,r))}static map(e,t){return Object.getOwnPropertyNames(e).map(i=>t(i,e[i]))}static toNullProtoObj(e){if(Object.getPrototypeOf(e)===null)return e;let t=Object.create(null);return Object.getOwnPropertyNames(e).forEach(i=>{t[i]=e[i]}),t}static clone(e){return JSON.parse(JSON.stringify(e))}},Zs={HEADER_LENGTH:1,META_LENGTH:4,KINDS:{push:0,reply:1,broadcast:2},encode(n,e){if(n.payload.constructor===ArrayBuffer)return e(this.binaryEncode(n));{let t=[n.join_ref,n.ref,n.topic,n.event,n.payload];return e(JSON.stringify(t))}},decode(n,e){if(n.constructor===ArrayBuffer)return e(this.binaryDecode(n));{let[t,i,r,s,a]=JSON.parse(n);return e({join_ref:t,ref:i,topic:r,event:s,payload:a})}},binaryEncode(n){let{join_ref:e,ref:t,event:i,topic:r,payload:s}=n,a=new TextEncoder,o=a.encode(e),l=a.encode(t),c=a.encode(r),u=a.encode(i);this.assertFieldSize(o.byteLength,"join_ref"),this.assertFieldSize(l.byteLength,"ref"),this.assertFieldSize(c.byteLength,"topic"),this.assertFieldSize(u.byteLength,"event");let h=this.META_LENGTH+o.byteLength+l.byteLength+c.byteLength+u.byteLength,d=new ArrayBuffer(this.HEADER_LENGTH+h),f=new Uint8Array(d),g=new DataView(d),_=0;g.setUint8(_++,this.KINDS.push),g.setUint8(_++,o.byteLength),g.setUint8(_++,l.byteLength),g.setUint8(_++,c.byteLength),g.setUint8(_++,u.byteLength),f.set(o,_),_+=o.byteLength,f.set(l,_),_+=l.byteLength,f.set(c,_),_+=c.byteLength,f.set(u,_),_+=u.byteLength;var m=new Uint8Array(d.byteLength+s.byteLength);return m.set(f,0),m.set(new Uint8Array(s),d.byteLength),m.buffer},assertFieldSize(n,e){if(n>255)throw new Error(`unable to convert ${e} to binary: must be less than or equal to 255 bytes, but is ${n} bytes`)},binaryDecode(n){let e=new DataView(n),t=e.getUint8(0),i=new TextDecoder;switch(t){case this.KINDS.push:return this.decodePush(n,e,i);case this.KINDS.reply:return this.decodeReply(n,e,i);case this.KINDS.broadcast:return this.decodeBroadcast(n,e,i)}},decodePush(n,e,t){let i=e.getUint8(1),r=e.getUint8(2),s=e.getUint8(3),a=this.HEADER_LENGTH+this.META_LENGTH-1,o=t.decode(n.slice(a,a+i));a=a+i;let l=t.decode(n.slice(a,a+r));a=a+r;let c=t.decode(n.slice(a,a+s));a=a+s;let u=n.slice(a,n.byteLength);return{join_ref:o,ref:null,topic:l,event:c,payload:u}},decodeReply(n,e,t){let i=e.getUint8(1),r=e.getUint8(2),s=e.getUint8(3),a=e.getUint8(4),o=this.HEADER_LENGTH+this.META_LENGTH,l=t.decode(n.slice(o,o+i));o=o+i;let c=t.decode(n.slice(o,o+r));o=o+r;let u=t.decode(n.slice(o,o+s));o=o+s;let h=t.decode(n.slice(o,o+a));o=o+a;let d=n.slice(o,n.byteLength),f={status:h,response:d};return{join_ref:l,ref:c,topic:u,event:Gn.reply,payload:f}},decodeBroadcast(n,e,t){let i=e.getUint8(1),r=e.getUint8(2),s=this.HEADER_LENGTH+2,a=t.decode(n.slice(s,s+i));s=s+i;let o=t.decode(n.slice(s,s+r));s=s+r;let l=n.slice(s,n.byteLength);return{join_ref:null,ref:null,topic:a,event:o,payload:l}}},wy=class{constructor(n,e={}){this.stateChangeCallbacks={open:[],close:[],error:[],message:[]},this.channels=[],this.sendBuffer=[],this.ref=0,this.fallbackRef=null,this.timeout=e.timeout||fy,this.transport=e.transport||Mn.WebSocket||ar,this.conn=void 0,this.primaryPassedHealthCheck=!1,this.longPollFallbackMs=e.longPollFallbackMs,this.fallbackTimer=null;let t=null;try{t=Mn&&Mn.sessionStorage}catch{}this.sessionStore=e.sessionStorage||t,this.establishedConnections=0,this.defaultEncoder=Zs.encode.bind(Zs),this.defaultDecoder=Zs.decode.bind(Zs),this.closeWasClean=!0,this.disconnecting=!1,this.binaryType=e.binaryType||"arraybuffer",this.connectClock=1,this.pageHidden=!1,this.encode=void 0,this.decode=void 0,this.transport!==ar?(this.encode=e.encode||this.defaultEncoder,this.decode=e.decode||this.defaultDecoder):(this.encode=this.defaultEncoder,this.decode=this.defaultDecoder);let i=null;mr&&mr.addEventListener&&(mr.addEventListener("pagehide",r=>{this.conn&&(this.disconnect(),i=this.connectClock)}),mr.addEventListener("pageshow",r=>{i===this.connectClock&&(i=null,this.connect())}),mr.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"?this.pageHidden=!0:(this.pageHidden=!1,!this.isConnected()&&!this.closeWasClean&&this.teardown(()=>this.connect()))})),this.heartbeatIntervalMs=e.heartbeatIntervalMs||3e4,this.autoSendHeartbeat=e.autoSendHeartbeat??!0,this.heartbeatCallback=e.heartbeatCallback??(()=>{}),this.rejoinAfterMs=r=>e.rejoinAfterMs?e.rejoinAfterMs(r):[1e3,2e3,5e3][r-1]||1e4,this.reconnectAfterMs=r=>e.reconnectAfterMs?e.reconnectAfterMs(r):[10,50,100,150,200,250,500,1e3,2e3][r-1]||5e3,this.logger=e.logger||null,!this.logger&&e.debug&&(this.logger=(r,s,a)=>{console.log(`${r}: ${s}`,a)}),this.longpollerTimeout=e.longpollerTimeout||2e4,this.params=Sr(e.params||{}),this.endPoint=`${n}/${Il.websocket}`,this.vsn=e.vsn||dy,this.heartbeatTimeoutTimer=null,this.heartbeatTimer=null,this.heartbeatSentAt=null,this.pendingHeartbeatRef=null,this.reconnectTimer=new Dd(()=>{if(this.pageHidden){this.log("Not reconnecting as page is hidden!"),this.teardown();return}this.teardown(async()=>{e.beforeReconnect&&await e.beforeReconnect(),this.connect()})},this.reconnectAfterMs),this.authToken=e.authToken&&Sr(e.authToken)}getLongPollTransport(){return ar}replaceTransport(n){this.connectClock++,this.closeWasClean=!0,clearTimeout(this.fallbackTimer),this.reconnectTimer.reset(),this.conn&&(this.conn.close(),this.conn=null),this.transport=n}protocol(){return location.protocol.match(/^https/)?"wss":"ws"}endPointURL(){let n=Ma.appendParams(Ma.appendParams(this.endPoint,this.params()),{vsn:this.vsn});return n.charAt(0)!=="/"?n:n.charAt(1)==="/"?`${this.protocol()}:${n}`:`${this.protocol()}://${location.host}${n}`}disconnect(n,e,t){this.connectClock++,this.disconnecting=!0,this.closeWasClean=!0,clearTimeout(this.fallbackTimer),this.reconnectTimer.reset(),this.teardown(()=>{this.disconnecting=!1,n&&n()},e,t)}connect(n){n&&(console&&console.log("passing params to connect is deprecated. Instead pass :params to the Socket constructor"),this.params=Sr(n)),!(this.conn&&!this.disconnecting)&&(this.longPollFallbackMs&&this.transport!==ar?this.connectWithFallback(ar,this.longPollFallbackMs):this.transportConnect())}log(n,e,t){this.logger&&this.logger(n,e,t)}hasLogger(){return this.logger!==null}onOpen(n){let e=this.makeRef();return this.stateChangeCallbacks.open.push([e,n]),e}onClose(n){let e=this.makeRef();return this.stateChangeCallbacks.close.push([e,n]),e}onError(n){let e=this.makeRef();return this.stateChangeCallbacks.error.push([e,n]),e}onMessage(n){let e=this.makeRef();return this.stateChangeCallbacks.message.push([e,n]),e}onHeartbeat(n){this.heartbeatCallback=n}ping(n){if(!this.isConnected())return!1;let e=this.makeRef(),t=Date.now();this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:e});let i=this.onMessage(r=>{r.ref===e&&(this.off([i]),n(Date.now()-t))});return!0}transportName(n){switch(n){case ar:return"LongPoll";default:return n.name}}transportConnect(){this.connectClock++,this.closeWasClean=!1;let n;this.authToken&&(n=["phoenix",`${Ll}${btoa(this.authToken()).replace(/=/g,"")}`]),this.conn=new this.transport(this.endPointURL(),n),this.conn.binaryType=this.binaryType,this.conn.timeout=this.longpollerTimeout,this.conn.onopen=()=>this.onConnOpen(),this.conn.onerror=e=>this.onConnError(e),this.conn.onmessage=e=>this.onConnMessage(e),this.conn.onclose=e=>this.onConnClose(e)}getSession(n){return this.sessionStore&&this.sessionStore.getItem(n)}storeSession(n,e){this.sessionStore&&this.sessionStore.setItem(n,e)}connectWithFallback(n,e=2500){clearTimeout(this.fallbackTimer);let t=!1,i=!0,r,s,a=this.transportName(n),o=l=>{this.log("transport",`falling back to ${a}...`,l),this.off([r,s]),i=!1,this.replaceTransport(n),this.transportConnect()};if(this.getSession(`phx:fallback:${a}`))return o("memorized");this.fallbackTimer=setTimeout(o,e),s=this.onError(l=>{this.log("transport","error",l),i&&!t&&(clearTimeout(this.fallbackTimer),o(l))}),this.fallbackRef&&this.off([this.fallbackRef]),this.fallbackRef=this.onOpen(()=>{if(t=!0,!i){let l=this.transportName(n);return this.primaryPassedHealthCheck||this.storeSession(`phx:fallback:${l}`,"true"),this.log("transport",`established ${l} fallback`)}clearTimeout(this.fallbackTimer),this.fallbackTimer=setTimeout(o,e),this.ping(l=>{this.log("transport","connected to primary after",l),this.primaryPassedHealthCheck=!0,clearTimeout(this.fallbackTimer)})}),this.transportConnect()}clearHeartbeats(){clearTimeout(this.heartbeatTimer),clearTimeout(this.heartbeatTimeoutTimer)}onConnOpen(){this.hasLogger()&&this.log("transport",`connected to ${this.endPointURL()}`),this.closeWasClean=!1,this.disconnecting=!1,this.establishedConnections++,this.flushSendBuffer(),this.reconnectTimer.reset(),this.autoSendHeartbeat&&this.resetHeartbeat(),this.triggerStateCallbacks("open")}heartbeatTimeout(){if(this.pendingHeartbeatRef){this.pendingHeartbeatRef=null,this.heartbeatSentAt=null,this.hasLogger()&&this.log("transport","heartbeat timeout. Attempting to re-establish connection");try{this.heartbeatCallback("timeout")}catch(n){this.log("error","error in heartbeat callback",n)}this.triggerChanError(new Error("heartbeat timeout")),this.closeWasClean=!1,this.teardown(()=>this.reconnectTimer.scheduleTimeout(),py,"heartbeat timeout")}}resetHeartbeat(){this.conn&&this.conn.skipHeartbeat||(this.pendingHeartbeatRef=null,this.clearHeartbeats(),this.heartbeatTimer=setTimeout(()=>this.sendHeartbeat(),this.heartbeatIntervalMs))}teardown(n,e,t){if(!this.conn)return n&&n();const i=this.conn;this.waitForBufferDone(i,()=>{e?i.close(e,t||""):i.close(),this.waitForSocketClosed(i,()=>{this.conn===i&&(this.conn.onopen=function(){},this.conn.onerror=function(){},this.conn.onmessage=function(){},this.conn.onclose=function(){},this.conn=null),n&&n()})})}waitForBufferDone(n,e,t=1){if(t===5||!n.bufferedAmount){e();return}setTimeout(()=>{this.waitForBufferDone(n,e,t+1)},150*t)}waitForSocketClosed(n,e,t=1){if(t===5||n.readyState===An.closed){e();return}setTimeout(()=>{this.waitForSocketClosed(n,e,t+1)},150*t)}onConnClose(n){this.conn&&(this.conn.onclose=()=>{}),this.hasLogger()&&this.log("transport","close",n),this.triggerChanError(n),this.clearHeartbeats(),this.closeWasClean||this.reconnectTimer.scheduleTimeout(),this.triggerStateCallbacks("close",n)}onConnError(n){this.hasLogger()&&this.log("transport","error",n);let e=this.transport,t=this.establishedConnections;this.triggerStateCallbacks("error",n,e,t),(e===this.transport||t>0)&&this.triggerChanError(n)}triggerChanError(n){this.channels.forEach(e=>{e.isErrored()||e.isLeaving()||e.isClosed()||e.trigger(Gn.error,n)})}connectionState(){switch(this.conn&&this.conn.readyState){case An.connecting:return"connecting";case An.open:return"open";case An.closing:return"closing";default:return"closed"}}isConnected(){return this.connectionState()==="open"}remove(n){this.off(n.stateChangeRefs),this.channels=this.channels.filter(e=>e!==n)}off(n){for(let e in this.stateChangeCallbacks)this.stateChangeCallbacks[e]=this.stateChangeCallbacks[e].filter(([t])=>n.indexOf(t)===-1)}channel(n,e={}){let t=new _y(n,e,this);return this.channels.push(t),t}push(n){if(this.hasLogger()){let{topic:e,event:t,payload:i,ref:r,join_ref:s}=n;this.log("push",`${e} ${t} (${s}, ${r})`,i)}this.isConnected()?this.encode(n,e=>this.conn.send(e)):this.sendBuffer.push(()=>this.encode(n,e=>this.conn.send(e)))}makeRef(){let n=this.ref+1;return n===this.ref?this.ref=0:this.ref=n,this.ref.toString()}sendHeartbeat(){if(!this.isConnected()){try{this.heartbeatCallback("disconnected")}catch(n){this.log("error","error in heartbeat callback",n)}return}if(this.pendingHeartbeatRef){this.heartbeatTimeout();return}this.pendingHeartbeatRef=this.makeRef(),this.heartbeatSentAt=Date.now(),this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:this.pendingHeartbeatRef});try{this.heartbeatCallback("sent")}catch(n){this.log("error","error in heartbeat callback",n)}this.heartbeatTimeoutTimer=setTimeout(()=>this.heartbeatTimeout(),this.heartbeatIntervalMs)}flushSendBuffer(){this.isConnected()&&this.sendBuffer.length>0&&(this.sendBuffer.forEach(n=>n()),this.sendBuffer=[])}onConnMessage(n){this.decode(n.data,e=>{let{topic:t,event:i,payload:r,ref:s,join_ref:a}=e;if(s&&s===this.pendingHeartbeatRef){const o=this.heartbeatSentAt?Date.now()-this.heartbeatSentAt:void 0;this.clearHeartbeats();try{this.heartbeatCallback(r.status==="ok"?"ok":"error",o)}catch(l){this.log("error","error in heartbeat callback",l)}this.pendingHeartbeatRef=null,this.heartbeatSentAt=null,this.autoSendHeartbeat&&(this.heartbeatTimer=setTimeout(()=>this.sendHeartbeat(),this.heartbeatIntervalMs))}this.hasLogger()&&this.log("receive",`${r.status||""} ${t} ${i} ${s&&"("+s+")"||""}`.trim(),r);for(let o=0;o<this.channels.length;o++){const l=this.channels[o];l.isMember(t,i,r,a)&&l.trigger(i,r,s,a)}this.triggerStateCallbacks("message",e)})}triggerStateCallbacks(n,...e){try{this.stateChangeCallbacks[n].forEach(([t,i])=>{try{i(...e)}catch(r){this.log("error",`error in ${n} callback`,r)}})}catch(t){this.log("error",`error triggering ${n} callbacks`,t)}}leaveOpenTopic(n){let e=this.channels.find(t=>t.topic===n&&(t.isJoined()||t.isJoining()));e&&(this.hasLogger()&&this.log("transport",`leaving duplicate topic "${n}"`),e.leave())}};class us{constructor(e,t){const i=Sy(t);this.presence=new yy(e.getChannel(),i),this.presence.onJoin((r,s,a)=>{const o=us.onJoinPayload(r,s,a);e.getChannel().trigger("presence",o)}),this.presence.onLeave((r,s,a)=>{const o=us.onLeavePayload(r,s,a);e.getChannel().trigger("presence",o)}),this.presence.onSync(()=>{e.getChannel().trigger("presence",{event:"sync"})})}get state(){return us.transformState(this.presence.state)}static transformState(e){return e=xy(e),Object.getOwnPropertyNames(e).reduce((t,i)=>{const r=e[i];return t[i]=ya(r),t},{})}static onJoinPayload(e,t,i){const r=Du(t),s=ya(i);return{event:"join",key:e,currentPresences:r,newPresences:s}}static onLeavePayload(e,t,i){const r=Du(t),s=ya(i);return{event:"leave",key:e,currentPresences:r,leftPresences:s}}}function ya(n){return n.metas.map(e=>{const t=Object.getOwnPropertyDescriptors(e),i=Object.defineProperties({},t);return i.presence_ref=i.phx_ref,delete i.phx_ref,delete i.phx_ref_prev,i})}function xy(n){return JSON.parse(JSON.stringify(n))}function Sy(n){return(n==null?void 0:n.events)&&{events:n.events}}function Du(n){return n!=null&&n.metas?ya(n):[]}var Uu;(function(n){n.SYNC="sync",n.JOIN="join",n.LEAVE="leave"})(Uu||(Uu={}));class by{get state(){return this.presenceAdapter.state}constructor(e,t){this.channel=e,this.presenceAdapter=new us(this.channel.channelAdapter,t)}}function Ey(n){if(n instanceof Error)return n;if(typeof n=="string")return new Error(n);if(n&&typeof n=="object"){const e=n;if(typeof e.code=="number"){const t=typeof e.reason=="string"&&e.reason?` (${e.reason})`:"";return new Error(`socket closed: ${e.code}${t}`,{cause:n})}return new Error("channel error: transport failure",{cause:n})}return new Error("channel error: connection lost")}class My{constructor(e,t,i){const r=Ty(i);this.channel=e.getSocket().channel(t,r),this.socket=e}get state(){return this.channel.state}set state(e){this.channel.state=e}get joinedOnce(){return this.channel.joinedOnce}get joinPush(){return this.channel.joinPush}get rejoinTimer(){return this.channel.rejoinTimer}on(e,t){return this.channel.on(e,t)}off(e,t){this.channel.off(e,t)}subscribe(e){return this.channel.join(e)}unsubscribe(e){return this.channel.leave(e)}teardown(){this.channel.teardown()}onClose(e){this.channel.onClose(e)}onError(e){return this.channel.onError(e)}push(e,t,i){let r;try{r=this.channel.push(e,t,i)}catch{throw new Error(`tried to push '${e}' to '${this.channel.topic}' before joining. Use channel.subscribe() before pushing events`)}if(this.channel.pushBuffer.length>iy){const s=this.channel.pushBuffer.shift();s.cancelTimeout(),this.socket.log("channel",`discarded push due to buffer overflow: ${s.event}`,s.payload())}return r}updateJoinPayload(e){const t=this.channel.joinPush.payload();this.channel.joinPush.payload=()=>Object.assign(Object.assign({},t),e)}canPush(){return this.socket.isConnected()&&this.state===hi.joined}isJoined(){return this.state===hi.joined}isJoining(){return this.state===hi.joining}isClosed(){return this.state===hi.closed}isLeaving(){return this.state===hi.leaving}updateFilterBindings(e){this.channel.filterBindings=e}updatePayloadTransform(e){this.channel.onMessage=e}getChannel(){return this.channel}}function Ty(n){return{config:Object.assign({broadcast:{ack:!1,self:!1},presence:{key:"",enabled:!1},private:!1},n.config)}}const Ay=/[,()"\\]/,Ry=n=>Ay.test(n)||n!==n.trim(),Cy=n=>`"${n.replace(/\\/g,"\\\\").replace(/"/g,'\\"')}"`,Nu=n=>{const e=n===null?"null":String(n);return Ry(e)?Cy(e):e},Py=n=>n===null?"null":String(n),Iy=(n,e)=>{if(n==="in"){const t=Array.isArray(e)?e:[e];if(t.length===0)throw new Error("Realtime `in` filter requires at least one value.");return`in.(${Array.from(new Set(t)).map(r=>Nu(r)).join(",")})`}return n==="is"?`is.${Py(e)}`:`${n}.${Nu(e)}`};class Ly{constructor(){this.filters=[]}add(e,t,i,r=!1){const s=r?"not.":"";return this.filters.push(`${e}=${s}${Iy(t,i)}`),this}eq(e,t){return this.add(e,"eq",t)}neq(e,t){return this.add(e,"neq",t)}gt(e,t){return this.add(e,"gt",t)}gte(e,t){return this.add(e,"gte",t)}lt(e,t){return this.add(e,"lt",t)}lte(e,t){return this.add(e,"lte",t)}in(e,t){return this.add(e,"in",t)}like(e,t){return this.add(e,"like",t)}ilike(e,t){return this.add(e,"ilike",t)}match(e,t){return this.add(e,"match",t)}imatch(e,t){return this.add(e,"imatch",t)}is(e,t){return this.add(e,"is",t)}isDistinct(e,t){return this.add(e,"isdistinct",t)}not(e,t,i){return this.add(e,t,i,!0)}build(){return this.filters.join(",")}toString(){return this.build()}}var Ou;(function(n){n.ALL="*",n.INSERT="INSERT",n.UPDATE="UPDATE",n.DELETE="DELETE"})(Ou||(Ou={}));var Li;(function(n){n.BROADCAST="broadcast",n.PRESENCE="presence",n.POSTGRES_CHANGES="postgres_changes",n.SYSTEM="system"})(Li||(Li={}));var Vn;(function(n){n.SUBSCRIBED="SUBSCRIBED",n.TIMED_OUT="TIMED_OUT",n.CLOSED="CLOSED",n.CHANNEL_ERROR="CHANNEL_ERROR"})(Vn||(Vn={}));class Wn{get state(){return this.channelAdapter.state}set state(e){this.channelAdapter.state=e}get joinedOnce(){return this.channelAdapter.joinedOnce}get timeout(){return this.socket.timeout}get joinPush(){return this.channelAdapter.joinPush}get rejoinTimer(){return this.channelAdapter.rejoinTimer}constructor(e,t={config:{}},i){var r,s;if(this.topic=e,this.params=t,this.socket=i,this.bindings={},this.subTopic=e.replace(/^realtime:/i,""),this.params.config=Object.assign({broadcast:{ack:!1,self:!1},presence:{key:"",enabled:!1},private:!1},t.config),this.channelAdapter=new My(this.socket.socketAdapter,e,this.params),this.presence=new by(this),this._onClose(()=>{this.socket._remove(this)}),this._updateFilterTransform(),this.broadcastEndpointURL=Ld(this.socket.socketAdapter.endPointURL()),this.private=this.params.config.private||!1,!this.private&&(!((s=(r=this.params.config)===null||r===void 0?void 0:r.broadcast)===null||s===void 0)&&s.replay))throw new Error(`tried to use replay on public channel '${this.topic}'. It must be a private channel.`)}subscribe(e,t=this.timeout){var i,r,s,a;if(this.socket.isConnected()||this.socket.connect(),this.channelAdapter.isClosed()){const{config:{broadcast:o,presence:l,private:c,postgres_changes_options:u}}=this.params,h=(r=(i=this.bindings.postgres_changes)===null||i===void 0?void 0:i.map(m=>m.filter))!==null&&r!==void 0?r:[],d=!!this.bindings[Li.PRESENCE]&&this.bindings[Li.PRESENCE].length>0||((s=this.params.config.presence)===null||s===void 0?void 0:s.enabled)===!0,f={},g=Object.assign({broadcast:o,presence:Object.assign(Object.assign({},l),{enabled:d}),postgres_changes:h,private:c},u?{postgres_changes_options:u}:{});this.socket.accessTokenValue&&(f.access_token=this.socket.accessTokenValue),this._onError(m=>{e==null||e(Vn.CHANNEL_ERROR,Ey(m))}),this._onClose(()=>e==null?void 0:e(Vn.CLOSED)),this.updateJoinPayload(Object.assign({config:g},f)),this._updateFilterMessage();const _=u!=null&&u.wait&&h.length>0?Math.max(t,((a=u.timeout)!==null&&a!==void 0?a:ty)+ny):t;this.channelAdapter.subscribe(_).receive("ok",async({postgres_changes:m})=>{if(this.socket._isManualToken()||this.socket.setAuth(),m===void 0){e==null||e(Vn.SUBSCRIBED);return}this._updatePostgresBindings(m,e)}).receive("error",m=>{this.state=hi.errored;const p=Object.values(m).join(", ")||"error";e==null||e(Vn.CHANNEL_ERROR,new Error(p,{cause:m}))}).receive("timeout",()=>{e==null||e(Vn.TIMED_OUT)})}return this}_updatePostgresBindings(e,t){var i;const r=this.bindings.postgres_changes,s=(i=r==null?void 0:r.length)!==null&&i!==void 0?i:0,a=[];for(let o=0;o<s;o++){const l=r[o],{filter:{event:c,schema:u,table:h,filter:d}}=l,f=e&&e[o];if(f&&f.event===c&&Wn.isFilterValueEqual(f.schema,u)&&Wn.isFilterValueEqual(f.table,h)&&Wn.isFilterValueEqual(f.filter,d))a.push(Object.assign(Object.assign({},l),{id:f.id}));else{this.unsubscribe(),this.state=hi.errored,t==null||t(Vn.CHANNEL_ERROR,new Error("mismatch between server and client bindings for postgres changes"));return}}this.bindings.postgres_changes=a,this.state!=hi.errored&&t&&t(Vn.SUBSCRIBED)}presenceState(){return this.presence.state}async track(e,t={}){return await this.send({type:"presence",event:"track",payload:e},t)}async untrack(e={}){return await this.send({type:"presence",event:"untrack"},e)}on(e,t,i){const r=this.channelAdapter.isJoined()||this.channelAdapter.isJoining(),s=e===Li.PRESENCE||e===Li.POSTGRES_CHANGES;if(r&&s)throw this.socket.log("channel",`cannot add \`${e}\` callbacks for ${this.topic} after \`subscribe()\`.`),new Error(`cannot add \`${e}\` callbacks for ${this.topic} after \`subscribe()\`.`);return this._on(e,t,i)}async httpSend(e,t,i={}){var r;if(t==null)return Promise.reject(new Error("Payload is required for httpSend()"));const s=t instanceof ArrayBuffer||ArrayBuffer.isView(t),a={apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":s?"application/octet-stream":"application/json"};this.socket.accessTokenValue&&(a.Authorization=`Bearer ${this.socket.accessTokenValue}`);const o=new URL(this.broadcastEndpointURL);o.pathname+=`/${encodeURIComponent(this.subTopic)}/events/${encodeURIComponent(e)}`,this.private&&o.searchParams.set("private","true");const l={method:"POST",headers:a,body:s?t:JSON.stringify(t)},c=await this._fetchWithTimeout(o.toString(),l,(r=i.timeout)!==null&&r!==void 0?r:this.timeout);if(c.status===202)return{success:!0};if(c.status===404)return Promise.reject(new Error("httpSend() requires Realtime server v2.97.0 or newer; the endpoint returned 404. Update your Supabase CLI to a recent version, or upgrade the Realtime server in your self-hosted setup. See https://github.com/supabase/supabase-js/blob/master/packages/core/realtime-js/migrations/httpsend-server-version.md"));let u=c.statusText;try{const h=await c.json();u=h.error||h.message||u}catch{}return Promise.reject(new Error(u))}async send(e,t={}){var i,r;if(!this.channelAdapter.canPush()&&e.type==="broadcast"){const s="Realtime send() is automatically falling back to REST API. This behavior will be deprecated in the future. Please use httpSend() explicitly for REST delivery.";this.socket.hasLogger()?this.socket.log("channel",s):console.warn(s);const{event:a,payload:o}=e,l={apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":"application/json"};this.socket.accessTokenValue&&(l.Authorization=`Bearer ${this.socket.accessTokenValue}`);const c={method:"POST",headers:l,body:JSON.stringify({messages:[{topic:this.subTopic,event:a,payload:o,private:this.private}]})};try{const u=await this._fetchWithTimeout(this.broadcastEndpointURL,c,(i=t.timeout)!==null&&i!==void 0?i:this.timeout);return await((r=u.body)===null||r===void 0?void 0:r.cancel()),u.ok?"ok":"error"}catch(u){return u instanceof Error&&u.name==="AbortError"?"timed out":"error"}}else return new Promise(s=>{var a,o,l;const c=this.channelAdapter.push(e.type,e,t.timeout||this.timeout);e.type==="broadcast"&&!(!((l=(o=(a=this.params)===null||a===void 0?void 0:a.config)===null||o===void 0?void 0:o.broadcast)===null||l===void 0)&&l.ack)&&s("ok"),c.receive("ok",()=>s("ok")),c.receive("error",()=>s("error")),c.receive("timeout",()=>s("timed out"))})}updateJoinPayload(e){this.channelAdapter.updateJoinPayload(e)}async unsubscribe(e=this.timeout){return new Promise(t=>{this.channelAdapter.unsubscribe(e).receive("ok",()=>t("ok")).receive("timeout",()=>t("timed out")).receive("error",()=>t("error"))})}teardown(){this.channelAdapter.teardown()}async _fetchWithTimeout(e,t,i){const r=new AbortController,s=setTimeout(()=>r.abort(),i),a=await this.socket.fetch(e,Object.assign(Object.assign({},t),{signal:r.signal}));return clearTimeout(s),a}_on(e,t,i){var r;const s=e.toLocaleLowerCase(),a=t==null?void 0:t.filter;if((a instanceof Ly||typeof a=="object"&&a!==null&&typeof a.build=="function")&&(t=Object.assign(Object.assign({},t),{filter:a.build()})),s===Li.POSTGRES_CHANGES&&((r=this.bindings[s])===null||r===void 0?void 0:r.find(u=>Wn.isSamePostgresFilter(u.filter,t))))return this.socket.log("error",`duplicate \`postgres_changes\` binding for ${this.topic} ignored`,t),this;const o=this.channelAdapter.on(e,i),l={type:s,filter:t,callback:i,ref:o};return this.bindings[s]?this.bindings[s].push(l):this.bindings[s]=[l],this._updateFilterMessage(),this}_onClose(e){this.channelAdapter.onClose(e)}_onError(e){this.channelAdapter.onError(e)}_updateFilterMessage(){this.channelAdapter.updateFilterBindings((e,t,i)=>{var r,s,a,o,l,c,u;const h=e.event.toLocaleLowerCase();if(this._notThisChannelEvent(h,i))return!1;const d=(r=this.bindings[h])===null||r===void 0?void 0:r.find(f=>f.ref===e.ref);if(!d)return!0;if(["broadcast","presence","postgres_changes"].includes(h))if("id"in d){const f=d.id,g=(s=d.filter)===null||s===void 0?void 0:s.event;return f&&((a=t.ids)===null||a===void 0?void 0:a.includes(f))&&(g==="*"||(g==null?void 0:g.toLocaleLowerCase())===((o=t.data)===null||o===void 0?void 0:o.type.toLocaleLowerCase()))}else{const f=(c=(l=d==null?void 0:d.filter)===null||l===void 0?void 0:l.event)===null||c===void 0?void 0:c.toLocaleLowerCase();return f==="*"||f===((u=t==null?void 0:t.event)===null||u===void 0?void 0:u.toLocaleLowerCase())}else return d.type.toLocaleLowerCase()===h})}_notThisChannelEvent(e,t){const{close:i,error:r,leave:s,join:a}=Pd;return t&&[i,r,s,a].includes(e)&&t!==this.joinPush.ref}_updateFilterTransform(){this.channelAdapter.updatePayloadTransform((e,t,i)=>{if(typeof t=="object"&&"ids"in t){const r=t.data,{schema:s,table:a,commit_timestamp:o,type:l,errors:c}=r;return Object.assign(Object.assign({},{schema:s,table:a,commit_timestamp:o,eventType:l,new:{},old:{},errors:c}),this._getPayloadRecords(r))}return t})}copyBindings(e){if(this.joinedOnce)throw new Error("cannot copy bindings into joined channel");for(const t in e.bindings)for(const i of e.bindings[t])this._on(i.type,i.filter,i.callback)}static isFilterValueEqual(e,t){return(e??void 0)===(t??void 0)}static isSamePostgresFilter(e,t){var i,r,s,a;const o=(r=(i=e==null?void 0:e.select)===null||i===void 0?void 0:i.join())!==null&&r!==void 0?r:void 0,l=(a=(s=t==null?void 0:t.select)===null||s===void 0?void 0:s.join())!==null&&a!==void 0?a:void 0;return(e==null?void 0:e.event)===(t==null?void 0:t.event)&&Wn.isFilterValueEqual(e==null?void 0:e.schema,t==null?void 0:t.schema)&&Wn.isFilterValueEqual(e==null?void 0:e.table,t==null?void 0:t.table)&&Wn.isFilterValueEqual(e==null?void 0:e.filter,t==null?void 0:t.filter)&&o===l}_getPayloadRecords(e){const t={new:{},old:{}};return(e.type==="INSERT"||e.type==="UPDATE")&&(t.new=Lu(e.columns,e.record)),(e.type==="UPDATE"||e.type==="DELETE")&&(t.old=Lu(e.columns,e.old_record)),t}}class Dy{constructor(e,t){this.socket=new wy(e,t)}get timeout(){return this.socket.timeout}get endPoint(){return this.socket.endPoint}get transport(){return this.socket.transport}get heartbeatIntervalMs(){return this.socket.heartbeatIntervalMs}get heartbeatCallback(){return this.socket.heartbeatCallback}set heartbeatCallback(e){this.socket.heartbeatCallback=e}get heartbeatTimer(){return this.socket.heartbeatTimer}get pendingHeartbeatRef(){return this.socket.pendingHeartbeatRef}get reconnectTimer(){return this.socket.reconnectTimer}get vsn(){return this.socket.vsn}get encode(){return this.socket.encode}get decode(){return this.socket.decode}get reconnectAfterMs(){return this.socket.reconnectAfterMs}get sendBuffer(){return this.socket.sendBuffer}get stateChangeCallbacks(){return this.socket.stateChangeCallbacks}connect(){this.socket.connect()}disconnect(e,t,i,r=1e4){return new Promise(s=>{setTimeout(()=>s("timeout"),r),this.socket.disconnect(()=>{e(),s("ok")},t,i)})}push(e){this.socket.push(e)}log(e,t,i){this.socket.log(e,t,i)}hasLogger(){return this.socket.hasLogger()}makeRef(){return this.socket.makeRef()}onOpen(e){this.socket.onOpen(e)}onClose(e){this.socket.onClose(e)}onError(e){this.socket.onError(e)}onMessage(e){this.socket.onMessage(e)}isConnected(){return this.socket.isConnected()}isConnecting(){return this.socket.connectionState()==Cl.connecting}isDisconnecting(){return this.socket.connectionState()==Cl.closing}connectionState(){return this.socket.connectionState()}endPointURL(){return this.socket.endPointURL()}sendHeartbeat(){this.socket.sendHeartbeat()}getSocket(){return this.socket}}const ku={HEARTBEAT_INTERVAL:25e3},Uy=[1e3,2e3,5e3,1e4],Ny=1e4;function Oy(){const n=new Map;return{get length(){return n.size},clear(){n.clear()},getItem(e){return n.has(e)?n.get(e):null},key(e){var t;return(t=Array.from(n.keys())[e])!==null&&t!==void 0?t:null},removeItem(e){n.delete(e)},setItem(e,t){n.set(e,String(t))}}}function ky(){try{if(typeof globalThis<"u"&&globalThis.sessionStorage)return globalThis.sessionStorage}catch{}return Oy()}const Fy=`
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;class By{get endPoint(){return this.socketAdapter.endPoint}get timeout(){return this.socketAdapter.timeout}get transport(){return this.socketAdapter.transport}get heartbeatCallback(){return this.socketAdapter.heartbeatCallback}get heartbeatIntervalMs(){return this.socketAdapter.heartbeatIntervalMs}get heartbeatTimer(){return this.worker?this._workerHeartbeatTimer:this.socketAdapter.heartbeatTimer}get pendingHeartbeatRef(){return this.worker?this._pendingWorkerHeartbeatRef:this.socketAdapter.pendingHeartbeatRef}get reconnectTimer(){return this.socketAdapter.reconnectTimer}get vsn(){return this.socketAdapter.vsn}get encode(){return this.socketAdapter.encode}get decode(){return this.socketAdapter.decode}get reconnectAfterMs(){return this.socketAdapter.reconnectAfterMs}get sendBuffer(){return this.socketAdapter.sendBuffer}get stateChangeCallbacks(){return this.socketAdapter.stateChangeCallbacks}constructor(e,t){var i;if(this.channels=new Array,this.accessTokenValue=null,this.accessToken=null,this.apiKey=null,this.httpEndpoint="",this.headers={},this.params={},this.ref=0,this.serializer=new ry,this._manuallySetToken=!1,this._authPromise=null,this._authGeneration=0,this._workerHeartbeatTimer=void 0,this._pendingWorkerHeartbeatRef=null,this._pendingDisconnectTimer=null,this._disconnectOnEmptyChannelsAfterMs=0,this._resolveFetch=s=>s?(...a)=>s(...a):(...a)=>fetch(...a),!(!((i=t==null?void 0:t.params)===null||i===void 0)&&i.apikey))throw new Error("API key is required to connect to Realtime");this.apiKey=t.params.apikey;const r=this._initializeOptions(t);this.socketAdapter=new Dy(e,r),this.httpEndpoint=Ld(e),this.fetch=this._resolveFetch(t==null?void 0:t.fetch)}connect(){if(!(this.isConnecting()||this.isDisconnecting()||this.isConnected())){this.accessToken&&!this._authPromise&&this._setAuthSafely("connect"),this._setupConnectionHandlers();try{this.socketAdapter.connect()}catch(e){const t=e.message;throw new Error(`WebSocket not available: ${t}`)}this._handleNodeJsRaceCondition()}}endpointURL(){return this.socketAdapter.endPointURL()}async disconnect(e,t){return this._cancelPendingDisconnect(),this.isDisconnecting()?"ok":await this.socketAdapter.disconnect(()=>{clearInterval(this._workerHeartbeatTimer),this._terminateWorker()},e,t)}getChannels(){return this.channels}async removeChannel(e){const t=await e.unsubscribe();return t==="ok"&&e.teardown(),t}async removeAllChannels(){const e=this.channels.map(async i=>{const r=await i.unsubscribe();return i.teardown(),r}),t=await Promise.all(e);return await this.disconnect(),t}log(e,t,i){this.socketAdapter.log(e,t,i)}hasLogger(){return this.socketAdapter.hasLogger()}connectionState(){return this.socketAdapter.connectionState()||Cl.closed}isConnected(){return this.socketAdapter.isConnected()}isConnecting(){return this.socketAdapter.isConnecting()}isDisconnecting(){return this.socketAdapter.isDisconnecting()}channel(e,t={config:{}}){const i=`realtime:${e}`,r=this.getChannels().find(s=>s.topic===i);if(r)return r;{const s=new Wn(`realtime:${e}`,t,this);return this._cancelPendingDisconnect(),this.channels.push(s),s}}push(e){this.socketAdapter.push(e)}async setAuth(e=null){const t=++this._authGeneration,i=this._performAuth(e,t);t===this._authGeneration&&(this._authPromise=i);try{await i}finally{this._authPromise===i&&(this._authPromise=null)}}_isManualToken(){return this._manuallySetToken}async sendHeartbeat(){this.socketAdapter.sendHeartbeat()}onHeartbeat(e){this.socketAdapter.heartbeatCallback=this._wrapHeartbeatCallback(e)}_makeRef(){return this.socketAdapter.makeRef()}_remove(e){this.channels=this.channels.filter(t=>t.topic!==e.topic),this.channels.length===0&&(this.log("transport","no channels remaining, scheduling disconnect"),this._schedulePendingDisconnect())}_schedulePendingDisconnect(){if(this._cancelPendingDisconnect(),this._disconnectOnEmptyChannelsAfterMs===0){this.log("transport","disconnecting immediately - no channels"),this.disconnect();return}this._pendingDisconnectTimer=setTimeout(()=>{this._pendingDisconnectTimer=null,this.channels.length===0&&(this.log("transport","deferred disconnect fired - no channels, disconnecting"),this.disconnect())},this._disconnectOnEmptyChannelsAfterMs),this.log("transport",`deferred disconnect scheduled in ${this._disconnectOnEmptyChannelsAfterMs}ms`)}_cancelPendingDisconnect(){this._pendingDisconnectTimer!==null&&(this.log("transport","pending disconnect cancelled - channel activity detected"),clearTimeout(this._pendingDisconnectTimer),this._pendingDisconnectTimer=null)}async _performAuth(e,t){let i,r=!1;if(e)i=e,r=!0;else if(this.accessToken)try{i=await this.accessToken()}catch(s){this.log("error","Error fetching access token from callback",s),i=this.accessTokenValue}else i=this.accessTokenValue;t===this._authGeneration&&(this.accessToken?this._manuallySetToken=!1:r&&(this._manuallySetToken=!0),this.accessTokenValue!=i&&(this.accessTokenValue=i,this.channels.forEach(s=>{const a={access_token:i,version:Jv};s.updateJoinPayload(a),s.joinedOnce&&s.channelAdapter.isJoined()&&s.channelAdapter.push(Pd.access_token,{access_token:i})})))}async _waitForAuthIfNeeded(){this._authPromise&&await this._authPromise}_setAuthSafely(e="general"){this._isManualToken()||this.setAuth().catch(t=>{this.log("error",`Error setting auth in ${e}`,t)})}_setupConnectionHandlers(){this.socketAdapter.onOpen(()=>{(this._authPromise||(this.accessToken&&!this.accessTokenValue?this.setAuth():Promise.resolve())).catch(t=>{this.log("error","error waiting for auth on connect",t)}),this.worker&&!this.workerRef&&this._startWorkerHeartbeat()}),this.socketAdapter.onClose(()=>{this.worker&&this.workerRef&&this._terminateWorker()}),this.socketAdapter.onMessage(e=>{e.ref&&e.ref===this._pendingWorkerHeartbeatRef&&(this._pendingWorkerHeartbeatRef=null)})}_handleNodeJsRaceCondition(){this.socketAdapter.isConnected()&&this.socketAdapter.getSocket().onConnOpen()}_wrapHeartbeatCallback(e){return(t,i)=>{t!=="disconnected"&&(t=="sent"&&this._setAuthSafely(),e&&e(t,i))}}_startWorkerHeartbeat(){this.workerUrl?this.log("worker",`starting worker for from ${this.workerUrl}`):this.log("worker","starting default worker");const e=this._workerObjectUrl(this.workerUrl);this.workerRef=new Worker(e),this.workerRef.onerror=t=>{this.log("worker","worker error",t.message),this._terminateWorker(),this.disconnect()},this.workerRef.onmessage=t=>{t.data.event==="keepAlive"&&this.sendHeartbeat()},this.workerRef.postMessage({event:"start",interval:this.heartbeatIntervalMs})}_terminateWorker(){this.workerRef&&(this.log("worker","terminating worker"),this.workerRef.terminate(),this.workerRef=void 0)}_workerObjectUrl(e){let t;if(e)t=e;else{const i=new Blob([Fy],{type:"application/javascript"});t=URL.createObjectURL(i)}return t}_initializeOptions(e){var t,i,r,s,a,o,l,c,u,h,d,f;this.worker=(t=e==null?void 0:e.worker)!==null&&t!==void 0?t:!1,this.accessToken=(i=e==null?void 0:e.accessToken)!==null&&i!==void 0?i:null;const g={};g.timeout=(r=e==null?void 0:e.timeout)!==null&&r!==void 0?r:ey,g.heartbeatIntervalMs=(s=e==null?void 0:e.heartbeatIntervalMs)!==null&&s!==void 0?s:ku.HEARTBEAT_INTERVAL,this._disconnectOnEmptyChannelsAfterMs=(a=e==null?void 0:e.disconnectOnEmptyChannelsAfterMs)!==null&&a!==void 0?a:2*((o=e==null?void 0:e.heartbeatIntervalMs)!==null&&o!==void 0?o:ku.HEARTBEAT_INTERVAL),g.transport=(l=e==null?void 0:e.transport)!==null&&l!==void 0?l:Kv.getWebSocketConstructor(),g.params=e==null?void 0:e.params,g.logger=e==null?void 0:e.logger,g.heartbeatCallback=this._wrapHeartbeatCallback(e==null?void 0:e.heartbeatCallback),g.sessionStorage=(c=e==null?void 0:e.sessionStorage)!==null&&c!==void 0?c:ky(),g.reconnectAfterMs=(u=e==null?void 0:e.reconnectAfterMs)!==null&&u!==void 0?u:(y=>Uy[y-1]||Ny);let _,m;const p=(h=e==null?void 0:e.vsn)!==null&&h!==void 0?h:Qv;switch(p){case Zv:_=(y,v)=>v(JSON.stringify(y)),m=(y,v)=>v(JSON.parse(y));break;case Cd:_=this.serializer.encode.bind(this.serializer),m=this.serializer.decode.bind(this.serializer);break;default:throw new Error(`Unsupported serializer version: ${g.vsn}`)}if(g.vsn=p,g.encode=(d=e==null?void 0:e.encode)!==null&&d!==void 0?d:_,g.decode=(f=e==null?void 0:e.decode)!==null&&f!==void 0?f:m,g.beforeReconnect=this._reconnectAuth.bind(this),(e!=null&&e.logLevel||e!=null&&e.log_level)&&(this.logLevel=e.logLevel||e.log_level,g.params=Object.assign(Object.assign({},g.params),{log_level:this.logLevel})),this.worker){if(typeof window<"u"&&!window.Worker)throw new Error("Web Worker is not supported");this.workerUrl=e==null?void 0:e.workerUrl,g.autoSendHeartbeat=!this.worker}return g}async _reconnectAuth(){await this._waitForAuthIfNeeded(),this.isConnected()||this.connect()}}var ms=class extends Error{constructor(n,e){var t;super(n),this.name="IcebergError",this.status=e.status,this.icebergType=e.icebergType,this.icebergCode=e.icebergCode,this.details=e.details,this.isCommitStateUnknown=e.icebergType==="CommitStateUnknownException"||[500,502,504].includes(e.status)&&((t=e.icebergType)==null?void 0:t.includes("CommitState"))===!0}isNotFound(){return this.status===404}isConflict(){return this.status===409}isAuthenticationTimeout(){return this.status===419}};function zy(n,e,t){const i=new URL(e,n);if(t)for(const[r,s]of Object.entries(t))s!==void 0&&i.searchParams.set(r,s);return i.toString()}async function Hy(n){return!n||n.type==="none"?{}:n.type==="bearer"?{Authorization:`Bearer ${n.token}`}:n.type==="header"?{[n.name]:n.value}:n.type==="custom"?await n.getHeaders():{}}function Gy(n){const e=n.fetchImpl??globalThis.fetch;return{async request({method:t,path:i,query:r,body:s,headers:a}){const o=zy(n.baseUrl,i,r),l=await Hy(n.auth),c=await e(o,{method:t,headers:{...s?{"Content-Type":"application/json"}:{},...l,...a},body:s?JSON.stringify(s):void 0}),u=await c.text(),h=(c.headers.get("content-type")||"").includes("application/json"),d=h&&u?JSON.parse(u):u;if(!c.ok){const f=h?d:void 0,g=f==null?void 0:f.error;throw new ms((g==null?void 0:g.message)??`Request failed with status ${c.status}`,{status:c.status,icebergType:g==null?void 0:g.type,icebergCode:g==null?void 0:g.code,details:f})}return{status:c.status,headers:c.headers,data:d}}}}function Qs(n){return n.join("")}var Vy=class{constructor(n,e=""){this.client=n,this.prefix=e}async listNamespaces(n){const e=n?{parent:Qs(n.namespace)}:void 0;return(await this.client.request({method:"GET",path:`${this.prefix}/namespaces`,query:e})).data.namespaces.map(i=>({namespace:i}))}async createNamespace(n,e){const t={namespace:n.namespace,properties:e==null?void 0:e.properties};return(await this.client.request({method:"POST",path:`${this.prefix}/namespaces`,body:t})).data}async dropNamespace(n){await this.client.request({method:"DELETE",path:`${this.prefix}/namespaces/${Qs(n.namespace)}`})}async loadNamespaceMetadata(n){return{properties:(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${Qs(n.namespace)}`})).data.properties}}async namespaceExists(n){try{return await this.client.request({method:"HEAD",path:`${this.prefix}/namespaces/${Qs(n.namespace)}`}),!0}catch(e){if(e instanceof ms&&e.status===404)return!1;throw e}}async createNamespaceIfNotExists(n,e){try{return await this.createNamespace(n,e)}catch(t){if(t instanceof ms&&t.status===409)return;throw t}}};function or(n){return n.join("")}var Wy=class{constructor(n,e="",t){this.client=n,this.prefix=e,this.accessDelegation=t}async listTables(n){return(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${or(n.namespace)}/tables`})).data.identifiers}async createTable(n,e){const t={};return this.accessDelegation&&(t["X-Iceberg-Access-Delegation"]=this.accessDelegation),(await this.client.request({method:"POST",path:`${this.prefix}/namespaces/${or(n.namespace)}/tables`,body:e,headers:t})).data.metadata}async updateTable(n,e){const t=await this.client.request({method:"POST",path:`${this.prefix}/namespaces/${or(n.namespace)}/tables/${n.name}`,body:e});return{"metadata-location":t.data["metadata-location"],metadata:t.data.metadata}}async dropTable(n,e){await this.client.request({method:"DELETE",path:`${this.prefix}/namespaces/${or(n.namespace)}/tables/${n.name}`,query:{purgeRequested:String((e==null?void 0:e.purge)??!1)}})}async loadTable(n){const e={};return this.accessDelegation&&(e["X-Iceberg-Access-Delegation"]=this.accessDelegation),(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${or(n.namespace)}/tables/${n.name}`,headers:e})).data.metadata}async tableExists(n){const e={};this.accessDelegation&&(e["X-Iceberg-Access-Delegation"]=this.accessDelegation);try{return await this.client.request({method:"HEAD",path:`${this.prefix}/namespaces/${or(n.namespace)}/tables/${n.name}`,headers:e}),!0}catch(t){if(t instanceof ms&&t.status===404)return!1;throw t}}async createTableIfNotExists(n,e){try{return await this.createTable(n,e)}catch(t){if(t instanceof ms&&t.status===409)return await this.loadTable({namespace:n.namespace,name:e.name});throw t}}},jy=class{constructor(n){var i;let e="v1";n.catalogName&&(e+=`/${n.catalogName}`);const t=n.baseUrl.endsWith("/")?n.baseUrl:`${n.baseUrl}/`;this.client=Gy({baseUrl:t,auth:n.auth,fetchImpl:n.fetch}),this.accessDelegation=(i=n.accessDelegation)==null?void 0:i.join(","),this.namespaceOps=new Vy(this.client,e),this.tableOps=new Wy(this.client,e,this.accessDelegation)}async listNamespaces(n){return this.namespaceOps.listNamespaces(n)}async createNamespace(n,e){return this.namespaceOps.createNamespace(n,e)}async dropNamespace(n){await this.namespaceOps.dropNamespace(n)}async loadNamespaceMetadata(n){return this.namespaceOps.loadNamespaceMetadata(n)}async listTables(n){return this.tableOps.listTables(n)}async createTable(n,e){return this.tableOps.createTable(n,e)}async updateTable(n,e){return this.tableOps.updateTable(n,e)}async dropTable(n,e){await this.tableOps.dropTable(n,e)}async loadTable(n){return this.tableOps.loadTable(n)}async namespaceExists(n){return this.namespaceOps.namespaceExists(n)}async tableExists(n){return this.tableOps.tableExists(n)}async createNamespaceIfNotExists(n,e){return this.namespaceOps.createNamespaceIfNotExists(n,e)}async createTableIfNotExists(n,e){return this.tableOps.createTableIfNotExists(n,e)}};function gs(n){"@babel/helpers - typeof";return gs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},gs(n)}function $y(n,e){if(gs(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e);if(gs(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function qy(n){var e=$y(n,"string");return gs(e)=="symbol"?e:e+""}function Xy(n,e,t){return(e=qy(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Fu(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function Ne(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Fu(Object(t),!0).forEach(function(i){Xy(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Fu(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}var Va=class extends Error{constructor(n,e="storage",t,i){super(n),this.__isStorageError=!0,this.namespace=e,this.name=e==="vectors"?"StorageVectorsError":"StorageError",this.status=t,this.statusCode=i}toJSON(){return{name:this.name,message:this.message,status:this.status,statusCode:this.statusCode}}};function Wa(n){return typeof n=="object"&&n!==null&&"__isStorageError"in n}var Dl=class extends Va{constructor(n,e,t,i="storage",r){super(n,i,e,t),this.name=i==="vectors"?"StorageVectorsApiError":"StorageApiError",this.status=e,this.statusCode=t,this.code=r}toJSON(){return Ne(Ne({},super.toJSON()),{},{code:this.code})}},Ud=class extends Va{constructor(n,e,t="storage"){super(n,t),this.name=t==="vectors"?"StorageVectorsUnknownError":"StorageUnknownError",this.originalError=e}};function Ta(n,e,t){const i=Ne({},n),r=e.toLowerCase();for(const s of Object.keys(i))s.toLowerCase()===r&&delete i[s];return i[r]=t,i}function Ky(n){const e={};for(const[t,i]of Object.entries(n))e[t.toLowerCase()]=i;return e}const Yy=n=>n?(...e)=>n(...e):(...e)=>fetch(...e),Jy=n=>{if(typeof n!="object"||n===null)return!1;const e=Object.getPrototypeOf(n);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in n)&&!(Symbol.iterator in n)},Ul=n=>{if(Array.isArray(n))return n.map(t=>Ul(t));if(typeof n=="function"||n!==Object(n))return n;const e={};return Object.entries(n).forEach(([t,i])=>{const r=t.replace(/([-_][a-z])/gi,s=>s.toUpperCase().replace(/[-_]/g,""));e[r]=Ul(i)}),e},Zy=n=>!n||typeof n!="string"||n.length===0||n.length>100||n.trim()!==n||n.includes("/")||n.includes("\\")?!1:/^[\w!.\*'() &$@=;:+,?-]+$/.test(n),Nl=n=>n.split("/").map(encodeURIComponent).join("/"),Bu=n=>{if(typeof n=="object"&&n!==null){const e=n;if(typeof e.msg=="string")return e.msg;if(typeof e.message=="string")return e.message;if(typeof e.error_description=="string")return e.error_description;if(typeof e.error=="string")return e.error;if(typeof e.error=="object"&&e.error!==null){const t=e.error;if(typeof t.message=="string")return t.message}}return JSON.stringify(n)},Qy=async(n,e,t,i)=>{if(n!==null&&typeof n=="object"&&"json"in n&&typeof n.json=="function"){const r=n;let s=parseInt(String(r.status),10);Number.isFinite(s)||(s=500),r.json().then(a=>{const o=(a==null?void 0:a.statusCode)||(a==null?void 0:a.code)||s+"";e(new Dl(Bu(a),s,o,i,a==null?void 0:a.code))}).catch(()=>{const a=s+"";e(new Dl(r.statusText||`HTTP ${s} error`,s,a,i))})}else e(new Ud(Bu(n),n,i))},ew=(n,e,t,i)=>{const r={method:n,headers:(e==null?void 0:e.headers)||{}};if(n==="GET"||n==="HEAD"||!i)return Ne(Ne({},r),t);if(Jy(i)){var s;const a=(e==null?void 0:e.headers)||{};let o;for(const[l,c]of Object.entries(a))l.toLowerCase()==="content-type"&&(o=c);r.headers=Ta(a,"Content-Type",(s=o)!==null&&s!==void 0?s:"application/json"),r.body=JSON.stringify(i)}else r.body=i;return e!=null&&e.duplex&&(r.duplex=e.duplex),Ne(Ne({},r),t)};async function es(n,e,t,i,r,s,a){return new Promise((o,l)=>{n(t,ew(e,i,r,s)).then(c=>{if(!c.ok)throw c;if(i!=null&&i.noResolveJson)return c;if(a==="vectors"){const u=c.headers.get("content-type");if(c.headers.get("content-length")==="0"||c.status===204)return{};if(!u||!u.includes("application/json"))return{}}return c.json()}).then(c=>o(c)).catch(c=>Qy(c,l,i,a))})}function Nd(n="storage"){return{get:async(e,t,i,r)=>es(e,"GET",t,i,r,void 0,n),post:async(e,t,i,r,s)=>es(e,"POST",t,r,s,i,n),put:async(e,t,i,r,s)=>es(e,"PUT",t,r,s,i,n),head:async(e,t,i,r)=>es(e,"HEAD",t,Ne(Ne({},i),{},{noResolveJson:!0}),r,void 0,n),remove:async(e,t,i,r,s)=>es(e,"DELETE",t,r,s,i,n)}}const tw=Nd("storage"),{get:br,post:gn,put:Aa,head:nw,remove:Er}=tw,nn=Nd("vectors");var Vr=class{constructor(n,e={},t,i="storage"){this.shouldThrowOnError=!1,this.url=n,this.headers=Ky(e),this.fetch=Yy(t),this.namespace=i}throwOnError(){return this.shouldThrowOnError=!0,this}setHeader(n,e){return this.headers=Ta(this.headers,n,e),this}async handleOperation(n){var e=this;try{return{data:await n(),error:null}}catch(t){if(e.shouldThrowOnError)throw t;if(Wa(t))return{data:null,error:t};throw t}}};let Od;Od=Symbol.toStringTag;var iw=class{constructor(n,e){this.downloadFn=n,this.shouldThrowOnError=e,this[Od]="StreamDownloadBuilder",this.promise=null}then(n,e){return this.getPromise().then(n,e)}catch(n){return this.getPromise().catch(n)}finally(n){return this.getPromise().finally(n)}getPromise(){return this.promise||(this.promise=this.execute()),this.promise}async execute(){var n=this;try{return{data:(await n.downloadFn()).body,error:null}}catch(e){if(n.shouldThrowOnError)throw e;if(Wa(e))return{data:null,error:e};throw e}}};let kd;kd=Symbol.toStringTag;var rw=class{constructor(n,e){this.downloadFn=n,this.shouldThrowOnError=e,this[kd]="BlobDownloadBuilder",this.promise=null}asStream(){return new iw(this.downloadFn,this.shouldThrowOnError)}then(n,e){return this.getPromise().then(n,e)}catch(n){return this.getPromise().catch(n)}finally(n){return this.getPromise().finally(n)}getPromise(){return this.promise||(this.promise=this.execute()),this.promise}async execute(){var n=this;try{return{data:await(await n.downloadFn()).blob(),error:null}}catch(e){if(n.shouldThrowOnError)throw e;if(Wa(e))return{data:null,error:e};throw e}}};const Co={limit:100,offset:0,sortBy:{column:"name",order:"asc"}},zu={cacheControl:"3600",contentType:"text/plain;charset=UTF-8",upsert:!1};var sw=class extends Vr{constructor(n,e={},t,i){super(n,e,i,"storage"),this.bucketId=t}async uploadOrUpdate(n,e,t,i){var r=this;return r.handleOperation(async()=>{let s;const a=Ne(Ne({},zu),i);let o=Ne(Ne({},r.headers),n==="POST"&&{"x-upsert":String(a.upsert)});const l=a.metadata;if(typeof Blob<"u"&&t instanceof Blob||typeof FormData<"u"&&t instanceof FormData?s=r.prepareUploadFormData(t,a):(s=t,o["cache-control"]=`max-age=${a.cacheControl}`,o["content-type"]=a.contentType,a.contentEncoding&&(o["content-encoding"]=a.contentEncoding),l&&(o["x-metadata"]=r.toBase64(r.encodeMetadata(l))),(typeof ReadableStream<"u"&&s instanceof ReadableStream||s&&typeof s=="object"&&"pipe"in s&&typeof s.pipe=="function")&&!a.duplex&&(a.duplex="half")),i!=null&&i.headers)for(const[d,f]of Object.entries(i.headers))o=Ta(o,d,f);const c=r._removeEmptyFolders(e),u=r._getFinalPath(c),h=await(n=="PUT"?Aa:gn)(r.fetch,`${r.url}/object/${u}`,s,Ne({headers:o},a!=null&&a.duplex?{duplex:a.duplex}:{}));return{path:c,id:h.Id,fullPath:h.Key}})}async upload(n,e,t){return this.uploadOrUpdate("POST",n,e,t)}async uploadToSignedUrl(n,e,t,i){var r=this;const s=r._removeEmptyFolders(n),a=r._getFinalPath(s),o=new URL(r.url+`/object/upload/sign/${a}`);return o.searchParams.set("token",e),r.handleOperation(async()=>{let l;const c=Ne(Ne({},zu),i);let u=Ne(Ne({},r.headers),{"x-upsert":String(c.upsert)});const h=c.metadata;if(typeof Blob<"u"&&t instanceof Blob||typeof FormData<"u"&&t instanceof FormData?l=r.prepareUploadFormData(t,c):(l=t,u["cache-control"]=`max-age=${c.cacheControl}`,u["content-type"]=c.contentType,c.contentEncoding&&(u["content-encoding"]=c.contentEncoding),h&&(u["x-metadata"]=r.toBase64(r.encodeMetadata(h))),(typeof ReadableStream<"u"&&l instanceof ReadableStream||l&&typeof l=="object"&&"pipe"in l&&typeof l.pipe=="function")&&!c.duplex&&(c.duplex="half")),i!=null&&i.headers)for(const[d,f]of Object.entries(i.headers))u=Ta(u,d,f);return{path:s,fullPath:(await Aa(r.fetch,o.toString(),l,Ne({headers:u},c!=null&&c.duplex?{duplex:c.duplex}:{}))).Key}})}async createSignedUploadUrl(n,e){var t=this;return t.handleOperation(async()=>{let i=t._getFinalPath(n);const r=Ne({},t.headers);e!=null&&e.upsert&&(r["x-upsert"]="true");const s=await gn(t.fetch,`${t.url}/object/upload/sign/${i}`,{},{headers:r}),a=new URL(t.url+s.url),o=a.searchParams.get("token");if(!o)throw new Va("No token returned by API");return{signedUrl:a.toString(),path:n,token:o}})}async update(n,e,t){return this.uploadOrUpdate("PUT",n,e,t)}async move(n,e,t){var i=this;return i.handleOperation(async()=>await gn(i.fetch,`${i.url}/object/move`,{bucketId:i.bucketId,sourceKey:n,destinationKey:e,destinationBucket:t==null?void 0:t.destinationBucket,sourceVersionId:t==null?void 0:t.sourceVersionId},{headers:i.headers}))}async copy(n,e,t){var i=this;return i.handleOperation(async()=>{const r=t;return{path:(await gn(i.fetch,`${i.url}/object/copy`,{bucketId:i.bucketId,sourceKey:n,destinationKey:e,destinationBucket:t==null?void 0:t.destinationBucket,sourceVersionId:t==null?void 0:t.sourceVersionId,copyMetadata:typeof(r==null?void 0:r.copyMetadata)=="boolean"?r.copyMetadata:void 0,metadata:(r==null?void 0:r.copyMetadata)===!1?r.metadata:void 0},{headers:i.headers})).Key}})}async createSignedUrl(n,e,t){var i=this;return i.handleOperation(async()=>{let r=i._getFinalPath(n);const s=typeof(t==null?void 0:t.transform)=="object"&&t.transform!==null&&Object.keys(t.transform).length>0;let a=await gn(i.fetch,`${i.url}/object/sign/${r}`,Ne(Ne({expiresIn:e},s?{transform:t.transform}:{}),(t==null?void 0:t.versionId)!=null?{versionId:t.versionId}:{}),{headers:i.headers});const o=new URLSearchParams;t!=null&&t.download&&o.set("download",t.download===!0?"":t.download),(t==null?void 0:t.cacheNonce)!=null&&o.set("cacheNonce",String(t.cacheNonce));const l=o.toString();return{signedUrl:encodeURI(`${i.url}${a.signedURL}${l?`&${l}`:""}`)}})}async createSignedUrls(n,e,t){var i=this;return i.handleOperation(async()=>{const r=await gn(i.fetch,`${i.url}/object/sign/${i.bucketId}`,{expiresIn:e,paths:n},{headers:i.headers}),s=new URLSearchParams;t!=null&&t.download&&s.set("download",t.download===!0?"":t.download),(t==null?void 0:t.cacheNonce)!=null&&s.set("cacheNonce",String(t.cacheNonce));const a=s.toString();return r.map(o=>Ne(Ne({},o),{},{signedUrl:o.signedURL?encodeURI(`${i.url}${o.signedURL}${a?`&${a}`:""}`):null}))})}download(n,e,t){const i=typeof(e==null?void 0:e.transform)=="object"&&e.transform!==null&&Object.keys(e.transform).length>0?"render/image/authenticated":"object",r=new URLSearchParams;e!=null&&e.transform&&this.applyTransformOptsToQuery(r,e.transform),(e==null?void 0:e.cacheNonce)!=null&&r.set("cacheNonce",String(e.cacheNonce)),(e==null?void 0:e.versionId)!=null&&r.set("versionId",String(e.versionId));const s=r.toString(),a=this._getFinalPath(n),o=()=>br(this.fetch,`${this.url}/${i}/${a}${s?`?${s}`:""}`,{headers:this.headers,noResolveJson:!0},t);return new rw(o,this.shouldThrowOnError)}async info(n,e){var t=this;const i=t._getFinalPath(n),r=new URLSearchParams;(e==null?void 0:e.versionId)!=null&&r.set("versionId",String(e.versionId));const s=r.toString();return t.handleOperation(async()=>Ul(await br(t.fetch,`${t.url}/object/info/${i}${s?`?${s}`:""}`,{headers:t.headers})))}async exists(n){var e=this;const t=e._getFinalPath(n);try{return await nw(e.fetch,`${e.url}/object/${t}`,{headers:e.headers}),{data:!0,error:null}}catch(r){if(e.shouldThrowOnError)throw r;if(Wa(r)){var i;const s=r instanceof Dl?r.status:r instanceof Ud?(i=r.originalError)===null||i===void 0?void 0:i.status:void 0;if(s!==void 0&&[400,404].includes(s))return{data:!1,error:r}}throw r}}getPublicUrl(n,e){const t=this._getFinalPath(n),i=new URLSearchParams;e!=null&&e.download&&i.set("download",e.download===!0?"":e.download),e!=null&&e.transform&&this.applyTransformOptsToQuery(i,e.transform),(e==null?void 0:e.cacheNonce)!=null&&i.set("cacheNonce",String(e.cacheNonce)),(e==null?void 0:e.versionId)!=null&&i.set("versionId",String(e.versionId));const r=i.toString(),s=typeof(e==null?void 0:e.transform)=="object"&&e.transform!==null&&Object.keys(e.transform).length>0?"render/image":"object";return{data:{publicUrl:encodeURI(`${this.url}/${s}/public/${t}`)+(r?`?${r}`:"")}}}async remove(n){var e=this;return e.handleOperation(async()=>await Er(e.fetch,`${e.url}/object/${e.bucketId}`,{prefixes:n},{headers:e.headers}))}async purgeCache(n,e,t){var i=this;return i.handleOperation(async()=>{const r=Nl(i._getFinalPath(n)),s=new URLSearchParams;e!=null&&e.transformations&&s.set("transformations","true");const a=s.toString();return await Er(i.fetch,`${i.url}/cdn/${r}${a?`?${a}`:""}`,{},{headers:i.headers},t)})}async list(n,e,t){var i=this;return i.handleOperation(async()=>{const r=e!=null&&e.sortBy?Ne(Ne({},Co.sortBy),e.sortBy):Co.sortBy,s=Ne(Ne(Ne({},Co),e),{},{sortBy:r,prefix:n||""});return await gn(i.fetch,`${i.url}/object/list/${i.bucketId}`,s,{headers:i.headers},t)})}async listV2(n,e){var t=this;return t.handleOperation(async()=>{const i=Ne({},n);return await gn(t.fetch,`${t.url}/object/list-v2/${t.bucketId}`,i,{headers:t.headers},e)})}prepareUploadFormData(n,e){const t=new FormData,i=[];n instanceof FormData?n.forEach((r,s)=>{typeof r=="string"?t.append(s,r):i.push([s,r])}):i.push(["",n]),t.has("cacheControl")||t.append("cacheControl",e.cacheControl),e.metadata&&!t.has("metadata")&&t.append("metadata",this.encodeMetadata(e.metadata)),e.contentEncoding&&!t.has("contentEncoding")&&t.append("contentEncoding",e.contentEncoding);for(const[r,s]of i)t.append(r,s);return t}encodeMetadata(n){return JSON.stringify(n)}toBase64(n){return typeof Buffer<"u"?Buffer.from(n).toString("base64"):btoa(n)}_getFinalPath(n){return`${this.bucketId}/${n.replace(/^\/+/,"")}`}_removeEmptyFolders(n){return n.replace(/^\/|\/$/g,"").replace(/\/+/g,"/")}applyTransformOptsToQuery(n,e){return e.width&&n.set("width",e.width.toString()),e.height&&n.set("height",e.height.toString()),e.resize&&n.set("resize",e.resize),e.format&&n.set("format",e.format),e.quality&&n.set("quality",e.quality.toString()),n}};const aw="2.118.0",Es={"X-Client-Info":`storage-js/${aw}`};var ow=class extends Vr{constructor(n,e={},t,i){const r=new URL(n);i!=null&&i.useNewHostname&&/supabase\.(co|in|red)$/.test(r.hostname)&&!r.hostname.includes("storage.supabase.")&&(r.hostname=r.hostname.replace("supabase.","storage.supabase."));const s=r.href.replace(/\/$/,""),a=Ne(Ne({},Es),e);super(s,a,t,"storage")}async listBuckets(n){var e=this;return e.handleOperation(async()=>{const t=e.listBucketOptionsToQueryString(n);return await br(e.fetch,`${e.url}/bucket${t}`,{headers:e.headers})})}async getBucket(n){var e=this;return e.handleOperation(async()=>await br(e.fetch,`${e.url}/bucket/${n}`,{headers:e.headers}))}async createBucket(n,e={public:!1}){var t=this;return t.handleOperation(async()=>await gn(t.fetch,`${t.url}/bucket`,{id:n,name:n,type:e.type,public:e.public,file_size_limit:e.fileSizeLimit,allowed_mime_types:e.allowedMimeTypes,versioning_status:e.versioningStatus},{headers:t.headers}))}async updateBucket(n,e){var t=this;return t.handleOperation(async()=>await Aa(t.fetch,`${t.url}/bucket/${n}`,{id:n,name:n,public:e.public,file_size_limit:e.fileSizeLimit,allowed_mime_types:e.allowedMimeTypes,versioning_status:e.versioningStatus},{headers:t.headers}))}async emptyBucket(n){var e=this;return e.handleOperation(async()=>await gn(e.fetch,`${e.url}/bucket/${n}/empty`,{},{headers:e.headers}))}async deleteBucket(n){var e=this;return e.handleOperation(async()=>await Er(e.fetch,`${e.url}/bucket/${n}`,{},{headers:e.headers}))}async getBucketLifecycle(n){var e=this;return e.handleOperation(async()=>await br(e.fetch,e.bucketLifecycleUrl(n),{headers:e.headers}))}async updateBucketLifecycle(n,e){var t=this;return t.handleOperation(async()=>await Aa(t.fetch,t.bucketLifecycleUrl(n),e,{headers:t.headers}))}async deleteBucketLifecycle(n){var e=this;return e.handleOperation(async()=>await Er(e.fetch,e.bucketLifecycleUrl(n),{},{headers:e.headers}))}async purgeBucketCache(n,e,t){var i=this;return i.handleOperation(async()=>{const r=new URLSearchParams;e!=null&&e.transformations&&r.set("transformations","true");const s=r.toString();return await Er(i.fetch,`${i.url}/cdn/${Nl(n)}${s?`?${s}`:""}`,{},{headers:i.headers},t)})}bucketLifecycleUrl(n){return`${this.url}/bucket/${Nl(n)}/lifecycle`}listBucketOptionsToQueryString(n){const e={};return n&&("limit"in n&&(e.limit=String(n.limit)),"offset"in n&&(e.offset=String(n.offset)),n.search&&(e.search=n.search),n.sortColumn&&(e.sortColumn=n.sortColumn),n.sortOrder&&(e.sortOrder=n.sortOrder)),Object.keys(e).length>0?"?"+new URLSearchParams(e).toString():""}},lw=class extends Vr{constructor(n,e={},t){const i=n.replace(/\/$/,""),r=Ne(Ne({},Es),e);super(i,r,t,"storage")}async createBucket(n){var e=this;return e.handleOperation(async()=>await gn(e.fetch,`${e.url}/bucket`,{name:n},{headers:e.headers}))}async listBuckets(n){var e=this;return e.handleOperation(async()=>{const t=new URLSearchParams;(n==null?void 0:n.limit)!==void 0&&t.set("limit",n.limit.toString()),(n==null?void 0:n.offset)!==void 0&&t.set("offset",n.offset.toString()),n!=null&&n.sortColumn&&t.set("sortColumn",n.sortColumn),n!=null&&n.sortOrder&&t.set("sortOrder",n.sortOrder),n!=null&&n.search&&t.set("search",n.search);const i=t.toString(),r=i?`${e.url}/bucket?${i}`:`${e.url}/bucket`;return await br(e.fetch,r,{headers:e.headers})})}async deleteBucket(n){var e=this;return e.handleOperation(async()=>await Er(e.fetch,`${e.url}/bucket/${n}`,{},{headers:e.headers}))}from(n){var e=this;if(!Zy(n))throw new Va("Invalid bucket name: File, folder, and bucket names must follow AWS object key naming guidelines and should avoid the use of any other characters.");const t=new jy({baseUrl:this.url,catalogName:n,auth:{type:"custom",getHeaders:async()=>e.headers},fetch:this.fetch}),i=this.shouldThrowOnError;return new Proxy(t,{get(r,s){const a=r[s];return typeof a!="function"?a:async(...o)=>{try{return{data:await a.apply(r,o),error:null}}catch(l){if(i)throw l;return{data:null,error:l}}}}})}},cw=class extends Vr{constructor(n,e={},t){const i=n.replace(/\/$/,""),r=Ne(Ne({},Es),{},{"Content-Type":"application/json"},e);super(i,r,t,"vectors")}async createIndex(n){var e=this;return e.handleOperation(async()=>await nn.post(e.fetch,`${e.url}/CreateIndex`,n,{headers:e.headers})||{})}async getIndex(n,e){var t=this;return t.handleOperation(async()=>await nn.post(t.fetch,`${t.url}/GetIndex`,{vectorBucketName:n,indexName:e},{headers:t.headers}))}async listIndexes(n){var e=this;return e.handleOperation(async()=>await nn.post(e.fetch,`${e.url}/ListIndexes`,n,{headers:e.headers}))}async deleteIndex(n,e){var t=this;return t.handleOperation(async()=>await nn.post(t.fetch,`${t.url}/DeleteIndex`,{vectorBucketName:n,indexName:e},{headers:t.headers})||{})}},uw=class extends Vr{constructor(n,e={},t){const i=n.replace(/\/$/,""),r=Ne(Ne({},Es),{},{"Content-Type":"application/json"},e);super(i,r,t,"vectors")}async putVectors(n){var e=this;if(n.vectors.length<1||n.vectors.length>500)throw new Error("Vector batch size must be between 1 and 500 items");return e.handleOperation(async()=>await nn.post(e.fetch,`${e.url}/PutVectors`,n,{headers:e.headers})||{})}async getVectors(n){var e=this;return e.handleOperation(async()=>await nn.post(e.fetch,`${e.url}/GetVectors`,n,{headers:e.headers}))}async listVectors(n){var e=this;if(n.segmentCount!==void 0){if(n.segmentCount<1||n.segmentCount>16)throw new Error("segmentCount must be between 1 and 16");if(n.segmentIndex!==void 0&&(n.segmentIndex<0||n.segmentIndex>=n.segmentCount))throw new Error(`segmentIndex must be between 0 and ${n.segmentCount-1}`)}return e.handleOperation(async()=>await nn.post(e.fetch,`${e.url}/ListVectors`,n,{headers:e.headers}))}async queryVectors(n){var e=this;return e.handleOperation(async()=>await nn.post(e.fetch,`${e.url}/QueryVectors`,n,{headers:e.headers}))}async deleteVectors(n){var e=this;if(n.keys.length<1||n.keys.length>500)throw new Error("Keys batch size must be between 1 and 500 items");return e.handleOperation(async()=>await nn.post(e.fetch,`${e.url}/DeleteVectors`,n,{headers:e.headers})||{})}},hw=class extends Vr{constructor(n,e={},t){const i=n.replace(/\/$/,""),r=Ne(Ne({},Es),{},{"Content-Type":"application/json"},e);super(i,r,t,"vectors")}async createBucket(n){var e=this;return e.handleOperation(async()=>await nn.post(e.fetch,`${e.url}/CreateVectorBucket`,{vectorBucketName:n},{headers:e.headers})||{})}async getBucket(n){var e=this;return e.handleOperation(async()=>await nn.post(e.fetch,`${e.url}/GetVectorBucket`,{vectorBucketName:n},{headers:e.headers}))}async listBuckets(n={}){var e=this;return e.handleOperation(async()=>await nn.post(e.fetch,`${e.url}/ListVectorBuckets`,n,{headers:e.headers}))}async deleteBucket(n){var e=this;return e.handleOperation(async()=>await nn.post(e.fetch,`${e.url}/DeleteVectorBucket`,{vectorBucketName:n},{headers:e.headers})||{})}},dw=class extends hw{constructor(n,e={}){super(n,e.headers||{},e.fetch)}from(n){return new fw(this.url,this.headers,n,this.fetch)}async createBucket(n){var e=()=>super.createBucket,t=this;return e().call(t,n)}async getBucket(n){var e=()=>super.getBucket,t=this;return e().call(t,n)}async listBuckets(n={}){var e=()=>super.listBuckets,t=this;return e().call(t,n)}async deleteBucket(n){var e=()=>super.deleteBucket,t=this;return e().call(t,n)}},fw=class extends cw{constructor(n,e,t,i){super(n,e,i),this.vectorBucketName=t}async createIndex(n){var e=()=>super.createIndex,t=this;return e().call(t,Ne(Ne({},n),{},{vectorBucketName:t.vectorBucketName}))}async listIndexes(n={}){var e=()=>super.listIndexes,t=this;return e().call(t,Ne(Ne({},n),{},{vectorBucketName:t.vectorBucketName}))}async getIndex(n){var e=()=>super.getIndex,t=this;return e().call(t,t.vectorBucketName,n)}async deleteIndex(n){var e=()=>super.deleteIndex,t=this;return e().call(t,t.vectorBucketName,n)}index(n){return new pw(this.url,this.headers,this.vectorBucketName,n,this.fetch)}},pw=class extends uw{constructor(n,e,t,i,r){super(n,e,r),this.vectorBucketName=t,this.indexName=i}async putVectors(n){var e=()=>super.putVectors,t=this;return e().call(t,Ne(Ne({},n),{},{vectorBucketName:t.vectorBucketName,indexName:t.indexName}))}async getVectors(n){var e=()=>super.getVectors,t=this;return e().call(t,Ne(Ne({},n),{},{vectorBucketName:t.vectorBucketName,indexName:t.indexName}))}async listVectors(n={}){var e=()=>super.listVectors,t=this;return e().call(t,Ne(Ne({},n),{},{vectorBucketName:t.vectorBucketName,indexName:t.indexName}))}async queryVectors(n){var e=()=>super.queryVectors,t=this;return e().call(t,Ne(Ne({},n),{},{vectorBucketName:t.vectorBucketName,indexName:t.indexName}))}async deleteVectors(n){var e=()=>super.deleteVectors,t=this;return e().call(t,Ne(Ne({},n),{},{vectorBucketName:t.vectorBucketName,indexName:t.indexName}))}},mw=class extends ow{constructor(n,e={},t,i){super(n,e,t,i)}from(n){return new sw(this.url,this.headers,n,this.fetch)}get vectors(){return new dw(this.url+"/vector",{headers:this.headers,fetch:this.fetch})}get analytics(){return new lw(this.url+"/iceberg",this.headers,this.fetch)}};const Fd="2.118.0",jn=30*1e3,os=3,Po=os*jn,gw=2*jn,_w="http://localhost:9999",vw="supabase.auth.token",yw={"X-Client-Info":`gotrue-js/${Fd}`},Ol="X-Supabase-Api-Version",Bd={"2024-01-01":{timestamp:Date.parse("2024-01-01T00:00:00.0Z"),name:"2024-01-01"}},ww=/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i,Oi="sb_flow_id",xw=5,Sw=600*1e3;class _s extends Error{constructor(e,t,i){super(e),this.__isAuthError=!0,this.name="AuthError",this.status=t,this.code=i}toJSON(){return{name:this.name,message:this.message,status:this.status,code:this.code}}}function de(n){return typeof n=="object"&&n!==null&&"__isAuthError"in n}class bw extends _s{constructor(e,t,i){super(e,t,i),this.name="AuthApiError",this.status=t,this.code=i}}function Hu(n){return de(n)&&n.name==="AuthApiError"}class yn extends _s{constructor(e,t){super(e),this.name="AuthUnknownError",this.originalError=t}}class Ln extends _s{constructor(e,t,i,r){super(e,i,r),this.name=t,this.status=i}}class Pt extends Ln{constructor(){super("Auth session missing!","AuthSessionMissingError",400,void 0)}}function ea(n){return de(n)&&n.name==="AuthSessionMissingError"}class lr extends Ln{constructor(){super("Auth session or user missing","AuthInvalidTokenResponseError",500,void 0)}}class ta extends Ln{constructor(e){super(e,"AuthInvalidCredentialsError",400,void 0)}}class na extends Ln{constructor(e,t=null){super(e,"AuthImplicitGrantRedirectError",500,void 0),this.details=null,this.details=t}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{details:this.details})}}function Ew(n){return de(n)&&n.name==="AuthImplicitGrantRedirectError"}class Gu extends Ln{constructor(e,t=null){super(e,"AuthPKCEGrantCodeExchangeError",500,void 0),this.details=null,this.details=t}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{details:this.details})}}class Mw extends Ln{constructor(){super("PKCE code verifier not found in storage. This can happen if the auth flow was initiated in a different browser or device, or if the storage was cleared. For SSR frameworks (Next.js, SvelteKit, etc.), use @supabase/ssr on both the server and client to store the code verifier in cookies.","AuthPKCECodeVerifierMissingError",400,"pkce_code_verifier_not_found")}}class wa extends Ln{constructor(e,t){super(e,"AuthRetryableFetchError",t,void 0)}}function ia(n){return de(n)&&n.name==="AuthRetryableFetchError"}class Vu extends Ln{constructor(e="Refresh result discarded: session state changed mid-flight (e.g., concurrent signOut)"){super(e,"AuthRefreshDiscardedError",409,void 0)}}function Wu(n){return de(n)&&n.name==="AuthRefreshDiscardedError"}class ju extends Ln{constructor(e,t,i){super(e,"AuthWeakPasswordError",t,"weak_password"),this.reasons=i}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{reasons:this.reasons})}}class Ra extends Ln{constructor(e){super(e,"AuthInvalidJwtError",400,"invalid_jwt")}}const Ca="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(""),$u=` 	
\r=`.split(""),Tw=(()=>{const n=new Array(128);for(let e=0;e<n.length;e+=1)n[e]=-1;for(let e=0;e<$u.length;e+=1)n[$u[e].charCodeAt(0)]=-2;for(let e=0;e<Ca.length;e+=1)n[Ca[e].charCodeAt(0)]=e;return n})();function qu(n,e,t){if(n!==null)for(e.queue=e.queue<<8|n,e.queuedBits+=8;e.queuedBits>=6;){const i=e.queue>>e.queuedBits-6&63;t(Ca[i]),e.queuedBits-=6}else if(e.queuedBits>0)for(e.queue=e.queue<<6-e.queuedBits,e.queuedBits=6;e.queuedBits>=6;){const i=e.queue>>e.queuedBits-6&63;t(Ca[i]),e.queuedBits-=6}}function zd(n,e,t){const i=Tw[n];if(i>-1)for(e.queue=e.queue<<6|i,e.queuedBits+=6;e.queuedBits>=8;)t(e.queue>>e.queuedBits-8&255),e.queuedBits-=8;else{if(i===-2)return;throw new Error(`Invalid Base64-URL character "${String.fromCharCode(n)}"`)}}function Xu(n){const e=[],t=a=>{e.push(String.fromCodePoint(a))},i={utf8seq:0,codepoint:0},r={queue:0,queuedBits:0},s=a=>{Cw(a,i,t)};for(let a=0;a<n.length;a+=1)zd(n.charCodeAt(a),r,s);return e.join("")}function Aw(n,e){if(n<=127){e(n);return}else if(n<=2047){e(192|n>>6),e(128|n&63);return}else if(n<=65535){e(224|n>>12),e(128|n>>6&63),e(128|n&63);return}else if(n<=1114111){e(240|n>>18),e(128|n>>12&63),e(128|n>>6&63),e(128|n&63);return}throw new Error(`Unrecognized Unicode codepoint: ${n.toString(16)}`)}function Rw(n,e){for(let t=0;t<n.length;t+=1){let i=n.charCodeAt(t);if(i>55295&&i<=56319){const r=(i-55296)*1024&65535;i=(n.charCodeAt(t+1)-56320&65535|r)+65536,t+=1}Aw(i,e)}}function Cw(n,e,t){if(e.utf8seq===0){if(n<=127){t(n);return}for(let i=1;i<6;i+=1)if((n>>7-i&1)===0){e.utf8seq=i;break}if(e.utf8seq===2)e.codepoint=n&31;else if(e.utf8seq===3)e.codepoint=n&15;else if(e.utf8seq===4)e.codepoint=n&7;else throw new Error("Invalid UTF-8 sequence");e.utf8seq-=1}else if(e.utf8seq>0){if(n<=127)throw new Error("Invalid UTF-8 sequence");e.codepoint=e.codepoint<<6|n&63,e.utf8seq-=1,e.utf8seq===0&&t(e.codepoint)}}function Mr(n){const e=[],t={queue:0,queuedBits:0},i=r=>{e.push(r)};for(let r=0;r<n.length;r+=1)zd(n.charCodeAt(r),t,i);return new Uint8Array(e)}function Pw(n){const e=[];return Rw(n,t=>e.push(t)),new Uint8Array(e)}function ki(n){const e=[],t={queue:0,queuedBits:0},i=r=>{e.push(r)};return n.forEach(r=>qu(r,t,i)),qu(null,t,i),e.join("")}function Hd(n){return Math.round(Date.now()/1e3)+n}function Iw(){return Symbol("auth-callback")}const Lt=()=>typeof window<"u"&&typeof document<"u",Mi={tested:!1,writable:!1},Gd=()=>{if(!Lt())return!1;try{if(typeof globalThis.localStorage!="object")return!1}catch{return!1}if(Mi.tested)return Mi.writable;const n=`lswt-${Math.random()}${Math.random()}`;try{globalThis.localStorage.setItem(n,n),globalThis.localStorage.removeItem(n),Mi.tested=!0,Mi.writable=!0}catch{Mi.tested=!0,Mi.writable=!1}return Mi.writable};function Ku(n){const e={},t=new URL(n);if(t.hash&&t.hash[0]==="#")try{new URLSearchParams(t.hash.substring(1)).forEach((r,s)=>{e[s]=r})}catch{}return t.searchParams.forEach((i,r)=>{e[r]=i}),e}const Vd=n=>n?(...e)=>n(...e):(...e)=>fetch(...e),Lw=n=>typeof n=="object"&&n!==null&&"status"in n&&"ok"in n&&"json"in n&&typeof n.json=="function",$n=async(n,e,t)=>{await n.setItem(e,JSON.stringify(t))},Ot=async(n,e)=>{const t=await n.getItem(e);if(!t)return null;try{return JSON.parse(t)}catch{return null}},qt=async(n,e)=>{await n.removeItem(e)};class ja{constructor(){this.promise=new ja.promiseConstructor((e,t)=>{this.resolve=e,this.reject=t})}}ja.promiseConstructor=Promise;function ra(n){const e=n.split(".");if(e.length!==3)throw new Ra("Invalid JWT structure");for(let i=0;i<e.length;i++)if(!ww.test(e[i]))throw new Ra("JWT not in base64url format");return{header:JSON.parse(Xu(e[0])),payload:JSON.parse(Xu(e[1])),signature:Mr(e[2]),raw:{header:e[0],payload:e[1]}}}async function Dw(n){return await new Promise(e=>{setTimeout(()=>e(null),n)})}function Uw(n,e){return new Promise((i,r)=>{(async()=>{for(let s=0;s<1/0;s++)try{const a=await n(s);if(!e(s,null,a)){i(a);return}}catch(a){if(!e(s,a)){r(a);return}}})()})}function Wd(n){return("0"+n.toString(16)).substr(-2)}function Nw(){const e=new Uint32Array(56);if(typeof crypto>"u"){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",i=t.length;let r="";for(let s=0;s<56;s++)r+=t.charAt(Math.floor(Math.random()*i));return r}return crypto.getRandomValues(e),Array.from(e,Wd).join("")}async function Ow(n){const t=new TextEncoder().encode(n),i=await crypto.subtle.digest("SHA-256",t),r=new Uint8Array(i);return Array.from(r).map(s=>String.fromCharCode(s)).join("")}async function kw(n){if(!(typeof crypto<"u"&&typeof crypto.subtle<"u"&&typeof TextEncoder<"u"))return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."),n;const t=await Ow(n);return btoa(t).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}const Fw=/^[a-zA-Z0-9_-]{8,64}$/;function xa(n){return typeof n=="string"&&Fw.test(n)?n:null}function Bw(){if(typeof crypto<"u"&&typeof crypto.getRandomValues=="function"){const e=new Uint8Array(16);return crypto.getRandomValues(e),Array.from(e,Wd).join("")}let n="";for(let e=0;e<32;e++)n+=Math.floor(Math.random()*16).toString(16);return n}const Ur=(n,e)=>`${n}-flow-${e}-code-verifier`,vs=n=>`${n}-flows-code-verifier`;async function rc(n,e){const t=await Ot(n,vs(e));return Array.isArray(t)?t.filter(i=>xa(i)!==null):[]}async function zw(n,e,t,i,r){await $n(n,Ur(e,t),i);const s=(await rc(n,e)).filter(a=>a!==t);for(s.push(t);s.length>xw;){const a=s.shift();await qt(n,Ur(e,a)),r==null||r(a)}await $n(n,vs(e),s),await $n(n,`${e}-code-verifier`,i)}async function Hw(n,e,t){if(t){const r=await Ot(n,Ur(e,t));return{verifier:typeof r=="string"?r:null,flowId:t}}const i=await Ot(n,`${e}-code-verifier`);return{verifier:typeof i=="string"?i:null,flowId:null}}async function mn(n,e,t){const i=`${e}-code-verifier`;if(!t){await qt(n,i);return}const r=Ur(e,t),s=await Ot(n,r);await qt(n,r);const a=await rc(n,e),o=a.filter(l=>l!==t);o.length!==a.length&&(o.length>0?await $n(n,vs(e),o):await qt(n,vs(e))),s!=null&&s===await Ot(n,i)&&await qt(n,i)}async function Gw(n,e){const t=await rc(n,e);for(const i of t)await qt(n,Ur(e,i));await qt(n,vs(e)),await qt(n,`${e}-code-verifier`)}function Vw(n,e){const t=n.indexOf("#");let i=t===-1?n:n.slice(0,t);const r=t===-1?"":n.slice(t),s=i.indexOf("?");if(s!==-1){const o=i.slice(0,s),l=i.slice(s+1).split("&").filter(c=>c!==""&&c!==Oi&&!c.startsWith(`${Oi}=`));i=l.length>0?`${o}?${l.join("&")}`:o}const a=i.includes("?")?"&":"?";return`${i}${a}${Oi}=${encodeURIComponent(e)}${r}`}async function Ww(n,e,t=!1,i){const r=Nw();let s=r;t&&(s+="/recovery");const a=Bw();await zw(n,e,a,s,i);const o=await kw(r);return[o,r===o?"plain":"s256",a]}const jw=/^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;function $w(n){const e=n.headers.get(Ol);if(!e||!e.match(jw))return null;try{return new Date(`${e}T00:00:00.0Z`)}catch{return null}}function qw(n){if(!n)throw new Error("Missing exp claim");const e=Math.floor(Date.now()/1e3);if(n<=e)throw new Error("JWT has expired")}function Xw(n){switch(n){case"RS256":return{name:"RSASSA-PKCS1-v1_5",hash:{name:"SHA-256"}};case"ES256":return{name:"ECDSA",namedCurve:"P-256",hash:{name:"SHA-256"}};default:throw new Error("Invalid alg claim")}}const Kw=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;function zn(n){if(!Kw.test(n))throw new Error("@supabase/auth-js: Expected parameter to be UUID but is not")}function ts(n){if(!n.recoveryCodes)throw new Error("@supabase/auth-js: the MFA recovery codes API is experimental and disabled by default. Enable it by passing `auth: { experimental: { recoveryCodes: true } }` to createClient (or to the GoTrueClient constructor).")}function Io(){const n={};return new Proxy(n,{get:(e,t)=>{if(t==="__isUserNotAvailableProxy")return!0;if(typeof t=="symbol"){const i=t.toString();if(i==="Symbol(Symbol.toPrimitive)"||i==="Symbol(Symbol.toStringTag)"||i==="Symbol(util.inspect.custom)")return}throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${t}" property of the session object is not supported. Please use getUser() instead.`)},set:(e,t)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${t}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)},deleteProperty:(e,t)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${t}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)}})}function Yw(n,e){return new Proxy(n,{get:(t,i,r)=>{if(i==="__isInsecureUserWarningProxy")return!0;if(typeof i=="symbol"){const s=i.toString();if(s==="Symbol(Symbol.toPrimitive)"||s==="Symbol(Symbol.toStringTag)"||s==="Symbol(util.inspect.custom)"||s==="Symbol(nodejs.util.inspect.custom)")return Reflect.get(t,i,r)}return!e.value&&typeof i=="string"&&(console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."),e.value=!0),Reflect.get(t,i,r)}})}function Yu(n){return JSON.parse(JSON.stringify(n))}const Ci=n=>{if(typeof n=="object"&&n!==null){const e=n;if(typeof e.msg=="string")return e.msg;if(typeof e.message=="string")return e.message;if(typeof e.error_description=="string")return e.error_description;if(typeof e.error=="string")return e.error}return JSON.stringify(n)},Ju=[500,501,502,503,504,520,521,522,523,524,525,526,527,528,529,530];async function Zu(n){var e;if(!Lw(n))throw new wa(Ci(n),0);let t;try{t=await n.json()}catch(s){throw Ju.includes(n.status)?new wa(n.statusText||`HTTP ${n.status}`,n.status):new yn(Ci(s),s)}if(Ju.includes(n.status))throw new wa(Ci(t),n.status);let i;const r=$w(n);if(r&&r.getTime()>=Bd["2024-01-01"].timestamp&&typeof t=="object"&&t&&typeof t.code=="string"?i=t.code:typeof t=="object"&&t&&typeof t.error_code=="string"&&(i=t.error_code),i){if(i==="weak_password")throw new ju(Ci(t),n.status,((e=t.weak_password)===null||e===void 0?void 0:e.reasons)||[]);if(i==="session_not_found")throw new Pt}else if(typeof t=="object"&&t&&typeof t.weak_password=="object"&&t.weak_password&&Array.isArray(t.weak_password.reasons)&&t.weak_password.reasons.length&&t.weak_password.reasons.reduce((s,a)=>s&&typeof a=="string",!0))throw new ju(Ci(t),n.status,t.weak_password.reasons);throw new bw(Ci(t),n.status||500,i)}const Jw=(n,e,t,i)=>{const r={method:n,headers:(e==null?void 0:e.headers)||{}};return n==="GET"?r:(r.headers=Object.assign({"Content-Type":"application/json;charset=UTF-8"},e==null?void 0:e.headers),r.body=JSON.stringify(i),Object.assign(Object.assign({},r),t))};async function xe(n,e,t,i){var r;const s=Object.assign({},i==null?void 0:i.headers);s[Ol]||(s[Ol]=Bd["2024-01-01"].name),i!=null&&i.jwt&&(s.Authorization=`Bearer ${i.jwt}`);const a=(r=i==null?void 0:i.query)!==null&&r!==void 0?r:{};i!=null&&i.redirectTo&&(a.redirect_to=i.redirectTo);const o=Object.keys(a).length?"?"+new URLSearchParams(a).toString():"",l=await Zw(n,e,t+o,{headers:s,noResolveJson:i==null?void 0:i.noResolveJson},{},i==null?void 0:i.body);return i!=null&&i.xform?i==null?void 0:i.xform(l):{data:Object.assign({},l),error:null}}async function Zw(n,e,t,i,r,s){const a=Jw(e,i,r,s);let o;try{o=await n(t,Object.assign({},a))}catch(l){throw new wa(Ci(l),0)}if(o.ok||await Zu(o),i!=null&&i.noResolveJson)return o;try{return await o.json()}catch(l){await Zu(l)}}function un(n){var e;let t=null;tx(n)&&(t=Object.assign({},n),n.expires_at||(t.expires_at=Hd(n.expires_in)));const i=(e=n.user)!==null&&e!==void 0?e:typeof(n==null?void 0:n.id)=="string"?n:null;return{data:{session:t,user:i},error:null}}function Qu(n){const e=un(n);return!e.error&&n.weak_password&&typeof n.weak_password=="object"&&Array.isArray(n.weak_password.reasons)&&n.weak_password.reasons.length&&n.weak_password.message&&typeof n.weak_password.message=="string"&&n.weak_password.reasons.reduce((t,i)=>t&&typeof i=="string",!0)&&(e.data.weak_password=n.weak_password),e}function di(n){var e;return{data:{user:(e=n.user)!==null&&e!==void 0?e:n},error:null}}function Qw(n){return{data:n,error:null}}function ex(n){const{action_link:e,email_otp:t,hashed_token:i,redirect_to:r,verification_type:s}=n,a=Ga(n,["action_link","email_otp","hashed_token","redirect_to","verification_type"]),o={action_link:e,email_otp:t,hashed_token:i,redirect_to:r,verification_type:s},l=Object.assign({},a);return{data:{properties:o,user:l},error:null}}function eh(n){return n}function tx(n){return!!n.access_token&&!!n.refresh_token&&!!n.expires_in}const Lo=["global","local","others"];class nx{constructor({url:e="",headers:t={},fetch:i,experimental:r}){this.url=e,this.headers=t,this.fetch=Vd(i),this.experimental=r??{},this.mfa={listFactors:this._listFactors.bind(this),deleteFactor:this._deleteFactor.bind(this)},this.oauth={listClients:this._listOAuthClients.bind(this),createClient:this._createOAuthClient.bind(this),getClient:this._getOAuthClient.bind(this),updateClient:this._updateOAuthClient.bind(this),deleteClient:this._deleteOAuthClient.bind(this),regenerateClientSecret:this._regenerateOAuthClientSecret.bind(this)},this.customProviders={listProviders:this._listCustomProviders.bind(this),createProvider:this._createCustomProvider.bind(this),getProvider:this._getCustomProvider.bind(this),updateProvider:this._updateCustomProvider.bind(this),deleteProvider:this._deleteCustomProvider.bind(this)},this.passkey={listPasskeys:this._adminListPasskeys.bind(this),deletePasskey:this._adminDeletePasskey.bind(this)}}async signOut(e,t=Lo[0]){if(Lo.indexOf(t)<0)throw new Error(`@supabase/auth-js: Parameter scope must be one of ${Lo.join(", ")}`);try{return await xe(this.fetch,"POST",`${this.url}/logout?scope=${t}`,{headers:this.headers,jwt:e,noResolveJson:!0}),{data:null,error:null}}catch(i){if(de(i))return{data:null,error:i};throw i}}async inviteUserByEmail(e,t={}){try{return await xe(this.fetch,"POST",`${this.url}/invite`,{body:{email:e,data:t.data},headers:this.headers,redirectTo:t.redirectTo,xform:di})}catch(i){if(de(i))return{data:{user:null},error:i};throw i}}async generateLink(e){try{const{options:t}=e,i=Ga(e,["options"]),r=Object.assign(Object.assign({},i),t);return"newEmail"in i&&(r.new_email=i==null?void 0:i.newEmail,delete r.newEmail),await xe(this.fetch,"POST",`${this.url}/admin/generate_link`,{body:r,headers:this.headers,xform:ex,redirectTo:t==null?void 0:t.redirectTo})}catch(t){if(de(t))return{data:{properties:null,user:null},error:t};throw t}}async createUser(e){try{return await xe(this.fetch,"POST",`${this.url}/admin/users`,{body:e,headers:this.headers,xform:di})}catch(t){if(de(t))return{data:{user:null},error:t};throw t}}async listUsers(e){var t,i,r,s,a,o,l;try{const c={nextPage:null,lastPage:0,total:0},u=await xe(this.fetch,"GET",`${this.url}/admin/users`,{headers:this.headers,noResolveJson:!0,query:{page:(i=(t=e==null?void 0:e.page)===null||t===void 0?void 0:t.toString())!==null&&i!==void 0?i:"",per_page:(s=(r=e==null?void 0:e.perPage)===null||r===void 0?void 0:r.toString())!==null&&s!==void 0?s:""},xform:eh});if(u.error)throw u.error;const h=await u.json(),d=(a=u.headers.get("x-total-count"))!==null&&a!==void 0?a:0,f=(l=(o=u.headers.get("link"))===null||o===void 0?void 0:o.split(","))!==null&&l!==void 0?l:[];return f.length>0&&(f.forEach(g=>{const _=parseInt(g.split(";")[0].split("=")[1].substring(0,1)),m=JSON.parse(g.split(";")[1].split("=")[1]);c[`${m}Page`]=_}),c.total=parseInt(d)),{data:Object.assign(Object.assign({},h),c),error:null}}catch(c){if(de(c))return{data:{users:[]},error:c};throw c}}async getUserById(e){zn(e);try{return await xe(this.fetch,"GET",`${this.url}/admin/users/${e}`,{headers:this.headers,xform:di})}catch(t){if(de(t))return{data:{user:null},error:t};throw t}}async updateUserById(e,t){zn(e);try{return await xe(this.fetch,"PUT",`${this.url}/admin/users/${e}`,{body:t,headers:this.headers,xform:di})}catch(i){if(de(i))return{data:{user:null},error:i};throw i}}async deleteUser(e,t=!1){zn(e);try{return await xe(this.fetch,"DELETE",`${this.url}/admin/users/${e}`,{headers:this.headers,body:{should_soft_delete:t},xform:di})}catch(i){if(de(i))return{data:{user:null},error:i};throw i}}async _listFactors(e){zn(e.userId);try{const{data:t,error:i}=await xe(this.fetch,"GET",`${this.url}/admin/users/${e.userId}/factors`,{headers:this.headers,xform:r=>({data:{factors:r},error:null})});return{data:t,error:i}}catch(t){if(de(t))return{data:null,error:t};throw t}}async _deleteFactor(e){zn(e.userId),zn(e.id);try{return{data:await xe(this.fetch,"DELETE",`${this.url}/admin/users/${e.userId}/factors/${e.id}`,{headers:this.headers}),error:null}}catch(t){if(de(t))return{data:null,error:t};throw t}}async _listOAuthClients(e){var t,i,r,s,a,o,l;try{const c={nextPage:null,lastPage:0,total:0},u=await xe(this.fetch,"GET",`${this.url}/admin/oauth/clients`,{headers:this.headers,noResolveJson:!0,query:{page:(i=(t=e==null?void 0:e.page)===null||t===void 0?void 0:t.toString())!==null&&i!==void 0?i:"",per_page:(s=(r=e==null?void 0:e.perPage)===null||r===void 0?void 0:r.toString())!==null&&s!==void 0?s:""},xform:eh});if(u.error)throw u.error;const h=await u.json(),d=(a=u.headers.get("x-total-count"))!==null&&a!==void 0?a:0,f=(l=(o=u.headers.get("link"))===null||o===void 0?void 0:o.split(","))!==null&&l!==void 0?l:[];return f.length>0&&(f.forEach(g=>{const _=parseInt(g.split(";")[0].split("=")[1].substring(0,1)),m=JSON.parse(g.split(";")[1].split("=")[1]);c[`${m}Page`]=_}),c.total=parseInt(d)),{data:Object.assign(Object.assign({},h),c),error:null}}catch(c){if(de(c))return{data:{clients:[]},error:c};throw c}}async _createOAuthClient(e){try{return await xe(this.fetch,"POST",`${this.url}/admin/oauth/clients`,{body:e,headers:this.headers,xform:t=>({data:t,error:null})})}catch(t){if(de(t))return{data:null,error:t};throw t}}async _getOAuthClient(e){try{return await xe(this.fetch,"GET",`${this.url}/admin/oauth/clients/${e}`,{headers:this.headers,xform:t=>({data:t,error:null})})}catch(t){if(de(t))return{data:null,error:t};throw t}}async _updateOAuthClient(e,t){try{return await xe(this.fetch,"PUT",`${this.url}/admin/oauth/clients/${e}`,{body:t,headers:this.headers,xform:i=>({data:i,error:null})})}catch(i){if(de(i))return{data:null,error:i};throw i}}async _deleteOAuthClient(e){try{return await xe(this.fetch,"DELETE",`${this.url}/admin/oauth/clients/${e}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(t){if(de(t))return{data:null,error:t};throw t}}async _regenerateOAuthClientSecret(e){try{return await xe(this.fetch,"POST",`${this.url}/admin/oauth/clients/${e}/regenerate_secret`,{headers:this.headers,xform:t=>({data:t,error:null})})}catch(t){if(de(t))return{data:null,error:t};throw t}}async _listCustomProviders(e){try{const t={};return e!=null&&e.type&&(t.type=e.type),await xe(this.fetch,"GET",`${this.url}/admin/custom-providers`,{headers:this.headers,query:t,xform:i=>{var r;return{data:{providers:(r=i==null?void 0:i.providers)!==null&&r!==void 0?r:[]},error:null}}})}catch(t){if(de(t))return{data:{providers:[]},error:t};throw t}}async _createCustomProvider(e){try{return await xe(this.fetch,"POST",`${this.url}/admin/custom-providers`,{body:e,headers:this.headers,xform:t=>({data:t,error:null})})}catch(t){if(de(t))return{data:null,error:t};throw t}}async _getCustomProvider(e){try{return await xe(this.fetch,"GET",`${this.url}/admin/custom-providers/${e}`,{headers:this.headers,xform:t=>({data:t,error:null})})}catch(t){if(de(t))return{data:null,error:t};throw t}}async _updateCustomProvider(e,t){try{return await xe(this.fetch,"PUT",`${this.url}/admin/custom-providers/${e}`,{body:t,headers:this.headers,xform:i=>({data:i,error:null})})}catch(i){if(de(i))return{data:null,error:i};throw i}}async _deleteCustomProvider(e){try{return await xe(this.fetch,"DELETE",`${this.url}/admin/custom-providers/${e}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(t){if(de(t))return{data:null,error:t};throw t}}async _adminListPasskeys(e){zn(e.userId);try{return await xe(this.fetch,"GET",`${this.url}/admin/users/${e.userId}/passkeys`,{headers:this.headers,xform:t=>({data:t,error:null})})}catch(t){if(de(t))return{data:null,error:t};throw t}}async _adminDeletePasskey(e){zn(e.userId),zn(e.passkeyId);try{return await xe(this.fetch,"DELETE",`${this.url}/admin/users/${e.userId}/passkeys/${e.passkeyId}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(t){if(de(t))return{data:null,error:t};throw t}}}function th(n={}){return{getItem:e=>n[e]||null,setItem:(e,t)=>{n[e]=t},removeItem:e=>{delete n[e]}}}globalThis&&Gd()&&globalThis.localStorage&&globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug");class ix extends Error{constructor(e){super(e),this.isAcquireTimeout=!0}}function rx(){if(typeof globalThis!="object")try{Object.defineProperty(Object.prototype,"__magic__",{get:function(){return this},configurable:!0}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__}catch{typeof self<"u"&&(self.globalThis=self)}}function jd(n){if(!/^0x[a-fA-F0-9]{40}$/.test(n))throw new Error(`@supabase/auth-js: Address "${n}" is invalid.`);return n.toLowerCase()}function sx(n){return parseInt(n,16)}function ax(n){const e=new TextEncoder().encode(n);return"0x"+Array.from(e,i=>i.toString(16).padStart(2,"0")).join("")}function ox(n){var e;const{chainId:t,domain:i,expirationTime:r,issuedAt:s=new Date,nonce:a,notBefore:o,requestId:l,resources:c,scheme:u,uri:h,version:d}=n;{if(!Number.isInteger(t))throw new Error(`@supabase/auth-js: Invalid SIWE message field "chainId". Chain ID must be a EIP-155 chain ID. Provided value: ${t}`);if(!i)throw new Error('@supabase/auth-js: Invalid SIWE message field "domain". Domain must be provided.');if(a&&a.length<8)throw new Error(`@supabase/auth-js: Invalid SIWE message field "nonce". Nonce must be at least 8 characters. Provided value: ${a}`);if(!h)throw new Error('@supabase/auth-js: Invalid SIWE message field "uri". URI must be provided.');if(d!=="1")throw new Error(`@supabase/auth-js: Invalid SIWE message field "version". Version must be '1'. Provided value: ${d}`);if(!((e=n.statement)===null||e===void 0)&&e.includes(`
`))throw new Error(`@supabase/auth-js: Invalid SIWE message field "statement". Statement must not include '\\n'. Provided value: ${n.statement}`)}const f=jd(n.address),g=u?`${u}://${i}`:i,_=n.statement?`${n.statement}
`:"",m=`${g} wants you to sign in with your Ethereum account:
${f}

${_}`;let p=`URI: ${h}
Version: ${d}
Chain ID: ${t}${a?`
Nonce: ${a}`:""}
Issued At: ${s.toISOString()}`;if(r&&(p+=`
Expiration Time: ${r.toISOString()}`),o&&(p+=`
Not Before: ${o.toISOString()}`),l&&(p+=`
Request ID: ${l}`),c){let y=`
Resources:`;for(const v of c){if(!v||typeof v!="string")throw new Error(`@supabase/auth-js: Invalid SIWE message field "resources". Every resource must be a valid string. Provided value: ${v}`);y+=`
- ${v}`}p+=y}return`${m}
${p}`}class Et extends Error{constructor({message:e,code:t,cause:i,name:r}){var s;super(e,{cause:i}),this.__isWebAuthnError=!0,this.name=(s=r??(i instanceof Error?i.name:void 0))!==null&&s!==void 0?s:"Unknown Error",this.code=t}toJSON(){return{name:this.name,message:this.message,code:this.code}}}class Pa extends Et{constructor(e,t){super({code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:t,message:e}),this.name="WebAuthnUnknownError",this.originalError=t}}function lx({error:n,options:e}){var t,i,r;const{publicKey:s}=e;if(!s)throw Error("options was missing required publicKey property");if(n.name==="AbortError"){if(e.signal instanceof AbortSignal)return new Et({message:"Registration ceremony was sent an abort signal",code:"ERROR_CEREMONY_ABORTED",cause:n})}else if(n.name==="ConstraintError"){if(((t=s.authenticatorSelection)===null||t===void 0?void 0:t.requireResidentKey)===!0)return new Et({message:"Discoverable credentials were required but no available authenticator supported it",code:"ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT",cause:n});if(e.mediation==="conditional"&&((i=s.authenticatorSelection)===null||i===void 0?void 0:i.userVerification)==="required")return new Et({message:"User verification was required during automatic registration but it could not be performed",code:"ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE",cause:n});if(((r=s.authenticatorSelection)===null||r===void 0?void 0:r.userVerification)==="required")return new Et({message:"User verification was required but no available authenticator supported it",code:"ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT",cause:n})}else{if(n.name==="InvalidStateError")return new Et({message:"The authenticator was previously registered",code:"ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED",cause:n});if(n.name==="NotAllowedError")return new Et({message:n.message,code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:n});if(n.name==="NotSupportedError")return s.pubKeyCredParams.filter(o=>o.type==="public-key").length===0?new Et({message:'No entry in pubKeyCredParams was of type "public-key"',code:"ERROR_MALFORMED_PUBKEYCREDPARAMS",cause:n}):new Et({message:"No available authenticator supported any of the specified pubKeyCredParams algorithms",code:"ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG",cause:n});if(n.name==="SecurityError"){const a=window.location.hostname;if($d(a)){if(s.rp.id!==a)return new Et({message:`The RP ID "${s.rp.id}" is invalid for this domain`,code:"ERROR_INVALID_RP_ID",cause:n})}else return new Et({message:`${window.location.hostname} is an invalid domain`,code:"ERROR_INVALID_DOMAIN",cause:n})}else if(n.name==="TypeError"){if(s.user.id.byteLength<1||s.user.id.byteLength>64)return new Et({message:"User ID was not between 1 and 64 characters",code:"ERROR_INVALID_USER_ID_LENGTH",cause:n})}else if(n.name==="UnknownError")return new Et({message:"The authenticator was unable to process the specified options, or could not create a new credential",code:"ERROR_AUTHENTICATOR_GENERAL_ERROR",cause:n})}return new Et({message:"a Non-Webauthn related error has occurred",code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:n})}function cx({error:n,options:e}){const{publicKey:t}=e;if(!t)throw Error("options was missing required publicKey property");if(n.name==="AbortError"){if(e.signal instanceof AbortSignal)return new Et({message:"Authentication ceremony was sent an abort signal",code:"ERROR_CEREMONY_ABORTED",cause:n})}else{if(n.name==="NotAllowedError")return new Et({message:n.message,code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:n});if(n.name==="SecurityError"){const i=window.location.hostname;if($d(i)){if(t.rpId!==i)return new Et({message:`The RP ID "${t.rpId}" is invalid for this domain`,code:"ERROR_INVALID_RP_ID",cause:n})}else return new Et({message:`${window.location.hostname} is an invalid domain`,code:"ERROR_INVALID_DOMAIN",cause:n})}else if(n.name==="UnknownError")return new Et({message:"The authenticator was unable to process the specified options, or could not create a new assertion signature",code:"ERROR_AUTHENTICATOR_GENERAL_ERROR",cause:n})}return new Et({message:"a Non-Webauthn related error has occurred",code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:n})}class ux{createNewAbortSignal(){if(this.controller){const t=new Error("Cancelling existing WebAuthn API call for new one");t.name="AbortError",this.controller.abort(t)}const e=new AbortController;return this.controller=e,e.signal}cancelCeremony(){if(this.controller){const e=new Error("Manually cancelling existing WebAuthn API call");e.name="AbortError",this.controller.abort(e),this.controller=void 0}}}const kl=new ux;function nh(n){if(!n)throw new Error("Credential creation options are required");if(typeof PublicKeyCredential<"u"&&"parseCreationOptionsFromJSON"in PublicKeyCredential&&typeof PublicKeyCredential.parseCreationOptionsFromJSON=="function")return PublicKeyCredential.parseCreationOptionsFromJSON(n);const{challenge:e,user:t,excludeCredentials:i}=n,r=Ga(n,["challenge","user","excludeCredentials"]),s=Mr(e).buffer,a=Object.assign(Object.assign({},t),{id:Mr(t.id).buffer}),o=Object.assign(Object.assign({},r),{challenge:s,user:a});if(i&&i.length>0){o.excludeCredentials=new Array(i.length);for(let l=0;l<i.length;l++){const c=i[l];o.excludeCredentials[l]=Object.assign(Object.assign({},c),{id:Mr(c.id).buffer,type:c.type||"public-key",transports:c.transports})}}return o}function ih(n){if(!n)throw new Error("Credential request options are required");if(typeof PublicKeyCredential<"u"&&"parseRequestOptionsFromJSON"in PublicKeyCredential&&typeof PublicKeyCredential.parseRequestOptionsFromJSON=="function")return PublicKeyCredential.parseRequestOptionsFromJSON(n);const{challenge:e,allowCredentials:t}=n,i=Ga(n,["challenge","allowCredentials"]),r=Mr(e).buffer,s=Object.assign(Object.assign({},i),{challenge:r});if(t&&t.length>0){s.allowCredentials=new Array(t.length);for(let a=0;a<t.length;a++){const o=t[a];s.allowCredentials[a]=Object.assign(Object.assign({},o),{id:Mr(o.id).buffer,type:o.type||"public-key",transports:o.transports})}}return s}function rh(n){var e;if("toJSON"in n&&typeof n.toJSON=="function")return n.toJSON();const t=n;return{id:n.id,rawId:n.id,response:{attestationObject:ki(new Uint8Array(n.response.attestationObject)),clientDataJSON:ki(new Uint8Array(n.response.clientDataJSON))},type:"public-key",clientExtensionResults:n.getClientExtensionResults(),authenticatorAttachment:(e=t.authenticatorAttachment)!==null&&e!==void 0?e:void 0}}function sh(n){var e;if("toJSON"in n&&typeof n.toJSON=="function")return n.toJSON();const t=n,i=n.getClientExtensionResults(),r=n.response;return{id:n.id,rawId:n.id,response:{authenticatorData:ki(new Uint8Array(r.authenticatorData)),clientDataJSON:ki(new Uint8Array(r.clientDataJSON)),signature:ki(new Uint8Array(r.signature)),userHandle:r.userHandle?ki(new Uint8Array(r.userHandle)):void 0},type:"public-key",clientExtensionResults:i,authenticatorAttachment:(e=t.authenticatorAttachment)!==null&&e!==void 0?e:void 0}}function $d(n){return n==="localhost"||/^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(n)}function Ia(){var n,e;return!!(Lt()&&"PublicKeyCredential"in window&&window.PublicKeyCredential&&"credentials"in navigator&&typeof((n=navigator==null?void 0:navigator.credentials)===null||n===void 0?void 0:n.create)=="function"&&typeof((e=navigator==null?void 0:navigator.credentials)===null||e===void 0?void 0:e.get)=="function")}async function qd(n){try{const e=await navigator.credentials.create(n);return e?e instanceof PublicKeyCredential?{data:e,error:null}:{data:null,error:new Pa("Browser returned unexpected credential type",e)}:{data:null,error:new Pa("Empty credential response",e)}}catch(e){return{data:null,error:lx({error:e,options:n})}}}async function Xd(n){try{const e=await navigator.credentials.get(n);return e?e instanceof PublicKeyCredential?{data:e,error:null}:{data:null,error:new Pa("Browser returned unexpected credential type",e)}:{data:null,error:new Pa("Empty credential response",e)}}catch(e){return{data:null,error:cx({error:e,options:n})}}}const hx={hints:["security-key"],authenticatorSelection:{authenticatorAttachment:"cross-platform",requireResidentKey:!1,userVerification:"preferred",residentKey:"discouraged"},attestation:"direct"},dx={userVerification:"preferred",hints:["security-key"],attestation:"direct"};function La(...n){const e=r=>r!==null&&typeof r=="object"&&!Array.isArray(r),t=r=>r instanceof ArrayBuffer||ArrayBuffer.isView(r),i={};for(const r of n)if(r)for(const s in r){const a=r[s];if(a!==void 0)if(Array.isArray(a))i[s]=a;else if(t(a))i[s]=a;else if(e(a)){const o=i[s];e(o)?i[s]=La(o,a):i[s]=La(a)}else i[s]=a}return i}function fx(n,e){return La(hx,n,e||{})}function px(n,e){return La(dx,n,e||{})}class mx{constructor(e){this.client=e,this.enroll=this._enroll.bind(this),this.challenge=this._challenge.bind(this),this.verify=this._verify.bind(this),this.authenticate=this._authenticate.bind(this),this.register=this._register.bind(this)}async _enroll(e){return this.client.mfa.enroll(Object.assign(Object.assign({},e),{factorType:"webauthn"}))}async _challenge({factorId:e,webauthn:t,friendlyName:i,signal:r},s){var a;try{const{data:o,error:l}=await this.client.mfa.challenge({factorId:e,webauthn:t});if(!o)return{data:null,error:l};const c=r??kl.createNewAbortSignal();if(o.webauthn.type==="create"){const{user:u}=o.webauthn.credential_options.publicKey;if(!u.name){const h=i;if(h)u.name=`${u.id}:${h}`;else{const f=(await this.client.getUser()).data.user,g=((a=f==null?void 0:f.user_metadata)===null||a===void 0?void 0:a.name)||(f==null?void 0:f.email)||(f==null?void 0:f.id)||"User";u.name=`${u.id}:${g}`}}u.displayName||(u.displayName=u.name)}switch(o.webauthn.type){case"create":{const u=fx(o.webauthn.credential_options.publicKey,s==null?void 0:s.create),{data:h,error:d}=await qd({publicKey:u,signal:c});return h?{data:{factorId:e,challengeId:o.id,webauthn:{type:o.webauthn.type,credential_response:h}},error:null}:{data:null,error:d}}case"request":{const u=px(o.webauthn.credential_options.publicKey,s==null?void 0:s.request),{data:h,error:d}=await Xd(Object.assign(Object.assign({},o.webauthn.credential_options),{publicKey:u,signal:c}));return h?{data:{factorId:e,challengeId:o.id,webauthn:{type:o.webauthn.type,credential_response:h}},error:null}:{data:null,error:d}}}}catch(o){return de(o)?{data:null,error:o}:{data:null,error:new yn("Unexpected error in challenge",o)}}}async _verify({challengeId:e,factorId:t,webauthn:i}){return this.client.mfa.verify({factorId:t,challengeId:e,webauthn:i})}async _authenticate({factorId:e,webauthn:{rpId:t=typeof window<"u"?window.location.hostname:void 0,rpOrigins:i=typeof window<"u"?[window.location.origin]:void 0,signal:r}={}},s){if(!t)return{data:null,error:new _s("rpId is required for WebAuthn authentication")};try{if(!Ia())return{data:null,error:new yn("Browser does not support WebAuthn",null)};const{data:a,error:o}=await this.challenge({factorId:e,webauthn:{rpId:t,rpOrigins:i},signal:r},{request:s});if(!a)return{data:null,error:o};const{webauthn:l}=a;return this._verify({factorId:e,challengeId:a.challengeId,webauthn:{type:l.type,rpId:t,rpOrigins:i,credential_response:l.credential_response}})}catch(a){return de(a)?{data:null,error:a}:{data:null,error:new yn("Unexpected error in authenticate",a)}}}async _register({friendlyName:e,webauthn:{rpId:t=typeof window<"u"?window.location.hostname:void 0,rpOrigins:i=typeof window<"u"?[window.location.origin]:void 0,signal:r}={}},s){if(!t)return{data:null,error:new _s("rpId is required for WebAuthn registration")};try{if(!Ia())return{data:null,error:new yn("Browser does not support WebAuthn",null)};const{data:a,error:o}=await this._enroll({friendlyName:e});if(!a)return await this.client.mfa.listFactors().then(u=>{var h;return(h=u.data)===null||h===void 0?void 0:h.all.find(d=>d.factor_type==="webauthn"&&d.friendly_name===e&&d.status==="unverified")}).then(u=>u?this.client.mfa.unenroll({factorId:u==null?void 0:u.id}):void 0),{data:null,error:o};const{data:l,error:c}=await this._challenge({factorId:a.id,friendlyName:a.friendly_name,webauthn:{rpId:t,rpOrigins:i},signal:r},{create:s});return l?this._verify({factorId:a.id,challengeId:l.challengeId,webauthn:{rpId:t,rpOrigins:i,type:l.webauthn.type,credential_response:l.webauthn.credential_response}}):{data:null,error:c}}catch(a){return de(a)?{data:null,error:a}:{data:null,error:new yn("Unexpected error in register",a)}}}}rx();const gx={url:_w,storageKey:vw,autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,headers:yw,flowType:"implicit",debug:!1,hasCustomAuthorizationHeader:!1,throwOnError:!1,lockAcquireTimeout:5e3,skipAutoInitialize:!1,experimental:{}},cr={};let ah=!1;class ys{get jwks(){var e,t;return(t=(e=cr[this.storageKey])===null||e===void 0?void 0:e.jwks)!==null&&t!==void 0?t:{keys:[]}}set jwks(e){cr[this.storageKey]=Object.assign(Object.assign({},cr[this.storageKey]),{jwks:e})}get jwks_cached_at(){var e,t;return(t=(e=cr[this.storageKey])===null||e===void 0?void 0:e.cachedAt)!==null&&t!==void 0?t:Number.MIN_SAFE_INTEGER}set jwks_cached_at(e){cr[this.storageKey]=Object.assign(Object.assign({},cr[this.storageKey]),{cachedAt:e})}constructor(e){var t,i,r;this.userStorage=null,this.memoryStorage=null,this.stateChangeEmitters=new Map,this.autoRefreshTicker=null,this.autoRefreshTickTimeout=null,this.visibilityChangedCallback=null,this.refreshingDeferred=null,this.lastRefreshFailure=null,this._sessionRemovalEpoch=0,this.initializePromise=null,this._pendingInitNotifications=null,this.detectSessionInUrl=!0,this.hasCustomAuthorizationHeader=!1,this.suppressGetSessionWarning=!1,this.lock=null,this.lockAcquired=!1,this.pendingInLock=[],this.broadcastChannel=null,this.logger=console.log;const s=Object.assign(Object.assign({},gx),e);if(this.storageKey=s.storageKey,this.instanceID=(t=ys.nextInstanceID[this.storageKey])!==null&&t!==void 0?t:0,ys.nextInstanceID[this.storageKey]=this.instanceID+1,this.logDebugMessages=!!s.debug,typeof s.debug=="function"&&(this.logger=s.debug),this.instanceID>0&&Lt()){const a=`${this._logPrefix()} Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.`;console.warn(a),this.logDebugMessages&&console.trace(a)}if(this.persistSession=s.persistSession,this.autoRefreshToken=s.autoRefreshToken,this.experimental=(i=s.experimental)!==null&&i!==void 0?i:{},this.admin=new nx({url:s.url,headers:s.headers,fetch:s.fetch,experimental:this.experimental}),this.url=s.url,this.headers=s.headers,this.fetch=Vd(s.fetch),this.detectSessionInUrl=s.detectSessionInUrl,this.flowType=s.flowType,this.hasCustomAuthorizationHeader=s.hasCustomAuthorizationHeader,this.throwOnError=s.throwOnError,this.lockAcquireTimeout=s.lockAcquireTimeout,s.lock!=null&&(this.lock=s.lock,ah||(ah=!0,console.warn(`${this._logPrefix()} The "lock" option is deprecated and will be removed in v3. The client now coordinates session refreshes without a lock, so most apps can drop the option. See https://github.com/supabase/supabase-js/blob/master/packages/core/auth-js/migrations/lockless-coordination.md`))),this.jwks||(this.jwks={keys:[]},this.jwks_cached_at=Number.MIN_SAFE_INTEGER),this.mfa={verify:this._verify.bind(this),enroll:this._enroll.bind(this),unenroll:this._unenroll.bind(this),challenge:this._challenge.bind(this),listFactors:this._listFactors.bind(this),challengeAndVerify:this._challengeAndVerify.bind(this),getAuthenticatorAssuranceLevel:this._getAuthenticatorAssuranceLevel.bind(this),webauthn:new mx(this),recoveryCodes:{getStatus:this._getRecoveryCodesStatus.bind(this),generate:this._generateRecoveryCodes.bind(this),verify:this._verifyRecoveryCode.bind(this),regenerate:this._regenerateRecoveryCodes.bind(this),unenroll:this._unenrollRecoveryCodes.bind(this)}},this.oauth={getAuthorizationDetails:this._getAuthorizationDetails.bind(this),approveAuthorization:this._approveAuthorization.bind(this),denyAuthorization:this._denyAuthorization.bind(this),listGrants:this._listOAuthGrants.bind(this),revokeGrant:this._revokeOAuthGrant.bind(this)},this.passkey={startRegistration:this._startPasskeyRegistration.bind(this),verifyRegistration:this._verifyPasskeyRegistration.bind(this),startAuthentication:this._startPasskeyAuthentication.bind(this),verifyAuthentication:this._verifyPasskeyAuthentication.bind(this),list:this._listPasskeys.bind(this),update:this._updatePasskey.bind(this),delete:this._deletePasskey.bind(this)},this.persistSession?(s.storage?this.storage=s.storage:Gd()?this.storage=globalThis.localStorage:(this.memoryStorage={},this.storage=th(this.memoryStorage)),s.userStorage&&(this.userStorage=s.userStorage)):(this.memoryStorage={},this.storage=th(this.memoryStorage)),Lt()&&globalThis.BroadcastChannel&&this.persistSession&&this.storageKey){try{this.broadcastChannel=new globalThis.BroadcastChannel(this.storageKey)}catch(a){console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available",a)}(r=this.broadcastChannel)===null||r===void 0||r.addEventListener("message",async a=>{this._debug("received broadcast notification from other tab or client",a),(a.data.event==="TOKEN_REFRESHED"||a.data.event==="SIGNED_IN")&&(this.lastRefreshFailure=null);try{await this._notifyAllSubscribers(a.data.event,a.data.session,!1)}catch(o){this._debug("#broadcastChannel","error",o)}})}s.skipAutoInitialize||this.initialize().catch(a=>{this._debug("#initialize()","error",a)})}isThrowOnErrorEnabled(){return this.throwOnError}_returnResult(e){if(this.throwOnError&&e&&e.error)throw e.error;return e}_logPrefix(){return`GoTrueClient@${this.storageKey}:${this.instanceID} (${Fd}) ${new Date().toISOString()}`}_debug(...e){return this.logDebugMessages&&this.logger(this._logPrefix(),...e),this}async initialize(){var e;if(this.initializePromise)return await this.initializePromise;this._pendingInitNotifications=[],this.initializePromise=(async()=>this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._initialize()):await this._initialize())();const t=await this.initializePromise,i=(e=this._pendingInitNotifications)!==null&&e!==void 0?e:[];this._pendingInitNotifications=null;for(const r of i)await this._notifyAllSubscribers(r.event,r.session,r.broadcast);return t}async _initialize(){var e;try{let t={},i="none";if(Lt()&&(t=Ku(window.location.href),this._isImplicitGrantCallback(t)?i="implicit":await this._isPKCECallback(t)&&(i="pkce")),Lt()&&this.detectSessionInUrl&&i!=="none"){const{data:r,error:s}=await this._getSessionFromURL(t,i);if(s){if(this._debug("#_initialize()","error detecting session from URL",s),Ew(s)){const l=(e=s.details)===null||e===void 0?void 0:e.code;if(l==="identity_already_exists"||l==="identity_not_found"||l==="single_identity_not_deletable")return{error:s}}return{error:s}}const{session:a,redirectType:o}=r;return this._debug("#_initialize()","detected session in URL",a,"redirect type",o),await this._saveSession(a),setTimeout(async()=>{o==="recovery"?await this._notifyAllSubscribers("PASSWORD_RECOVERY",a):await this._notifyAllSubscribers("SIGNED_IN",a)},0),{error:null}}return await this._recoverAndRefresh(),{error:null}}catch(t){return de(t)?this._returnResult({error:t}):this._returnResult({error:new yn("Unexpected error during initialization",t)})}finally{await this._handleVisibilityChange(),this._debug("#_initialize()","end")}}async signInAnonymously(e){var t,i,r;try{const s=await xe(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{data:(i=(t=e==null?void 0:e.options)===null||t===void 0?void 0:t.data)!==null&&i!==void 0?i:{},gotrue_meta_security:{captcha_token:(r=e==null?void 0:e.options)===null||r===void 0?void 0:r.captchaToken}},xform:un}),{data:a,error:o}=s;if(o||!a)return this._returnResult({data:{user:null,session:null},error:o});const l=a.session,c=a.user;return a.session&&(await this._saveSession(a.session),await this._notifyAllSubscribers("SIGNED_IN",l)),this._returnResult({data:{user:c,session:l},error:null})}catch(s){if(de(s))return this._returnResult({data:{user:null,session:null},error:s});throw s}}async signUp(e){var t,i,r;let s=null;try{let a;if("email"in e){const{email:h,password:d,options:f}=e;let g=null,_=null;this.flowType==="pkce"&&([g,_,s]=await this._getCodeChallengeAndMethod()),a=await xe(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,redirectTo:this._maybeAppendFlowIdToRedirect(f==null?void 0:f.emailRedirectTo,s),body:{email:h,password:d,data:(t=f==null?void 0:f.data)!==null&&t!==void 0?t:{},gotrue_meta_security:{captcha_token:f==null?void 0:f.captchaToken},code_challenge:g,code_challenge_method:_},xform:un})}else if("phone"in e){const{phone:h,password:d,options:f}=e;a=await xe(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{phone:h,password:d,data:(i=f==null?void 0:f.data)!==null&&i!==void 0?i:{},channel:(r=f==null?void 0:f.channel)!==null&&r!==void 0?r:"sms",gotrue_meta_security:{captcha_token:f==null?void 0:f.captchaToken}},xform:un})}else throw new ta("You must provide either an email or phone number and a password");const{data:o,error:l}=a;if(l||!o)return await mn(this.storage,this.storageKey,s),this._returnResult({data:{user:null,session:null},error:l});const c=o.session,u=o.user;return o.session&&(await this._saveSession(o.session),await this._notifyAllSubscribers("SIGNED_IN",c)),this._returnResult({data:{user:u,session:c},error:null})}catch(a){if(await mn(this.storage,this.storageKey,s),de(a))return this._returnResult({data:{user:null,session:null},error:a});throw a}}async signInWithPassword(e){try{let t;if("email"in e){const{email:s,password:a,options:o}=e;t=await xe(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{email:s,password:a,gotrue_meta_security:{captcha_token:o==null?void 0:o.captchaToken}},xform:Qu})}else if("phone"in e){const{phone:s,password:a,options:o}=e;t=await xe(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{phone:s,password:a,gotrue_meta_security:{captcha_token:o==null?void 0:o.captchaToken}},xform:Qu})}else throw new ta("You must provide either an email or phone number and a password");const{data:i,error:r}=t;if(r)return this._returnResult({data:{user:null,session:null},error:r});if(!i||!i.session||!i.user){const s=new lr;return this._returnResult({data:{user:null,session:null},error:s})}return i.session&&(await this._saveSession(i.session),await this._notifyAllSubscribers("SIGNED_IN",i.session)),this._returnResult({data:Object.assign({user:i.user,session:i.session},i.weak_password?{weakPassword:i.weak_password}:null),error:r})}catch(t){if(de(t))return this._returnResult({data:{user:null,session:null},error:t});throw t}}async signInWithOAuth(e){var t,i,r,s;return await this._handleProviderSignIn(e.provider,{redirectTo:(t=e.options)===null||t===void 0?void 0:t.redirectTo,scopes:(i=e.options)===null||i===void 0?void 0:i.scopes,queryParams:(r=e.options)===null||r===void 0?void 0:r.queryParams,skipBrowserRedirect:(s=e.options)===null||s===void 0?void 0:s.skipBrowserRedirect})}async exchangeCodeForSession(e,t){return await this.initializePromise,this.lock!=null?this._acquireLock(this.lockAcquireTimeout,async()=>this._exchangeCodeForSession(e,t)):this._exchangeCodeForSession(e,t)}async signInWithWeb3(e){const{chain:t}=e;switch(t){case"ethereum":return await this.signInWithEthereum(e);case"solana":return await this.signInWithSolana(e);default:throw new Error(`@supabase/auth-js: Unsupported chain "${t}"`)}}async signInWithEthereum(e){var t,i,r,s,a,o,l,c,u,h,d;let f,g;if("message"in e)f=e.message,g=e.signature;else{const{chain:_,wallet:m,statement:p,options:y}=e;let v;if(Lt())if(typeof m=="object")v=m;else{const x=window;if("ethereum"in x&&typeof x.ethereum=="object"&&"request"in x.ethereum&&typeof x.ethereum.request=="function")v=x.ethereum;else throw new Error("@supabase/auth-js: No compatible Ethereum wallet interface on the window object (window.ethereum) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'ethereum', wallet: resolvedUserWallet }) instead.")}else{if(typeof m!="object"||!(y!=null&&y.url))throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");v=m}const w=new URL((t=y==null?void 0:y.url)!==null&&t!==void 0?t:window.location.href),L=await v.request({method:"eth_requestAccounts"}).then(x=>x).catch(()=>{throw new Error("@supabase/auth-js: Wallet method eth_requestAccounts is missing or invalid")});if(!L||L.length===0)throw new Error("@supabase/auth-js: No accounts available. Please ensure the wallet is connected.");const A=jd(L[0]);let R=(i=y==null?void 0:y.signInWithEthereum)===null||i===void 0?void 0:i.chainId;if(!R){const x=await v.request({method:"eth_chainId"});R=sx(x)}const P={domain:w.host,address:A,statement:p,uri:w.href,version:"1",chainId:R,nonce:(r=y==null?void 0:y.signInWithEthereum)===null||r===void 0?void 0:r.nonce,issuedAt:(a=(s=y==null?void 0:y.signInWithEthereum)===null||s===void 0?void 0:s.issuedAt)!==null&&a!==void 0?a:new Date,expirationTime:(o=y==null?void 0:y.signInWithEthereum)===null||o===void 0?void 0:o.expirationTime,notBefore:(l=y==null?void 0:y.signInWithEthereum)===null||l===void 0?void 0:l.notBefore,requestId:(c=y==null?void 0:y.signInWithEthereum)===null||c===void 0?void 0:c.requestId,resources:(u=y==null?void 0:y.signInWithEthereum)===null||u===void 0?void 0:u.resources};f=ox(P),g=await v.request({method:"personal_sign",params:[ax(f),A]})}try{const{data:_,error:m}=await xe(this.fetch,"POST",`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:"ethereum",message:f,signature:g},!((h=e.options)===null||h===void 0)&&h.captchaToken?{gotrue_meta_security:{captcha_token:(d=e.options)===null||d===void 0?void 0:d.captchaToken}}:null),xform:un});if(m)throw m;if(!_||!_.session||!_.user){const p=new lr;return this._returnResult({data:{user:null,session:null},error:p})}return _.session&&(await this._saveSession(_.session),await this._notifyAllSubscribers("SIGNED_IN",_.session)),this._returnResult({data:Object.assign({},_),error:m})}catch(_){if(de(_))return this._returnResult({data:{user:null,session:null},error:_});throw _}}async signInWithSolana(e){var t,i,r,s,a,o,l,c,u,h,d,f;let g,_;if("message"in e)g=e.message,_=e.signature;else{const{chain:m,wallet:p,statement:y,options:v}=e;let w;if(Lt())if(typeof p=="object")w=p;else{const A=window;if("solana"in A&&typeof A.solana=="object"&&("signIn"in A.solana&&typeof A.solana.signIn=="function"||"signMessage"in A.solana&&typeof A.solana.signMessage=="function"))w=A.solana;else throw new Error("@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.")}else{if(typeof p!="object"||!(v!=null&&v.url))throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");w=p}const L=new URL((t=v==null?void 0:v.url)!==null&&t!==void 0?t:window.location.href);if("signIn"in w&&w.signIn){const A=await w.signIn(Object.assign(Object.assign(Object.assign({issuedAt:new Date().toISOString()},v==null?void 0:v.signInWithSolana),{version:"1",domain:L.host,uri:L.href}),y?{statement:y}:null));let R;if(Array.isArray(A)&&A[0]&&typeof A[0]=="object")R=A[0];else if(A&&typeof A=="object"&&"signedMessage"in A&&"signature"in A)R=A;else throw new Error("@supabase/auth-js: Wallet method signIn() returned unrecognized value");if("signedMessage"in R&&"signature"in R&&(typeof R.signedMessage=="string"||R.signedMessage instanceof Uint8Array)&&R.signature instanceof Uint8Array)g=typeof R.signedMessage=="string"?R.signedMessage:new TextDecoder().decode(R.signedMessage),_=R.signature;else throw new Error("@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields")}else{if(!("signMessage"in w)||typeof w.signMessage!="function"||!("publicKey"in w)||typeof w!="object"||!w.publicKey||!("toBase58"in w.publicKey)||typeof w.publicKey.toBase58!="function")throw new Error("@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API");g=[`${L.host} wants you to sign in with your Solana account:`,w.publicKey.toBase58(),...y?["",y,""]:[""],"Version: 1",`URI: ${L.href}`,`Issued At: ${(r=(i=v==null?void 0:v.signInWithSolana)===null||i===void 0?void 0:i.issuedAt)!==null&&r!==void 0?r:new Date().toISOString()}`,...!((s=v==null?void 0:v.signInWithSolana)===null||s===void 0)&&s.notBefore?[`Not Before: ${v.signInWithSolana.notBefore}`]:[],...!((a=v==null?void 0:v.signInWithSolana)===null||a===void 0)&&a.expirationTime?[`Expiration Time: ${v.signInWithSolana.expirationTime}`]:[],...!((o=v==null?void 0:v.signInWithSolana)===null||o===void 0)&&o.chainId?[`Chain ID: ${v.signInWithSolana.chainId}`]:[],...!((l=v==null?void 0:v.signInWithSolana)===null||l===void 0)&&l.nonce?[`Nonce: ${v.signInWithSolana.nonce}`]:[],...!((c=v==null?void 0:v.signInWithSolana)===null||c===void 0)&&c.requestId?[`Request ID: ${v.signInWithSolana.requestId}`]:[],...!((h=(u=v==null?void 0:v.signInWithSolana)===null||u===void 0?void 0:u.resources)===null||h===void 0)&&h.length?["Resources",...v.signInWithSolana.resources.map(R=>`- ${R}`)]:[]].join(`
`);const A=await w.signMessage(new TextEncoder().encode(g),"utf8");if(!A||!(A instanceof Uint8Array))throw new Error("@supabase/auth-js: Wallet signMessage() API returned an recognized value");_=A}}try{const{data:m,error:p}=await xe(this.fetch,"POST",`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:"solana",message:g,signature:ki(_)},!((d=e.options)===null||d===void 0)&&d.captchaToken?{gotrue_meta_security:{captcha_token:(f=e.options)===null||f===void 0?void 0:f.captchaToken}}:null),xform:un});if(p)throw p;if(!m||!m.session||!m.user){const y=new lr;return this._returnResult({data:{user:null,session:null},error:y})}return m.session&&(await this._saveSession(m.session),await this._notifyAllSubscribers("SIGNED_IN",m.session)),this._returnResult({data:Object.assign({},m),error:p})}catch(m){if(de(m))return this._returnResult({data:{user:null,session:null},error:m});throw m}}async _exchangeCodeForSession(e,t){const i=(t==null?void 0:t.flowId)!=null,r=i?xa(t==null?void 0:t.flowId):Lt()?xa(Ku(window.location.href)[Oi]):null;i&&!r&&this._debug("#_exchangeCodeForSession()","provided flowId is not a valid flow id",t==null?void 0:t.flowId);const{verifier:s,flowId:a}=i&&!r?{verifier:null,flowId:null}:await Hw(this.storage,this.storageKey,r),[o,l]=(s??"").split("/");try{if(!o&&this.flowType==="pkce")throw new Mw;const{data:c,error:u}=await xe(this.fetch,"POST",`${this.url}/token?grant_type=pkce`,{headers:this.headers,body:{auth_code:e,code_verifier:o},xform:un});if(await mn(this.storage,this.storageKey,a),u)throw u;if(!c||!c.session||!c.user){const h=new lr;return this._returnResult({data:{user:null,session:null,redirectType:null},error:h})}return c.session&&(await this._saveSession(c.session),await this._notifyAllSubscribers(l==="recovery"?"PASSWORD_RECOVERY":"SIGNED_IN",c.session)),this._returnResult({data:Object.assign(Object.assign({},c),{redirectType:l??null}),error:u})}catch(c){if(await mn(this.storage,this.storageKey,a),de(c))return this._returnResult({data:{user:null,session:null,redirectType:null},error:c});throw c}}async signInWithIdToken(e){try{const{options:t,provider:i,token:r,access_token:s,nonce:a}=e,o=await xe(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,body:{provider:i,id_token:r,access_token:s,nonce:a,gotrue_meta_security:{captcha_token:t==null?void 0:t.captchaToken}},xform:un}),{data:l,error:c}=o;if(c)return this._returnResult({data:{user:null,session:null},error:c});if(!l||!l.session||!l.user){const u=new lr;return this._returnResult({data:{user:null,session:null},error:u})}return l.session&&(await this._saveSession(l.session),await this._notifyAllSubscribers("SIGNED_IN",l.session)),this._returnResult({data:l,error:c})}catch(t){if(de(t))return this._returnResult({data:{user:null,session:null},error:t});throw t}}async signInWithOtp(e){var t,i,r,s,a;let o=null;try{if("email"in e){const{email:l,options:c}=e;let u=null,h=null;this.flowType==="pkce"&&([u,h,o]=await this._getCodeChallengeAndMethod());const{error:d}=await xe(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{email:l,data:(t=c==null?void 0:c.data)!==null&&t!==void 0?t:{},create_user:(i=c==null?void 0:c.shouldCreateUser)!==null&&i!==void 0?i:!0,gotrue_meta_security:{captcha_token:c==null?void 0:c.captchaToken},code_challenge:u,code_challenge_method:h},redirectTo:this._maybeAppendFlowIdToRedirect(c==null?void 0:c.emailRedirectTo,o)});return this._returnResult({data:{user:null,session:null},error:d})}if("phone"in e){const{phone:l,options:c}=e,{data:u,error:h}=await xe(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{phone:l,data:(r=c==null?void 0:c.data)!==null&&r!==void 0?r:{},create_user:(s=c==null?void 0:c.shouldCreateUser)!==null&&s!==void 0?s:!0,gotrue_meta_security:{captcha_token:c==null?void 0:c.captchaToken},channel:(a=c==null?void 0:c.channel)!==null&&a!==void 0?a:"sms"}});return this._returnResult({data:{user:null,session:null,messageId:u==null?void 0:u.message_id},error:h})}throw new ta("You must provide either an email or phone number.")}catch(l){if(await mn(this.storage,this.storageKey,o),de(l))return this._returnResult({data:{user:null,session:null},error:l});throw l}}async verifyOtp(e){var t,i;try{let r,s;"options"in e&&(r=(t=e.options)===null||t===void 0?void 0:t.redirectTo,s=(i=e.options)===null||i===void 0?void 0:i.captchaToken);const{data:a,error:o}=await xe(this.fetch,"POST",`${this.url}/verify`,{headers:this.headers,body:Object.assign(Object.assign({},e),{gotrue_meta_security:{captcha_token:s}}),redirectTo:r,xform:un});if(o)throw o;if(!a)throw new Error("An error occurred on token verification.");const l=a.session,c=a.user;return l!=null&&l.access_token&&(await this._saveSession(l),await this._notifyAllSubscribers(e.type=="recovery"?"PASSWORD_RECOVERY":"SIGNED_IN",l)),this._returnResult({data:{user:c,session:l},error:null})}catch(r){if(de(r))return this._returnResult({data:{user:null,session:null},error:r});throw r}}async signInWithSSO(e){var t,i,r,s;let a=null;try{let o=null,l=null;this.flowType==="pkce"&&([o,l,a]=await this._getCodeChallengeAndMethod());const c=await xe(this.fetch,"POST",`${this.url}/sso`,{body:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},"providerId"in e?{provider_id:e.providerId}:null),"domain"in e?{domain:e.domain}:null),{redirect_to:this._maybeAppendFlowIdToRedirect((t=e.options)===null||t===void 0?void 0:t.redirectTo,a)}),!((i=e==null?void 0:e.options)===null||i===void 0)&&i.captchaToken?{gotrue_meta_security:{captcha_token:e.options.captchaToken}}:null),{skip_http_redirect:!0,code_challenge:o,code_challenge_method:l}),headers:this.headers,xform:Qw});return!((r=c.data)===null||r===void 0)&&r.url&&Lt()&&!(!((s=e.options)===null||s===void 0)&&s.skipBrowserRedirect)&&window.location.assign(c.data.url),this._returnResult(c)}catch(o){if(await mn(this.storage,this.storageKey,a),de(o))return this._returnResult({data:null,error:o});throw o}}async reauthenticate(){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._reauthenticate()):await this._reauthenticate()}async _reauthenticate(){try{return await this._useSession(async e=>{const{data:{session:t},error:i}=e;if(i)throw i;if(!t)throw new Pt;const{error:r}=await xe(this.fetch,"GET",`${this.url}/reauthenticate`,{headers:this.headers,jwt:t.access_token});return this._returnResult({data:{user:null,session:null},error:r})})}catch(e){if(de(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async resend(e){let t=null;try{const i=`${this.url}/resend`;if("email"in e){const{email:r,type:s,options:a}=e;let o=null,l=null;this.flowType==="pkce"&&([o,l,t]=await this._getCodeChallengeAndMethod());const{error:c}=await xe(this.fetch,"POST",i,{headers:this.headers,body:{email:r,type:s,gotrue_meta_security:{captcha_token:a==null?void 0:a.captchaToken},code_challenge:o,code_challenge_method:l},redirectTo:this._maybeAppendFlowIdToRedirect(a==null?void 0:a.emailRedirectTo,t)});return c&&await mn(this.storage,this.storageKey,t),this._returnResult({data:{user:null,session:null},error:c})}else if("phone"in e){const{phone:r,type:s,options:a}=e,{data:o,error:l}=await xe(this.fetch,"POST",i,{headers:this.headers,body:{phone:r,type:s,gotrue_meta_security:{captcha_token:a==null?void 0:a.captchaToken}}});return this._returnResult({data:{user:null,session:null,messageId:o==null?void 0:o.message_id},error:l})}throw new ta("You must provide either an email or phone number and a type")}catch(i){if(await mn(this.storage,this.storageKey,t),de(i))return this._returnResult({data:{user:null,session:null},error:i});throw i}}async getSession(){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>this._useSession(async e=>e)):await this._useSession(async e=>e)}async _acquireLock(e,t){this._debug("#_acquireLock","begin",e);try{if(this.lockAcquired){const i=this.pendingInLock.length?this.pendingInLock[this.pendingInLock.length-1]:Promise.resolve(),r=(async()=>(await i,await t()))();return this.pendingInLock.push((async()=>{try{await r}catch{}})()),r}return await this.lock(`lock:${this.storageKey}`,e,async()=>{this._debug("#_acquireLock","lock acquired for storage key",this.storageKey);try{this.lockAcquired=!0;const i=t();for(this.pendingInLock.push((async()=>{try{await i}catch{}})()),await i;this.pendingInLock.length;){const r=[...this.pendingInLock];await Promise.all(r),this.pendingInLock.splice(0,r.length)}return await i}finally{this._debug("#_acquireLock","lock released for storage key",this.storageKey),this.lockAcquired=!1}})}finally{this._debug("#_acquireLock","end")}}async _useSession(e){this._debug("#_useSession","begin");try{const t=await this.__loadSession();return await e(t)}finally{this._debug("#_useSession","end")}}async __loadSession(){this._debug("#__loadSession()","begin"),this.lock!=null&&!this.lockAcquired&&this._debug("#__loadSession()","used outside of an acquired lock!",new Error().stack);try{let e=null;const t=await Ot(this.storage,this.storageKey);if(this._debug("#getSession()","session from storage",t),t!==null&&(this._isValidSession(t)?e=t:(this._debug("#getSession()","session from storage is not valid"),await this._removeSession())),!e)return{data:{session:null},error:null};const i=e.expires_at?e.expires_at*1e3-Date.now()<Po:!1;if(this._debug("#__loadSession()",`session has${i?"":" not"} expired`,"expires_at",e.expires_at),!i)return{data:{session:await this._hydrateSessionUser(e)},error:null};const{data:r,error:s}=await this._callRefreshToken(e.refresh_token);if(s){const a=await Ot(this.storage,this.storageKey);return a&&this._isValidSession(a)&&a.expires_at&&a.expires_at*1e3>Date.now()?this._returnResult({data:{session:await this._hydrateSessionUser(a)},error:null}):this._returnResult({data:{session:null},error:s})}return this._returnResult({data:{session:r},error:null})}finally{this._debug("#__loadSession()","end")}}async _hydrateSessionUser(e){if(this.userStorage){const t=await Ot(this.userStorage,this.storageKey+"-user");e.user=t!=null&&t.user?t.user:Io()}if(this.storage.isServer&&e.user&&!e.user.__isUserNotAvailableProxy){const t={value:this.suppressGetSessionWarning};e.user=Yw(e.user,t),t.value&&(this.suppressGetSessionWarning=!0)}return e}async getUser(e){if(e)return await this._getUser(e);await this.initializePromise;let t;return this.lock!=null?t=await this._acquireLock(this.lockAcquireTimeout,async()=>await this._getUser()):t=await this._getUser(),t.data.user&&(this.suppressGetSessionWarning=!0),t}async _getUser(e){try{return e?await xe(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:e,xform:di}):await this._useSession(async t=>{var i,r,s;const{data:a,error:o}=t;if(o)throw o;return!(!((i=a.session)===null||i===void 0)&&i.access_token)&&!this.hasCustomAuthorizationHeader?{data:{user:null},error:new Pt}:await xe(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:(s=(r=a.session)===null||r===void 0?void 0:r.access_token)!==null&&s!==void 0?s:void 0,xform:di})})}catch(t){if(de(t))return ea(t)&&await this._removeSession(),this._returnResult({data:{user:null},error:t});throw t}}async updateUser(e,t={}){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._updateUser(e,t)):await this._updateUser(e,t)}async _updateUser(e,t={}){let i=null;try{return await this._useSession(async r=>{const{data:s,error:a}=r;if(a)throw a;if(!s.session)throw new Pt;const o=s.session;let l=null,c=null;this.flowType==="pkce"&&e.email!=null&&([l,c,i]=await this._getCodeChallengeAndMethod());const{data:u,error:h}=await xe(this.fetch,"PUT",`${this.url}/user`,{headers:this.headers,redirectTo:this._maybeAppendFlowIdToRedirect(t==null?void 0:t.emailRedirectTo,i),body:Object.assign(Object.assign({},e),{code_challenge:l,code_challenge_method:c}),jwt:o.access_token,xform:di});if(h)throw h;return o.user=u.user,await this._saveSession(o),await this._notifyAllSubscribers("USER_UPDATED",o),this._returnResult({data:{user:o.user},error:null})})}catch(r){if(await mn(this.storage,this.storageKey,i),de(r))return this._returnResult({data:{user:null},error:r});throw r}}async setSession(e){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._setSession(e)):await this._setSession(e)}async _setSession(e){try{if(!e.access_token||!e.refresh_token)throw new Pt;const t=Date.now()/1e3;let i=t,r=!0,s=null;const{payload:a}=ra(e.access_token);if(a.exp&&(i=a.exp,r=i<=t),r){const{data:o,error:l}=await this._callRefreshToken(e.refresh_token);if(l)return this._returnResult({data:{user:null,session:null},error:l});if(!o)return{data:{user:null,session:null},error:null};s=o}else{const{data:o,error:l}=await this._getUser(e.access_token);if(l)return this._returnResult({data:{user:null,session:null},error:l});s={access_token:e.access_token,refresh_token:e.refresh_token,user:o.user,token_type:"bearer",expires_in:i-t,expires_at:i},await this._saveSession(s),await this._notifyAllSubscribers("SIGNED_IN",s)}return this._returnResult({data:{user:s.user,session:s},error:null})}catch(t){if(de(t))return this._returnResult({data:{session:null,user:null},error:t});throw t}}async refreshSession(e){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._refreshSession(e)):await this._refreshSession(e)}async _refreshSession(e){try{return await this._useSession(async t=>{var i;if(!e){const{data:a,error:o}=t;if(o)throw o;e=(i=a.session)!==null&&i!==void 0?i:void 0}if(!(e!=null&&e.refresh_token))throw new Pt;const{data:r,error:s}=await this._callRefreshToken(e.refresh_token);return s?this._returnResult({data:{user:null,session:null},error:s}):r?this._returnResult({data:{user:r.user,session:r},error:null}):this._returnResult({data:{user:null,session:null},error:null})})}catch(t){if(de(t))return this._returnResult({data:{user:null,session:null},error:t});throw t}}async _getSessionFromURL(e,t){var i;try{if(!Lt())throw new na("No browser detected.");if(e.error||e.error_description||e.error_code)throw new na(e.error_description||"Error in URL with unspecified error_description",{error:e.error||"unspecified_error",code:e.error_code||"unspecified_code"});switch(t){case"implicit":if(this.flowType==="pkce")throw new Gu("Not a valid PKCE flow url.");break;case"pkce":if(this.flowType==="implicit")throw new na("Not a valid implicit grant flow url.");break;default:}if(t==="pkce"){if(this._debug("#_initialize()","begin","is PKCE flow",!0),!e.code)throw new Gu("No code detected.");const{data:v,error:w}=await this._exchangeCodeForSession(e.code,{flowId:e[Oi]});if(w)throw w;const L=new URL(window.location.href);return L.searchParams.delete("code"),L.searchParams.delete(Oi),window.history.replaceState(window.history.state,"",L.toString()),{data:{session:v.session,redirectType:(i=v.redirectType)!==null&&i!==void 0?i:null},error:null}}const{provider_token:r,provider_refresh_token:s,access_token:a,refresh_token:o,expires_in:l,expires_at:c,token_type:u}=e;if(!a||!l||!o||!u)throw new na("No session defined in URL");const h=Math.round(Date.now()/1e3),d=parseInt(l);let f=h+d;c&&(f=parseInt(c));const g=f-h;g*1e3<=jn&&console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${g}s, should have been closer to ${d}s`);const _=f-d;h-_>=120?console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",_,f,h):h-_<0&&console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew",_,f,h);const{data:m,error:p}=await this._getUser(a);if(p)throw p;const y={provider_token:r,provider_refresh_token:s,access_token:a,expires_in:d,expires_at:f,refresh_token:o,token_type:u,user:m.user};return window.location.hash="",this._debug("#_getSessionFromURL()","clearing window.location.hash"),this._returnResult({data:{session:y,redirectType:e.type},error:null})}catch(r){if(de(r))return this._returnResult({data:{session:null,redirectType:null},error:r});throw r}}_isImplicitGrantCallback(e){return typeof this.detectSessionInUrl=="function"?this.detectSessionInUrl(new URL(window.location.href),e):!!(e.access_token||e.error||e.error_description||e.error_code)}async _isPKCECallback(e){if(!e.code)return!1;const t=xa(e[Oi]);return t&&await Ot(this.storage,Ur(this.storageKey,t))?!0:!!await Ot(this.storage,`${this.storageKey}-code-verifier`)}async signOut(e={scope:"global"}){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._signOut(e)):await this._signOut(e)}async _signOut({scope:e}={scope:"global"}){return await this._useSession(async t=>{var i;const r=async()=>{await this._removeSession()},{data:s,error:a}=t;if(a&&!ea(a))return this._returnResult({error:a});const o=(i=s.session)===null||i===void 0?void 0:i.access_token;if(o){const{error:l}=await this.admin.signOut(o,e);if(l&&!(Hu(l)&&(l.status===404||l.status===401||l.status===403)||ea(l)))return e!=="others"&&await r(),this._returnResult({error:l})}return e!=="others"&&await r(),this._returnResult({error:null})})}onAuthStateChange(e){const t=Iw(),i={id:t,callback:e,unsubscribe:()=>{this._debug("#unsubscribe()","state change callback with id removed",t),this.stateChangeEmitters.delete(t)}};return this._debug("#onAuthStateChange()","registered callback with id",t),this.stateChangeEmitters.set(t,i),(async()=>(await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>{this._emitInitialSession(t)}):await this._emitInitialSession(t)))(),{data:{subscription:i}}}async _emitInitialSession(e){return await this._useSession(async t=>{var i,r;try{const{data:{session:s},error:a}=t;if(a)throw a;await((i=this.stateChangeEmitters.get(e))===null||i===void 0?void 0:i.callback("INITIAL_SESSION",s)),this._debug("INITIAL_SESSION","callback id",e,"session",s)}catch(s){if(await((r=this.stateChangeEmitters.get(e))===null||r===void 0?void 0:r.callback("INITIAL_SESSION",null)),this._debug("INITIAL_SESSION","callback id",e,"error",s),Wu(s))return;ea(s)||ia(s)||Hu(s)&&(s.code==="refresh_token_not_found"||s.code==="refresh_token_already_used"||s.code==="session_expired")?console.warn(s):console.error(s)}})}async resetPasswordForEmail(e,t={}){let i=null,r=null,s=null;this.flowType==="pkce"&&([i,r,s]=await this._getCodeChallengeAndMethod(!0));try{return await xe(this.fetch,"POST",`${this.url}/recover`,{body:{email:e,code_challenge:i,code_challenge_method:r,gotrue_meta_security:{captcha_token:t.captchaToken}},headers:this.headers,redirectTo:this._maybeAppendFlowIdToRedirect(t.redirectTo,s)})}catch(a){if(await mn(this.storage,this.storageKey,s),de(a))return this._returnResult({data:null,error:a});throw a}}async getUserIdentities(){var e;try{const{data:t,error:i}=await this.getUser();if(i)throw i;return this._returnResult({data:{identities:(e=t.user.identities)!==null&&e!==void 0?e:[]},error:null})}catch(t){if(de(t))return this._returnResult({data:null,error:t});throw t}}async linkIdentity(e){return"token"in e?this.linkIdentityIdToken(e):this.linkIdentityOAuth(e)}async linkIdentityOAuth(e){var t;let i=null;try{const{data:r,error:s}=await this._useSession(async a=>{var o,l,c,u,h;const{data:d,error:f}=a;if(f)throw f;const{url:g,flowId:_}=await this._getUrlForProvider(`${this.url}/user/identities/authorize`,e.provider,{redirectTo:(o=e.options)===null||o===void 0?void 0:o.redirectTo,scopes:(l=e.options)===null||l===void 0?void 0:l.scopes,queryParams:(c=e.options)===null||c===void 0?void 0:c.queryParams,skipBrowserRedirect:!0});return i=_,await xe(this.fetch,"GET",g,{headers:this.headers,jwt:(h=(u=d.session)===null||u===void 0?void 0:u.access_token)!==null&&h!==void 0?h:void 0})});if(s)throw s;return Lt()&&!(!((t=e.options)===null||t===void 0)&&t.skipBrowserRedirect)&&window.location.assign(r==null?void 0:r.url),this._returnResult({data:{provider:e.provider,url:r==null?void 0:r.url,flowId:i},error:null})}catch(r){if(de(r))return this._returnResult({data:{provider:e.provider,url:null,flowId:i},error:r});throw r}}async linkIdentityIdToken(e){return await this._useSession(async t=>{var i;try{const{error:r,data:{session:s}}=t;if(r)throw r;const{options:a,provider:o,token:l,access_token:c,nonce:u}=e,h=await xe(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,jwt:(i=s==null?void 0:s.access_token)!==null&&i!==void 0?i:void 0,body:{provider:o,id_token:l,access_token:c,nonce:u,link_identity:!0,gotrue_meta_security:{captcha_token:a==null?void 0:a.captchaToken}},xform:un}),{data:d,error:f}=h;return f?this._returnResult({data:{user:null,session:null},error:f}):!d||!d.session||!d.user?this._returnResult({data:{user:null,session:null},error:new lr}):(d.session&&(await this._saveSession(d.session),await this._notifyAllSubscribers("USER_UPDATED",d.session)),this._returnResult({data:d,error:f}))}catch(r){if(await mn(this.storage,this.storageKey,null),de(r))return this._returnResult({data:{user:null,session:null},error:r});throw r}})}async unlinkIdentity(e){try{return await this._useSession(async t=>{var i,r;const{data:s,error:a}=t;if(a)throw a;return await xe(this.fetch,"DELETE",`${this.url}/user/identities/${e.identity_id}`,{headers:this.headers,jwt:(r=(i=s.session)===null||i===void 0?void 0:i.access_token)!==null&&r!==void 0?r:void 0})})}catch(t){if(de(t))return this._returnResult({data:null,error:t});throw t}}async _refreshAccessToken(e){const t="#_refreshAccessToken()";this._debug(t,"begin");try{const i=Date.now();return await Uw(async r=>(r>0&&await Dw(200*Math.pow(2,r-1)),this._debug(t,"refreshing attempt",r),await xe(this.fetch,"POST",`${this.url}/token?grant_type=refresh_token`,{body:{refresh_token:e},headers:this.headers,xform:un})),(r,s)=>{const a=200*Math.pow(2,r);return s&&ia(s)&&Date.now()+a-i<jn})}catch(i){if(this._debug(t,"error",i),de(i))return this._returnResult({data:{session:null,user:null},error:i});throw i}finally{this._debug(t,"end")}}_isValidSession(e){return typeof e=="object"&&e!==null&&"access_token"in e&&"refresh_token"in e&&"expires_at"in e}async _handleProviderSignIn(e,t){const{url:i,flowId:r}=await this._getUrlForProvider(`${this.url}/authorize`,e,{redirectTo:t.redirectTo,scopes:t.scopes,queryParams:t.queryParams});return this._debug("#_handleProviderSignIn()","provider",e,"options",t,"url",i),Lt()&&!t.skipBrowserRedirect&&window.location.assign(i),{data:{provider:e,url:i,flowId:r},error:null}}async _recoverAndRefresh(){var e,t;const i="#_recoverAndRefresh()";this._debug(i,"begin");try{const r=await Ot(this.storage,this.storageKey);if(r&&this.userStorage){let a=await Ot(this.userStorage,this.storageKey+"-user");!this.storage.isServer&&Object.is(this.storage,this.userStorage)&&!a&&(a={user:r.user},await $n(this.userStorage,this.storageKey+"-user",a)),r.user=(e=a==null?void 0:a.user)!==null&&e!==void 0?e:Io()}else if(r&&!r.user&&!r.user){const a=await Ot(this.storage,this.storageKey+"-user");a&&(a!=null&&a.user)?(r.user=a.user,await qt(this.storage,this.storageKey+"-user"),await $n(this.storage,this.storageKey,r)):r.user=Io()}if(this._debug(i,"session from storage",r),!this._isValidSession(r)){this._debug(i,"session is not valid"),r!==null&&await this._removeSession();return}const s=((t=r.expires_at)!==null&&t!==void 0?t:1/0)*1e3-Date.now()<Po;if(this._debug(i,`session has${s?"":" not"} expired with margin of ${Po}s`),s){if(this.autoRefreshToken&&r.refresh_token){const{error:a}=await this._callRefreshToken(r.refresh_token);a&&(Wu(a)?this._debug(i,"refresh discarded by commit guard",a):this._debug(i,"refresh failed",a))}}else if(r.user&&r.user.__isUserNotAvailableProxy===!0)try{const{data:a,error:o}=await this._getUser(r.access_token);!o&&(a!=null&&a.user)?(r.user=a.user,await this._saveSession(r),await this._notifyAllSubscribers("SIGNED_IN",r)):this._debug(i,"could not get user data, skipping SIGNED_IN notification")}catch(a){console.error("Error getting user data:",a),this._debug(i,"error getting user data, skipping SIGNED_IN notification",a)}else await this._notifyAllSubscribers("SIGNED_IN",r)}catch(r){this._debug(i,"error",r),ia(r)?console.warn(r):console.error(r);return}finally{this._debug(i,"end")}}async _callRefreshToken(e){var t,i;if(!e)throw new Pt;if(this.refreshingDeferred)return this.refreshingDeferred.promise;if(this.lastRefreshFailure&&this.lastRefreshFailure.refreshToken===e&&Date.now()<this.lastRefreshFailure.expiresAt)return this._debug("#_callRefreshToken()","returning cached failure (cooldown active)"),this.lastRefreshFailure.result;const r="#_callRefreshToken()";this._debug(r,"begin");try{this.refreshingDeferred=new ja,this.refreshingDeferred.promise.then(void 0,()=>{});const s=await Ot(this.storage,this.storageKey),{data:a,error:o}=await this._refreshAccessToken(e);if(o)throw o;if(!a.session)throw new Pt;const l=await Ot(this.storage,this.storageKey);if(s!==null&&(l===null||l.refresh_token!==s.refresh_token)){this._debug(r,"commit guard: storage changed since refresh started, discarding rotated tokens",{startedWith:"present",nowHolds:l?"replaced":"cleared"});const d={data:null,error:new Vu};return this.refreshingDeferred.resolve(d),d}const u=this._sessionRemovalEpoch;if(await this._saveSession(a.session),this._sessionRemovalEpoch!==u){this._debug(r,"commit guard (post-save): _removeSession ran during _saveSession, undoing write"),await qt(this.storage,this.storageKey),this.userStorage&&await qt(this.userStorage,this.storageKey+"-user");const d={data:null,error:new Vu};return this.refreshingDeferred.resolve(d),d}await this._notifyAllSubscribers("TOKEN_REFRESHED",a.session);const h={data:a.session,error:null};return this.lastRefreshFailure=null,this.refreshingDeferred.resolve(h),h}catch(s){if(this._debug(r,"error",s),de(s)){const a={data:null,error:s};if(!ia(s)){const o=await Ot(this.storage,this.storageKey);!!(o!=null&&o.expires_at&&o.expires_at*1e3>Date.now())?this._debug(r,"proactive refresh failed, access token still valid — preserving session"):await this._removeSession()}return this.lastRefreshFailure={refreshToken:e,result:a,expiresAt:Date.now()+gw},(t=this.refreshingDeferred)===null||t===void 0||t.resolve(a),a}throw(i=this.refreshingDeferred)===null||i===void 0||i.reject(s),s}finally{this.refreshingDeferred=null,this._debug(r,"end")}}async _notifyAllSubscribers(e,t,i=!0){if(this._pendingInitNotifications!==null&&i){this._pendingInitNotifications.push({event:e,session:t,broadcast:i});return}const r=`#_notifyAllSubscribers(${e})`;this._debug(r,"begin",t,`broadcast = ${i}`);try{this.broadcastChannel&&i&&this.broadcastChannel.postMessage({event:e,session:t});const s=[],a=Array.from(this.stateChangeEmitters.values()).map(async o=>{try{await o.callback(e,t)}catch(l){s.push(l)}});if(await Promise.all(a),s.length>0){for(let o=0;o<s.length;o+=1)console.error(s[o]);throw s[0]}}finally{this._debug(r,"end")}}async _saveSession(e){this._debug("#_saveSession()",e),this.suppressGetSessionWarning=!0;const t=Object.assign({},e),i=t.user&&t.user.__isUserNotAvailableProxy===!0;if(this.userStorage){!i&&t.user&&await $n(this.userStorage,this.storageKey+"-user",{user:t.user});const r=Object.assign({},t);delete r.user;const s=Yu(r);await $n(this.storage,this.storageKey,s)}else{const r=Yu(t);await $n(this.storage,this.storageKey,r)}}async _removeSession(){this._sessionRemovalEpoch+=1,this._debug("#_removeSession()"),this.lastRefreshFailure=null,this.suppressGetSessionWarning=!1,await qt(this.storage,this.storageKey),await Gw(this.storage,this.storageKey),await qt(this.storage,this.storageKey+"-user"),this.userStorage&&await qt(this.userStorage,this.storageKey+"-user"),await this._notifyAllSubscribers("SIGNED_OUT",null)}_removeVisibilityChangedCallback(){this._debug("#_removeVisibilityChangedCallback()");const e=this.visibilityChangedCallback;this.visibilityChangedCallback=null;try{e&&Lt()&&(window!=null&&window.removeEventListener)&&window.removeEventListener("visibilitychange",e)}catch(t){console.error("removing visibilitychange callback failed",t)}}async _startAutoRefresh(){await this._stopAutoRefresh(),this._debug("#_startAutoRefresh()");const e=setInterval(()=>this._autoRefreshTokenTick(),jn);this.autoRefreshTicker=e,e&&typeof e=="object"&&typeof e.unref=="function"?e.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(e);const t=setTimeout(async()=>{await this.initializePromise,await this._autoRefreshTokenTick()},0);this.autoRefreshTickTimeout=t,t&&typeof t=="object"&&typeof t.unref=="function"?t.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(t)}async _stopAutoRefresh(){this._debug("#_stopAutoRefresh()");const e=this.autoRefreshTicker;this.autoRefreshTicker=null,e&&clearInterval(e);const t=this.autoRefreshTickTimeout;this.autoRefreshTickTimeout=null,t&&clearTimeout(t)}async startAutoRefresh(){this._removeVisibilityChangedCallback(),await this._startAutoRefresh()}async stopAutoRefresh(){this._removeVisibilityChangedCallback(),await this._stopAutoRefresh()}async dispose(){var e;this._removeVisibilityChangedCallback(),await this._stopAutoRefresh(),(e=this.broadcastChannel)===null||e===void 0||e.close(),this.broadcastChannel=null,this.stateChangeEmitters.clear()}async _autoRefreshTokenTick(){if(this._debug("#_autoRefreshTokenTick()","begin"),this.lock!=null){try{await this._acquireLock(0,async()=>{try{const e=Date.now();try{return await this._useSession(async t=>{const{data:{session:i}}=t;if(!i||!i.refresh_token||!i.expires_at){this._debug("#_autoRefreshTokenTick()","no session");return}const r=Math.floor((i.expires_at*1e3-e)/jn);this._debug("#_autoRefreshTokenTick()",`access token expires in ${r} ticks, a tick lasts ${jn}ms, refresh threshold is ${os} ticks`),r<=os&&await this._callRefreshToken(i.refresh_token)})}catch(t){console.error("Auto refresh tick failed with error. This is likely a transient error.",t)}}finally{this._debug("#_autoRefreshTokenTick()","end")}})}catch(e){if(e instanceof ix)this._debug("auto refresh token tick lock not available");else throw e}return}if(this.refreshingDeferred!==null){this._debug("#_autoRefreshTokenTick()","refresh already in flight, skipping");return}try{const e=Date.now();try{await this._useSession(async t=>{const{data:{session:i}}=t;if(!i||!i.refresh_token||!i.expires_at){this._debug("#_autoRefreshTokenTick()","no session");return}const r=Math.floor((i.expires_at*1e3-e)/jn);this._debug("#_autoRefreshTokenTick()",`access token expires in ${r} ticks, a tick lasts ${jn}ms, refresh threshold is ${os} ticks`),r<=os&&await this._callRefreshToken(i.refresh_token)})}catch(t){console.error("Auto refresh tick failed with error. This is likely a transient error.",t)}}finally{this._debug("#_autoRefreshTokenTick()","end")}}async _handleVisibilityChange(){if(this._debug("#_handleVisibilityChange()"),!Lt()||!(window!=null&&window.addEventListener))return this.autoRefreshToken&&this.startAutoRefresh(),!1;try{this.visibilityChangedCallback=async()=>{try{await this._onVisibilityChanged(!1)}catch(e){this._debug("#visibilityChangedCallback","error",e)}},window==null||window.addEventListener("visibilitychange",this.visibilityChangedCallback),await this._onVisibilityChanged(!0)}catch(e){console.error("_handleVisibilityChange",e)}}async _onVisibilityChanged(e){const t=`#_onVisibilityChanged(${e})`;if(this._debug(t,"visibilityState",document.visibilityState),document.visibilityState==="visible"){if(this.autoRefreshToken&&this._startAutoRefresh(),!e)if(await this.initializePromise,this.lock!=null)await this._acquireLock(this.lockAcquireTimeout,async()=>{if(document.visibilityState!=="visible"){this._debug(t,"acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");return}await this._recoverAndRefresh()});else{if(document.visibilityState!=="visible"){this._debug(t,"visibilityState is no longer visible, skipping recovery");return}await this._recoverAndRefresh()}}else document.visibilityState==="hidden"&&this.autoRefreshToken&&this._stopAutoRefresh()}async _getUrlForProvider(e,t,i){let r=i==null?void 0:i.redirectTo,s=null,a=null,o=null;this.flowType==="pkce"&&([s,a,o]=await this._getCodeChallengeAndMethod(),r=this._maybeAppendFlowIdToRedirect(r,o));const l=[`provider=${encodeURIComponent(t)}`];if(r&&l.push(`redirect_to=${encodeURIComponent(r)}`),i!=null&&i.scopes&&l.push(`scopes=${encodeURIComponent(i.scopes)}`),s!=null&&a!=null){const c=new URLSearchParams({code_challenge:`${encodeURIComponent(s)}`,code_challenge_method:`${encodeURIComponent(a)}`});l.push(c.toString())}if(i!=null&&i.queryParams){const c=new URLSearchParams(i.queryParams);l.push(c.toString())}return i!=null&&i.skipBrowserRedirect&&l.push(`skip_http_redirect=${i.skipBrowserRedirect}`),{url:`${e}?${l.join("&")}`,flowId:o}}_maybeAppendFlowIdToRedirect(e,t){return!e||!t||!this.experimental.appendPkceFlowIdToRedirects?e??void 0:Vw(e,t)}async _getCodeChallengeAndMethod(e=!1){return Ww(this.storage,this.storageKey,e,t=>this._debug("#_getCodeChallengeAndMethod()","evicted oldest pending PKCE verifier slot",t))}async _unenroll(e){try{return await this._useSession(async t=>{var i;const{data:r,error:s}=t;return s?this._returnResult({data:null,error:s}):await xe(this.fetch,"DELETE",`${this.url}/factors/${e.factorId}`,{headers:this.headers,jwt:(i=r==null?void 0:r.session)===null||i===void 0?void 0:i.access_token})})}catch(t){if(de(t))return this._returnResult({data:null,error:t});throw t}}async _enroll(e){try{return await this._useSession(async t=>{var i,r;const{data:s,error:a}=t;if(a)return this._returnResult({data:null,error:a});const o=Object.assign({friendly_name:e.friendlyName,factor_type:e.factorType},e.factorType==="phone"?{phone:e.phone}:e.factorType==="totp"?{issuer:e.issuer}:{}),{data:l,error:c}=await xe(this.fetch,"POST",`${this.url}/factors`,{body:o,headers:this.headers,jwt:(i=s==null?void 0:s.session)===null||i===void 0?void 0:i.access_token});return c?this._returnResult({data:null,error:c}):(e.factorType==="totp"&&l.type==="totp"&&(!((r=l==null?void 0:l.totp)===null||r===void 0)&&r.qr_code)&&(l.totp.qr_code=`data:image/svg+xml;utf-8,${l.totp.qr_code}`),this._returnResult({data:l,error:null}))})}catch(t){if(de(t))return this._returnResult({data:null,error:t});throw t}}async _verify(e){const t=async()=>{try{return await this._useSession(async i=>{var r;const{data:s,error:a}=i;if(a)return this._returnResult({data:null,error:a});const o=Object.assign({challenge_id:e.challengeId},"webauthn"in e?{webauthn:Object.assign(Object.assign({},e.webauthn),{credential_response:e.webauthn.type==="create"?rh(e.webauthn.credential_response):sh(e.webauthn.credential_response)})}:{code:e.code}),{data:l,error:c}=await xe(this.fetch,"POST",`${this.url}/factors/${e.factorId}/verify`,{body:o,headers:this.headers,jwt:(r=s==null?void 0:s.session)===null||r===void 0?void 0:r.access_token});return c?this._returnResult({data:null,error:c}):(await this._saveSession(Object.assign({expires_at:Math.round(Date.now()/1e3)+l.expires_in},l)),await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED",l),this._returnResult({data:l,error:c}))})}catch(i){if(de(i))return this._returnResult({data:null,error:i});throw i}};return this.lock!=null?this._acquireLock(this.lockAcquireTimeout,t):t()}async _challenge(e){const t=async()=>{try{return await this._useSession(async i=>{var r;const{data:s,error:a}=i;if(a)return this._returnResult({data:null,error:a});const o=await xe(this.fetch,"POST",`${this.url}/factors/${e.factorId}/challenge`,{body:e,headers:this.headers,jwt:(r=s==null?void 0:s.session)===null||r===void 0?void 0:r.access_token});if(o.error)return o;const{data:l}=o;if(l.type!=="webauthn")return{data:l,error:null};switch(l.webauthn.type){case"create":return{data:Object.assign(Object.assign({},l),{webauthn:Object.assign(Object.assign({},l.webauthn),{credential_options:Object.assign(Object.assign({},l.webauthn.credential_options),{publicKey:nh(l.webauthn.credential_options.publicKey)})})}),error:null};case"request":return{data:Object.assign(Object.assign({},l),{webauthn:Object.assign(Object.assign({},l.webauthn),{credential_options:Object.assign(Object.assign({},l.webauthn.credential_options),{publicKey:ih(l.webauthn.credential_options.publicKey)})})}),error:null}}})}catch(i){if(de(i))return this._returnResult({data:null,error:i});throw i}};return this.lock!=null?this._acquireLock(this.lockAcquireTimeout,t):t()}async _challengeAndVerify(e){const{data:t,error:i}=await this._challenge({factorId:e.factorId});return i?this._returnResult({data:null,error:i}):await this._verify({factorId:e.factorId,challengeId:t.id,code:e.code})}async _listFactors(){var e;const{data:{user:t},error:i}=await this.getUser();if(i)return{data:null,error:i};const r={all:[],phone:[],totp:[],webauthn:[],recovery_code:[]};for(const s of(e=t==null?void 0:t.factors)!==null&&e!==void 0?e:[])r.all.push(s),s.status==="verified"&&s.factor_type in r&&Array.isArray(r[s.factor_type])&&r[s.factor_type].push(s);return{data:r,error:null}}async _getAuthenticatorAssuranceLevel(e){var t,i,r,s;if(e)try{const{payload:f}=ra(e);let g=null;f.aal&&(g=f.aal);let _=g;const{data:{user:m},error:p}=await this.getUser(e);if(p)return this._returnResult({data:null,error:p});((i=(t=m==null?void 0:m.factors)===null||t===void 0?void 0:t.filter(w=>w.status==="verified"))!==null&&i!==void 0?i:[]).length>0&&(_="aal2");const v=f.amr||[];return{data:{currentLevel:g,nextLevel:_,currentAuthenticationMethods:v},error:null}}catch(f){if(de(f))return this._returnResult({data:null,error:f});throw f}const{data:{session:a},error:o}=await this.getSession();if(o)return this._returnResult({data:null,error:o});if(!a)return{data:{currentLevel:null,nextLevel:null,currentAuthenticationMethods:[]},error:null};const{payload:l}=ra(a.access_token);let c=null;l.aal&&(c=l.aal);let u=c;((s=(r=a.user.factors)===null||r===void 0?void 0:r.filter(f=>f.status==="verified"))!==null&&s!==void 0?s:[]).length>0&&(u="aal2");const d=l.amr||[];return{data:{currentLevel:c,nextLevel:u,currentAuthenticationMethods:d},error:null}}async _getRecoveryCodesStatus(){ts(this.experimental);try{return await this._useSession(async e=>{var t;const{data:i,error:r}=e;if(r)return this._returnResult({data:null,error:r});const{data:s,error:a}=await xe(this.fetch,"GET",`${this.url}/factors/recovery-codes`,{headers:this.headers,jwt:(t=i==null?void 0:i.session)===null||t===void 0?void 0:t.access_token});return a?this._returnResult({data:null,error:a}):this._returnResult({data:s,error:null})})}catch(e){if(de(e))return this._returnResult({data:null,error:e});throw e}}async _generateRecoveryCodes(e){ts(this.experimental);try{return await this._useSession(async t=>{var i;const{data:r,error:s}=t;if(s)return this._returnResult({data:null,error:s});const{data:a,error:o}=await xe(this.fetch,"POST",`${this.url}/factors/recovery-codes`,{body:e!=null&&e.friendlyName?{friendly_name:e.friendlyName}:void 0,headers:this.headers,jwt:(i=r==null?void 0:r.session)===null||i===void 0?void 0:i.access_token});return o?this._returnResult({data:null,error:o}):this._returnResult({data:a,error:null})})}catch(t){if(de(t))return this._returnResult({data:null,error:t});throw t}}async _verifyRecoveryCode(e){ts(this.experimental);const t=async()=>{try{return await this._useSession(async i=>{var r;const{data:s,error:a}=i;if(a)return this._returnResult({data:null,error:a});const{data:o,error:l}=await xe(this.fetch,"POST",`${this.url}/factors/recovery-codes/verify`,{body:{code:e.code},headers:this.headers,jwt:(r=s==null?void 0:s.session)===null||r===void 0?void 0:r.access_token});if(l)return this._returnResult({data:null,error:l});const c=Object.assign({expires_at:Hd(o.expires_in)},o);return await this._saveSession(c),await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED",c),this._returnResult({data:o,error:null})})}catch(i){if(de(i))return this._returnResult({data:null,error:i});throw i}};return this.lock!=null?this._acquireLock(this.lockAcquireTimeout,t):t()}async _regenerateRecoveryCodes(){ts(this.experimental);try{return await this._useSession(async e=>{var t;const{data:i,error:r}=e;if(r)return this._returnResult({data:null,error:r});const{data:s,error:a}=await xe(this.fetch,"POST",`${this.url}/factors/recovery-codes/regenerate`,{headers:this.headers,jwt:(t=i==null?void 0:i.session)===null||t===void 0?void 0:t.access_token});return a?this._returnResult({data:null,error:a}):this._returnResult({data:s,error:null})})}catch(e){if(de(e))return this._returnResult({data:null,error:e});throw e}}async _unenrollRecoveryCodes(){ts(this.experimental);try{return await this._useSession(async e=>{var t;const{data:i,error:r}=e;if(r)return this._returnResult({data:null,error:r});const{data:s,error:a}=await xe(this.fetch,"DELETE",`${this.url}/factors/recovery-codes`,{headers:this.headers,jwt:(t=i==null?void 0:i.session)===null||t===void 0?void 0:t.access_token});return a?this._returnResult({data:null,error:a}):this._returnResult({data:s,error:null})})}catch(e){if(de(e))return this._returnResult({data:null,error:e});throw e}}async _getAuthorizationDetails(e){try{return await this._useSession(async t=>{const{data:{session:i},error:r}=t;return r?this._returnResult({data:null,error:r}):i?await xe(this.fetch,"GET",`${this.url}/oauth/authorizations/${e}`,{headers:this.headers,jwt:i.access_token,xform:s=>({data:s,error:null})}):this._returnResult({data:null,error:new Pt})})}catch(t){if(de(t))return this._returnResult({data:null,error:t});throw t}}async _approveAuthorization(e,t){try{return await this._useSession(async i=>{const{data:{session:r},error:s}=i;if(s)return this._returnResult({data:null,error:s});if(!r)return this._returnResult({data:null,error:new Pt});const a=await xe(this.fetch,"POST",`${this.url}/oauth/authorizations/${e}/consent`,{headers:this.headers,jwt:r.access_token,body:{action:"approve"},xform:o=>({data:o,error:null})});return a.data&&a.data.redirect_url&&Lt()&&!(t!=null&&t.skipBrowserRedirect)&&window.location.assign(a.data.redirect_url),a})}catch(i){if(de(i))return this._returnResult({data:null,error:i});throw i}}async _denyAuthorization(e,t){try{return await this._useSession(async i=>{const{data:{session:r},error:s}=i;if(s)return this._returnResult({data:null,error:s});if(!r)return this._returnResult({data:null,error:new Pt});const a=await xe(this.fetch,"POST",`${this.url}/oauth/authorizations/${e}/consent`,{headers:this.headers,jwt:r.access_token,body:{action:"deny"},xform:o=>({data:o,error:null})});return a.data&&a.data.redirect_url&&Lt()&&!(t!=null&&t.skipBrowserRedirect)&&window.location.assign(a.data.redirect_url),a})}catch(i){if(de(i))return this._returnResult({data:null,error:i});throw i}}async _listOAuthGrants(){try{return await this._useSession(async e=>{const{data:{session:t},error:i}=e;return i?this._returnResult({data:null,error:i}):t?await xe(this.fetch,"GET",`${this.url}/user/oauth/grants`,{headers:this.headers,jwt:t.access_token,xform:r=>({data:r,error:null})}):this._returnResult({data:null,error:new Pt})})}catch(e){if(de(e))return this._returnResult({data:null,error:e});throw e}}async _revokeOAuthGrant(e){try{return await this._useSession(async t=>{const{data:{session:i},error:r}=t;return r?this._returnResult({data:null,error:r}):i?(await xe(this.fetch,"DELETE",`${this.url}/user/oauth/grants`,{headers:this.headers,jwt:i.access_token,query:{client_id:e.clientId},noResolveJson:!0}),{data:{},error:null}):this._returnResult({data:null,error:new Pt})})}catch(t){if(de(t))return this._returnResult({data:null,error:t});throw t}}async fetchJwk(e,t={keys:[]}){let i=t.keys.find(o=>o.kid===e);if(i)return i;const r=Date.now();if(i=this.jwks.keys.find(o=>o.kid===e),i&&this.jwks_cached_at+Sw>r)return i;const{data:s,error:a}=await xe(this.fetch,"GET",`${this.url}/.well-known/jwks.json`,{headers:this.headers});if(a)throw a;return!s.keys||s.keys.length===0||(this.jwks=s,this.jwks_cached_at=r,i=s.keys.find(o=>o.kid===e),!i)?null:i}async getClaims(e,t={}){try{let i=e;if(!i){const{data:f,error:g}=await this.getSession();if(g||!f.session)return this._returnResult({data:null,error:g});i=f.session.access_token}const{header:r,payload:s,signature:a,raw:{header:o,payload:l}}=ra(i);if(!(t!=null&&t.allowExpired))try{qw(s.exp)}catch(f){throw new Ra(f instanceof Error?f.message:"JWT validation failed")}const c=!r.alg||r.alg.startsWith("HS")||!r.kid||!("crypto"in globalThis&&"subtle"in globalThis.crypto)?null:await this.fetchJwk(r.kid,t!=null&&t.keys?{keys:t.keys}:t==null?void 0:t.jwks);if(!c){const{error:f}=await this.getUser(i);if(f)throw f;return{data:{claims:s,header:r,signature:a},error:null}}const u=Xw(r.alg),h=await crypto.subtle.importKey("jwk",c,u,!0,["verify"]);if(!await crypto.subtle.verify(u,h,a,Pw(`${o}.${l}`)))throw new Ra("Invalid JWT signature");return{data:{claims:s,header:r,signature:a},error:null}}catch(i){if(de(i))return this._returnResult({data:null,error:i});throw i}}async signInWithPasskey(e){var t,i,r,s;try{if(!Ia())return this._returnResult({data:null,error:new yn("Browser does not support WebAuthn",null)});const{data:a,error:o}=await this._startPasskeyAuthentication({options:{captchaToken:(t=e==null?void 0:e.options)===null||t===void 0?void 0:t.captchaToken}});if(o||!a)return this._returnResult({data:null,error:o});const l=ih(a.options),c=(r=(i=e==null?void 0:e.options)===null||i===void 0?void 0:i.signal)!==null&&r!==void 0?r:kl.createNewAbortSignal(),{data:u,error:h}=await Xd({publicKey:l,signal:c,mediation:(s=e==null?void 0:e.options)===null||s===void 0?void 0:s.mediation});if(h||!u)return this._returnResult({data:null,error:h??new yn("WebAuthn ceremony failed",null)});const d=sh(u);return this._verifyPasskeyAuthentication({challengeId:a.challenge_id,credential:d})}catch(a){if(de(a))return this._returnResult({data:null,error:a});throw a}}async registerPasskey(e){var t,i;try{if(!Ia())return this._returnResult({data:null,error:new yn("Browser does not support WebAuthn",null)});const{data:r,error:s}=await this._startPasskeyRegistration();if(s||!r)return this._returnResult({data:null,error:s});const a=nh(r.options),o=(i=(t=e==null?void 0:e.options)===null||t===void 0?void 0:t.signal)!==null&&i!==void 0?i:kl.createNewAbortSignal(),{data:l,error:c}=await qd({publicKey:a,signal:o});if(c||!l)return this._returnResult({data:null,error:c??new yn("WebAuthn ceremony failed",null)});const u=rh(l);return this._verifyPasskeyRegistration({challengeId:r.challenge_id,credential:u})}catch(r){if(de(r))return this._returnResult({data:null,error:r});throw r}}async _startPasskeyRegistration(){try{return await this._useSession(async e=>{const{data:{session:t},error:i}=e;if(i)return this._returnResult({data:null,error:i});if(!t)return this._returnResult({data:null,error:new Pt});const{data:r,error:s}=await xe(this.fetch,"POST",`${this.url}/passkeys/registration/options`,{headers:this.headers,jwt:t.access_token,body:{}});return s?this._returnResult({data:null,error:s}):this._returnResult({data:r,error:null})})}catch(e){if(de(e))return this._returnResult({data:null,error:e});throw e}}async _verifyPasskeyRegistration(e){try{return await this._useSession(async t=>{const{data:{session:i},error:r}=t;if(r)return this._returnResult({data:null,error:r});if(!i)return this._returnResult({data:null,error:new Pt});const{data:s,error:a}=await xe(this.fetch,"POST",`${this.url}/passkeys/registration/verify`,{headers:this.headers,jwt:i.access_token,body:{challenge_id:e.challengeId,credential:e.credential}});return a?this._returnResult({data:null,error:a}):this._returnResult({data:s,error:null})})}catch(t){if(de(t))return this._returnResult({data:null,error:t});throw t}}async _startPasskeyAuthentication(e){var t;try{const{data:i,error:r}=await xe(this.fetch,"POST",`${this.url}/passkeys/authentication/options`,{headers:this.headers,body:{gotrue_meta_security:{captcha_token:(t=e==null?void 0:e.options)===null||t===void 0?void 0:t.captchaToken}}});return r?this._returnResult({data:null,error:r}):this._returnResult({data:i,error:null})}catch(i){if(de(i))return this._returnResult({data:null,error:i});throw i}}async _verifyPasskeyAuthentication(e){try{const{data:t,error:i}=await xe(this.fetch,"POST",`${this.url}/passkeys/authentication/verify`,{headers:this.headers,body:{challenge_id:e.challengeId,credential:e.credential},xform:un});return i?this._returnResult({data:null,error:i}):(t.session&&(await this._saveSession(t.session),await this._notifyAllSubscribers("SIGNED_IN",t.session)),this._returnResult({data:t,error:null}))}catch(t){if(de(t))return this._returnResult({data:null,error:t});throw t}}async _listPasskeys(){try{return await this._useSession(async e=>{const{data:{session:t},error:i}=e;if(i)return this._returnResult({data:null,error:i});if(!t)return this._returnResult({data:null,error:new Pt});const{data:r,error:s}=await xe(this.fetch,"GET",`${this.url}/passkeys`,{headers:this.headers,jwt:t.access_token,xform:a=>({data:a,error:null})});return s?this._returnResult({data:null,error:s}):this._returnResult({data:r,error:null})})}catch(e){if(de(e))return this._returnResult({data:null,error:e});throw e}}async _updatePasskey(e){try{return await this._useSession(async t=>{const{data:{session:i},error:r}=t;if(r)return this._returnResult({data:null,error:r});if(!i)return this._returnResult({data:null,error:new Pt});const{data:s,error:a}=await xe(this.fetch,"PATCH",`${this.url}/passkeys/${e.passkeyId}`,{headers:this.headers,jwt:i.access_token,body:{friendly_name:e.friendlyName}});return a?this._returnResult({data:null,error:a}):this._returnResult({data:s,error:null})})}catch(t){if(de(t))return this._returnResult({data:null,error:t});throw t}}async _deletePasskey(e){try{return await this._useSession(async t=>{const{data:{session:i},error:r}=t;if(r)return this._returnResult({data:null,error:r});if(!i)return this._returnResult({data:null,error:new Pt});const{error:s}=await xe(this.fetch,"DELETE",`${this.url}/passkeys/${e.passkeyId}`,{headers:this.headers,jwt:i.access_token,noResolveJson:!0});return s?this._returnResult({data:null,error:s}):this._returnResult({data:null,error:null})})}catch(t){if(de(t))return this._returnResult({data:null,error:t});throw t}}}ys.nextInstanceID={};const _x=ys,vx="2.118.0";let ls="",Da;if(typeof Deno<"u"){var Do;ls="deno",Da=(Do=Deno.version)===null||Do===void 0?void 0:Do.deno}else if(typeof document<"u")ls="web";else if(typeof navigator<"u"&&navigator.product==="ReactNative")ls="react-native";else{var Uo;ls="node";const n=globalThis.process;Da=n==null||(Uo=n.version)===null||Uo===void 0?void 0:Uo.replace(/^v/,"")}const Kd=[`runtime=${ls}`];Da&&Kd.push(`runtime-version=${Da}`);const yx={"X-Client-Info":`supabase-js/${vx}; ${Kd.join("; ")}`},wx={headers:yx},xx={schema:"public"},Sx={autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,flowType:"implicit"},bx={},Ex={enabled:!1,respectSamplingDecision:!0};function Mx(n){if(!n||typeof n!="string")return null;const e=n.split("-");if(e.length!==4)return null;const[t,i,r,s]=e;if(t.length!==2||i.length!==32||r.length!==16||s.length!==2)return null;const a=/^[0-9a-f]+$/i;return!a.test(t)||!a.test(i)||!a.test(r)||!a.test(s)||i==="00000000000000000000000000000000"||r==="0000000000000000"?null:{version:t,traceId:i,parentId:r,traceFlags:s,isSampled:(parseInt(s,16)&1)===1}}function Tx(n,e){if(!n||!e||e.length===0)return!1;let t;if(n instanceof URL)t=n;else try{t=new URL(n)}catch{return!1}for(const i of e)try{if(typeof i=="string"){if(Ax(t.hostname,i))return!0}else if(i instanceof RegExp){if(i.test(t.hostname))return!0}else if(typeof i=="function"&&i(t))return!0}catch{continue}return!1}function Ax(n,e){if(e===n)return!0;if(e.startsWith("*.")){const t=e.slice(2);if(n.endsWith(t)&&(n===t||n.endsWith("."+t)))return!0}return!1}function Rx(n){const e=[];try{const t=new URL(n);e.push(t.hostname)}catch{}return e.push("*.supabase.co","*.supabase.in"),e.push("localhost","127.0.0.1","[::1]"),e}function ws(n){"@babel/helpers - typeof";return ws=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ws(n)}function Cx(n,e){if(ws(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e);if(ws(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function Px(n){var e=Cx(n,"string");return ws(e)=="symbol"?e:e+""}function Ix(n,e,t){return(e=Px(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function oh(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function wt(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?oh(Object(t),!0).forEach(function(i){Ix(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):oh(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}const Lx=n=>n?(...e)=>n(...e):(...e)=>fetch(...e),Dx=()=>Headers,Yd=n=>n.startsWith("sb_publishable_")||n.startsWith("sb_secret_"),Ux="sb_temp_",lh=new Set,Nx=n=>{var e,t;if(!n.startsWith("sb_")||Yd(n)||n.startsWith(Ux))return;const i=(e=(t=n.match(/^sb_[a-zA-Z0-9]+_/))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:"unknown";lh.has(i)||(lh.add(i),console.warn("@supabase/supabase-js: Unrecognized Supabase API key format. The client will proceed and send this key as-is; if you see authentication errors you may need to upgrade @supabase/supabase-js to a version that recognizes this key type."))},ch=(n,e,t,i,r,s)=>{const a=Lx(i),o=Dx(),l=(r==null?void 0:r.enabled)===!0,c=(r==null?void 0:r.respectSamplingDecision)!==!1,u=l?Rx(e):null,h=!(s!=null&&s.omitApiKeyAsBearer&&Yd(n));return async(d,f)=>{const g=await t();let _=new o(f==null?void 0:f.headers);if(_.has("apikey")||_.set("apikey",n),!_.has("Authorization")){const m=g??(h?n:null);m&&_.set("Authorization",`Bearer ${m}`)}if(u){const m=Ox(d,u,c);m&&(m.traceparent&&!_.has("traceparent")&&_.set("traceparent",m.traceparent),m.tracestate&&!_.has("tracestate")&&_.set("tracestate",m.tracestate),m.baggage&&!_.has("baggage")&&_.set("baggage",m.baggage))}return a(d,wt(wt({},f),{},{headers:_}))}};let uh=!1,hh=!1;function Ox(n,e,t){const i=Uv();if(!i)return uh||(uh=!0,console.warn("@supabase/supabase-js: tracePropagation is enabled but the tracing runtime is not loaded, so trace headers will not be attached. Add `import '@supabase/supabase-js/tracing'` at your application entry point (requires the OpenTelemetry API package to be installed). The CDN/UMD build does not support trace propagation.")),null;if(!Tx(typeof n=="string"||n instanceof URL?n:n.url,e))return null;const r=i();if(!r||!r.traceparent){var s;if(!(r==null||(s=r.carrierKeys)===null||s===void 0)&&s.length&&!hh){hh=!0;const a=r.carrierKeys.includes("sentry-trace")?" Sentry detected: set `propagateTraceparent: true` in Sentry.init() to emit it.":" Configure your tracing SDK to emit W3C trace context on outgoing requests.";console.warn(`@supabase/supabase-js: tracePropagation is enabled and a tracing SDK is active, but its propagator wrote [${r.carrierKeys.join(", ")}] and no W3C traceparent header, so trace headers will not be attached.`+a)}return null}if(t){const a=Mx(r.traceparent);if(a&&!a.isSampled)return{traceparent:r.traceparent}}return r}function dh(n){return typeof n=="boolean"?{enabled:n}:n}function kx(n){return n.endsWith("/")?n:n+"/"}let fh=!1;function Fx(n){fh||typeof n!="object"||n===null||!("schema"in n)||n.schema===void 0||(fh=!0,console.warn(`@supabase/supabase-js: The "schema" option must be nested under "db", e.g. createClient(url, key, { db: { schema: 'myschema' } }). A top-level "schema" is ignored and queries go to the default schema.`))}function Bx(n,e){var t,i,r,s,a,o;const{db:l,auth:c,realtime:u,global:h}=n,{db:d,auth:f,realtime:g,global:_}=e,m=dh(n.tracePropagation),p=dh(e.tracePropagation),y={db:wt(wt({},d),l),auth:wt(wt({},f),c),realtime:wt(wt({},g),u),storage:{},global:wt(wt(wt({},_),h),{},{headers:wt(wt({},(t=_==null?void 0:_.headers)!==null&&t!==void 0?t:{}),(i=h==null?void 0:h.headers)!==null&&i!==void 0?i:{})}),tracePropagation:{enabled:(r=(s=m==null?void 0:m.enabled)!==null&&s!==void 0?s:p==null?void 0:p.enabled)!==null&&r!==void 0?r:!1,respectSamplingDecision:(a=(o=m==null?void 0:m.respectSamplingDecision)!==null&&o!==void 0?o:p==null?void 0:p.respectSamplingDecision)!==null&&a!==void 0?a:!0},accessToken:async()=>""};return n.accessToken?y.accessToken=n.accessToken:delete y.accessToken,y}function zx(n){const e=n==null?void 0:n.trim();if(!e)throw new Error("supabaseUrl is required.");if(!e.match(/^https?:\/\//i))throw new Error("Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.");try{return new URL(kx(e))}catch{throw Error("Invalid supabaseUrl: Provided URL is malformed.")}}var Hx=class extends _x{constructor(n){super(n)}},Gx=class{constructor(n,e,t){var i,r;this.supabaseUrl=n,this.supabaseKey=e;const s=zx(n);if(!e)throw new Error("supabaseKey is required.");Nx(e),Fx(t),this.realtimeUrl=new URL("realtime/v1",s),this.realtimeUrl.protocol=this.realtimeUrl.protocol.replace("http","ws"),this.authUrl=new URL("auth/v1",s),this.storageUrl=new URL("storage/v1",s),this.functionsUrl=new URL("functions/v1",s);const a=`sb-${s.hostname.split(".")[0]}-auth-token`,o={db:xx,realtime:bx,auth:wt(wt({},Sx),{},{storageKey:a}),global:wx,tracePropagation:Ex},l=Bx(t??{},o);if(this.settings=l,this.storageKey=(i=l.auth.storageKey)!==null&&i!==void 0?i:"",this.headers=(r=l.global.headers)!==null&&r!==void 0?r:{},l.accessToken)this.accessToken=l.accessToken,this.auth=new Proxy({},{get:(u,h)=>{throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(h)} is not possible`)}});else{var c;this.auth=this._initSupabaseAuthClient((c=l.auth)!==null&&c!==void 0?c:{},this.headers,l.global.fetch)}this.fetch=ch(e,n,this._getSessionToken.bind(this),l.global.fetch,l.tracePropagation),this.functionsFetch=ch(e,n,this._getSessionToken.bind(this),l.global.fetch,l.tracePropagation,{omitApiKeyAsBearer:!0}),this.realtime=this._initRealtimeClient(wt({headers:this.headers,accessToken:this._getAccessToken.bind(this),fetch:this.fetch},l.realtime)),this.accessToken&&Promise.resolve(this.accessToken()).then(u=>this.realtime.setAuth(u)).catch(u=>console.warn("Failed to set initial Realtime auth token:",u)),this.rest=new Xv(new URL("rest/v1",s).href,{headers:this.headers,schema:l.db.schema,fetch:this.fetch,timeout:l.db.timeout,urlLengthLimit:l.db.urlLengthLimit,retry:l.db.retry}),this.storage=new mw(this.storageUrl.href,this.headers,this.fetch,t==null?void 0:t.storage),l.accessToken||this._listenForAuthEvents()}get functions(){return new Fv(this.functionsUrl.href,{headers:this.headers,customFetch:this.functionsFetch})}from(n){return this.rest.from(n)}schema(n){return this.rest.schema(n)}getOpenApiSpec(){return this.rest.getOpenApiSpec()}rpc(n,e={},t={head:!1,get:!1,count:void 0}){return this.rest.rpc(n,e,t)}channel(n,e={config:{}}){return this.realtime.channel(n,e)}getChannels(){return this.realtime.getChannels()}removeChannel(n){return this.realtime.removeChannel(n)}removeAllChannels(){return this.realtime.removeAllChannels()}async _getSessionToken(){var n=this,e,t;if(n.accessToken)return await n.accessToken();const{data:i}=await n.auth.getSession();return(e=(t=i.session)===null||t===void 0?void 0:t.access_token)!==null&&e!==void 0?e:null}async _getAccessToken(){var n=this,e;return(e=await n._getSessionToken())!==null&&e!==void 0?e:n.supabaseKey}_initSupabaseAuthClient({autoRefreshToken:n,persistSession:e,detectSessionInUrl:t,storage:i,userStorage:r,storageKey:s,flowType:a,lock:o,debug:l,throwOnError:c,experimental:u,lockAcquireTimeout:h,skipAutoInitialize:d},f,g){const _={Authorization:`Bearer ${this.supabaseKey}`,apikey:`${this.supabaseKey}`};return new Hx({url:this.authUrl.href,headers:wt(wt({},_),f),storageKey:s,autoRefreshToken:n,persistSession:e,detectSessionInUrl:t,storage:i,userStorage:r,flowType:a,lock:o,debug:l,throwOnError:c,experimental:u,fetch:g,lockAcquireTimeout:h,skipAutoInitialize:d,hasCustomAuthorizationHeader:Object.keys(this.headers).some(m=>m.toLowerCase()==="authorization")})}_initRealtimeClient(n){return new By(this.realtimeUrl.href,wt(wt({},n),{},{params:wt(wt({},{apikey:this.supabaseKey}),n==null?void 0:n.params)}))}_listenForAuthEvents(){return this.auth.onAuthStateChange((n,e)=>{this._handleTokenChanged(n,"CLIENT",e==null?void 0:e.access_token)})}_handleTokenChanged(n,e,t){(n==="TOKEN_REFRESHED"||n==="SIGNED_IN"||n==="INITIAL_SESSION")&&this.changedAccessToken!==t?(this.changedAccessToken=t,this.realtime.setAuth(t)):n==="SIGNED_OUT"&&(this.realtime.setAuth(),e=="STORAGE"&&this.auth.signOut(),this.changedAccessToken=void 0)}};const Vx=(n,e,t)=>new Gx(n,e,t);function Wx(){if(typeof window<"u"||globalThis.Deno!==void 0)return!1;const n=globalThis.process;if(!n)return!1;const e=n.version;if(e==null)return!1;const t=e.match(/^v(\d+)\./);return t?parseInt(t[1],10)<=20:!1}Wx()&&console.warn("⚠️  Node.js 20 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 22 or later. For more information, visit: https://github.com/orgs/supabase/discussions/45715");const jx={},$x="https://iblickausofcvyzqhqlg.supabase.co",qx="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlibGlja2F1c29mY3Z5enFocWxnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI1NTIzODQsImV4cCI6MjEwODEyODM4NH0.2o7CUHD3xxLMremFGUup8EC5qFwMTP1B5VXMaXIYDqY",Jd=jx,Zd=Jd.VITE_SUPABASE_URL??$x,Qd=Jd.VITE_SUPABASE_ANON_KEY??qx,$a=Zd.startsWith("https://")&&Qd.length>40,Xt=$a?Vx(Zd,Qd,{auth:{persistSession:!0,autoRefreshToken:!0,detectSessionInUrl:!0}}):null,xt={status:$a?"loading":"disabled",profile:null,data:null,error:null},Fl=new Set;function fi(){for(const n of Fl)n(xt)}function xs(){return xt}function ef(n){return Fl.add(n),n(xt),()=>Fl.delete(n)}function Dn(){if(!Xt)throw new Error("尚未配置 Supabase，账号系统不可用");return Xt}function tf(n){const e=n.toLowerCase();return e.includes("invalid login credentials")?"邮箱或密码不正确":e.includes("email not confirmed")?"邮箱尚未验证，请先到邮箱里点击确认链接":e.includes("user already registered")?"该邮箱已注册，请直接登录":e.includes("password should be at least")?"密码至少需要 6 位":e.includes("unable to validate email")?"邮箱格式不正确":e.includes("rate limit")||e.includes("too many")?"操作太频繁，请稍后再试":e.includes("network")?"网络异常，请检查连接后重试":n}async function Xx(n){const e=Dn(),{data:t,error:i}=await e.from("profiles").select("*").eq("id",n).maybeSingle();if(i)throw i;return t??null}async function Kx(n){const e=Dn(),{data:t,error:i}=await e.from("player_data").select("*").eq("user_id",n).maybeSingle();if(i)throw i;return t??null}async function qa(n){var i,r;const e=await Xx(n);if(!e){const s=Dn(),a=(await s.auth.getUser()).data.user;if(!a)throw new Error("登录状态异常，请重新登录");return await s.from("profiles").upsert({id:a.id,email:a.email,display_name:((i=a.user_metadata)==null?void 0:i.display_name)??((r=a.email)==null?void 0:r.split("@")[0])??"玩家"}),await s.from("player_data").upsert({user_id:a.id}),qa(n)}if(e.banned){await(Xt==null?void 0:Xt.auth.signOut()),xt.status="signedOut",xt.profile=null,xt.data=null,xt.error="该账号已被封禁，无法登录",fi();return}const t=await Kx(n);xt.profile=e,xt.data=t,xt.status="signedIn",xt.error=null,fi(),Xt==null||Xt.from("profiles").update({last_seen_at:new Date().toISOString()}).eq("id",n)}async function Yx(){var n;if(!Xt){fi();return}xt.status="loading",fi();try{const{data:e}=await Xt.auth.getSession(),t=(n=e.session)==null?void 0:n.user;t?await qa(t.id):(xt.status="signedOut",fi())}catch(e){xt.status="signedOut",xt.error=e instanceof Error?e.message:"账号初始化失败",fi()}Xt.auth.onAuthStateChange((e,t)=>{(e==="SIGNED_OUT"||!(t!=null&&t.user))&&(xt.status="signedOut",xt.profile=null,xt.data=null,fi())})}async function Jx(n,e){const t=Dn(),{error:i}=await t.auth.signInWithPassword({email:n,password:e});if(i)throw new Error(tf(i.message));const{data:r}=await t.auth.getUser();if(!r.user)throw new Error("登录失败，请重试");await qa(r.user.id)}async function Zx(n,e,t){const i=Dn(),{data:r,error:s}=await i.auth.signUp({email:n,password:e,options:{data:{display_name:t}}});if(s)throw new Error(tf(s.message));return r.session?(await qa(r.session.user.id),{needsConfirm:!1}):{needsConfirm:!0}}async function Qx(){await(Xt==null?void 0:Xt.auth.signOut()),xt.status="signedOut",xt.profile=null,xt.data=null,xt.error=null,fi()}async function eS(n){let t=Dn().from("profiles").select("*").order("created_at",{ascending:!1});const i=n.trim();i&&(t=t.or(`email.ilike.%${i}%,display_name.ilike.%${i}%`));const{data:r,error:s}=await t.limit(200);if(s)throw s;return r??[]}async function ph(n,e){const t=Dn(),{error:i}=await t.from("profiles").update(e).eq("id",n);if(i)throw i}async function tS(n){const e=Dn(),{data:t,error:i}=await e.from("player_data").select("*").eq("user_id",n).maybeSingle();if(i)throw i;return t??null}async function nS(n,e){const t=Dn(),{error:i}=await t.from("player_data").update({...e,updated_at:new Date().toISOString()}).eq("user_id",n);if(i)throw i}async function iS(n){const e=Dn(),{error:t}=await e.from("player_data").update({progress:{},assets:{},characters:[],settings:{},updated_at:new Date().toISOString()}).eq("user_id",n);if(t)throw t}let gi=null,tn="signin",Ti=!1;const Nr=n=>document.querySelector(n);function mh(){const n=Nr("#auth-modal");n&&(n.hidden=!0,document.documentElement.classList.remove("modal-open"),gi&&(gi(!1),gi=null))}function nf(n){const e=Nr("#auth-modal");return e?(e.hidden=!1,document.documentElement.classList.add("modal-open"),rf(n),new Promise(t=>{gi=t})):Promise.resolve(!1)}function Ua(n){const e=Nr("#auth-modal");e&&(e.hidden=!0),document.documentElement.classList.remove("modal-open"),gi&&(gi(n),gi=null)}function No(n,e){const t=document.createElement("label");t.className="auth-field";const i=document.createElement("span");return i.className="auth-field__label",i.textContent=n,t.append(i,e),t}function Oo(n,e,t,i){const r=document.createElement("input");return r.className="auth-field__input",r.type=n,r.placeholder=e,r.setAttribute("autocomplete",t),r.name=i,r.required=!0,r}function rf(n){const e=Nr("#auth-body"),t=Nr("#auth-title");if(!e||!t)return;if(e.replaceChildren(),!$a){t.textContent="账号系统待接入";const h=document.createElement("div");h.className="auth-note",h.innerHTML="<p>尚未配置 Supabase 项目，玩家账号暂不可用。</p><p>配置后即可注册 / 登录，并把进度、资产、角色与设置保存到云端账号。</p>",e.append(h);return}t.textContent=tn==="signin"?"玩家登录":"创建账号";const i=document.createElement("div");i.className="auth-tabs";for(const[h,d]of[["signin","登录"],["signup","注册"]]){const f=document.createElement("button");f.type="button",f.className="auth-tab"+(tn===h?" is-active":""),f.textContent=d,f.addEventListener("click",()=>{Ti||(tn=h,rf(n))}),i.append(f)}if(e.append(i),n){const h=document.createElement("p");h.className="auth-hint",h.textContent=n,e.append(h)}const r=document.createElement("form");r.className="auth-form",r.noValidate=!0;const s=Oo("text","游戏内昵称","off","display_name"),a=Oo("email","you@example.com","email","email"),o=Oo("password",tn==="signup"?"至少 6 位密码":"密码",tn==="signup"?"new-password":"current-password","password");tn==="signup"&&r.append(No("昵称",s)),r.append(No("邮箱",a),No("密码",o));const l=document.createElement("p");l.className="auth-error",l.hidden=!0;const c=document.createElement("button");c.className="auth-submit",c.type="submit",c.textContent=tn==="signin"?"登录":"注册并登录",r.append(l,c),r.addEventListener("submit",async h=>{if(h.preventDefault(),Ti)return;const d=a.value.trim(),f=o.value,g=s.value.trim()||d.split("@")[0];if(!d||!f){l.hidden=!1,l.textContent="请填写邮箱和密码";return}if(tn==="signup"&&f.length<6){l.hidden=!1,l.textContent="密码至少需要 6 位";return}Ti=!0,c.disabled=!0,c.textContent=tn==="signin"?"登录中…":"创建中…",l.hidden=!0;try{if(tn==="signin")await Jx(d,f),Ti=!1,Ua(!0);else{if((await Zx(d,f,g)).needsConfirm){l.classList.remove("is-error"),l.classList.add("is-ok"),l.hidden=!1,l.textContent="注册成功，请到邮箱点击确认链接后再登录",tn="signin",Ti=!1,c.disabled=!1,c.textContent="登录";return}Ti=!1,Ua(!0)}}catch(_){Ti=!1,c.disabled=!1,c.textContent=tn==="signin"?"登录":"注册并登录",l.hidden=!1,l.textContent=_ instanceof Error?_.message:"操作失败，请重试"}}),e.append(r);const u=document.createElement("p");u.className="auth-foot",u.textContent=tn==="signin"?"账号用于云端保存你的进度、资产与角色数据":"注册后昵称可随时在账号面板中修改",e.append(u)}function rS(){const n=Nr("#auth-modal");if(!n)return;n.querySelectorAll("[data-auth-close]").forEach(t=>{t.addEventListener("click",()=>mh())}),window.addEventListener("keydown",t=>{t.key==="Escape"&&!n.hidden&&mh()}),ef(t=>{t.status==="signedIn"&&!n.hidden&&gi&&Ua(!0)}),xs().status==="signedIn"&&Ua(!0)}const sa=[{key:"progress",label:"关卡进度"},{key:"assets",label:"资产与货币"},{key:"characters",label:"角色与装备"},{key:"settings",label:"设置与外观"}];let pt=null;function sS(n){return document.querySelector(n)}function sf(){var e;const n=xs();if(!$a){window.alert("尚未配置 Supabase，账号后台不可用");return}if(((e=n.profile)==null?void 0:e.role)!=="admin"){window.alert("当前账号没有管理员权限");return}pt||oS(),pt&&(pt.hidden=!1,document.documentElement.classList.add("modal-open"),Hi())}function aS(){pt&&(pt.hidden=!0,document.documentElement.classList.remove("modal-open"),Bl())}function oS(){const n=sS("#admin-panel");if(!n)return;pt=n;const e=document.createElement("header");e.className="admin__head";const t=document.createElement("div"),i=document.createElement("p");i.className="admin__kicker",i.textContent="ADMIN CONSOLE";const r=document.createElement("h2");r.className="admin__title",r.textContent="账号管理后台",t.append(i,r);const s=document.createElement("button");s.type="button",s.className="admin__close",s.textContent="×",s.setAttribute("aria-label","关闭后台"),s.addEventListener("click",aS),e.append(t,s);const a=document.createElement("div");a.className="admin__toolbar";const o=document.createElement("input");o.type="search",o.className="admin__search",o.placeholder="搜索邮箱或昵称";const l=document.createElement("button");l.type="button",l.className="admin__btn",l.textContent="刷新";const c=document.createElement("span");c.className="admin__count",a.append(o,l,c);const u=document.createElement("div");u.className="admin__body";const h=document.createElement("table");h.className="admin__table";const d=document.createElement("thead"),f=document.createElement("tr");for(const y of["昵称","邮箱","角色","状态","注册时间","最近登录","操作"]){const v=document.createElement("th");v.textContent=y,f.append(v)}d.append(f);const g=document.createElement("tbody");h.append(d,g),u.append(h),n.replaceChildren(e,a,u);let _;const m=()=>{window.clearTimeout(_),_=window.setTimeout(()=>void Hi(),280)};o.addEventListener("input",m),l.addEventListener("click",()=>void Hi());const p=document.createElement("div");p.className="admin__state",p.textContent="加载中…",u.append(p),n.__refresh=async()=>{await af(g,c,p,o.value)}}async function Hi(){const n=pt==null?void 0:pt.querySelector(".admin__table"),e=pt==null?void 0:pt.querySelector("tbody"),t=pt==null?void 0:pt.querySelector(".admin__count"),i=pt==null?void 0:pt.querySelector(".admin__state"),r=pt==null?void 0:pt.querySelector(".admin__search");!e||!t||!i||!r||(n==null||n.setAttribute("data-busy","true"),await af(e,t,i,r.value),n==null||n.removeAttribute("data-busy"))}async function af(n,e,t,i){t.hidden=!1,t.textContent="加载中…";try{const r=await eS(i);if(e.textContent=`共 ${r.length} 个账号`,t.hidden=!0,n.replaceChildren(),r.length===0){const s=document.createElement("tr"),a=document.createElement("td");a.colSpan=7,a.className="admin__empty",a.textContent="没有匹配的账号",s.append(a),n.append(s);return}for(const s of r)n.append(lS(s))}catch(r){t.hidden=!1,t.textContent=r instanceof Error?r.message:"读取账号失败"}}function lS(n){const e=document.createElement("tr");e.dataset.id=n.id,n.role==="admin"&&e.classList.add("is-admin"),n.banned&&e.classList.add("is-banned");const t=document.createElement("td");t.textContent=n.display_name||"—";const i=document.createElement("td");i.className="admin__email",i.textContent=n.email??"—";const r=document.createElement("td"),s=document.createElement("span");s.className="admin__tag"+(n.role==="admin"?" is-admin":""),s.textContent=n.role==="admin"?"管理员":"玩家",r.append(s);const a=document.createElement("td"),o=document.createElement("span");o.className="admin__tag"+(n.banned?" is-banned":" is-ok"),o.textContent=n.banned?"已封禁":"正常",a.append(o);const l=document.createElement("td");l.className="admin__time",l.textContent=new Date(n.created_at).toLocaleDateString("zh-CN");const c=document.createElement("td");c.className="admin__time",c.textContent=n.last_seen_at?new Date(n.last_seen_at).toLocaleDateString("zh-CN"):"—";const u=document.createElement("td");u.className="admin__actions";const h=document.createElement("button");h.type="button",h.className="admin__btn admin__btn--ghost",h.textContent="存档",h.addEventListener("click",()=>void cS(n));const d=document.createElement("button");d.type="button",d.className="admin__btn admin__btn--ghost",d.textContent=n.role==="admin"?"降为玩家":"设为管理员",d.addEventListener("click",async()=>{d.disabled=!0;try{await ph(n.id,{role:n.role==="admin"?"player":"admin"}),await Hi()}catch(g){window.alert(g instanceof Error?g.message:"操作失败"),d.disabled=!1}});const f=document.createElement("button");return f.type="button",f.className="admin__btn admin__btn--ghost"+(n.banned?"":" admin__btn--danger"),f.textContent=n.banned?"解封":"封禁",f.addEventListener("click",async()=>{if(!(!n.banned&&!window.confirm(`确定封禁 ${n.email??"该账号"}？`))){f.disabled=!0;try{await ph(n.id,{banned:!n.banned}),await Hi()}catch(g){window.alert(g instanceof Error?g.message:"操作失败"),f.disabled=!1}}}),u.append(h,d,f),e.append(t,i,r,a,l,c,u),e}function Bl(){pt==null||pt.querySelectorAll(".admin__editor").forEach(n=>n.remove())}async function cS(n){if(!pt)return;Bl(),n.id;const e=document.createElement("aside");e.className="admin__editor";const t=document.createElement("header");t.className="admin__editor-head";const i=document.createElement("h3");i.textContent=`存档 · ${n.display_name||n.email||n.id.slice(0,8)}`;const r=document.createElement("button");r.type="button",r.className="admin__close",r.textContent="×",r.addEventListener("click",Bl),t.append(i,r);const s=document.createElement("p");s.className="admin__editor-hint",s.textContent="直接编辑 JSON 后保存，玩家下次进入游戏会读到最新数据。";const a=document.createElement("div");a.className="admin__editor-body";const o=new Map;for(const d of sa){const f=document.createElement("label");f.className="admin__json-field";const g=document.createElement("span");g.textContent=d.label;const _=document.createElement("textarea");_.className="admin__json",_.spellcheck=!1,_.rows=5,_.dataset.key=d.key,f.append(g,_),a.append(f),o.set(d.key,_)}const l=document.createElement("p");l.className="admin__editor-status";const c=document.createElement("div");c.className="admin__editor-actions";const u=document.createElement("button");u.type="button",u.className="admin__btn admin__btn--primary",u.textContent="保存存档";const h=document.createElement("button");h.type="button",h.className="admin__btn admin__btn--danger",h.textContent="清空数据",c.append(u,h),e.append(t,s,a,l,c),pt.append(e);try{const d=await tS(n.id);for(const f of sa){const g=o.get(f.key),_=d?d[f.key]:null;g.value=JSON.stringify(_??(f.key==="characters"?[]:{}),null,2)}}catch(d){l.textContent=d instanceof Error?d.message:"读取存档失败"}u.addEventListener("click",async()=>{var f;const d={};for(const[g,_]of o)try{d[g]=JSON.parse(_.value||(g==="characters"?"[]":"{}"))}catch{l.textContent=`${(f=sa.find(m=>m.key===g))==null?void 0:f.label} 不是合法 JSON`;return}u.disabled=!0,l.textContent="保存中…";try{await nS(n.id,d),l.textContent="已保存",await Hi()}catch(g){l.textContent=g instanceof Error?g.message:"保存失败"}finally{u.disabled=!1}}),h.addEventListener("click",async()=>{if(window.confirm("确定清空该账号的全部存档数据？")){h.disabled=!0,l.textContent="清空中…";try{await iS(n.id),l.textContent="已清空";for(const d of sa){const f=o.get(d.key);f.value=JSON.stringify(d.key==="characters"?[]:{},null,2)}await Hi()}catch(d){l.textContent=d instanceof Error?d.message:"清空失败"}finally{h.disabled=!1}}})}function uS(){const n=document.querySelector("#account-slot");if(!n)return;const e=document.createElement("button");e.type="button",e.className="account-chip";const t=document.createElement("span");t.className="account-chip__avatar";const i=document.createElement("span");i.className="account-chip__name",e.append(t,i),n.append(e);const r=document.createElement("div");r.className="account-menu",r.hidden=!0,n.append(r);const s=()=>{r.hidden=!0,e.classList.remove("is-open")},a=()=>{const l=xs();if(l.status!=="signedIn"||!l.profile){s(),nf("登录后即可把进度与资产保存到你的账号");return}r.replaceChildren();const c=l.profile,u=l.data,h=document.createElement("div");h.className="account-menu__head";const d=document.createElement("p");d.className="account-menu__name",d.textContent=c.display_name||"玩家";const f=document.createElement("p");f.className="account-menu__email",f.textContent=c.email??"",h.append(d,f),r.append(h);const g=[["UID",c.id.slice(0,8)],["身份",c.role==="admin"?"管理员":"玩家"],["注册时间",new Date(c.created_at).toLocaleString("zh-CN")],["存档更新",u?new Date(u.updated_at).toLocaleString("zh-CN"):"尚未生成"]],_=document.createElement("dl");_.className="account-menu__rows";for(const[p,y]of g){const v=document.createElement("dt");v.textContent=p;const w=document.createElement("dd");w.textContent=y,_.append(v,w)}if(r.append(_),c.role==="admin"){const p=document.createElement("button");p.type="button",p.className="account-menu__action",p.textContent="账号管理后台",p.addEventListener("click",()=>{s(),sf()}),r.append(p)}const m=document.createElement("button");m.type="button",m.className="account-menu__action account-menu__action--danger",m.textContent="退出登录",m.addEventListener("click",async()=>{s(),await Qx()}),r.append(m),r.hidden=!1,e.classList.add("is-open")};e.addEventListener("click",l=>{l.stopPropagation(),r.hidden?a():s()}),document.addEventListener("click",l=>{!r.hidden&&!n.contains(l.target)&&s()});const o=()=>{const l=xs();if(s(),l.status==="disabled"){e.classList.add("is-ghost"),t.textContent="未",i.textContent="账号未接入";return}if(e.classList.remove("is-ghost"),l.status==="loading"){t.textContent="…",i.textContent="读取账号";return}if(l.status==="signedIn"&&l.profile){e.classList.add("is-online"),t.textContent=(l.profile.display_name||"玩").slice(0,1).toUpperCase(),i.textContent=l.profile.display_name||"玩家";return}e.classList.remove("is-online"),t.textContent="登",i.textContent="登录 / 注册"};ef(o),o()}const hS=1200,gh=300,dS=420,fS=2500;function pS(n,e,t){return n<e?e:n>t?t:n}function mS(n){return n<300?10+n/300*25:n<800?35+(n-300)/500*35:n<1400?70+(n-800)/600*22:92}function gS(){const n=document.querySelector("#loading-overlay");if(!n)return null;const e=document.querySelector("#loading-bar"),t=document.querySelector("#loading-fill"),i=document.querySelector("#loading-hint"),r=document.querySelector("#loading-tip");return!e||!t||!i||!r?null:{root:n,bar:e,fill:t,hint:i,tip:r}}const ko=["呪術廻戦　渋谷事変","呪いと共に歩け","WASD 移動　Shift 走る　Space 跳ぶ","マウスで視点　Esc で一時停止","渋谷の夜は呪いで満ちている","五条悟はどこにいる？","準備中……"];function of(){const n=gS();let e="idle",t=0,i=0,r=!1,s=0,a=0;const o=[],l=()=>{if(n){const h=`${pS(t,0,100).toFixed(0)}%`;n.fill.style.width=h}},c=()=>{if(e!=="visible")return;const h=performance.now()-i;t=r?100:mS(h),l(),n&&h-s>2600&&(s=h,a=(a+1)%ko.length,n.hint.textContent=ko[a]);const d=h>=hS;if(t>=100&&d){e="hiding",n&&n.root.classList.add("is-hiding"),window.setTimeout(()=>u(),dS);return}requestAnimationFrame(c)},u=()=>{e="idle",t=0,r=!1,n&&(n.root.hidden=!0,n.root.classList.remove("is-showing","is-visible","is-hiding"),n.fill.style.width="0%");for(const h of o)h();o.length=0};return{get phase(){return e},get progress(){return t},async show(){!n||e!=="idle"||(e="showing",i=performance.now(),r=!1,t=0,a=0,s=0,n&&(n.hint.textContent=ko[0],n.tip.textContent="请稍候",n.root.hidden=!1,n.root.classList.remove("is-hiding"),n.root.classList.add("is-showing")),l(),await new Promise(h=>{window.setTimeout(()=>{e="visible",n&&(n.root.classList.remove("is-showing"),n.root.classList.add("is-visible")),requestAnimationFrame(c),h()},gh)}))},notifyReady(){if(e==="showing"){r=!0;return}e==="visible"&&(r=!0,t=100,l())},async hide(){if(e==="idle")return;if(e==="hiding")return new Promise(d=>o.push(d));const h=Math.max(0,gh+fS-(performance.now()-i));return r||window.setTimeout(()=>{r=!0},h+400),new Promise(d=>o.push(d))}}}const ur=56,_S=.18,_h=.0055;function vS(n,e,t){return n<e?e:n>t?t:n}function vh(n,e,t){const i=document.createElement(n);return i.className=e,t.appendChild(i),i}function yS(n,e){const i=window.matchMedia("(hover: none), (pointer: coarse)").matches&&"ontouchstart"in window,r=document.createElement("div");if(r.className="touch-ui",r.hidden=!i,r.setAttribute("aria-hidden",i?"false":"true"),document.body.appendChild(r),!i)return{destroy:()=>{},enabled:!1};const s=vh("div","touch-stick",r),a=vh("div","touch-stick__handle",s);s.hidden=!0;const o=(x,S)=>{const C=document.createElement("button");return C.type="button",C.className=x,C.textContent=S,r.appendChild(C),C},l=o("touch-btn touch-btn--jump","跳"),c=o("touch-btn touch-btn--sprint","跑"),u=o("touch-btn touch-btn--menu","≡");let h=null,d=null;const f=()=>{if(!h){e.state.forward=e.state.back=e.state.left=e.state.right=!1,e.state.moveX=e.state.moveZ=0;return}const x=h.handleX-h.baseX,S=h.handleY-h.baseY,C=Math.hypot(x,S);if(C<ur*_S){e.state.forward=e.state.back=e.state.left=e.state.right=!1,e.state.moveX=e.state.moveZ=0;return}const z=C>ur?1/(C/ur):1/ur;let H=x*z,$=S*z;e.state.moveX=H,e.state.moveZ=-$,e.state.forward=-$>.25,e.state.back=-$<-.25,e.state.right=H>.25,e.state.left=H<-.25},g=()=>{h=null,s.hidden=!0,s.style.left="0px",s.style.top="0px",a.style.transform="translate(-50%, -50%)",f()},_=x=>{var ee;const S=n.getBoundingClientRect(),C=x.clientX-S.left,z=x.clientY-S.top,H=S.width,$=C/H;if($<.5&&!h){s.hidden=!1,s.style.left=`${C}px`,s.style.top=`${z}px`,h={pointerId:x.pointerId,baseX:C,baseY:z,handleX:C,handleY:z,el:s};try{s.setPointerCapture(x.pointerId)}catch{}f()}else if($>=.5&&!d){d={pointerId:x.pointerId,lastX:C,lastY:z};try{(ee=n.setPointerCapture)==null||ee.call(n,x.pointerId)}catch{}}},m=x=>{const S=n.getBoundingClientRect(),C=x.clientX-S.left,z=x.clientY-S.top;if(h&&x.pointerId===h.pointerId){const H=C-h.baseX,$=z-h.baseY,ee=Math.hypot(H,$),Y=ee>ur?ur/ee:1,te=h.baseX+H*Y,q=h.baseY+$*Y;h.handleX=te,h.handleY=q,a.style.transform=`translate(calc(-50% + ${(te-h.baseX).toFixed(1)}px), calc(-50% + ${(q-h.baseY).toFixed(1)}px))`,f()}else if(d&&x.pointerId===d.pointerId){const H=C-d.lastX,$=z-d.lastY;e.yaw-=H*_h,e.pitch=vS(e.pitch-$*_h,-.22,.92),d.lastX=C,d.lastY=z}},p=x=>{h&&x.pointerId===h.pointerId&&g(),d&&x.pointerId===d.pointerId&&(d=null)},y=x=>{p(x)};let v=!1;const w=(x,S)=>{var C,z;S.preventDefault(),(z=(C=S.target).setPointerCapture)==null||z.call(C,S.pointerId);{e.queueJump();return}},L=(x,S)=>{S.preventDefault(),e.state[x]=!1};l.addEventListener("pointerdown",x=>w("jump",x)),l.addEventListener("pointerup",x=>L("jump",x)),l.addEventListener("pointercancel",x=>L("jump",x)),l.addEventListener("lostpointercapture",x=>L("jump",x));const A=x=>{x.preventDefault(),v=!v,e.state.sprint=v,c.classList.toggle("is-active",v)};c.addEventListener("pointerdown",A),u.addEventListener("pointerdown",x=>{x.preventDefault(),window.dispatchEvent(new KeyboardEvent("keydown",{code:"Escape"}))}),e.suspendPointerLock(!0),document.addEventListener("pointerdown",_,!0),document.addEventListener("pointermove",m,!0),document.addEventListener("pointerup",p,!0),document.addEventListener("pointercancel",y,!0);const R=x=>x.preventDefault();return r.addEventListener("touchstart",R,{passive:!1}),r.addEventListener("touchmove",R,{passive:!1}),r.addEventListener("touchend",R,{passive:!1}),{destroy:()=>{document.removeEventListener("pointerdown",_,!0),document.removeEventListener("pointermove",m,!0),document.removeEventListener("pointerup",p,!0),document.removeEventListener("pointercancel",y,!0),e.suspendPointerLock(!1),l.remove(),c.remove(),u.remove(),s.remove(),r.remove(),g(),d&&(d=null),e.state.forward=e.state.back=e.state.left=e.state.right=e.state.sprint=e.state.jump=!1},enabled:!0}}const yh=.0024,wh=-.22,xh=.92;function wS(n){const e={forward:!1,back:!1,left:!1,right:!1,sprint:!1,jump:!1,moveX:0,moveZ:0};let t=Math.PI*.25,i=.2,r=!1,s=!1,a=!1,o=!1;const l={KeyW:"forward",ArrowUp:"forward",KeyS:"back",ArrowDown:"back",KeyA:"left",ArrowLeft:"left",KeyD:"right",ArrowRight:"right",ShiftLeft:"sprint",ShiftRight:"sprint",Space:"jump"},c=p=>{const y=l[p.code];y&&(y==="jump"&&!e.jump&&(s=!0),e[y]=!0,h(),p.code==="Space"&&p.preventDefault())},u=p=>{const y=l[p.code];y&&(e[y]=!1,h())},h=()=>{let p=0,y=0;e.forward&&(y+=1),e.back&&(y-=1),e.right&&(p+=1),e.left&&(p-=1);const v=Math.hypot(p,y);v>1&&(p/=v,y/=v),e.moveX=p,e.moveZ=y},d=()=>{e.forward=!1,e.back=!1,e.left=!1,e.right=!1,e.sprint=!1,e.jump=!1,e.moveX=0,e.moveZ=0},f=p=>{o||!r&&!a||(t-=p.movementX*yh,i-=p.movementY*yh,i=Math.max(wh,Math.min(xh,i)))},g=p=>{var y;o||p.button===0&&(a=!0,document.pointerLockElement!==n&&((y=n.requestPointerLock)==null||y.call(n)))},_=()=>{a=!1},m=()=>{r=document.pointerLockElement===n};return window.addEventListener("keydown",c),window.addEventListener("keyup",u),window.addEventListener("blur",d),n.addEventListener("mousemove",f),n.addEventListener("pointerdown",g),window.addEventListener("pointerup",_),document.addEventListener("pointerlockchange",m),{state:e,get yaw(){return t},set yaw(p){t=p},get pitch(){return i},set pitch(p){i=Math.max(wh,Math.min(xh,p))},get locked(){return r},consumeJump(){return s?(s=!1,!0):!1},queueJump(){s=!0},suspendPointerLock(p){o=p,p&&document.pointerLockElement===n&&document.exitPointerLock()},dispose(){window.removeEventListener("keydown",c),window.removeEventListener("keyup",u),window.removeEventListener("blur",d),n.removeEventListener("mousemove",f),n.removeEventListener("pointerdown",g),window.removeEventListener("pointerup",_),document.removeEventListener("pointerlockchange",m),document.pointerLockElement===n&&document.exitPointerLock()}}}const aa=19,it=.18,oa=209,Sh=24,bh=30,Eh=6,hr=["渋谷","カラオケ","ラーメン","居酒屋","東京","薬","寿司","BAR","GAME","24H"],Mh=["#3ae9ff","#ff2f92","#ffa32f","#8b5cff","#ff4949","#5cff9d"],la=[["#e63b2e","#ffd24a"],["#1f66c9","#ffffff"],["#f3c623","#1c1c1c"],["#f4f1ea","#d8232a"],["#0f8b5f","#f7f4ec"],["#16181f","#ff5b8a"]];function dr(n,e){const t=n.attributes.position.count,i=new Float32Array(t*3);for(let r=0;r<t;r++)i[r*3]=e.r,i[r*3+1]=e.g,i[r*3+2]=e.b;return n.setAttribute("color",new zt(i,3)),n}function xS(){const t=document.createElement("canvas");t.width=512,t.height=256;const i=t.getContext("2d");i.fillStyle="#191b21",i.fillRect(0,0,512,256);const r=i.createLinearGradient(0,40,0,256);r.addColorStop(0,"#ffe9c2"),r.addColorStop(.45,"#ffcf8a"),r.addColorStop(1,"#8a5f34"),i.fillStyle=r,i.fillRect(18,34,476,194),i.fillStyle="rgba(30, 24, 18, 0.55)";for(let o=18;o<476;o+=74)i.fillRect(o,34,6,194);i.fillStyle="rgba(28, 22, 16, 0.5)";for(let o=96;o<216;o+=46)i.fillRect(24,o,464,5);const s=Ha(31);for(let o=0;o<14;o++){i.fillStyle="rgba(24, 18, 14, 0.55)";const l=34+s()*432,c=40+s()*60;i.fillRect(l,226-c,16,c)}i.fillStyle="rgba(255,255,255,0.16)",i.fillRect(18,34,476,12);const a=new sn(t);return a.colorSpace=vt,a.anisotropy=4,a}function SS(){const t=document.createElement("canvas");t.width=1024,t.height=512;const i=t.getContext("2d"),r=i.createLinearGradient(0,0,1024,512);r.addColorStop(0,"#0b0d14"),r.addColorStop(.55,"#171b26"),r.addColorStop(1,"#0b0d14"),i.fillStyle=r,i.fillRect(0,0,1024,512),i.save(),i.globalAlpha=.5,i.strokeStyle="#c8102e",i.lineWidth=26;for(let a=-1;a<6;a++)i.beginPath(),i.moveTo(-100+a*230,552),i.lineTo(120+a*230,-40),i.stroke();i.restore(),i.fillStyle="#f4efe6",i.font='900 132px "Noto Serif SC", "Songti SC", "SimSun", serif',i.textAlign="center",i.textBaseline="middle",i.fillText("呪術廻戦",1024*.5,512*.44),i.fillStyle="#ff3b30",i.font='700 38px "Noto Sans SC", "PingFang SC", sans-serif',i.fillText("SHIBUYA INCIDENT",1024*.5,512*.72),i.strokeStyle="rgba(255,255,255,0.4)",i.lineWidth=4,i.strokeRect(14,14,996,484);const s=new sn(t);return s.colorSpace=vt,s.anisotropy=8,s}function bS(){const t=document.createElement("canvas");t.width=128,t.height=256;const i=t.getContext("2d");i.fillStyle="#20242c",i.fillRect(0,0,128,256),i.fillStyle="#eef6ff",i.fillRect(10,14,108,168);const r=["#e63946","#1d6fd8","#f4b400","#2a9d8f","#ffffff","#ff7b00"];for(let a=0;a<4;a++)for(let o=0;o<4;o++)i.fillStyle=r[(a*4+o)%r.length],i.fillRect(18+o*25,24+a*38,18,30);i.fillStyle="#0f1218",i.fillRect(10,196,108,46),i.fillStyle="#7ef0c0",i.fillRect(22,206,84,10);const s=new sn(t);return s.colorSpace=vt,s.anisotropy=4,s}function ES(n,e){return n.x0<e.x1&&n.x1>e.x0&&n.z0<e.z1&&n.z1>e.z0}function MS(){const n=new xn,e=Ha(20261022),t=[],i=new fe(new mt(900,900),new et({color:"#2b2f36",roughness:.94,metalness:.08}));i.rotation.x=-Math.PI/2,i.receiveShadow=!0,n.add(i);const r=new fe(new mt(160,160),new et({map:wd(),roughness:.78,metalness:.16}));r.rotation.x=-Math.PI/2,r.position.y=.02,r.receiveShadow=!0,n.add(r);const s=new et({color:"#8b877f",roughness:.93,metalness:.04}),a=oa-aa,o=(oa+aa)/2;for(const I of[-1,1])for(const X of[-1,1]){const M=new fe(new $e(a,it,a),s);M.position.set(I*o,it/2,X*o),M.receiveShadow=!0,M.castShadow=!1,n.add(M)}const l=[],c=new et({color:"#c9cdd2",roughness:.8,metalness:.05});for(let I=0;I<2;I++)for(const X of[-1,1])for(let M=86;M<=200;M+=9){const G=new mt(I===0?.18:3.2,I===0?3.2:.18);G.rotateX(-Math.PI/2),I===0?G.translate(0,.03,X*M):G.translate(X*M,.03,0),l.push(dr(G,new Te("#bfc4c9")))}const u=new fe(Mt(l,!1),c);u.receiveShadow=!0,n.add(u);const h=[{x0:-86,x1:-52,z0:-86,z1:-52},{x0:52,x1:80,z0:-80,z1:-52},{x0:48,x1:84,z0:48,z1:84},{x0:-66,x1:-18,z0:-100,z1:-70}],d=_a.slice(0,5).map(I=>va(I,e)),f=d.map(()=>[]),g=[],_=[],m=[],p=new Te;for(const I of[-1,1])for(const X of[-1,1])for(let M=0;M<Eh;M++)for(let G=0;G<Eh;G++){const D=I*(Sh+9+M*bh),B=X*(Sh+9+G*bh),J=14+e()*6.5,K=14+e()*6.5,se=D+(e()-.5)*2.4,Me=B+(e()-.5)*2.4,We={x0:se-J/2,x1:se+J/2,z0:Me-K/2,z1:Me+K/2};if(h.some(Jt=>ES(We,Jt)))continue;if(e()<.07){m.push({x:se,z:Me,w:J,d:K});continue}const He=Math.hypot(se,Me),je=Math.round(9+e()*13+Math.min(36,Math.max(0,He-48)*.36)),lt=new $e(J,je,K),Rt=lt.getAttribute("uv"),Ht=[Math.max(1,Math.round(K/7)),Math.max(1,Math.round(K/7)),1,1,Math.max(1,Math.round(J/7)),Math.max(1,Math.round(J/7))],an=[Math.max(1,Math.round(je/11)),Math.max(1,Math.round(je/11)),1,1,Math.max(1,Math.round(je/11)),Math.max(1,Math.round(je/11))];for(let Jt=0;Jt<6;Jt++)for(let Qn=0;Qn<4;Qn++){const Vi=Jt*4+Qn;Rt.setXY(Vi,Rt.getX(Vi)*Ht[Jt],Rt.getY(Vi)*an[Jt])}const on=.9+e()*.16;p.setRGB(on,on*(.985+e()*.02),on*(.96+e()*.04)),dr(lt,p),lt.translate(se,it+je/2,Me),f[Math.floor(e()*d.length)].push(lt);const Yt=new mt(J,K);Yt.rotateX(-Math.PI/2),Yt.translate(se,it+je+.03,Me),dr(Yt,new Te("#5b6069")),g.push(Yt),_.push({x:se,z:Me,w:J,d:K,h:je}),t.push({minX:se-J/2,maxX:se+J/2,minZ:Me-K/2,maxZ:Me+K/2,maxY:it+je})}const y=[];d.forEach((I,X)=>{if(!f[X].length)return;const M=new et({map:I.map,emissiveMap:I.emissive,emissive:new Te("#ffe9c8"),emissiveIntensity:.3,roughness:.88,metalness:.06,vertexColors:!0});y.push(M);const G=new fe(Mt(f[X],!1),M);G.castShadow=!0,G.receiveShadow=!0,n.add(G)});const v=new et({color:"#ffffff",roughness:.92,metalness:.05,vertexColors:!0}),w=new fe(Mt(g,!1),v);w.castShadow=!0,w.receiveShadow=!0,n.add(w);const L=xS(),A=new ht({map:L,toneMapped:!1}),R=[],P=[],x=[],S=new et({color:"#7d2b30",roughness:.85,metalness:.05}),C=(I,X,M,G,D)=>{const B=Math.min(M-2,9.5);if(B<3)return;const J=2.7,K=new mt(B,J),se=it+1.55;G==="x"?(K.rotateY(D*Math.PI*.5),K.translate(I+D*.06,se,X)):(K.rotateY(D>0?0:Math.PI),K.translate(I,se,X+D*.06)),P.push(K);const Me=Math.min(M-1,10),We=la[Math.floor(e()*la.length)],He=cs(hr[Math.floor(e()*hr.length)],We[0],We[1],e),je=new ht({map:He,toneMapped:!1});R.push(je);const lt=new fe(new mt(Me,Me*.34),je),Rt=it+4.35;G==="x"?(lt.position.set(I+D*.1,Rt,X),lt.rotation.y=D*Math.PI*.5):(lt.position.set(I,Rt,X+D*.1),lt.rotation.y=D>0?0:Math.PI),n.add(lt);const Ht=new $e(G==="x"?.95:B,.12,G==="x"?B:.95);Ht.translate(G==="x"?I+D*.55:I,it+3.35,G==="x"?X:X+D*.55),x.push(Ht)};for(const I of _)Math.abs(I.x)<45&&C(I.x,I.z,I.d,"x",I.x>0?-1:1),Math.abs(I.z)<45&&C(I.x,I.z,I.w,"z",I.z>0?-1:1);if(P.length){const I=new fe(Mt(P,!1),A);n.add(I)}if(x.length){const I=new fe(Mt(x,!1),S);I.castShadow=!0,n.add(I)}const z=[];for(const I of _){if(Math.hypot(I.x,I.z)>90||e()>.4)continue;const X=hr[Math.floor(e()*hr.length)],M=Mh[Math.floor(e()*Mh.length)],G=_d(X,M),D=new ht({map:G,transparent:!0,toneMapped:!1,side:_n});z.push(D);const B=Math.min(11,Math.max(7,I.h*.34)),J=new fe(new mt(2.6,B),D),K=I.x>0?-1:1;J.position.set(I.x+K*(I.w/2+.3),it+5+B/2,I.z+(e()-.5)*I.d*.4),J.rotation.y=K*Math.PI*.5,n.add(J)}const H=new et({color:"#22262d",roughness:.65,metalness:.55}),$=[];for(const I of _){if(I.h<22||Math.hypot(I.x,I.z)>130||e()>.32)continue;const X=la[Math.floor(e()*la.length)],M=cs(hr[Math.floor(e()*hr.length)],X[0],X[1],e),G=new ht({map:M,toneMapped:!1});R.push(G);const D=Math.min(16,Math.max(9,I.w*.9)),B=D*.5,J=new fe(new mt(D,B),G),K=I.z>0?-1:1;J.position.set(I.x,it+I.h+2.4+B/2,I.z+K*(I.d/2-1.2)),J.rotation.y=K>0?0:Math.PI,n.add(J);for(const se of[-1,1]){const Me=new $e(.3,2.6,.3);Me.translate(I.x+se*D*.36,it+I.h+1.3,I.z+K*(I.d/2-1.2)),$.push(Me)}}$.length&&n.add(new fe(Mt($,!1),H));const ee=new et({color:"#3c414a",roughness:.6,metalness:.7}),Y=[],te=[],q=new ht({color:"#ffd9a0",toneMapped:!1}),le=(I,X,M,G)=>{const D=new wr(.09,.13,6.6,8);D.translate(I,it+3.3,X),Y.push(D);const B=new $e(M===0?.16:1.6,.16,G===0?.16:1.6);B.translate(I+M*.8,it+6.5,X+G*.8),Y.push(B);const J=new $e(M===0?.5:.9,.14,G===0?.5:.9);J.translate(I+M*1.5,it+6.38,X+G*1.5),te.push(J),t.push({minX:I-.28,maxX:I+.28,minZ:X-.28,maxZ:X+.28,maxY:3})};for(let I=-180;I<=180;I+=30)Math.abs(I)<26||(le(-21.4,I,1,0),le(21.4,I,-1,0),le(I,-21.4,0,1),le(I,21.4,0,-1));n.add(new fe(Mt(Y,!1),ee));const pe=new fe(Mt(te,!1),q);n.add(pe);const _e=[],ke=[],Je=new Map;for(const I of[-1,1])for(const X of[-1,1]){const M=I*21.6,G=X*21.6,D=new $e(.22,5.4,.22);D.translate(M,it+2.7,G),_e.push(D);const B=new $e(.5,1.35,.32);B.translate(M,it+4.9,G),_e.push(B),["#ff3b30","#ffb300","#3ddc84"].forEach((K,se)=>{const Me=new Pn(.11,8,6);Me.translate(M,it+5.28-se*.36,G+(X>0?-.19:.19)),ke.push({geo:Me,color:K}),Je.has(K)||Je.set(K,new ht({color:K,toneMapped:!1}))}),t.push({minX:M-.4,maxX:M+.4,minZ:G-.4,maxZ:G+.4,maxY:4})}n.add(new fe(Mt(_e,!1),ee));for(const[I,X]of Je){const M=ke.filter(G=>G.color===I).map(G=>G.geo);n.add(new fe(Mt(M,!1),X))}const Z=[],ae=[],Se=new et({color:"#4a3a2c",roughness:.95}),ue=new et({color:"#33513a",roughness:.9}),Re=(I,X,M)=>{const G=new wr(.16*M,.24*M,2.4*M,7);G.translate(I,it+1.2*M,X),Z.push(G);for(const[D,B,J,K]of[[0,0,0,1.25],[.55,-.35,.2,.85],[-.5,-.2,-.35,.9]]){const se=new ec(1.25*M*K,0);se.translate(I+D*M,it+(3.3+B)*M,X+J*M),ae.push(se)}t.push({minX:I-.32,maxX:I+.32,minZ:X-.32,maxZ:X+.32,maxY:3})};for(const I of m){const X=2+Math.floor(e()*2);for(let M=0;M<X;M++)Re(I.x+(e()-.5)*(I.w-3),I.z+(e()-.5)*(I.d-3),.9+e()*.5)}for(let I=-160;I<=160;I+=44)Math.abs(I)<26||(Re(-22.6,I,.85),Re(22.6,I+12,.85));n.add(new fe(Mt(Z,!1),Se));const Fe=new fe(Mt(ae,!1),ue);Fe.castShadow=!0,n.add(Fe);const be=bS(),ye=[],Ae=[],qe=new ht({map:be,toneMapped:!1}),U=[[-22.2,34,1],[22.2,-48,-1],[34,-22.2,1],[-52,22.2,-1],[22.2,96,-1],[-22.2,-110,1]];for(const[I,X,M]of U){const G=Math.abs(I)<25,D=new $e(G?1.1:.8,1.9,G?.8:1.1);D.translate(I,it+.95,X),ye.push(dr(D,new Te("#b9bec6")));const B=new mt(G?.95:.72,1.6);G?(B.rotateY(M>0?Math.PI*.5:-Math.PI*.5),B.translate(I+M*.41,it+1,X)):(B.rotateY(M>0?0:Math.PI),B.translate(I,it+1,X+M*.41)),Ae.push(B),t.push({minX:I-.65,maxX:I+.65,minZ:X-.65,maxZ:X+.65,maxY:2.1})}n.add(new fe(Mt(ye,!1),new et({color:"#ffffff",roughness:.55,metalness:.35,vertexColors:!0}))),n.add(new fe(Mt(Ae,!1),qe));const yt=[],Ge=[],Xe=[],Oe=["#232833","#3b1f2b","#1e2c3a","#3a3a3a","#161a22","#4a4f58"],ot=[[-16,62,0],[-16,128,0],[16,-86,0],[16,-150,0],[64,-16,Math.PI/2],[-96,16,Math.PI/2]];for(const[I,X,M]of ot){const G=new Te(Oe[Math.floor(e()*Oe.length)]),D=new $e(1.9,.72,4.3),B=new $e(1.66,.62,2.2),J=new $e(.42,.18,.1);M!==0&&(D.rotateY(M),B.rotateY(M),J.rotateY(M)),D.translate(I,.62,X),B.translate(I,1.28,X),yt.push(dr(D,G)),Ge.push(B);for(const Me of[-1,1]){const We=M===0?Me*.62:0,He=M===0?0:Me*.62,je=M===0?0:2.1,lt=M===0?2.1:0,Rt=J.clone();Rt.translate(I+We+je,.68,X+He+lt),Xe.push(Rt)}const K=M===0?1.05:2.25,se=M===0?2.25:1.05;t.push({minX:I-K,maxX:I+K,minZ:X-se,maxZ:X+se,maxY:1.8})}n.add(new fe(Mt(yt,!1),new et({color:"#ffffff",roughness:.4,metalness:.55,vertexColors:!0}))),n.add(new fe(Mt(Ge,!1),new et({color:"#101722",roughness:.18,metalness:.8}))),n.add(new fe(Mt(Xe,!1),new ht({color:"#ffe9b8",toneMapped:!1})));const Ue=vd(),T=new fe(new $e(44,15,22),new et({map:Ue,roughness:.85,metalness:.1}));T.position.set(-42,it+7.5,-86),T.castShadow=!0,T.receiveShadow=!0,n.add(T),t.push({minX:-64,maxX:-20,minZ:-97,maxZ:-75,maxY:15.2});const b=new fe(new mt(34,5.2),new ht({map:yd(),toneMapped:!1}));b.position.set(-42,it+11.4,-74.9),n.add(b);const V=new fe(new $e(30,.35,6),new et({color:"#2b333d",roughness:.6,metalness:.4}));V.position.set(-42,it+4.4,-71.6),V.castShadow=!0,n.add(V);const ne=va(_a[2],e),re=new fe(new wr(10.5,10.5,46,28),new et({map:ne.map,emissiveMap:ne.emissive,emissive:new Te("#ffe7c2"),emissiveIntensity:.35,roughness:.7,metalness:.25}));re.position.set(66,it+23,66),re.castShadow=!0,re.receiveShadow=!0,n.add(re),t.push({minX:55,maxX:77,minZ:55,maxZ:77,maxY:46.2});const Q=new fe(new mt(11,7),new ht({map:cs("109","#e60012","#ffffff",e),toneMapped:!1}));Q.position.set(66-8.1,it+31,66-8.1),Q.rotation.y=-Math.PI*.75,n.add(Q);const Ee=va(_a[0],e),he=new fe(new $e(26,62,26),new et({map:Ee.map,emissiveMap:Ee.emissive,emissive:new Te("#ffe7c2"),emissiveIntensity:.3,roughness:.82,metalness:.1}));he.position.set(-68,it+31,-68),he.castShadow=!0,he.receiveShadow=!0,n.add(he),t.push({minX:-81,maxX:-55,minZ:-81,maxZ:-55,maxY:62.2});const ge=new ht({map:SS(),toneMapped:!1}),Ze=new fe(new mt(21,10.5),ge);Ze.position.set(-68,it+34,-54.9),n.add(Ze);const oe=[];for(let I=0;I<56;I++){const X=I/56*Math.PI*2+e()*.04,M=260+e()*150,G=16+e()*26,D=16+e()*26,B=26+e()*90,J=new $e(G,B,D),K=.12+e()*.08;dr(J,new Te(K,K*1.03,K*1.12)),J.translate(Math.cos(X)*M,B/2,Math.sin(X)*M),oe.push(J)}const ve=new fe(Mt(oe,!1),new et({color:"#ffffff",roughness:.95,metalness:0,vertexColors:!0}));n.add(ve);const Ce=[],Be=[[0,26],[0,-26],[26,0],[-26,0],[46,46],[-46,-46]];for(const[I,X]of Be){const M=new fv("#ffb877",0,34,2);M.position.set(I,6.2,X),Ce.push(M),n.add(M)}t.push({minX:206,maxX:520,minZ:-520,maxZ:520,maxY:60},{minX:-520,maxX:-206,minZ:-520,maxZ:520,maxY:60},{minX:-520,maxX:520,minZ:206,maxZ:520,maxY:60},{minX:-520,maxX:520,minZ:-520,maxZ:-206,maxY:60});const F=new N(0,0,8);return{object:n,spawn:F,spawnYaw:0,colliders:t,groundHeight(I,X){return Math.abs(I)>aa&&Math.abs(X)>aa&&Math.abs(I)<oa&&Math.abs(X)<oa?it:0},update(I,X,M,G){const D=.04+M.window*1.5;for(const se of y)se.emissiveIntensity=D;const B=.55+M.neon*1.35;for(const se of R)se.color.setScalar(B);for(const se of z)se.color.setScalar(.6+M.neon*1.5);A.color.setScalar(.35+M.neon*1.65),qe.color.setScalar(.5+M.neon*1.2),q.color.setScalar(.3+M.window*2.1),ge.color.setScalar(.6+M.neon*.7);const J=.94+Math.sin(X*11)*.03+Math.sin(X*3.7)*.03;Ze.material=ge,ge.color.multiplyScalar(J);const K=M.neon*260;for(const se of Ce)se.intensity=K;re.rotation.y+=I*.02}}}const ca=.42,TS=4.4,Th=7.8,AS=7.4,RS=24;function CS(){const n=new xn,e=new et({color:"#20294d",roughness:.82,metalness:.06}),t=new et({color:"#151a30",roughness:.85,metalness:.05}),i=new et({color:"#e3ac86",roughness:.72}),r=new et({color:"#211a1e",roughness:.9}),s=new et({color:"#c8102e",roughness:.65}),a=new et({color:"#131418",roughness:.8}),o=new xn,l=new fe(new $e(.52,.6,.3),e);l.position.y=1.14,l.castShadow=!0,o.add(l);const c=new fe(new $e(.46,.16,.28),t);c.position.y=.82,o.add(c);const u=new fe(new $e(.36,.09,.33),s);u.position.y=1.42,o.add(u);const h=new fe(new $e(.12,.1,.12),i);h.position.y=1.47,o.add(h);const d=new fe(new Pn(.15,18,14),i);d.position.y=1.6,d.scale.set(1,1.08,1),d.castShadow=!0,o.add(d);const f=new fe(new Pn(.158,18,14),r);f.position.set(0,1.645,-.012),f.scale.set(1.02,.86,1.04),o.add(f);const g=new fe(new $e(.26,.1,.06),r);g.position.set(0,1.68,.12),g.rotation.x=.18,o.add(g);const _=new fe(new $e(.3,.24,.06),r);_.position.set(0,1.62,-.13),o.add(_);const m=new xn;m.position.set(-.33,1.38,0);const p=new fe(new $e(.14,.58,.17),e);p.position.y=-.28,p.castShadow=!0,m.add(p);const y=new fe(new $e(.11,.12,.14),i);y.position.y=-.62,m.add(y);const v=m.clone();v.position.x=.33;const w=new xn;w.position.set(-.15,.82,0);const L=new fe(new $e(.18,.74,.2),t);L.position.y=-.37,L.castShadow=!0,w.add(L);const A=new fe(new $e(.19,.11,.3),a);A.position.set(0,-.76,.05),A.castShadow=!0,w.add(A);const R=w.clone();return R.position.x=.15,n.add(o,m,v,w,R),{root:n,leftArm:m,rightArm:v,leftLeg:w,rightLeg:R,torso:o}}function PS(n){const{root:e,leftArm:t,rightArm:i,leftLeg:r,rightLeg:s,torso:a}=CS();e.position.copy(n.spawn);const o=n.spawn.clone(),l=new N;let c=0,u=!0,h=n.spawnYaw+Math.PI,d=!1,f=0,g=0,_=0;const m=(y,v,w,L)=>{for(const A of L.colliders)if(!(w+1.2>A.maxY)&&y>A.minX-ca&&y<A.maxX+ca&&v>A.minZ-ca&&v<A.maxZ+ca)return!0;return!1},p=y=>{let v=y;for(;v>Math.PI;)v-=Math.PI*2;for(;v<-Math.PI;)v+=Math.PI*2;return v};return{object:e,position:o,get facing(){return h},update(y,v,w){d||(h=p(v.yaw+Math.PI),d=!0);const L=v.state,A=-Math.sin(v.yaw),R=-Math.cos(v.yaw),P=Math.cos(v.yaw),x=-Math.sin(v.yaw);let S=L.moveX,C=L.moveZ;Math.abs(S)<.001&&Math.abs(C)<.001&&(S=(L.right?1:0)-(L.left?1:0),C=(L.forward?1:0)-(L.back?1:0));const z=1-Math.exp(-y*22);g+=(S-g)*z,_+=(C-_)*z;let H=g*P+_*A,$=g*x+_*R;const Y=Math.hypot(g,_)>.02;if(!Y)H=0,$=0;else{const ue=Math.hypot(H,$);ue>0&&(H/=ue,$/=ue)}const te=Y?L.sprint?Th:TS:0,q=1-Math.exp(-y*14);if(l.x+=(H*te-l.x)*q,l.z+=($*te-l.z)*q,Y){let Re=Math.atan2(H,$)-h;for(;Re>Math.PI;)Re-=Math.PI*2;for(;Re<-Math.PI;)Re+=Math.PI*2;h+=Re*(1-Math.exp(-y*14))}const le=o.x+l.x*y;m(le,o.z,o.y,w)?l.x=0:o.x=le;const pe=o.z+l.z*y;m(o.x,pe,o.y,w)?l.z=0:o.z=pe;const _e=w.groundHeight(o.x,o.z);u&&(v.consumeJump()?(c=AS,u=!1):(o.y+=(_e-o.y)*(1-Math.exp(-y*18)),c=0)),u?o.y<_e-.05&&(o.y=_e):(c-=RS*y,o.y+=c*y,o.y<=_e&&c<=0&&(o.y=_e,c=0,u=!0)),e.position.set(o.x,o.y,o.z),e.rotation.y=h;const ke=Math.hypot(l.x,l.z),Je=Math.min(1,ke/Th);u&&ke>.25?f+=y*(4.2+ke*1.15):u&&(f+=y*1.6);const Z=u?Math.sin(f)*(.28+Je*.55):0;r.rotation.x=u?Z:.45,s.rotation.x=u?-Z:-.15,t.rotation.x=u?-Z*.85:-.9,i.rotation.x=u?Z*.85:-.9,t.rotation.z=.08,i.rotation.z=-.08;const ae=u?Math.abs(Math.sin(f*2))*.035*Je:0,Se=Math.sin(f*.9)*.01;a.position.y=ae+(u&&ke<.25?Se:0),a.rotation.x=Je*.12+(u?0:-.1),u&&o.y<it-.02&&(e.position.y=o.y)}}}const Ah=5.6,IS=1.55;function LS(){const n=document.querySelector("#game-hud"),e=document.querySelector("#hud-zone"),t=document.querySelector("#hud-coords"),i=document.querySelector("#hud-hint"),r=document.querySelector("#hud-lock"),s=document.querySelector("#pause-overlay"),a=document.querySelector("#pause-resume"),o=document.querySelector("#pause-menu"),l=document.querySelector("#hud-menu");return!n||!e||!t||!i||!r||!s||!a||!o||!l?null:{root:n,zone:e,coords:t,hint:i,lock:r,pause:s,resume:a,menu:o,menuButton:l}}function DS(n,e,t){const i=e.clone(),r=18;let s=1;for(let o=1;o<=r;o++){const l=o/r,c=n.x+(e.x-n.x)*l,u=n.z+(e.z-n.z)*l,h=n.y+(e.y-n.y)*l;let d=!1;for(const f of t.colliders)if(!(h>f.maxY+.5)&&c>f.minX-.35&&c<f.maxX+.35&&u>f.minZ-.35&&u<f.maxZ+.35){d=!0;break}if(d){s=Math.max(.12,(o-1)/r);break}}i.lerpVectors(n,e,s);const a=t.groundHeight(i.x,i.z);return i.y=Math.max(i.y,a+.55),i}function US(){const n=window.matchMedia("(hover: none), (pointer: coarse)"),e="ontouchstart"in window||navigator.maxTouchPoints>0;return n.matches&&e}function NS(n,e){const t=US(),i=LS();i&&(i.root.hidden=!1,document.body.classList.add("is-playing"),t&&(document.body.classList.add("is-mobile"),i.hint.textContent="左下摇杆 移动 · 右半屏 拖视角 · 右下按钮 跳/跑/菜单"));const r=new dd;r.fog=new mi("#0a0e18",.0018);const s=new $t(62,window.innerWidth/window.innerHeight,.1,1400),a=Sd(n,r,s),{renderer:o}=a,l=o.getContext(),c=l.getExtension("WEBGL_debug_renderer_info"),u=c?String(l.getParameter(c.UNMASKED_RENDERER_WEBGL)):"",h=/swiftshader|software|llvmpipe|basic render/i.test(u),d=h||t?1:Math.min(window.devicePixelRatio,1.5);o.setPixelRatio(d),o.setSize(window.innerWidth,window.innerHeight);const f=!h&&!t;o.shadowMap.enabled=f,o.shadowMap.type=Ph,t&&(a.bloom.strength=.35,a.bloom.radius=.45,a.bloom.threshold=.82);const g=new fd("#283860","#090a10",.6),_=new md("#bdd5ff",1.2),m=new gd("#ffffff",.2);_.castShadow=f,_.shadow.mapSize.set(t?512:1024,t?512:1024),_.shadow.camera.left=-70,_.shadow.camera.right=70,_.shadow.camera.top=70,_.shadow.camera.bottom=-70,_.shadow.camera.near=1,_.shadow.camera.far=420,_.shadow.bias=-6e-4,_.shadow.normalBias=.035,r.add(g,_,m,_.target);const p=bd();r.add(p.object);const y=MS();r.add(y.object);const v=PS(y);r.add(v.object);const w=wS(o.domElement),L=yS(o.domElement,w),R=new URLSearchParams(window.location.search).get("hour"),P=R!==null&&Number.isFinite(Number(R))?Number(R):void 0,x=new Ed(P),S=new N,C=new N,z=new N;let H=!1,$=0;(()=>{const ye=x.env;g.color.copy(ye.hemiSky),g.groundColor.copy(ye.hemiGround),g.intensity=ye.hemiIntensity,_.color.copy(ye.sun),_.intensity=ye.sunIntensity,m.intensity=ye.ambient,r.fog instanceof mi&&(r.fog.color.copy(ye.fog),r.fog.density=ye.fogDensity),o.toneMappingExposure=ye.exposure,a.bloom.strength=ye.bloom,a.bloom.radius=.55,a.bloom.threshold=.72})();const Y=(ye,Ae)=>{S.set(v.position.x,v.position.y+IS,v.position.z);const qe=Math.cos(w.pitch)*Ah;C.set(S.x+Math.sin(w.yaw)*qe,S.y+Math.sin(w.pitch)*Ah+.35,S.z+Math.cos(w.yaw)*qe);const U=DS(S,C,y);!H||Ae?(z.copy(U),H=!0):z.lerp(U,1-Math.exp(-ye*16)),s.position.copy(z),s.lookAt(S.x,S.y+.2,S.z)};if(Y(.016,!0),e)try{e()}catch(ye){console.warn("[startGame] onReady 回调异常",ye)}let te=!1,q=!1,le=null;const pe=[];if(t){document.body.classList.add("is-mobile-landscape");const ye=document.querySelector(".portrait-overlay"),Ae=()=>{var yt;const qe=window.innerHeight>window.innerWidth+20;document.body.classList.toggle("is-portrait",qe),ye&&(ye.hidden=!qe,ye.setAttribute("aria-hidden",qe?"false":"true"));const U=window.screen;if(qe&&((yt=U.orientation)!=null&&yt.lock))try{U.orientation.lock("landscape")}catch{}};Ae(),window.addEventListener("resize",Ae),window.addEventListener("orientationchange",Ae),pe.push(()=>{window.removeEventListener("resize",Ae),window.removeEventListener("orientationchange",Ae),document.body.classList.remove("is-mobile-landscape","is-portrait")})}const _e=ye=>{te=ye,i&&(i.pause.hidden=!ye),ye&&document.pointerLockElement===o.domElement&&document.exitPointerLock()},ke=ye=>{ye.code==="Escape"&&_e(!te)};window.addEventListener("keydown",ke),pe.push(()=>window.removeEventListener("keydown",ke));const Je=()=>_e(!1),Z=async()=>{if(q)return;_e(!1);const ye=of();await ye.show(),await be(),ye.notifyReady(),await ye.hide(),window.location.reload()};i==null||i.resume.addEventListener("click",Je),i==null||i.menu.addEventListener("click",()=>{Z()}),i==null||i.menuButton.addEventListener("click",()=>_e(!0));const ae=ye=>{$+=ye,x.update(ye),v.update(ye,w,y),Y(ye,!1)};window.__shibuyaGame={player:v,world:y,input:w,camera:s,step:ae};let Se=0;const ue=new tc;a.render();const Re=()=>{if(q)return;const ye=Math.min(ue.getDelta(),.05);te||ae(ye);const Ae=x.env;if(g.intensity=Ae.hemiIntensity,_.color.copy(Ae.sun),_.intensity=Ae.sunIntensity,m.intensity=Ae.ambient,_.position.copy(v.position).addScaledVector(Ae.sunDir,170),_.target.position.copy(v.position),r.fog instanceof mi&&(r.fog.color.copy(Ae.fog),r.fog.density=Ae.fogDensity),o.toneMappingExposure=Ae.exposure,a.bloom.strength=Ae.bloom,p.update(Ae,s.position),y.update(ye,$,Ae,v.position),document.documentElement.dataset.phase=x.phase,Se+=ye,i&&Se>.15){Se=0,i.coords.textContent=`X ${v.position.x.toFixed(0)} · Z ${v.position.z.toFixed(0)}`;const qe=v.position.z<-62&&Math.abs(v.position.x)<80,U=Math.hypot(v.position.x,v.position.z)<62;i.zone.textContent=qe?"渋谷駅前":U?"渋谷 · スクランブル交差点":"渋谷 · 裏通り",i.lock.hidden=w.locked||te}a.render()};o.setAnimationLoop(Re),le=()=>{s.aspect=window.innerWidth/window.innerHeight,s.updateProjectionMatrix(),o.setSize(window.innerWidth,window.innerHeight)},window.addEventListener("resize",le),pe.push(()=>window.removeEventListener("resize",le));let Fe=null;const be=()=>q?Fe??Promise.resolve():(q=!0,a.dispose(),Fe=Promise.resolve().then(()=>new Promise(ye=>{requestAnimationFrame(()=>{o.setAnimationLoop(null),L.destroy(),w.dispose(),r.traverse(Ae=>{const qe=Ae;qe.geometry&&qe.geometry.dispose();const U=qe.material;U&&(Array.isArray(U)?U.forEach(yt=>yt.dispose()):U.dispose())}),o.dispose();for(const Ae of pe)Ae();pe.length=0,i&&(i.root.hidden=!0),document.body.classList.remove("is-playing"),ye()})})));return{dispose:be}}const OS=window.matchMedia("(hover: none), (pointer: coarse)"),kS="ontouchstart"in window||navigator.maxTouchPoints>0;if(OS.matches&&kS){document.body.classList.add("is-mobile-landscape");const n=document.querySelector(".portrait-overlay"),e=()=>{const t=window.innerHeight>window.innerWidth+20;document.body.classList.toggle("is-portrait",t),n&&(n.hidden=!t,n.setAttribute("aria-hidden",t?"false":"true"));const i=window.screen.orientation;if(t&&(i!=null&&i.lock))try{i.lock("landscape")}catch{}};e(),window.addEventListener("resize",e),window.addEventListener("orientationchange",e)}Lv();rS();uS();Yx().then(()=>{window.location.hash==="#admin"&&sf()});const Na=document.querySelector("#scene-root");if(!Na)throw new Error("Missing #scene-root container");const bn=new dd;bn.fog=new mi("#070b16",.0022);const Tr=new $t(65,window.innerWidth/window.innerHeight,.1,2e3);Tr.position.set(0,150,230);const Ss=Sd(Na,bn,Tr),{renderer:Oa}=Ss,hs=new fd("#283860","#090a10",.4),Bi=new md("#bdd5ff",.4),sc=new gd("#ffffff",.14);bn.add(hs,Bi,sc);const ac=bd();bn.add(ac.object);const oc=_v();bn.add(oc.object);const FS=new URLSearchParams(window.location.search),Fo=FS.get("hour"),BS=Fo!==null&&Number.isFinite(Number(Fo))?Number(Fo):void 0,Sa=new Ed(BS);let zl=!0;const Rh=async()=>{if(!zl)return;zl=!1,document.body.classList.add("is-entering");const n=of();await n.show(),Oa.setAnimationLoop(null),Ss.dispose(),Na.innerHTML="",document.body.classList.remove("is-entering"),NS(Na,()=>n.notifyReady()),await n.hide()},Bo=document.querySelector("#enter-game");Bo==null||Bo.addEventListener("click",async()=>{if(xs().status==="signedIn"){Rh();return}await nf("登录后你的进度、资产与角色都会保存到这个账号")&&Rh()});const zo=new ze,lf=new ze;window.addEventListener("pointermove",n=>{lf.set(n.clientX/window.innerWidth*2-1,n.clientY/window.innerHeight*2-1)});const zS=new N(0,150,230),HS=new N(0,100,140),ua=new N,GS=()=>{const n=Sa.env;hs.color.copy(n.hemiSky),hs.groundColor.copy(n.hemiGround),hs.intensity=n.hemiIntensity,Bi.color.copy(n.sun),Bi.intensity=n.sunIntensity,Bi.position.copy(n.sunDir).multiplyScalar(240),sc.intensity=n.ambient,bn.fog instanceof mi&&(bn.fog.color.copy(n.fog),bn.fog.density=n.fogDensity),Oa.toneMappingExposure=n.exposure,Ss.bloom.strength=n.bloom,ac.update(n,Tr.position),oc.update(0,0,n)};GS();const VS=new tc;let fr=0;Oa.setAnimationLoop(()=>{if(!zl)return;const n=Math.min(VS.getDelta(),.05);fr+=n,Sa.update(n);const e=Sa.env;zo.lerp(lf,1-Math.exp(-n*3));const t=Math.min(1,fr/6),i=1-Math.pow(1-t,3);ua.lerpVectors(zS,HS,i),Tr.position.set(ua.x+Math.sin(fr*.1)*1.8+zo.x*3.4,ua.y+Math.sin(fr*.23)*.7-zo.y*1.6,ua.z+Math.cos(fr*.08)*1.6),Tr.lookAt(0,32,-45),hs.intensity=e.hemiIntensity,Bi.color.copy(e.sun),Bi.intensity=e.sunIntensity,Bi.position.copy(e.sunDir).multiplyScalar(240),sc.intensity=e.ambient,bn.fog instanceof mi&&(bn.fog.color.copy(e.fog),bn.fog.density=e.fogDensity),Oa.toneMappingExposure=e.exposure,Ss.bloom.strength=e.bloom,ac.update(e,Tr.position),oc.update(n,fr,e),document.documentElement.dataset.phase=Sa.phase,Ss.render()});
