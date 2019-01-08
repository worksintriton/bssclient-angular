import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcomplaintsComponent } from './editcomplaints.component';

describe('EditcomplaintsComponent', () => {
  let component: EditcomplaintsComponent;
  let fixture: ComponentFixture<EditcomplaintsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditcomplaintsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditcomplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
