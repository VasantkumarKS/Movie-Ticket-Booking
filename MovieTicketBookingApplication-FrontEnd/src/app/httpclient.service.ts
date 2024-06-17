import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Employee {
  constructor(
    public name: string,
    public email: string,
    public phone: String,
    public message: string
  ) { }
}

@Injectable({
  providedIn: 'root'
})
export class Httpclientservice {
  constructor(
    private httpClient: HttpClient
  ) {
  }

  getEmployees() {}
  public createEmployee(employee: any) {
    return this.httpClient.post<Employee>('http://localhost:9041/Bank' + '/' + 'addemployee', employee);
  }
}



