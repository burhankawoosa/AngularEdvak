import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticemanagmentComponent } from './practicemanagment.component';

describe('PracticemanagmentComponent', () => {
  let component: PracticemanagmentComponent;
  let fixture: ComponentFixture<PracticemanagmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticemanagmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticemanagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
