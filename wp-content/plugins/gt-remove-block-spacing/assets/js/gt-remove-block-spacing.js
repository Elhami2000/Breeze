!function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var o={};t.m=e,t.c=o,t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});o(1)},function(e,t,o){"use strict";function n(e){return k(e,"customClassName",!0)&&(e.attributes=u(e.attributes,{gtRemoveMarginTop:{type:"boolean",default:!1},gtRemoveMarginBottom:{type:"boolean",default:!1}})),e}function r(e,t,o){return k(t,"customClassName",!0)&&o.gtRemoveMarginTop&&(e.className=c()(e.className,"gt-remove-margin-top")),k(t,"customClassName",!0)&&o.gtRemoveMarginBottom&&(e.className=c()(e.className,"gt-remove-margin-bottom")),e}var a=o(2),c=o.n(a),l=o(3),s=(o.n(l),o(4)),i=(o.n(s),lodash),u=i.assign,m=wp.compose.createHigherOrderComponent,p=wp.element.Fragment,g=wp.blockEditor.InspectorAdvancedControls,f=wp.components,v=f.BaseControl,b=f.ToggleControl,__=wp.i18n.__,d=wp.hooks.addFilter,k=wp.blocks.hasBlockSupport;d("editor.BlockEdit","gt-remove-block-spacing/inspector-control",m(function(e){return function(t){if(k(t.name,"customClassName",!0)&&t.isSelected){var o=t.attributes,n=o.gtRemoveMarginTop,r=o.gtRemoveMarginBottom;return wp.element.createElement(p,null,wp.element.createElement(e,t),wp.element.createElement(g,null,wp.element.createElement(v,{label:__("Remove Block Spacing","gt-remove-block-spacing"),className:"gt-remove-block-spacing-control"},wp.element.createElement(b,{label:__("Remove top margin?","gt-remove-block-spacing"),checked:!!n,onChange:function(){return t.setAttributes({gtRemoveMarginTop:!n})}}),wp.element.createElement(b,{label:__("Remove bottom margin?","gt-remove-block-spacing"),checked:!!r,onChange:function(){return t.setAttributes({gtRemoveMarginBottom:!r})}}))))}return wp.element.createElement(e,t)}},"withInspectorControl")),d("blocks.registerBlockType","gt-remove-block-spacing/attributes",n),d("blocks.getSaveContent.extraProps","gt-remove-block-spacing/save-props",r)},function(e,t,o){var n,r;!function(){"use strict";function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)&&n.length){var c=o.apply(null,n);c&&e.push(c)}else if("object"===r)for(var l in n)a.call(n,l)&&n[l]&&e.push(l)}}return e.join(" ")}var a={}.hasOwnProperty;"undefined"!==typeof e&&e.exports?(o.default=o,e.exports=o):(n=[],void 0!==(r=function(){return o}.apply(t,n))&&(e.exports=r))}()},function(e,t){},function(e,t){}]);