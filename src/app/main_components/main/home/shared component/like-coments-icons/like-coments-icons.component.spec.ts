import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeComentsIconsComponent } from './like-coments-icons.component';

describe('LikeComentsIconsComponent', () => {
  let component: LikeComentsIconsComponent;
  let fixture: ComponentFixture<LikeComentsIconsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LikeComentsIconsComponent]
    });
    fixture = TestBed.createComponent(LikeComentsIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
