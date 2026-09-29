"use strict";
class Student {
    StudentId = 1;
    Name = "Tome";
    Grade = "A+";
    Address = "Borivali";
    displayInfo() {
        console.log(this.StudentId + " " + this.Name + " " + this.Grade + " " + this.Address);
    }
}
const Stu = new Student();
Stu.displayInfo;
