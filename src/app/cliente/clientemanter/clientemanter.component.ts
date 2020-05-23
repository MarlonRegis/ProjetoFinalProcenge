import { Router, ActivatedRoute } from '@angular/router';
import { ClienteService } from './../servico/cliente.service';
import { Cliente } from './../servico/cliente-model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientemanter',
  templateUrl: './clientemanter.component.html',
  styleUrls: ['./clientemanter.component.scss']
})
export class ClientemanterComponent implements OnInit {

  cliente: Cliente = new Cliente();
  operacao: string = 'Incluir';

  incluir() {
    this.clienteService.incluir(this.cliente).subscribe(
      data => {
        alert(data['mensagem']);
        this.route.navigate(['/cliente']);
      });
  }
  
  alterar() {
    this.clienteService.alterar(this.cliente).subscribe(data=> {
        alert(data['mensagem']);
        this.route.navigate(['/cliente'])
    })
  }
  
  
  voltar() {
    this.route.navigate(['/cliente'])
  }
  
  constructor(private clienteService: ClienteService,
    private route: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    let nome: string = this.activatedRoute.snapshot.params.nome;
    if (nome != null) {
      this.operacao = 'Alterar';
      this.clienteService.consultar(nome).subscribe(
        data => {
          this.cliente = (<Cliente[]>data)[0];
        }
      );
    }
  }
}
