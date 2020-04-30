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

// show my IP
const tombolNav = document.querySelector('.tombol-nav');
tombolNav.addEventListener('click', function(){
  Swal.fire({
    title: 'Submit your Github username',
    input: 'text',
    inputAttributes: {
      autocapitalize: 'off'
    },
    showCancelButton: true,
    confirmButtonText: 'Look up',
    showLoaderOnConfirm: true,
    preConfirm: (login) => {
      return fetch(`//api.github.com/users/${login}`)
        .then(response => {
          if (!response.ok) {
            throw new Error(response.statusText)
          }
          return response.json()
        })
        .catch(error => {
          Swal.showValidationMessage(
            `Request failed: ${error}`
          )
        })
    },
    allowOutsideClick: () => !Swal.isLoading()
  }).then((result) => {
    if (result.value) {
      Swal.fire({
        title: `${result.value.login}'s avatar`,
        imageUrl: result.value.avatar_url
      })
    }
  })
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