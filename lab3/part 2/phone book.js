
var contacts = [
    {
        name:"ahmed",
        phone:"123"
    }
];




function searchForContact(){
    var searchKeyword = prompt("enter name or phone")
    for(var i =0;i<contacts.length;i++){
        var currentContact = contacts[i];
        if(searchKeyword == currentContact.name || searchKeyword == currentContact.phone){
            alert("name = "+currentContact.name + " phone = "+currentContact.phone);
            break;
        }
    }
}

function phoneBook (){
                var flag= false 
                
                do{
                    var operation = prompt("do you want to \"add\" or \"search\" or \"exit\" ");
                switch(operation)
                {
                            case "add":
                            var contactName= prompt("please enter name");
                            var phoneNumber = prompt("enter the phone number");

                            var contactObj = {
                                name : contactName,
                                phone : phoneNumber 
                            };
                            contacts.push(contactObj);
                            break;

                            case "search":
                                searchForContact()
                            break;

                            case "exit":
                            flag=true;
                            break;
                             }
                        }while(!flag)
                        

}

phoneBook();