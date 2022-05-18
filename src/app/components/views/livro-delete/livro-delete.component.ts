import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LivroService } from '../livro/livro.service';

@Component({
  selector: 'app-livro-delete',
  templateUrl: './livro-delete.component.html',
  styleUrls: ['./livro-delete.component.css']
})
export class LivroDeleteComponent implements OnInit {

  constructor( private service: LivroService,
    private route: ActivatedRoute,
    private router: Router ) { }

  ngOnInit(): void {
  }

}
