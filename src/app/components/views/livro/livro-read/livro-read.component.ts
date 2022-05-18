import {  Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Livro } from "../livro.model";
import { LivroService } from "../livro.service";

@Component({
  selector: "app-livro-read",
  templateUrl: "./livro-read.component.html",
  styleUrls: ["./livro-read.component.css"],
})
export class LivroReadComponent implements OnInit {
  livros: Livro[] = [];

  displayedColumns: string[] = ["id", "autor", "titulo", "precos", "acoes"];

  constructor(private service: LivroService, private router: Router) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe((resposta) => {
      console.log(resposta);
      this.livros = resposta;
    });
  }

  navegarParaLivroCreate() {
    this.router.navigate(["livro/create"]);
  }
}
