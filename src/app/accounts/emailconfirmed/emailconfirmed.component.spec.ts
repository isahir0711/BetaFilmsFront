import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailconfirmedComponent } from './emailconfirmed.component';

describe('EmailconfirmedComponent', () => {
  let component: EmailconfirmedComponent;
  let fixture: ComponentFixture<EmailconfirmedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmailconfirmedComponent]
    });
    fixture = TestBed.createComponent(EmailconfirmedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
