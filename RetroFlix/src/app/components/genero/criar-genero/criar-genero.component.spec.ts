import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarGeneroComponent } from './criar-genero.component';

describe('CriarGeneroComponent', () => {
  let component: CriarGeneroComponent;
  let fixture: ComponentFixture<CriarGeneroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarGeneroComponent]
    });
    fixture = TestBed.createComponent(CriarGeneroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
