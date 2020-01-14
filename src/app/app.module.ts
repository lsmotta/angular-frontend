import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FollowersListComponent } from './followers-list/followers-list.component';
import { FollowerService } from './follower.service';
import { PostbyhourService } from './postbyhour.service';
import { PostbyhashtagService } from './postbyhashtag.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostbyhourListComponent } from './postbyhour-list/postbyhour-list.component';
import { PostbyhashtagListComponent } from './postbyhashtag-list/postbyhashtag-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FollowersListComponent,
    PostbyhourListComponent,
    PostbyhashtagListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [ FollowerService, PostbyhourService, PostbyhashtagService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
