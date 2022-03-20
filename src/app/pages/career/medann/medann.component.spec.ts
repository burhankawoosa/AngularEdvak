import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedannComponent } from './medann.component';

describe('MedannComponent', () => {
  let component: MedannComponent;
  let fixture: ComponentFixture<MedannComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedannComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedannComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
