import { Component , } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  email: string="";
  password: string="";
  userType: string = "x";


  constructor(private http: HttpClient, private router: Router,public shared:SharedService) {}
data:any;
  onSubmit() {
    const body = {
      email: this.email,
      password: this.password,
      userType: this.userType
    };
    this.http.post<any>('http://localhost/e-kids/sign-in.php', body).subscribe(
      response => {
        // If authentication successful, store user type and navigate to home page
        if (response.success) {
          localStorage.setItem('userType', this.userType);
          this.router.navigate(['/home']);
          console.log(response.username,response.email,response.password);
          this.shared.body.email=response.email;
          this.shared.body.username=response.username;
          this.shared.body.password=response.password;
        } else {
          // Show error message if authentication fails
          alert('Invalid email or password');
        }
      },
      error => {
        // Handle errors
        console.error(error);
        alert('An error occurred while authenticating. Please try again.');
      }
    );
    
}
}
