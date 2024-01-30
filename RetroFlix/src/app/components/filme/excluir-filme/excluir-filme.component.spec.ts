import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirFilmeComponent } from './excluir-filme.component';

describe('ExcluirFilmeComponent', () => {
  let component: ExcluirFilmeComponent;
  let fixture: ComponentFixture<ExcluirFilmeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExcluirFilmeComponent]
    });
    fixture = TestBed.createComponent(ExcluirFilmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
