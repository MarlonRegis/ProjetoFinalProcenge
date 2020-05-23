import { Router } from '@angular/router';
import { VendaService } from './servico/venda.service';
import { Venda } from './servico/venda-model';
import { Component, OnInit } from '@angular/core';
import { FormGroup} from '@angular/forms'

@Component({
  selector: 'app-venda',
  templateUrl: './venda.component.html',
  styleUrls: ['./venda.component.scss']
})
export class VendaComponent implements OnInit {
  venda: Venda = new Venda();
  listavenda: Venda[];
  selecionado: Venda
  codigoVenda: string = '';


  pesquisar(){
    this.vendaService.consultar(this.codigoVenda).subscribe((data : Venda[])=>{
      this.listavenda = data;
    });
  }

  incluir(){
    this.route.navigate(['venda/incluir'])
  }
  
  excluir(){
    this.vendaService.remover(this.selecionado).subscribe(data =>{
      alert(data['mensagem']);
    });
  }

  selecionar(venda: Venda){
    this.selecionado = venda;
  }


  constructor(private vendaService: VendaService, private route: Router) { }

  ngOnInit(): void {
    this.pesquisar();
  }

}
