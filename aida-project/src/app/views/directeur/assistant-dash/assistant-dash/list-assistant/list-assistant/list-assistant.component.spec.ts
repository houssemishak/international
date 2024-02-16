import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAssistantComponent } from './list-assistant.component';

describe('ListAssistantComponent', () => {
  let component: ListAssistantComponent;
  let fixture: ComponentFixture<ListAssistantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListAssistantComponent]
    });
    fixture = TestBed.createComponent(ListAssistantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
