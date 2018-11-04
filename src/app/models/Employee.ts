export class Employee {
    public id: number;
    public name: string;
    public salary: number;
    public age: number;
    constructor(id: number, name: string, salary: number, age: number) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.age = age;
    }
}