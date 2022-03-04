---
title: GA Branch Setup
tags:
 - google analytics
foot: |
  <script src="/assets/js/opt-in.js"></script>
---

I've switched from using Google Analytics to [Fathom](https://usefathom.com/ref/SI9RS1) (affiliate link) for tracking on this site. But I do work for clients with Google Analytics and have a property set up for testing purposes. I set up a Google Analytics branch on this site at the start of last year. This gives me a production environment to test and learn about new Google Analytics features and releases. I started a write up but got busy and didn't finish it.

{% include ga-opt-in.html %}

## How it works

There are a few guides available from Netlify about using split testing and branch deploys to create private opt-in betas which is where I have taken inspiration from.

What you do is create a new branch and deploy which will serve the branch on a unique URL. In this case `ga--darylshaw.netlify.app`. Then you set up a split test between the new branch and production. But weight the test 100% to the production branch which means the user needs to opt in.

Then there are a few bits to put together.

You can set in environments in Jekyll which is what I've done through `netlify.toml` with the following which is setting `JEKYLL_ENV` to "ga" when the deploy context is ga.

{:.hug}
```yaml
[context.ga]
  environment = { JEKYLL_ENV = "ga" }
```

There's probably a simpler way of accessing the environment variables but this builds on my overly complex existing set up for Fathom Analytics tracking.

Environment variables are accessible via snippet injection during post processing. I did try adding the script below wrapped in a Jekyll if environment to snippet injection but couldn't get it to work. Injecting the analytics script would be a cleaner solution. Injecting analytics script would inject to _all_ branches.

javascript to set cookie when you click button then to clear cookie when you opt out

{:.hug}
{% raw %}
```liquid
{% if jekyll.environment == 'ga' %}

<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-54371675-2"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-54371675-2');
</script>

{% endif %}
```
{% endraw %}

with jekyll you have environments. here if the the environment was ga, i want it to output the google analytics script.

At first it didn't seem to like this set up. When on the `ga--darylshaw.netlify.app` url, analytics worked as expected across pages. When on darylshaw.co.uk and opting in to ga - it set the cookie but didn't remove existing cookie and the ga cookie wasn't persistent across the domain. Only the page it was set. I thought that this was an issue with the Jekyll environment variable but setting a path on the cookies resolved the issue.

There are a few things I could revisit to round this off by setting up a subdomain for the ga branch similar to how I do for the staging branch. Or even setting up a redirect to only allow users to opt in through the button and not be able to visit the `ga--darylshaw.netlify.app` url. But I'm not bothered for these purposes.

the if statements using jekyll environments give more flexibilty. one limitation is the ga test branch could quickly become out of date as content is pushed to master. as the code is the same on both branches, those ga i can do a fast-forward merge of master into the ga branch to bring it up to date. there are better solutions than this. but for now, i'm going to leave it there