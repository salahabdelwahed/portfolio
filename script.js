//pageload
var loader=document.getElementById('preloader');

window.addEventListener("load",function(){
    setTimeout(function(){loader.style.display="none";}, 500)
})

//number in services
var valeurElement = document.getElementById('valeur');
var Element1 = document.getElementById('valeur1');
var Element2 = document.getElementById('valeur2');
var Element3 = document.getElementById('valeur3');
var Element4 = document.getElementById('valeur4');
var valeurCible = 350;
var vc1 = 300;
var vc2 = 250;
var vc3 = 200;
var vc5 = 700;
var delai = 7;
var intervalID;
var interval
function incrementer() {
  if (parseInt(valeurElement.innerHTML) < valeurCible) {
    valeurElement.innerHTML = parseInt(valeurElement.innerHTML) + 1;
  } else {
    clearInterval(intervalID);
  }
}
intervalID = setInterval(incrementer, delai);


function inc() {
    if (parseInt(Element1.innerHTML) < vc1) {
      Element1.innerHTML = parseInt(Element1.innerHTML) + 1;
    } else {
      clearInterval(intervalID);
    }
  }
  intervalID = setInterval(inc, delai);


  function incre() {
    if (parseInt(Element2.innerHTML) < vc2) {
      Element2.innerHTML = parseInt(Element2.innerHTML) + 1;
    } else {
      clearInterval(intervalID);
    }
  }
  intervalID = setInterval(incre, delai);


  function increment() {
    if (parseInt(Element3.innerHTML) < vc3) {
      Element3.innerHTML = parseInt(Element3.innerHTML) + 1;
    } else {
      clearInterval(intervalID);
    }
  }
  intervalID = setInterval(increment, delai);


  function incrementerr() {
    if (parseInt(Element4.innerHTML) < vc5) {
      Element4.innerHTML = parseInt(Element4.innerHTML) + 1;
    } else {
      clearInterval(intervalID);
    }
  }
  interval = setInterval(incrementerr, delai);


//validation formulaire
var nameError=document.getElementById('name-error');
var phoneError=document.getElementById('phone-error');
var emailError=document.getElementById('email-error');
var subjectError=document.getElementById('subject-error');
var messageError=document.getElementById('message-error');
var submitError=document.getElementById('submit-error');


function validateName(){
    var name=document.getElementById('contact-name').value;
    if (name.length==0){
        nameError.innerHTML='Name is required'
        return false;
    } 
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML='Write Full Name'
        return false;
    }
    nameError.innerHTML='<i class="fa-solid fa-circle-check"></i>'
    return true;
} 


function validatePhone(){
    var phone=document.getElementById('contact-phone').value;
    if (phone.length == 0){
        phoneError.innerHTML='Phone is no required';
        return false;
    } 
    if (phone.length !==8){
        phoneError.innerHTML='Phone no should be 8 digits';
        return false;
    } 
    if (!phone.match(/^[0-9]{8}$/)){
        phoneError.innerHTML='only digits please';
        return false;
    }
    phoneError.innerHTML='<i class="fa-solid fa-circle-check"></i>'
    return true;
}


function validateEmail() {
    var email=document.getElementById('contact-email').value;
    
    if (email.length==0){
        emailError.innerHTML='Email is required'
        return false;
    } 
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML='Email Invalid'
        return false;
    }
    emailError.innerHTML='<i class="fa-solid fa-circle-check"></i>'
    return true;
    }


    function validateSuject(){
        var subject=document.getElementById('contact-subject').value;
        if (subject.length == 0){
            subjectError.innerHTML='subject is required';
            return false;
        } 
        subjectError.innerHTML='<i class="fa-solid fa-circle-check"></i>'
        return true;
    }


    function validateMessage(){
        var message=document.getElementById('contact-message').value;
        var required = 30;
        var left = required - message.length;
        if (left > 0){
            messageError.innerHTML=left + 'more charactere required'
            return false;
        }
        messageError.innerHTML='<i class="fa-solid fa-circle-check"></i>'
        return true;
    }
    
    
    function validateForm(){
        if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage() ||!validateSubject()){
            submitError.style.display='block'
            submitError.innerHTML='please fix error'
            
            setTimeout(function(){submitError.style.display='none';}, 3000)
            return false;
        } 
    }
    