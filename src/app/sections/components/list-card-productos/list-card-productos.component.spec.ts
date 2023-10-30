import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCardProductosComponent } from './list-card-productos.component';

describe('ListCardProductosComponent', () => {
  let component: ListCardProductosComponent;
  let fixture: ComponentFixture<ListCardProductosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListCardProductosComponent]
    });
    fixture = TestBed.createComponent(ListCardProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
