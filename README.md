# Personal Blog & Portfolio

My static blog and portfolio website built with [Eleventy](https://www.11ty.dev/) and vanilla HTML/CSS.

## Structure

```
.
├── _includes/          # Nunjucks layout templates
│   ├── layout.njk      # Main layout template
│   ├── post.njk        # Blog post template
│   └── project.njk     # Project template
├── src/                # Source files
│   ├── css/            # Stylesheets
│   ├── images/         # Image assets
│   ├── posts/          # Blog posts (Markdown)
│   ├── projects/       # Portfolio projects (Markdown)
│   ├── index.md        # Homepage
│   ├── about.md        # About page
│   ├── blog.md         # Blog listing page
│   ├── contact.md      # Contact page
│   └── portfolio.md    # Portfolio listing page
├── .eleventy.cjs       # Eleventy configuration
├── package.json        # Project dependencies
└── CNAME               # Custom domain configuration
```

## Tech Stack Used

- **Static Site Generator**: Eleventy v2.0.1
- **Templating**: Nunjucks
- **Markup**: Markdown
- **Styling**: Vanilla CSS
- **RSS**: @11ty/eleventy-plugin-rss

## Prerequisites

- Node.js (v14 or higher recommended)
- npm or yarn

## Templating

### New Blog Post

Create a new MD file

```markdown
---
title: "Your Post Title"
date: 2025-10-16
description: "A brief description of your post"
tags: ["tag1", "tag2"]
layout: post.njk
---

Content
```

### New Project

Create a new MD file in `src/projects/`:

```markdown
---
title: "Your Project Name"
description: "Project description"
tags: ["technology", "framework"]
layout: project.njk
---

Project details...
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**seeudev**

- GitHub: [@seeudev](https://github.com/seeudev)
- Website: [seeudev.github.io](https://seeudev.github.io)

---