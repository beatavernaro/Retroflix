import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarFilmeComponent } from './components/filme/criar-filme/criar-filme.component';
import { ListarFilmesComponent } from './components/filme/listar-filmes/listar-filmes.component';
import { CriarGeneroComponent } from './components/genero/criar-genero/criar-genero.component';
import { ListarGenerosComponent } from './components/genero/listar-generos/listar-generos.component';
import { EditarFilmeComponent } from './components/filme/editar-filme/editar-filme.component';
import { ExcluirFilmeComponent } from './components/filme/excluir-filme/excluir-filme.component';
import { EditarGeneroComponent } from './components/genero/editar-genero/editar-genero.component';
import { ExcluirGeneroComponent } from './components/genero/excluir-genero/excluir-genero.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'listarFilmes'
  },
  {
    path: 'criarFilme',
    component: CriarFilmeComponent
  },
  {
    path: 'listarFilmes',
    component: ListarFilmesComponent
  },
  {
    path: 'editarFilme/:id',
    component: EditarFilmeComponent
  },
  {
    path: 'excluirFilme/:id',
    component: ExcluirFilmeComponent
  },
  {
    path: 'listarGeneros',
    component: ListarGenerosComponent
  },
  {
    path: 'criarGenero',
    component: CriarGeneroComponent
  },
  {
    path: 'editarGenero/:id',
    component: EditarGeneroComponent
  },
  {
    path: 'excluirGenero/:id',
    component: ExcluirGeneroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
