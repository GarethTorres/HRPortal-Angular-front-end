import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../store/app.state';
import * as VisaActions from '../store/visa.actions';
import { VisaStatus } from '../models/visa-status.model';

@Component({
  selector: 'app-visa-status',
  templateUrl: './visa-status.component.html',
  styleUrls: ['./visa-status.component.css']
})
export class VisaStatusComponent implements OnInit {
  visaStatus$: Observable<VisaStatus>;

  constructor(private store: Store<AppState>) {
    this.visaStatus$ = this.store.select(state => state.visa);
  }

  ngOnInit() {
    this.store.dispatch(VisaActions.loadVisaStatus());
  }

  uploadDocument(documentType: string, file: File) {
    this.store.dispatch(VisaActions.uploadDocument({ documentType, file }));
  }

  downloadTemplate(templateType: string) {
    this.store.dispatch(VisaActions.downloadTemplate({ templateType }));
  }
}

