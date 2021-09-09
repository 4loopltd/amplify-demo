import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteVerifyComponent } from './invite-verify.component';

describe('InviteVerifyComponent', () => {
  let component: InviteVerifyComponent;
  let fixture: ComponentFixture<InviteVerifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InviteVerifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
