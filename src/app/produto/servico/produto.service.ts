import { LinkService } from './../../../environments/environment';
import { Produto } from './produto-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  
  linkService = LinkService;

  constructor(private http: HttpClient) { }

  consultar(nome: string){
    return this.http.get(`${this.linkService}produto/consultar/${nome}`)
  }

  incluir(produto: Produto){
    return this.http.post(`${this.linkService}produto/incluir/`, produto)
  }

  alterar(produto: Produto){
    return this.http.patch(`${this.linkService}produto/alterarparcial/`, produto)
  }

  excluir(produto: Produto){
    return this.http.post(`${this.linkService}produto/remover/`, produto)
  }
}
