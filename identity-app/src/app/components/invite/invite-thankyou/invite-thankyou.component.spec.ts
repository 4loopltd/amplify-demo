import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteThankyouComponent } from './invite-thankyou.component';

describe('InviteThankyouComponent', () => {
  let component: InviteThankyouComponent;
  let fixture: ComponentFixture<InviteThankyouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InviteThankyouComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteThankyouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
