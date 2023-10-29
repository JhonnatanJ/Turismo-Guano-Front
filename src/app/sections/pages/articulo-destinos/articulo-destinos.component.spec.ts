import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticuloDestinosComponent } from './articulo-destinos.component';

describe('ArticuloDestinosComponent', () => {
  let component: ArticuloDestinosComponent;
  let fixture: ComponentFixture<ArticuloDestinosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArticuloDestinosComponent]
    });
    fixture = TestBed.createComponent(ArticuloDestinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
