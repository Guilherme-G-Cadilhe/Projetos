"use strict";
class User {
    constructor(firstName, lastName) {
        (this.firstName = firstName), (this.lastName = lastName);
        this.unchangableName = "Grr";
    }
    changeUnchangableName() {
        //this.unchangableName ="foo"
    }
    getFullName() {
        return this.firstName + " " + this.lastName;
    }
}
User.maxAge = 50;
class Admin extends User {
    constructor() {
        super(...arguments);
        this.editor = "Teste";
    }
    setEditor(editor) {
        this.editor = editor;
    }
    getEditor() {
        return this.editor;
    }
}
const user4 = new User("Bob", "nini");
console.log(user.age);
const admin = new Admin("Nome", "Sobrenome");
console.log(admin.getEditor);
