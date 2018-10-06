import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportdetialsComponent } from './reportdetials.component';

describe('ReportdetialsComponent', () => {
  let component: ReportdetialsComponent;
  let fixture: ComponentFixture<ReportdetialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportdetialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportdetialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
