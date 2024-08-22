import { Component, OnInit } from '@angular/core';
import { Employee } from './employee.model';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee-profiles',
  templateUrl: './employee-profiles.component.html',
  styleUrls: ['./employee-profiles.component.css']
})
export class EmployeeProfilesComponent implements OnInit {
  employees: Employee[] = [];
  filteredEmployees: Employee[] = [];
  searchTerm: string = '';

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.employeeService.getEmployees().subscribe(
      (employees) => {
        this.employees = employees.sort((a, b) => a.lastName.localeCompare(b.lastName));
        this.filteredEmployees = this.employees;
      }
    );
  }

  searchEmployees(): void {
    this.filteredEmployees = this.employees.filter(employee =>
      employee.firstName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      employee.lastName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      employee.preferredName.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  openEmployeeProfile(employeeId: string): void {
    window.open(`/employee-profile/${employeeId}`, '_blank');
  }
}


