---
layout: default
title: faq
heading: faq
description: common questions about attending a dc303 meetup
---

<p class="notice">
  everything you need to know before turning up to your first meetup. still stuck?
  <a href="{{ '/contacts.html' | relative_url }}">contact us</a>.
</p>

<div class="faq">
  {%- for item in site.data.faq %}
  <section class="faq__item">
    <h2 class="faq__q">{{ item.q }}</h2>
    <p class="faq__a">{{ item.a }}</p>
  </section>
  {%- endfor %}
</div>
