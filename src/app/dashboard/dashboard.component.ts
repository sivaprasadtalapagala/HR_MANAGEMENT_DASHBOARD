
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
  stats = [
    { label: 'Employees', value: 120 },
    { label: 'Departments', value: 5 },
    { label: 'Open Positions', value: 8 },
    { label: 'On Leave', value: 10 }
  ];
  recentActivity = ['John joined as Developer', 'HR policy updated'];
  employees = [
    { name: 'Alice', position: 'Developer', status: 'Active' },
    { name: 'Bob', position: 'HR Manager', status: 'On Leave' }
  ];
}
