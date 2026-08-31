---
layout: default
title: dc303
heading: dc303 — denver defcon group
description: the defcon group for denver, colorado. monthly meetups at denhac.
---

{% include meetups.html show="upcoming" %}

<section class="section" aria-labelledby="about-heading">
  <h2 id="about-heading" class="section__title">about</h2>
  <p>
    this is the local defcon group for denver, colorado, usa. we meet
    {{ site.meeting.schedule }}, {{ site.meeting.time }}, at
    <a href="{{ site.venue.map }}">{{ site.venue.name }}</a> — {{ site.venue.address }}.
  </p>
  <p>
    first time coming? check out our <a href="{{ '/faq.html' | relative_url }}">faq</a>
    which covers common questions about our meetup.
  </p>
  <p>
    not in our area? see other
    <a href="https://forum.defcon.org/social-groups">defcon groups</a>.
  </p>
</section>
