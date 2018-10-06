import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedcomplaintComponent } from './completedcomplaint.component';

describe('CompletedcomplaintComponent', () => {
  let component: CompletedcomplaintComponent;
  let fixture: ComponentFixture<CompletedcomplaintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedcomplaintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedcomplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
