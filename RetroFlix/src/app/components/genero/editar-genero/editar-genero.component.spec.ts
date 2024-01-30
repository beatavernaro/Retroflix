import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarGeneroComponent } from './editar-genero.component';

describe('EditarGeneroComponent', () => {
  let component: EditarGeneroComponent;
  let fixture: ComponentFixture<EditarGeneroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarGeneroComponent]
    });
    fixture = TestBed.createComponent(EditarGeneroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
