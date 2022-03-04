# darylshaw.co.uk
This is my personal website. It is always going to be a [work in progress](https://darylshaw.co.uk/blog/work-in-progress-part-two/).

Using [Jekyll](https://jekyllrb.com/) which provides built-in support for [Sass](https://sass-lang.com/).

Get up and running with:
```
bundle install
```

Jekyll ships with its own Sass converter meaning there is nothing to install to process Sass.

Run:
```
npm install
```

Start Jekyll server and Grunt watch task:
```
npm run dev
```

Hosted with [Netlify](https://www.netlify.com/). This solves issues around using unsupported GitHub Pages gems. For example, tagging was a pain. For the time being I've removed tags from posts so you need a direct link to reach the tag pages. I will start tagging posts and add them back into posts.

No CMS but [Indiekit](https://getindiekit.com/) allows me to publish content to my website using [iA Writer](https://ia.net/writer) and the [Micro.blog](https://micro.blog/) apps.

## Styling

Switched to use system font stack.

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
