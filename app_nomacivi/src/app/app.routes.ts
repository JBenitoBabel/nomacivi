import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'story',
    loadComponent: () => import('./pages/civi/story/story.page').then( m => m.StoryPage)
  },
  {
    path: 'planet',
    loadComponent: () => import('./pages/civi/planet/planet.page').then( m => m.PlanetPage)
  },
  {
    path: 'encampment',
    loadComponent: () => import('./pages/civi/encampment/encampment.page').then( m => m.EncampmentPage)
  },
  {
    path: 'community',
    loadComponent: () => import('./pages/civi/community/community.page').then( m => m.CommunityPage)
  },
  {
    path: 'settings',
    loadComponent: () => import('./pages/settings/settings.page').then( m => m.SettingsPage)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '*',
    redirectTo: 'home',
    pathMatch: 'full',
  },

];
