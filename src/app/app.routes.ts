import { Routes } from '@angular/router';
import {CounterPageComponent} from './pages/counter-page/counter-page.component';
import {HeroPageComponent} from './pages/hero/hero-page/hero-page.component';
import {DragonballPageComponent} from './pages/dragonball/dragonball-page/dragonball-page.component';
import {DragonballSuperPageComponent} from './pages/dragonball-super/dragonball-page/dragonball-super-page.component';

export const routes: Routes = [

  //Inicio
  {
    path: '',
    component: CounterPageComponent
  },
  {
    path: 'hero',
    component: HeroPageComponent
  },
  {
    path: 'dragonball',
    component: DragonballPageComponent
  },
  {
    path: 'dragonball-super',
    component: DragonballSuperPageComponent
  },
  //Cualquier ruta no establecida será redireccionada a Inicio
  {
    path: '**',
    redirectTo: ''
  },

];
