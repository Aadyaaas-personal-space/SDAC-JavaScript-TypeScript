"use strict";
class Teacher {
    Name = "Tom";
    Id = 1;
    Salary = 39000;
    Address = "Borivali";
    constructor(Name, Id, Salary, Address) {
        this.Name = Name;
        this.Id = Id;
        this.Salary = Salary;
        this.Address = Address;
    }
}
const T = new Teacher("Tom", 1, 39000, "Borivali");
console.log(T);
