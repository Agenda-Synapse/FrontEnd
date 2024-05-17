import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'perfilShop',
    loadChildren: () =>
      import('./pages/perfil-shop/perfil-shop.module').then(
        (m) => m.PerfilShopModule
      ),
  },
  {
    path: 'agendar',
    loadChildren: () =>
      import('./pages/agendar/agendar.module').then((m) => m.AgendarModule),
  },

  {
    path: 'hist-agenda',
    loadChildren: () =>
      import('./pages/hist-agenda/hist-agenda.module').then(
        (m) => m.HistAgendaModule
      ),
  },
  { path: 'loginprop', loadChildren: () => import('./pages/loginprop/loginprop.module').then(m => m.LoginpropModule) },
  { path: 'cadastroprop', loadChildren: () => import('./pages/cadastroprop/cadastroprop.module').then(m => m.CadastropropModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
