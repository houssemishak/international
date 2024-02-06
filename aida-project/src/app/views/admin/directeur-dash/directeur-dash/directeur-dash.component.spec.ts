import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirecteurDashComponent } from './directeur-dash.component';

describe('DirecteurDashComponent', () => {
  let component: DirecteurDashComponent;
  let fixture: ComponentFixture<DirecteurDashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirecteurDashComponent]
    });
    fixture = TestBed.createComponent(DirecteurDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
