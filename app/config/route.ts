import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioComponent } from '../usuario/components/usuario.component';
import { HomeComponent } from '../home/components/home.component';
//import { PerfilComponent } from '../perfil/components/
//import { PerfilComponentForm } from '../../perfil/component/perfil.component.form';


//Configurações da rota
export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'usuario', component: UsuarioComponent },
    { path: 'usuario/:id', component: UsuarioComponent },
    { path: 'home', component: HomeComponent }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(routes);