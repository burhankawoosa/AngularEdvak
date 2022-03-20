import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftengComponent } from './softeng.component';

describe('SoftengComponent', () => {
  let component: SoftengComponent;
  let fixture: ComponentFixture<SoftengComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftengComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftengComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
