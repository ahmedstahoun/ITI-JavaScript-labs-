//  OOP usiing Classes
class Person {
    #healthRate; 
    
    constructor(fullName, money, sleepMood, healthRate){
        this.fullName=fullName;
        this.money=money;
        this.sleepMood=sleepMood;
        this.#healthRate=healthRate;
          
            }
            get healthRate(){
                return this.#healthRate;
            }
           
            set healthRate(healthRate){
                this.#healthRate=healthRate;
                if(this.#healthRate<0){
                    this.#healthRate=0;
                }
                else if(this.#healthRate>100){
                    this.#healthRate=100;}
                }  
            
                
            Sleep(hours){
                if(hours==7)
                {this.sleepMood="happy";
                    console.log(`iam  ${this.sleepMood}`);
                } else if (hours<7){
                    this.sleepMood="tired";
                    console.log(`iam  ${this.sleepMood}`);
                }else if(hours>7){
                    this.sleepMood="lazy";
                    console.log(`iam  ${this.sleepMood}`);
                }
            
            }
            
            Eat(meals){
            
                switch(meals){
                    case 1:
                        this.healthRate=100;
                        console.log(`health rate =  ${this.healthRate}`);
                        break;
                    case 2:
                        this.healthRate=75;
                        console.log(`health rate =  ${this.healthRate}`);
                        break;
                    case 3:
                        this.healthRate=100;
                        console.log(`health rate =  ${this.healthRate}`);
                        break;
                }
            }
            
            Buy(items){
            
                this.money = this.money-(items*10);
                console.log(`money =  ${this.money}`);
            
            
            }
    }



class Employee extends Person {
//   the private attributes : 
    #salary = 1000;
    #id 
    #email
    #isManager
    // the constructor of Employees
    constructor(fullName, money, sleepMood, healthRate,id, email, workMood, salary, isManager){
        super(fullName,money,sleepMood,healthRate);
        this.id=id ;
        this.email=email;
        this.workMood=workMood;
    
        if(salary<1000){
            this.salary=1000;
        }else {this.#salary=salary}
        this.#email=email;
        this.#id=id;
        this.#isManager=isManager

    }
// setters and getters for private attributes
        set salary(salary){
            this.#salary=salary;
            if(salary<1000){
                this.#salary=1000;
            }
        }
        get salary(){
            return this.#salary;
        }
        set id(id){
            this.#id=id;
        }
        get id(){
            return this.#id;
        }
        set email(email){
            this.#email=email;
        }
        get email(){
            return this.#email;
        }
        set isManager(isManager){
            if(isManager==true || isManager==false){
            this.#isManager=isManager;
        }else {console.log("enter true or false");}
        }
        get isManager(){
            return this.#isManager;

        }


// class employee methods
        work(hours){
            if(hour==8){
                console.log("happy");
            }else if(hours<8){
                console.log("lazy");
            }else if(hours > 8){
                console.log("Tired");
            }
            

        }
}
 
//  const emp1 = new Employee("AHmed SAid",500,"good",60,1,"ahmed@gmail.com","good",1500,true)



 

class Office{
    // private attributes 
    #name
    #employees = []
    
    // office constructor
    constructor(name){
        this.#name=name;
    }
    // setters and getters

    set name(name){
        this.#name=name;
    }
    get name(){
        return this.#name;
    }
   
   

    // class office methods
    getAllEmployees(){
        return this.#employees;
    }
    getEmployee(empId){
        for (let i = 0; i < this.#employees.length; i++) {
            if (this.#employees[i].id === empId) {
              return this.#employees[i];
            }
          }
          alert(`Employee with ID ${empId} Not Found `)
    
    }
    hire(emp){
        this.#employees.push(emp);

    }
    fire(empId){
        this.#employees.splice(this.#employees.indexOf(empId),1);

    }


}

var officeObj = new Office("AST")

do{
var menu = Number(prompt("please choose one of the follwing options by number : \n 1-add \n 2-remove \n 3-getall \n 4-getemp \n 5-quit "))
var flag=true;
switch(menu){
//    add option
    case 1:
                var employee1 = new Employee();
                let empType = prompt("enter mngr or nrml")
                empType == "mngr" ? employee1.isManager=true : employee1.isManager=false ;
                
                let entName = prompt("enter name");
                employee1.fullName=entName;
                
                let entId = parseInt(prompt("Enter ID"))
                employee1.id=entId;

                let entEmail = prompt("Enter email")
                employee1.email=entEmail;

                let entMoney = prompt("enter money ");
                employee1.money = entMoney;

                let entSleepMode = prompt("enter sleep mode")
                employee1.sleepMood=entSleepMode;

                let entWorkMood = prompt("please enter work mode")
                employee1.workMood = entWorkMood
                
                do{
                    var entHealthRate = prompt("enter the health rate")
                    employee1.healthRate = entHealthRate
                }while(employee1.healthRate < 0 || employee1.healthRate > 100)
                
                do{
                var entSalary = prompt("enter salary greater than 1000");
                employee1.salary=entSalary;
                }while(entSalary<1000)
                
                officeObj.hire(employee1);

    break;
// remove option
    case 2:
                var searchId = parseInt(prompt("Enter the id of employee you want to remove"))
                var tempEmp = officeObj.getEmployee(searchId);
                    if(!tempEmp)break;
                alert(`The ID= ${tempEmp.id} and Name: ${tempEmp.fullName} is Fired `)
         break;
//  get all employees option 
    case 3:
       var empReturned = officeObj.getAllEmployees();
        if (empReturned.length > 0) {
          let outText = "";
          empReturned.forEach((employee1) => {
            outText += `ID: ${employee1.id} and Name: ${employee1.fullName} \n`;
          });
          alert(outText);
        } else {
          alert("This Office Has no employees");
        }
        break;
//    get employee by ID
        case 4:
           var typeId = parseInt(prompt("Please Enter Employee ID"));
            tempEmp = officeObj.getEmployee(typeId);
    
            if (!tempEmp) break;
    
            if (tempEmp && tempEmp.isManager) {
              alert(`Full Name: ${tempEmp.fullName}
              ID: ${tempEmp.id}
              Email: ${tempEmp.email}
             Money: ${tempEmp.money}
            Sleep Mood: ${tempEmp.sleepMood}
            Health Rate: ${tempEmp.healthRate}
            Work Mood: ${tempEmp.workMood}
            
            `);
            } else {
              alert(`Full Name: ${tempEmp.fullName}
              ID: ${tempEmp.id}
              Email: ${tempEmp.email}
              Money: ${tempEmp.money}
            Sleep Mood: ${tempEmp.sleepMood}
            Health Rate: ${tempEmp.healthRate}
            Work Mood: ${tempEmp.workMood}
            Salary: ${tempEmp.salary}
            `);
            }
        break;
// Exit option 
    case 5:
        flag=false;
        break;


}

}while(flag)