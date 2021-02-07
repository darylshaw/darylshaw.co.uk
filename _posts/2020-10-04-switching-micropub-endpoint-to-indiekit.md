---
title: Switching Micropub endpoint to Indiekit
date: 2020-10-04T21:55:33.957+01:00
render_with_liquid: false
excerpt: On a rainy Saturday in October, stuck in isolation, with rainwater leaking into my room through the roof.
---
I posted back in June about playing with Micro.blog. I created an account for Micro.blog in January 2018 but didn't do much else. I wanted to be able to publish a post on my own website from the Micro.blog Mac or iOS app. I set up a Micropub endpoint so that I can do that.

Initially, I was including all blog posts and notes in the same collection. Earlier this week, I split up notes and blog posts. This is easy to do in Jekyll. Define a new collection in `_config.yml`:

{:.hug}
```yaml
collections:
    notes:
        title: Notes
        output: true
```

Then create a new folder for the collection and add content. By setting `output: true` in the collection's metadata above, I'm ensuring that Jekyll will generate the documents when the site is built.

To output the notes in a new page, I can do this (simplified):

{:.hug}
```liquid
---
layout: default
---

{% for note in site.notes %}
    {{ note.content | markdownify }}
{% endfor %}
```

Feeds can be added to Micro.blog which will show posts from the feeds on the Micro.blog timeline. I created a new feed for the notes to add to Micro.blog. I can then add a post through the Micro.blog apps which will post it to a Micropub endpoint.

This is where I got a bit confused. I wanted to add a short post to Micro.blog which would then post it as a note to my website. If I added a longer post, then add this as a blog post. This isn't how the feeds work (which Manton helpfully explained for me). If I wanted to control where posts go then I could look into categories to route different categories to different feeds. I would be better off configuring my website to deal with different post types better though.

I've been wanting to look at [Indiekit](https://github.com/getindiekit/indiekit) for a while now. I was using [Micropub to GitHub](https://github.com/voxpelli/webpage-micropub-to-github) for my endpoint but it doesn't have a media endpoint.

I couldn't get Indiekit working using the deploy to Heroku button on the repo. This is supposed to be the quick and easy way to deploy and configure a Heroku app. It would have been much quicker and easier if I followed Paul's documentation from the start. And I wouldn't have lost a Friday evening.

On a rainy Saturday in October, stuck in isolation, with rainwater leaking into my room through the roof. I started again with getting an Indiekit server set up.

Previously, when I've deployed to Heroku, I click the button, go through the configuration, and hope for the best. By creating the configuration file, setting options, deploying the app using Heroku CLI, it helped me to better understand what is going on.

There were a few changes I needed to make to my website to get Indiekit working how I needed. For Micropub to GitHub, when deploying to Heroku, it asks you to set a value for layout. I can set this in the front matter defaults. This will apply to all documents in the collection. I can override this by setting a value in the individual document front matter.

{:.hug}
```yaml
defaults:
-
    scope:
        path: ""
        type: "notes"
    values:
        layout: "post"
        title: ""
        permalink: "/:collection/:title"
```

As notes don't have a title output on my website, I set the default title to be an empty string. This way it doesn't use the slug for the title. The empty string for path means all files and is required when working with scope/values pairs.

Indiekit doesn't support syndication yet. But I have my feeds added in Micro.blog. When I post to my website, Micro.blog picks this up and then cross-posts to Twitter. There's more I need to do like adding microformats to content and configuring the photos post type. But this feels like good progress.

I tried publishing this to my website as a draft, directly from iA Writer. I probably should have, erm, tested it first. But still pretty sweet.
