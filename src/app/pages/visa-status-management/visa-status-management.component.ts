import { Component, OnInit } from '@angular/core';
import { VisaStatusService } from '../../services/visa-status.service';
import { EmployeeVisaStatus } from '../../models/employee-visa-status';

@Component({
  selector: 'app-visa-status-management',
  templateUrl: './visa-status-management.component.html',
  styleUrls: ['./visa-status-management.component.css']
})
export class VisaStatusManagementComponent implements OnInit {
  inProgressVisaStatuses: EmployeeVisaStatus[] = [];
  allVisaStatuses: EmployeeVisaStatus[] = [];
  searchTerm: string = '';

  constructor(private visaStatusService: VisaStatusService) { }

  ngOnInit(): void {
    this.loadInProgressVisaStatuses();
    this.loadAllVisaStatuses();
  }

  loadInProgressVisaStatuses(): void {
    this.visaStatusService.getInProgressVisaStatuses().subscribe(
      data => this.inProgressVisaStatuses = data
    );
  }

  loadAllVisaStatuses(): void {
    this.visaStatusService.getAllVisaStatuses().subscribe(
      data => this.allVisaStatuses = data
    );
  }

  approveDocument(employeeId: string, documentType: string): void {
    this.visaStatusService.approveDocument(employeeId, documentType).subscribe(
      () => this.loadInProgressVisaStatuses()
    );
  }

  rejectDocument(employeeId: string, documentType: string, feedback: string): void {
    this.visaStatusService.rejectDocument(employeeId, documentType, feedback).subscribe(
      () => this.loadInProgressVisaStatuses()
    );
  }

  sendNotification(employeeId: string): void {
    this.visaStatusService.sendNotification(employeeId).subscribe();
  }

  searchEmployees(): EmployeeVisaStatus[] {
    if (!this.searchTerm) return this.allVisaStatuses;
    return this.allVisaStatuses.filter(employee => 
      employee.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  getRemainingDays(endDate: Date): number {
    const today = new Date();
    const end = new Date(endDate);
    const diffTime = Math.abs(end.getTime() - today.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }
}


