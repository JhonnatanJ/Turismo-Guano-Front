import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-actividades',
  templateUrl: './list-actividades.component.html',
  styleUrls: ['./list-actividades.component.css']
})
export class ListActividadesComponent{

  countEntities: number = 0;
  next: boolean = false;
  pagina: number = 1;





  cambiarPagina(num: number) {
    this.pagina = this.pagina + num;
    // this.getProductos(this.pagina);
    this.siguientePagina(this.pagina+1)
  }

  siguientePagina(sigPag: number) {
    let resp: number = 0;
    // // this.productoService
    //   .getAllProductos(sigPag)
    //   // .subscribe((allProductos) => {
    //     resp = allProductos.rows.length;
    //     if (resp > 0) {
    //       this.next = true;
    //     } else {
    //       this.next = false;
    //     }
    //   });
  }

  // articulos: Articulo[] = [];
  // termino: string = '';

  // constructor(private articuloService: ArticleService) {}

  // ngOnInit() {
  //   // this.getArticulos();
  // }

  // getArticulos() {
  //   this.articuloService.buscarArticulos().subscribe(
  //     (articulos) => {
  //       this.articulos = articulos;
  //     },
  //     (err) => {
  //       console.log(err);
  //     }
  //   );
  //   console.log(this.articulos);
  // }
}
