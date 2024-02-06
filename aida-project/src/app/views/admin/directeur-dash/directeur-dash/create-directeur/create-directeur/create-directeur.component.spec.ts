import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDirecteurComponent } from './create-directeur.component';

describe('CreateDirecteurComponent', () => {
  let component: CreateDirecteurComponent;
  let fixture: ComponentFixture<CreateDirecteurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateDirecteurComponent]
    });
    fixture = TestBed.createComponent(CreateDirecteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
