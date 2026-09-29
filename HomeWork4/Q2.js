"use strict";
class Students {
    id = 1;
    Name = "Tom";
    constructor(id, Name) {
        this.id = id;
        this.Name = Name;
    }
}
class School {
    static totalStudent = 0;
    studentList = [];
    addStudent(s) {
        this.studentList.push(s);
        console.log("Added Successfully...");
    }
}
const s = new Students(1, "Ton");
const school = new School();
school.addStudent(s);
