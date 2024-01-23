import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirecteurLayoutComponent } from './directeur-layout.component';

describe('DirecteurLayoutComponent', () => {
  let component: DirecteurLayoutComponent;
  let fixture: ComponentFixture<DirecteurLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirecteurLayoutComponent]
    });
    fixture = TestBed.createComponent(DirecteurLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
