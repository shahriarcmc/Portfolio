// File name - script.js
// Author - Shahriar Moinuddin
// Student id - 300955901
// Date - 22/10/2021



function formValidation() {

    var fname = document.regForm.fname.value;
    var lname = document.regForm.lname.value;
    var email = document.regForm.email.value;
    var message = document.regForm.message.value;
    var phone = document.regForm.phone.value;
    
    if (fname == "") {        
        document.regForm.fname.focus();
        alert('enter the first name');        
        document.regForm.fname.style.backgroundColor="pink"
        return false;
    }
    else {
        document.regForm.fname.style.backgroundColor="white"
    }

    if (lname == "") {
        document.regForm.lname.focus();
        alert('enter the last name');
        document.regForm.lname.style.backgroundColor="pink"
        return false;
    }
    else {
        document.regForm.lname.style.backgroundColor="white"
    }

    if (message == "") {
        document.regForm.message.focus();
        alert('enter the message');
        document.regForm.message.style.backgroundColor="pink"
        return false;
    }
    else {
        document.regForm.message.style.backgroundColor="white"
    }

    if (phone == "") {
        document.regForm.phone.focus();
        alert('enter the phone');
        document.regForm.phone.style.backgroundColor="pink"
        return false;
    }
    else {
        document.regForm.phone.style.backgroundColor="white"
    }

    
    if (email == "") {
        document.regForm.email.focus();
        alert('enter the email');
        document.regForm.email.style.backgroundColor="pink"
        return false;
    }

    else if (!emailCheck.test(email)) {
        alert('Enter a valid email (must contain @ and .');
        document.regForm.email.focus();
        document.regForm.email.style.backgroundColor="pink"
        return false;

    }
    else {
        document.regForm.email.style.backgroundColor="white"
    }

    if (fname != '' && lname != '' && message != '' && phone != '' && email != '') // condition for check mandatory all fields
    {
        alert('Thanks for registering with our website, your customer record was created successfully');
    }
}
function confirmreset() {
    document.regForm.fname.style.backgroundColor="pink"
    return confirm("Are you sure you want to reset all input?");
}