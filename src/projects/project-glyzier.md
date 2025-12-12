---
title: Glyzier
date: 2025-12-04
tags: project
layout: project.njk
summary: "An artist portfolio and store platform built with Spring Boot, React, and PostgreSQL"
image: /images/project-glyzier.png
technologies: ["Spring Boot", "Java", "React", "PostgreSQL", "Supabase", "JWT", "Maven", "Vite"]
projectUrl: "https://csit321-g7-glyzier.onrender.com/"
repoUrl: "https://github.com/seeudev/CSIT321-G7-glyzier"
---

## Glyzier - Artist Portfolio and Store Platform

A full-stack web application enabling artists to showcase and sell their work online with secure JWT authentication and simplified single-server architecture.

### Key Features

- **Users:** Secure registration/login, browse products, place orders, view order history
- **Sellers:** Convert to seller account, product management (CRUD), inventory control, store profile customization
- **System:** JWT authentication (24-hour tokens), RESTful API, responsive React SPA, single-origin deployment

### Tech Stack & Architecture

- **Backend:** Spring Boot 3.5.6, Java 17, Spring Security + JWT, PostgreSQL (Supabase), Spring Data JPA
- **Frontend:** React 19.1.1, Vite 7.1.7, React Router DOM 7.9.4, Axios 1.12.2
- **Deployment:** Render (single JAR serving both frontend and API)
- **Architecture:** Simplified single-server approach - Maven builds React app and copies to Spring Boot's static folder, eliminating CORS complexity

### Team

**CSIT321 - G7 Glyzier**
- Christian Harry R. Pancito
- Kaitlin Esdrelon
- John Andrew Cauban

### Course Information

**CSIT321 App-Dev and CSIT340 Elective** - Full-stack web application for artist portfolio and e-commerce platform.

[View Full Documentation on GitHub →](https://github.com/seeudev/CSIT321-G7-glyzier)
