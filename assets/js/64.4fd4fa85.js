(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{406:function(s,e,t){"use strict";t.r(e);var n=t(17),c=Object(n.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("先认识一下这三个配置文件：")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("/etc/hosts #：这个是最早的 hostname 对应 IP 的存档；\n/etc/resolv.conf #：当需要解析域名时，读取该文件获得DNS 服务器 IP；\n/etc/nsswitch.conf#：这个档案『决定』先使用 /etc/hosts 还是 /etc/resolv.conf 的设定！\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("当电脑要访问一个域名时，要将域名翻译成IP地址。\n这个过程通常会先访问/etc/hosts，看本地是否有对应的hostname -- IP记录。\n如果没有就去查询DNS服务器，通过/etc/resolv.conf 得到dns服务器地址。")]),s._v(" "),t("p",[s._v("当在eth接口启用DHCP后，本地resolv.conf文件将被修改，resolv.conf文件中的DNS地址将被改为从DHCP获取到的地址。这种从DHCP获得的DNS即是Peer DNS。")]),s._v(" "),t("p",[s._v("启用DHCP后即便修改/etc/resolv.conf，不久又恢复成原样。如何解决这个问题？此时，你得要在 /etc/sysconfig/network-scripts/ifcfg-eth0 等相关档案内，增加一行：『PEERDNS=no』，然后重新启动网络即可。")])])}),[],!1,null,null,null);e.default=c.exports}}]);