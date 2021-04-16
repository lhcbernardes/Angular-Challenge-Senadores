import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SenadoresService, Despesa } from '../senadores.service';

interface TotalPorTipo {
  tipo: number;
  valor: number;
}

@Component({
  selector: 'app-despesas-senador',
  templateUrl: './despesas-senador.component.html',
  styleUrls: ['./despesas-senador.component.css']
})
export class DespesasSenadorComponent implements OnInit {

  nomeSenador = "";
  despesas: Despesa[] = [];
  totais: TotalPorTipo[] = [];
  valorTotal = 0;

  constructor(private senadoresService: SenadoresService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = parseInt(params.get("id")!);
      this.senadoresService.getDespesasSenador(id).subscribe(despesasSenador => {
        this.nomeSenador = despesasSenador.nomeSenador;
        this.despesas = despesasSenador.despesas;
        this.totais = this.calculaTotaisPorTipo(despesasSenador.despesas);
        this.calculaTotal(despesasSenador.despesas);
      });
    });
  }

  calculaTotaisPorTipo(despesas: Despesa[]) {
    const totais: TotalPorTipo[] = [];
    for (let tipo = 1; tipo <= 7; tipo++) {
      const total = {tipo: tipo, valor: 0};
      for (const despesa of despesas) {
        if (tipo === despesa.tipo) {
          total.valor += despesa.valor;
        }
      }
      totais.push(total);
    }
    return totais;
  }

  calculaTotal(despesas: Despesa[]) {
    this.valorTotal = 0;
    for (const despesa of despesas) {
      this.valorTotal += despesa.valor;
    }
  }
}
