import { Component } from '@angular/core';
import { AdminService } from '../../../../auth/services/admin/admin.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-post-course',
  templateUrl: './post-course.component.html',
  styleUrl: './post-course.component.scss'
})
export class PostCourseComponent {

  validateForm: FormGroup;
  isSpinning: boolean = false;

  constructor(private service: AdminService,
              private fb: FormBuilder,
              private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.validateForm = this.fb.group({
      title: ["", Validators.required],
      category: ["", Validators.required],
      teacher: ["", Validators.required],
      duration: ["", Validators.required],
      startDate: ["", Validators.required],
      credits: ["", [Validators.required, Validators.min(1)]]
    });
  }

  postCourse() {
    console.log(this.validateForm.value);
    this.isSpinning = true;
    this.service.addCourse(this.validateForm.value).subscribe((res) => {
      this.isSpinning = false;
      if (res.id != null) {
        this.snackBar.open("Course added successfully", "Close", { duration: 5000 });
      } else {
        this.snackBar.open("Course already exists", "Close", { duration: 5000 });
      }
    });
  }
}
