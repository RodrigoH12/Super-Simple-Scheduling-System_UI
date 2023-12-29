import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassInfoModalComponent } from './class-info-modal.component';

describe('ClassInfoModalComponent', () => {
  let component: ClassInfoModalComponent;
  let fixture: ComponentFixture<ClassInfoModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClassInfoModalComponent]
    });
    fixture = TestBed.createComponent(ClassInfoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
