---
layout: default
title: Blog
---


{:refdef: style="text-align: center;"}
[![konko](/assets/images/konko.gif)]()
[![mww](/assets/images/made_with_windows.gif)]()
[![pd](/assets/images/publicdomain.gif)]()
[![raa](/assets/images/raa.gif)]()
{: refdef}  





<h4>Posts</h4>
<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}" class="blogtitle">{{ post.title }}</a>
    {{ post.excerpt }}...
    </li> 
  {% endfor %} 
</ul>