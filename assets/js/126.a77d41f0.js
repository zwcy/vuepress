(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{322:function(e,t,r){"use strict";r.r(t);var n=r(17),l=Object(n.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h3",{attrs:{id:"springboot-filter中注入bean-无效为null"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#springboot-filter中注入bean-无效为null","aria-hidden":"true"}},[e._v("#")]),e._v(" Springboot Filter中注入bean 无效为null")]),e._v(" "),r("p",[e._v("问题原因：")]),e._v(" "),r("p",[e._v("Web应用的启动顺序是：Lisenter->Fliter->Servlet,  应用程序上下文， 初始化 Fliter的时候，还没有初始化Servlert，所有没有进入DispacterServlet的初始化，故在Fliter中使用注解注入bean为空；")]),e._v(" "),r("p",[e._v("解决办法：")]),e._v(" "),r("p",[e._v("添加初始化bean配置，手动创建对象new")])])}),[],!1,null,null,null);t.default=l.exports}}]);