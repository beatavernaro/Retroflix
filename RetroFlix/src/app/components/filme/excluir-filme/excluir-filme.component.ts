import { Component } from '@angular/core';
import { Filme } from '../filme';
import { FilmeService } from '../filme.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-excluir-filme',
  templateUrl: './excluir-filme.component.html',
  styleUrls: ['./excluir-filme.component.css']
})
export class ExcluirFilmeComponent {

  filme: Filme = {
    id: 0,
    nomeFilme: '',
    diretor: '',
    duracao: 0,
    genero: 1,
    sinopse: '',
    imagem: ''
  }

  constructor(private filmeService: FilmeService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.filmeService.getById(parseInt(id!)).subscribe((data) => {
      this.filme = data
    })
  }

  onDelete() {
    this.filmeService.deleteFilme(this.filme.id).subscribe(() => {
      this.router.navigate(['/listarFilmes'])
    })
  }
}
