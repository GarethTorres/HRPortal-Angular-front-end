import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'approval-confirmation-dialog',
  templateUrl: './approval-confirmation-dialog.component.html',
  styleUrls: ['./approval-confirmation-dialog.component.css'],
})
export class ApprovalConfirmationDialogComponent {
  constructor(
    private dialogRef: MatDialogRef<ApprovalConfirmationDialogComponent>
  ) {}

  confirm(): void {
    this.dialogRef.close(true);
  }

  close(): void {
    this.dialogRef.close(false);
  }
}
