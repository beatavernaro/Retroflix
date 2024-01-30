import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarFilmeComponent } from './criar-filme.component';

describe('CriarFilmeComponent', () => {
  let component: CriarFilmeComponent;
  let fixture: ComponentFixture<CriarFilmeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarFilmeComponent]
    });
    fixture = TestBed.createComponent(CriarFilmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
