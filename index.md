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

    <tr>
      <td>faq</td>
      <td>
        <p>
          <b>do i need to be a denhac member to attend?</b><br>
          no, you do not need to be a member. if the door is locked, please reach out using the details on the <a href="{{ '/contacts.html' | relative_url }}">contacts page</a> or call the phone number posted on the common area glass door.
        </p>

        <p>
          <b>is on-site parking available?</b><br>
          yes. on meetup days, parking is free in the lot next to denhac, as well as the lot directly across Kalamath street (both are owned by our building).
        </p>

        <p>
          <b>has denhac been closed by the Santa Fe road construction?</b><br>
          no, denhac remains open. you can access the building by turning in from Kalamath street, or by using the alley located to the south of denhac and west of Santa Fe.
        </p>

        <p>
          <b>do you accept talk proposals?</b><br>
          yes, we are always accepting talk proposals. feel free to reach out via the <a href="{{ '/contacts.html' | relative_url }}">contacts page</a>.
        </p>
      </td>
    </tr>

  </tbody>
</table>
