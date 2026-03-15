---
layout: default
title: dc303 - meetings
---

<table class="content-table">
  <tbody>
    <tr>
      <td>meeting topics</td>
      <td>
        we encourage members to be active and contribute to the group. if
        you have a meeting topic or idea, propose it in the discord channel or
        <a href="{{ '/contacts.html' | relative_url }}">contact us</a> directly.
      </td>
    </tr>

    <tr>
      <td>where</td>
      <td>
        meetings are held at
        <a href="https://goo.gl/maps/MpdMuZzYNDp">denhac</a>:<br>
        700 Kalamath Street, Denver CO 80204<br>
      </td>
    </tr>

    <tr>
      <td>when</td>
      <td>
        4th fridays, 7:00 - 10:00 PM
      </td>
    </tr>

    <tr>
      <td>discord</td>
      <td>
        join the community on discord! decode: ZGlzY28gcmQge2RvdH0gZ2d7c2xhc2h9Q2FKV2pVZ3FFVg==
      </td>
    </tr>

    <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>

    <tr>
      <td colspan="2">next meeting:</td>
    </tr>

    {% assign latest_meeting = site.posts.first %}
    {% if latest_meeting %}
    <tr>
      <td>{{ latest_meeting.date | date: "%Y-%m-%d" }}</td>
      <td>
        {% if latest_meeting.presenter %}{{ latest_meeting.presenter }} - {% endif %}{{ latest_meeting.title }}<br><br>
        {{ latest_meeting.content | markdownify }}
      </td>
    </tr>
    {% endif %}

    <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>

    <tr>
      <td>possible future topics</td>
      <td>
        metasploit<br>
        video game console hacking<br>
        intro to Ghidra<br>
        x86 assembly<br>
        arduino fun<br>
        local security bypass with firewire or USB<br>
        executable file formats<br>
        steganography for fun and profit<br>
        cracking wireless<br>
        current tech in password cracking<br>
        malware analysis
      </td>
    </tr>

    <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>

    <tr>
      <td colspan="2">past meetings:</td>
    </tr>

    {% for post in site.posts offset:1 %}
    <tr>
      <td>{{ post.date | date: "%Y-%m-%d" }}</td>
      <td>
        {% if post.presenter %}{{ post.presenter }} - {% endif %}{{ post.title }}<br><br>
        {{ post.content | markdownify }}
      </td>
    </tr>
    {% endfor %}

  </tbody>
</table>
