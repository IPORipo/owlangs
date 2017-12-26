import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { WordComponent } from './word/word.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user-name', component: UserComponent },
  { path: 'word', component: WordComponent },
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);

