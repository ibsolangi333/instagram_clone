import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowUserComponent } from './follow-user.component';

describe('FollowUserComponent', () => {
  let component: FollowUserComponent;
  let fixture: ComponentFixture<FollowUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FollowUserComponent]
    });
    fixture = TestBed.createComponent(FollowUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
