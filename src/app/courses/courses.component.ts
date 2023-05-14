import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit{
course :String ="All";
rm : boolean=false;
checked:boolean=false;
color:String=""
ok :Boolean=false;
x:number=0;
searchResult=document.getElementById("s") as HTMLInputElement;
xx=document.getElementById("math") as HTMLAnchorElement;

courses: any[] = [];
body = {
  email: "",
  password: "",
  username: ""
};
localStorageData: any;
constructor(public shared:SharedService,private toastr: ToastrService,private http: HttpClient){
}

changeMath(){
this.course="MATH";
}
changeScience(){
this.course="SCIENCE";
}
changeFrench(){
this.course="FRENSH";
}
changeEnglish(){
this.course="ENGLISH";
}
changeArabic(){
this.course="ARABIC";
}
changeAll(){
this.course="All"
}
resultSearch1(val:string){
if(val!=null){
  if(val==="maths" ||val==="Maths" ||val==="math" ||val==="Math" ||val==="MATH"){
  this.course="MATH";
  }
  if(val==="Science" ||val==="Sciences" ||val==="science" ||val==="Science" ||val==="SCIENCE"){
  this.course="Science";
  }
  if(val==="arabic" ||val==="Arabic" ||val==="ARABIC"){
  this.course="ARABIC";
  }
  if(val==="french" ||val==="French" ||val==="FRENCH"){
  this.course="French";
  }
  if(val==="English" ||val==="english" ||val==="ENGLISH"){
  this.course="English";
  }
  if(val!=="french" && val!=="FRENCH" && val!=="French" 
  && val!=="ENGLISH" && val!=="english" && val!=="English" 
  && val!=="Arabic" && val!=="arabic" && val!=="ARABIC" 
  && val!=="Science" && val!=="Sciences" && val!=="SCIENCE" 
  && val!=="science" && val!=="sciences" && val!=="SCIENCES"
  && val!=="MATHS" && val!=="MATH" && val!=="Math" 
  && val!=="Maths" && val!=="math" && val!=="maths"){
  this.toastr.error("Resultat introuvable","Error");
  }
}
};
resultSearch2(val:string){
  if(val==="m" ||val==="M"){
  this.course="MATH";
  }
  if(val==="S" || val==="s"){
  this.course="Science";
  }
  if(val==="a" ||val==="A"){
  this.course="ARABIC";
  }
  if(val==="f"||val==="F"){
  this.course="French";
  }
  if(val==="E" ||val==="e"){
  this.course="English";
  }
  };
readMore(){
this.rm=true;
}
changeColorBlue(){
this.color="blue"
}
changeColorGreen(){
  this.color="green"
  }
ajouter(){
this.ok=!this.ok;
}
plusplus(box:HTMLAnchorElement,id_CR:number){

  if(this.shared.table.length==0){
  this.shared.table.push(box.id);
}else{
for(let i =0; i < this.shared.table.length; i++){
  if(this.shared.table[i]==box.id){
    this.shared.table.splice(i,1)
    this.checked=true;
    break;
  }
  else{
    this.shared.table.push(box.id);
    this.checked=false;
    break;
  }
}
}
this.localStorageData = localStorage.getItem('userType');
var userType=this.localStorageData;
const data = {
  email:this.shared.body.email,
  password: this.shared.body.password,
  id_C:id_CR,
};
console.log(data);
this.http.post('http://localhost/e-kids/insert_mylearning.php', data).subscribe(
        (response: any) => {
          console.log(response);
          if (response.success) {
            console.log('course added successfully');
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Failed to add course!',
              footer: '<a href="">Why do I have this issue?</a>'
            })          }
        },
        error => {
          console.log('An error occurred:', error);
          console.log('Response text:', error.error.text);

        }
      );
return this.checked;

}

  ngOnInit() {
    this.http.get('http://localhost/e-kids/take_courses.php').subscribe(
  (data: any) => {
    this.courses= data;
    console.log( this.courses);
  },
  (error: any) => {
    console.error(error);
  }
);

  }
}


