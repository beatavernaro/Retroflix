import { Genero } from './../../genero/genero';
import { Component } from '@angular/core';
import { FilmeService } from '../filme.service';
import { Filme } from '../filme';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GeneroService } from '../../genero/genero.service';

@Component({
  selector: 'app-criar-filme',
  templateUrl: './criar-filme.component.html',
  styleUrls: ['./criar-filme.component.css'],
})
export class CriarFilmeComponent {
  form: FormGroup;

  constructor(
    private filmeService: FilmeService,
    private generoService: GeneroService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      nomeFilme: [null],
      diretor: [null],
      duracao: [null],
      genero: [null],
      sinopse: [null],
      imagem: [null],
    });
  }

  filme: Filme = {
    id: 0,
    nomeFilme: '',
    diretor: '',
    duracao: 0,
    genero: 10,
    sinopse: '',
    imagem: '',
  };

  listaGenero: Genero[] = [];

  ngOnInit(): void {
    this.generoService
      .getGenero()
      .subscribe((listaGenero) => (this.listaGenero = listaGenero));
  }

  onSubmit() {
    this.filme = this.form.value;
    this.filme.genero = this.form.value.genero.id;

    this.filmeService.postFilme(this.filme).subscribe();
  }

  onCancel() {}
}
