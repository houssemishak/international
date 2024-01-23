import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantLayoutComponent } from './consultant-layout.component';

describe('ConsultantLayoutComponent', () => {
  let component: ConsultantLayoutComponent;
  let fixture: ComponentFixture<ConsultantLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultantLayoutComponent]
    });
    fixture = TestBed.createComponent(ConsultantLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
