import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetDashComponent } from './projet-dash.component';

describe('ProjetDashComponent', () => {
  let component: ProjetDashComponent;
  let fixture: ComponentFixture<ProjetDashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjetDashComponent]
    });
    fixture = TestBed.createComponent(ProjetDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
