import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteviewComponent } from './completeview.component';

describe('CompleteviewComponent', () => {
  let component: CompleteviewComponent;
  let fixture: ComponentFixture<CompleteviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompleteviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompleteviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
