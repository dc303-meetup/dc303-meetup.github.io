/*
 * BBS-style single-key navigation. Pure progressive enhancement: every menu entry is a
 * real <a href> in the markup, so with this file blocked the only thing lost is the
 * shortcuts themselves.
 */
(function () {
  'use strict';

  var panel = document.getElementById('shortcuts');

  // The help panel ships hidden; without JS there are no shortcuts to document.
  if (panel) { panel.hidden = false; }

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  function scrollBy(amount) {
    window.scrollBy({ top: amount, behavior: reduced.matches ? 'auto' : 'smooth' });
  }

  document.addEventListener('keydown', function (event) {
    if (event.altKey || event.ctrlKey || event.metaKey || event.repeat) return;
    // '?' needs shift on most layouts; nothing else may carry a modifier.
    if (event.shiftKey && event.key !== '?') return;

    var el = event.target;
    if (el && (el.isContentEditable ||
        /^(input|textarea|select|button)$/i.test(el.tagName || ''))) return;

    var page = window.innerHeight * 0.9;
    var key = (event.key || '').toLowerCase();

    switch (key) {
      case 'j': scrollBy(120); break;
      case 'k': scrollBy(-120); break;
      case 'd': scrollBy(page); break;
      case 'u': scrollBy(-page); break;
      case '?':
        if (!panel) return;
        // Toggle: a second '?' closes the panel it opened.
        panel.open = !panel.open;
        if (panel.open) {
          panel.scrollIntoView({ behavior: reduced.matches ? 'auto' : 'smooth' });
          panel.querySelector('summary').focus();
        }
        break;
      default:
        if (!/^[a-z]$/.test(key)) return;
        var link = document.querySelector('a[data-key="' + key + '"]');
        if (!link) return;
        window.location.href = link.href;
    }
    event.preventDefault();
  });
}());
