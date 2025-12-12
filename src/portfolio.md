---
layout: layout.njk
title: Portfolio | seeudev
---

<div class="content-container">
<h2>Projects</h2>

Here are some of the projects I've worked on.

{% set projects = collections.project | reverse %} {# Get all items tagged 'project', reverse sort by date #}

{% if projects.length > 0 %}
    <div class="project-list">
    {% for project in projects %}
        <article class="project-preview">
            {% if project.data.image %}
            <div class="project-preview-thumbnail">
                <a href="{{ project.url | url }}"><img src="{{ project.data.image | url }}" alt="Preview for {{ project.data.title }}"></a>
            </div>
            {% endif %}
            <div class="project-preview-content">
                <h3><a href="{{ project.url | url }}">{{ project.data.title }}</a></h3>
                {% if project.data.summary %}
                <p>{{ project.data.summary }}</p>
                {% endif %}

                {# Technologies block completely removed #}

                <p><a href="{{ project.url | url }}">View Details &rarr;</a></p>
            </div>
        </article>
    {% endfor %}
    </div>
{% else %}
    <p>No projects found yet.</p>
{% endif %}
</div>