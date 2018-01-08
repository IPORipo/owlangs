import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { appRouting } from './app.routing';
import { HomeModule } from './home/home.module';
import { UserModule } from './user/user.module';
import { WordModule } from './word/word.module';
import { ExcercicesModule } from './excercices/excercices.module';
import { JobsModule } from './jobs/jobs.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HomeModule,
    UserModule,
    WordModule,
    ExcercicesModule,
    JobsModule,
    appRouting
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
