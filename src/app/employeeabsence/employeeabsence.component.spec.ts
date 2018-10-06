import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeabsenceComponent } from './employeeabsence.component';

describe('EmployeeabsenceComponent', () => {
  let component: EmployeeabsenceComponent;
  let fixture: ComponentFixture<EmployeeabsenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeabsenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeabsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
