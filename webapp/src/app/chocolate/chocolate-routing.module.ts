import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderGuard } from '../components/header/header.guard';
import { ChocolateDetailsComponent } from './chocolate-details';
import { ChocolateListComponent } from './chocolate-list';

const routes: Routes = [
  {
    path: 'chocolate/list/:keyword',
    component: ChocolateListComponent,
    canActivate: [HeaderGuard]
  },
  {
    path: 'chocolate/details/:brand/:type',
    component: ChocolateDetailsComponent,
    canActivate: [HeaderGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChocolateRoutingModule { }
