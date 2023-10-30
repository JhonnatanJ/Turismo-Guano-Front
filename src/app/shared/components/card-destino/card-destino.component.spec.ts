import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDestinoComponent } from './card-destino.component';

describe('CardDestinoComponent', () => {
  let component: CardDestinoComponent;
  let fixture: ComponentFixture<CardDestinoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardDestinoComponent]
    });
    fixture = TestBed.createComponent(CardDestinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
