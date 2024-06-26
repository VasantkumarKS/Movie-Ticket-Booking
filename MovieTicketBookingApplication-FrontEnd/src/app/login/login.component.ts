import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LogginService } from './loggin.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage: string;
  constructor(
    private fb: FormBuilder,
    private lService: LogginService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  doLogin() {
    this.lService
      .login(this.loginForm.value.username, this.loginForm.value.password)
      .subscribe(
        (res: any) => {
          if (res.user.role === 'admin') {
            this.lService.setUserRole(true);
            console.log(this.lService.getUserRole());
          } else {
            this.lService.setUserRole(false);
          }
  
          if (res.user.customer != null) {
            this.lService.setCustomerId(res.user.customer.customerId);
          }
          this.lService.setLoginStatus(res.loginStatus);

          this.router.navigate(['']);
        },
        (error: any) => {
          this.errorMessage = error;
        }
      );
  }
}
