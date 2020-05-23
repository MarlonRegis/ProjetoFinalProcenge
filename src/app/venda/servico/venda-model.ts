import { VendaProduto } from './vendaproduto-model';
import { Cliente } from './../../cliente/servico/cliente-model';

export class Venda{
    codigo: string;
    data: Date;
    cliente: Cliente;
    listaVendaItem: VendaProduto[] = [];

}