/*
  Soonest Google Ads conversion tracking (secondary + calculator events)
  Account: AW-18425608403
  Load on EVERY page, after the existing Google tag, with:
    <script src="/js/soonest-conversions.js" defer></script>
  Note: "Demo Booked" is NOT in this file. It stays in demo.html as it is today.
*/
(function () {
  if (typeof window.gtag !== 'function') return;

  var AW = 'AW-18425608403/';
  var LABELS = {
    demoPageVisit:    'qfheCI6iz5QdENPxgdJE', // Demo Page Visit (secondary)
    productPageVisit: '3w0ECJGiz5QdENPxgdJE', // Product Page Visit (secondary)
    getDemoClick:     'vlGICJSiz5QdENPxgdJE', // Get a Demo Click (secondary)
    engagedVisit:     'P2QyCJeiz5QdENPxgdJE', // Engaged Visit (secondary)
    calculatorRequest:'HWo6CIuiz5QdENPxgdJE'  // Impact Calculator Request (primary)
  };

  function fire(key) {
    window.gtag('event', 'conversion', { send_to: AW + LABELS[key] });
  }

  function getS(k) { try { return sessionStorage.getItem(k); } catch (e) { return null; } }
  function setS(k, v) { try { sessionStorage.setItem(k, v); } catch (e) {} }

  var path = location.pathname.replace(/\.html$/, '').replace(/\/+$/, '') || '/';

  // 1. Demo Page Visit
  if (path === '/demo') fire('demoPageVisit');

  // 2. Product Page Visit
  var productPages = ['/scheduling', '/pulse-ai', '/coaching'];
  if (productPages.indexOf(path) !== -1 || path.indexOf('/departments/') === 0) {
    fire('productPageVisit');
  }

  // 3. Engaged Visit: 2+ pages in a session, or 60 seconds on a page (once per session)
  function engaged() {
    if (getS('sn_engaged')) return;
    setS('sn_engaged', '1');
    fire('engagedVisit');
  }
  var pages = parseInt(getS('sn_pages') || '0', 10) + 1;
  setS('sn_pages', String(pages));
  if (pages >= 2) engaged();
  setTimeout(engaged, 60000);

  // 4. Get a Demo Click: any link to /demo, or a button labeled Get/Request/Book a Demo
  document.addEventListener('click', function (e) {
    var el = e.target.closest ? e.target.closest('a, button') : null;
    if (!el) return;
    var href = el.getAttribute('href') || '';
    var text = (el.textContent || '').trim().toLowerCase();
    var isDemoLink = /\/demo(\.html)?(\/|\?|#|$)/.test(href);
    var isDemoButton = /^(get|request|book) a demo$/.test(text);
    if (isDemoLink || isDemoButton) fire('getDemoClick');
  }, true);

  // 5. Impact Calculator Request: the "Request my session" form on /impact-calculator
  var gate = document.getElementById('gateForm');
  if (gate) {
    gate.addEventListener('submit', function () { fire('calculatorRequest'); });
  }
})();
