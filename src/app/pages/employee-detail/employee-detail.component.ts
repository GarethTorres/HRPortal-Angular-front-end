import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee.model'; 

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  employee: Employee | null = null;

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    const employeeId = this.route.snapshot.paramMap.get('id'); // Fetch ID from the route
    if (employeeId) {
      this.loadEmployeeData(employeeId);
    }
  }

  loadEmployeeData(id: string) {
    this.employeeService.getEmployeeById(id).subscribe(
      (data) => {
        this.employee = data; // Set the employee data on fetch
      },
      (error) => {
        console.error('Error fetching employee details:', error);
      }
    );
  }

  previewDocument(document: { name: string; updated: Date }) {
    console.log('Previewing document:', document);
  }

  downloadDocument(document: { name: string; updated: Date }) {
    console.log('Downloading document:', document);
  }
}
