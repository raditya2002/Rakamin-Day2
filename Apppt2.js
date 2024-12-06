// Basic Class Definition
class Student {
  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }
  // class method
  study() {
    return `${this.name} is studying`;
  }
  //   Getter Method
  get studentInfo() {
    return `name ${this.name}, age ${this.age}, grade ${this.grade}`;
  }
  //   Setter method
  set studenGrade(newGrade) {
    if (newGrade >= 0 && newGrade <= 100) {
      this.grade = newGrade;
    } else {
      console.log("invalid grade");
    }
  }
}
const studentTyo = new Student("Tyo", 22, "A");
// student.studenGrade = 80;
console.log(studentTyo.studentInfo);
// Inheritance
// Teacher bisa melakukan apapun dari Person karena Teacher merupakan anak dari Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  introduce() {
    return `Hi Im ${this.name}`;
  }
}
class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }
  teach() {
    return `${this.name} is teaching ${this.subject}`;
  }
}
const teacher1 = new Teacher("Tyo", 22, "JS");
console.log(teacher1.introduce());
console.log(teacher1.teach());

// Encapsulation
class BankAccount {
  #balance = 0;

  constructor(accountHolder) {
    this.accountHolder = accountHolder;
  }
  deposit(amount) {
    if (acmount > 0) {
      this.#balance += amount;
      return `Deposited ${amount}. New balance: ${this.#balance}`;
    }
    return "Invalid amount";
  }
  getBalance() {
    return this.#balance;
  }
}
const account1 = new BankAccount("Tyo");
console.log(account1.deposit(100));
console.log(account1.getBalance());
// try{
// console.log(account1.#balance);
// } catch (error){
//     console.log("akses #balance error", error message)
// }
