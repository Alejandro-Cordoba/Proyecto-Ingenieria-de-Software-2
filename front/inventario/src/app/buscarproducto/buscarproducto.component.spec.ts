import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarproductoComponent } from './buscarproducto.component';

describe('BuscarproductoComponent', () => {
  let component: BuscarproductoComponent;
  let fixture: ComponentFixture<BuscarproductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarproductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarproductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
