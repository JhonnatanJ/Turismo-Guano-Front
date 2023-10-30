import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarruselDestinosComponent } from './carrusel-destinos.component';

describe('CarruselDestinosComponent', () => {
  let component: CarruselDestinosComponent;
  let fixture: ComponentFixture<CarruselDestinosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarruselDestinosComponent]
    });
    fixture = TestBed.createComponent(CarruselDestinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
