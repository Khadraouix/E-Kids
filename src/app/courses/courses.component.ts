import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
course :String ="All";
rm : boolean=false;
checked:boolean=false;
color:String=""
ok :Boolean=false;
x:number=0;
searchResult=document.getElementById("s") as HTMLInputElement;
xx=document.getElementById("math") as HTMLAnchorElement;
constructor(public shared:SharedService,private toastr: ToastrService){
}

changeMath(){
this.course="Math";
}
changeScience(){
this.course="Science";
}
changeFrench(){
this.course="French";
}
changeEnglish(){
this.course="English";
}
changeArabic(){
this.course="Arabic";
}
changeAll(){
this.course="All"
}
resultSearch1(val:string){
if(val!=null){
  if(val==="maths" ||val==="Maths" ||val==="math" ||val==="Math" ||val==="MATH"){
  this.course="Math";
  }
  if(val==="Science" ||val==="Sciences" ||val==="science" ||val==="Science" ||val==="SCIENCE"){
  this.course="Science";
  }
  if(val==="arabic" ||val==="Arabic" ||val==="ARABIC"){
  this.course="Arabic";
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
  this.course="Math";
  }
  if(val==="S" || val==="s"){
  this.course="Science";
  }
  if(val==="a" ||val==="A"){
  this.course="Arabic";
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
plusplus(box:HTMLAnchorElement){
if(this.shared.table.length==0){
  this.shared.table.push(box.id);
  alert(this.shared.table.length);
  alert(this.shared.table);
}else{
for(let i =0; i < this.shared.table.length; i++){
  if(this.shared.table[i]==box.id){
    this.shared.table.splice(i,1)
    alert(this.shared.table.length);
    alert(this.shared.table);
    this.checked=true;
    break;
  }
  else{
    this.shared.table.push(box.id);
    alert(this.shared.table.length);
    alert(this.shared.table);
    this.checked=false;
    break;
  }
}
}
return this.checked;
}
/*isChecked(box:HTMLAnchorElement):boolean{
  if(this.table.length==0){
    this.checked=false;
  }
  else{
  for(let i =0; i < this.table.length; i++){
    if(this.table[i]==box.id){
      this.checked=true;
    }
    else{
      this.checked=false;
    }
}
}
return this.checked;
}*/
}
