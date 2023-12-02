import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/entities/login.interface';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'shared-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  logged: boolean = false;

  credentials!: Login;
  constructor(private loginService: LoginService, private router: Router) {}

  onSubmit(loginForm: NgForm) {
    const respuesta = this.loginService.autenticar(loginForm.value);
    if (respuesta) {
      alert('INICIÓ SESIÓN CON ÉXITO');
      this.logged = this.loginService.LOGGED;
      this.router.navigate(['admin']);
    } else {
      return alert('ERROR DE CREDENCIALES');
    }
    return respuesta;
  }

  cerrarSesion() {
    this.loginService.logStatus(false);
    this.logged = this.loginService.LOGGED;
    this.router.navigate(['']);
  }
}
