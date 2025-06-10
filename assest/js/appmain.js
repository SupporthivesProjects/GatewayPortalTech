console.log(window.location.href)
$(window).scroll(function(){
    if ($(window).scrollTop() >= 100) {
        $('.header').addClass('color-header');
    }
    else {
        $('.header').removeClass('color-header');
    }
});
// change src

let countimg = 0;
let toogleBtn = document.querySelector('.navbar-toggler');

toogleBtn.addEventListener('click',()=>{
    if(countimg == 0){
        document.querySelector('.navbar-toggler-icon-mo').src ="./assest/media/x-close.svg";
      countimg = 1;
    }
    else{
        document.querySelector('.navbar-toggler-icon-mo').src ="./assest/media/Menu-04.svg";
        countimg = 0;
    }
})




// sldier home page

const buttons = document.querySelectorAll('.btnselect');
buttons.forEach(button => {
  button.addEventListener('click', function(e) {
    e.stopPropagation(); // Prevent if card also has click
    document.querySelectorAll('.price-card').forEach(c => c.classList.remove('active')); // Optional: remove active from others
    this.closest('.price-card').classList.add('active'); // Add active to parent card
  });
});


  const modal = document.getElementById('exampleModal');
  const closeBtn = document.querySelector('.close-btn');

  closeBtn.addEventListener('click', () => {
    modal.classList.remove('show');
  });

  // Optional: close modal when clicking outside modal content
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('show');
    }
  });

