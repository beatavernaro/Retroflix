import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { MatCardModule } from '@angular/material/card';
import { CardFilmeComponent } from './components/filme/card-filme/card-filme.component';
import { ListarFilmesComponent } from './components/filme/listar-filmes/listar-filmes.component';
import { MatButtonModule } from '@angular/material/button';
import { CriarFilmeComponent } from './components/filme/criar-filme/criar-filme.component';
import { MatInputModule } from '@angular/material/input';
import { CriarGeneroComponent } from './components/genero/criar-genero/criar-genero.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { FooterComponent } from './components/footer/footer.component';
import { MatTableModule } from '@angular/material/table';
import { ListarGenerosComponent } from './components/genero/listar-generos/listar-generos.component';
import { EditarFilmeComponent } from './components/filme/editar-filme/editar-filme.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ExcluirFilmeComponent } from './components/filme/excluir-filme/excluir-filme.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { EditarGeneroComponent } from './components/genero/editar-genero/editar-genero.component';
import { ExcluirGeneroComponent } from './components/genero/excluir-genero/excluir-genero.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListarFilmesComponent,
    CriarFilmeComponent,
    CriarGeneroComponent,
    FooterComponent,
    ListarGenerosComponent,
    EditarFilmeComponent,
    ExcluirFilmeComponent,
    EditarGeneroComponent,
    ExcluirGeneroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    CardFilmeComponent,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatTableModule,
    MatDialogModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
