import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewfeedbackComponent } from './newfeedback.component';

describe('NewfeedbackComponent', () => {
  let component: NewfeedbackComponent;
  let fixture: ComponentFixture<NewfeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewfeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewfeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
