import { Component ,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-my-learning',
  templateUrl: './my-learning.component.html',
  styleUrls: ['./my-learning.component.css']
})
export class MyLearningComponent implements OnInit {
  clear:boolean=false;

  constructor(private http: HttpClient, private router: Router,public shared:SharedService) {}
  
    body={
      email:"",
      password:"",
      username:"",
      nom:"",
      lvl:""
  }
    list: any[] = [];


    ngOnInit() {
    this.body.email = this.shared.body.email;
    this.body.password = this.shared.body.password;
    this.body.username = this.shared.body.username;
      this.http.post<any>('http://localhost/e-kids/list_mylearning.php',this.body).subscribe(
      (response:any) => {
          console.log(response,this.list);
          this.list=response;
        },
      (error: any) => {
    console.error(error);
  }
);

  }

  backToCourses(): void{
    this.router.navigate(["/courses"]);
  }
nom:string="";
lvl:string="";
delete(box:HTMLAnchorElement){
  this.body.nom=box.id;
  this.body.lvl=box.name;
  console.log(this.body.lvl,this.body.nom)
  this.body.email = this.shared.body.email;
  this.body.password = this.shared.body.password;
  this.body.username = this.shared.body.username;
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Deleted!',
        'You can see it when you come back next time',
        'success'
      )
      this.http.post<any>('http://localhost/e-kids/delete_mylearning.php',this.body).subscribe(
      (response:any) => {
        if(response.success){
          console.log(response.success);
        }else{
          console.log(response.false);
        }
        },
      (error: any) => {
    console.error(error);
  }
);
    }
  })
  
}

}