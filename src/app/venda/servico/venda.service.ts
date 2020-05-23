import { Venda } from './venda-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VendaService {

  consultar(nome: string) {
    return this.http.get("https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/venda/consultar/" + nome)
  }

  incluir(venda: Venda) {
    return this.http.post("https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/venda/incluir/", venda)
  }

  remover(venda: Venda){
    return this.http.post("https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/venda/remover/", venda)
  }

  constructor(private http: HttpClient) { }
}
