import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";     //Added later to make things work
import {HttpModule} from "@angular/http";       //Added later to make things work
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,                             //Added later to make things work   
    HttpModule                               //Added later to make things work
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
