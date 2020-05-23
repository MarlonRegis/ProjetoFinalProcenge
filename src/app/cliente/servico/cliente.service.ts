import { LinkService } from './../../../environments/environment';
import { Cliente } from './cliente-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  linkService = LinkService;

  consultar(nome: string){
    return this.http.get(`${this.linkService}cliente/consultar/${nome}`)
  }

  incluir(cliente: Cliente){
    return this.http.post(`${this.linkService}cliente/incluir/`, cliente)
  }

  alterar(cliente: Cliente){
    return this.http.patch(`${this.linkService}cliente/alterarparcial/`, cliente)
  }

  remover(cliente: Cliente){
    return this.http.post(`${this.linkService}cliente/remover`, cliente)
  }

  constructor(private http: HttpClient) { }
}
