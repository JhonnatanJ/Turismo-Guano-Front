import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/entities/Usuario';
import { CreateUsuarioDto } from 'src/app/entities/dto/usuario/create-usuario.dto';
import { UpdateUsuarioDto } from 'src/app/entities/dto/usuario/update-usuario.dto';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-create-usuario',
  templateUrl: './create-usuario.component.html',
  styleUrls: ['./create-usuario.component.css'],
})
export class CreateUsuarioComponent implements OnInit {
  idUsuario!: number;

  usuario: Usuario = new Usuario();

  constructor(
    private router: Router,
    private _router: ActivatedRoute,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    this.idUsuario = parseInt(this._router.snapshot.paramMap.get('id')!);

    if (this.idUsuario) {
      this.getUsuarioById(this.idUsuario);
    }
  }

  onCreate(usuarioForm: NgForm) {
    const auxUsuario: CreateUsuarioDto = {
      nombres: usuarioForm.value.nombres,
      apellidos: usuarioForm.value.apellidos,
      email: usuarioForm.value.email,
      contrasenia: usuarioForm.value.password,
    };
    this.createUsuario(auxUsuario);
    this.router.navigate(['admin/list-usuarios']);
  }

  onUpdate(usuarioForm: NgForm) {
    const auxUsuario: UpdateUsuarioDto = {
      newNombres: usuarioForm.value.nombres,
      newApellidos: usuarioForm.value.apellidos,
      newEmail: usuarioForm.value.email,
      newContrasenia: usuarioForm.value.password,
    };
    this.updateUsuario(auxUsuario);
    this.router.navigate(['admin/list-usuarios']);
  }

  getUsuarioById(idProducto: number) {
    this.usuarioService.getUsuarioById(idProducto).subscribe(
      (usuario) => {
        this.usuario = usuario;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  createUsuario(usuario: CreateUsuarioDto) {
    this.usuarioService.createUsuario(usuario).subscribe(
      (usuario) => {
        this.usuario = usuario;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  updateUsuario(usuario: UpdateUsuarioDto) {
    this.usuarioService.updateUsuario(usuario, this.idUsuario).subscribe(
      (usuario) => {
        this.usuario = usuario;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
