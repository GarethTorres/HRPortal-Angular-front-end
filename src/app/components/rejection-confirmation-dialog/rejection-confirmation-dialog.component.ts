import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'rejection-confirmation-dialog',
  templateUrl: './rejection-confirmation-dialog.component.html',
  styleUrls: ['./rejection-confirmation-dialog.component.css'],
})
export class RejectionConfirmationDialogComponent {
  constructor(
    private dialogRef: MatDialogRef<RejectionConfirmationDialogComponent>
  ) {}

  confirm(): void {
    this.dialogRef.close(true);
  }

  close(): void {
    this.dialogRef.close(false);
  }
}
