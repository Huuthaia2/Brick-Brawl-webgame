System.register(["./instantiated-0ee83a0e.js"],(function(e){"use strict";var t;return{setters:[function(r){t=r.bI,e("default",r.gp)}],execute:function(){t._global.atob=function(e){var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",r="",n=0,a=0,i=0,o=0,f=0,c=0,d=0;e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");do{n=t.indexOf(e.charAt(d++))<<2|(o=t.indexOf(e.charAt(d++)))>>4,a=(15&o)<<4|(f=t.indexOf(e.charAt(d++)))>>2,i=(3&f)<<6|(c=t.indexOf(e.charAt(d++))),r+=String.fromCharCode(n),64!==f&&(r+=String.fromCharCode(a)),64!==c&&(r+=String.fromCharCode(i))}while(d<e.length);return r}}}}));
