---
layout: post
title: "轻量级组件系统 Formotor.js 迟来的发布！"
author: "Felix Yang"
date: 2018-12-01 12:21:08
categories: tech
tags: javascript code framework mvc component
comments: true
cc_license: true
---

时间已经到了 2018 年最后一个月，诞生两年有余的轻量级组件系统 [Formotor.js](https://felixpy.github.io/formotor) 终于发布了 1.0 版本！不过，随着 jQuery 生态的隐退，这也将是 Formotor 的**最后一个版本**，作为对 jQuery 时代的一个告别。

两年前开发 Formotor 的时候，前端三大框架其实已经逐渐步入正轨，然而由于历史原因，本人负责维护的庞大的后台系统依然采用 jQuery + MVC 的模式进行开发。动辄上千行代码的文件加上复杂的依赖关系，使得迭代举步维艰。后来借着系统进行重大重构的契机，重点对 View 层的架构进行了重新设计，采用组件化对方案一举搞定了几百个表单页面对构建。

为了兼容已有的 jQuery UI 体系，Formotor 并没有实现 MVVM 框架核心的双向绑定机制以及单向数据流，而是主要放在了组件通信、模板指令等功能上，用来解决复杂的表单校验及联动交互等场景。

下面是一个使用 Formotor 实现的 TodoMVC 例子，简单的演示了通过 Formotor 来将 View 进行组件化的场景。

<iframe width="100%" height="650" src="//jsfiddle.net/felixpy/x28rdemc/embedded/result,js,html/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

作为对比，以下是一个直接使用 MVC 模式完成 TodoMVC 的例子。在项目的实际应用场景中，一个复杂的 View 文件大多有几千行代码，同时为了实现代码的复用，多个 View 之间通常有非常复杂的继承和引用关系。

<iframe width="100%" height="650" src="//jsfiddle.net/felixpy/mb84gd6o/embedded/result,js,html/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

目前，团队已经紧随时代的脚本，新项目几乎全部采用最新的 MVVM 框架进行开发，Formotor 作为过渡时期的一个解决方案，已经完美完成了它的使命！非常感谢这段开发和维护 Formotor 的经历！
