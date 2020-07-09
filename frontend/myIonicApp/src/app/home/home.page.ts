import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../services/pedido.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private pedidoService: PedidoService
  ) { }

  ngOnInit(): void {
    this.pedidoService.buscaCpf().subscribe(
      cpf => {
        console.log(cpf)
      }, error =>{
        console.log(error)
      })
  }
}
