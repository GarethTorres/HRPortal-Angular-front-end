import { FormControl } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class ErrorMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null): boolean {
    return !!(control && control.invalid && (control.touched || control.dirty));
  }
}
