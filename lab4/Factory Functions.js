//OOP using Facotry Functions

function Person(fullName, money, sleepMood, healthRate){
    return{
        fullName,money,sleepMood,healthRate,
        Sleep(hours) {
            if (hours == 7) {
                this.sleepMood = "happy";
                console.log(`iam  ${this.sleepMood}`);
            } else if (hours < 7) {
                this.sleepMood = "tired";
                console.log(`iam  ${this.sleepMood}`);
            } else if (hours > 7) {
                this.sleepMood = "lazy";
                console.log(`iam  ${this.sleepMood}`);
            }

        },
        
        Eat(meals) {

            switch (meals) {
                case 1:
                    this.healthRate = 100;
                    console.log(`health rate =  ${this.healthRate}`);
                    break;
                case 2:
                    this.healthRate = 75;
                    console.log(`health rate =  ${this.healthRate}`);
                    break;
                case 3:
                    this.healthRate = 100;
                    console.log(`health rate =  ${this.healthRate}`);
                    break;
            }
        },
        
        Buy(items) {

            this.money = this.money - (items * 10);
            console.log(`money =  ${this.money}`);


        }


    }
}

const person1 = Person ('Ahmed Tahoun',100,"happy",75);

// console.log(person1);

person1.Sleep(7);
person1.Sleep(8);
person1.Sleep(4);

person1.Eat(3);
person1.Eat(2);
person1.Eat(1);

person1.Buy(5);