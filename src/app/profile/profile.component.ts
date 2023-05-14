import { Component , } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'
import { SharedService } from '../shared.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  email:string="";
  password:string="";
  username:string="";
   body = {
    email: "",
    password: "",
    username: ""
  };
  constructor(private http: HttpClient, private router: Router,public shared:SharedService) {}
modify(form:NgForm){
  var table = {
    oldemail: this.shared.body.email,
    oldpassword: this.shared.body.password,
    oldusername: this.shared.body.username,
    newemail: this.email,
    newpassword: this.password,
    newusername: this.username
  };
  console.log(table.oldemail,table.newemail);
  Swal.fire({
    title: 'Do you want to save the changes?',
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: 'Save',
    denyButtonText: `Don't save`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      this.http.post('http://localhost/e-kids/profile.php', table).subscribe(
        (response: any) => {
          if (response.success) {
          console.log(response);
            } else {
          console.log("error while updating");
            }
        },
        (error) => {
          console.log('An error occurred:', error);
        }
      );
      Swal.fire('Saved!', '', 'success')
    } else if (result.isDenied) {
      Swal.fire('Changes are not saved', '', 'info')
    }
  })
}
informations(){
  
  this.http.post<any>('http://localhost/e-kids/sign-in.php', this.body).subscribe(
      response => {

        if (response.success) {
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
