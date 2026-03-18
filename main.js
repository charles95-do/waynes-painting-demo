// Hamburger menu toggle
document.addEventListener('DOMContentLoaded', function () {
  var btn = document.querySelector('.hamburger');
  var nav = document.querySelector('.nav-list');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      btn.classList.toggle('open');
      nav.classList.toggle('open');
    });
    // Close menu on link click (mobile)
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        btn.classList.remove('open');
        nav.classList.remove('open');
      });
    });
  }

  // Set active nav link
  var path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-list a').forEach(function (a) {
    var href = a.getAttribute('href');
    if (href === path) a.classList.add('active');
  });

  // Simple form submission handler (demo)
  var form = document.getElementById('estimate-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = form.querySelector('button[type="submit"]');
      btn.textContent = 'Message Sent!';
      btn.disabled = true;
      btn.style.opacity = '.6';
      setTimeout(function () {
        btn.textContent = 'Request Free Estimate';
        btn.disabled = false;
        btn.style.opacity = '1';
        form.reset();
      }, 3000);
    });
  }
});
