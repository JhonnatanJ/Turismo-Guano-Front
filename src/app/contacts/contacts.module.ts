import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import { ContactenosComponent } from './pages/contactenos/contactenos.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    ContactenosComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  exports: [
    ContactenosComponent
  ]
})
export class ContactsModule { }
