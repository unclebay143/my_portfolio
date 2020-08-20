function classToggle() {
  const navs = document.querySelectorAll('.top-link')
  
  navs.forEach(nav => nav.classList.toggle('Show'));
}

document.querySelector('.link-toggle')
  .addEventListener('click', classToggle);


function success(){
  var visitor = document.querySelector('#name').value
  alert('Hey ' + visitor + ', Your Message Has Been Sent THANKS!!!')
  visitor.value = ''
}
  
  

