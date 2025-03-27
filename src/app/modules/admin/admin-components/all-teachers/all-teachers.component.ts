import { Component } from '@angular/core';
import { AdminService } from '../../../../auth/services/admin/admin.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-all-teachers',
  templateUrl: './all-teachers.component.html',
  styleUrl: './all-teachers.component.scss'
})
export class AllTeachersComponent {

  teachers = [
    { id: 1, name: "Dr. Alice Johnson", department: "Computer Science", qualification: "PhD in AI", address: "123 Maple St, Springfield", birthDate: "1978-06-15", gender: "Female" },
    { id: 2, name: "Mr. Robert Smith", department: "Mathematics", qualification: "MSc in Applied Math", address: "456 Oak St, Metropolis", birthDate: "1982-09-23", gender: "Male" },
    { id: 3, name: "Ms. Emily Davis", department: "Physics", qualification: "MSc in Quantum Mechanics", address: "789 Birch St, Gotham", birthDate: "1985-03-12", gender: "Female" },
    { id: 4, name: "Dr. Michael Brown", department: "History", qualification: "PhD in Modern History", address: "101 Pine St, Star City", birthDate: "1975-11-08", gender: "Male" },
    { id: 5, name: "Prof. Sarah Williams", department: "Literature", qualification: "PhD in English Literature", address: "202 Cedar St, Central City", birthDate: "1980-07-29", gender: "Female" },
    { id: 6, name: "Dr. James Miller", department: "Biology", qualification: "PhD in Genetics", address: "303 Spruce St, Riverdale", birthDate: "1979-04-17", gender: "Male" },
    { id: 7, name: "Ms. Laura Wilson", department: "Chemistry", qualification: "MSc in Organic Chemistry", address: "404 Aspen St, Hill Valley", birthDate: "1983-12-05", gender: "Female" }
  ];


  constructor(private service: AdminService,
    private snackBar:MatSnackBar
  ){}

  ngOnInit(){
    this.getAllTeachers();
  }

  getAllTeachers(){
    this.service.getAllTeachers().subscribe((res) => {
      console.log(res);
      this.teachers = res;
    })
  }

  deleteTeacher(teacherId:number){
    console.log(teacherId)
    this.service.deleteTeacher(teacherId).subscribe((res) =>{
      console.log(res)
      this.getAllTeachers();
      this.snackBar.open("Teacher deleted successfully","Close",{duration:5000})
    })
  }
}
