# darylshaw.co.uk
My personal website

Install the bundle:
```
bundle install
```

Run:
```
npm install
```

Start Jekyll server and Grunt watch task:
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
