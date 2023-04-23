import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-teach',
  templateUrl: './teach.component.html',
  styleUrls: ['./teach.component.css']
})
export class TeachComponent {
  cours={
    nom:'nom',
    chapter:'chapter',
    lvl:'level',
    img:'image'
  }
  courses:any[]=[];
  ajout(box1:HTMLInputElement,box2:HTMLInputElement,box3:HTMLInputElement,box4:HTMLInputElement){
    if(box1.value==""|| box2.value=="" || box3.value=="" || box4.value==""){
      Swal.fire('You missed something')  }else{
    this.cours={
      nom:box1.value,
      chapter:box2.value,
      lvl:box3.value,
      img:box4.value
    }
  this.courses.push(this.cours);
  this.cours={
    nom:'',
    chapter: '',
    lvl: '',
    img: ''
  }
  console.log(this.cours)
  }
  }
  remove(btn:HTMLButtonElement){
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
          'Your file has been deleted.',
          'success'
        )
        for (let i=0;i<this.courses.length;i++){
          if((this.courses[i].nom==btn.id)&&(this.courses[i].chapter==btn.name)&&(this.courses[i].lvl==btn.value))
            this.courses.splice(i,1);  
            console.log(this.courses)
        }
      }
    })
  }
  }
  
