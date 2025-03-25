import { Component } from '@angular/core';
import { AdminService } from '../../../../auth/services/admin/admin.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrl: './all-students.component.scss'
})
export class AllStudentsComponent {

  students = [
    {
      "id": 1,
      "name": "John Doe",
      "studentClass": "10A",
      "email": "johndoe@example.com",
      "address": "123 Main St, Springfield",
      "birthDate": "2005-04-12",
      "gender": "Male"
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "studentClass": "11B",
      "email": "janesmith@example.com",
      "address": "456 Elm St, Metropolis",
      "birthDate": "2004-07-19",
      "gender": "Female"
    },
    {
      "id": 3,
      "name": "Michael Johnson",
      "studentClass": "12C",
      "email": "michaelj@example.com",
      "address": "789 Oak St, Gotham",
      "birthDate": "2003-11-23",
      "gender": "Male"
    },
    {
      "id": 4,
      "name": "Emily Davis",
      "studentClass": "9D",
      "email": "emilyd@example.com",
      "address": "101 Pine St, Star City",
      "birthDate": "2006-02-14",
      "gender": "Female"
    },
    {
      "id": 5,
      "name": "David Brown",
      "studentClass": "10A",
      "email": "davidb@example.com",
      "address": "202 Birch St, Central City",
      "birthDate": "2005-08-30",
      "gender": "Male"
    }
  ];

  constructor(private service: AdminService,
    private snackBar:MatSnackBar
  ){}

  ngOnInit(){
    this.getAllStudents();
  }

  getAllStudents(){
    this.service.getAllStudents().subscribe((res) => {
      console.log(res);
      this.students = res;
    })
  }

  deleteStudent(studentId:number){
    this.service.deleteStudent(studentId).subscribe((res) =>{
      console.log(res)
      this.getAllStudents();
      this.snackBar.open("Student deleted successfully","Close",{duration:5000})
    })
  }
}

