import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Livro } from "./livro.model";

@Injectable({
  providedIn: "root",
})
export class LivroService {
  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar) {
    //tem que por para poder fazer as requisiçoes http
  }

  findAll(): Observable<Livro[]> {
    const url = `${this.baseUrl}/livros`;
    return this.http.get<Livro[]>(url);
  }

  create(livro: Livro): Observable<Livro> {
    const url = `${this.baseUrl}/livros`;
    return this.http.post<Livro>(url, livro);
  }

  mensagem(str: String): void {
    //para usar a mensagem confirmando a criação, usando o modulo snack
    this._snack.open(`${str}`, "OK", {
      horizontalPosition: "end",
      verticalPosition: "top",
      duration: 3000,
    });
  }
}
