import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarFilmesComponent } from './listar-filmes.component';

describe('ListarFilmesComponent', () => {
  let component: ListarFilmesComponent;
  let fixture: ComponentFixture<ListarFilmesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarFilmesComponent]
    });
    fixture = TestBed.createComponent(ListarFilmesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
