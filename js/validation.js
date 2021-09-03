function formValidationRegister()
{
    var uname= document.registration.name;
    var uemail=document.registration.email;
    var pwd=document.registration.password;
    var cpwd=document.registration.confirm;
        if(allLetter(uname))
        {
            if(ValidateEmailRegister(uemail))
            {
                if(pwd_validationRegister(pwd, cpwd, 7, 12))
                {

                  var xmlhttp = new XMLHttpRequest();               // using ajax for sending request to search APi and taking respose.

                            xmlhttp.onreadystatechange = function()
                                         {
                                           if (this.readyState == 4 && this.status == 200)
                                                   {
                                                       var responseText= this.responseText;                // books get respose.

                                                        if(responseText=="ok")
                                                              {
                                                             alert("you are Registered Successfully. Please Login");
                                                               document.registration.name.value="" ;
                                                               document.registration.email.value="";
                                                               document.registration.password.value="";
                                                               document.registration.confirm.value="";

                                                                return;
                                                              }

                                                                 else {
                                                                       alert(responseText);
                                                                       document.registration.name.value="" ;
                                                                       document.registration.email.value="";
                                                                       document.registration.password.value="";
                                                                       document.registration.confirm.value="";

                                                                       return;
                                                                     }
                                                   }
                                          };

                            xmlhttp.open("Post", "backend/register.php?name="+uname.value+"&email="+uemail.value+"&password="+pwd.value);// calling search api.
                            xmlhttp.send();






                }
            }
        }

    return false;
}


function allLetter(uname)
{
    var letters= /^[A-Za-z]+$/;
    if(uname.value.match(letters))
    {
        return true;
    }
    else
    {
        alert("Name must have alphabet characters only");
        uname.focus();
        return false;
    }
}

function ValidateEmailRegister(uemail)
{
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(uemail.value.match(mailformat))
    {
        return true;
    }
    else
    {
        alert("You have entered an invalid email address");
        uemail.focus();
        return false;
    }
}

function pwd_validationRegister(pwd, cpwd, mx, my)
{
    var pwd_length=pwd.value.length;
    var cpwd_length=cpwd.value.length;

    if(pwd_length == 0 || cpwd == 0)
    {
        alert("Password fields cannot be empty");
        pwd.focus();
        return false;
    }
    else if(pwd_length >= my || pwd_length < mx)
    {
        alert("The password length should be between"+mx+" and"+ my);
        pwd.focus();
        return false;
    }
    else if(cpwd_length != pwd_length)
    {
        alert("Confirm password should be of the same length as password");
        cpwd.focus();
        return false;
    }

    else if(cpwd.value.match(pwd))
    {
        alert("The passwords are not same");
        cpwd.focus();
        return false;
    }
    else
    {
        return true;
    }
}
