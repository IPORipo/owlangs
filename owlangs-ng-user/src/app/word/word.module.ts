import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WordComponent } from './word.component';
import { HeaderModule } from '../partials/header/header.module';
import { PostModule } from '../partials/post/post.module';
import { MakePostModule } from '../partials/make-post/make-post.module';
import { UserBlockModule } from '../partials/user-block/user-block.module';
import { NavigationModule } from '../partials/navigation/navigation.module';

@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    PostModule,
    MakePostModule,
    UserBlockModule,
    NavigationModule
  ],
  declarations: [ WordComponent ],
  exports: [ WordComponent ]
})
export class WordModule { }
