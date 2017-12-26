import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeaderModule } from '../partials/header/header.module';
import { FriendsBoxComponent } from '../partials/friends-box/friends-box.component';
import { MakePostComponent } from '../partials/make-post/make-post.component';
import { UserBlockComponent } from '../partials/user-block/user-block.component';
import { NavigationComponent } from '../partials/navigation/navigation.component';
import { PostModule } from '../partials/post/post.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    RouterModule,
    PostModule
  ],
  declarations: [
    HomeComponent,
    FriendsBoxComponent,
    MakePostComponent,
    UserBlockComponent,
    NavigationComponent
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
