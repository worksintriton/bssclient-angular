import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosedcomplaintsComponent } from './closedcomplaints.component';

describe('ClosedcomplaintsComponent', () => {
  let component: ClosedcomplaintsComponent;
  let fixture: ComponentFixture<ClosedcomplaintsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClosedcomplaintsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosedcomplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
