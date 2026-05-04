import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSave } from './form-save';

describe('FormSave', () => {
  let component: FormSave;
  let fixture: ComponentFixture<FormSave>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormSave],
    }).compileComponents();

    fixture = TestBed.createComponent(FormSave);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
