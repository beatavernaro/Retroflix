import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarGenerosComponent } from './listar-generos.component';

describe('ListarGenerosComponent', () => {
  let component: ListarGenerosComponent;
  let fixture: ComponentFixture<ListarGenerosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarGenerosComponent]
    });
    fixture = TestBed.createComponent(ListarGenerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
