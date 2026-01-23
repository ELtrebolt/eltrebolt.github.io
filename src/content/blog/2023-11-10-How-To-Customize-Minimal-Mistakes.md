---
title: "How to Customize Minimal Mistakes"
date: 2023-11-10
categories:
  - Guides
tags:
  - jekyll
  - minimal-mistakes
  - personal-website
  - customization
  - markdown
---

> **Note:** This post refers to the initial version of my website built with [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/) and Jekyll. My current site is built with Astro and Tailwind CSS.

## Getting Started

Before getting started, check out [https://mmistakes.github.io/minimal-mistakes/docs/stylesheets/#customizing](https://mmistakes.github.io/minimal-mistakes/docs/stylesheets/#customizing) for the comprehensive overview of what to do. On that page, here is the key info I found:

> **Note:** To make more extensive changes and customize the Sass partials bundled in the gem. You will need to copy the complete contents of the _sass directory to <your_project> due to the way Jekyll currently reads those files.

The way I did this was:
1. **Go to [https://download-directory.github.io/](https://download-directory.github.io/)**
2. **Input [https://github.com/mmistakes/minimal-mistakes/tree/master/_sass](https://github.com/mmistakes/minimal-mistakes/tree/master/_sass)**
3. **Move downloaded folder to workspace and rename to _sass**

After getting the _sass folder in your workspace, you can accomplish any of the following customizations.

## Changing Font Size

*Resource: [https://www.pwills.com/posts/2017/12/20/website.html](https://www.pwills.com/posts/2017/12/20/website.html)*

1. **Go to /_sass/minimal-mistakes/_reset.scss**
2. **Change the pixel size in this code:**
  - I use 16/18/20

 @include breakpoint($medium) {
    font-size: 18px;
  }

  @include breakpoint($large) {
    font-size: 20px;
  }

  @include breakpoint($x-large) {
    font-size: 22px;
  }

## Adding Favicon

*Resource: [https://www.cross-validated.com/Personal-website-with-Minimal-Mistakes-Jekyll-Theme-HOWTO-Part-IV/](https://www.cross-validated.com/Personal-website-with-Minimal-Mistakes-Jekyll-Theme-HOWTO-Part-IV/)*

1. **Go to [https://realfavicongenerator.net/](https://realfavicongenerator.net/) and download a folder of your favicons**
2. **I put my /favicon folder in the /assets folder**
3. **Go to /_includes/head/custom.html and add the following:**

```html
<!-- insert favicons. use https://realfavicongenerator.net/ -->
<link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon/favicon-16x16.png">
<link rel="manifest" href="/assets/favicon/site.webmanifest">
<meta name="msapplication-TileColor" content="#da532c">
<meta name="theme-color" content="#ffffff">
```

## Change Author Picture Size

1. **Go to /_sass/minimal-mistakes/_sidebar.scss**
2. **Change max-width in the following code:**
  - I use 180 instead of 110

```scss
  img {
    max-width: 110px;
    border-radius: 50%;

    @include breakpoint($large) {
      padding: 5px;
      border: 1px solid $border-color;
    }
  }
```

## Change Size of Feature Row Image

*Resource: [https://github.com/widdowquinn/widdowquinn.github.io/commit/30c405c24095e7e0cb82d3af38f6a1b0ab23e03c](https://github.com/widdowquinn/widdowquinn.github.io/commit/30c405c24095e7e0cb82d3af38f6a1b0ab23e03c)*

1. **Change /_includes/feature_row**

Before
{% raw %}
```html
<img src="{{ f.image_path | relative_url }}" 
  alt="{% if f.alt %}{{ f.alt }}{% endif %}">
```
{% endraw %}

After
{% raw %}
```html
<img src="{{ f.image_path | relative_url }}"
  alt="{% if f.alt %}{{ f.alt }}{% endif %}" {% if f.image_size %}width="{{f.image_size}}"{% endif %} >
```
{% endraw %}

2. **Change the following in /_sass/minimal-mistakes/_archive.scss:**

Before
```scss
  img {
    width: 100%;
  }
```
After
```scss
  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
```
3. **For the image in your feature_row, add image_size: 50%**
  - I use 50% for the profile picture on my Home page

## Change Color of Author Link Icons

1. **Go to /_sass/minimal-mistakes/_utilities.scss**
2. **Add color for Font Awesome specific icon**
  - In section around .fa-youtube

```scss
  .fa-spotify {
    color: $spotify-color;
  }
  .fa-chart-bar {
    color: #636EFA;
  }
```
3. **For new variables like $spotify-color go to /_variables.scss**
  - Near $youtube-color

```scss
$spotify-color: #1ED760 !default;
```

## Have Related Posts be Based on Tags

*Resource: [https://github.com/mmistakes/minimal-mistakes/issues/554](https://github.com/mmistakes/minimal-mistakes/issues/554)*

1. **Download the /_layouts folder just like you did with /_sass and add to workspace**
2. **Create a file "related.html" in /_includes**
  - Copy the 24 lines of code from the Minimal Mistakes post in the resource above. He wrote this:

> I came up with a way of showing "related posts" by like post.tags instead of using the built in site.related_posts array.

> The advantage here is you actually get a different set of related posts on each post instead of just the "most recent" posts that currently happens due to LSI being disabled on GitHub Pages.

> Using this spaghetti code of Liquid in _layouts/single.html will display related posts that share the same tags as the current post. It will show 1-4 posts depending on how many matches it finds.

3. **In /_layouts/single.html add {% raw %}{% include related_tabs.html %}{% endraw %} before the last </div>**
  - Or you could just copy paste the 24 lines of code directly into /single.html but I thought it'd be cleaner to separate
4. **Make sure related:true in /_config.yml in defaults: for the correct type:(posts)**
  - Also make sure you properly list out tags: in the posts

## Show Icon Labels for Date Published / Date Updated

1. **Add show_date: true in /_config.yml in defaults: for the correct type:(posts)**
2. **In /_includes/page__meta.html at line 11 after the </span> and before the %endif%**

{% raw %}
```html
{% if document.last_modified_at %}
  {% assign date = document.last_modified_at %}
  <span class="page__meta-sep"></span>
  <span title="updated">
    <i class="fas {% if include.type == 'grid' and document.read_time and document.show_date %}fa-fw {% endif %}fa-edit" aria-hidden="true"></i>
    <time datetime="{{ date | date_to_xmlschema }}">{{ date | date: date_format }}</time>
  </span>
{% endif %}
```
{% endraw %}
3. **In /_includes/page__date.html at line 2 (end of file)**

{% raw %}
```html
{% if page.date %}
  <p class="page__date"><strong><i class="fas fa-fw fa-calendar-alt" aria-hidden="true"></i> {{ site.data.ui-text[site.locale].date_label | default: "Originally Published:" }}</strong> <time class="dt-published" datetime="{{ page.date | date_to_xmlschema }}">{{ page.date | date: date_format }}</time></p>
{% endif %}
{% if page.last_modified_at %}
  <p class="page__date"><strong><i class="fas fa-fw fa-edit" aria-hidden="true"></i> {{ site.data.ui-text[site.locale].date_label | default: "Last Updated:" }}</strong> <time class="dt-published" datetime="{{ page.last_modified_at | date: "%Y-%m-%d" }}">{{ page.last_modified_at | date: date_format }}</time></p>
{% endif %}
```
{% endraw %}

## Change Top Left Title Name
1. **In /_config.yml**
2. **At the very top do title: ethanlee.me**
  - Changes to /_config.yml will not go through locally unless you stop and restart server using bundle exec jekyll serve