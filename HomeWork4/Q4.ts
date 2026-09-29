abstract class Person{

    abstract getDetail():void
    abstract getRole():void
}

class Stud extends Person{
    getDetail(): void {
        console.log("id:1, name:Tom");
        
    }

    getRole(): void {
        console.log("Student");
        
    }
}

const S = new Stud()
S.getDetail()
S.getRole()