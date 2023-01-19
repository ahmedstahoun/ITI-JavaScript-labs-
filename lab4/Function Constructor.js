//OOP using constuctor Function 

function Person(fullName, money, sleepMood, healthRate){
        this.fullName=fullName;
        this.money=money;
        this.sleepMood=sleepMood;
        this.healthRate=healthRate;

}
Person.prototype.Sleep = function(hours){
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

Person.prototype.Eat = function(meals){

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

Person.prototype.Buy= function(items){

    this.money = this.money-(items*10);
    console.log(`money =  ${this.money}`);


}


let person1 = new Person("ahmed",50,"tired",30)
person1.Sleep(8)
person1.Sleep(7);
person1.Sleep(8);
person1.Sleep(4);

person1.Eat(3);
person1.Eat(2);
person1.Eat(1);

person1.Buy(1);
