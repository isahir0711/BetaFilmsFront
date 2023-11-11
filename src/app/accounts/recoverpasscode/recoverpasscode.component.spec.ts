import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoverpasscodeComponent } from './recoverpasscode.component';

describe('RecoverpasscodeComponent', () => {
  let component: RecoverpasscodeComponent;
  let fixture: ComponentFixture<RecoverpasscodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecoverpasscodeComponent]
    });
    fixture = TestBed.createComponent(RecoverpasscodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
