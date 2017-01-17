import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/routes/home.component';
import { AboutComponent } from './components/routes/about.component';
import { GithubSearchComponent } from './components/routes/github-search.component';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'github-search',
        component: GithubSearchComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
