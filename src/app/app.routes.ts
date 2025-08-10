import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full', title: 'Home' },
  {
    path: 'home',
    loadComponent: () => import('./components/home/home').then((c) => c.Home),
    title: 'Home',
  },
  {
    path: 'trendify',
    loadComponent: () =>
      import('./components/trendify/trendify').then((c) => c.Trendify),
    title: 'Trendify',
  },
  {
    path: 'products',
    loadComponent: () =>
      import('./components/products/products').then((c) => c.Products),
    title: 'Products',
  },
  {
    path: '**',
    loadComponent: () =>
      import('./components/not-found/not-found').then((c) => c.NotFound),
    title: 'NotFound',
  },
];
