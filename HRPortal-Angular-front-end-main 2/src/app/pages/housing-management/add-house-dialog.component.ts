import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-house-dialog',
  template: `
    <h2 mat-dialog-title>Add New House</h2>
    <mat-dialog-content>
      <form [formGroup]="houseForm">
        <mat-form-field>
          <input matInput placeholder="Address" formControlName="address">
        </mat-form-field>
        <mat-form-field>
          <input matInput placeholder="Landlord Full Name" formControlName="landlordName">
        </mat-form-field>
        <mat-form-field>
          <input matInput placeholder="Landlord Phone" formControlName="landlordPhone">
        </mat-form-field>
        <mat-form-field>
          <input matInput placeholder="Landlord Email" formControlName="landlordEmail">
        </mat-form-field>
        <mat-form-field>
          <input matInput type="number" placeholder="Number of Beds" formControlName="beds">
        </mat-form-field>
        <mat-form-field>
          <input matInput type="number" placeholder="Number of Mattresses" formControlName="mattresses">
        </mat-form-field>
        <mat-form-field>
          <input matInput type="number" placeholder="Number of Tables" formControlName="tables">
        </mat-form-field>
        <mat-form-field>
          <input matInput type="number" placeholder="Number of Chairs" formControlName="chairs">
        </mat-form-field>
      </form>
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button (click)="onNoClick()">Cancel</button>
      <button mat-button [mat-dialog-close]="houseForm.value" [disabled]="!houseForm.valid">Add</button>
    </mat-dialog-actions>
  `
})
export class AddHouseDialogComponent {
  houseForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddHouseDialogComponent>,
    private fb: FormBuilder
  ) {
    this.houseForm = this.fb.group({
      address: ['', Validators.required],
      landlordName: ['', Validators.required],
      landlordPhone: ['', Validators.required],
      landlordEmail: ['', [Validators.required, Validators.email]],
      beds: [0, [Validators.required, Validators.min(0)]],
      mattresses: [0, [Validators.required, Validators.min(0)]],
      tables: [0, [Validators.required, Validators.min(0)]],
      chairs: [0, [Validators.required, Validators.min(0)]]
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}


