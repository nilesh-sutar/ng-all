import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('src/app/modules/home/home.module').then((m) => m.HomeModule),
          data : {
            title : 'Home'
          }
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('src/app/modules/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
          data : {
            title : 'Dashboard'
          }
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
