"use strict";
class Manager {
    static Name = "Tom";
    Id = 1;
    constructor(Id) {
        this.Id = Id;
    }
}
const M = new Manager(1);
console.log(Manager.Name);
console.log(M.Id);
