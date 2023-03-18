import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoConversionComponent } from './resultado-conversion.component';

describe('ResultadoConversionComponent', () => {
  let component: ResultadoConversionComponent;
  let fixture: ComponentFixture<ResultadoConversionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadoConversionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultadoConversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
