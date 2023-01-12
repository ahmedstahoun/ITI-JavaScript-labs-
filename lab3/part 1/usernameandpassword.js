var userName = prompt("Enter username");
var password = prompt("Enter password");

 var checkUser=userName.indexOf("admin");
 var checkPassword = password.indexOf("421$$");

if(userName=="admin" && password=="421$$")
{alert("welcome login success");}
if(checkUser==-1 && checkPassword==-1 )
{alert("Wrong Username and Password");}
else if(checkUser==-1)
{alert("wrong username");}
else if(checkPassword==-1)
{alert("wrong password");}
 