// OOP - FUNCTION CONSTRUCTOR

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    /*this.calculateAge = function() {
        console.log(2020-this.yearOfBirth);
    }*/
}


// prototype property of the function constructor - how to add methods
Person.prototype.calculateAge = function() {
    console.log(2020-this.yearOfBirth);
};

let john = new Person("John", 1990, "teacher");
let jane = new Person("Jane", 1987, "designer")

john.calculateAge();
jane.calculateAge();