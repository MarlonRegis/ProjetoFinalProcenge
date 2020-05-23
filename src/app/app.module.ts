import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { ClienteComponent } from './cliente/cliente.component';
import { HttpClientModule } from '@angular/common/http';
import { ClientemanterComponent } from './cliente/clientemanter/clientemanter.component';
import { ProdutoComponent } from './produto/produto.component';
import { ProdutomanterComponent } from './produto/produtomanter/produtomanter.component';
import { VendaComponent } from './venda/venda.component';
import { VendamanterComponent } from './venda/vendamanter/vendamanter.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LayoutComponent,
    ClienteComponent,
    ClientemanterComponent,
    ProdutoComponent,
    ProdutomanterComponent,
    VendaComponent,
    VendamanterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
