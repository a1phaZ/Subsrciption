import { NgModule }                                from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard }                               from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'main',
    loadChildren: () => import('./pages/main-list/main-list.module').then( m => m.MainListPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'form/:action',
    loadChildren: () => import('./pages/form-page/form-page.module').then( m => m.FormPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'detail/:id',
    loadChildren: () => import('./pages/detail-page/detail-page.module').then( m => m.DetailPagePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'registration',
    loadChildren: () => import('./pages/registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'verify-email',
    loadChildren: () => import('./pages/verify-email/verify-email.module').then( m => m.VerifyEmailPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },






];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
