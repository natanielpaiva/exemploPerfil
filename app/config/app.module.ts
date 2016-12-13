import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
//Adicionar essa linha
import { AppComponent } from './app.component';
import { UsuarioComponent } from './../usuario/components/usuario.component';
import { ExemploComponent } from './../exemplo/components/exemplo.component';
import { HttpModule } from '@angular/http';
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule],
    //Adicionar essa linha
    declarations: [
        AppComponent,
        UsuarioComponent,
        ExemploComponent
    ],
    //Adicionar essa linha
    bootstrap: [AppComponent]
})
export class AppModule { }