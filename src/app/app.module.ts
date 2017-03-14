import { appRoutes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule, AuthMethods, AuthProviders } from 'angularfire2';
import { AppComponent } from './app.component';
import { MaterialModule } from '@angular/material';
import { VoteComponent } from './vote/vote.component';
import { VoterListComponent } from './voter-list/voter-list.component';
import { RouterModule } from '@angular/router';
import 'hammerjs';

const firebaseConfig = {
    apiKey: 'AIzaSyCVTttrkpRDEMUG1fF2rzu3LEwNZ_SL8w4',
    authDomain: 'angularfire-sydney.firebaseapp.com',
    databaseURL: 'https://angularfire-sydney.firebaseio.com',
    storageBucket: 'angularfire-sydney.appspot.com',
    messagingSenderId: '574024598150'
  };

  const firebaseAuthConfig = {
    method: AuthMethods.Anonymous,
    provider: AuthProviders.Anonymous
  };

@NgModule({
  declarations: [
    AppComponent,
    VoteComponent,
    VoterListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    MaterialModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
