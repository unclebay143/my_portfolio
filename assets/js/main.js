function hidelinks(){
  if (document.getElementById("links").style.display == "block")
  {
    document.getElementById("links").style.display = "none";
  }
  else
  {
    document.getElementById("links").style.display = "block"
  }
}

function classToggle() {
  const navs = document.querySelectorAll('.top-link')
  
  navs.forEach(nav => nav.classList.toggle('Show'));
}
document.querySelector('.link-toggle').addEventListener('click', classToggle);


function success(){
  var visitor = document.querySelector('#name').value
  alert('Hey ' + visitor + ', Your Message Has Been Sent THANKS!!!')
  visitor.value = ''
}
  
function about(){
  document.getElementById('Logo').style.color='#';
  document.getElementById('link1').style.color="dodgerblue";
  document.getElementById('link2').style.color='dodgerblue';
  document.getElementById('link3').style.color='dodgerblue';
  document.getElementById('link4').style.color='dodgerblue';
}

function contactMe(){
  // document.getElementById('Logo').style.color='#fff';
  // document.getElementById('link1').style.color="pink";
  // document.getElementById('link2').style.color='white';
  // document.getElementById('link3').style.color='brown';
  // document.getElementById('link4').style.color='green';
}
  
// TOP BUTTON FUNCTION

//Get the button
var goTopBtn = document.getElementById("topBtn");

// When the user scrolls down 20px from the top of the document, show the button
// 620 for previous menu
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    goTopBtn.style.display = "block";
    document.getElementById('Logo').style.color='white';
    document.getElementById('link1').style.color="white";
    document.getElementById('link2').style.color='white';
    document.getElementById('link3').style.color='pink';
    document.getElementById('link4').style.color='white';
    document.getElementById('link5').style.color='white';
    document.getElementById('high').style.backgroundColor='#15598f';
    this.style.color = "white";
    this.style.borderRadius = "23px";
    this.style.border = 'none';

  } else  {
    goTopBtn.style.display = "none";
    document.getElementById('Logo').style.color='white';
    document.getElementById('link1').style.color="white";
    document.getElementById('link2').style.color='white';
    document.getElementById('link3').style.color='white';
    document.getElementById('link4').style.color='white';
    document.getElementById('link5').style.color='white';
    document.getElementById('high').style.backgroundColor='#15866';
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



// trying to work on individual link on hover -- 

// document.getElementById("link1").onmouseover = function()
// {
//     this.style.backgroundColor = "blue";
//     this.style.color = "white";
//     this.style.borderRadius = "23px";
//     this.style.border = 'none';
// }
// document.getElementById("link2").onmouseover = function()
// {
//     this.style.backgroundColor = "blue";
//     this.style.color = "white";
//     this.style.borderRadius = "23px";
//     this.style.border = 'none';
// }
// document.getElementById("link3").onmouseover = function()
// {
//     this.style.backgroundColor = "blue";
//     this.style.color = "white";
//     this.style.borderRadius = "23px";
//     this.style.border = 'none';
// }