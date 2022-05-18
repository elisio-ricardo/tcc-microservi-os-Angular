import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Livro } from "../livro.model";
import { LivroService } from "../livro.service";

@Component({
  selector: "app-livro-create",
  templateUrl: "./livro-create.component.html",
  styleUrls: ["./livro-create.component.css"],
})
export class LivroCreateComponent implements OnInit {
  livro: Livro = {
    author: "",
    price: "",
    title: "",
    launchDate: new Date("2022-05-17"),
  };

  author = new FormControl("", [Validators.minLength(3)]);
  price = new FormControl("", [Validators.minLength(1)]);
  title = new FormControl("", [Validators.minLength(10)]);

  constructor(
    private service: LivroService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  create(): void {
    console.log(this.livro);
    this.service.create(this.livro).subscribe(
      (resposta) => {
        console.log(this.livro);
        this.router.navigate(["livro"]);
        this.service.mensagem("Livro criado com sucesso!");
      },
      (err) => {
        for (let i = 0; i < err.error.errors.length; i++) {
          this.service.mensagem(err.error.errors[i].message);
        }
        this.router.navigate([`livro`]);
        this.service.mensagem("Erro ao crias novo Livro! tente novamente!");
      }
    );
  }

  cancel(): void {
    this.router.navigate(["livro"]);
  }

  getMessage() {
    if (this.author.invalid) {
      return "O campo Autor deve conter no entre 3 e 100 caracteres";
    }

    if (this.price.invalid) {
      return "O campo Preço deve conter apenas numeros";
    }

    if (this.title.invalid) {
      return "O campo Titulo deve conter no entre 10 e 2.000.000 caracteres";
    }
    return false;
  }
}
