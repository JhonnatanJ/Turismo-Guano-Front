import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnDestinosComponent } from './column-destino.component';

describe('ColumnDestinosComponent', () => {
  let component: ColumnDestinosComponent;
  let fixture: ComponentFixture<ColumnDestinosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColumnDestinosComponent]
    });
    fixture = TestBed.createComponent(ColumnDestinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
