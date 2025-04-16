---
layout: layout.njk
title: Contact
---

## Get In Touch

Whether you have a question, a project proposal for web development or video editing, a job opportunity, or just want to connect, I'd love to hear from you! Here are the best ways to reach me:

For direct inquiries, detailed project discussions, or job opportunities, feel free to send me an email. I typically respond within 24-48 hours.
<p class="contact-email">
  Email: <a href="mailto:christianharrypancito@gmail.com">christianharrypancito@gmail.com</a> 
</p>

<br>

Alternatively, you can use the form below:

{# ---- Replace YOUR_FORMSPREE_ENDPOINT below ---- #}
<form action="https://formspree.io/f/mnnpreyg" method="POST" class="contact-form">
  <div class="form-group">
    <label for="contact-name">Your Name:</label>
    <input type="text" id="contact-name" name="name" required>
  </div>
  <div class="form-group">
    <label for="contact-email">Your Email:</label>
    <input type="email" id="contact-email" name="_replyto" required> 
    {# Formspree uses _replyto for the user's email #}
  </div>
   <div class="form-group">
    <label for="contact-subject">Subject:</label>
    <input type="text" id="contact-subject" name="_subject">
     {# Optional subject line for email #}
   </div>
  <div class="form-group">
    <label for="contact-message">Your Message:</label>
    <textarea id="contact-message" name="message" rows="6" required></textarea>
  </div>
  {# Optional: Add hidden field for spam protection later if needed #}
  <button type="submit" class="cta-button">Send Message</button>
</form>
{# ---- End Form ---- #}

<br> {# Add some space #}

**Professional Platforms**

* **LinkedIn:** Connect with me on [LinkedIn](https://www.linkedin.com/in/christianharrypancito/) for professional networking.
* **Upwork:** For freelancing projects via the Upwork platform, you can find my profile [here](https://www.upwork.com/freelancers/~0161468e031de9d98a).