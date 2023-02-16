  
        // form selector
        document.body.style.backgroundColor="lightgreen";
        var usernameInp = document.querySelector(".username");
        var passwordInp = document.querySelector(".password");
        var formInput = document.querySelector(".form");
        var bodyedit = document.querySelector("#bodyEdit");

        

        formInput.addEventListener("submit",validateForm)

        // function textCheck(e){
        //     e.preventDefault();
        //     if(usernameInp.value  && passwordInp.value ){
        //         bodyedit.innerHTML="login success!"
        //     }
        //     else if(usernameInp.value == "" && passwordInp.value == ""){
        //         bodyedit.innerHTML="please enter data"
        //     // }
        //     // else if(usernameInp.value != "admin"){
        //     //     bodyedit.innerHTML="invalid username"
        //     // }
        //     // else if(passwordInp.value !="123"){
        //     //     bodyedit.innerHTML="invalid password"
        //     }else {
        //         bodyedit.innerHTML="You have entered  wrong username and password"
        //     }

        // }


        // ------------------------- Form Validator -----------------------


        function printError(elemId, hintMsg) {
            document.getElementById(elemId).innerHTML = hintMsg;
          }
        
        function validateForm(e) {
        var email = usernameInp.value;
        var password = passwordInp.value;

        var emailErr = true ; 
        var passwordErr = true; 
        e.preventDefault();
        // email validate
        if (email == "") {
            printError("emailErr", "Please enter your email address");
          } else {
            // Regular expression for basic email validation
            var regex = /^\S+@\S+\.\S+$/;
            if (regex.test(email) === false) {
        
        
              printError("emailErr", "Please enter a valid email address");
            } else {
              printError("emailErr", "");
              emailErr = false;
            }
          }

        //   password validate 

        if (password == "") {
            printError("passwordErr", "Please enter your password");
          } else {
            // Regular expression for basic email validation
            var re = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
            console.log(password);
            console.log(re.test(password) );
            if (re.test(password) === false) {

              printError("passwordErr", "Please enter a valid password");
            } else {
              printError("passwordErr", "");
              passwordErr = false;
            }
          }

          console.log(passwordErr);

          if (( emailErr || passwordErr) == true) {
            return false;
          } else {
            
            
            alert("login successfull");
           
          }
        
    };