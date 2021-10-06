import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./pages/main-list/main-list.module').then( m => m.MainListPageModule)
  },
  {
    path: 'form/:action',
    loadChildren: () => import('./pages/form-page/form-page.module').then( m => m.FormPageModule)
  },
  {
    path: 'detail/:id',
    loadChildren: () => import('./pages/detail-page/detail-page.module').then( m => m.DetailPagePageModule)
  }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
