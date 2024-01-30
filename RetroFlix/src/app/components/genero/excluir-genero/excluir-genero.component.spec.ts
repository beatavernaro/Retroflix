import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirGeneroComponent } from './excluir-genero.component';

describe('ExcluirGeneroComponent', () => {
  let component: ExcluirGeneroComponent;
  let fixture: ComponentFixture<ExcluirGeneroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExcluirGeneroComponent]
    });
    fixture = TestBed.createComponent(ExcluirGeneroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
