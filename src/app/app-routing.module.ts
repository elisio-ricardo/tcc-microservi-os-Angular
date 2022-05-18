import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/views/home/home.component";
import { LivroDeleteComponent } from "./components/views/livro-delete/livro-delete.component";
import { LivroCreateComponent } from "./components/views/livro/livro-create/livro-create.component";
import { LivroReadComponent } from "./components/views/livro/livro-read/livro-read.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "livro",
    component: LivroReadComponent,
  },
  {
    path: "livro/create",
    component: LivroCreateComponent,
  },
  {
    path: "livro/delete/:id",
    component: LivroDeleteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
