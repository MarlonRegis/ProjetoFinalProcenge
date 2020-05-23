import { Cliente } from './cliente-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  consultar(nome: string){
    return this.http.get("https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/cliente/consultar/" + nome)
  }

  incluir(cliente: Cliente){
    return this.http.post("https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/cliente/incluir/", cliente)
  }

  alterar(cliente: Cliente){
    return this.http.patch("https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/cliente/alterarparcial/", cliente)
  }

  remover(cliente: Cliente){
    return this.http.post("https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/cliente/remover", cliente)
  }

  constructor(private http: HttpClient) { }
}
