import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { SectionsModule } from './sections/sections.module';
import { ContactsModule } from './contacts/contacts.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    SectionsModule,
    ContactsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
