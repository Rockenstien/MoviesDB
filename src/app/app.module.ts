import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AnimeComponent } from './components/home/anime/anime.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { WordCutPipe } from './pipes/word-cut.pipe';
import { AnimeDetailsComponent } from './components/home/anime-details/anime-details.component';
import { AuthComponent } from './components/auth/auth.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AnimeComponent,
    HomeComponent,
    WordCutPipe,
    AnimeDetailsComponent,
    AuthComponent,
    PageNotFoundComponent,
    LoadingSpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    HttpClient,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
