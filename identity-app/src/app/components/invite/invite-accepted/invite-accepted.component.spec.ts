import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteAcceptedComponent } from './invite-accepted.component';

describe('InviteAcceptedComponent', () => {
  let component: InviteAcceptedComponent;
  let fixture: ComponentFixture<InviteAcceptedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InviteAcceptedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteAcceptedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
