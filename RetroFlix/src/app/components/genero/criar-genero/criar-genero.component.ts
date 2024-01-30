import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Genero } from '../../genero/genero';
import { GeneroService } from '../../genero/genero.service';


@Component({
  selector: 'app-criar-genero',
  templateUrl: './criar-genero.component.html',
  styleUrls: ['./criar-genero.component.css']
})
export class CriarGeneroComponent {

  form: FormGroup;

  constructor(
    private generoService: GeneroService,
    private router: Router,
    private formBuilder: FormBuilder) {

    this.form = this.formBuilder.group({
      nome: [null],
    })
  };
  genero: Genero = {
    id: 0,
    nome: ''
  }

  onSubmit() {
    this.generoService.postGenero(this.form.value).subscribe()
  }

  onCancel() {

  }

}
