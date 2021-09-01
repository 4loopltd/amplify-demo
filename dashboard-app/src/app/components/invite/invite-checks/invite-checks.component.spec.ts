import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteChecksComponent } from './invite-checks.component';

describe('InviteChecksComponent', () => {
  let component: InviteChecksComponent;
  let fixture: ComponentFixture<InviteChecksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InviteChecksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteChecksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
