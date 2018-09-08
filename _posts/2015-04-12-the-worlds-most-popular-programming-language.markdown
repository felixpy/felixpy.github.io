---
layout: post
title: "The World's Most Popular Programming Language"
author: "Felix Yang"
date: 2015-04-12 15:21:08
categories: reproduction
tags: javascript code
comments: true
---

> The World's Most Misunderstood Programming Language Has Become the World's Most Popular Programming Language
> 
> Douglas Crockford, 2008

Jean Sammet wrote Computer Languages: History and Fundamentals in 1969. It was a survey of 120 programming languages, some in considerable detail. Sammet's book chronicled languages that were designed before the Structured Programming Revolution and the later development of Object-Orientation. The book's cover featured a picture of the Tower of Babel. Many of the bricks in the structure of the tower bore the names of programming languages.

This of course refers to Genesis [11:1-9] in which some excellent engineering talent was applied to the task of building a city and a tower with which to unify the world.

> But the LORD came down to see the city and the tower which the sons of men had built. And the LORD said, “Indeed the people are one and they all have one language, and this is what they begin to do; now nothing that they propose to do will be withheld from them. Come, let Us go down and there confuse their language, that they may not understand one another’s speech.” So the LORD scattered them abroad from there over the face of all the earth, and they ceased building the city. Therefore its name is called Babel, because there the LORD confused the language of all the earth; and from there the LORD scattered them abroad over the face of all the earth.

Sometimes this is read as a warning against hubris. Sometimes this is read as a just-so story explaining why people speak so many languages: The LORD created the I18N Problem to prevent humanity from reaching its potential. But I think its truest interpretation is as a metaphor for programming language design. The principle problem in programming is the management of complexity. If a language does not help us to manage very complex systems in the face of changing requirements, then confusion results, and failure follows.

Why are there so many programming languages? Beyond the Sammet set, there have been lots of new languages and dialects developed over the past 40 years. We have been programming at a High Level for a very long time. Shouldn't we have converged on the right way to do it by now? There are obvious efficiencies that would be obtained from the design and adoption of a single, perfect language. We could focus our resources more effectively on training and tool development. Why haven't we done that?

We have been trying. There have been several attempts to build massive, universal languages. They all failed. As a language design grows, increasing its applicability, it becomes more and more complex. Designers who makes their language too complex will confuse the language, sayeth the LORD.

So we see instead a large number of more specialized languages. A specialized language will be very effective for some range of tasks. And that's good enough. For people who have to accomplish those tasks, having the the right language can be, well, a godsend.

A programming language cobbles a model of computation with some sort of expressive syntax. Most languages will have a set of useful values such as numbers and texts (which most languages, strangely, call strings), and operations that mutate and synthesize values and some form of variation or repetition, and some way of packaging operations into more convenient idioms. The variations that are possible are endless, much like the variations possible in the preparation of a fine meal or a work of music. The art in language design is knowing what to leave out. The features of a good language work together harmoniously. A good language helps us to better understand a problem and to find the best expression of its solution.

A good language is composed of a limited set of features. But there is little agreement on which features are best. Programmers can argue endlessly about features and whether they make one language better than another. This does not mean that the features don't matter. They matter greatly. We just don't understand yet how they matter.

Language design has more to do with fashion than technology. It may seem strange that fashion is a major factor in the nerdliest of arts, but it is true. A language with radically different syntax, for example, has no hope of finding broad adoption, regardless of the brilliance of its design. This tends to constrain the rate at which languages evolve.

Like music and food, a programming language can be a product of its time. The deep problem in language design is not technological, it is psychological. A programming language should equip us with structures that help us to reason more effectively.

Programming languages are like cats. It is easier to get a new cat than to get an old cat fixed. Most successful languages are ultimately replaced by upstarts. Remodeled languages rarely match the glory of the original. Fortran was once the king of languages. It has been revised several times over the years, but the modernized dialects experienced a fraction of the prestige of Fortran IV. Similarly, Pascal was a popular structured programming language, but none of the object oriented dialects ever approached Pascal's glory. Instead, languages tend to be superseded.

Specialized languages are fun to make, which partly explains why there are so many. If a language doesn't get too big, it can be managed by a single designer. Most languages can be identified with a single designer. Pascal: Wirth. C: Ritchie. C++: Stroustrup. Java: Gosling. C#: Hejlsberg. Rebol: Sassenrath. Python: van Rossum. PHP: Lerdorf. Perl: Wall. Ruby: Matsumoto. Lua: Ierusalimschy. E: Miller. JavaScript: Eich.

Most languages die in obscurity. Only a few are able to build a following beyond a single project or company. And only a very small number of languages become important.

There are two ways that a language becomes important. The first is as a source or proving ground for important ideas. This includes languages like Smalltalk and Scheme. These languages are not widely used, but are generally recognized as brilliant, but out of fashion. They have a powerful influence on language designers.

The second way that a language becomes important is by becoming popular.

There are many things that a programmer must consider when selecting a program language unless that programmer is writing for web browsers where the only choice currently is JavaScript.

JavaScript is an astonishing language, in the very worst sense. Its astonishing nature led to a very bad reputation. JavaScript is also coupled with The DOM, a horrendous API. There is a lot of confusion about where JavaScript ends and the DOM begins. There is lots of chatter about improving JavaScript, but that by itself would do little to improve the lives of web developers. The language is burdened with too many features, including many that interact badly or were poorly designed. It is a language that has, as Emperor Joseph would say, too many notes.

So how did a language with such obvious deficiencies become the Sole Programming Language of the Web? Brendan Eich convinced his pointy-haired boss at Netscape that the Navigator browser should have its own scripting language, and that only a new language would do, a new language designed and implemented in big hurry, and that no existing language should be considered for that role. The Internet Explorer team at Microsoft wanted to capture Netscape's market share, so they carefully reverse engineered Netscape's language, huge hairy warts and all. The other browser makers followed Microsoft's lead. There is no standard that says that a web browser must implement JavaScript; JavaScript is the only language implemented in all popular web browsers. There was no careful review of the language or its problem domain. There was no review of its suitability or the soundness of its design. It was slapped together at Netscape, and then copied elsewhere. Given the process that created JavaScript and made it a de facto standard, we deserve something far worse.

But despite JavaScript's astonishing shortcomings, deep down, in its core, it got something very right. When you peel away the cruft, there is an expressive and powerful programming language there. That language is being used well in many Ajax libraries to manage and augment the DOM, producing an application platform for interactive applications delivered as web pages. Ajax has become popular because JavaScript works. It works surprisingly well.

JavaScript was the world's most misunderstood programming language. Its obvious defects, its unfashionable programming model, intentional mispositioning at its introduction, and its ridiculous name caused it to be rejected as unworthy by most knowledgeable programmers. But Ajax gave JavaScript a second chance.

Because JavaScript is the language of the web browser, and because the web browser has become the dominant application delivery system, and because JavaScript isn't too bad, JavaScript has become the World's Most Popular Programming Language. Its popularity is growing. It is now being embedded in other applications and contexts. JavaScript has become important.

It is better to be lucky than smart.

See: [The World's Most Misunderstood Programming Language Has Become the World's Most Popular Programming Language](http://www.crockford.com/javascript/popular.html){:target="_blank"}
