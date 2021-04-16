import { Component, OnInit } from "@angular/core";
import { SenadoresService, Senador } from "../senadores.service";

@Component({
  selector: "app-senadores",
  templateUrl: "./senadores.component.html",
  styleUrls: ["./senadores.component.css"],
})
export class SenadoresComponent implements OnInit {
  senadores: Senador[] = [];

  constructor(private senadoresService: SenadoresService) {}

  ngOnInit(): void {
    const r = this.senadoresService.getSenadores();
    r.subscribe(senadores => {
      this.senadores = senadores;
    });
  }
}
