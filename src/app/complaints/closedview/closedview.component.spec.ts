import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosedviewComponent } from './closedview.component';

describe('ClosedviewComponent', () => {
  let component: ClosedviewComponent;
  let fixture: ComponentFixture<ClosedviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClosedviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosedviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
