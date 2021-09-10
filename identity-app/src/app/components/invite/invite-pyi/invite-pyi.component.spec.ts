import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitePYIComponent } from './invite-pyi.component';

describe('InvitePYIComponent', () => {
  let component: InvitePYIComponent;
  let fixture: ComponentFixture<InvitePYIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvitePYIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitePYIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
