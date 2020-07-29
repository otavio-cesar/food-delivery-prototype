import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthService {

  url = environment.ApiURL + '/Usuario/Login';

  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'text/plain' }) };

  helper: JwtHelperService;

  constructor(private router: Router, private http: HttpClient) {
    this.helper = new JwtHelperService();
  }

  getToken(): string {
    return localStorage.getItem('token');
  }

  isAuthenticated(): boolean {
    // get the token
    const token = this.getToken();
    // return a boolean reflecting 
    // whether or not the token is expired
    return this.helper.isTokenExpired(token);
  }

  fazerLogin(email: string, senha: string): Observable<any> {
    return this.http.post<any>(this.url, { username: "robin", password: "robin" }, this.httpOptions);
  }

  salvarSessaoUsuario(funcionario: any) {
    localStorage.setItem("Id", funcionario.FuncionarioId.toString());
    localStorage.setItem("Nome", funcionario.Nome);
    localStorage.setItem("Nome colaborador", funcionario.Colaborador.Nome);
    localStorage.setItem("isAdmin", funcionario.Colaborador.Classificacao == 0 ? "true" : "false");
  }

  getUsuarioLogado(): { nome: string, id: number, isAdmin: string } {
    if (localStorage.getItem("Nome") != null) {
      return {
        nome: localStorage.getItem("Nome"),
        id: +localStorage.getItem("Id"),
        isAdmin: localStorage.getItem("isAdmin")
      }
    } else {
      return undefined
    }
  }

  deslogarUsuario() {
    localStorage.removeItem("Nome colaborador");
    localStorage.removeItem("Nome");
    localStorage.removeItem("Id");
    localStorage.removeItem("isAdmin");
  }

}
