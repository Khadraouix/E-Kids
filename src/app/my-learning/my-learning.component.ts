import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-my-learning',
  templateUrl: './my-learning.component.html',
  styleUrls: ['./my-learning.component.css']
})
export class MyLearningComponent {
  clear:boolean=false;

  constructor(private router : Router,public shared:SharedService){
  }
  
  backToCourses(): void{
    this.router.navigate(["/courses"]);
  }
  
  cleari(){
  this.clear=true;
  }
  
  cleara(box:HTMLAnchorElement){
    for (let i=0;i<this.shared.table.length;i++){
      if((this.shared.table[i]==box.id))
      this.shared.table.splice(i,1);  
        console.log(this.shared.table)
    }
  }
  }