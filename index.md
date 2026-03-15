---
layout: default
title: dc303
---

<table class="content-table">
  <tbody>
    <tr>
      <td>next meeting</td>
      <td>
        {% assign latest_meeting = site.posts.first %}
        {% if latest_meeting %}
        details: <a href="{{ '/meetings.html' | relative_url }}">here</a><br><br>
        date/time: {{ latest_meeting.date | date: "%B %d, %Y" }} @ 7:00 pm - 10:00 pm<br><br>
        {% if latest_meeting.rsvp %}
        rsvp (optional): <a href="{{ latest_meeting.rsvp }}">meetup</a> <br><br>
        {% endif %}

        {% if latest_meeting.presenter %}{{ latest_meeting.presenter }} - {% endif %}{{ latest_meeting.title }}<br><br>

        {{ latest_meeting.content | markdownify }}
        {% else %}
        Stay tuned for the next meeting!
        {% endif %}
        
        <br><br>

        location: <a href="https://goo.gl/maps/MpdMuZzYNDp">
            denhac</a><br>700 Kalamath Street, Denver, CO 80204 
      </td>
    </tr>

    <tr>
      <td>about</td>
      <td>
        this is the local defcon group for denver, colorado, usa.  not in our area? see other <a href="https://forum.defcon.org/social-groups">defcon groups</a>.
      </td>
    </tr>

  </tbody>
</table>
