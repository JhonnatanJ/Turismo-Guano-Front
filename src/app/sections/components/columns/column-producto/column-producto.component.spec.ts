import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnProductoComponent } from './column-producto.component';

describe('ColumnProductoComponent', () => {
  let component: ColumnProductoComponent;
  let fixture: ComponentFixture<ColumnProductoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColumnProductoComponent]
    });
    fixture = TestBed.createComponent(ColumnProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
