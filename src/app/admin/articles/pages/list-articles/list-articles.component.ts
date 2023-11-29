import { Component, EventEmitter, OnInit } from '@angular/core';

import { ArticleService } from '../../../../services/article.service';
import { Articulo } from './../../../../entities/articulo.interface';

@Component({
  selector: 'app-list-articles',
  templateUrl: './list-articles.component.html',
  styleUrls: ['./list-articles.component.css'],
})
export class ListArticlesComponent implements OnInit {
  articulos: Articulo[] = [];
  termino: string = '';

  constructor(private articuloService: ArticleService) {}

  ngOnInit() {
    this.getArticulos();
  }

  getArticulos() {
    this.articuloService.buscarArticulos().subscribe(
      (articulos) => {
        this.articulos = articulos;
      },
      (err) => {
        console.log(err);
      }
    );
    console.log(this.articulos);
  }
}
