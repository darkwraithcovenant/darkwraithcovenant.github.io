---
layout: default
title: Blog
image: "/assets/images/made_with_windows.gif"
---
<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}" class="blogtitle">{{ post.title }}</a>
    {{ post.excerpt }} <a href="{{post.url}}">+</a>
    </li>
    <p></p> 
  {% endfor %} 
</ul>