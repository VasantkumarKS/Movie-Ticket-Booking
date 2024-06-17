import { Component, OnInit } from '@angular/core';
import { Employee, Httpclientservice } from '../httpclient.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  employee: Employee = new Employee('', '', '', '');


  constructor( private httpClientService: Httpclientservice) { }

  ngOnInit(): void {
  }


  createEmployee(): void {
    this.httpClientService.createEmployee(this.employee)
        .subscribe( data => {
          this. employee = new Employee('', '', '', '');

          alert(data.name + ' Your Message Send successfully.');
          console.log('employee' + data);
        });
      }
      
      }
