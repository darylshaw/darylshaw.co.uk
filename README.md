# darylshaw.co.uk

[![Netlify Status](https://api.netlify.com/api/v1/badges/bd944125-1995-4ce0-9100-dd18e876bd40/deploy-status)](https://app.netlify.com/sites/darylshaw/deploys)

This is my personal website. It is always going to be a [work in progress](https://darylshaw.co.uk/blog/work-in-progress-part-two/).

Running [Jekyll](https://jekyllrb.com/) which provides built-in support for [Sass](https://sass-lang.com/). Grunt task to optimise images.

## Development

Get up and running with:
```
bundle install
```

Run:
```
npm install
```

Start Jekyll server:
```
npm run dev
```

## Styling

To make content break out the container and hug the screen on smaller devices use `{:.hug}`. This adds a class to the outputted HTML.

For example, for a code block:

~~~
{:.hug}
```
brew install node
```
~~~

For callouts, use the following HTML markup in the markdown file:

```
<div class="callout" data-text="Tip">
To show hidden files press <strong>⌘-Space-Dot (.)</strong>
</div>
```

The data-text attribute will be the title of the callout section.
