import { Component } from '@angular/core';
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
export class HeaderComponent {
  logged: boolean = false;
  usuario!: Usuario;

  credentials!: Login;
  constructor(private loginService: LoginService, private router: Router) {}

  onSubmit(loginForm: NgForm) {
    this.loginService.autenticar(loginForm.value).subscribe(
      (usuario) => {
        this.usuario = usuario;
        if (this.usuario) {
          alert('INICIÓ SESIÓN CON ÉXITO');
          this.loginService.logStatus(true);
          this.logged = this.loginService.LOGGED;
          this.router.navigate(['admin']);
        } else {
          return alert('ERROR DE CREDENCIALES');
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  cerrarSesion() {
    this.loginService.logStatus(false);
    this.logged = this.loginService.LOGGED;
    this.router.navigate(['']);
  }
}
