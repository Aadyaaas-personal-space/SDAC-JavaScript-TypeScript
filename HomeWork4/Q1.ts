class Student {
    StudentId : number = 1
    Name : String = "Tome"
    Grade : String = "A+"
    Address : String = "Borivali"

    displayInfo():any{
        console.log(this.StudentId+" "+this.Name+" "+this.Grade+" "+this.Address);
    
    }
}

const Stu = new Student()

Stu.displayInfo()