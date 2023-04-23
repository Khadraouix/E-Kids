import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  username: string="";
  email: string="";
  password: string="";
  userType: string="x";
  isSubmitted: boolean = false;
  age:number=0;

  constructor(private http: HttpClient,private router: Router) { }

  onSubmit(form: NgForm) {
    console.log(this.username,this.email,this.age,this.password)
    this.isSubmitted = true;
    if (form.valid) {
      console.log('Form submitted successfully');
      const data = {
        username: this.username,
        email: this.email,
        password: this.password,
        age: this.age,
        userType:this.userType
      };
      this.http.post('http://localhost/e-kids/sign-up.php', data).subscribe(
        (response: any) => {
          console.log(response);
          if (response.success) {
            console.log('User created successfully');
            this.router.navigate(['/sign-in']);

          } else {
            console.log('Failed to create user');
          }
        },
        (error) => {
          console.log('An error occurred:', error);
        }
      );
    } else {
      this.userType="";
      form.controls['username'].markAsTouched();
      form.controls['email'].markAsTouched();
      form.controls['password'].markAsTouched();
    }
  }
}
