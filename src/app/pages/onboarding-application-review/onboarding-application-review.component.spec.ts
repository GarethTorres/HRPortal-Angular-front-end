import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ApplicationService } from '../../services/application.service';
import { OnboardingApplicationReviewComponent } from './onboarding-application-review.component';

describe('OnboardingApplicationReviewComponent', () => {
  let component: OnboardingApplicationReviewComponent;
  let fixture: ComponentFixture<OnboardingApplicationReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [OnboardingApplicationReviewComponent],
      providers: [ApplicationService],
    }).compileComponents();

    service = TestBed.inject(ApplicationService);
    fixture = TestBed.createComponent(OnboardingApplicationReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
