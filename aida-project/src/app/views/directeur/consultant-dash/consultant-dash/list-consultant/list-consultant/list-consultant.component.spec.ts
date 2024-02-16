import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListConsultantComponent } from './list-consultant.component';

describe('ListConsultantComponent', () => {
  let component: ListConsultantComponent;
  let fixture: ComponentFixture<ListConsultantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListConsultantComponent]
    });
    fixture = TestBed.createComponent(ListConsultantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
