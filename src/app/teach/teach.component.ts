import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-teach',
  templateUrl: './teach.component.html',
  styleUrls: ['./teach.component.css']
})
export class TeachComponent {
  cours = {
    nom: 'nom',
    chapter: 'chapter',
    lvl: 'level',
    img: 'image'
  };
  courses: any[] = [];
  isSubmitted = false;
  email: string | null = null;
  password: string | null = null;

  constructor(private http: HttpClient) {}

  onSubmit(form: NgForm) {
    this.email = prompt('Enter Your email:');
    this.password = prompt('Enter Your Password:');
    console.log(this.email, this.password);
    this.isSubmitted = true;
    if (form.valid) {
      console.log('Form submitted successfully');
      const data = {
        nom: this.cours.nom,
        chapter: this.cours.chapter,
        lvl: this.cours.lvl,
        img: this.cours.img,
        email: this.email,
        password: this.password
      };
      console.log(data.nom, data.chapter, data.lvl, data.img);


      this.http.post('http://localhost/e-kids/list_courses.php', data).subscribe(
        (response: any) => {
          console.log(response);
          if (response.success) {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Your course has been saved',
              text: 'Refresh the page to see your courses',
              showConfirmButton: false,
              timer: 1500
            })
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong!',
              footer: '<a href="">Why do I have this issue?</a>'
            })
          }
        },
        error => {
          console.log('An error occurred:', error);
          console.log('Response text:', error.error.text);
        }
      );
    }
  }

  ngOnInit() {
    if (!this.email || !this.password) {
      this.email = prompt('Enter Your email:');
      this.password = prompt('Enter Your Password:');
    }

    this.http
      .post('http://localhost/e-kids/get_courses.php', { email: this.email, password: this.password })
      .subscribe((data: any) => {
        this.courses = data;
      });
  }
  deleteCourse(id: number) {
    const data = {
      id_C: id,
    };
    console.log(data.id_C);
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
          'Course Deleted Successfully!',
          'You can see it when you come back next time',
        )
      }
    })
    this.http.post('http://localhost/e-kids/delete_courses.php', data).subscribe(
      (response: any) => {
        console.log(response);
        if (response.success) {
          console.log('course deleted successfully');
          // remove the deleted course from the local array
          this.courses = this.courses.filter(item => item.id !== id);
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href="">Why do I have this issue?</a>'
          })        }
      },
      error => {
        console.log('An error occurred:', error);
        console.log('Response text:', error.error.text);
      }
    );
  }}