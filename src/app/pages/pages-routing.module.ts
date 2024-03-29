import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    // loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },

  {
    path: 'about',
  },

  {
    path: 'experience',
  },
  {
    path: 'projects',
  },
  {
    path: 'contact-me',
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
