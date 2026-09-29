"use strict";
class Person {
}
class Stud extends Person {
    getDetail() {
        console.log("id:1, name:Tom");
    }
    getRole() {
        console.log("Student");
    }
}
const S = new Stud();
S.getDetail();
S.getRole();
