import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Genero } from '../genero/genero';
import { FocusMonitor } from '@angular/cdk/a11y';
import { Form } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class GeneroService {
  private readonly API = 'https://localhost:7070/api/Genero';
  constructor(private http: HttpClient) {}

  getGenero(): Observable<Genero[]> {
    const url = `${this.API}`
    return this.http.get<Genero[]>(url);
  }

  getById(id: number): Observable<Genero> {
    const url = `${this.API}/${id}`;
    return this.http.get<Genero>(url);
  }
  postGenero(genero: Genero): Observable<Genero> {
    const url = `${this.API}`
    return this.http.post<Genero>(url, genero);
  }

  putGenero(genero: Genero): Observable<Genero> {
    const url = `${this.API}/${genero.id}`
    return this.http.put<Genero>(url, genero)
  }

  deleteGenero(id: number) {
    const url = `${this.API}/DeleteGeneroId/${id}`
    return this.http.delete<Genero>(url)
  }
}
