import { Component } from '@angular/core';
import { AdminService } from '../../../../auth/services/admin/admin.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrl: './update-course.component.scss'
})
export class UpdateCourseComponent {

  courseId: number = this.activatedRoute.snapshot.params["courseId"];

  isSpinning: boolean;

  validateForm: FormGroup;

  constructor(private service: AdminService,
              private fb: FormBuilder,
              private snackBar: MatSnackBar,
              private activatedRoute: ActivatedRoute
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
    this.getCourseById();
  }

  getCourseById() {
    this.service.getCourseById(this.courseId).subscribe((res) => {
      const course = res.courseDto;
      this.validateForm.patchValue(course);
      console.log(res);
    });
  }

  updateCourse() {
    this.service.updateCourse(this.courseId, this.validateForm.value).subscribe((res) => {
      console.log(res);
      if (res.id != null) {
        this.snackBar.open("Course attributes updated successfully", "Close", { duration: 5000 });
      } else {
        this.snackBar.open("Course not found", "Close", { duration: 5000 });
      }
    });
  }
}
