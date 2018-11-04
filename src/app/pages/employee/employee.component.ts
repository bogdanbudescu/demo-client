import { Component, OnInit, SimpleChanges, OnChanges, AfterViewInit, OnDestroy } from '@angular/core';
import { HttpService } from 'src/app/services/http/http.service';
import { Employee } from 'src/app/models/Employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  public tableHead = [
    { name: "Id", colspan: 1 },
    { name: "Name", colspan: 1 },
    { name: "Salary", colspan: 1 },
    { name: "Age", colspan: 1 },
    { name: "Actions", colspan: 2 }
  ];
  public employees: Employee[] = [];
  public showCreateEmployeeForm: boolean = false;
  public createUserModel: Employee = new Employee(0, "", 1000, 18);
  public updateUserModel: Employee = new Employee(0, "", 1000, 18);

  public buttonMessage_1: string = "Show Create Employee Form";
  constructor(private httpService: HttpService) {

    this.getEmployees();
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.

  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.

  }

  public getEmployees() {

    this.httpService.getEmployees().subscribe((result: Employee[]) => {
      this.employees = result;
    });
  }

  public deleteEmployee(id: number) {

    this.httpService.deleteEmployee(id).subscribe((result) => {
      this.getEmployees();
    }, (err) => {
      console.log(err)
    })
  }

  public showCreateEmployee() {

    if (this.showCreateEmployeeForm) {
      this.buttonMessage_1 = "Show Create Employee Form";
      this.showCreateEmployeeForm = false;
    } else {
      this.buttonMessage_1 = "Hide Create Employee Form";
      this.showCreateEmployeeForm = true;
    }
  }

  public showUpdateEmployee(employee: Employee) {

    if (this.updateUserModel.id == employee.id) {
      this.updateUserModel = new Employee(-99, "", 1000, 18);
    } else if (this.updateUserModel.id != employee.id) {
      this.updateUserModel = new Employee(employee.id, employee.name, employee.salary, employee.age);
    }
    
  
  }

  public onSubmitCreateEmployeeForm() {

    this.httpService.createEmployee(this.createUserModel).subscribe((result) => {
      this.getEmployees();
    })
  }

  public onSubmitUpdateEmployeeForm() {

    this.httpService.updateEmployee(this.updateUserModel).subscribe((result) => {
      this.getEmployees();
    })
  }

}
