import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Senador {
  id: number;
  nomeSenador: string;
}

export interface Despesa {
  tipo: number,
  fornec: string,
  ano: number,
  mes: number,
  dia: number,
  valor: number
}

export interface DespesasSenador {
  id: number;
  nomeSenador: string;
  despesas: Despesa[];
}

@Injectable({
  providedIn: 'root'
})
export class SenadoresService {

  constructor(private httpClient: HttpClient) { }

  getSenadores() {
    return this.httpClient.get<Senador[]>("http://localhost:3000/senadores");
  }

  getDespesasSenador(id: number) {
    return this.httpClient.get<DespesasSenador>("http://localhost:3000/despesasSenadores/" + id);
  }
}
