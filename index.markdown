---
layout: default
title: Home
date: 2015-11-11 00:21:00 Z
hide_from_nav: 'true'
---

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>
