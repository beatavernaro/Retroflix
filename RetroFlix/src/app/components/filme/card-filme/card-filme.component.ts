import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { Filme } from '../filme';
import { Genero } from '../../genero/genero';
import { GeneroService } from '../../genero/genero.service';

@Component({
  selector: 'app-card-filme',
  templateUrl: './card-filme.component.html',
  styleUrls: ['./card-filme.component.css'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule, RouterModule],
})
export class CardFilmeComponent {

  constructor(private generoService: GeneroService) {}

  @Input() filme: Filme = {
    id: 1,
    nomeFilme: 'O senhor dos anéis',
    diretor: 'Peter Jackson',
    duracao: 178,
    genero: 1,
    sinopse:
      'Em uma terra fantástica e única, um hobbit recebe de presente de seu tio um anel mágico e maligno que precisa ser destruído antes que caia nas mãos do mal. Para isso, o hobbit Frodo tem um caminho árduo pela frente, onde encontra perigo, medo e seres bizarros.',
    imagem:
      'https://br.web.img3.acsta.net/medias/nmedia/18/92/91/32/20224832.jpg',
  };

  @Input() genero: Genero = {
    id: 0,
    nome: '',
  };

  nomeGenero: string = '';

  ngOnInit(): void {
      this.generoService.getById(this.filme.genero).subscribe((data) =>
      this.nomeGenero = data.nome
      )
  }

}
