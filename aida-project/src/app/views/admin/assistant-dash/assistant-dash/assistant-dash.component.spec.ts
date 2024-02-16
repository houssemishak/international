import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistantDashComponent } from './assistant-dash.component';

describe('AssistantDashComponent', () => {
  let component: AssistantDashComponent;
  let fixture: ComponentFixture<AssistantDashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssistantDashComponent]
    });
    fixture = TestBed.createComponent(AssistantDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
