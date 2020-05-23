import { Router } from '@angular/router';
import { ProdutoService } from './servico/produto.service';
import { Produto } from './servico/produto-model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {

  nome: string = '';
  produto : Produto;
  listaproduto: Produto[];
  selecionado: Produto;

  selecionar(produto: Produto){
    this.selecionado = produto;
  }

  pesquisar(){
    console.log(this.nome)
    this.produtoService.consultar(this.nome).subscribe((data: Produto[])=>{
      this.listaproduto = data;
    });
  }

  incluir(){
    this.route.navigate(['produto/incluir']);
  }

  alterar(){
    this.route.navigate(['produto/alterar/' + this.selecionado.nome])
  }

  excluir(){
    this.produtoService.excluir(this.selecionado).subscribe(data=>{
        alert(data['mensagem'])
      })
  }

  constructor(private produtoService: ProdutoService, private route: Router) { }

  ngOnInit(): void {
    this.pesquisar();
  }

}
