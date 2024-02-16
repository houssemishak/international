import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientDashComponent } from './client-dash.component';

describe('ClientDashComponent', () => {
  let component: ClientDashComponent;
  let fixture: ComponentFixture<ClientDashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientDashComponent]
    });
    fixture = TestBed.createComponent(ClientDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
