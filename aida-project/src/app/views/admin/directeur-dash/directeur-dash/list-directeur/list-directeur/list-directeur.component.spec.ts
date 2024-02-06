import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDirecteurComponent } from './list-directeur.component';

describe('ListDirecteurComponent', () => {
  let component: ListDirecteurComponent;
  let fixture: ComponentFixture<ListDirecteurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListDirecteurComponent]
    });
    fixture = TestBed.createComponent(ListDirecteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
