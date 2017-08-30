import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPageModule } from '../pages/login/login.module';

import { StatusBar } from '@ionic-native/status-bar';
import {HttpModule} from "@angular/http";
import { SplashScreen } from '@ionic-native/splash-screen';
import { VagaProvider } from '../providers/vaga/vaga';

import {AngularFireModule, FirebaseAppConfig} from 'angularfire2';
import {SignupPage} from '../pages/signup/signup';
import {SigninPage} from '../pages/signin/signin';

const firebaseAppConfig: FirebaseAppConfig = {

    apiKey: "AIzaSyBQSBz2I0nLyyc65rbmdENMNF0yaDL5Pi0",
    authDomain: "workapp-857b1.firebaseapp.com",
    databaseURL: "https://workapp-857b1.firebaseio.com",
    storageBucket: "",
    messagingSenderId: "815752178976"
  };


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    SignupPage,
    SigninPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    LoginPageModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseAppConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    SignupPage,
    SigninPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    VagaProvider,
  ]
})
export class AppModule {}
