(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{595:function(a,t,e){"use strict";e.r(t);var s=e(10),r=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"基础平台内部分支管理规范-请务必按此规范进行开发"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基础平台内部分支管理规范-请务必按此规范进行开发"}},[a._v("#")]),a._v(" 基础平台内部分支管理规范，请务必按此规范进行开发")]),a._v(" "),e("p",[e("a",{attrs:{name:"N9i3N"}})]),a._v(" "),e("h2",{attrs:{id:"gitflow-流程规范"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gitflow-流程规范"}},[a._v("#")]),a._v(" GitFlow 流程规范")]),a._v(" "),e("p",[e("a",{attrs:{name:"91be7c16"}})]),a._v(" "),e("h3",{attrs:{id:"开发分支-develop-‌"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开发分支-develop-‌"}},[a._v("#")]),a._v(" 开发分支（develop）‌")]),a._v(" "),e("p",[a._v("develop 分支是仓库的开发分支，这个分支包含最近发布到开发环境的代码。\n"),e("a",{attrs:{name:"l7YDS"}})]),a._v(" "),e("h3",{attrs:{id:"预发布分支-release-‌"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#预发布分支-release-‌"}},[a._v("#")]),a._v(" 预发布分支（release）‌")]),a._v(" "),e("p",[a._v("release 分支是仓库的预发布分支（测试），用于 QA 测试。从 develop 拉取，测试完成 merge 到 master 和 develop，如果测试期间，有其他版本合并入 master，需要同步到 release 版本，并进行测试。\n"),e("a",{attrs:{name:"fCijc"}})]),a._v(" "),e("h3",{attrs:{id:"生产分支-master-‌"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#生产分支-master-‌"}},[a._v("#")]),a._v(" 生产分支（master）‌")]),a._v(" "),e("p",[a._v("master 分支是仓库的生产分支，这个分支包含最近发布到生产环境的代码， 这个分支需从 release 分支合并，禁止在这个分支直接修改 ‌。")]),a._v(" "),e("h2",{attrs:{id:"使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[a._v("#")]),a._v(" 使用")]),a._v(" "),e("p",[e("a",{attrs:{name:"O4O6V"}})]),a._v(" "),e("h3",{attrs:{id:"新功能开发-feature"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#新功能开发-feature"}},[a._v("#")]),a._v(" 新功能开发(feature)")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("做新功能的时从 develop 拉取分支, 多人开发同一个功能模块时，只需拉取一个分支：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v(" feature-'作者'-'功能概括名'-'时间'（feature-liyuming-weather-20223/02/16）\n")])])])]),a._v(" "),e("li",[e("p",[a._v("自测无误后提交 merge 到 develop，稳定后删除自己的 feature 分支;\n"),e("a",{attrs:{name:"bf65c"}})])])]),a._v(" "),e("h3",{attrs:{id:"线上问题修复-hotfix"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#线上问题修复-hotfix"}},[a._v("#")]),a._v(" 线上问题修复(hotfix)")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("修复线上环境上的问题从 master 拉取分支:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v(" hotfix-'作者'-bug概括名'-'时间'（hotfix-liyuming-weather-20223/02/16）\n")])])])]),a._v(" "),e("li",[e("p",[a._v("自测无误后提交 merge 到 master 和 develop，如果修复期间，有其他版本合并入 master ，需要同步到 hotfix 版本，并进行测试。 然后稳定后删除自己的 hotfix 分支;")])])]),a._v(" "),e("p",[e("a",{attrs:{name:"x4wX7"}})]),a._v(" "),e("h2",{attrs:{id:"提交规范"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#提交规范"}},[a._v("#")]),a._v(" 提交规范")]),a._v(" "),e("p",[e("a",{attrs:{name:"Z8mgi"}})]),a._v(" "),e("h3",{attrs:{id:"_1-type"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-type"}},[a._v("#")]),a._v(" （1）type")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("提交 commit 的类型，包括以下几种：\nfeat: 新功能\nfix: 修复问题\ndocs: 修改文档\nstyle: 修改代码格式，不影响代码逻辑\nrefactor: 重构代码，理论上不影响现有功能\nperf: 提升性能\ntest: 增加修改测试用例\nchore: 修改工具相关（包括但不限于文档、代码生成等）\nrevert: 代码回滚\nci： 工程构建\n")])])]),e("p",[e("a",{attrs:{name:"M9dXV"}})]),a._v(" "),e("h3",{attrs:{id:"_2-scope"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-scope"}},[a._v("#")]),a._v(" （2）scope")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("修改文件的范围（包括但不限于 doc, middleware, proxy, core, config）\n")])])]),e("p",[e("a",{attrs:{name:"nwOXH"}})]),a._v(" "),e("h3",{attrs:{id:"_3-subject"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-subject"}},[a._v("#")]),a._v(" （3）subject")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("用一句话清楚的描述这次提交做了什么\n")])])]),e("p",[e("a",{attrs:{name:"EsC83"}})]),a._v(" "),e("h3",{attrs:{id:"_4-body"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-body"}},[a._v("#")]),a._v(" （4）body")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("补充 subject，适当增加原因、目的等相关因素，也可不写。\n")])])]),e("p",[e("a",{attrs:{name:"FqN6C"}})]),a._v(" "),e("h3",{attrs:{id:"_5-footer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-footer"}},[a._v("#")]),a._v(" （5）footer")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("当有非兼容修改时可在这里描述清楚\n关联相关 issue，如 Closes #1, Closes #2, #3\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);