import {Component, OnInit} from '@angular/core';
import { AdminService } from '../../../../auth/services/admin/admin.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrl: './all-courses.component.scss'
})
export class AllCoursesComponent implements OnInit {

  courses = [
    // Science
    { "id": 1, "title": "Mathematics", "category": "Science", "teacher": "Dr. John Smith", "duration": "3 months", "startDate": "2025-09-01", "credits": 4 },
    { "id": 2, "title": "Physics", "category": "Science", "teacher": "Dr. Jane Doe", "duration": "4 months", "startDate": "2025-10-01", "credits": 5 },
    { "id": 3, "title": "Chemistry", "category": "Science", "teacher": "Dr. Albert Green", "duration": "3 months", "startDate": "2025-09-15", "credits": 4 },
    { "id": 4, "title": "Biology", "category": "Science", "teacher": "Dr. Susan Blue", "duration": "5 months", "startDate": "2025-08-20", "credits": 5 },
    { "id": 5, "title": "Astronomy", "category": "Science", "teacher": "Dr. Mark Red", "duration": "6 months", "startDate": "2025-07-10", "credits": 6 },
    { "id": 6, "title": "Geology", "category": "Science", "teacher": "Dr. Laura White", "duration": "3 months", "startDate": "2025-11-05", "credits": 3 },

    // Humanities
    { "id": 7, "title": "History", "category": "Humanities", "teacher": "Prof. Michael Brown", "duration": "2 months", "startDate": "2025-08-15", "credits": 3 },
    { "id": 8, "title": "Philosophy", "category": "Humanities", "teacher": "Prof. Anna Black", "duration": "4 months", "startDate": "2025-09-20", "credits": 4 },
    { "id": 9, "title": "Linguistics", "category": "Humanities", "teacher": "Prof. Robert Gray", "duration": "3 months", "startDate": "2025-10-10", "credits": 3 },
    { "id": 10, "title": "Art History", "category": "Humanities", "teacher": "Prof. Emily Green", "duration": "5 months", "startDate": "2025-07-15", "credits": 5 },
    { "id": 11, "title": "Literature", "category": "Humanities", "teacher": "Prof. Oliver White", "duration": "4 months", "startDate": "2025-06-25", "credits": 4 },
    { "id": 12, "title": "Cultural Studies", "category": "Humanities", "teacher": "Prof. Sophia Blue", "duration": "3 months", "startDate": "2025-11-10", "credits": 3 },

    // Technology
    { "id": 13, "title": "Computer Science", "category": "Technology", "teacher": "Dr. Alice Johnson", "duration": "6 months", "startDate": "2025-07-10", "credits": 6 },
    { "id": 14, "title": "Software Engineering", "category": "Technology", "teacher": "Dr. Brian Adams", "duration": "4 months", "startDate": "2025-08-15", "credits": 4 },
    { "id": 15, "title": "Cybersecurity", "category": "Technology", "teacher": "Dr. Linda Scott", "duration": "3 months", "startDate": "2025-09-05", "credits": 3 },
    { "id": 16, "title": "AI & Machine Learning", "category": "Technology", "teacher": "Dr. Kevin White", "duration": "5 months", "startDate": "2025-06-20", "credits": 5 },
    { "id": 17, "title": "Data Science", "category": "Technology", "teacher": "Dr. Rachel Blue", "duration": "6 months", "startDate": "2025-10-01", "credits": 6 },
    { "id": 18, "title": "Blockchain", "category": "Technology", "teacher": "Dr. George Brown", "duration": "3 months", "startDate": "2025-11-05", "credits": 3 },

    // Business
    { "id": 19, "title": "Economics", "category": "Business", "teacher": "Prof. Emily White", "duration": "3 months", "startDate": "2025-11-05", "credits": 4 },
    { "id": 20, "title": "Marketing", "category": "Business", "teacher": "Prof. David Black", "duration": "4 months", "startDate": "2025-09-15", "credits": 5 },
    { "id": 21, "title": "Finance", "category": "Business", "teacher": "Prof. Olivia Gray", "duration": "3 months", "startDate": "2025-10-20", "credits": 3 },
    { "id": 22, "title": "Entrepreneurship", "category": "Business", "teacher": "Prof. Nathan Green", "duration": "5 months", "startDate": "2025-07-25", "credits": 5 },
    { "id": 23, "title": "Project Management", "category": "Business", "teacher": "Prof. Laura White", "duration": "4 months", "startDate": "2025-06-30", "credits": 4 },
    { "id": 24, "title": "Business Analytics", "category": "Business", "teacher": "Prof. Steven Blue", "duration": "3 months", "startDate": "2025-12-01", "credits": 3 },

    // Social Sciences
    { "id": 25, "title": "Psychology", "category": "Social Sciences", "teacher": "Dr. Robert Wilson", "duration": "5 months", "startDate": "2025-06-20", "credits": 5 },
    { "id": 26, "title": "Sociology", "category": "Social Sciences", "teacher": "Dr. Jessica Brown", "duration": "4 months", "startDate": "2025-07-10", "credits": 4 },
    { "id": 27, "title": "Political Science", "category": "Social Sciences", "teacher": "Dr. Charles Green", "duration": "3 months", "startDate": "2025-08-15", "credits": 3 },
    { "id": 28, "title": "Anthropology", "category": "Social Sciences", "teacher": "Dr. William Black", "duration": "5 months", "startDate": "2025-09-25", "credits": 5 },
    { "id": 29, "title": "Criminology", "category": "Social Sciences", "teacher": "Dr. Olivia Adams", "duration": "4 months", "startDate": "2025-10-05", "credits": 4 },
    { "id": 30, "title": "Human Geography", "category": "Social Sciences", "teacher": "Dr. Benjamin White", "duration": "3 months", "startDate": "2025-11-15", "credits": 3 }
  ];

  protected groupedCourses: {};

  constructor(private service: AdminService,
              private snackBar: MatSnackBar
  ){}

  ngOnInit(){
    this.getAllCourses();
    this.groupCoursesByCategory();
  }

  getAllCourses(){
    this.service.getAllCourses().subscribe((res) => {
      console.log(res);
      this.courses = res;
    })
  }

  deleteCourse(courseId: number){
    this.service.deleteCourse(courseId).subscribe((res) => {
      console.log(res);
      this.getAllCourses();
      this.snackBar.open("Course deleted successfully", "Close", { duration: 5000 });
    })
  }

  groupCoursesByCategory() {
    this.groupedCourses = this.courses.reduce((acc, course) => {
      if (!acc[course.category]) {
        acc[course.category] = [];
      }
      acc[course.category].push(course);
      return acc;
    }, {} as { [key: string]: any[] });
  }

}
