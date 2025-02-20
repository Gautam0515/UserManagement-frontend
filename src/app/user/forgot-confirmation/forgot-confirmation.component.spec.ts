import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotConfirmationComponent } from './forgot-confirmation.component';

describe('ForgotConfirmationComponent', () => {
  let component: ForgotConfirmationComponent;
  let fixture: ComponentFixture<ForgotConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForgotConfirmationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgotConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
