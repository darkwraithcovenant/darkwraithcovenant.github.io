---
layout: default
title: Darkwraith Covenant Blog
badge: "/assets/images/badges/made_with_windows.gif"
---
<ul>
  {% for post in site.posts %}
    <li>
     <img src="{{ post.newimg }}">  <a href="{{ post.url }}" class="blogtitle">{{ post.title }}</a>
    {{ post.excerpt }} <a href="{{post.url}}">+</a>
    </li>
    <p></p> 
  {% endfor %} 
</ul>