---
layout: layout.njk
title: Blog
---

## Latest Posts

{% set posts = collections.post | reverse %} {# Get all posts tagged 'post', newest first #}

<ul class="post-list">
{% for post in posts %}
    <li class="post-preview">
        {# Div for Text Content #}
        <div class="preview-content">
            <h3><a href="{{ post.url | url }}">{{ post.data.title }}</a></h3>
            <p class="post-meta">
                <time datetime="{{ post.date | htmlDateString }}">{{ post.date | readableDate }}</time>
            </p>
            {% if post.data.excerpt %}
            <p>{{ post.data.excerpt }}</p>
            {% endif %}
            <p><a href="{{ post.url | url }}">Read More &rarr;</a></p>
        </div>

        {# Div for Thumbnail Image (Conditional) #}
        {% if post.data.thumbnail %}
        <div class="preview-thumbnail">
            <img src="{{ post.data.thumbnail | url }}" alt="Thumbnail for {{ post.data.title }}">
        </div>
        {% endif %}
    </li>
{% endfor %}
</ul>

{% if posts.length == 0 %}
    <p>No posts found yet.</p>
{% endif %}