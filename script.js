const form = document.querySelector('.contact-form');

if(form){
form.addEventListener('submit', function(e){

 e.preventDefault();
 alert('Thank You! Your message has been submitted.');
 form.reset();

});
}
