---
layout: layout.njk
title: Christian Harry Pancito 
permalink: /
---

{# === New Intro Section (Image Left, Text Right) === #}
<section class="intro-section">
  <div class="intro-image">
    <img src="/images/profile-pic.jpg" alt="Photo of Christian Harry Pancito"> 
  </div>
  <div class="intro-text">
    <p class="intro-hello">👋 Hi there! My name is</p>
    <h2 class="intro-name">Christian Harry Pancito</h2>
    <p class="intro-bio">
    	I'm a Student Developer in the Philippines eager to collaborate on exciting projects. Alongside my coding journey in higher education, I also offer professional video editing services. Let's create something amazing together!
      <!-- I'm an IT Enthusiast based in the Philippines focused on building everything from web-based apps, games and etc.. While I'm not building those I enjoy my freetime
      playing games or making videos on the side. -->
    </p>
  </div>
</section>

{# === New Featured Projects Section === #}
<section class="featured-projects">
  <h2>Featured Projects</h2>

  {# Get ALL projects, reversed #}
  {% set featuredProjects = collections.project | reverse %} 

  {% if featuredProjects.length > 0 %}
    <div class="featured-project-list">
      {# Loop through all, but only show content for first 2 #}
      {% for project in featuredProjects %}
        {% if loop.index <= 2 %} {# <<< Check if it's item 1 or 2 #}
          <article class="featured-project-item"> 
            <div class="preview-content">
              <h3><a href="{{ project.url | url }}">{{ project.data.title }}</a></h3>
              {% if project.data.summary %}
              <p>{{ project.data.summary }}</p>
              {% endif %}
              {% if project.data.technologies and project.data.technologies.length > 0 %}
                <p class="project-tech">
                    <small>
                        <strong>Built with:</strong>
                        {% for tech in project.data.technologies %}
                            {{ tech }}{% if not loop.last %}, {% endif %}
                        {% endfor %}
                    </small>
                </p>
              {% endif %}
              <p><a href="{{ project.url | url }}">View Details &rarr;</a></p>
            </div>
            {% if project.data.image %}
            <div class="preview-thumbnail">
              <a href="{{ project.url | url }}"><img src="{{ project.data.image | url }}" alt="Preview for {{ project.data.title }}"></a>
            </div>
            {% endif %}
          </article>
        {% endif %} {# <<< End the check for loop.index #}
      {% endfor %}
    </div>
    <div class="all-projects-link">
      <a href="{{ '/portfolio/' | url }}" class="cta-button">View All Projects</a>
    </div>
  {% else %}
      <p>No projects featured yet.</p>
  {% endif %}
</section>