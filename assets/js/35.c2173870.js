(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{380:function(s,e,r){"use strict";r.r(e);var t=r(17),n=Object(t.a)({},(function(){var s=this,e=s.$createElement,r=s._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[r("h5",{attrs:{id:"docker-warning-ipv4-forwarding-is-disabled-解决方法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#docker-warning-ipv4-forwarding-is-disabled-解决方法","aria-hidden":"true"}},[s._v("#")]),s._v(" docker WARNING: IPv4 forwarding is disabled. 解决方法")]),s._v(" "),r("div",{staticClass:"language-shell line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[s._v("#般情况下，我们的linux机器的ip forwarding选项都是关闭的。 但是如果我们的机器需要做网关，或路由器。那么这个就要打开了\necho net.ipv4.ip_forward=1 >> /usr/lib/sysctl.d/00-system.conf\nsystemctl restart network && systemctl restart docker\n\n#查看是否修改成功\nsysctl net.ipv4.ip_forward\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br"),r("span",{staticClass:"line-number"},[s._v("2")]),r("br"),r("span",{staticClass:"line-number"},[s._v("3")]),r("br"),r("span",{staticClass:"line-number"},[s._v("4")]),r("br"),r("span",{staticClass:"line-number"},[s._v("5")]),r("br"),r("span",{staticClass:"line-number"},[s._v("6")]),r("br")])])])}),[],!1,null,null,null);e.default=n.exports}}]);