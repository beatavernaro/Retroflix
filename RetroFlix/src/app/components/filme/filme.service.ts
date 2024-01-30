import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Filme } from './filme';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {

  private readonly API = "https://localhost:7070/Filme";
  constructor(private http: HttpClient) { }

  getFilmes(): Observable<Filme[]> {
    return this.http.get<Filme[]>(this.API)
  }

  getById(id: number): Observable<Filme> {
    const url = `${this.API}/${id}`
    return this.http.get<Filme>(url)
  }

  postFilme(filme: Filme): Observable<Filme> {
    return this.http.post<Filme>(this.API, filme)
  }

  putFilme(filme: Filme): Observable<Filme> {
    const url = `${this.API}/${filme.id}`
    filme.id = filme.id;
    return this.http.put<Filme>(url, filme)
  }

  deleteFilme(id: number) {
    const url = `${this.API}/${id}`
    return this.http.delete<Filme>(url)
  }

}
