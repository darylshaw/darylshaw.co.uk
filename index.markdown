---
title: Home
date: 2015-11-11 00:21:00 Z
position: 0
layout: default
description: I'm Daryl. I work in marketing. Welcome to my site.
---

# Hi, I'm Daryl.

I work in marketing and sometimes post stuff here.



## Latest Posts

  <ul class="latest-posts">
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a> - <time datetime="{{ post.date | date_to_xmlschema }}" itemprop="datePublished">{{ post.date | date: "%B %d" }}</time>
    </li>
  {% endfor %}
  </ul>
