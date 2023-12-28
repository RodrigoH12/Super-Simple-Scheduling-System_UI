import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserClassesCardComponent } from './user-classes-card.component';

describe('UserClassesCardComponent', () => {
  let component: UserClassesCardComponent;
  let fixture: ComponentFixture<UserClassesCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserClassesCardComponent]
    });
    fixture = TestBed.createComponent(UserClassesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
