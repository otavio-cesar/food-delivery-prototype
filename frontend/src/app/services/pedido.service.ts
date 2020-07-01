import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { Pedido } from '../models/pedido';

@Injectable()
export class PedidoService {

    private pedidoUrl = `${environment.apiUrl}/pedido`

    constructor(
        private router: Router,
        private http: HttpClient
    ) { }
    // https://angular.io/api/common/http/HttpInterceptor
    // https://angular.io/guide/http#intercepting-requests-and-responses
    buscaCpf(): Observable<any> {
        return this.http.get<any>(
            "https://viacep.com.br/ws/01001000/json/"
        );
        // return this.http.get<Pedido[]>(
        //     this.pedidoUrl
        // );
    }
}
