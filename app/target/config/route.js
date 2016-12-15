"use strict";
var router_1 = require('@angular/router');
var usuario_component_1 = require('../usuario/components/usuario.component');
var home_component_1 = require('../home/components/home.component');
//import { PerfilComponent } from '../perfil/components/
//import { PerfilComponentForm } from '../../perfil/component/perfil.component.form';
//Configurações da rota
exports.routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'usuario', component: usuario_component_1.UsuarioComponent },
    { path: 'usuario/:id', component: usuario_component_1.UsuarioComponent },
    { path: 'home', component: home_component_1.HomeComponent }
];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=route.js.map