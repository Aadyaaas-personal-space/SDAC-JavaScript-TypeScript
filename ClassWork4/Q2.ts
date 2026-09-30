class Manager {
    static Name : String = "Tom"
    Id : number = 1
    constructor(Id:number) {
        this.Id = Id
    }
}

const M = new Manager(1)
console.log(Manager.Name);
console.log(M.Id);
