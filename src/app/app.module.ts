import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';


export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBj9XabgD32Wi2qUrKm7AZo4ZjQErXFKRo",
    authDomain: "tmcosm-48ed4.firebaseapp.com",
    databaseURL: "https://tmcosm-48ed4.firebaseio.com",
    projectId: "tmcosm-48ed4",
    storageBucket: "tmcosm-48ed4.appspot.com",
    messagingSenderId: "557253961976"
  }
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
