import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteLandingComponent } from './invite-landing.component';

describe('InviteLandingComponent', () => {
  let component: InviteLandingComponent;
  let fixture: ComponentFixture<InviteLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InviteLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
