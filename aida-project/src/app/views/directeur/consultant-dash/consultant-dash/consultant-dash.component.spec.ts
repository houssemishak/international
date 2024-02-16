import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantDashComponent } from './consultant-dash.component';

describe('ConsultantDashComponent', () => {
  let component: ConsultantDashComponent;
  let fixture: ComponentFixture<ConsultantDashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultantDashComponent]
    });
    fixture = TestBed.createComponent(ConsultantDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
