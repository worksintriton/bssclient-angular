import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcomplaintsComponent } from './newcomplaints.component';

describe('NewcomplaintsComponent', () => {
  let component: NewcomplaintsComponent;
  let fixture: ComponentFixture<NewcomplaintsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewcomplaintsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcomplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
