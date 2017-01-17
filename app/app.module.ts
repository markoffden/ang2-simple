import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { NavbarComponent }  from './components/navbar/navbar.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { HomeComponent } from './components/routes/home.component';
import { AboutComponent } from './components/routes/about.component';
import { routing } from './app.routing';
import { GithubSearchComponent } from './components/routes/github-search.component';

@NgModule({
  imports:      [ BrowserModule, routing ],
  declarations: [
      AppComponent,
      NavbarComponent,
      JumbotronComponent,
      HomeComponent,
      AboutComponent,
      GithubSearchComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {}
