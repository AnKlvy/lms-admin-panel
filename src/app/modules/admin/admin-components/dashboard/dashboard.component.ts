import { Component, OnInit } from '@angular/core';
import {DashboardService} from "../../services/dashboard.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  stats = { students: 0, teachers: 0, admins: 0, courses: 0 };

  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    this.dashboardService.getUserStats().subscribe(data => {
      this.stats = data;
    });
  }
}
