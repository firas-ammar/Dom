function validation(event){
    event.preventDefault();
    var nom=document.getElementById('nom').value;
    var adress=document.getElementById('adress').value;
    var mail=document.getElementById('courriel').value;
    var password=document.getElementById('password').value;
    var comments=document.getElementById('comments').value;
    

    console.log(nom)
    if (nom === '') {
        alert('Please enter your Name');
    }

    console.log(adress)
    if (adress === '') {
        alert('Please enter your Adress');
    }
  
   console.log(mail)
   var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   if (re.test(String(mail).toLowerCase(0)) == false) {
    alert('Please verify your E-mail');
    }

  console.log(password)
 
  var letter = /[a-z]/;
   var letterUp= /[A-Z]/;
  var number = /[0-9]/;

  if(password.length < 6 || !letter.test(password) || !number.test(password) ) {
        if(password.length<6){
        alert("Please make sure password is longer than 6 characters.")
        return false;
        }
        if(!letter.test(password) || !letterUp.test(password)){
        alert("Please make sure Password Includes an UpperCase and LowerCase character")
        return false;
        }
        if(!number.test(password)){
        alert("Please make sure Password Includes a Digit")
        return false;     
    }    

  
}
document.forms['bloc'].reset();

}
