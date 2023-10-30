import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridCardDestinoComponent } from './grid-card-destino.component';

describe('GridCardDestinoComponent', () => {
  let component: GridCardDestinoComponent;
  let fixture: ComponentFixture<GridCardDestinoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GridCardDestinoComponent]
    });
    fixture = TestBed.createComponent(GridCardDestinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
