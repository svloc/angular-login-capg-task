import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginServiceService } from '../service/login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public errorMsg:string="";
  public loginStatus:boolean=true;

  constructor(private formBuilder: FormBuilder, private loginService: LoginServiceService,private router:Router) { 
    localStorage.setItem("isLoggedIn", JSON.stringify(true));
    this.loginStatus=JSON.parse(localStorage.getItem("isLoggedIn"));
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    this.loginService.login(this.loginForm.value).subscribe(
        response => {
          console.log(response);
          localStorage.setItem("isLoggedIn", JSON.stringify(true));
          this.errorMsg='';
          this.router.navigate(['/home']);    
        },
        error => {
          console.error(error);
          this.errorMsg=error.error;
        }
      );

  }
  handleLogin(){
    localStorage.setItem("isLoggedIn", JSON.stringify(true));
    this.router.navigate(['/']); 
  }

}