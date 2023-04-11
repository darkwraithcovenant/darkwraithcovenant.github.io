---
layout: default
title: Darkwraith Covenant Blog
badge: "/assets/images/badges/made_with_windows.gif"
---
<ul>
  {% for post in site.posts %}
    <li class="nobullet">
     <img src="{{ post.newimg }}">  <a href="{{ post.url }}" class="blogtitle">{{ post.title }}</a>
    {{ post.excerpt }} <a href="{{post.url}}">+ More</a>
    </li>

  {% endfor %} 
</ul>