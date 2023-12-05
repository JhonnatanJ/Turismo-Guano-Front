import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/entities/login.dto';
import { Usuario } from 'src/app/entities/paged-producto.interface';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'shared-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  logged: boolean = JSON.parse(sessionStorage.getItem('logged')!);
  usuario!: Usuario;
  credentials!: Login;

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {
    this.actualizarStatus();
  }

  actualizarStatus() {
    this.logged = JSON.parse(sessionStorage.getItem('logged')!);
  }

  onSubmit(loginForm: NgForm) {
    this.loginService.autenticar(loginForm.value).subscribe(
      (usuario) => {
        if (usuario) {
          this.loginService.guardarDatos(true, usuario);
          this.logged = true;
          alert('INICIÓ SESIÓN CON ÉXITO');
          this.router.navigate(['admin']);
        } else {
          this.loginService.cerrarSesion(false);
          alert('ERROR DE CREDENCIALES');
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  cerrarSesion() {
    this.loginService.cerrarSesion(false);
    this.logged = false;
    this.actualizarStatus();
    this.router.navigate(['']);
  }
}
