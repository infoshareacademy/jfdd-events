var phoneNumber = document.myForm.phoneNumber;
var firstName = document.myForm.firstName;
var Email = document.myForm.Email;
var checkbox = document.myForm;


function validateForm() {
    if(firstName.value == "" || !isNaN(firstName.value) ) {
        document.getElementById("validateName").innerHTML = "Uzupełnij swoje imię!";
        firstName.focus();
        return false;
    } else {
            document.getElementById("validateName").innerHTML = "";
    }

    if(phoneNumber.value.length < 9  ||  phoneNumber.value.length >= 14  || isNaN(phoneNumber.value)) {
        document.getElementById("validateNumber").innerHTML = "Podaj poprawny numer telefonu!";
        phoneNumber.focus();
        return false;
    } else {
        document.getElementById("validateNumber").innerHTML = "";
    }

    if(Email.value.indexOf("@") < 0 || document.myForm.Email.value.indexOf(".") < 0  || document.myForm.Email.value.length < 6) {
        document.getElementById("validateEmail").innerHTML = "Podaj poprawny adres e-mail!";
        Email.focus();
        return false;
    } else {
        document.getElementById("validateEmail").innerHTML = "";
    }

    if(checkbox.formCheckbox.checked  == false) {
        document.getElementById("validateCheckbox").innerHTML = "Zaakceptuj regulamin serwisu!";
        return false;
    } else {
        document.getElementById("validateCheckbox").innerHTML = "";
    }
}