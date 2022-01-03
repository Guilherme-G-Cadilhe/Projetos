interface UserIdeInterface {
  getFullName(): String;
}

class User implements UserIdeInterface {
  protected firstName: String;
  private lastName: String;
  readonly unchangableName: String;
  static readonly maxAge = 50;

  constructor(firstName: String, lastName: String) {
    (this.firstName = firstName), (this.lastName = lastName);
    this.unchangableName = "Grr";
  }

  changeUnchangableName(): void {
    //this.unchangableName ="foo"
  }

  getFullName(): String {
    return this.firstName + " " + this.lastName;
  }
}

class Admin extends User {
  private editor: String = "Teste";

  setEditor(editor: String): void {
    this.editor = editor;
  }
  getEditor(): String {
    return this.editor;
  }
}

const user4 = new User("Bob", "nini");
console.log(user.age);
const admin = new Admin("Nome", "Sobrenome");
console.log(admin.getEditor);
