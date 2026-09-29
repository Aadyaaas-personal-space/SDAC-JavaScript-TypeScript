class Students {
    id : number = 1
    Name : String = "Tom"

    constructor(id:number, Name:String){
        this.id = id
        this.Name = Name
    }
}

class School{
    static totalStudent : number = 0
    studentList : Students[]=[]

    addStudent (s:Students):void {
        this.studentList.push(s)
        School.totalStudent++
        console.log("Added Successfully...");
        console.log("totalStudent: "+School.totalStudent);
                
    }
}

const s = new Students(1, "Ton")
const school = new School()
school.addStudent(s)