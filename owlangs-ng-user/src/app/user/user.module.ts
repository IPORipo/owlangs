import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { HeaderModule } from '../partials/header/header.module';
import { PostModule } from '../partials/post/post.module';


@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    PostModule
  ],
  declarations: [
    UserComponent,
  ],
  exports: [UserComponent]
})
export class UserModule { }
