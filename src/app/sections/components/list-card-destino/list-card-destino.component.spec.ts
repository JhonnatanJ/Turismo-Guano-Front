import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCardDestinoComponent } from './list-card-destino.component';

describe('ListCardDestinoComponent', () => {
  let component: ListCardDestinoComponent;
  let fixture: ComponentFixture<ListCardDestinoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListCardDestinoComponent]
    });
    fixture = TestBed.createComponent(ListCardDestinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
