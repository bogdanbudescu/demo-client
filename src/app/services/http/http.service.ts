import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Employee } from 'src/app/models/Employee';
import { HttpParamsOptions, HttpParams } from '@angular/common/http/src/params';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  public server: any = "http://localhost";
  constructor(private http: HttpClient) { }

  public getEmployeeById(id: number): Observable<any> {

    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token') || ''
      })
    };
    return this.http.get<Employee>(`${this.server}/api/employees/read.php?id=${id}`, options);
  }

  public getEmployees(): Observable<Employee[]> {
    
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token') || ''
      })
    };
    return this.http.get<Employee[]>(`${this.server}/api/employees/read.php`, options);
  }

  public deleteEmployee(id: number): Observable<any> {

    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token') || ''
      }),
      body: { id: id }
    };
    return this.http.delete(`${this.server}/api/employees/delete.php`, options);
  }

  public updateEmployee(employee: Employee) {

    let body = JSON.stringify(employee);
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token') || ''
      })
    };
    return this.http.put(`${this.server}/api/employees/update.php`, body, options);
  }

  public createEmployee(employee: Employee) {

    let body = JSON.stringify(employee);
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token') || ''
      })
    };
    return this.http.post(`${this.server}/api/employees/create.php`, body, options);
  }
}
