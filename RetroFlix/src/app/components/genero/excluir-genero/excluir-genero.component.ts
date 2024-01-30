import { Component } from '@angular/core';
import { Genero } from '../genero';
import { GeneroService } from '../genero.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-excluir-genero',
  templateUrl: './excluir-genero.component.html',
  styleUrls: ['./excluir-genero.component.css']
})
export class ExcluirGeneroComponent {
  genero: Genero = {
    id: 0,
    nome: ''
  }

  constructor(private generoService: GeneroService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.generoService.getById(parseInt(id!)).subscribe((data) => {
      this.genero = data
    })
  }

  onDelete() {
    debugger;
    this.generoService.deleteGenero(this.genero.id).subscribe(()=>{
      this.router.navigate(['/listarGeneros'])
    })
  }
}
