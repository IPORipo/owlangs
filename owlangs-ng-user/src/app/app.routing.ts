import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { WordComponent } from './word/word.component';
import { ExcercicesComponent } from './excercices/excercices.component';
import { JobsComponent } from './jobs/jobs.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user-name', component: UserComponent },
  { path: 'words', component: WordComponent},
  { path: 'excercices', component: ExcercicesComponent },
  { path: 'jobs', component: JobsComponent },
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);

