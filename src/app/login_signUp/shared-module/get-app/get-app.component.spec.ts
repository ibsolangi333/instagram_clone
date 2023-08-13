import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAppComponent } from './get-app.component';

describe('GetAppComponent', () => {
  let component: GetAppComponent;
  let fixture: ComponentFixture<GetAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetAppComponent]
    });
    fixture = TestBed.createComponent(GetAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
