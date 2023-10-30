import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import { ContactenosComponent } from './pages/contactenos/contactenos.component';



@NgModule({
  declarations: [
    ContactenosComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    ContactenosComponent
  ]
})
export class ContactsModule { }
