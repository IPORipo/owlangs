import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { JobsComponent } from './jobs.component';
import { NavigationModule } from '../partials/navigation/navigation.module';
import { UserBlockModule } from '../partials/user-block/user-block.module';
import { HeaderModule } from '../partials/header/header.module';
import { MakePostModule } from '../partials/make-post/make-post.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HeaderModule,
    NavigationModule,
    MakePostModule,
    UserBlockModule
  ],
  declarations: [JobsComponent],
  exports: [JobsComponent]
})
export class JobsModule { }
