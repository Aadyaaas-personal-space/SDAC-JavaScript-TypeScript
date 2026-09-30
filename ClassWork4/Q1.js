"use strict";
class Emp {
    Name = "Tom";
    Salary = 39000;
    Id = 1;
    Address = "Borivali";
    displayInfo() {
        console.log(this.Name + " " + this.Salary + " " + this.Id + " " + this.Address);
    }
}
const E = new Emp();
E.displayInfo();
