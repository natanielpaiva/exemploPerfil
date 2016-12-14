import { Component, OnInit } from '@angular/core';
import { Usuario } from '../class/usuario';
import { UsuarioService } from '../service/usuario.service';
//nataniel.paiva@gmail.com
@Component({
    selector: 'usuario',
    templateUrl: 'app/usuario/templates/usuario.template.html',
    providers: [UsuarioService]
})
export class UsuarioComponent implements OnInit {
    usuarios: Usuario[];
    usuarioObject = new Usuario();
    perfis = [
        { nome: "Admin" },
        { nome: "Oreia" },
        { nome: "Professor" }
    ];

    errorMessage: any;
    i: number;

    constructor(private usuarioService: UsuarioService) {
    }
    edit = false;

    deletarUsuario(id, i): void {
        this.i = i;
        this.usuarioService.deletarUsuario(id)
            .subscribe(
            reponse => this.usuarios.splice(this.i, 1),
            error => this.errorMessage = <any>error);
    }

    salvarUsuario(usuario: Usuario) {
        if (!usuario.nome) { return; }
        console.log(usuario);
        this.usuarioService.salvarUsuario(usuario)
            .subscribe(
            usuario => this.popularLista(usuario),
            error => this.errorMessage = <any>error
            );
    }

    popularLista(usuario: Usuario) {
        this.usuarios.push(usuario);
        this.usuarioObject = new Usuario();
        this.usuarioObject.perfil = this.perfis[0];
    }

    public editarUsuario(usuario, persistir = false): void {
        this.edit = true;
        
        for(var p in this.perfis){
            if (usuario.perfil.nome === this.perfis[p].nome){
                usuario.perfil = this.perfis[p];
            }
        }
        
        this.usuarioObject = usuario;

        if (persistir) {
            this.usuarioObject = new Usuario();
            this.edit = false;
            this.usuarioObject.perfil = this.perfis[0];
        }
    }

    public listar(): void {
        this.usuarioService.getListUsuario()
            .subscribe(
            usuarios => this.usuarios = usuarios,
            error => this.errorMessage = <any>error);
    }

    ngOnInit(): void {
        this.listar();
        this.usuarioObject.perfil = this.perfis[2];
    }
}
