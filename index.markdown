---
title: Home
date: 2015-11-11 00:21:00 Z
position: 2
layout: posts
hide_from_nav: 'true'
---

<div id='bump'>
  <section class="article archive">
    <article class="archive-wrap">
      <ol class="post-list">
        <lh><h2><span class="bb">{{ page.title }}</span></h2></lh>
        {% for post in site.posts %}
        <li>
          <div class="deets" itemscope itemtype="http://schema.org/BlogPosting" itemprop="blogPost">
            <p class="date"><time datetime="{{ post.date | date_to_xmlschema }}" itemprop="datePublished">{{ post.date | date: "%B %d, %Y" }}</time></p>
            <h1><a href="{{ post.url }}">{{ post.title }}</a></h1>
            {{ post.excerpt }}
          </div>
        </li>
        {% endfor %}
      </ol>
    </article>
  </section>
</div>
