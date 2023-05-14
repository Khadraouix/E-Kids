import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

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
            Swal.fire({
              title: 'User Created successfully.',
              width: 600,
              padding: '3em',
              color: '#716add',
              background: '#fff url(/images/trees.png)',
              backdrop: `
                rgba(0,0,123,0.4)
                url("/images/nyan-cat.gif")
                left top
                no-repeat
              `
            })            
            this.router.navigate(['/sign-in']);

          } else {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'You already have an account!',
              footer: '<a href="">Why do I have this issue?</a>'
            })          }
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
