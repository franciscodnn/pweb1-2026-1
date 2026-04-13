import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteSignal } from './teste-signal';

describe('TesteSignal', () => {
  let component: TesteSignal;
  let fixture: ComponentFixture<TesteSignal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TesteSignal],
    }).compileComponents();

    fixture = TestBed.createComponent(TesteSignal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
