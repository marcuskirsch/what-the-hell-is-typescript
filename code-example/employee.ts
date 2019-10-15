export class Employee {
  fullName: string;

  constructor(
    public firstName: string,
    public middleInitial: string,
    public lastName: string
  ) {
      this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}
