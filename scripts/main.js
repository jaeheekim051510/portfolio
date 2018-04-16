$(document).ready(function(){
    $("a").on('click', function(event) {

      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 600, function(){
          window.location.hash = hash;
        });
      }
    });
  });

var dropdownContent = document.querySelector('.dropdown-content');

var dropbtn = document.querySelector('.dropbtn');
dropbtn.addEventListener('click', function() {
    dropdownContent.classList.toggle('active');
})

// var dropdownList = document.querySelectorAll('.dropdown-content a');
// dropdownList.forEach(function(element){
//     element.addEventListener('click',function(event) {
//         dropdownContent.classList.remove('active');
// });
// })