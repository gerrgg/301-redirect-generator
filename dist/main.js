!function(e){var t={};function i(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=t,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=2)}([function(e,t,i){var r,n,s;
/* @license
Papa Parse
v5.2.0
https://github.com/mholt/PapaParse
License: MIT
*/n=[],void 0===(s="function"==typeof(r=function e(){"use strict";var t="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==t?t:{},r=!t.document&&!!t.postMessage,n=r&&/blob:/i.test((t.location||{}).protocol),s={},o=0,a={parse:function(i,r){var n=(r=r||{}).dynamicTyping||!1;if(C(n)&&(r.dynamicTypingFunction=n,n={}),r.dynamicTyping=n,r.transform=!!C(r.transform)&&r.transform,r.worker&&a.WORKERS_SUPPORTED){var u=function(){if(!a.WORKERS_SUPPORTED)return!1;var i,r,n=(i=t.URL||t.webkitURL||null,r=e.toString(),a.BLOB_URL||(a.BLOB_URL=i.createObjectURL(new Blob(["(",r,")();"],{type:"text/javascript"})))),u=new t.Worker(n);return u.onmessage=y,u.id=o++,s[u.id]=u,u}();return u.userStep=r.step,u.userChunk=r.chunk,u.userComplete=r.complete,u.userError=r.error,r.step=C(r.step),r.chunk=C(r.chunk),r.complete=C(r.complete),r.error=C(r.error),delete r.worker,void u.postMessage({input:i,config:r,workerId:u.id})}var h=null;return i===a.NODE_STREAM_INPUT&&"undefined"==typeof PAPA_BROWSER_CONTEXT?(h=new p(r)).getStream():("string"==typeof i?h=r.download?new f(r):new l(r):!0===i.readable&&C(i.read)&&C(i.on)?h=new c(r):(t.File&&i instanceof File||i instanceof Object)&&(h=new d(r)),h.stream(i))},unparse:function(e,t){var i=!1,r=!0,n=",",s="\r\n",o='"',u=o+o,h=!1,f=null;!function(){if("object"==typeof t){if("string"!=typeof t.delimiter||a.BAD_DELIMITERS.filter((function(e){return-1!==t.delimiter.indexOf(e)})).length||(n=t.delimiter),("boolean"==typeof t.quotes||"function"==typeof t.quotes||Array.isArray(t.quotes))&&(i=t.quotes),"boolean"!=typeof t.skipEmptyLines&&"string"!=typeof t.skipEmptyLines||(h=t.skipEmptyLines),"string"==typeof t.newline&&(s=t.newline),"string"==typeof t.quoteChar&&(o=t.quoteChar),"boolean"==typeof t.header&&(r=t.header),Array.isArray(t.columns)){if(0===t.columns.length)throw new Error("Option columns is empty");f=t.columns}void 0!==t.escapeChar&&(u=t.escapeChar+o)}}();var d=new RegExp(g(o),"g");if("string"==typeof e&&(e=JSON.parse(e)),Array.isArray(e)){if(!e.length||Array.isArray(e[0]))return c(null,e,h);if("object"==typeof e[0])return c(f||l(e[0]),e,h)}else if("object"==typeof e)return"string"==typeof e.data&&(e.data=JSON.parse(e.data)),Array.isArray(e.data)&&(e.fields||(e.fields=e.meta&&e.meta.fields),e.fields||(e.fields=Array.isArray(e.data[0])?e.fields:l(e.data[0])),Array.isArray(e.data[0])||"object"==typeof e.data[0]||(e.data=[e.data])),c(e.fields||[],e.data||[],h);throw new Error("Unable to serialize unrecognized input");function l(e){if("object"!=typeof e)return[];var t=[];for(var i in e)t.push(i);return t}function c(e,t,i){var o="";"string"==typeof e&&(e=JSON.parse(e)),"string"==typeof t&&(t=JSON.parse(t));var a=Array.isArray(e)&&e.length>0,u=!Array.isArray(t[0]);if(a&&r){for(var h=0;h<e.length;h++)h>0&&(o+=n),o+=p(e[h],h);t.length>0&&(o+=s)}for(var f=0;f<t.length;f++){var d=a?e.length:t[f].length,l=!1,c=a?0===Object.keys(t[f]).length:0===t[f].length;if(i&&!a&&(l="greedy"===i?""===t[f].join("").trim():1===t[f].length&&0===t[f][0].length),"greedy"===i&&a){for(var _=[],g=0;g<d;g++){var m=u?e[g]:g;_.push(t[f][m])}l=""===_.join("").trim()}if(!l){for(var y=0;y<d;y++){y>0&&!c&&(o+=n);var v=a&&u?e[y]:y;o+=p(t[f][v],y)}f<t.length-1&&(!i||d>0&&!c)&&(o+=s)}}return o}function p(e,t){if(null==e)return"";if(e.constructor===Date)return JSON.stringify(e).slice(1,25);var r=e.toString().replace(d,u);return"boolean"==typeof i&&i||"function"==typeof i&&i(e,t)||Array.isArray(i)&&i[t]||function(e,t){for(var i=0;i<t.length;i++)if(e.indexOf(t[i])>-1)return!0;return!1}(r,a.BAD_DELIMITERS)||r.indexOf(n)>-1||" "===r.charAt(0)||" "===r.charAt(r.length-1)?o+r+o:r}}};if(a.RECORD_SEP=String.fromCharCode(30),a.UNIT_SEP=String.fromCharCode(31),a.BYTE_ORDER_MARK="\ufeff",a.BAD_DELIMITERS=["\r","\n",'"',a.BYTE_ORDER_MARK],a.WORKERS_SUPPORTED=!r&&!!t.Worker,a.NODE_STREAM_INPUT=1,a.LocalChunkSize=10485760,a.RemoteChunkSize=5242880,a.DefaultDelimiter=",",a.Parser=m,a.ParserHandle=_,a.NetworkStreamer=f,a.FileStreamer=d,a.StringStreamer=l,a.ReadableStreamStreamer=c,"undefined"==typeof PAPA_BROWSER_CONTEXT&&(a.DuplexStreamStreamer=p),t.jQuery){var u=t.jQuery;u.fn.parse=function(e){var i=e.config||{},r=[];return this.each((function(e){if("INPUT"!==u(this).prop("tagName").toUpperCase()||"file"!==u(this).attr("type").toLowerCase()||!t.FileReader||!this.files||0===this.files.length)return!0;for(var n=0;n<this.files.length;n++)r.push({file:this.files[n],inputElem:this,instanceConfig:u.extend({},i)})})),n(),this;function n(){if(0!==r.length){var t,i,n,o,h=r[0];if(C(e.before)){var f=e.before(h.file,h.inputElem);if("object"==typeof f){if("abort"===f.action)return t="AbortError",i=h.file,n=h.inputElem,o=f.reason,void(C(e.error)&&e.error({name:t},i,n,o));if("skip"===f.action)return void s();"object"==typeof f.config&&(h.instanceConfig=u.extend(h.instanceConfig,f.config))}else if("skip"===f)return void s()}var d=h.instanceConfig.complete;h.instanceConfig.complete=function(e){C(d)&&d(e,h.file,h.inputElem),s()},a.parse(h.file,h.instanceConfig)}else C(e.complete)&&e.complete()}function s(){r.splice(0,1),n()}}}function h(e){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},function(e){var t=b(e);t.chunkSize=parseInt(t.chunkSize),e.step||e.chunk||(t.chunkSize=null),this._handle=new _(t),this._handle.streamer=this,this._config=t}.call(this,e),this.parseChunk=function(e,i){if(this.isFirstChunk&&C(this._config.beforeFirstChunk)){var r=this._config.beforeFirstChunk(e);void 0!==r&&(e=r)}this.isFirstChunk=!1,this._halted=!1;var s=this._partialLine+e;this._partialLine="";var o=this._handle.parse(s,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var u=o.meta.cursor;this._finished||(this._partialLine=s.substring(u-this._baseIndex),this._baseIndex=u),o&&o.data&&(this._rowCount+=o.data.length);var h=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(n)t.postMessage({results:o,workerId:a.WORKER_ID,finished:h});else if(C(this._config.chunk)&&!i){if(this._config.chunk(o,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);o=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(o.data),this._completeResults.errors=this._completeResults.errors.concat(o.errors),this._completeResults.meta=o.meta),this._completed||!h||!C(this._config.complete)||o&&o.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),h||o&&o.meta.paused||this._nextChunk(),o}this._halted=!0},this._sendError=function(e){C(this._config.error)?this._config.error(e):n&&this._config.error&&t.postMessage({workerId:a.WORKER_ID,error:e,finished:!1})}}function f(e){var t;(e=e||{}).chunkSize||(e.chunkSize=a.RemoteChunkSize),h.call(this,e),this._nextChunk=r?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(e){this._input=e,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(t=new XMLHttpRequest,this._config.withCredentials&&(t.withCredentials=this._config.withCredentials),r||(t.onload=E(this._chunkLoaded,this),t.onerror=E(this._chunkError,this)),t.open(this._config.downloadRequestBody?"POST":"GET",this._input,!r),this._config.downloadRequestHeaders){var e=this._config.downloadRequestHeaders;for(var i in e)t.setRequestHeader(i,e[i])}if(this._config.chunkSize){var n=this._start+this._config.chunkSize-1;t.setRequestHeader("Range","bytes="+this._start+"-"+n)}try{t.send(this._config.downloadRequestBody)}catch(e){this._chunkError(e.message)}r&&0===t.status&&this._chunkError()}},this._chunkLoaded=function(){4===t.readyState&&(t.status<200||t.status>=400?this._chunkError():(this._start+=this._config.chunkSize?this._config.chunkSize:t.responseText.length,this._finished=!this._config.chunkSize||this._start>=function(e){var t=e.getResponseHeader("Content-Range");return null===t?-1:parseInt(t.substring(t.lastIndexOf("/")+1))}(t),this.parseChunk(t.responseText)))},this._chunkError=function(e){var i=t.statusText||e;this._sendError(new Error(i))}}function d(e){var t,i;(e=e||{}).chunkSize||(e.chunkSize=a.LocalChunkSize),h.call(this,e);var r="undefined"!=typeof FileReader;this.stream=function(e){this._input=e,i=e.slice||e.webkitSlice||e.mozSlice,r?((t=new FileReader).onload=E(this._chunkLoaded,this),t.onerror=E(this._chunkError,this)):t=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var e=this._input;if(this._config.chunkSize){var n=Math.min(this._start+this._config.chunkSize,this._input.size);e=i.call(e,this._start,n)}var s=t.readAsText(e,this._config.encoding);r||this._chunkLoaded({target:{result:s}})},this._chunkLoaded=function(e){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(e.target.result)},this._chunkError=function(){this._sendError(t.error)}}function l(e){var t;e=e||{},h.call(this,e),this.stream=function(e){return t=e,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var e,i=this._config.chunkSize;return i?(e=t.substring(0,i),t=t.substring(i)):(e=t,t=""),this._finished=!t,this.parseChunk(e)}}}function c(e){e=e||{},h.call(this,e);var t=[],i=!0,r=!1;this.pause=function(){h.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){h.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(e){this._input=e,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){r&&1===t.length&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),t.length?this.parseChunk(t.shift()):i=!0},this._streamData=E((function(e){try{t.push("string"==typeof e?e:e.toString(this._config.encoding)),i&&(i=!1,this._checkIsFinished(),this.parseChunk(t.shift()))}catch(e){this._streamError(e)}}),this),this._streamError=E((function(e){this._streamCleanUp(),this._sendError(e)}),this),this._streamEnd=E((function(){this._streamCleanUp(),r=!0,this._streamData("")}),this),this._streamCleanUp=E((function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)}),this)}function p(e){var t=i(1).Duplex,r=b(e),n=!0,s=!1,o=[],a=null;this._onCsvData=function(e){var t=e.data;a.push(t)||this._handle.paused()||this._handle.pause()},this._onCsvComplete=function(){a.push(null)},r.step=E(this._onCsvData,this),r.complete=E(this._onCsvComplete,this),h.call(this,r),this._nextChunk=function(){s&&1===o.length&&(this._finished=!0),o.length?o.shift()():n=!0},this._addToParseQueue=function(e,t){o.push(E((function(){if(this.parseChunk("string"==typeof e?e:e.toString(r.encoding)),C(t))return t()}),this)),n&&(n=!1,this._nextChunk())},this._onRead=function(){this._handle.paused()&&this._handle.resume()},this._onWrite=function(e,t,i){this._addToParseQueue(e,i)},this._onWriteComplete=function(){s=!0,this._addToParseQueue("")},this.getStream=function(){return a},(a=new t({readableObjectMode:!0,decodeStrings:!1,read:E(this._onRead,this),write:E(this._onWrite,this)})).once("finish",E(this._onWriteComplete,this))}function _(e){var t,i,r,n=Math.pow(2,53),s=-n,o=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)(e[-+]?\d+)?\s*$/,u=/(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/,h=this,f=0,d=0,l=!1,c=!1,p=[],_={data:[],errors:[],meta:{}};if(C(e.step)){var y=e.step;e.step=function(t){if(_=t,E())k();else{if(k(),0===_.data.length)return;f+=t.data.length,e.preview&&f>e.preview?i.abort():(_.data=_.data[0],y(_,h))}}}function v(t){return"greedy"===e.skipEmptyLines?""===t.join("").trim():1===t.length&&0===t[0].length}function k(){if(_&&r&&(R("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+a.DefaultDelimiter+"'"),r=!1),e.skipEmptyLines)for(var t=0;t<_.data.length;t++)v(_.data[t])&&_.data.splice(t--,1);return E()&&function(){if(_)if(Array.isArray(_.data[0])){for(var t=0;E()&&t<_.data.length;t++)_.data[t].forEach(i);_.data.splice(0,1)}else _.data.forEach(i);function i(t){C(e.transformHeader)&&(t=e.transformHeader(t)),p.push(t)}}(),function(){if(!_||!e.header&&!e.dynamicTyping&&!e.transform)return _;function t(t,i){var r,n=e.header?{}:[];for(r=0;r<t.length;r++){var s=r,o=t[r];e.header&&(s=r>=p.length?"__parsed_extra":p[r]),e.transform&&(o=e.transform(o,s)),o=w(s,o),"__parsed_extra"===s?(n[s]=n[s]||[],n[s].push(o)):n[s]=o}return e.header&&(r>p.length?R("FieldMismatch","TooManyFields","Too many fields: expected "+p.length+" fields but parsed "+r,d+i):r<p.length&&R("FieldMismatch","TooFewFields","Too few fields: expected "+p.length+" fields but parsed "+r,d+i)),n}var i=1;return!_.data.length||Array.isArray(_.data[0])?(_.data=_.data.map(t),i=_.data.length):_.data=t(_.data,0),e.header&&_.meta&&(_.meta.fields=p),d+=i,_}()}function E(){return e.header&&0===p.length}function w(t,i){return function(t){return e.dynamicTypingFunction&&void 0===e.dynamicTyping[t]&&(e.dynamicTyping[t]=e.dynamicTypingFunction(t)),!0===(e.dynamicTyping[t]||e.dynamicTyping)}(t)?"true"===i||"TRUE"===i||"false"!==i&&"FALSE"!==i&&(function(e){if(o.test(e)){var t=parseFloat(e);if(t>s&&t<n)return!0}return!1}(i)?parseFloat(i):u.test(i)?new Date(i):""===i?null:i):i}function R(e,t,i,r){var n={type:e,code:t,message:i};void 0!==r&&(n.row=r),_.errors.push(n)}this.parse=function(n,s,o){var u=e.quoteChar||'"';if(e.newline||(e.newline=function(e,t){e=e.substring(0,1048576);var i=new RegExp(g(t)+"([^]*?)"+g(t),"gm"),r=(e=e.replace(i,"")).split("\r"),n=e.split("\n"),s=n.length>1&&n[0].length<r[0].length;if(1===r.length||s)return"\n";for(var o=0,a=0;a<r.length;a++)"\n"===r[a][0]&&o++;return o>=r.length/2?"\r\n":"\r"}(n,u)),r=!1,e.delimiter)C(e.delimiter)&&(e.delimiter=e.delimiter(n),_.meta.delimiter=e.delimiter);else{var h=function(t,i,r,n,s){var o,u,h,f;s=s||[",","\t","|",";",a.RECORD_SEP,a.UNIT_SEP];for(var d=0;d<s.length;d++){var l=s[d],c=0,p=0,_=0;h=void 0;for(var g=new m({comments:n,delimiter:l,newline:i,preview:10}).parse(t),y=0;y<g.data.length;y++)if(r&&v(g.data[y]))_++;else{var k=g.data[y].length;p+=k,void 0!==h?k>0&&(c+=Math.abs(k-h),h=k):h=k}g.data.length>0&&(p/=g.data.length-_),(void 0===u||c<=u)&&(void 0===f||p>f)&&p>1.99&&(u=c,o=l,f=p)}return e.delimiter=o,{successful:!!o,bestDelimiter:o}}(n,e.newline,e.skipEmptyLines,e.comments,e.delimitersToGuess);h.successful?e.delimiter=h.bestDelimiter:(r=!0,e.delimiter=a.DefaultDelimiter),_.meta.delimiter=e.delimiter}var f=b(e);return e.preview&&e.header&&f.preview++,t=n,i=new m(f),_=i.parse(t,s,o),k(),l?{meta:{paused:!0}}:_||{meta:{paused:!1}}},this.paused=function(){return l},this.pause=function(){l=!0,i.abort(),t=C(e.chunk)?"":t.substring(i.getCharIndex())},this.resume=function(){h.streamer._halted?(l=!1,h.streamer.parseChunk(t,!0)):setTimeout(h.resume,3)},this.aborted=function(){return c},this.abort=function(){c=!0,i.abort(),_.meta.aborted=!0,C(e.complete)&&e.complete(_),t=""}}function g(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function m(e){var t,i=(e=e||{}).delimiter,r=e.newline,n=e.comments,s=e.step,o=e.preview,u=e.fastMode,h=t=void 0===e.quoteChar?'"':e.quoteChar;if(void 0!==e.escapeChar&&(h=e.escapeChar),("string"!=typeof i||a.BAD_DELIMITERS.indexOf(i)>-1)&&(i=","),n===i)throw new Error("Comment character same as delimiter");!0===n?n="#":("string"!=typeof n||a.BAD_DELIMITERS.indexOf(n)>-1)&&(n=!1),"\n"!==r&&"\r"!==r&&"\r\n"!==r&&(r="\n");var f=0,d=!1;this.parse=function(e,a,l){if("string"!=typeof e)throw new Error("Input must be a string");var c=e.length,p=i.length,_=r.length,m=n.length,y=C(s);f=0;var v=[],k=[],b=[],E=0;if(!e)return F();if(u||!1!==u&&-1===e.indexOf(t)){for(var w=e.split(r),R=0;R<w.length;R++){if(b=w[R],f+=b.length,R!==w.length-1)f+=r.length;else if(l)return F();if(!n||b.substring(0,m)!==n){if(y){if(v=[],L(b.split(i)),z(),d)return F()}else L(b.split(i));if(o&&R>=o)return v=v.slice(0,o),F(!0)}}return F()}for(var S=e.indexOf(i,f),O=e.indexOf(r,f),x=new RegExp(g(h)+g(t),"g"),T=e.indexOf(t,f);;)if(e[f]!==t)if(n&&0===b.length&&e.substring(f,f+m)===n){if(-1===O)return F();f=O+_,O=e.indexOf(r,f),S=e.indexOf(i,f)}else{if(-1!==S&&(S<O||-1===O)){if(!(T>S)){b.push(e.substring(f,S)),f=S+p,S=e.indexOf(i,f);continue}var D=q(S,T,O);if(D&&void 0!==D.nextDelim){S=D.nextDelim,T=D.quoteSearch,b.push(e.substring(f,S)),f=S+p,S=e.indexOf(i,f);continue}}if(-1===O)break;if(b.push(e.substring(f,O)),P(O+_),y&&(z(),d))return F();if(o&&v.length>=o)return F(!0)}else for(T=f,f++;;){if(-1===(T=e.indexOf(t,T+1)))return l||k.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:v.length,index:f}),M();if(T===c-1)return M(e.substring(f,T).replace(x,t));if(t!==h||e[T+1]!==h){if(t===h||0===T||e[T-1]!==h){-1!==S&&S<T+1&&(S=e.indexOf(i,T+1)),-1!==O&&O<T+1&&(O=e.indexOf(r,T+1));var I=j(-1===O?S:Math.min(S,O));if(e[T+1+I]===i){b.push(e.substring(f,T).replace(x,t)),f=T+1+I+p,e[T+1+I+p]!==t&&(T=e.indexOf(t,f)),S=e.indexOf(i,f),O=e.indexOf(r,f);break}var A=j(O);if(e.substring(T+1+A,T+1+A+_)===r){if(b.push(e.substring(f,T).replace(x,t)),P(T+1+A+_),S=e.indexOf(i,f),T=e.indexOf(t,f),y&&(z(),d))return F();if(o&&v.length>=o)return F(!0);break}k.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:v.length,index:f}),T++}}else T++}return M();function L(e){v.push(e),E=f}function j(t){var i=0;if(-1!==t){var r=e.substring(T+1,t);r&&""===r.trim()&&(i=r.length)}return i}function M(t){return l||(void 0===t&&(t=e.substring(f)),b.push(t),f=c,L(b),y&&z()),F()}function P(t){f=t,L(b),b=[],O=e.indexOf(r,f)}function F(e){return{data:v,errors:k,meta:{delimiter:i,linebreak:r,aborted:d,truncated:!!e,cursor:E+(a||0)}}}function z(){s(F()),v=[],k=[]}function q(r,n,s){var o={nextDelim:void 0,quoteSearch:void 0},a=e.indexOf(t,n+1);if(r>n&&r<a&&(a<s||-1===s)){var u=e.indexOf(i,a);if(-1===u)return o;u>a&&(a=e.indexOf(t,a+1)),o=q(u,a,s)}else o={nextDelim:r,quoteSearch:n};return o}},this.abort=function(){d=!0},this.getCharIndex=function(){return f}}function y(e){var t=e.data,i=s[t.workerId],r=!1;if(t.error)i.userError(t.error,t.file);else if(t.results&&t.results.data){var n={abort:function(){r=!0,v(t.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:k,resume:k};if(C(i.userStep)){for(var o=0;o<t.results.data.length&&(i.userStep({data:t.results.data[o],errors:t.results.errors,meta:t.results.meta},n),!r);o++);delete t.results}else C(i.userChunk)&&(i.userChunk(t.results,n,t.file),delete t.results)}t.finished&&!r&&v(t.workerId,t.results)}function v(e,t){var i=s[e];C(i.userComplete)&&i.userComplete(t),i.terminate(),delete s[e]}function k(){throw new Error("Not implemented.")}function b(e){if("object"!=typeof e||null===e)return e;var t=Array.isArray(e)?[]:{};for(var i in e)t[i]=b(e[i]);return t}function E(e,t){return function(){e.apply(t,arguments)}}function C(e){return"function"==typeof e}return n&&(t.onmessage=function(e){var i=e.data;if(void 0===a.WORKER_ID&&i&&(a.WORKER_ID=i.workerId),"string"==typeof i.input)t.postMessage({workerId:a.WORKER_ID,results:a.parse(i.input,i.config),finished:!0});else if(t.File&&i.input instanceof File||i.input instanceof Object){var r=a.parse(i.input,i.config);r&&t.postMessage({workerId:a.WORKER_ID,results:r,finished:!0})}}),f.prototype=Object.create(h.prototype),f.prototype.constructor=f,d.prototype=Object.create(h.prototype),d.prototype.constructor=d,l.prototype=Object.create(l.prototype),l.prototype.constructor=l,c.prototype=Object.create(h.prototype),c.prototype.constructor=c,"undefined"==typeof PAPA_BROWSER_CONTEXT&&(p.prototype=Object.create(h.prototype),p.prototype.constructor=p),a})?r.apply(t,n):r)||(e.exports=s)},function(e,t){e.exports=require("stream")},function(e,t,i){"use strict";i.r(t);const r=i(0);(()=>{let e=(e=>{let t=document.getElementById("results");const i=e=>e&&"text/csv"==e.type&&e.size>0,n=e=>{let i="";console.log(e),e.forEach(e=>{e[0].length&&e[1].length&&(i+=`Redirect 301 ${e[0]} ${e[1]} \n`)}),t.value=i};return{convert:()=>{if(i(e.files[0])){let t=e.files[0];r.parse(t,{delimiter:",",complete:function(e){n(e.data)}})}else t.value="Make sure your are uploading a .csv file, please :)"}}})(document.getElementById("file-input"));document.getElementById("convert-button").addEventListener("click",e.convert)})()}]);