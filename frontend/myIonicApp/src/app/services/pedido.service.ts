import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { Pedido } from '../models/pedido';

@Injectable()
export class PedidoService {

    private pedidoUrl = `${environment.ApiURL}/pedido`

    constructor(
        private router: Router,
        private http: HttpClient
    ) { }
}
