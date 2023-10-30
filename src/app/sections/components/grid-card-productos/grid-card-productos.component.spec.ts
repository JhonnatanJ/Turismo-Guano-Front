import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridCardProductosComponent } from './grid-card-productos.component';

describe('GridCardProductosComponent', () => {
  let component: GridCardProductosComponent;
  let fixture: ComponentFixture<GridCardProductosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GridCardProductosComponent]
    });
    fixture = TestBed.createComponent(GridCardProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
