!function(e){function t(t){for(var n,o,l=t[0],a=t[1],h=t[2],d=0,u=[];d<l.length;d++)o=l[d],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&u.push(s[o][0]),s[o]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);for(c&&c(t);u.length;)u.shift()();return r.push.apply(r,h||[]),i()}function i(){for(var e,t=0;t<r.length;t++){for(var i=r[t],n=!0,l=1;l<i.length;l++){var a=i[l];0!==s[a]&&(n=!1)}n&&(r.splice(t--,1),e=o(o.s=i[0]))}return e}var n={},s={0:0},r=[];function o(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=n,o.d=function(e,t,i){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(i,n,function(t){return e[t]}.bind(null,n));return i},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var l=window.webpackJsonp=window.webpackJsonp||[],a=l.push.bind(l);l.push=t,l=l.slice();for(var h=0;h<l.length;h++)t(l[h]);var c=a;r.push([122,1]),i()}({122:function(e,t,i){i(123),e.exports=i(309)},309:function(e,t,i){"use strict";i.r(t);var n=i(48);const s=new n.RangeSlider(".wrapper",{title:"Range slider",limits:[0,1e3],step:100,currentValues:[100,300,600,900],handlesCount:4,valueScale:!0}),r=new n.RangeSlider(".wrapper",{title:"Single slider",limits:[-5,5],step:1,currentValues:[0],hints:!1,valueScale:!0}),o=new n.RangeSlider(".wrapper",{title:"Vertical slider",limits:[0,5e3],step:1e3,handlesCount:2,progressBar:!1,range:!0,valueScale:!0,hints:!0,inputs:!1,vertical:!0}),l=new n.RangeSlider(".wrapper",{limits:[5e3,1e4],step:100,currentValues:[5e3,6e3,7e3,8e3],handlesCount:4,progressBar:!1,valueScale:!0,hints:!0,inputs:!1});window.s=s,window.d=o;const a=[s,o,r,l],h=document.querySelector("#destroy"),c=document.querySelector("#init"),d=document.querySelector("#clear");h.addEventListener("click",()=>{a.forEach(e=>e.destroy())}),c.addEventListener("click",()=>{""!=!document.querySelector(".wrapper").innerHTML&&a.forEach(e=>e.init())}),d.addEventListener("click",()=>{a.forEach(e=>e.clear())})},310:function(e,t){},48:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RangeSlider=t.Controller=t.EventObserver=t.View=t.Handle=t.Model=void 0,i(310);var n=function(){function e(e){this._limits=[],this._currentValues=[],this.limits=Array.isArray(e.limits)?e.limits:[0,100],this.observer=new u}return Object.defineProperty(e.prototype,"limits",{get:function(){return this._limits},set:function(e){"number"==typeof e[0]&&"number"==typeof e[1]&&e[1]>e[0]&&(this._limits[0]=e[0],this._limits[1]=e[1])},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"currentValues",{get:function(){return this._currentValues},set:function(e){var t=this;Array.isArray(e)&&(e.forEach((function(e,i){var n=t.verifyData(e);void 0!==n&&(t._currentValues[i]=n)})),console.log(this._currentValues))},enumerable:!1,configurable:!0}),e.prototype.verifyData=function(e){if("number"==typeof e&&e>=this.limits[0]&&e<=this.limits[1])return+e},e.prototype.setValues=function(e){this.currentValues=e,this.observer.notifyObservers()},e}();t.Model=n;var s=function(){function e(e){this.view=e,this.inputContainer=document.createElement("div"),this.render()}return e.prototype.render=function(){this.inputContainer.classList.add("range-slider__inputContainer"),this.view.slider.append(this.inputContainer)},e}(),r=function(){function e(e,t){this.view=e,this.index=t,this.input=document.createElement("input"),this.render()}return e.prototype.render=function(){this.input.classList.add("range-slider__input"),this.input.type="text",this.view.inputContainer.append(this.input),this.inputHandler=this.inputHandler.bind(this),this.input.addEventListener("change",this.inputHandler)},e.prototype.inputHandler=function(){if(this.value=+this.input.value,this.view.handlesCount>1)this.view.sortInputValues();else{var e=this.view.handlesArray[this.index],t=e.convertValueToCoords(this.value);e.moveHandleDecorator(t)}},e}(),o=function(){function e(e){this.view=e,this.scaleWrapper=document.createElement("div"),this.scale=document.createElement("div"),this.render()}return e.prototype.render=function(){this.scaleWrapper.classList.add("range-slider__scaleWrapper"),this.scale.classList.add("range-slider__scale"),this.view.slider.append(this.scaleWrapper),this.scaleWrapper.append(this.scale)},e}(),l=function(){function e(e){this.view=e,this.coloredScale=document.createElement("div")}return e.prototype.render=function(){this.coloredScale.classList.add("range-slider__scale_colored"),this.view.scaleWrapper.append(this.coloredScale)},e}(),a=function(){function e(e){this.view=e,this.valueScale=document.createElement("div"),this.render()}return e.prototype.render=function(){this.valueScale.classList.add("range-slider__value-scale"),!0===this.view.isVertical&&this.valueScale.classList.add("range-slider__value-scale_vertical"),this.view.scaleWrapper.append(this.valueScale),this.createScaleElement()},e.prototype.createScaleElement=function(){this.valueScale.innerHTML="",this.elementsArray=[];var e=(this.view.maxValue-this.view.minValue)/this.view.step;this.elementsLimit=Math.floor(this.view.scale.offsetWidth/13),!0===this.view.isVertical&&(this.elementsLimit=Math.floor(this.view.scale.offsetHeight/13)),e=e<this.elementsLimit?e:this.decreaseElementsCount(e);for(var t=Math.round((this.view.maxValue-this.view.minValue)/e),i=this.view.minValue-t,n=0;n<e+1;n++){(i+=t)>=this.view.maxValue&&(i=this.view.maxValue);var s=this.view.handlesArray[0].convertValueToCoords(i),r=new h(this.view,this);this.valueScale.append(r.scaleElement),this.elementsArray.push(r),!0===this.view.isVertical?r.scaleElement.style.bottom=s+"px":r.scaleElement.style.left=s+"px",r.createScaleElementTextBlock(i),r.coords=s}!1===this.view.isVertical&&(this.elementsArray.find((function(e,t,i){if(t!==i.length-1)return e.scaleElementTextBlock.getBoundingClientRect().right+3>i[t+1].scaleElementTextBlock.getBoundingClientRect().left||void 0}))&&this.elementsArray.forEach((function(e){e.scaleElementTextBlock.style.transform="translate(-80%, 50%) rotate(-45deg)"})))},e.prototype.decreaseElementsCount=function(e){if(e)return e<this.elementsLimit?e=2*e>this.elementsLimit?e:2*e:this.view.step%2==0||1===this.view.step?this.decreaseElementsCount(e/10):this.decreaseElementsCount(e/2)},e}(),h=function(){function e(e,t){this.view=e,this.valueScale=t,this.scaleElement=document.createElement("div"),this.render()}return e.prototype.render=function(){var e=this;this.scaleElement.classList.add("range-slider__value-scale-element"),!0===this.view.isVertical&&this.scaleElement.classList.add("range-slider__value-scale-element_vertical"),this.scaleElement.addEventListener("click",(function(t){e.view.chooseHandleToMove(t,e.coords)}))},e.prototype.createScaleElementTextBlock=function(e){this.scaleElementTextBlock=document.createElement("div"),this.scaleElementTextBlock.classList.add("range-slider__value-scale-element-text"),!0===this.view.isVertical&&this.scaleElementTextBlock.classList.add("range-slider__value-scale-element-text_vertical"),this.scaleElement.append(this.scaleElementTextBlock),this.scaleElementTextBlock.textContent=e+""},e}(),c=function(){function e(e,t){this.view=e,this.handleIndex=t,this.minLimit=0,!0===this.view.isVertical?this.maxLimit=this.view.scale.offsetHeight:this.maxLimit=this.view.scale.offsetWidth,this.render()}return e.prototype.render=function(){this.handle=document.createElement("div"),this.handle.classList.add("range-slider__point"),this.view.scaleWrapper.append(this.handle),this.handleInfoBlock=document.createElement("div"),this.handleInfoBlock.classList.add("range-slider__info-block"),this.onMouseDown=this.onMouseDown.bind(this),this.onMouseMove=this.onMouseMove.bind(this),this.onMouseUp=this.onMouseUp.bind(this),this.handle.addEventListener("mousedown",this.onMouseDown),!0===this.view.isVertical&&this.handle.classList.add("range-slider__point_vertical"),this.showHint=this.showHint.bind(this),this.hideHint=this.hideHint.bind(this),this.handle.addEventListener("mouseover",this.showHint),this.handle.addEventListener("mouseout",this.hideHint)},e.prototype.showHint=function(){this.handleInfoBlock.style.display="block"},e.prototype.hideHint=function(){this.handleInfoBlock.style.display="none"},e.prototype.update=function(){var e=this.convertValueToCoords(this.view.values[this.handleIndex]);this.moveHandle(e)},e.prototype.onMouseDown=function(e){e.preventDefault(),!0===this.view.isVertical?this.shift=this.handle.getBoundingClientRect().bottom-e.clientY:this.shift=e.clientX-this.handle.getBoundingClientRect().left,document.addEventListener("mousemove",this.onMouseMove),document.addEventListener("mouseup",this.onMouseUp),this.handleIndex>0&&this.setMinLimit(),this.handleIndex!==this.view.handlesArray.length-1&&this.setMaxLimit(),this.view.handlesArray.forEach((function(e){return e.handle.style.zIndex="5"})),this.handle.style.zIndex="6",this.handle.removeEventListener("mouseout",this.hideHint),this.showHint()},e.prototype.setMinLimit=function(){var e=this.view.handlesArray[this.handleIndex-1].handle;!0===this.view.isVertical?this.minLimit=this.view.scale.getBoundingClientRect().bottom-e.getBoundingClientRect().bottom+this.handle.offsetHeight/2:this.minLimit=e.getBoundingClientRect().left-this.view.scale.getBoundingClientRect().left+this.handle.offsetWidth/2},e.prototype.setMaxLimit=function(){var e=this.view.handlesArray[this.handleIndex+1].handle;!0===this.view.isVertical?this.maxLimit=this.view.scale.getBoundingClientRect().bottom-e.getBoundingClientRect().bottom+this.handle.offsetHeight/2:this.maxLimit=e.getBoundingClientRect().left-this.view.scale.getBoundingClientRect().left+this.handle.offsetWidth/2},e.prototype.onMouseMove=function(e){e.preventDefault();var t=this.calcNewCoords(e);this.moveHandle(this.view.roundCoords(t)),this.view.onSlide&&this.view.onSlide(this.value,this.handleIndex)},e.prototype.onMouseUp=function(){document.removeEventListener("mousemove",this.onMouseMove),document.removeEventListener("mouseup",this.onMouseUp),this.sendCurrentValueToView(),this.view.observer.notifyObservers(),this.view.onSlideEnd&&this.view.onSlideEnd(this.value,this.handleIndex),this.hideHint(),this.handle.addEventListener("mouseout",this.hideHint)},e.prototype.sendCurrentValueToView=function(){var e=this,t=new Array(this.handleIndex+1);t[this.handleIndex]=this.value,t.forEach((function(t,i){e.view.values[i]=t}))},e.prototype.calcNewCoords=function(e){return!0===this.view.isVertical?this.view.scale.getBoundingClientRect().bottom-e.clientY-this.shift+this.handle.offsetHeight/2:e.clientX-this.view.scale.getBoundingClientRect().left-this.shift+this.handle.offsetWidth/2},e.prototype.moveHandle=function(e){if(e<this.minLimit&&(e=this.minLimit),e>this.maxLimit&&(e=this.maxLimit),!0===this.view.isVertical)if(this.handle.style.bottom=e+"px",0===this.handleIndex)if(this.view.handlesArray.length>1){this.view.coloredScale.style.bottom=e+"px";var t=this.view.handlesArray[this.handleIndex+1].handle;this.view.coloredScale.style.height=this.handle.getBoundingClientRect().bottom-t.getBoundingClientRect().bottom+"px"}else this.view.coloredScale.style.height=this.view.scale.getBoundingClientRect().bottom-this.handle.getBoundingClientRect().bottom+this.handle.offsetHeight/2+"px";else{var i=this.view.handlesArray[this.handleIndex-1].handle;this.view.coloredScale.style.height=i.getBoundingClientRect().bottom-this.handle.getBoundingClientRect().bottom+"px"}else if(this.handle.style.left=e+"px",0===this.handleIndex)if(this.view.handlesArray.length>1){this.view.coloredScale.style.left=e+"px";t=this.view.handlesArray[this.handleIndex+1].handle;this.view.coloredScale.style.width=t.getBoundingClientRect().left-this.handle.getBoundingClientRect().left+"px"}else this.view.coloredScale.style.width=this.handle.getBoundingClientRect().left-this.view.scale.getBoundingClientRect().left+this.handle.offsetWidth/2+"px";else{i=this.view.handlesArray[this.handleIndex-1].handle;this.view.coloredScale.style.width=this.handle.getBoundingClientRect().left-i.getBoundingClientRect().left+"px"}this.value=this.convertCoordsToValue(e),!0===this.view.inputsVisibility&&(this.view.inputsArray[this.handleIndex].value=this.value,this.view.inputsArray[this.handleIndex].input.value=this.value+""),this.handleInfoBlock.textContent=this.value+""},e.prototype.moveHandleDecorator=function(e){this.moveHandle(e),this.sendCurrentValueToView(),this.view.observer.notifyObservers()},e.prototype.convertCoordsToValue=function(e){var t,i=e,n=this.view.scale.offsetWidth;return!0===this.view.isVertical&&(n=this.view.scale.offsetHeight),t=Math.round(i/n*(this.view.maxValue-this.view.minValue)+this.view.minValue),(this.view.maxValue-this.view.minValue)/this.view.step%2!=0&&e>=n&&(t=this.view.maxValue),t},e.prototype.convertValueToCoords=function(e){if("number"==typeof+e){var t=this.view.scale.offsetWidth;return!0===this.view.isVertical&&(t=this.view.scale.offsetHeight),(+e-this.view.minValue)*t/(this.view.maxValue-this.view.minValue)}},e}();t.Handle=c;var d=function(){function e(e,t){this.observer=new u,this.titleText="string"==typeof t.title?t.title:null,this.handlesCount="number"==typeof t.handlesCount?t.handlesCount:1,this.progressBarVisibility=!1!==t.progressBar||t.progressBar,this.isRange=!0===t.range&&t.range,this.isVertical=!0===t.vertical&&t.vertical,this.inputsVisibility=!1!==t.inputs||t.inputs,this.valueScaleVisibility=!0===t.valueScale&&t.valueScale,this.hints=!1!==t.hints||t.hints,this.step="number"==typeof t.step?t.step:1,this.onSlide="function"==typeof t.onSlide?t.onSlide:null,this.onSlideEnd="function"==typeof t.onSlideEnd?t.onSlideEnd:null,this.minValue=0,this.maxValue=100,this.handlesCount>2&&(this.progressBarVisibility=!1),!0===this.isRange&&(this.handlesCount=2,this.progressBarVisibility=!0),this.values=[];for(var i=0;i<this.handlesCount;i++)this.values.push(this.minValue);this.element=document.querySelector(e)}return e.prototype.render=function(){var e=this;this.slider=document.createElement("div"),this.slider.classList.add("range-slider"),this.element.append(this.slider),this.titleText&&(this.sliderTitle=document.createElement("div"),this.sliderTitle.classList.add("range-slider__title"),this.slider.append(this.sliderTitle),this.sliderTitle.textContent=this.titleText),!0===this.inputsVisibility&&(this.inputContainer=new s(this).inputContainer);var t=new o(this);this.scaleWrapper=t.scaleWrapper,this.scale=t.scale,this.clickToMovePoint=this.clickToMovePoint.bind(this);var i=new l(this);this.coloredScale=i.coloredScale,!0===this.progressBarVisibility&&(i.render(),this.coloredScale.addEventListener("click",this.clickToMovePoint)),!0===this.isVertical&&this.transformToVertical(),this.handlesArray=[],this.inputsArray=[],this.createHandles().then((function(){e.handlesArray.forEach((function(e){return e.update()}))})),!0===this.hints&&this.createHints(),!0===this.inputsVisibility&&this.createInputs(),!0===this.valueScaleVisibility&&(this.valueScale=new a(this)),this.sortInputValues=this.sortInputValues.bind(this),this.scale.addEventListener("click",this.clickToMovePoint),window.addEventListener("resize",(function(){setTimeout((function(){return e.update(e.values)}),500)}))},e.prototype.createHandles=function(){var e=this;return new Promise((function(t){for(var i=0;i<e.handlesCount;i++){var n=new c(e,i);e.handlesArray.push(n)}t()}))},e.prototype.createInputs=function(){for(var e=this.handlesArray.length,t=0;t<e;t++){var i=new r(this,t);this.inputsArray.push(i)}},e.prototype.createHints=function(){var e=this;this.handlesArray.forEach((function(t){var i=t.handle,n=t.handleInfoBlock;i.append(n),!0===e.isVertical?n.classList.add("range-slider__info-block_vertical"):n.style.left=i.offsetWidth/2+"px"}))},e.prototype.uniteHintsBlock=function(){},e.prototype.transformToVertical=function(){this.scale.classList.add("range-slider__scale_vertical"),this.coloredScale.classList.add("range-slider__scale_colored_vertical")},e.prototype.update=function(e){var t=this;e.forEach((function(e,i){var n=t.handlesArray[i];i===t.handlesArray.length-1&&(n.maxLimit=t.scale.offsetWidth,!0===t.isVertical&&(n.maxLimit=t.scale.offsetHeight));var s=n.convertValueToCoords(e);n.moveHandle(t.roundCoords(s))})),this.valueScale.createScaleElement()},e.prototype.roundCoords=function(e){var t,i=(this.maxValue-this.minValue)/this.step,n=e%(t=1==this.isVertical?this.scale.offsetHeight/i:this.scale.offsetWidth/i);return n>t/2?e-n+t:e-n},e.prototype.clickToMovePoint=function(e){var t;e.preventDefault(),t=!0===this.isVertical?this.scale.getBoundingClientRect().bottom-e.clientY:e.clientX-this.scale.getBoundingClientRect().left,this.chooseHandleToMove(e,t)},e.prototype.chooseHandleToMove=function(e,t){var i=this;if(1===this.handlesArray.length)this.handlesArray[0].moveHandleDecorator(this.roundCoords(t));else{var n=this.handlesArray.slice();n.reverse().sort((function(t,n){var s,r;return i.isVertical?(s=Math.abs(t.handle.getBoundingClientRect().bottom-e.clientY),r=Math.abs(n.handle.getBoundingClientRect().bottom-e.clientY)):(s=Math.abs(t.handle.getBoundingClientRect().left-e.clientX),r=Math.abs(n.handle.getBoundingClientRect().left-e.clientX)),s-r})),n[0].moveHandleDecorator(this.roundCoords(t))}},e.prototype.sortInputValues=function(){var e=this,t=[];this.inputsArray.forEach((function(e){t.push(e.value)})),t.sort((function(e,t){return e-t})).forEach((function(t,i){var n=e.handlesArray[0].convertValueToCoords(t);e.handlesArray[i].moveHandleDecorator(n)}))},e.prototype.destroy=function(){this.slider.remove()},e}();t.View=d;var u=function(){function e(){this.observersArray=[]}return e.prototype.addObserver=function(e){this.observersArray.push(e)},e.prototype.removerObserver=function(e){this.observersArray=this.observersArray.filter((function(t){return t!==e}))},e.prototype.notifyObservers=function(e,t){this.observersArray.forEach((function(i){return i(e,t)}))},e}();t.EventObserver=u;var v=function(){function e(e,t,i){var n=this;this.view=t,this.model=e,this.options=i,this.valuesCount="number"==typeof this.options.handlesCount?this.options.handlesCount:1,this.view.observer.addObserver((function(){n.model.currentValues=n.view.values})),this.model.observer.addObserver((function(){var e=n.model.currentValues;n.view.update(e)})),this.setup()}return e.prototype.setup=function(){var e=this;this.view.minValue=this.model.limits[0],this.view.maxValue=this.model.limits[1],this.options.currentValues&&(this.model.currentValues=this.options.currentValues,this.model.currentValues.forEach((function(t,i){e.view.values[i]=t})))},e}();t.Controller=v;var p=function(){function e(e,t){this.model=new n(t),this.view=new d(e,t),this.controller=new v(this.model,this.view,t),this.view.render()}return e.prototype.setValues=function(e){this.model.setValues(e)},e.prototype.getValues=function(){return this.model.currentValues},e.prototype.clear=function(){this.view.handlesArray.forEach((function(e){e.moveHandleDecorator(0),e.handle.style.zIndex="5"}))},e.prototype.destroy=function(){this.view.destroy()},e.prototype.init=function(){this.view.render()},e}();t.RangeSlider=p}});