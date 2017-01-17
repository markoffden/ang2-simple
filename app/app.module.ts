import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { NavbarComponent }  from './components/navbar/navbar.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { HomeComponent } from './components/routes/home/home.component';
import { AboutComponent } from './components/routes/about/about.component';
import { routing } from './app.routing';
import { GithubSearchComponent } from './components/routes/github-search/github-search.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  imports:      [ BrowserModule, routing, HttpModule ],
  declarations: [
      AppComponent,
      NavbarComponent,
      JumbotronComponent,
      ProfileComponent,
      HomeComponent,
      AboutComponent,
      GithubSearchComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {}
