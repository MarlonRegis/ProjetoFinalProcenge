import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  public home = true;
  public cliente = false;
  public produto = false;
  public venda = false;

  public setHome(){
    this.home = true;
    this.cliente = false;
    this.produto = false;
    this.venda = false
  }
  public setCliente(){
    this.home = false;
    this.cliente = true;
    this.produto = false;
    this.venda = false
  }
  public setProduto(){
    this.home = false;
    this.cliente = false;
    this.produto = true;
    this.venda = false
  }
  
  public setVenda(){
    this.home = false;
    this.cliente = false;
    this.produto = false;
    this.venda = true;
  }

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void { }

}
