import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteCompleteComponent } from './invite-complete.component';

describe('InviteCompleteComponent', () => {
  let component: InviteCompleteComponent;
  let fixture: ComponentFixture<InviteCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InviteCompleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
