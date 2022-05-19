import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Livro } from "../livro.model";
import { LivroService } from "../livro.service";

@Component({
  selector: "app-livro-delete",
  templateUrl: "./livro-delete.component.html",
  styleUrls: ["./livro-delete.component.css"],
})
export class LivroDeleteComponent implements OnInit {
  id_livro: String = "";

  livro: Livro = {
    author: "",
    price: "",
    title: "",
    launchDate: new Date(),
  };

  constructor(
    private service: LivroService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id_livro = this.route.snapshot.paramMap.get("id")!;
    this.livro.id = this.route.snapshot.paramMap.get("id")!;
    this.findById();
  }

  findById(): void {
    this.service.findById(this.livro.id!).subscribe((resposta) => {
      this.livro = resposta;
    });
  }

  delete(): void {
    this.service.delete(this.livro.id!).subscribe(
      () => {
        this.router.navigate([`livro`]);
        this.service.mensagem("Livro Deletado com Sucesso!");
      },
      (err) => {
        this.router.navigate([`livro`]);
        this.service.mensagem("Falha ao Deletar Livro! Tente novamente !");
      }
    );
  }

  cancel(): void {
    this.router.navigate([`livro`]);
  }
}
