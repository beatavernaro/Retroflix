import { GeneroService } from './../../genero/genero.service';
import { Component } from '@angular/core';
import { Filme } from '../filme';
import { FilmeService } from '../filme.service';

@Component({
  selector: 'app-listar-filmes',
  templateUrl: './listar-filmes.component.html',
  styleUrls: ['./listar-filmes.component.css'],
})
export class ListarFilmesComponent {
  constructor(
    private filmeService: FilmeService
  ) {}

  listaFilmes: Filme[] = [];

  ngOnInit(): void {
    this.filmeService
      .getFilmes()
      .subscribe((data) => (this.listaFilmes = data));


  }
}
