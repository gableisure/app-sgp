import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  baseUrlPessoa = `${environment.baseUrlApi}/pessoas`;
  baseUrlPerfil = `${environment.baseUrlApi}/perfis`;

  constructor(private http: HttpClient) { }

  getAllPessoa = (): Observable<any> => this.http.get<any>(this.baseUrlPessoa);

  getPessoaById(id: string): Observable<any> {
    const url = `${this.baseUrlPessoa}/${id}`;
    return this.http.get<any>(url);
  }

  getAllPerfil = (): Observable<any> => this.http.get<any>(this.baseUrlPerfil);

}
