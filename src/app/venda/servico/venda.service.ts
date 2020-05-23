import { LinkService } from './../../../environments/environment';
import { Venda } from './venda-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VendaService {
  linkService = LinkService

  consultar(nome: string) {
    return this.http.get(`${this.linkService}venda/consultar/${nome}`)
  }

  incluir(venda: Venda) {
    return this.http.post(`${this.linkService}venda/incluir/`, venda)
  }

  remover(venda: Venda){
    return this.http.post(`${this.linkService}venda/remover/`, venda)
  }

  constructor(private http: HttpClient) { }
}
