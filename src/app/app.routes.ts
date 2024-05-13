import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { PersonalComponent } from './pages/personal/personal.component';
import { Error404Component } from './pages/error404/error404.component';
import { DetalesPersonalComponent } from './pages/detales-personal/detales-personal.component';
import { FormularioEditarComponent } from './pages/formulario-editar/formulario-editar.component';

export const routes: Routes = [
    { path: "home", component:HomeComponent},
    { path: "nosotros", component:NosotrosComponent },
    { path: "personal", component: PersonalComponent },
    { path: "personal/:idPersonal", component:DetalesPersonalComponent},
    { path: 'editar/:idNosotros', component:FormularioEditarComponent},

    { path: '', redirectTo: 'home', pathMatch:'full'},
    { path: '**', component: Error404Component }
];
