import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackhistrotyComponent } from './feedbackhistroty.component';

describe('FeedbackhistrotyComponent', () => {
  let component: FeedbackhistrotyComponent;
  let fixture: ComponentFixture<FeedbackhistrotyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedbackhistrotyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackhistrotyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
