/*
  Client logo marquee, shared by every page with a "Trusted by" logo bar.
  To add, remove, or reorder a logo, edit the LOGOS list below. That's it.

  - src: path from the site root (start with "/") or a full URL
  - name: organization name, used for the image alt text
  - height (optional): display height in px, default 36. Use for logos that read small.

  Each page includes it right after its logo bar with:
    <div class="logos-track" data-logo-bar></div>
    <script src="/js/logo-bar.js"></script>
*/
(function () {
  var LOGOS = [
    { src: 'https://img1.wsimg.com/isteam/ip/ee1e83b5-a539-4603-8859-a88284673861/output-onlinepngtools-0248888.png/:/rs=h:90,cg:true,m/qt=q:95', name: 'Utah Emergency Physicians' },
    { src: 'https://www.thehouseofhearing.com/wp-content/uploads/2023/12/House-of-Hearing-Logo-150x103.png', name: 'House of Hearing' },
    { src: 'https://cdn.worldvectorlogo.com/logos/university-of-utah-health-care.svg', name: 'University of Utah Health' },
    { src: '/purepediatrics-logo.webp', name: 'Pure Pediatrics' },
    { src: '/forest-hills-logo.png', name: 'Forest Hills Pediatric Associates' },
    { src: '/pns-logo.webp', name: 'Pediatric & Neonatal Specialists', height: 48 },
    { src: '/healthfront-logo.png', name: 'HealthFront Emergency Physicians' },
    { src: 'https://images.squarespace-cdn.com/content/v1/67d07844f8351329271efc93/fd26020f-921f-46ec-b677-77df201d7cfd/cropped-My-ER-Logo.png?format=300w', name: 'My Emergency Room 24/7' }
  ];

  // The track scrolls by -50% of its width, so it holds two identical halves.
  // Each half repeats the list enough times to stay wider than the visible area.
  var COPIES_PER_HALF = 2;

  function item(logo) {
    var div = document.createElement('div');
    div.className = 'logo-item';
    var img = document.createElement('img');
    img.src = logo.src;
    img.alt = logo.name + ' logo, a Soonest client';
    if (logo.height) img.style.height = logo.height + 'px';
    div.appendChild(img);
    return div;
  }

  var tracks = document.querySelectorAll('[data-logo-bar]');
  for (var t = 0; t < tracks.length; t++) {
    var track = tracks[t];
    // Spacing as margin (not flex gap) so the two halves are exactly equal and the loop is seamless.
    var gap = parseFloat(getComputedStyle(track).columnGap) || 56;
    track.style.gap = '0';
    for (var c = 0; c < COPIES_PER_HALF * 2; c++) {
      for (var i = 0; i < LOGOS.length; i++) {
        var el = item(LOGOS[i]);
        el.style.marginRight = gap + 'px';
        if (c >= COPIES_PER_HALF) el.setAttribute('aria-hidden', 'true');
        track.appendChild(el);
      }
    }
  }
})();
