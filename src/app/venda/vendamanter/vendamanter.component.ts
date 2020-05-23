import { Router } from '@angular/router';
import { VendaService } from './../servico/venda.service';
import { Venda } from './../servico/venda-model';
import { VendaProduto } from './../servico/vendaproduto-model';
import { ProdutoService } from './../../produto/servico/produto.service';
import { Produto } from './../../produto/servico/produto-model';
import { ClienteService } from './../../cliente/servico/cliente.service';
import { Cliente } from './../../cliente/servico/cliente-model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendamanter',
  templateUrl: './vendamanter.component.html',
  styleUrls: ['./vendamanter.component.scss']
})
export class VendamanterComponent implements OnInit {
  
  cliente: Cliente;
  produto: Produto;

  listaclientes: Cliente[];
  listaprodutos: Produto[];

  vendaProduto: VendaProduto = new VendaProduto();
  venda: Venda = new Venda();

  incluirProduto(){
    this.venda.listaVendaItem.push(this.vendaProduto);
    this.vendaProduto = new VendaProduto;
  }
  
  remover(vendaProduto: VendaProduto){

  }

  incluir(){
    this.vendaService.incluir(this.venda).subscribe(data=> {
      alert(data['mensagem']);
      this.route.navigate(['venda'])
    })
  }

  voltar(){
    this.route.navigate(['venda']);
  }

  constructor(private clienteService: ClienteService, 
    private produtoService: ProdutoService,
    private vendaService: VendaService,
    private route: Router) { }

  ngOnInit(): void {
    this.clienteService.consultar('').subscribe((data: Cliente[]) => {
      this.listaclientes = data;
    });

    this.produtoService.consultar('').subscribe((data: Produto[])=>{
      this.listaprodutos = data;
    })

  }

}
