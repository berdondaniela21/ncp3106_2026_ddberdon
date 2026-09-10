document.addEventListener('DOMContentLoaded', () => {
  // Active link highlighter for Navbar
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      navLinks.forEach(nav => {
        nav.classList.remove('active', 'fw-bold', 'border-bottom', 'border-danger');
        nav.classList.add('text-white-50');
      });
      this.classList.add('active', 'fw-bold', 'border-bottom', 'border-danger');
      this.classList.remove('text-white-50');
    });
  });
});
