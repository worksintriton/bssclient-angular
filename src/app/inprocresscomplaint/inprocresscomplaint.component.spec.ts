import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InprocresscomplaintComponent } from './inprocresscomplaint.component';

describe('InprocresscomplaintComponent', () => {
  let component: InprocresscomplaintComponent;
  let fixture: ComponentFixture<InprocresscomplaintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InprocresscomplaintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InprocresscomplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
