import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/entities/Usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-list-usuarios',
  templateUrl: './list-usuarios.component.html',
  styleUrls: ['./list-usuarios.component.css'],
})
export class ListUsuariosComponent implements OnInit {
  countEntities: number = 0;
  next: boolean = false;
  pagina: number = 1;

  usuarios!: Usuario[];

  constructor(
    private router: Router,
    private usuarioServices: UsuarioService
  ) {}

  ngOnInit(): void {
    try {
      this.getUsuarios(this.pagina);
    } catch (error) {
      console.log(error);
    }
  }
    // ------------------------------------------------------ OPCIONES GENERALES

// ----------------------------------- RECARGAR
recargarTabla(){
  this.ngOnInit();
}

  crearUsuario() {
    this.router.navigate(['admin/create-usuario']);
  }

  editarUsuario(idUsuario: number) {
    this.router.navigate(['admin/create-usuario', idUsuario]);
  }

  deleteUsuario(idUsuario: number) {
    this.usuarioServices.deleteUsuario(idUsuario).subscribe(
      (statusUsuario) => {
        console.log(statusUsuario);
      },
      (err) => {
        console.log(err);
      }
    )
  }

  getUsuarios(pagina: number) {
    this.usuarioServices.getUsuarios(pagina).subscribe(
      (allUsuarios) => {
        this.usuarios = allUsuarios.rows;
        this.countEntities = allUsuarios.rows.length;
        this.siguientePagina(this.pagina + 1);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  // ----------------------------------------------------- PAGINADO

  cambiarPagina(num: number) {
    this.pagina = this.pagina + num;
    this.getUsuarios(this.pagina);
    this.siguientePagina(this.pagina + 1);
  }

  siguientePagina(sigPag: number) {
    let resp: number = 0;
    this.usuarioServices
      .getUsuarios(sigPag)
      .subscribe((allActividades) => {
        resp = allActividades.rows.length;
        if (resp > 0) {
          this.next = true;
        } else {
          this.next = false;
        }
      });
  }
}
