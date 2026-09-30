class Emp {
    
    Name : String = "Tom"
    Salary : number = 39000
    Id : number = 1
    Address : String = "Borivali"

    displayInfo():any{
        console.log(this.Name+" "+this.Salary+" "+this.Id+" "+this.Address);
        
    }
}

const E = new Emp()
E.displayInfo()
