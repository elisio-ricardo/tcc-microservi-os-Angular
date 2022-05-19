import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Livro } from "../livro.model";
import { LivroService } from "../livro.service";

@Component({
  selector: "app-livro-update",
  templateUrl: "./livro-update.component.html",
  styleUrls: ["./livro-update.component.css"],
})
export class LivroUpdateComponent implements OnInit {
  livro: Livro = {
    id: "",
    author: "",
    title: "",
    price: "",
    launchDate: new Date("2022-05-17"),
  };

  title = new FormControl("", [Validators.minLength(3)]);
  author = new FormControl("", [Validators.minLength(3)]);
  price = new FormControl("", [Validators.minLength(1)]);

  constructor(
    private service: LivroService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    //Sempre que a pagina carrega inicia esses metodos
    this.livro.id = this.route.snapshot.paramMap.get("id")!;
    this.findById();
  }

  findById(): void {
    this.service.findById(this.livro.id!).subscribe((resposta) => {
      this.livro = resposta;
    });
  }

  update(): void {   
    this.service.update(this.livro).subscribe(
      (resposta) => {
        this.router.navigate([`livro`]);
        this.service.mensagem("Livro alterado com sucesso");
      },
      (err) => {
        this.router.navigate([`livros`]);
        this.service.mensagem("Erro ao alterar Livro, Tente novamente !!");
      }
    );
  }

  cancel(): void {
    this.router.navigate([`livro`]);
  }

  getMessage() {
    if (this.title.invalid) {
      return "O campo Titulo deve conter ao menos 3 a 100 caracteres";
    } else if (this.author.invalid) {
      return "O campo author deve ter ao menos 3 a 100 caracteres";
    } else if (this.price.invalid) {
      return "Adicione um valor valido";
    }

    return false;
  }
}
