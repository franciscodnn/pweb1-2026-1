import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnTheme } from './btn-theme';

describe('BtnTheme', () => {
  let component: BtnTheme;
  let fixture: ComponentFixture<BtnTheme>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnTheme],
    }).compileComponents();

    fixture = TestBed.createComponent(BtnTheme);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
