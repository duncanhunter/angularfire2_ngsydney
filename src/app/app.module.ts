import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule, AuthMethods, AuthProviders } from 'angularfire2';
import { AppComponent } from './app.component';

const firebaseConfig = {
    apiKey: 'AIzaSyAN7I4tEdPXG91pTr2bnt7pCrk1Or9tsMg',
    authDomain: 'angularfire-ngsydney.firebaseapp.com',
    databaseURL: 'https://angularfire-ngsydney.firebaseio.com',
    storageBucket: 'angularfire-ngsydney.appspot.com',
    messagingSenderId: '181898057682'
  };

  const firebaseAuthConfig = {
    providers: AuthProviders.Anonymous,
    methods: AuthMethods.Anonymous
  };

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
