import { Employee } from './employee';

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Employee("Jane", "M.", "User");

console.log(greeter(user));
