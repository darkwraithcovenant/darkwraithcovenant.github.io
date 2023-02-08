---
layout: default
title: Blog
---


{:refdef: style="text-align: center;"}
[![konko](/assets/images/konko.gif)](/)
[![mww](/assets/images/made_with_windows.gif)](/blog.html)
[![pd](/assets/images/publicdomain.gif)](/music.html)
[![raa](/assets/images/raa.gif)](/desktop/index.html)
[![35mm](/assets/images/35mm.gif)](/fiends.html)
[![angelfire](/assets/images/angelfire.gif)](/about.html)
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