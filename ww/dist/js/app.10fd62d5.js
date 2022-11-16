(function(){"use strict";var o={3168:function(o,e,t){var n=t(6369),i=function(){var o=this,e=o._self._c;return e("div",{attrs:{id:"app"}},[e("TodoHeader",{attrs:{changeAll:o.changeAll},on:{"add-todo":o.addTodo,"changeAll-todo-vue-header":o.changeAllTodos}}),e("TodoList",{attrs:{todos:o.todos,condition:o.condition,allShowTodos:o.allShowTodos,notDoneTodos:o.notDoneTodos,accomplishTodos:o.accomplishTodos},on:{"change-todo-app-list":o.changeTodo,"dele-todo-app-list":o.deleteTodo,"revise-todo-app-list":o.reviseTodo}}),e("TodoFooter",{attrs:{daiban:o.daiban,btns:o.btns,allShowTodos:o.allShowTodos,notDoneTodos:o.notDoneTodos,accomplishTodos:o.accomplishTodos,condition:o.condition,clearShow:o.clearShow},on:{"changeCondition-footer":o.changeCondition,"clear-accomplish-footer":o.clearaccomplish}})],1)},r=[],s=function(){var o=this,e=o._self._c;return e("header",[e("h1",[o._v("todos")]),e("input",{attrs:{id:"bangding",type:"checkbox"},domProps:{checked:o.changeAll},on:{change:function(e){return o.$emit("changeAll-todo-vue-header")}}}),e("label",{attrs:{for:"bangding"}}),e("input",{directives:[{name:"model",rawName:"v-model",value:o.newTodo,expression:"newTodo"}],attrs:{type:"text",placeholder:"What need to be done?"},domProps:{value:o.newTodo},on:{keyup:function(e){return!e.type.indexOf("key")&&o._k(e.keyCode,"enter",13,e.key,"Enter")?null:o.addTodo.apply(null,arguments)},input:function(e){e.target.composing||(o.newTodo=e.target.value)}}})])},d=[],a={data:function(){return{newTodo:""}},props:{changeAll:Boolean},methods:{addTodo(){this.newTodo.trim()&&this.$emit("add-todo",this.newTodo),this.newTodo=""}}},l=a,c=t(1001),u=(0,c.Z)(l,s,d,!1,null,null,null),h=u.exports,f=function(){var o=this,e=o._self._c;return e("div",{staticClass:"wrapper"},[e("ul",o._l("all"==o.condition?o.allShowTodos:"not"==o.condition?o.notDoneTodos:o.accomplishTodos,(function(t){return e("TodoItem",{key:t.id,attrs:{todo:t},on:{"change-todo-list-item":function(e){return o.$emit("change-todo-app-list",e)},"dele-todo-list-item":function(e){return o.$emit("dele-todo-app-list",e)},"revise-todo-list-item":function(e){return o.$emit("revise-todo-app-list",e)}}})})),1)])},p=[],v=function(){var o=this,e=o._self._c;return e("li",[e("input",{attrs:{id:o.todo.id,type:"checkbox"},domProps:{checked:o.todo.finish},on:{change:function(e){return o.$emit("change-todo-list-item",{id:o.todo.id,finish:e.target.checked})}}}),e("label",{attrs:{for:o.todo.id}}),e("span",{class:{changeVal:o.revise.isChecked},on:{dblclick:function(e){o.revise.isChecked=!o.revise.isChecked}}},[o._v(o._s(o.todo.text))]),o.revise.isChecked?e("input",{directives:[{name:"model",rawName:"v-model",value:o.revise.newVal,expression:"revise.newVal"},{name:"foucs",rawName:"v-foucs",value:o.revise.isChecked,expression:"revise.isChecked"}],attrs:{type:"text"},domProps:{value:o.revise.newVal},on:{keyup:[function(e){if(!e.type.indexOf("key")&&o._k(e.keyCode,"esc",27,e.key,["Esc","Escape"]))return null;o.transferVal(o.todo.text,o.todo.id),o.revise.isChecked=!1},function(e){if(!e.type.indexOf("key")&&o._k(e.keyCode,"enter",13,e.key,"Enter"))return null;o.transferVal(o.revise.newVal,o.todo.id),o.revise.isChecked=!o.revise.isChecked}],blur:function(e){o.transferVal(o.revise.newVal,o.todo.id),o.revise.isChecked=!1},input:function(e){e.target.composing||o.$set(o.revise,"newVal",e.target.value)}}}):o._e(),e("a",{attrs:{href:"javaScript:;"},on:{click:function(e){return o.$emit("dele-todo-list-item",o.todo.id)}}},[o._v("x")])])},m=[],g={props:{todo:Object},data:function(){return{revise:{newVal:this.todo.text,isChecked:!1}}},methods:{transferVal(o,e){this.revise.newVal=o,this.revise.isChecked&&this.$emit("revise-todo-list-item",{val:o,id:e})}},directives:{foucs:{inserted(o,e){e.value&&o.focus()}}}},T=g,w=(0,c.Z)(T,v,m,!1,null,null,null),k=w.exports,b={components:{TodoItem:k},props:{todos:Array,condition:String,allShowTodos:Array,notDoneTodos:Array,accomplishTodos:Array}},y=b,x=(0,c.Z)(y,f,p,!1,null,null,null),_=x.exports,S=function(){var o=this,e=o._self._c;return e("footer",[e("p",[o._v(o._s(o.daiban)+" 待办")]),o._l(o.btns,(function(t,n){return e("a",{key:t.judge,class:o.btnIndex==n?"active":"",on:{click:function(e){o.changeCondit(t.judge),o.btnIndex=n}}},[o._v(" "+o._s(t.name)+" ")])})),e("span",{directives:[{name:"show",rawName:"v-show",value:o.clearShow,expression:"clearShow"}],on:{click:function(e){return o.$emit("clear-accomplish-footer")}}},[o._v("clear accomplish")])],2)},C=[],A={props:{btns:Array,daiban:Number,allShowTodos:Array,notDoneTodos:Array,accomplishTodos:Array,condition:String,clearShow:Boolean},data:function(){return{btnIndex:localStorage.getItem("btnIndex")||0}},methods:{changeCondit(o){this.$emit("changeCondition-footer",o)}},watch:{btnIndex:function(o){localStorage.setItem("btnIndex",o)}}},O=A,I=(0,c.Z)(O,S,C,!1,null,null,null),j=I.exports,V={name:"App",components:{TodoHeader:h,TodoList:_,TodoFooter:j},data:function(){return{todos:JSON.parse(localStorage.getItem("todos"))||[],btns:[{name:"全部",judge:"all"},{name:"未完成",judge:"not"},{name:"完成",judge:"done"}],condition:localStorage.getItem("condition")||"all"}},computed:{changeAll(){return this.todos.every((o=>o.finish))},daiban(){return this.todos.filter((o=>0==o.finish)).length},allShowTodos(){return this.todos},notDoneTodos(){return this.todos.filter((o=>!o.finish))},accomplishTodos(){return this.todos.filter((o=>o.finish))},clearShow(){return this.todos.some((o=>o.finish))}},methods:{addTodo(o){this.todos=[...this.todos,{id:this.todos.length?Math.max(...this.todos.map((o=>o.id)))+1:1,text:o,finish:!1}]},changeTodo({id:o,finish:e}){this.todos=this.todos.map((t=>t.id===o?{...t,finish:e}:t))},changeAllTodos(){this.todos=this.todos.map((o=>({...o,finish:event.target.checked})))},deleteTodo(o){this.todos=this.todos.filter((e=>e.id!==o))},changeCondition(o){this.condition=o},reviseTodo({val:o,id:e}){this.todos=this.todos.map((t=>t.id===e?{...t,text:1==Boolean(o.trim())?o.trim():t.text}:t))},clearaccomplish(){this.todos=this.todos.filter((o=>!o.finish))}},watch:{todos:function(o){localStorage.setItem("todos",JSON.stringify(o))},condition:function(o){localStorage.setItem("condition",o)}}},$=V,D=(0,c.Z)($,i,r,!1,null,null,null),P=D.exports;n.ZP.config.productionTip=!1,new n.ZP({render:o=>o(P)}).$mount("#app")}},e={};function t(n){var i=e[n];if(void 0!==i)return i.exports;var r=e[n]={exports:{}};return o[n](r,r.exports,t),r.exports}t.m=o,function(){var o=[];t.O=function(e,n,i,r){if(!n){var s=1/0;for(c=0;c<o.length;c++){n=o[c][0],i=o[c][1],r=o[c][2];for(var d=!0,a=0;a<n.length;a++)(!1&r||s>=r)&&Object.keys(t.O).every((function(o){return t.O[o](n[a])}))?n.splice(a--,1):(d=!1,r<s&&(s=r));if(d){o.splice(c--,1);var l=i();void 0!==l&&(e=l)}}return e}r=r||0;for(var c=o.length;c>0&&o[c-1][2]>r;c--)o[c]=o[c-1];o[c]=[n,i,r]}}(),function(){t.n=function(o){var e=o&&o.__esModule?function(){return o["default"]}:function(){return o};return t.d(e,{a:e}),e}}(),function(){t.d=function(o,e){for(var n in e)t.o(e,n)&&!t.o(o,n)&&Object.defineProperty(o,n,{enumerable:!0,get:e[n]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(o){if("object"===typeof window)return window}}()}(),function(){t.o=function(o,e){return Object.prototype.hasOwnProperty.call(o,e)}}(),function(){var o={143:0};t.O.j=function(e){return 0===o[e]};var e=function(e,n){var i,r,s=n[0],d=n[1],a=n[2],l=0;if(s.some((function(e){return 0!==o[e]}))){for(i in d)t.o(d,i)&&(t.m[i]=d[i]);if(a)var c=a(t)}for(e&&e(n);l<s.length;l++)r=s[l],t.o(o,r)&&o[r]&&o[r][0](),o[r]=0;return t.O(c)},n=self["webpackChunktodos"]=self["webpackChunktodos"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=t.O(void 0,[998],(function(){return t(3168)}));n=t.O(n)})();
//# sourceMappingURL=app.10fd62d5.js.map