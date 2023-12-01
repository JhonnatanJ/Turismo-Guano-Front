import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Login } from 'src/app/entities/login.interface';

@Component({
  selector: 'shared-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  credentials!: Login;

  onSubmit(loginForm: NgForm){
    console.log(loginForm.value);
  }

}
