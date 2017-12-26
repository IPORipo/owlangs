import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { appRouting } from './app.routing';
import { HomeModule } from './home/home.module';
import { UserModule } from './user/user.module';
import { WordComponent } from './word/word.component';

@NgModule({
  declarations: [
    AppComponent,
    WordComponent,
  ],
  imports: [
    BrowserModule,
    HomeModule,
    UserModule,
    appRouting
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
