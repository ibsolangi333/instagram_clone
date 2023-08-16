import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthdateComponent } from './birthdate.component';

describe('BirthdateComponent', () => {
  let component: BirthdateComponent;
  let fixture: ComponentFixture<BirthdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BirthdateComponent]
    });
    fixture = TestBed.createComponent(BirthdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
