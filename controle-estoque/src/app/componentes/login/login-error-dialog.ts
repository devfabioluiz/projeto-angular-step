import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-login-error-dialog',
  standalone: true,
  templateUrl: './login-error-dialog.html',
  imports: [MatDialogModule, MatButtonModule],
})
export class LoginErrorDialog {
  constructor(
    public dialogRef: MatDialogRef<LoginErrorDialog>,
    @Inject(MAT_DIALOG_DATA) public data: { message: string },
  ) {}

  close() {
    this.dialogRef.close();
  }
}
