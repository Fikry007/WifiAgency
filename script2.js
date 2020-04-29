// tombol-join-forms

const join = document.querySelector('.tombol-join-forms');
join.addEventListener('click', function(){
    Swal.fire(
        'Thankyou! :)',
        'We will process your registration ASAP!',
        'success'
      )
})

// submit
const submit = document.querySelector('.submit');
submit.addEventListener('click', function(){
    Swal.fire(
        'Submitted!',
        'Your feedback are very worth to us!',
        'success'
      )
})

// SCROLL TO TOP
//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }

// Versi Vanilla JS
mybutton.addEventListener('click', function(){
    window.scrollTo({top: 0, behavior: 'smooth'});
})