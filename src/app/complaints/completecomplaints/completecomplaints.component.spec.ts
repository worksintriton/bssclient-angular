import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletecomplaintsComponent } from './completecomplaints.component';

describe('CompletecomplaintsComponent', () => {
  let component: CompletecomplaintsComponent;
  let fixture: ComponentFixture<CompletecomplaintsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletecomplaintsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletecomplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
