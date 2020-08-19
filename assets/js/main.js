function classToggle() {
  const navs = document.querySelectorAll('.top-link')
  
  navs.forEach(nav => nav.classList.toggle('Show'));
}

document.querySelector('.link-toggle')
  .addEventListener('click', classToggle);