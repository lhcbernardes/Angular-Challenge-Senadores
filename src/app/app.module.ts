import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SenadoresComponent } from './senadores/senadores.component';
import { DespesasSenadorComponent } from './despesas-senador/despesas-senador.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';


import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { DescTipoPipe } from './desc-tipo.pipe';
registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    SenadoresComponent,
    DespesasSenadorComponent,
    DescTipoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTableModule,
    MatListModule,
    HttpClientModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
