class Teacher {
    Name : String ="Tom"
    Id : number = 1
    Salary : number = 39000
    Address : String = "Borivali"

    constructor(Name: String, Id : number , Salary: number, Address: String) {
        this.Name = Name
        this.Id = Id
        this.Salary = Salary
        this.Address = Address
    }
}

const T = new Teacher("Tom", 1, 39000, "Borivali")
console.log(T);

