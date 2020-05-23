import { Router, ActivatedRoute } from '@angular/router';
import { Produto } from './../servico/produto-model';
import { ProdutoService } from './../servico/produto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtomanter',
  templateUrl: './produtomanter.component.html',
  styleUrls: ['./produtomanter.component.scss']
})
export class ProdutomanterComponent implements OnInit {
  operacao: string = 'Incluir';
  produto: Produto = new Produto();

  incluir(){
    this.produtoService.incluir(this.produto).subscribe(data=>{
      alert(data['mensagem'])
      this.route.navigate(['/produto'])
    });
  }
  alterar(){
    this.produtoService.alterar(this.produto).subscribe(data=>{
      alert(data['mensagem'])
      this.route.navigate(['/produto'])
    });
  }

  voltar(){
    this.route.navigate(['/produto']);
  }

  constructor(private produtoService: ProdutoService, private route: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let nome: string = this.activatedRoute.snapshot.params.nome;
    if(nome != null){
      this.operacao = 'Alterar';
      this.produtoService.consultar(nome).subscribe(data =>{
        this.produto = (<Produto[]>data)[0];
      });
    }
  }

}
