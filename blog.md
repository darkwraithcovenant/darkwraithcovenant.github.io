---
layout: default
title: Blog
image: "/assets/images/made_with_windows.gif"
---
<h4>Posts</h4>
<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}" class="blogtitle">{{ post.title }} +</a>
    {{ post.excerpt }}...
    </li> 
  {% endfor %} 
</ul>