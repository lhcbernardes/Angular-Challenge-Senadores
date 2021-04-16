import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SenadoresComponent } from "./senadores/senadores.component";
import { DespesasSenadorComponent } from "./despesas-senador/despesas-senador.component";

const routes: Routes = [
  { path: "senadores", component: SenadoresComponent },
  { path: "senadores/:id", component: DespesasSenadorComponent },
  { path: "", redirectTo: "senadores", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
