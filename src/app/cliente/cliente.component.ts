import { Cliente } from './servico/cliente-model';
import { ClienteService } from './servico/cliente.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  cliente: Cliente;
  listaCliente: Cliente[];
  nome: string = '';
  selecionado: Cliente;

  
  pesquisar(){
    this.clienteService.consultar(this.nome).subscribe((data: Cliente[]) => {
      this.listaCliente = data;
    })
  }

  selecionar(cliente: Cliente){
    this.selecionado = cliente
  }

  excluir(){
    this.clienteService.remover(this.selecionado).subscribe(data => {
      alert(data['mensagem'])
    })
  }

  incluir(){
    this.route.navigate(['cliente/incluir'])
  }

  alterar(){
    this.route.navigate(['cliente/alterar/' + this.selecionado.nome])
  }

  constructor(private clienteService: ClienteService, private route: Router) { }

  ngOnInit(): void {
    this.pesquisar()
  }

}
