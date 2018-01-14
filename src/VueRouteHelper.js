'use strict';Object.defineProperty(exports,'__esModule',{value:true});var _typeof=typeof Symbol==='function'&&typeof Symbol.iterator==='symbol'?function(obj){return typeof obj}:function(obj){return obj&&typeof Symbol==='function'&&obj.constructor===Symbol&&obj!==Symbol.prototype?'symbol':typeof obj};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if('value'in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function')}}var RouterInstance=null;var Route_=exports.Route_=function(){function Route_(_path,_component){_classCallCheck(this,Route_);if(typeof _path!=='string'||_path.trim().length<=0)throw'You must specify a path!';if(typeof _component==='undefined')throw'You must provide a Vue Component!';this.__path=_path.trim();this.__component=_component;this.__children=[];this.__name;this.__meta={};this.__props={};this.__redirect;this.__alias;this.__beforeEnter;this.__parent=null}_createClass(Route_,[{key:'group',value:function group(callback){var _this=this;this.__children=callback.call(this);this.__children.forEach(function(c){return c.__parent=_this});return this}},{key:'name',value:function name(_name){if(typeof _name!=='string')this._throwError('The routes name should be of type "string"!');this.__name=_name;return this}},{key:'meta',value:function meta(_meta,value){if(typeof _meta!=='string'&&(typeof _meta==='undefined'?'undefined':_typeof(_meta))!=='object')this._throwError('First argument must either be of type "object" or "string"!');if(typeof _meta==='string')this.__meta[_meta]=value;else this.__meta=_meta;return this}},{key:'props',value:function props(_props,value){if(typeof _props!=='string'&&(typeof _meta==='undefined'?'undefined':_typeof(_meta))!=='object')this._throwError('First argument must either be of type "object" or "string"!');if(typeof _props==='string')this.__props[_props]=value;else this.__props=_props;return this}},{key:'redirect',value:function redirect(_to){if(typeof _to!=='string')this._throwError('The routes redirect should be of type "string"!');this.__redirect=_to;return this}},{key:'alias',value:function alias(_alias){if(typeof _alias!=='string')this._throwError('The routes alias should be of type "string"!');this.__alias=_alias;return this}},{key:'beforeEnter',value:function beforeEnter(_callback){if(typeof _callback!=='function')this._throwError('The routes beforeEnter should be of type "function"!');this.__beforeEnter=_callback;return this}},{key:'_throwError',value:function _throwError(err){throw err+'\r\n'+JSON.stringify(this)}},{key:'format',value:function format(){return{path:this.__path,component:this.__component,name:this.__name,children:this.children,meta:this.__meta,props:this.__props,redirect:this.__redirect,alias:this.__alias,beforeEnter:this.__beforeEnter}}},{key:'_path',get:function get(){return this.__path}},{key:'_component',get:function get(){return this.__component}},{key:'_name',get:function get(){return this.__name}},{key:'_meta',get:function get(){return this.__meta}},{key:'_props',get:function get(){return this.__props}},{key:'_redirect',get:function get(){return this.__redirect}},{key:'_alias',get:function get(){return this.__alias}},{key:'_beforeEnter',get:function get(){return this.__beforeEnter}},{key:'children',get:function get(){return this.__children.map(function(c){return c.format()})},set:function set(value){this.__children=value}}]);return Route_}();var Router=exports.Router=function(){function Router(){_classCallCheck(this,Router);this.__routes=[]}_createClass(Router,null,[{key:'add',value:function add(route){var format=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;var routes=[];if(!Array.isArray(route)&&typeof route!=='function')throw'Routes must be of type "function" or "Array"';if(typeof route==='function')routes=route.call(this);else if(Array.isArray(route))routes=route;routes.forEach(function(r){return Router.instance.__routes.push(r)});return format?Router.routes:routes}},{key:'instance',get:function get(){if(!RouterInstance)RouterInstance=new Router;return RouterInstance}},{key:'routes',get:function get(){return Router.instance.__routes.map(function(e){return e.format()})}}]);return Router}();var Route=exports.Route=function Route(){for(var _len=arguments.length,e=Array(_len),_key=0;_key<_len;_key++){e[_key]=arguments[_key]}return new(Function.prototype.bind.apply(Route_,[null].concat(e)))};
