import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectionConfirmationDialogComponent } from './rejection-confirmation-dialog.component';

describe('RejectionConfirmationDialogComponent', () => {
  let component: RejectionConfirmationDialogComponent;
  let fixture: ComponentFixture<RejectionConfirmationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RejectionConfirmationDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RejectionConfirmationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
