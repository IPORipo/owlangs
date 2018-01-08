import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeaderModule } from '../partials/header/header.module';
import { FriendsBoxComponent } from '../partials/friends-box/friends-box.component';
import { NavigationComponent } from '../partials/navigation/navigation.component';
import { PostModule } from '../partials/post/post.module';
import { RouterModule } from '@angular/router';
import { MakePostModule } from '../partials/make-post/make-post.module';
import { UserBlockModule } from '../partials/user-block/user-block.module';
import { NavigationModule } from '../partials/navigation/navigation.module';
import { ChatBoxModule } from '../partials/chat-box/chat-box.module';

@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    RouterModule,
    PostModule,
    MakePostModule,
    UserBlockModule,
    ChatBoxModule,
    NavigationModule
  ],
  declarations: [
    HomeComponent,
    FriendsBoxComponent,
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
