(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{533:function(s,t,a){"use strict";a.r(t);var r=a(4),e=Object(r.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("前言：我美化的没那么好看，如果不喜欢的话，你可以在css中根据自己的需要调整。本页面用到的所有css均在一个文件。持续更新到我不知道更新什么为止。2.0版本已解决验证问题。\n")]),s._v(" "),a("h2",{attrs:{id:"一开始我想说的话"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一开始我想说的话"}},[s._v("#")]),s._v(" 一开始我想说的话")]),s._v(" "),a("p",[s._v("之前弄了一个简单的说说页面，没想到效果挺好。挺多小伙伴都表示了很有用，最近突然意识到既然评论数据可以存储在"),a("code",[s._v("leancloud")]),s._v("然后展示出来，那说说肯定也可以啊！说干就干。\n之前那篇文章的链接: "),a("a",{attrs:{href:"https://cndrew.cn/2019/09/11/shuoshuo/",target:"_blank",rel:"noopener noreferrer"}},[s._v("为你的hexo博客添加说说页面"),a("OutboundLink")],1),s._v("\n目前最新版本："),a("code",[s._v("V2.0")])]),s._v(" "),a("h3",{attrs:{id:"特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#特性"}},[s._v("#")]),s._v(" 特性:")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("在"),a("code",[s._v("Hexo")]),s._v("中显示一个说说页面，并且支持站长实时发布，可移步"),a("code",[s._v("leancloud")]),s._v("后台进行修改。")])]),s._v(" "),a("li",[a("p",[s._v("可直接使用"),a("code",[s._v("html")]),s._v("语法插入歌曲或者图片视频等。理论上支持除了"),a("code",[s._v("<li>")]),s._v("和"),a("code",[s._v("<ui>")]),s._v("的其他任何html语法。")])]),s._v(" "),a("li",[a("p",[s._v("通过leancloud的用户直接调用保证仅站长可以发布说说，且被破解的概率理论上为0.")])])]),s._v(" "),a("p",[s._v("本篇文章中涉及到的js和css都已上传到GitHub: "),a("a",{attrs:{href:"https://github.com/Drew233/hexo-shuoshuo",target:"_blank",rel:"noopener noreferrer"}},[s._v("Hexo-shuoshuo"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("Demo: "),a("a",{attrs:{href:"https://cndrew.cn/shuoshuo/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Hexo-说说"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"具体食用方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#具体食用方法"}},[s._v("#")]),s._v(" 具体食用方法")]),s._v(" "),a("h3",{attrs:{id:"关于leancloud"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于leancloud"}},[s._v("#")]),s._v(" 关于Leancloud")]),s._v(" "),a("p",[s._v("这里我们要求使用"),a("a",{attrs:{href:"https://console.leancloud.app/login.html#/signup",target:"_blank",rel:"noopener noreferrer"}},[s._v("leancloud国际版"),a("OutboundLink")],1),s._v("注册，因为国际版不需要绑定备案的域名\n注册结束后首先找到账号设置，绑定邮箱和手机号。这一步是必须的，否则无法创建应用。邮箱和手机号都有临时的，所以也不难。\n"),a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/drew233/cdn/lc1.webp",alt:""}}),s._v("\n绑定成功之后，点击创建应用，并将应用名字设置为"),a("code",[s._v("shuoshuo")]),s._v(" "),a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/drew233/cdn/lc2.webp",alt:""}}),s._v(" "),a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/drew233/cdn/lcc2.webp",alt:""}}),s._v("\n创建之后点击应用跳转到控制台\n"),a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/drew233/cdn/lc3.webp",alt:""}})]),s._v(" "),a("p",[s._v("在设置中找到应用keys中的appId和appKey记下来，或者页面一直开着。\n"),a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/drew233/cdn/lc4.webp",alt:""}})]),s._v(" "),a("p",[s._v("在"),a("code",[s._v("leancloud")]),s._v("的存储中添加"),a("code",[s._v("class")]),s._v("，命名为"),a("code",[s._v("shuoshuo")]),s._v("。\n"),a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/drew233/cdn/lc5.webp",alt:""}})]),s._v(" "),a("p",[s._v("然后在你新建的应用中找到"),a("code",[s._v("结构化数据")]),s._v("下的"),a("code",[s._v("用户")]),s._v("。\n"),a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/drew233/cdn/20200417234538.webp",alt:""}})]),s._v(" "),a("p",[s._v("然后点击"),a("code",[s._v("添加用户")]),s._v("，输入你想使用的"),a("code",[s._v("用户名")]),s._v("以及"),a("code",[s._v("密码")]),s._v("。\n"),a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/drew233/cdn/20200417234719.webp",alt:""}})]),s._v(" "),a("p",[s._v("接着回到"),a("code",[s._v("结构化数据->shuoshuo->权限")]),s._v("，在"),a("code",[s._v("Class访问权限")]),s._v("中将"),a("code",[s._v("add_fields")]),s._v("以及"),a("code",[s._v("create")]),s._v("权限设置为指定用户，输入你刚才输入的用户名会自动匹配。为了安全起见，将"),a("code",[s._v("delete")]),s._v("和"),a("code",[s._v("update")]),s._v("也设置为跟它们一样的权限。\n"),a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/drew233/cdn/20200417235209.webp",alt:""}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/drew233/cdn/20200417235312.webp",alt:""}}),s._v("\n最后将"),a("code",[s._v("_User")]),s._v("中的权限全部调为指定用户，或者数据创建者，为了保证不被篡改用户数据。")]),s._v(" "),a("p",[s._v("到这里"),a("code",[s._v("leancloud")]),s._v("的设置就告一段落了。")]),s._v(" "),a("h2",{attrs:{id:"关于js和css"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于js和css"}},[s._v("#")]),s._v(" 关于js和css")]),s._v(" "),a("p",[s._v("去"),a("code",[s._v("GitHub")]),s._v("下载："),a("a",{attrs:{href:"https://github.com/Drew233/hexo-shuoshuo",target:"_blank",rel:"noopener noreferrer"}},[s._v("Hexo-shuoshuo"),a("OutboundLink")],1),s._v("\n引用"),a("code",[s._v("jquery")]),s._v("和"),a("code",[s._v("av-min")])]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("script src"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://cdn.jsdelivr.net/npm/leancloud-storage@4.5.3/dist/av-min.js"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("script src"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://cdn.jsdelivr.net/gh/drew233/cdn/js/jquery-3.3.1.min.js"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" 如果之前引用过就不需要重复引用了 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),a("p",[s._v("将"),a("code",[s._v("js和css")]),s._v("分别放入主题中对应的文件夹，然后在主题对应的模板文件中调用"),a("code",[s._v("css")]),s._v("，"),a("code",[s._v("js")]),s._v("一会用")]),s._v(" "),a("p",[s._v("然后在根目录的"),a("code",[s._v("source")]),s._v("文件夹下新建一个"),a("code",[s._v("shuoshuo")]),s._v("文件夹，并在文件夹中新建"),a("code",[s._v("index.md")]),s._v(" "),a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/drew233/cdn/index.webp",alt:""}})]),s._v(" "),a("p",[s._v("在"),a("code",[s._v("index.md")]),s._v("中除了"),a("code",[s._v("font-matter")]),s._v("之外写上以下内容")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" img"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" appID"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" appKEY"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" per"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" username"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("script type"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"text/javascript"')]),s._v(" src"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/js/shuoshuov2.0.js"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("body"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("div id"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"primary"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"content-area"')]),s._v(" style"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("main id"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"main"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"site-main"')]),s._v(" role"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"main"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("div id"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"shuoshuo_content"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("div id"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ccontent"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("div id"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sa"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("div id"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"saa"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("textarea id"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"neirong"')]),s._v(" placeholder"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"本页面仅支持站长发表说说，由于特殊原因关闭本页面评论功能"')]),s._v(" style"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"width:100%;height:150px;background-image: url(https://cdn.jsdelivr.net/gh/drew233/cdn/20200409110727.webp);background-size: contain;background-repeat: no-repeat;background-position: right;"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("textarea"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("button onclick"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"savecontent()"')]),s._v(" style"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"float :right;"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("biu"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("button"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("button onclick"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"preview()"')]),s._v(" style"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"float :right;"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("预览"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("button"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("input type"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"password"')]),s._v(" id"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"key"')]),s._v(" value"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mytxt"')]),s._v(" placeholder"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"是时候验证你的身份了！"')]),s._v(" autocomplete"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"off"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n \n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("div id"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"preview"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("body"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),a("ul",[a("li",[s._v("变量含义及作用")]),s._v(" "),a("li",[s._v("img: 头像url链接")]),s._v(" "),a("li",[s._v("appID: leancloud的应用appId")]),s._v(" "),a("li",[s._v("appKEY: leancloud的应用appKey")]),s._v(" "),a("li",[s._v("per: 每一部分想展示的说说数以及每次点击查看更多的时候显示的说说数")]),s._v(" "),a("li",[s._v("username: 你在leancloud中添加的作为可发布说说的用户的用户名")]),s._v(" "),a("li",[s._v("每个参数均必须填写(若未自己修改js)")])]),s._v(" "),a("p",[s._v("至此就添加完毕了。访问"),a("code",[s._v("yoursite.com/shuoshuo")]),s._v("就能看到你的动态说说界面了。\n每次发说说填上你在leancloud中设置的密码，再也不会有人可能冒充你发说说了呢。\n效果图\n"),a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/drew233/cdn/lc6.webp",alt:""}})]),s._v(" "),a("h2",{attrs:{id:"与valine的一些冲突"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#与valine的一些冲突"}},[s._v("#")]),s._v(" 与valine的一些冲突")]),s._v(" "),a("p",[s._v("说说页面无法开启"),a("code",[s._v("valine")]),s._v("评论\n如果你的博客添加了"),a("code",[s._v("valine")]),s._v("并且正在使用，那么将"),a("code",[s._v("av-min.js")]),s._v("放在"),a("code",[s._v("head")]),s._v("中引用即可。\n如果不可以，请联系我或者在"),a("code",[s._v("GitHub")]),s._v("提交"),a("code",[s._v("issues")])]),s._v(" "),a("h2",{attrs:{id:"结语"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#结语"}},[s._v("#")]),s._v(" 结语")]),s._v(" "),a("p",[s._v("本教程使用"),a("code",[s._v("hexo")]),s._v("默认主题做的示范，理论上任何主题均支持。\n我只是一个小白，大家轻喷。")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",[s._v("原文链接: "),a("a",{attrs:{href:"https://cndrew.cn/2020/04/10/hexo-shuoshuo/#%E7%BB%93%E8%AF%AD",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://cndrew.cn/2020/04/10/hexo-shuoshuo/#结语"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=e.exports}}]);