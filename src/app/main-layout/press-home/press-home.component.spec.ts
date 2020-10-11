import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PressHomeComponent } from './press-home.component';

describe('PressHomeComponent', () => {
  let component: PressHomeComponent;
  let fixture: ComponentFixture<PressHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PressHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PressHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
