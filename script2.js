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