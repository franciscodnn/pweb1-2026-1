import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbasProblema } from './abas-problema';

describe('AbasProblema', () => {
  let component: AbasProblema;
  let fixture: ComponentFixture<AbasProblema>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbasProblema],
    }).compileComponents();

    fixture = TestBed.createComponent(AbasProblema);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
