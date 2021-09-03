function formValidationlogin()
{
    var uemail= document.login.email;
    var pwd = document.login.password;

    if(ValidateEmaillogin(uemail))
    {
        if(pwd_validationlogin(pwd))
        {

                 var xmlhttp = new XMLHttpRequest();               // using ajax for sending request to search APi and taking respose.

                 xmlhttp.onreadystatechange = function()
                              {
                                if (this.readyState == 4 && this.status == 200)
                                        {
                                            var responseText= this.responseText;                // books get respose.

                                             if(responseText=="ok")
                                                   {   alert("in response");
                                                        window.location.replace("http://localhost/WTAssignment-main/WTAssignment/home.php");


                                                   }

                                                      else {
                                                            alert("wrong username and password");
                                                            document.login.name.value="";
                                                            document.login.password.value="";
                                                            return;
                                                          }
                                        }
                               };

                 xmlhttp.open("post", "backend/login.php?email="+uemail.value+"&password="+pwd.value,true); // calling search api.
                 xmlhttp.send();






















        }
    }
    return false;

}

function ValidateEmaillogin(uemail)
{
    var mailformat= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(uemail.value.match(mailformat))
    {
        return true;
    }
    else{
        alert("You have entered an invalid email address");
        uemail.focus();
        return false;
    }
}

function pwd_validationlogin(pwd)
{
    var pwd_length=pwd.value.length;

    if(pwd_length == 0)
    {
        alert("Password field cannot be empty");
        pwd.focus();
        return false;
    }
    else{
        return true;
    }
}
