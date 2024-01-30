import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Genero } from '../genero';
import { GeneroService } from '../genero.service';

@Component({
  selector: 'app-listar-generos',
  templateUrl: './listar-generos.component.html',
  styleUrls: ['./listar-generos.component.css']
})

export class ListarGenerosComponent {
  constructor(private generoService: GeneroService) { };

  listaGenero: Genero[] = [];

  colunas: string[] = ['id', 'nome', 'acoes'];


  ngOnInit(): void {
    this.generoService.getGenero().subscribe((data) =>
      this.listaGenero = data,
    )
  };
}
