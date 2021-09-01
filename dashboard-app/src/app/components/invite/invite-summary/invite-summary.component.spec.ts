import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteSummaryComponent } from './invite-summary.component';

describe('InviteSummaryComponent', () => {
  let component: InviteSummaryComponent;
  let fixture: ComponentFixture<InviteSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InviteSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
