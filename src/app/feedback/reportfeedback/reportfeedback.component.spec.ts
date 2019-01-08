import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportfeedbackComponent } from './reportfeedback.component';

describe('ReportfeedbackComponent', () => {
  let component: ReportfeedbackComponent;
  let fixture: ComponentFixture<ReportfeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportfeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportfeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
