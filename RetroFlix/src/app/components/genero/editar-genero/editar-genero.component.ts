import { Component, Input } from '@angular/core';
import { Genero } from '../genero';
import { GeneroService } from '../genero.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-editar-genero',
  templateUrl: './editar-genero.component.html',
  styleUrls: ['./editar-genero.component.css']
})
export class EditarGeneroComponent {
  form: FormGroup

  constructor(private generoService: GeneroService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,) {
    this.form = this.formBuilder.group({
      nome: [null]
    })
  }

  @Input() genero: Genero = {
    id: 0,
    nome: ''
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.generoService.getById(parseInt(id!)).subscribe((data) => {
      this.genero = data
    })
  }

  onEdit(){
    this.generoService.putGenero(this.genero).subscribe(() => {
      this.router.navigate(['/listarGeneros'])
    })
  }
}
